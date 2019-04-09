\[%settitle Profiling FHIR%\]
\[%file newnavbar%\] \[%profilesheader examples%\]
Slicing and Discriminator Examples
----------------------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

<span id="contacts"></span>
### Slicing Patient Telecom element

One common use of slicing is to describe different constraints on different kinds of patient contact details. In this example, Patient.telecom is defined as: ContactPoint \[0..\*\] where the ContactPoint has system, value and use.

Consider the case where the profile should say:

-   There must be a single home phone number
-   The patient may have a work phone number
-   The patient may have an email address
-   No other types of contact are allowed

An example of a patient resource that meets these rules:

``` xml
<Patient>                         
... snip ...
  <telecom>                       
    <system value="phone" />      
    <use value="home" />          
    <value value="5551234567" />  
  </telecom>
  <telecom>                       
    <system value="email" />      
    <value value="someone@acme.org" />  
  </telecom>
... snip ...
</Patient>
```

To do this, the profile that implements these rules needs to do the following:

-   On the base Patient.telecom element: define that slicing is discriminated by system and use, and that the slices are closed ("No other types of contact are allowed"). Order is left unfixed
-   Then define 3 slices:
    1.  home phone: fixed values for system and use, and slice cardinality 1..1
    2.  work phone: fixed values for system and use, and slice cardinality 0..1
    3.  email: fixed value for system, cardinality 0..0 for use, and slice cardinality 0..1

In a StructureDefinition, this will look like:

``` xml
  <!-- setting up the slicing -->
  <element> 
    <path value="Patient.telecom"/>
    <slicing>
      <discriminator>
        <type value="value"/>
        <path value="system"/>
      </discriminator/>
      <discriminator value="system"/>
        <type value="value"/>
        <path value="use"/>
      </discriminator/>
      <rules value="closed"/>
    </slicing>
    <!-- net cardinality rules -->
    <min value="1"/>
    <max value="3"/>
  </element>
  
  <!-- first slice: home phone -->
  <element> 
    <path value="Patient.telecom"/>
    <name value="HomePhone"/> <!-- mandatory - gives the slice a name -->
    <min value="1"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.system"/>
    <min value="1"/>
    <fixedCode value="phone"/>
  </element>
  <element> 
    <path value="Patient.telecom.value"/>
    <min value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.use"/>
    <min value="1"/>
    <fixedCode value="home"/>
  </element>
  
  <!-- second slice: work phone -->
  <element> 
    <path value="Patient.telecom"/>
    <name value="WorkPhone"/> <!-- mandatory - gives the slice a name -->
    <min value="0"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.system"/>
    <min value="1"/>
    <fixedCode value="phone"/>
  </element>
  <element> 
    <path value="Patient.telecom.value"/>
    <min value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.use"/>
    <min value="1"/>
    <fixedCode value="work"/>
  </element>
  
  <!-- third slice: email -->
  <element> 
    <path value="Patient.telecom"/>
    <name value="Email"/> <!-- mandatory - gives the slice a name -->
    <min value="0"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.system"/>
    <min value="1"/>
    <fixedCode value="email"/>
  </element>
  <element> 
    <path value="Patient.telecom.value"/>
    <min value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.use"/>
    <max value="0"/>
  </element>
```

Note: much of the definition detail has been left out, and only the parts relevant to the pattern are shown. Also, providing a fixed value makes the minimum cardinality irrelevant, but it is shown here for completeness.

This table illustrates the relationship between the instance and the ElementDefinitions:

|                                           |                        |           |         |         |           |
|-------------------------------------------|------------------------|-----------|---------|---------|-----------|
|                                           | **Path**               | **Name**  | **Min** | **Max** | **Fixed** |
| &lt;Patient&gt;                           | Patient                |           |         |         |           |
|                                           | Patient.telecom        |           | 1       | 3       |           |
| &lt;telecom&gt;                           | Patient.telecom        | HomePhone | 1       | 1       |           |
|  &lt;system value="phone" /&gt;           | Patient.telecom.system |           | 1       | 1       | phone     |
|  &lt;value value="5551234567" /&gt;       | Patient.telecom.value  |           | 1       | 1       |           |
|  &lt;use value="home" /&gt;               | Patient.telecom.use    |           | 1       | 1       | home      |
| &lt;/telecom&gt;                          |                        |           |         |         |           |
|                                           | Patient.telecom        | WorkPhone | 0       | 1       |           |
| &lt;telecom&gt;                           | Patient.telecom        | Email     | 0       | 1       |           |
|  &lt;system value="email" /&gt;           | Patient.telecom.system |           | 1       | 1       | email     |
|  &lt;value value="someone@acme.org" /&gt; | Patient.telecom.value  |           | 1       | 1       |           |
|  &lt;/telecom&gt;                         | Patient.telecom.use    |           |         |         |           |

<span id="fixed-order"></span>
### Fixed Order Slicing

A variant to this that looks simpler but turns out to be deceptively complicated is to fix the order and make all slices mandatory. In this case the profile says:

-   The cardinality of `telecom` is 3..3
-   The slicing is closed, and ordered, no discriminator
-   The first slice is home phone number
-   The second slice is work phone number
-   The third slice is email address

An example of a patient resource that meets these rules:

``` json
{
  "resourceType" : "Patient",
  "telecom" : [
    {
      "system" : "phone",
      "value" : "5551234567",
      "use" : "home"
    },
    {
      "system" : "phone",
      "value" : "5551234567",
      "use" : "work"
    },
    {
      "system" : "email",
      "value" : "someone@acme.org"
    }
  ]
}
```

In a StructureDefinition, this will look like:

``` xml
  <!-- setting up the slicing -->
  <element> 
    <path value="Patient.telecom"/>
    <slicing>
      <!-- invariant: there SHALL be discriminator or description -->
      <description value="No discriminator needed since offsets are fixed"/>
      <rules value="closed"/>
      <ordered value="true"/>
    </slicing>
    <!-- cardinality rules -->
    <min value="3"/>
    <max value="3"/>
  </element>
  
  <!-- first slice: home phone -->
  <element> 
    <path value="Patient.telecom"/>
    <name value="HomePhone"/> <!-- mandatory - gives the slice a name -->
    <min value="1"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.system"/>
    <min value="1"/>
    <fixedCode value="phone"/>
  </element>
  <element> 
    <path value="Patient.telecom.value"/>
    <min value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.use"/>
    <min value="1"/>
    <fixedCode value="home"/>
  </element>
  
  <!-- second slice: work phone -->
  <element> 
    <path value="Patient.telecom"/>
    <name value="WorkPhone"/> <!-- mandatory - gives the slice a name -->
    <min value="0"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.system"/>
    <min value="1"/>
    <fixedCode value="phone"/>
  </element>
  <element> 
    <path value="Patient.telecom.value"/>
    <min value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.use"/>
    <min value="1"/>
    <fixedCode value="work"/>
  </element>
  
  <!-- third slice: email -->
  <element> 
    <path value="Patient.telecom"/>
    <name value="Email"/> <!-- mandatory - gives the slice a name -->
    <min value="0"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.system"/>
    <min value="1"/>
    <fixedCode value="email"/>
  </element>
  <element> 
    <path value="Patient.telecom.value"/>
    <min value="1"/>
  </element>
  <element> 
    <path value="Patient.telecom.use"/>
    <max value="0"/>
  </element>
```

A simple content model like this is attractive because it's both easier to specify and to work with. There's no need to think about the values of system and use - implementers can just grab first telecom value etc.

The problem with this approach is that such simple requirements are rarely valid in production healthcare systems, and even if they are valid during implementation, they rarely stay that way. Implementing multiple applications based on simple offsets will make the overall eco-system fragile against change, either internally, or as the scope of the eco-system grows.

Since the discriminator could be system+use in this case, it's best for future compatibility to specify it anyway.

<span id="blood-pressure"></span>
### Blood Pressure Example

Another use of Slicing is for Blood Pressure Measurements, where the profile says:

-   There must be two components
-   The first has LOINC code 8480-6, and a quantity
-   The second has LOINC code 8462-4, and a quantity
-   Other components are allowed (posture, etc., but not profiled in the base blood pressure profile)

An example of an observation resource that conforms such constrained StructureDefinitions looks like this:

``` xml
<Observation>                         
  ... 
  <component>                       
    <code>                       
      <coding>                       
        <system value="http://loinc.org" />      
        <code value="8480-6" />  
        <display value="Systolic blood pressure" />  
      </coding>                       
    </code>                       
    <valueQuantity ... />                       
  </component>
  <component>                       
    <code>                       
      <coding>                       
        <system value="http://loinc.org" />      
        <code value="8462-4" />  
        <display value="Diastolic blood pressure" />  
      </coding>                       
    </code>                       
    <valueQuantity .../>                       
  </component>
</Patient>
```

To do this, the profile that implements these rules needs to do the following:

-   On the base Observation.component element: define that slicing is discriminated by code. Order is left unfixed, and rules are left open.
-   Then define 2 slices:
    1.  systolic: fixed values for code, cardinality 1..1, value is a Quantity
    2.  diastolic: fixed values for code, cardinality 1..1, value is a Quantity

In a StructureDefinition, this will look like:

``` xml
  <!-- setting up the slicing -->
  <element> 
    <path value="Observation.component"/>
    <slicing>
      <discriminator value="system"/>
        <type value="value"/>
        <path value="code"/>
      </discriminator/>
    </slicing>
    <!-- net cardinality rules -->
    <min value="2"/>
    <max value="*"/>
  </element>
  
  <!-- first slice: systolic -->
  <element> 
    <path value="Observation.component"/>
    <name value="systolic"/> <!-- mandatory - gives the slice a name -->
    <min value="1"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Observation.component.code"/>
    <min value="1"/>
    <fixedCodeableConcept>
      <coding>                       
        <system value="http://loinc.org" />      
        <code value="8480-6" />  
        <display value="Systolic blood pressure" />  
      </coding>                       
    </fixedCodeableConcept>
  </element>
  <element> 
    <path value="Observation.component.valueQuantity"/>
    <min value="1"/>
  </element>
  
  <!-- second slice: diastolic -->
  <element> 
    <path value="Observation.component"/>
    <name value="diastolic"/> <!-- mandatory - gives the slice a name -->
    <min value="1"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Observation.component.code"/>
    <min value="1"/>
    <fixedCodeableConcept>
      <coding>                       
        <system value="http://loinc.org" />      
        <code value="8462-4" />  
        <display value="Diastolic blood pressure" />  
      </coding>                       
    </fixedCodeableConcept>
  </element>
  <element> 
    <path value="Observation.component.valueQuantity"/>
    <min value="1"/>
  </element>
```

Note: much of the definition detail has been left out, and only the parts relevant to the pattern are shown. E.g. A real blood pressure profile would fix unit, an overall Observation code etc.

<span id="extensions"></span>
### Extensions

For another example, consider slicing extensions. The base extension on every element is defined as a list (0..\*) of extensions, and each extension has a url that identifies it, and a value. Consider an example where a profile defines that for a particular element (named Patient), there are two extensions, with URLs http://acme.com/a and http://acme.com/b. In addition, the profile allows other extensions to be used.

Technically, the profile achieves this by "slicing" the extension list, into two slices, and saying that the slicing is "open" - that there can be other slices introduced. Here are the relevant parts of the Profile on patient:


    <StructureDefinition xmlns="http://hl7.org/fhir">
      <!-- snip -->
        <baseType value="Patient" />
        <baseDefinition value="http://hl7.org/fhir/StructureDefinition/Patient" />
        <derivation value="constraint" />
        <snapshot>
          <element>
            <path value="Patient"/>
            <!-- snip -->
          </element>
          <element>
            <path value="Patient.extension"/>
            <!-- this first element defines the slicing, and carries the base definition forward -->
            <slicing>
              <!-- Extensions are always discriminated by URL -->
              <discriminator value="system"/>
                <type value="value"/>
                <path value="url"/>
              </discriminator/>
              <ordered value="false"/>     <!-- we don't care what order they appear in -->
              <rules value="open"/>        <!-- other extensions can be used -->
            </slicing>
            <!-- -- snip definition -->
          </element>
          <!-- first extension -->
          <element>
            <path value="Patient.extension"/>
            <!-- snip most of definition -->
            <type>
             <code value="Extension"/>
             <!-- the profile for an extension is a reference to the extension definition itself -
               this implies a profile, and happens to fix the @url value to the desired URL -->
             <profile value="http://acme.com/a"/>
            </type>
          </element>
          <!-- second extension -->
          <element>
            <path value="Patient.extension"/>
            <!-- snip most of definition -->
            <type>
             <code value="Extension"/>
             <!-- the profile for an extension is a reference to the extension definition itself -
               this implies a profile, and happens to fix the @url value to the desired URL -->
             <profile value="http://acme.com/b"/>
            </type>
          </element>
          <!-- snip rest of profile -->
        </snapshot>
    </StructureDefinition>

Here is a patient example that conforms to this profile:

    <Patient xmlns="http://hl7.org/fhir">
      <!-- two extensions, the order doesn't matter -->
      <extension url="http://acme.com/b">
        <!-- this has the right url, and so matches the second slice -->
        <!-- snip whatever value extension would have -->
      </extension>
      <extension url="http://acme.com/a">
        <!-- this has the right url, and so matches the first slice -->
        <!-- snip whatever value extension would have -->
      </extension>
      <!-- the rest of patient -->
    </Patient>

<span id="lipids"></span>
### Diagnostic Report & Observation

In this example, a profile on a diagnostic report says that it must have four observations, each with a different LOINC code (e.g. a classic lab panel). In this case (taken from the [Example Lipid Profile](lipid-report.html)), the structure that applies to DiagnosticReport will say that there are four slices on DiagnosticReport.result, each conforming to a different structure, which are also contained in the same profile. Each of those structures will constrain the LOINC code in the observation.

    <!-- first structure, the DiagnosticReport -->
    <StructureDefinition xmlns="http://hl7.org/fhir">
      <!-- snip -->
      <url value="http://acme.org/fhir/StructureDefinition/lipid-report"/>
      <name value="LipidProfile"/>
      <baseType value="DiagnosticReport"/>
      <baseDefinition value="http://hl7.org/fhir/StructureDefinition/DiagnosticReport"/>
      <derivation value="constraint" />

      <!-- snip -->
      <snapshot>
        <!-- snip elements -->
        <element>
          <!-- first definition for result -->
          <path value="DiagnosticReport.result"/>
          <slicing>
            <!-- this is sliced by the code value of the target of the reference -->
            <discriminator value="system"/>
              <type value="value"/>
              <path value="reference.code"/>
            </discriminator/>
            <!-- have to be in the specified order -->
            <ordered value="true"/>
            <!-- this profile says, no other observations allowed -->
            <rules value="closed"/>
          </slicing>
          <!-- snip definition -->
        </element>
        <!-- first slice: Cholesterol -->
        <element>
          <path value="DiagnosticReport.result"/>
          <name value="Cholesterol"/>
          <!-- snip definition parts -->
          <type>
            <code value="Reference"/>
            <!-- this element must conform to the "Cholesterol" structure -->
            <profile value="http://acme.org/fhir/StructureDefinition/Cholesterol"/>
          </type>
        </element>
        <!-- next 3 slices all the same, but different names for profile -->
        <element>
          <path value="DiagnosticReport.result"/>
          <name value="Triglyceride"/>
          <!-- snip definition parts -->
          <type>
            <code value="Reference"/>
            <!-- this element must conform to the "Triglyceride" structure -->
            <profile value="http://acme.org/fhir/StructureDefinition/Triglyceride"/>
          </type>
        </element>
        <element>
          <path value="DiagnosticReport.result"/>
          <name value="LDLCholesterol"/>
          <!-- snip definition parts -->
          <type>
            <code value="Reference"/>
            <!-- this element must conform to the "LDLCholesterol" structure -->
            <profile value="http://acme.org/fhir/StructureDefinition/LDLCholesterol"/>
          </type>
        </element>
        <element>
          <path value="DiagnosticReport.result"/>
          <name value="HDLCholesterol"/>
          <!-- snip definition parts -->
          <type>
            <code value="Reference"/>
            <!-- this element must conform to the "HDLCholesterol" structure -->
            <profile value="http://acme.org/fhir/StructureDefinition/HDLCholesterol"/>
          </type>
        </element>
        <!-- snip elements -->
      </snapshot>
    </StructureDefinition>

    <!-- now, the second structure, for the Cholesterol profile -->
    <StructureDefinition>
      <url value="http://acme.org/fhir/StructureDefinition/Cholesterol"/>
      <name value="Cholesterol"/> 
      <baseType value="Observation"/>
      <baseDefinition value="http://hl7.org/fhir/StructureDefinition/Observation"/>
      <derivation value="constraint" />
      <snapshot>
        <!-- snip elements -->
        <element>
          <!-- this the element definition for name. Because of the
            slicing / discriminator rules in the LipidReport profile
            that references it, it is required to fix the value of
            the name element -->
          <path value="Observation.code"/>
          <definition>
             <!-- there are actually 3 ways to fix a CodeableConcept
             to a single fixed value. Here, we used the simplest one -->
             <valueCodeableConcept>
               <!-- just fix the value to the right code -->
               <coding>
                 <system value="http://loinc.org"/>
                 <code value="35200-5"/>
                 <display value="Cholesterol"/>
               </coding>
             </valueCodeableConcept>
          </definition>
        </element>
        <!-- snip elements -->
      </snapshot>
    </StructureDefinition>

    <!-- Triglyceride profile -->
    <StructureDefinition>
      <url value="http://acme.org/fhir/StructureDefinition/Triglyceride"/>
      <name value="Triglyceride"/> 
      <baseType value="Observation"/>
      <baseDefinition value="http://hl7.org/fhir/StructureDefinition/Observation"/>
      <derivation value="constraint" />
      <snapshot>
        <!-- snip elements -->
        <element>
          <!-- this the element definition for name. Because of the
            slicing / discriminator rules in the LipidReport profile
            that references it, it is required to fix the value of
            the name element -->
          <path value="Observation.code"/>
          <definition>
             <!-- there's actually 3 ways to fix a CodeableConcept
             to a single fixed value. Here, we used the simplest one -->
             <valueCodeableConcept>
               <!-- just fix the value to the right code -->
               <coding>
                 <system value="http://loinc.org"/>
                 <code value="35217-9"/>
                 <display value="Triglyceride"/>
               </coding>
             </valueCodeableConcept>
          </definition>
        </element>
        <!-- snip elements -->
      </snapshot>
    </StructureDefinition>

    <!-- LDLCholesterol profile -->
    <StructureDefinition>
      <url value="http://acme.org/fhir/StructureDefinition/LDLCholesterol"/>
      <name value="LDLCholesterol"/> 
      <baseType value="Observation"/>
      <baseDefinition value="http://hl7.org/fhir/StructureDefinition/Observation"/>
      <derivation value="constraint" />
      <snapshot>
        <!-- snip elements -->
        <element>
          <!-- this the element definition for name. Because of the
            slicing / discriminator rules in the LipidReport profile
            that references it, it is required to fix the value of
            the name element -->
          <path value="Observation.code"/>
          <definition>
             <!-- because of the way that LDL cholesterol measurements works
               (well, in this context- it varies), there's 2 different LOINC
               codes for either measured or calculated. So here, we bind to
               a value set -->
           <binding>
            <conformance value="required"/> <!-- must be required if this is a discriminator -->
            <!-- snip the actual value set reference, but it refers to a value
                 set with two LOINC codes, one for each kind of LDL, which in
                 this case are LOINC codes 18262-6 and 13457-7 -->
           </binding>
         </definition>
        </element>
        <!-- snip elements -->
      </snapshot>
    </StructureDefinition>

    <!-- HDLCholesterol profile -->
    <StructureDefinition>
      <url value="http://acme.org/fhir/StructureDefinition/HDLCholesterol"/>
      <name value="HDLCholesterol"/> 
      <baseType value="Observation"/>
      <baseDefinition value="http://hl7.org/fhir/StructureDefinition/Observation"/>
      <derivation value="constraint" />
      <snapshot>
        <!-- snip elements -->
        <element>
          <!-- this the element definition for name. Because of the
            slicing / discriminator rules in the LipidReport profile
            that references it, it is required to fix the value of
            the name element -->
          <path value="Observation.code"/>
          <definition>
             <!-- there's actually 3 ways to fix a CodeableConcept
             to a single fixed value. Here, we used the simplest one -->
             <valueCodeableConcept>
               <!-- just fix the value to the right code -->
               <coding>
                 <system value="http://loinc.org"/>
                 <code value="2085-9"/>
                 <display value="LDL Cholesterol"/>
               </coding>
             </valueCodeableConcept>
          </definition>
        </element>
        <!-- snip elements -->
      </snapshot>
    </StructureDefinition>

Here is an instance that meets the rules for this profile:

    <!-- first, the diagnostic report -->
    <DiagnosticReport xmlns="http://hl7.org/fhir">
      <!-- snip -->
      <!-- here's the set of results. We don't know what
        slices they are or anything until we go off, find
        the references, and look in them -->
      <result>
        <reference value="Observation/cholesterol"/>
      </result>
      <result>
        <reference value="Observation/triglyceride"/>
      </result>
      <result>
        <reference value="Observation/ldlcholesterol"/>
      </result>
      <result>
        <reference value="Observation/hdlcholesterol"/>
      </result>
      <!-- snip -->
    </DiagnosticReport>

    <!-- Observation, id = cholesterol -->
    <Observation xmlns="http://hl7.org/fhir">
      <!-- the observation starts with the name, as specified
        by the profile for the first slice  -->
      <code>
        <coding>
          <system value="http://loinc.org"/>
          <code value="35200-5"/>
          <display value="Cholesterol"/>
        </coding>
      </code>
      <!-- snip -->
    </Observation>

    <!-- Observation, id = triglyceride -->
    <!-- this code matches the second slice. good -->
    <Observation xmlns="http://hl7.org/fhir">
      <code>
        <coding>
          <system value="http://loinc.org"/>
          <code value="35217-9"/>
          <display value="Triglyceride"/>
        </coding>
      </code>
      <!-- snip -->
    </Observation>

    <!-- Observation, id = hdlcholesterol -->
    <!-- this code matches the fourth slice. good -->
    <Observation xmlns="http://hl7.org/fhir">
      <code>
        <coding>
          <system value="http://loinc.org"/>
          <code value="2085-9"/>
          <display value="HDL Cholesterol"/>
        </coding>
      </code>
      <!-- snip -->
    </Observation>

    <!-- Observation, id = ldlcholesterol -->
    <!-- this code matches the third slice. good -->
    <Observation id="ldlcholesterol">
      <code>
        <coding>
          <system value="http://loinc.org"/>
          <code value="13457-7"/>
          <display value="LDL Chol. (Calc)"/>
        </coding>
      </code>
      <!-- snip -->
    </Observation>

Note that this version is not valid, because the slices are not in the correct order:

    <!-- first, the diagnostic report -->
    <DiagnosticReport xmlns="http://hl7.org/fhir">
      <!-- snip -->
      <!-- here's the set of results. We don't know what
        slices they are or anything until we go off, find
        the references, and look in them -->
      <result>
        <reference value="Observation/cholesterol"/>
      </result>
      <result>
        <reference value="Observation/triglyceride"/>
      </result>
        <!-- Oops the last two are out of order -->
      <result>
        <reference value="Observation/hdlcholesterol"/>
      </result>
      <result>
        <reference value="Observation/ldlcholesterol"/>
      </result>
      <!-- snip -->
    </DiagnosticReport>

<span id="composition"></span>
### Composition Sections

Most uses of Composition involve conformance to a profile that specifies which sections will exist, and what their contents will be. This is yet another example of slicing. A typical document content profile might specify a section structure something like this:

-   Reason for visit Narrative, LOINC Code 29299-5
-   Medications, LOINC Code 46057-6
    -   Prescribed Medications, LOINC Code 66149-6
    -   OTC medications, 66150-4 (optional)
-   Vital Signs, LOINC Code 8716-3

Real profiles will contain lots of detail about the sections, but these are omitted here in the interests of clarity.

An example of a Composition that meets these rules:

``` xml
<Composition>                         
... snip ...
  <section>                       
    <code>                       
      <coding>                       
        <system value="http://loinc.org" />      
        <use value="29299-5" />          
        <value value="Reason for visit Narrative" />  
      </coding>                       
    </code>                       
    ... snip ...
  </section>
  <section>                       
    <code>                       
      <coding>                       
        <system value="http://loinc.org" />      
        <use value="46057-6" />          
        <value value="Medications section" />  
      </coding>                       
    </code>                       
    ... snip ...
    <section>                       
      <code>                       
        <coding>                       
          <system value="http://loinc.org" />      
          <use value="66149-6" />          
          <value value="Prescribed medications" />  
        </coding>                       
      </code>                       
      ... snip ...
    </section>
    <section>                       
      <code>                       
        <coding>                       
          <system value="http://loinc.org" />      
          <use value="66150-4" />          
          <value value="O medications" />  
        </coding>                       
      </code>                       
      ... snip ...
    </section>
  </section>
  <section>                       
    <code>                       
      <coding>                       
        <system value="http://loinc.org" />      
        <use value="8716-3" />          
        <value value="Vital signs" />  
      </coding>                       
    </code>                       
    ... snip ...
  </section>
</Composition>
```

To do this, the profile that implements these rules needs to do the following:

-   On the base Composition.section element: define that slicing is discriminated by code, and that the slices are closed and ordered
-   Then define 3 slices on Composition.section:
    1.  reason-for-visit: fixed code, cardinality 1..1
    2.  medication: fixed code, cardinality 1..1
    3.  vital-signs: fixed code, cardinality 1..1
-   Then, in the medication slice, slice the Composition.section.section: define that slicing is discriminated by code, and that the slices are closed and ordered
-   Then define 2 slices on the Composition.section.section in medication:
    1.  prescribed: fixed code, cardinality 1..1
    2.  otc: fixed code, cardinality 0..1

In a StructureDefinition, this will look like:

``` xml
  <!-- setting up the slicing on Composition.section -->
  <element> 
    <path value="Composition.section"/>
    <slicing>
      <discriminator value="system"/>
        <type value="value"/>
        <path value="code"/>
      </discriminator/>
      <ordered value="true"/>
      <rules value="closed"/>
    </slicing>
    <!-- net cardinality rules -->
    <min value="3"/>
    <max value="3"/>
  </element>
  
  <!-- first slice: reason for visit -->
  <element> 
    <path value="Composition.section"/>
    <name value="reason-for-visit"/> 
    <min value="1"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Composition.section.code"/>
    <min value="1"/>
    <fixedCodeableConcept>
      <coding>                       
        <system value="http://loinc.org" />      
        <use value="29299-5" />          
        <value value="Reason for visit Narrative" />  
      </coding>                       
    </fixedCodeableConcept>
  </element>
  
  <!-- second slice: medications -->
  <element> 
    <path value="Composition.section"/>
    <name value="medications"/> 
    <min value="1"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Composition.section.code"/>
    <min value="1"/>
    <fixedCodeableConcept>
      <coding>                       
        <system value="http://loinc.org" />      
        <use value="46057-6" />          
        <value value="Medications section" />  
      </coding>                       
    </fixedCodeableConcept>
  </element>

  <!-- setting up the inner slicing on medication Composition.section.section -->
  <element> 
    <path value="Composition.section.section"/>
    <slicing>
      <discriminator value="system"/>
        <type value="value"/>
        <path value="code"/>
      </discriminator/>
      <ordered value="true"/>
      <rules value="closed"/>
    </slicing>
    <!-- net cardinality rules -->
    <min value="1"/>
    <max value="2"/>
  </element>

  <!-- first inner slice: prescribed medications -->
  <element> 
    <path value="Composition.section.section"/>
    <name value="prescribed"/> 
    <min value="1"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Composition.section.section.code"/>
    <min value="1"/>
    <fixedCodeableConcept>
      <coding>                       
        <system value="http://loinc.org" />      
        <use value="66149-6" />          
        <value value="Prescribed medications" />  
      </coding>                       
    </fixedCodeableConcept>
  </element>
  
  <!-- second inner slice: over the counter medications -->
  <element> 
    <path value="Composition.section.section"/>
    <name value="otc"/> 
    <min value="0"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Composition.section.section.code"/>
    <min value="1"/>
    <fixedCodeableConcept>
      <coding>                       
        <system value="http://loinc.org" />      
        <use value="66150-4" />          
        <value value="Over the counter medications" />  
      </coding>                       
    </fixedCodeableConcept>
  </element>
  
  <!-- third slice: Vital Signs -->
  <element> 
    <path value="Composition.section"/>
    <name value="vital-signs"/> 
    <min value="1"/>
    <max value="1"/>
  </element>
  <element> 
    <path value="Composition.section.code"/>
    <min value="1"/>
    <fixedCodeableConcept>
      <coding>                       
        <system value="http://loinc.org" />      
        <use value="8716-3" />          
        <value value="Vital signs" />  
      </coding>                       
    </fixedCodeableConcept>
  </element>
```

<span id="reslicing"></span>
### Re-slicing

For some use cases, it is necessary to further re-slice in a derivative profile. This is when Profile A derives from Profile B, Profile A slices an element in Slice A and B, and Profile B further slices Slice A into A1 and A2.

As an example, assume that institution implementation guide specifies that a medication list is represented by a List resource, where the items into the list are split up into 3 slices, based on resource type:

-   MedicationRequest
-   MedicationAdministration
-   MedicationStatement

These slices must come in order.

Now, a particular application creates an additional profile that specifies the following rules in addition to the base rules of the institution:

1.  the medicationRequests will be sliced into active and non-active, where all the active requests will come first, and then the inactive ones
2.  only active MedicationAdministrations will be encountered
3.  Medication statements are not supported

An example of a List resource that meets these rules:

``` xml
<List>                         
... snip ...
  <entry>                       
    <item>  
      <reference value="MedicationRequest/ex-active-1"/>  
    </item>  
  </entry>
  <entry>                       
    <item>  
      <reference value="MedicationRequest/ex-active-2"/>  
    </item>  
  </entry>
  <entry>                       
    <item>  
      <reference value="MedicationRequest/ex-inactive-1"/>  
    </item>  
  </entry>
  <entry>                       
    <item>  
      <reference value="MedicationAdministration/ex-any-1"/>  
    </item>  
  </entry>

  ... snip ...
</List>
```

The StructureDefinition differential for the first profile sets up the slicing, and then defines 3 slices:

``` xml
  <!-- setting up the slicing -->
  <element> 
    <path value="List.entry"/>
    <slicing>
      <discriminator>
        <type value="profile"/>
        <path value="entry.item.resolve()"/>
      </discriminator>
      <ordered value="true"/>
      <rules value="closed"/>
    </slicing>
  </element>
  
  <!-- first slice: medrequest -->
  <element> 
    <path value="List.entry"/>
    <name value="medrequest"/> <!-- mandatory - gives the slice a name -->
  </element>
  <element> 
    <path value="List.entry.item"/>
    <type>
      <code value="Reference"/>
      <targetProfile value="http://example.org/StructureDefinition/medrequest"/>
    </type>
  </element>
  
  <!-- second slice: medadmin -->
  <element> 
    <path value="List.entry"/>
    <name value="medadmin"/> <!-- mandatory - gives the slice a name -->
  </element>
  <element> 
    <path value="List.entry.item"/>
    <type>
      <code value="Reference"/>
      <targetProfile value="http://example.org/StructureDefinition/medadmin"/>
    </type>
  </element>
  
  <!-- third slice: medstmt -->
  <element> 
    <path value="List.entry"/>
    <name value="medstmt"/> <!-- mandatory - gives the slice a name -->
  </element>
  <element> 
    <path value="List.entry.item"/>
    <type>
      <code value="Reference"/>
      <targetProfile value="http://example.org/StructureDefinition/medstmt"/>
    </type>
  </element>
```

The derived StructureDefinition differential re-slices the first slice into 2 slices, constrains the second slice, and prohibits the 3rd:

``` xml
  <!-- setting up the slicing - this profile doesn't change the slicing 
    (though it could add new discriminators if it needed) -->
  <element> 
    <path value="List.entry"/>
    <slicing>
      <discriminator>
        <type value="profile"/>
        <path value="entry.item.resolve()"/>
      </discriminator>
      <ordered value="true"/>
      <rules value="closed"/>
    </slicing>
  </element>
  
  <!-- first slice: medrequest/active -->
  <element> 
    <path value="List.entry"/>
    <!-- name/sub-name: splitting an existing slice into new slices  -->
    <name value="medrequest/active"/> 
  </element>
  <element> 
    <path value="List.entry.item"/>
    <type>
      <code value="Reference"/>
      <targetProfile value="http://example.org/StructureDefinition/medrequest-active"/>
    </type>
  </element>
  
  <!-- second slice: medrequest/inactive -->
  <element> 
    <path value="List.entry"/>
    <name value="medrequest/inactive"/>
  </element>
  <element> 
    <path value="List.entry.item"/>
    <type>
      <code value="Reference"/>
      <targetProfile value="http://example.org/StructureDefinition/medrequest-active"/>
    </type>
  </element>
  
  <!-- third slice: medadmin (rule on the second slice in the parent profile) -->
  <element> 
    <path value="List.entry"/>
    <!-- use the same name - constraining the existing slice -->
    <name value="medadmin"/> 
  </element>
  <element> 
    <path value="List.entry.item"/>
    <type>
      <code value="Reference"/>
      <targetProfile value="http://example.org/StructureDefinition/medadmin-active"/>
    </type>
  </element>
  
  <!-- fourth slice: medstmt -->
  <element> 
    <path value="List.entry"/>
    <!-- use the same name - constraining the existing slice -->
    <name value="medstmt"/> 
    <max value="0"/>
  </element>
```

\[%file newfooter%\]
