\[%settitle Using LOINC with FHIR%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Using LOINC with FHIR
---------------------

|                                                  |                                             |                                                                                      |
|--------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt vocab%\]](%5B%wg%20vocab%%5D) Work Group | [Maturity Level](versions.html#maturity): 5 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

### Summary

|                   |                                                                                                                                                                     |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Source            | LOINC is made available by the [Regenstrief Institute](https://www.regenstrief.org/) at <http://loinc.org>                                                          |
| System            | The URI <http://loinc.org> identifies LOINC codes                                                                                                                   |
| Version           | Where a version is used, it should be the standard LOINC version e.g. 2.48                                                                                          |
| Code              | The LOINC Code Identifier e.g. 21176-3. LOINC codes are not case sensitive. In addition, LOINC part codes and LOINC answer string ids can be used where appropriate |
| Display           | Use either the SHORTNAME or LONG\_COMMON\_NAME field for the display                                                                                                |
| Inactive          | Codes with Property STATUS = DEPRECATED are considered inactive for use in ValueSet.compose.inactive                                                                |
| Subsumption       | LOINC defines the Multi-Axial Hierarchy, which is the basis for subsumption logic in LOINC                                                                          |
| Filter Properties | Several properties are defined as described below                                                                                                                   |

### Copyright Issues

The terms of use for LOINC require that a [notice](license.html#loinc) be included with any use of LOINC codes. This notice must appear in the *copyright* element of any value set that includes LOINC codes (either in the code or filter elements, or in an expansion):

    <copyright value="This content LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use"/>

Additional copyright statements may also be found in the *copyright* element. Some LOINC codes have 3rd party copyright statements. When these codes are included in a value set, they must carry their own copyright statement as well.

### Case Sensitivity

For comparison purposes, LOINC codes, displays, and property values are not case sensitive, though implementers SHOULD maintain the correct case when using LOINC codes and property values.

### Use of LOINC PARTS

As described in the [LOINC Manual](http://loinc.org/downloads/files/LOINCManual.pdf) section 10.2, LOINC Parts are a coded representation of a value for a dimension used to specify a LOINC Term which are assigned a non-semantic identifier with a "LP" prefix and a mod-10 check digit. Following the LOINC license, these part codes may be used in the following ways:

-   In filter properties, as described below
-   In [Structure Definitions](structuredefinition-definitions.html), where the structure describes the use of a set of LOINC codes
-   In a [ConceptMap](conceptmap.html) resource, where mappings between LOINC codes and other codes are being defined

Part codes are the same LOINC system (http://loinc.org) and SHALL be represented in uppercase (e.g. LP31755-9).

### Use of LOINC Answer Lists

LOINC also allocates Answer List and Answer String Ids for use in various forms and questionnaires. LOINC Answer String IDs are also valid LOINC codes:

      <coding>
        <system value="http://loinc.org"/>
        <code value="LA11165-0"/>
        <display value="Platelet anisocytosis"/>
      </coding>

LOINC Answer List Ids are actually value set identifiers. See [below](#alist) for how to use these.

### RDF

LOINC uses the namespace http://loinc.org/rdf\# as the root for LOINC concepts in the RDF space. This means that when a LOINC code is converted from the system:code pair, where the system is http://loinc.org, to the [RDF ontological form](rdf.html), the representation is http://loinc.org/rdf\#\[code\].

<span id="props"></span>
### LOINC Properties

In addition to the [standard properties](terminology-service.html#standard-props), the following LOINC table fields are defined as code system properties when using LOINC in FHIR:

|                   |        |                                                                                                                                                                                                                |
|-------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| STATUS            | string | Status of the term                                                                                                                                                                                             |
| COMPONENT         | code   | First major axis-component or analyte: Analyte Name, Analyte sub-class, Challenge                                                                                                                              |
| PROPERTY          | code   | Second major axis-property observed: Kind of Property (also called kind of quantity)                                                                                                                           |
| TIME\_ASPCT       | code   | Third major axis-timing of the measurement: Time Aspect (Point or moment in time vs. time interval)                                                                                                            |
| SYSTEM            | code   | Fourth major axis-type of specimen or system: System (Sample) Type                                                                                                                                             |
| SCALE\_TYP        | code   | Fifth major axis-scale of measurement: Type of Scale                                                                                                                                                           |
| METHOD\_TYP       | code   | Sixth major axis-method of measurement: Type of Method                                                                                                                                                         |
| CLASS             | string | An arbitrary classification of the terms for grouping related observations together                                                                                                                            |
| CONSUMER\_NAME    | string | An experimental (beta) consumer friendly name for this item. The intent is to provide a test name that health care consumers will recognize; it will be similar to the names that might appear on a lab report |
| CLASSTYPE         | string | 1=Laboratory class; 2=Clinical class; 3=Claims attachments; 4=Surveys                                                                                                                                          |
| ORDER\_OBS        | string | Provides users with an idea of the intended use of the term by categorizing it as an order only, observation only, or both                                                                                     |
| DOCUMENT\_SECTION | string | Classification of whether this LOINC code can be used a full document, a section of a document, or both                                                                                                        |

Note that when a [$lookup](codesystem-operation-lookup.html) operation is performed on a LOINC code, servers SHALL return the version being used (see above) in the `version` property. Other properties are at the discretion of the server and the client.

<span id="filters"></span>
### LOINC Filters

This section documents the property filters that can be used with the LOINC code system in value set composition statements.

#### LOINC Property filter

|                    |                                                                                                                      |
|--------------------|----------------------------------------------------------------------------------------------------------------------|
| Description        | Allows the selection of a set of LOINC codes with a common property value (see list above)                           |
| Property Name      | One of the names listed in the "Field Name" column in LOINC Database Structure (Appendix A of the LOINC manual)      |
| Operations Allowed | = / regex                                                                                                            |
| Values Allowed     | \[string value\]                                                                                                     |
| Comments           | The 6 properties COMPONENT, PROPERTY, TIME\_ASPCT, SYSTEM, SCALE\_TYP, and METHOD\_TYP are most likely to be useful. |

#### 3rd Party Copyright

|                    |                                                                                                                                                    |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Description        | Allows for the inclusion or exclusion of LOINC codes that include 3rd party copyright notices                                                      |
| Property Name      | copyright                                                                                                                                          |
| Operations Allowed | =                                                                                                                                                  |
| Values Allowed     | LOINC | 3rdParty                                                                                                                                   |
| Comments           | LOINC = only codes with a sole copyright by Regenstrief. 3rdParty = only codes with a 3rd party copyright in addition to the one from Regenstrief. |

#### Multi-Axial Hierarchy

|                    |                                                                                                                                                                                                                                                                              |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Description        | Allows for the selection of a set of codes base on their appearance in the LOINC multi-axial hierarchy                                                                                                                                                                       |
| Property Name      | parent | ancestor                                                                                                                                                                                                                                                            |
| Operations Allowed | = / in                                                                                                                                                                                                                                                                       |
| Values Allowed     | Part Code (or, for "in", multiple part codes separated by commas)                                                                                                                                                                                                            |
| Comments           | "parent" selects immediate parents only. For example, the code "44022-2" has the parent "LP52960-9". Ancestor includes parents transitively, e.g. "LP52960-9" eventually has a parent "LP31755-9", so the code "44022-2" is in the set of codes that have ancestor=LP31755-9 |

*TODO: Document Ontology*

<span id="implicit"></span>
### Implicit Value Sets

Implicit value sets are those whose specification can be predicted based on the grammar of the underlying code system, and the known structure of the URL that refers to them. LOINC defines one set of implicit value sets: By Multi-Axial Hierarchy Entry.

If any value set resources exist with an identifier that conforms to the URL patterns specified below, the content of the resource must conform to the template provided. Profiles and other value set references are allowed to reference these value sets directly. *todo: can LOINC actually host a service that returns these?*

The value set identifier http://loinc.org/vs is a value set that contains all LOINC codes.

<span id="alist"></span>
#### LOINC Answer List

LOINC defines a set of Answer lists, each of which contains a set of LOINC codes. LOINC answer lists are value sets. The value set identifier "http://loinc.org/vs/\[id\]" identifies a value set that contains a set of LOINC codes. For instance, the value set identifier http://loinc.org/vs/LL715-4 has the following definition for LOINC 2.52:

``` xml
<ValueSet xmlns="http://hl7.org/fhir">
  <text>
    <status value="generated"/>
    <div xmlns="http://www.w3.org/1999/xhtml">
      [some html that identifies that this value set
      includes all LOINC codes in this answer list]
    </div>
  </text>
  <url value="http://loinc.org/vs/LL715-4"/>
  <version value="2.52"/>
  <name value="Platelet morph"/>
  <description value="LOINC Answer List for Platelet morph"/>
  <status value="active"/>
  <date value="[optional date of LOINC release]"/>
  <compose>
    <include>
      <system value="http://loinc.org"/>
      <concept>
        <code value="LA11165-0"/>
        <display value="Platelet anisocytosis"/>
      </concept>
      <concept>
        <code value="LA11168-4"/>
        <display value="Platelet clump"/>
      </concept>
      <concept>
        <code value="LA11167-6"/>
        <display value="Platelet large fragments"/>
      </concept>
      <concept>
        <code value="LA11166-8"/>
        <display value="Platelet satellitism"/>
      </concept>
      <concept>
        <code value="LA11169-2"/>
        <display value="Platelets.agranular"/>
      </concept>
      <concept>
        <code value="LA11170-0"/>
        <display value="Platelets.giant"/>
      </concept>
      <concept>
        <code value="LA11172-6"/>
        <display value="Platelets.large"/>
      </concept>
      <concept>
        <code value="LA11171-8"/>
        <display value="Platelets.small"/>
      </concept>
    </include>
  </compose>
</ValueSet>
```

Here is an example of a LOINC Answer list used in a Questionnaire question:

``` xml
<question>
  <concept>
    <system value="http://loinc.org"/>
    <code value="11125-2"/>
    <display value="Plat morph Bld"/>
  </concept>
  <type value="choice"/>
  <options>
    <reference value="http://loinc.org/vs/LL715-4"/>
  </options>
</question>
```

#### Multi-Axial Hierarchy Entry

A value set with an identifier of "http://loinc.org/vs/\[partcode\]" must conform to this template, where \[partcode\] is a part code from the multi-axial hierarchy:

``` xml
<ValueSet xmlns="http://hl7.org/fhir">
  <text>
    <status value="generated"/>
    <div xmlns="http://www.w3.org/1999/xhtml">
      [some html that identifies that this value set
      includes all LOINC codes subsumed by the identified
      Multi-Axial Hierarchy Part Code]
    </div>
  </text>
  <url value="http://loinc.org/vs/[partcode]"/>
  <version value="[optional - but strongly recommended - LOINC version]"/>
  <name value="LOINC Value Set from Multi-Axial Hierarchy code [partcode]"/>
  <description value="All LOINC codes for [partcode or name]"/>
  <status value="active"/>
  <date value="[optional date of LOINC release]"/>
  <compose>
    <include>
      <system value="http://loinc.org"/>
      <filter>
        <property value="ancestor"/>
        <op value="="/>
        <value value="[partcode]"/>
      </filter>
    </include>
  </compose>
</ValueSet>
```

<span id="dataelements"></span>
#### LOINC and Data Elements

LOINC codes and their properties are describing a data element that can have a value. Functionally, this overlaps with FHIR's notion of a [Logical Data Model](structuredefinition.html#logical). A logical data model can be created for each LOINC code based on it's properties. The representation of each logical model is aligned with LOINC's RDF representation.

``` xml
<StructureDefinition xmlns="http://hl7.org/fhir"> 
  <id value="[LOINC code]"/>
  <url value="http://loinc.org/owl#[LOINC code]"/>
  <version value="{LOINC version number]"/>  <!-- though this is not required -->
  <name value="[display - adjusted]"/> <!-- converted to meet regex by removing spaces, non-supported characters -->
  <title value="[display]"/>
  <status value="[derived from STATUS]"/>
  <experimental value="false"/>
  <date value="[last changed date]"/>
  <publisher value="http://loinc.org"/>
  <copyright value="This content LOINC® is copyright © 1995 Regenstrief Institute, Inc.
      and the LOINC Committee, and available at no cost under the license at 
      http://loinc.org/terms-of-use"/>
  <differential>
    <element>
      <path value="[LOINC code]"/>
      <short value="[display]"/>
      <definition value="[definition]"/>
      <min value="0"/>
      <max value="1"/>
      <type>
        <code value="[mapped type - see below]"/>
      </type>
      <!-- if this is a LOINC question with linked answers -->
      <binding>
        <strength value="required"/>
        <valueSet value="http://loinc.org/vs/[linked answer list code]"/>
      </binding>
    </element>
  </differential>
</StructureDefinition>
```

The canonical URL `http://loinc.org/rdf#[LOINC code]` can be used to refer to logical model elements defined by LOINC such as e.g. in [Questionnaire.item.definition](questionnaire.html).

The appropriate type is determined by mapping from the LOINC specified SCALE\_TYP for v3 to FHIR using this table:

|                |                                                                                 |
|----------------|---------------------------------------------------------------------------------|
| **SCALE\_TYP** | **FHIR data type**                                                              |
| Qn             | Quantity                                                                        |
| Ord            | CodeableConcept                                                                 |
| OrdQn          | Quantity and CodeableConcept (e.g. both in the data element; either is allowed) |
| Nom            | CodeableConcept (and string?)                                                   |
| Nar            | markdown (?)                                                                    |
| Multi          | Attachment                                                                      |
| Doc            | Attachment                                                                      |

\[%file newfooter%\]
