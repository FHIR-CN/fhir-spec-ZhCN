\[%settitle Using SNOMED CT with FHIR%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Using SNOMED CT with FHIR
-------------------------

|                                                  |                                             |                                                                                      |
|--------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt vocab%\]](%5B%wg%20vocab%%5D) Work Group | [Maturity Level](versions.html#maturity): 5 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

### Summary

<table>
<tbody>
<tr class="odd">
<td>Source</td>
<td>SNOMED CT is owned, maintained and distributed by <a href="http://snomed.org/">SNOMED International</a>. SNOMED International is the organization which publishes the International Edition of SNOMED CT. SNOMED International Members may also distribute their own SNOMED CT National Edition, which contains the international release plus local extension content and derivatives.</td>
</tr>
<tr class="even">
<td>System</td>
<td>The URI <a href="http://snomed.info/sct" class="uri">http://snomed.info/sct</a> identifies the SNOMED CT code system.</td>
</tr>
<tr class="odd">
<td>Version</td>
<td>Where a code system version is used, it should be specified as a URI that represents a specific SNOMED CT Edition published on a particular date (e.g. the International Edition or a National Edition, with a version date), following the <a href="http://snomed.org/uristandard">SNOMED CT URI Specification</a> (see note below).</td>
</tr>
<tr class="even">
<td>Code</td>
<td>The following SNOMED CT artifacts are valid in the <em>code</em> element for the http://snomed.info/sct namespace: <a href="https://confluence.ihtsdotools.org/display/DOCGLOSS/concept+identifier">Concept IDs</a> and <a href="https://confluence.ihtsdotools.org/display/DOCGLOSS/expression">SNOMED CT Expressions</a> (using <a href="https://confluence.ihtsdotools.org/display/DOCSCG/Compositional+Grammar+-+Specification+and+Guide">SNOMED CT Compositional Grammar</a>). <a href="https://confluence.ihtsdotools.org/display/DOCGLOSS/term">SNOMED CT Terms</a> and <a href="https://confluence.ihtsdotools.org/display/DOCGLOSS/description+identifier">Description Identifiers</a> are not valid as codes in FHIR, nor are other alternative identifiers associated with SNOMED CT Concepts.<br />
<br />
Note: When <a href="https://confluence.ihtsdotools.org/display/DOCGLOSS/term">SNOMED CT Terms</a> must be exchanged, use the <a href="extension-coding-sctdescid.html">Description Id Extension.</a></td>
</tr>
<tr class="odd">
<td>Display</td>
<td>The correct display for a <a href="https://confluence.ihtsdotools.org/display/DOCGLOSS/Concept">SNOMED CT concept</a> is one of the <a href="https://confluence.ihtsdotools.org/display/DOCGLOSS/term">terms</a> associated with that concept. The best display is the preferred term in the relevant language or dialect, as specified in the associated language reference set. SNOMED CT synonyms may be case sensitive.<br />
<br />
SNOMED International does not define terms for expressions. If a SNOMED terminology producer publishes human-readable terms for expressions in an expression repository, this term may be used as the display. Similarly, if a SNOMED terminology producer publishes an official template for generating terms from an expression, a term generated using the template may be used as the display. If no term or description template has been published, the full expression with terms embedded may be used.<br />
<br />
Note that Display is not intended to contain terms entered by the user that have not been officially published by a SNOMED CT Terminology Producer.</td>
</tr>
<tr class="even">
<td>Inactive</td>
<td>Inactive codes are identified using the 'inactive' property (see below)</td>
</tr>
<tr class="odd">
<td>Subsumption</td>
<td>SNOMED CT Subsumption testing for concepts is based on the |is a| relationship defined by SNOMED CT</td>
</tr>
<tr class="even">
<td>Filter Properties</td>
<td>Several filter properties are defined, as described below</td>
</tr>
</tbody>
</table>

This specification publishes a [canonical SNOMED CT](codesystem-snomedct.html) [CodeSystem](codesystem.html) resource. See also the [SNOMED CT Usage Summary](snomedct-usage.html).

Note: The [SNOMED International glossary](http://snomed.org/gl) explains some of these SNOMED CT specific terms.

### Copyright and Licenses

This specification includes content from SNOMED Clinical Terms® (SNOMED CT®) which is copyright of the International Health Terminology Standards Development Organisation (IHTSDO) (trading as SNOMED International). Implementers of these specifications must have the appropriate SNOMED CT Affiliate license - for more information contact <http://www.snomed.org/snomed-ct/get-snomed-ct> or <info@snomed.org>.

### Versions

There is no single distribution that contains all defined SNOMED CT codes in all contexts of use. Instead the International Edition contains all concepts shared and agreed to be internationally relevant and each National Release Centre distributes this International Edition plus additional national content (to extend the international set). Other release authorities may also be designated. The [SNOMED CT URI Specification](http://snomed.org/uristandard) describes how to unambiguously reference a particular version of a SNOMED CT edition:

      http://snomed.info/sct/[sctid]/version/[YYYYMMDD]

where \[sctid\] is the concept id that identifies the given SNOMED CT edition (based on the identifier of the most dependent module), and "YYYYMMDD" is the date of release. Examples of sctids that identify a specific edition are [listed here](https://confluence.ihtsdotools.org/display/DOCEXTPG/4.4.2+Edition+URI+Examples).

Note that many implementations are in the habit of simply using the date of release in the form YYYYMMDD (e.g. "20140531"), and assuming that the edition is known. However, this is not always safe, so implementations that populate the *version* element SHOULD use the URI form.

Servers SHOULD regard provision of the date only for the version (without an sctid) as an error, and refuse to process the interaction or operation. At minimum the URI SHOULD contain the sctid of the SNOMED CT distribution:

    http://snomed.info/sct/[sctid]

Implementers must note, if no version URI is provided when utilizing SNOMED CT, the Terminology Service may default to the most recent version of the SNOMED CT International Edition available on the service (or the latest available of another edition that may be preferred for the locale). Further, if the date of release is not provided, the Terminology Service may default to the most recent version of the named SNOMED CT distribution (e.g. 32506021000036107 for Australia).

In terms of the CodeSystem resource definitions, this means that SNOMED CT is distributed as a set of overlapping fragments that contain different parts of the entire code system that is SNOMED CT. Terminology servers and users always need to be aware of which fragment(s) are in use at any time, though implementations can sometimes safely assume that a national distribution is the only scope. Note that because of SNOMED CT's large size, there is no expectation that implementers will ever use a CodeSystem resource instead of the SNOMED CT RF2 format as a way to distribute SNOMED CT content.

### Display Terms for Specific Languages

In the ValueSet resource any number of terms ('[designations](http://build.fhir.org/valueset.html#designations)') in additional languages and dialects can be specified for a particular concept in a value set definition using the [ValueSet.compose.include.concept.designation](http://build.fhir.org/codesystem-definitions.html#CodeSystem.concept.designation) element. The language is specified as a [BCP-47](http://tools.ietf.org/html/bcp47) language code as required by the '[designation.language](http://build.fhir.org/valueset-definitions.html#ValueSet.compose.include.concept.designation.language)' element, with the value taken from the 'languageCode' field of the RF2 Descriptions file ('languageCode' is ISO-639-1, a subset of BCP-47). The [type](http://build.fhir.org/valueset-designation-use.html) of the term (e.g., the SNOMED CT code for "Fully specified name", "Synonym" or "Definition") can be specified in '[designation.use](http://build.fhir.org/valueset-definitions.html#ValueSet.compose.include.concept.designation.use)'.

\[Note that ValueSet.compose.include.concept is only used when the value set is defined extensionally (i.e. as an enumerated list of concepts). For intensionally-defined value sets (i.e. using one or more filters) additional terms could be added using CodeSystem.concept.designation, as noted below.\]

The CodeSystem resource can also similarly be used to specify additional terms ('[designations](http://build.fhir.org/codesystem.html#designations)') for a concept using the [CodeSystem.concept.designation](http://build.fhir.org/codesystem-definitions.html#CodeSystem.concept.designation) element (the additional terms may be from a published national or other localized SNOMED CT edition or provided in a [code system supplement](http://build.fhir.org/codesystem.html#supplements)). If supported by the terminology server, the additional terms are available to be returned in a [value set expansion](http://build.fhir.org/valueset.html#expansion) (controlled by the [$expand](http://build.fhir.org/valueset-operation-expand.html#4.8.1.1) operation 'includeDesignations' input parameter).

### SNOMED CT Expressions

A [SNOMED CT Expression](https://confluence.ihtsdotools.org/display/DOCGLOSS/SNOMED+CT+expression) is a structured combination of one or more clinical concepts, stated using [Compositional Grammar Syntax](https://confluence.ihtsdotools.org/display/DOCSCG). Expressions may optionally contain display terms.

### RDF

The SNOMED International URI specification uses the namespace http://snomed.info/sct for the code system, and the URI http://snomed.info/id for the individual concepts in the code system. This means that when a SNOMED CT concept is converted from the system::code pair, where the system is http://snomed.info/sct, to the [RDF ontological form](rdf.html), the representation is http://snomed.info/id/\[concept-id\]. Expressions are represented using the URI pattern http://snomed.info/scg/\[expression\]. Expressions represented in this way SHALL NOT contain whitespace, terms or comments.

<span id="props"></span>
### SNOMED CT Properties

In addition to the [standard properties](terminology-service.html#standard-props), the following properties are defined for SNOMED CT:

|                     |               |                                                                                                                                                                                                                                                                                |
|---------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Property Name**   | **Data Type** | **Comments**                                                                                                                                                                                                                                                                   |
| inactive            | boolean       | Whether the code is active or not (defaults to false). This is derived from the active column in the Concept file of the RF2 Distribution (by inverting the value).                                                                                                            |
| sufficientlyDefined | boolean       | True if the description logic definition of the concept includes sufficient conditions. This is derived from the definitionStatusId value in the Concept file of the RF2 distribution (i.e. If 900000000000073002 |Sufficiently defined concept definition status| then true). |
| moduleId            | code          | The SNOMED CT concept id of the module that the concept belongs to.                                                                                                                                                                                                            |
| normalForm          | string        | Generated Necessary Normal Form expression for the provided code or expression, with terms. The normal form expressions are not suitable for use in subsumption testing.                                                                                                       |
| normalFormTerse     | string        | Generated Necessary Normal form expression for the provided code or expression, concept ids only. The normal form expressions are not suitable for use in subsumption testing.                                                                                                 |

SNOMED CT relationships, where the relationship type is subsumed by 410662002 |Concept model attribute|, also automatically become properties. Properties that represent SNOMED CT concept model attributes are referred to using their concept id, rather than their human readable term.

For example, the laterality property is represented using the concept id '272741003', rather than the term 'laterality':

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Property Name</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Comments</strong></td>
</tr>
<tr class="even">
<td>272741003</td>
<td>code</td>
<td><p>The value of the laterality attribute in the definition of the given code or expression. The equivalent URI for the laterality property is <code>http://snomed.info/id/272741003   (see the code   system definition).</code></p></td>
</tr>
</tbody>
</table>

Note that when a [$lookup](codesystem-operation-lookup.html) operation is performed on a SNOMED CT concept, servers SHALL return the URI for the edition and version being used (see above) in the `version` property. Other properties are at the discretion of the server and the client.

<span id="filters"></span>
### SNOMED CT Filters

This section documents the property filters that can be used with the SNOMED CT code system in value set composition statements. For implementer convenience, some of the property filters are documented in terms of the [SNOMED CT Expression Constraint Language](http://snomed.org/ecl), but this does not imply that its use is required.

#### By Subsumption

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Select a set of concepts based on subsumption testing</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>concept</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>is-a</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>[concept id]</td>
</tr>
<tr class="odd">
<td>Comments</td>
<td>Includes all concept ids that have a transitive is-a relationship with the concept id provided as the value (including the concept itself)</td>
</tr>
<tr class="even">
<td>Example</td>
<td><a href="valueset-administration-method-codes.html">Administration Methods</a></td>
</tr>
<tr class="odd">
<td><a href="http://snomed.org/ecl">SCT ECL</a></td>
<td><pre><code>&lt;&lt; [concept] (Long syntax: descendantOrSelfOf [concept])</code></pre></td>
</tr>
</tbody>
</table>

#### By Reference Set

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Select a set of concepts based on their membership of a SNOMED CT reference set</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>concept</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>in</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>[concept id]</td>
</tr>
<tr class="odd">
<td>Comments</td>
<td>Includes all concept ids that are active members of the reference set identified by the concept id provided as the value</td>
</tr>
<tr class="even">
<td><a href="http://snomed.org/ecl">SCT ECL</a></td>
<td><pre><code>^ [concept] (Long syntax: memberOf [concept])</code></pre></td>
</tr>
</tbody>
</table>

#### By SNOMED Expression Constraint

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Select a set of concepts based on a formal expression constraint</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>constraint</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>=</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>[expression constraint]</td>
</tr>
<tr class="odd">
<td>Comments</td>
<td>The result of the filter is the result of executing the given <a href="http://snomed.org/ecl">SNOMED CT Expression Constraint</a>.<br />
Example:
<pre class="json"><code> &quot;compose&quot;: {
  &quot;include&quot;: [
    {
      &quot;system&quot;: &quot;http://snomed.info/sct&quot;,
      &quot;filter&quot;: [
        {
          &quot;property&quot;: &quot;constraint&quot;,
          &quot;op&quot;: &quot;=&quot;,
          &quot;value&quot;: &quot;&lt;&lt; 30506011000036107 |Australian product|: 700000101000036108 |hasTP| = 17311000168105 |Panadol|&quot;
        }
      ]
    }
  ]
}

   </code></pre></td>
</tr>
</tbody>
</table>

#### By whether post-coordination is allowed

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Specify whether post-coordination is allowed or not</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>expressions</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>=</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>true or false</td>
</tr>
<tr class="odd">
<td>Comments</td>
<td>Expressions, if allowed, are subject to the same rules as precoordinated concepts. [Note: Simple reference sets do not include expressions.]</td>
</tr>
<tr class="even">
<td>Example</td>
<td><a href="valueset-administration-method-codes.html">Administration Methods</a></td>
</tr>
<tr class="odd">
<td><a href="http://snomed.org/ecl">SCT ECL</a></td>
<td><pre><code>n/a</code></pre></td>
</tr>
</tbody>
</table>

<span id="implicit"></span>
### Implicit Value Sets

Implicit value sets are those whose specification can be predicted based on the grammar of the underlying code system, and the known structure of the URL that identifies them. SNOMED CT has two common sets of implicit value sets defined: By Subsumption, and By Reference Set. These implicit value sets do not use complex queries. Implicit value sets can also be defined using an expression constraint. The implicit value set capability allows a single URL to serve as a value set definition, and can serve as the basis for the [$expand](valueset-operation-expand.html) operation and for other value set references.

If any value set resources exist with an identifier that conforms to the URL patterns specified below, the content of the resource must conform to the template provided. Profiles and other value set references can reference these value sets directly (by reference as a URI, rather than by a literal value set reference).

A SNOMED CT implicit value set URL has two parts:

-   The base URL is either <http://snomed.info/sct>, or the URI for the edition version, in the format specified by SNOMED International in the [SNOMED CT URI Specification](http://snomed.org/uristandard)
-   A query portion that specifies the scope of the content

The URL <http://snomed.info/sct> should be understood to mean an unspecified edition/version. This defines an incomplete value set whose actual membership will depend on the edition used when it is expanded. If no version or edition is specified, the terminology service SHALL use the latest version available for its default edition (or the International Edition, if no other edition is the default).

For the second part of the URL (the query part), the 5 possible values are:

-   ?fhir\_vs - all concept ids in the edition/version. If the base URI is <http://snomed.info/sct>, this means all possible SNOMED CT concepts
-   ?fhir\_vs=isa/\[sctid\] - all concept ids that are subsumed by the specified concept.
-   ?fhir\_vs=refset - all concept ids that correspond to reference sets that are explicitly defined in the specified SNOMED CT edition
-   ?fhir\_vs=refset/\[sctid\] - all concept ids in the specified reference set
-   ?fhir\_vs=ecl/\[ecl\] - all concept ids that match the supplied (URI-encoded) expression constraint

A value set with a URL that follows the pattern "\[edition/version\]?fhir\_vs=isa/\[sctid\]" follows this template:

``` xml
<ValueSet xmlns="http://hl7.org/fhir">
  <text>
    <status value="generated"/>
    <div xmlns="http://www.w3.org/1999/xhtml">
     [Some HTML that describes this value set as all concepts subsumed by sctid]
    </div>
  </text>
  <url value="[edition/version]?fhir_vs=isa/[sctid]"/>
  <version value="[edition/version]"/>
  <name value="SNOMED CT Concept [sctid] and descendants"/>
  <description value="All SNOMED CT concepts for [sctid or preferred description]"/>
  <copyright value="This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (SNOMED International), and distributed by agreement between SNOMED International and HL7. Implementer use of SNOMED CT is not covered by this agreement"/>
  <status value="active"/>
  <compose>
    <include>
      <system value="http://snomed.info/sct"/>
      <filter>
        <property value="concept"/>
        <op value="is-a"/>
        <value value="[sctid]"/>
      </filter>
    </include>
  </compose>
</ValueSet>
```

The value set with a url that follows the pattern "\[edition/version\]?fhir\_vs=refset" follows this template:

``` xml
<ValueSet xmlns="http://hl7.org/fhir">
  <text>
    <status value="generated"/>
    <div xmlns="http://www.w3.org/1999/xhtml">
     [Some HTML that describes this value set as all concepts with associated reference sets]
    </div>
  </text>
  <url value="[edition/version]?fhir_vs=refset"/>
  <version value="[edition/version]"/>
  <name value="SNOMED CT Reference Sets"/>
  <description value="All SNOMED CT concepts associated with a reference set"/>
  <copyright value="This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (SNOMED International), and distributed by agreement between SNOMED International and HL7. Implementer use of SNOMED CT is not covered by this agreement"/>
  <status value="active"/>
  <compose>
    <include>
      <system value="http://snomed.info/sct"/>
      <!-- repeat: one concept element with a code for each concept that has an associated reference set -->
      <concept>
        <code value="[sctid]"/>
      </concept>
      <!-- end repeat -->
    </include>
  </compose>
</ValueSet>
```

For each concept that is associated with a reference set, there will be one 'concept' element with a contained 'code' element that contains the sctid.

A value set with a url that follows the pattern "\[edition/version\]?fhir\_vs=refset/\[sctid\]" follows this template:

``` xml
<ValueSet xmlns="http://hl7.org/fhir">
  <text>
    <status value="generated"/>
    <div xmlns="http://www.w3.org/1999/xhtml">
     [Some HTML that describes this value set as all concepts in the reference set identified by sctid]
    </div>
  </text>
  <url value="[edition/version]?fhir_vs=refset/[sctid]"/>
  <version value="[edition/version]"/>
  <name value="SNOMED CT Reference Set [sctid]"/>
  <description value="All SNOMED CT concepts in the reference set [sctid or preferred description]"/>
  <copyright value="This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (SNOMED International), and distributed by agreement between SNOMED International and HL7. Implementer use of SNOMED CT is not covered by this agreement"/>
  <status value="active"/>
  <compose>
    <include>
      <system value="http://snomed.info/sct"/>
      <filter>
        <property value="concept"/>
        <op value="in"/>
        <value value="[sctid]"/>
      </filter>
    </include>
  </compose>
</ValueSet>
```

A value set with a url that follows the pattern "\[edition/version\]?fhir\_vs=ecl/\[ecl\]" follows this template:

``` xml
<ValueSet xmlns="http://hl7.org/fhir">
  <text>
    <status value="generated"/>
    <div xmlns="http://www.w3.org/1999/xhtml">
     [Some HTML that describes this value set as all concepts that match the expression constraint ecl]
    </div>
  </text>
  <url value="[edition/version]?fhir_vs=ecl/[ecl]"/>
  <version value="[edition/version]"/>
  <name value="SNOMED CT Concepts matching [ecl]"/>
  <description value="All SNOMED CT concepts that match the expression constraint [ecl]"/>
  <copyright value="This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (SNOMED International), and distributed by agreement between SNOMED International and HL7. Implementer use of SNOMED CT is not covered by this agreement"/>
  <status value="active"/>
  <compose>
    <include>
      <system value="http://snomed.info/sct"/>
      <filter>
        <property value="constraint"/>
        <op value="="/>
        <value value="[ecl]"/>
      </filter>
    </include>
  </compose>
</ValueSet>
```

<span id="implicit-cm"></span>
### Implicit Concept Maps

Implicit concept maps are those whose specification can be predicted based on the grammar and/or content of the underlying code system, and the known structure of the URL that identifies them. This allows a single URL to serve as a concept map definition that defines a mapping between two sets of concepts, and which can serve as the basis for the [$translate](conceptmap-operation-translate.html) operation. SNOMED CT has two common sets of implicit concept maps defined:

-   Association Reference Sets
-   Simple Map Reference Sets

[Association Reference Sets](https://confluence.ihtsdotools.org/display/DOCRELFMT/5.2.5+Association+Reference+Set) are part of the core SNOMED CT distribution. The following standard Association Reference sets can be used for implicit concept maps:

|                        |                    |                  |
|------------------------|--------------------|------------------|
| **Name**               | **Concept Id**     | **Relationship** |
| POSSIBLY EQUIVALENT TO | 900000000000523009 | inexact          |
| REPLACED BY            | 900000000000526001 | equivalent       |
| SAME AS                | 900000000000527005 | equal            |
| ALTERNATIVE            | 900000000000530003 | inexact          |

[Simple Map Reference Sets](https://confluence.ihtsdotools.org/display/DOCRELFMT/5.2.5+Association+Reference+Set) (reference sets which are descendants of 900000000000496009 "Simple map") also define an implicit concept map.

If any ConceptMap resources exist with an identifier that conforms to the URL pattern specified below, the content of the resource must conform to the template provided. Canonical references to ConceptMap resource instances are made using their URI.
A SNOMED CT implicit concept map URL has two parts:

-   The base URL is either <http://snomed.info/sct>, or the URI for the edition version, in the format specified by SNOMED International in the [SNOMED CT URI Specification](http://snomed.org/uristandard)
-   A query portion that specifies the scope of the content

The URL <http://snomed.info/sct> should be understood to mean an unspecified edition/version. This defines an incomplete concept map whose actual membership will depend on the edition being used. If no version or edition is specified, the terminology service SHALL use the latest version available for its default edition (or the International Edition, if no other edition is the default).

For the second part of the URL (the query part), there is only one possible value:

-   ?fhir\_cm=\[sctid\] - where \[sctid\] is a value from the table above

A concept map with a URL that follows the pattern "\[edition/version\]?fhir\_cm=\[sctid\]" follows this template, where \[name\], \[sctid\] and \[relationship\] are taken from the table above:

``` xml
<ConceptMap xmlns="http://hl7.org/fhir">
  <text>
    <status value="generated"/>
    <div xmlns="http://www.w3.org/1999/xhtml">
     [Some HTML that describes this concept map]
    </div>
  </text>
  <url value="[edition/version]?fhir_cm=[sctid]"/>
  <version value="[edition/version]"/>
  <name value="SNOMED CT [name] Concept Map"/>
  <description value="The concept map implicitly defined by the [name] Association Reference Set"/>
  <copyright value="This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (SNOMED International), and distributed by agreement between SNOMED International and HL7. Implementer use of SNOMED CT is not covered by this agreement"/>
  <status value="active"/>

  <sourceUri value="[edition/version]?fhir_vs"/>
  <targetUri value="[edition/version]?fhir_vs"/>
  <group>  <!-- 0..* Same source and target systems -->
    <source value="http://snomed.info/sct"/>
    <sourceVersion value="[edition/version]"/>
    <target value="http://snomed.info/sct"/>
    <targetVersion value="[edition/version]"/>

    <!-- a mapping for each member of the reference set -->
    <element>
      <code value="[member]"/>
      <target>
        <code value="[reference set value]"/>
        <equivalence value="[relationship]"/>
      </target>
    </element>
  </group>
</ConceptMap>
```

\[%file newfooter%\]
