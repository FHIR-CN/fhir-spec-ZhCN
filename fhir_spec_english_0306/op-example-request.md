\[%settitle Operation Request Example%\]
\[%file newnavbar%\]
<span id="SOA"></span> <span id="soa"></span>
Operation Request Example
-------------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

    POST [base]/ValueSet/$expand HTTP/1.1
    Content-Type: application/fhir+xml

    <!-- 
       This is an example of an operation request for a value set 
       expansion where the value set is submitted on the fly 
    -->
    <Parameters xmlns="http://hl7.org/fhir">
      <parameter>
        <name value="filter"/>
        <valueString name="abdo"/>
      </parameter>
      <parameter>
        <name value="valueset"/>  
        <resource>
          <ValueSet>
            <text>
              <status value="generated"/>
              <div xmlns="http://www.w3.org/1999/xhtml"><!-- Snipped for brevity --></div>
            </text>
            <identifier value="http://hl7.org/fhir/ValueSet/body-site"/>
            <name value="SNOMED CT Body Structures"/>
            <publisher value="FHIR Project team"/>
            <telecom>
              <system value="url"/>
              <value value="http://hl7.org/fhir"/>
            </telecom>
            <description value="This value set includes all the &quot;Clinical finding&quot; SNOMED CT codes (i.e. codes
             with an is-a relationship with 91723000: Anatomical structure)"/>
            <status value="draft"/>
            <compose>
              <include><!--   all the descendants of clinical finding, not include itself   -->
                <system value="http://snomed.info/sct"/>
                <filter><!--   todo: work this over. what this means is any concepts where they have is-a with 91723000.
                   how should this be done?   -->
                  <property value="concept"/>
                  <op value="is-a"/>
                  <value value="91723000"/>
                </filter>
              </include>
            </compose>
          </ValueSet>
        </resource>
      </parameter>
    </Parameters>

\[%file newfooter%\]
