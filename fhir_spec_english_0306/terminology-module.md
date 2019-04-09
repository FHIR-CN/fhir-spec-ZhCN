\[%settitle Terminology Module%\]
\[%file newnavbar%\]
|                                                  |                                                                                        |
|--------------------------------------------------|----------------------------------------------------------------------------------------|
| Work Group [\[%wgt vocab%\]](%5B%wg%20vocab%%5D) | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

<span id="root"></span>
Terminology Module
------------------

<span id="intro"></span>
### Introduction

The Terminology Module provides an overview and guide to the FHIR resources, operations, coded data types and externally-defined standard and FHIR-defined terminologies that are used for representing and communicating coded, structured data in the FHIR core specification and profiles. Collectively, these capabilities are used to provide the terminology service functionality required for supporting the use of coded data in FHIR resources throughout the specification as described in the other modules.

The primary terminology-related structures and their relationships are shown below:

|                                                                                                                                 |
|---------------------------------------------------------------------------------------------------------------------------------|
| <img src="terminology-module-relationships.png" alt="Image showing the terminology resources and relationships" width="1000" /> |

**Example: Condition profile with Condition.code slice bound to "SNOMED CT fracture codes" value set**

\[Note: The ElementDefinition type (shown with a dotted box) is described elsewhere in the specification in the [Foundation](foundation-module.html) and [Conformance](conformance-module.html) modules.\]

<span id="index"></span>
### Index

The Terminology Module covers the following:

**Resources**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><ul>
<li><a href="codesystem.html" title="[%resdesc CodeSystem%]">CodeSystem</a></li>
<li><a href="valueset.html" title="[%resdesc ValueSet%]">ValueSet</a></li>
</ul></td>
<td><ul>
<li><a href="conceptmap.html" title="[%resdesc ConceptMap%]">ConceptMap</a></li>
<li><a href="namingsystem.html" title="[%resdesc NamingSystem%]">NamingSystem</a></li>
</ul></td>
<td><ul>
<li><a href="terminologycapabilities.html" title="[%resdesc TerminologyCapabilities%]">TerminologyCapabilities</a></li>
</ul></td>
</tr>
</tbody>
</table>

**Terminology Service**

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td><ul>
<li><a href="terminology-service.html">Terminology Service Documentation</a></li>
</ul></td>
</tr>
</tbody>
</table>

**Operations**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><ul>
<li><strong>CodeSystem</strong></li>
</ul>
<ul>
<li><a href="codesystem-operation-lookup.html">$lookup</a></li>
<li><a href="codesystem-operation-validate-code.html">$validate-code</a></li>
<li><a href="codesystem-operation-subsumes.html">$subsumes</a></li>
<li><a href="codesystem-operation-find-matches.html">$find-matches</a></li>
</ul></td>
<td><ul>
<li><strong>ValueSet</strong></li>
</ul>
<ul>
<li><a href="valueset-operation-expand.html">$expand</a></li>
<li><a href="valueset-operation-validate-code.html">$validate-code</a></li>
</ul></td>
<td><ul>
<li><strong>ConceptMap</strong></li>
</ul>
<ul>
<li><a href="conceptmap-operation-translate.html">$translate</a></li>
<li><a href="conceptmap-operation-closure.html">$closure</a></li>
</ul></td>
</tr>
</tbody>
</table>

**Coded Data Types**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><ul>
<li><a href="datatypes.html#code">code</a></li>
</ul></td>
<td><ul>
<li><a href="datatypes.html#Coding">Coding</a></li>
</ul></td>
<td><ul>
<li><a href="datatypes.html#CodeableConcept">CodeableConcept</a></li>
</ul></td>
</tr>
</tbody>
</table>

**Documentation**

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><ul>
<li><a href="terminologies.html">Using Codes in Resources</a></li>
<li><a href="terminologies-systems.html">Code Systems Defined/Referenced in FHIR</a></li>
<li><a href="terminologies-valuesets.html">Value Sets Defined in FHIR</a></li>
</ul></td>
<td><ul>
<li><a href="terminologies-conceptmaps.html">Mappings (FHIR-defined) Between Related Value Set Concepts</a></li>
<li><a href="identifier-registry.html">Known Identifier Systems</a></li>
</ul></td>
</tr>
</tbody>
</table>

<span id="secpriv"></span>
### Security and Privacy

For security considerations for terminology services, see the [Terminology Service page Security section](terminology-service.html#4.6.1). For more general considerations, see the [Security and Privacy module](secpriv-module.html).

<span id="uses"></span>
### Common Use Cases

-   Create or reference a code system
-   Create or reference a value set
-   Record data using pre-coordinated codes
-   Record data using post-coordinated expressions
-   Record data using multiple local or standard code systems (translations)
-   Expand a value set
-   Validate a code
-   Look up a display term for a code
-   Translate a code from one value set to another
-   Maintain a client-side [transitive closure table](https://en.wikipedia.org/wiki/Transitive_closure#In_graph_theory) on subsumption relationships
-   Test subsumption between concepts
-   For a set of property/concept pairs, return the set of concepts for the requested properties
-   Map data between different terminologies
-   Declare the capabilities of a terminology service

<span id="roadmap"></span>
### Development Roadmap

The following terminology resources have been tested and are being used in production tooling and now are normative or are expected soon to progress to normative.

-   [ValueSet](valueset.html "A value set specifies a set of codes drawn from one or more code systems.")\[%fmmshort ValueSet%\]
-   [CodeSystem](codesystem.html "The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.")\[%fmmshort CodeSystem%\]
-   [ConceptMap](conceptmap.html "A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.")\[%fmmshort ConceptMap%\]

Other terminology resources are still in earlier stages of development. We intend to continue to develop and test these resources and advance them through the [Maturity Levels](versions.html#maturity) at Connectathons and elsewhere.

-   [NamingSystem](namingsystem.html "A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.")\[%fmmshort NamingSystem%\]
-   [TerminologyCapabilities](terminologycapabilities.html "Resource to document a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.")\[%fmmshort TerminologyCapabilities%\]

\[%file newfooter%\]
