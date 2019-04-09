\[%settitle Extension Examples%\]
\[%file newnavbar%\]
&lt;%extheader examples%&gt;
Extensibility Examples
----------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

In order to use an extension, there is a three-step process:

1.  Define the extension
2.  Register the extension
3.  Use it in the instance

This page contains examples of how this process executes.

<span id="consent"></span>
### Patient Consent for Record Sharing

The basic patient resource contains no information relating to patient consent, and/or the policy under which the patient consents to their registration details. A social web provider of personal healthcare record (PHR) services might be obliged to keep track of the particular policy under which a patient has created their relationship with the PHR provider, and share this with their participants via their FHIR API. If they wish, they can extend the patient resource to represent the patient's participation agreement. Note that [other approaches to this problem](consent.html) are possible and preferred, but this example suffices to demonstrate the extension process.

For the purposes of this example, we assume that the patient agrees to a participation policy as part of their sign up, and that as the provider has to change their policy, they ask patients to agree to new participation details. Each participation agreement has a URI by which it is identified, and the patient resource will carry this URI for each policy agreement that the patient has agreed to.

#### Define the Extension

For each extension, the first thing to do is to fill out the [definitional properties of the extension](extensibility.html#define):

|             |                                                                                                                                                                                 |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Code        | "participation-agreement"                                                                                                                                                       |
| Context     | This extension is used in the patient resource                                                                                                                                  |
| Short Defn  | Agreed agreement/policy                                                                                                                                                         |
| Definition  | A URI that identifies a participation agreement/policy to which the patient has agreed                                                                                          |
| Comment     | URI is a literal reference to agreement text (html)                                                                                                                             |
| Cardinality | 1..\* (patient cannot participate without at least one agreement)                                                                                                               |
| Type        | uri                                                                                                                                                                             |
| Invariants  | No invariants                                                                                                                                                                   |
| is Modifier | No (the participation agreements do not affect that interpretation of the elements of the patient, though they will likely influence how the system interacts with the patient) |
| Binding     | (no binding - not a coded value)                                                                                                                                                |

#### Write the Definition of the Extension

From this table, we can build a formal extension definition. In this case, it looks like this:

``` xml
<StructureDefinition xmlns="http://hl7.org/fhir">
  <url value="http://example.org/fhir/StructureDefinition/participation-agreement"/>
  <name value="Example Extension Definition"/>
  <!-- snip other metadata -->
  <kind value="complex-type"/>
  <context>
    <type value="element"/>
    <expression value="Patient"/>
  </context>
  <type value="Extension"/>
  <baseDefinition value="http://hl7.org/fhir/StructureDefinition/Extension"/>
  <derivation value="constraint"/>

  <differential>
    <element>
      <path value="Extension"/>
      <short value="Agreed agreement/policy"/>
      <definition value="A URI that identifies a participation agreement/policy
        to which the patient has agreed"/>
      <comment value="URI is a literal reference to agreement text (html).
        Systems SHALL conform to the policies as indicated.
        For further information, see the partnership agreement..."/>
      <mustSupport value="true"/>
      <isModifier value="false"/>
    </element>
    <element>
      <path value="Extension.url"/>
      <fixedUri value="http://example.org/fhir/StructureDefinition/participation-agreement"/>
    </element>
    <element>
      <path value="Extension.valueUri"/>
      <short value="The URI value"/>
      <min value="1"/>
      <max value="*"/>
      <type>
         <code value="uri"/>
      </type>
      <mustSupport value="true"/>
    </element>
  </differential>
</StructureDefinition>
```

Note that usually one would build the actual profile using a tool. This example was built by hand for this example.

#### Register the Extension

This means the profile shown above that defines the extension is placed on the web somewhere. By preference, it will be hosted at a FHIR Profile endpoint, and the best location of all is the [HL7 FHIR Registry](http://hl7.org/fhir/registry).

For this example, we assume that it has been uploaded to the PHR provider's own website at http://example.org/phr/documents/fhir/extensions.

#### Use it in the instance

To use the extension in an instance, the extension is placed in the root of the resource, because that was the declared context for the extension. Note that the URL of the extension refers to the registered location.

``` xml
<Patient xmlns="http://hl7.org/fhir">
  <extension url="http://example.org/phr/documents/fhir/extensions/participation-agreement" >
    <valueUri value="http://example.org/phr/documents/patient/general/v1"/>
  </extension>
  <!-- ... -->
</Patient>
```

<span id="sliceextensions"></span>
#### Using it in a Patient Profile

The extension definition above simply defines the extension "participation-agreement" and says that it is used with patient. But the profile above doesn't say that the server actually uses it. For the PHR provider to indicate that all Patient resources will use this resource, a StructureDefinition on the patient resource is used:

``` xml
<StructureDefinition xmlns="http://hl7.org/fhir">
  <id value="patient-profile"/>
  <!-- snip other metadata, narrative -->
  <differential>

    <!-- first, the patient root element
      - can be copy/paste from the base patient profile -->
    <element>
      <path value="Patient"/>
      <!-- snip definition -->
    </element>

    <!-- now, the general definition for extensions
      - can be copied/pasted from the base patient profile,
      with changes for slicing  -->
    <element>
      <path value="Patient.extension"/>
      <!-- we're going to slice the extension element, and
        one of the extensions is one we have defined -->
      <slicing>
        <!-- extension is always sliced on url -->
        <discriminator>
          <type value="value"/>
          <path value="url"/>
        </discriminator>
        <!-- we don't care what the order of any extensions is -->
        <ordered value="false"/>
        <!-- Other extensions are allowed in addition to this one -->
        <rules value="open"/>
      </slicing>
      <!-- snip definition -->
    </element>

    <!-- now, the slice that contains our extension -->
    <element>
      <path value="Patient.extension"/>
      <sliceName value="agreement"/>
      <!-- clone information from the extension definition.
        duplicative, but this duplication makes it simpler overall -->
      <short value="Agreed agreement/policy"/>
      <definition value="A URI that identifies a participation agreement/policy
      to which the patient has agreed"/>
      <!--  min has to be 1, since the extension itself has min = 1 -->
      <min value="1"/>
      <max value="*"/>
      <type>
        <!-- obviously it has to be an extension -->
        <code value="Extension"/>
        <!-- and here is the link to the extension definition:
          this extension has to conform to the rules laid down in its definition -->
        <profile value="http://example.org/phr/documents/fhir/StructureDefinition/participation-agreement"/>
      </type>
      <isModifier value="false"/>
    </element>

  <!-- snip the rest of the profile -->

  </differential>
</StructureDefinition>
```

Note - this step is optional.

<span id="name-parts"></span>
### Patient Name Parts

ISO 21090 (Healthcare Data Types) defines a concept called a "name part qualifier" that contains extra information about how a particular name part should be used or interpreted. In practice, this field is used rarely except in particular cultural contexts, where certain part qualifiers are used as a matter of practice. Following the [FHIR design policy](extensibility.html), such a field is not included in the overall definition of the core name data type, instead is it added as an extension.

In practice, for cases such as these in ISO 21090, HL7 defines common extensions, and these are defined either in [this specification](iso-21090.html), or in the [FHIR registry](http://hl7.org/fhir/registry).

#### Define the Extension

For each extension, the first thing to do is to fill out the [definitional properties of the extension](extensibility.html#define):

|             |                                                                                                                             |
|-------------|-----------------------------------------------------------------------------------------------------------------------------|
| Code        | "name-qualifier"                                                                                                            |
| Context     | This extension can be used anywhere a HumanName.part appears                                                                |
| Short Defn  | (one of the codes) LS | AC | NB | PR | HON | BR | AD | SP | MID | CL | IN                                                   |
| Definition  | A set of codes each of which specifies a certain subcategory of the name part in addition to the main name part type        |
| Comment     | Used to indicate additional information about the name part and how it should be used                                       |
| Cardinality | 0..\* (this is always optional, but more than one can be used if required)                                                  |
| Type        | code                                                                                                                        |
| Invariants  | N/A                                                                                                                         |
| Is Modifier | No (Qualifiers do not change the fact that the part is a given or family name)                                              |
| RIM Mapping | ENXP.qualifier                                                                                                              |
| v2 Mapping  | N/A                                                                                                                         |
| Binding     | Bound to a subset of the codes specified for [EntityNamePartQualifierR2 in ISO 21090](v3/EntityNamePartQualifierR2/cs.html) |

Not all the codes of the EntityNamePartQualifierR2 are required in this context, because prefix and suffix are explicitly part of the name types. Rather than simply refer to the OID for EntityNamePartQualifierR2 (2.16.840.1.113883.5.1122), in this case we enumerate the available codes, and set the type of the extension to code. The type of "code" is only allowed if the profile itself defines the codes that can be used. Here is a table of the codes (see the [EntityNamePartQualifierR2](v3/EntityNamePartQualifierR2/cs.html) reference for the full definitions):

|     |              |                                       |
|-----|--------------|---------------------------------------|
| LS  | Legal status | For organizations, a suffix...        |
| AC  | Academic     | Indicates that a prefix like "D...    |
| NB  | Nobility     | In Europe and Asia, there are s...    |
| PR  | Professional | Primarily in the British Im...        |
| HON | Honorific    | An honorific such as 'The Rig...      |
| BR  | Birth        | A name that a person was given at ... |
| AD  | Acquired     | A name part a person acquired. ...    |
| SP  | Spouse       | The name assumed from the partner...  |
| MID | Middle Name  | Indicates that the name par...        |
| CL  | Call me      | Call me is used to indicate which...  |
| IN  | Initial      | Indicates that a name part is ju...   |

This is all then represented formally in a profile. Such profiles do not need to include resource constraint statements; instead, they include just extension declarations and their associated bindings. In this case, the definition looks like this:

``` xml
<StructureDefinition xmlns="http://hl7.org/fhir">
  <url value="http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"/>
  <name value="Iso21090NameQualifier"/>
  <title value="iso-21090 Name Qualifier"/>
  <!-- snip other metadata, including definition of RIM Mapping -->
  <kind value="complex-type"/>
  <context>
    <type value="element"/>
    <expression value="HumanName.given"/>
  </context>    
  <context>
    <type value="element"/>
    <expression value="HumanName.prefix"/>
  </context>    
  <context>
    <type value="element"/>
    <expression value="HumanName.family"/>
  </context>    
  <context>
    <type value="element"/>
    <expression value="HumanName.suffix"/>
  </context>    
  <type value="Extension"/>
  <baseDefinition value="http://hl7.org/fhir/StructureDefinition/Extension"/>
  <derivation value="constraint"/>
  <differential>
    <element>
      <path value="Extension"/>
      <short value="LS | AC | NB | PR | HON | BR | AD | SP | MID | CL | IN"/>
      <definition value="A set of codes each of which specifies a certain subcategory
          of the name part in addition to the main name part type"/>
      <comment value="Used to indicate additional information about the
             name part and how it should be used"/>
      <mustSupport value="false"/>
      <isModifier value="false"/>
    </element>
    <element>
      <path value="Extension.url"/>
      <fixedUri value="http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier"/>
    </element>
    <element>
      <path value="Extension.value"/>
      <short value="LS | AC | NB | PR | HON | BR | AD | SP | MID | CL | IN"/>
      <min value="0"/>
      <max value="*"/>
      <type>
         <code value="code"/>
      </type>
      <binding>
        <strength value="required"/>
        <description value="A set of codes each of which specifies a certain subcategory
            of the name part in addition to the main name part type"/>
        <valueSet value="http://hl7.org/fhir/ValueSet/name-part-qualifier"/>
      </binding>
      <mapping>
         <identity value="RIM"/>
         <map value="ENXP.qualifier"/>
      </mapping>
    </element>
  </differential>
</StructureDefinition>
```

Note that usually one would build the actual profile using a tool. This example was built from a spreadsheet definition by the FHIR build tooling.

#### Register the Extension

For this example, it is registered at <http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier>. This is the URL that will appear in the definition element when the extension is used.

#### Use it in the instance

To use the extension in an instance, the extension is nested within the attribute that is extended. Note that the URL of the extension refers to the registered location.

``` xml
<name>
  <use value="official"/>
  <given value="Östlund">
     <extension url="http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier" >
        <valueCode value="MID"/>
     </extension>
  </given>
</name>
```

This example is a Scandinavian mellannamn. See [Datatypes examples for additional examples](datatypes-examples.html).

<span id="complex"></span>
### Complex Extension: Patient Clinical Trial

Defining complex extensions is a little different. They have the same metadata - context, etc. - but differ in the internal structure. As an example, consider enrolling a patient in a clinical trial. There are 3 data items to collect:

|          |                       |                 |                |                                                                                                                    |
|----------|-----------------------|-----------------|----------------|--------------------------------------------------------------------------------------------------------------------|
| **Code** | **Name**              | **Cardinality** | **Type**       | **Content**                                                                                                        |
| NCT      | Clinical Trial number | 1..1            | string         | The format for the US ClinicalTrials.gov registry number is "NCT" followed by an 8-digit number, e.g.: NCT00000419 |
| period   | trialPeriod           | 0..1            | Period         | The start and end times of the participation of this patient in the clinical trial                                 |
| reason   | reason enrolled       | 0..1            | CodableConcept | Indication or reason that the patient is part of this trial                                                        |

NOTE: This extension is included for example purposes only. In most cases, participation in clinical trials would be handled using the [ResearchStudy](researchstudy.html) resource, possibly referenced via the [workflow-researchstudy](extension-workflow-researchstudy.html) extension.

Like simple extensions, the first thing to do is to assign a URI to the extension, e.g.: `http://example.org/fhir/StructureDefinition/patient-clinicalTrial`.

Internally, in the extension, the maximum cardinality of the value\[x\] element is set to 0 since it will not (and cannot) be used. The Extension.extension element is sliced by URL, and 3 slices are defined, each with a fixed relative URI which is the code from the table above. The relevant parts of the definition of this extension are as follows:

``` xml
<StructureDefinition xmlns="http://hl7.org/fhir">
  <!-- metadata - setting up the base definition -->
  <url value="http://example.org/fhir/StructureDefinition/patient-clinicalTrial"/>
  <name value="ClinicalTrialParticipation"/>
  <title value="The patient's participation in clinical trials"/>
  <context>
    <type value="element"/>
    <expression value="Patient"/>
  </context>
  <type value="Extension"/>
  <baseDefinition value="http://hl7.org/fhir/StructureDefinition/Extension"/>
  <derivation value="constraint"/>
  <snapshot>
    <element>
      <path value="Extension"/>
      <!-- etc.-->
    </element>

    <!-- set up the slicing -->
    <element>
      <path value="Extension.extension"/>
      <slicing>
        <discriminator>
          <type value="value"/>
          <path value="url"/>
        </discriminator>
        <ordered value="true"/>
        <rules value="openAtEnd"/>
      </slicing>
    </element>

    <!-- first slice, NCT -->
    <element>
      <path value="Extension.extension"/>
      <sliceName value="NCT"/>
      <short value="National Clinical Trial number"/>
      <min value="1"/>
      <max value="1"/>
    </element>
    <element>
      <path value="Extension.extension.extension"/>
      <min value="0"/>
      <max value="0"/> <!-- not allowed to be used -->
    </element>
    <element>
      <path value="Extension.extension.url"/>
      <min value="1"/>
      <max value="1"/>
      <fixedUri value="NCT"/>
    </element>
    <element>
      <path value="Extension.extension.valueString"/>
      <min value="1"/>
      <max value="1"/>
      <type>
        <code value="string"/>
      </type>
    </element>

    <!-- second slice, period -->
    <element>
      <path value="Extension.extension"/>
      <sliceName value="period"/>
      <short value="The period of participation in the clinical trial"/>
      <min value="0"/>
      <max value="1"/>
    </element>
    </element>
    <element>
      <path value="Extension.extension.extension"/>
      <min value="0"/>
      <max value="0"/>
    </element>
    <element>
      <path value="Extension.extension.url"/>
      <min value="1"/>
      <fixedUri value="period"/>
    </element>
    <element>
      <path value="Extension.extension.valuePeriod"/>
      <type>
        <code value="Period"/>
      </type>
    </element>

    <!-- third slice, reason -->
    <element>
      <path value="Extension.extension"/>
      <sliceName value="reason"/>
      <short value="The reason for participation in the clinical trial"/>
      <min value="0"/>
      <max value="1"/>
    </element>
    <element>
      <path value="Extension.extension.extension"/>
      <min value="0"/>
      <max value="0"/>
    </element>
    <element>
      <path value="Extension.extension.url"/>
      <min value="1"/>
      <fixedUri value="reason"/>
    </element>
    <element>
      <path value="Extension.extension.valueCodeableConcept"/>
      <type>
        <code value="CodeableConcept"/>
      </type>
    </element>

    <!-- last (for order reasons): the fixed URI -->
    <element>
      <path value="Extension.url"/>
      <fixedUri value="http://example.org/fhir/StructureDefinition/patient-clinicalTrial"/>
    </element>
    <!-- and no value in the root -->
    <element>
      <path value="Extension.value[x]"/>
      <min value="0"/>
      <max value="0"/>
    </element>
  </snapshot>
</StructureDefinition>
```

#### Use it in the instance

With complex extensions, only the first URL is an absolute URL:

``` xml
<Patient xmlns="http://hl7.org/fhir">
  <extension url="http://example.org/fhir/StructureDefinition/patient-clinicalTrial" >
    <extension url="NCT" >
      <valueString value="NCT00000419"/>
    </extension>
    <extension url="period" >
      <valuePeriod>
        <start value="200140105"/>
        <end value="20120105"/>
      </valuePeriod>
    </extension>
    <extension url="reason" >
      <valueCodeableConcept>
        <text value="healthy-volunteer"/>
      </valueCodeableConcept>
    </extension>
  </extension>
  <!-- ... -->
</Patient>
```

<span id="sliceextensions2"></span>
#### Using it in a Patient Profile

This is the same as for a simple extension:

``` xml
<StructureDefinition xmlns="http://hl7.org/fhir">
  <id value="patient-profile"/>
  <!-- snip other metadata, narrative -->
  <differential>

    <!-- first, the patient root element
      - can be copy/paste from the base patient profile -->
    <element>
      <path value="Patient"/>
      <!-- snip definition -->
    </element>

    <!-- now, the general definition for extensions
      - can be copy/paste from the base patient profile,
      with changes for slicing  -->
    <element>
      <path value="Patient.extension"/>
      <!-- we're going to slice the extension element, and
        one of the extensions is one we have defined -->
      <slicing>
        <!-- extension is always sliced on url -->
        <discriminator>
          <type value="value"/>
          <path value="url"/>
        </discriminator>
        <!-- we don't care what the order of any extensions is -->
        <ordered value="false"/>
        <!-- Other extensions are allowed in addition to this one -->
        <rules value="open"/>
      </slicing>
      <!-- snip definition -->
    </element>

    <!-- now, the slice that contains our extension -->
    <element>
      <max value="1"/>
      <type>
        <!-- obviously it has to be an extension -->
        <code value="Extension"/>
        <!-- and here is the link to the extension definition:
          this extension has to conform to the rules laid down in its definition -->
        <profile value="http://example.org/fhir/StructureDefinition/patient-clinicalTrial"/>
      </type>
    </element>

  <!-- snip the rest of the profile -->

  </differential>
</StructureDefinition>
```

\[%file newfooter%\]
