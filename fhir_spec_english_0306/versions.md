\[%settitle Version Management Policy%\]
\[%file newnavbar%\]
|                                                |                                                     |                                                                                      |
|------------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): Normative | [Standards Status](versions.html#std-process):[Normative](versions.html#std-process) |

\[%normative page%\]
Version Management Policy
-------------------------

This page documents the way version change is handled in FHIR. FHIR is a standard, so the way version change is handled is a bit different from an application API. This page describes:

-   [The standards development process](#std-process)
-   [The FHIR Maturity Model](#maturity)
-   [How FHIR versions work](#versions)
-   [The rules for inter-version change once an artifact is Normative](#change)
-   [Managing Change during the development process](#stu)
-   [Plans for future releases](#plans)

See also [Managing FHIR Versions](versioning.html) for additional implementer advice about dealing with versions.

<span id="std-process"></span>
### The Standards Development Process

FHIR is a standard. In order to be useful, standards need to evolve. At the same time, the evolution of standards needs to be predictable and manageable for the implementation community. This section describes how HL7 develops a standard so that implementers know what to expect as the standard evolves.

HL7 has four descriptive terms that describe the level of stability and implementation readiness associated with different aspects of the specification. They are as follows:

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th>Standard Level</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><span id="draft"></span>Draft</td>
<td>This portion of the specification is not considered to be complete enough or sufficiently reviewed to be safe for implementation. It may have known issues or still be in the &quot;in development&quot; stage. It is included in the publication as a place-holder, to solicit feedback from the implementation community and/or to give implementers some insight as to functionality likely to be included in future versions of the specification. Content at this level should only be implemented by the brave or desperate and is very much &quot;use at your own risk&quot;. The content that is <em>Draft</em> that will usually be elevated to <em>Trial Use</em> once review and correction is complete after it has been subjected to ballot</td>
</tr>
<tr class="even">
<td><span id="stu"></span>Trial Use</td>
<td><p>This content has been well reviewed and is considered by the authors to be ready for use in production systems. It has been subjected to ballot and approved as an official standard. However, it has not yet seen widespread use in production across the full spectrum of environments it is intended to be used in. In some cases, there may be documented known issues that require implementation experience to determine appropriate resolutions for.</p>
<p><strong>Future versions of FHIR may make significant changes to <em>Trial Use</em> content that are not compatible with previously published content.</strong></p></td>
</tr>
<tr class="odd">
<td><span id="normative"></span>Normative</td>
<td>This content has been subject to review and production implementation in a wide variety of environments. The content is considered to be stable and has been 'locked', subjecting it to FHIR <a href="#change">Inter-version Compatibility Rules</a>. While changes are possible, they are expected to be infrequent and are tightly constrained.</td>
</tr>
<tr class="even">
<td>Informative</td>
<td>This portion of the specification is provided for implementer assistance and does not make rules that implementers are required to follow. Typical examples of this content in the FHIR specification are tables of contents, registries, examples, and implementer advice</td>
</tr>
<tr class="odd">
<td>Deprecated</td>
<td>This portion of the specification is outdated and may be withdrawn in a future version. Implementers who already support it should continue to do so for backward compatibility. Implementers should avoid adding new uses of this portion of the specification. The specification should include guidance on what implementers should use instead of the deprecated portion</td>
</tr>
</tbody>
</table>

<span id="mixed"></span>
#### Mixed Normative content

Some Normative artifacts contain a few parts labeled as 'Trial Use' *even though the artifact itself is labeled 'Normative'*:

-   Some normative resources contain elements labeled as 'trial-use'
-   Some normative pages contain sections labeled as 'trial-use'

While HL7 prefers to avoid this outcome, there are several resources where the overall functionality of the artifact is clearly ready to be labeled as 'normative' while some very specific parts are known not to have the requisite level of implementation experience as the rest of the resource. E.g. [Bundle.signature](bundle-definitions.html#Bundle.signature).

Where a Normative resource contains elements marked as trial-use, these elements are clearly marked in the resource definitions. Implementers should be aware that future versions of the FHIR specification may change these parts of the resources (in addition to the other changes allowed under the [inter-version compatibility rules](versions.html#change). While HL7 will carefully consider the consequences of breaking change to these elements, implementers should be aware that reading/using these elements has the potential to cause breaking change to their applications later.

Note that this same status will arise as a matter of process when new elements are introduced into normative resources in future versions - they will undergo a period of trial use as appropriate.

Note: it is also possible that some resources in the future will be labeled as 'trial use', but contain some elements labeled as 'normative'. There is no resource like this in this specification, though all Trial Use resources contain normative content from [Resource](resource.html) and [DomainResource](domainresource.html), and the [Data types](datatypes.html).

This release (Release 3) is a *Trial Use* Specification, though a little of the content (where marked specifically at the top of the page) is *Draft*. For Release 4, *some* content is *Normative*.

Notes:

-   The above statuses can apply to both the standard overall as well as to individual components of the FHIR specification
-   Between FHIR release 2 and 3, HL7 changed from using "DSTU" (Draft Standard for Trial Use) to just simply "STU" (Standard for Trial Use) to reflect the maturity of the FHIR specification: Release 2 and particularly this Release 3 are far beyond "draft" specifications and have been and will be widely implemented.
-   Most pages in the specification identify their status explicitly. The few pages that don't are Table of contents pages, and are all *Informative*
-   Some content is labeled with the status "External", which means that the content is maintained in another standard, and the status must be found by consulting that other standard. In this case, the Maturity Model does not apply

<span id="levels"></span> <span id="maturity"></span>
### Maturity Levels

The content of this release has been subject to significant review through ballot and other HL7 processes and many aspects of it have been implemented and subjected to interoperability testing through Connectathons and early adoption. However, the degree of testing has varied. Some resources have been well tested in a variety of environments. Others have received relatively little real-world exercise. In general, the infrastructure should be considered to be more stable than the resources themselves. In some cases, there are issues on which input is specifically requested during the [Trial Use](#stu) period (see the [Outstanding Issue List](todo.html), and known issues will arise after publication (refer to the [FHIR Change Request](http://hl7.org/fhir-issues) tracker for details.) Guidance from early implementation will help address these areas.

All artifacts in this specification are assigned a "Maturity Level", known as FMM (after the well-known [CMM](http://en.wikipedia.org/wiki/Capability_Maturity_Model) grades). The FMM level can be used by implementers to judge how advanced - and therefore stable - an artifact is. The following FMM levels are defined:

|               |                                                                                                                                                                                                                                                                                                                                                                                                                               |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Draft (0)     | the resource or profile (artifact) has been published on the current build. This level is synonymous with *Draft*                                                                                                                                                                                                                                                                                                             |
| **FMM 1**     | PLUS the artifact produces no warnings during the build process and the responsible WG has indicated that they consider the artifact substantially complete and ready for implementation. For resources, profiles and implementation guides, the FHIR Management Group has approved the underlying resource/profile/IG proposal                                                                                               |
| **FMM 2**     | PLUS the artifact has been tested and successfully supports interoperability among at least three independently developed systems leveraging most of the scope (e.g. at least 80% of the core data elements) using semi-realistic data and scenarios based on at least one of the declared scopes of the artifact (e.g. at a connectathon). These interoperability results must have been reported to and accepted by the FMG |
| **FMM 3**     | PLUS + the artifact has been verified by the work group as meeting the [Conformance Resource Quality Guidelines](https://confluence.hl7.org/display/FHIR/Conformance+QA+Criteria); has been subject to a round of formal balloting; has at least 10 distinct implementer comments recorded in the tracker drawn from at least 3 organizations resulting in at least one substantive change                                    |
| **FMM 4**     | PLUS the artifact has been tested across its scope (see below), published in a formal publication (e.g. `Trial-Use`), and implemented in multiple prototype projects. As well, the responsible work group agrees the artifact is sufficiently stable to require implementer consultation for subsequent non-backward compatible changes                                                                                       |
| **FMM 5**     | the artifact has been published in two formal publication release cycles at FMM1+ (i.e. Trial-Use level) and has been implemented in at least 5 independent production systems in more than one country                                                                                                                                                                                                                       |
| **Normative** | the artifact is now considered stable                                                                                                                                                                                                                                                                                                                                                                                         |

Tested across scope means:

-   The [FMG](https://confluence.hl7.org/display/FMG) has signed off on the list of "example contexts" defined for the artifact
-   For each example context, the artifact has either been: reviewed and approved by a domain expert for that scope area, mapped to an existing implemented scope-area-specific standard or tested in an implementation

The Maturity level is strongly related to stability; the higher the maturity level, the more controls are enforced to restrict breaking changes to the resource. For further information, and discussion, see the [FHIR Confluence page](https://confluence.hl7.org/display/FHIR/FHIR+Maturity+Model).

The maturity model is significantly influenced by the degree and type of implementation activity using an artifact. For this reason, we encourage implementers to [register their implementations](http://fhir.org/implementations/usage). A detailed analysis of the basis for the maturity metrics for FHIR artifacts can be found [here](https://docs.google.com/spreadsheets/d/18HfXF7mUCUV7jACCG0oejFp6D-ibtvbmcgywNhn76lw).

<span id="versions"></span>
### FHIR Releases and Versioning

New versions of FHIR will be published on a release cycle of approximately 18-24 months. This frequency is based on the timelines necessary to consult with implementers, to develop and review new content, as well as to undertake the formal balloting and reconciliation processes required for ANSI-approved standards. This release cycle also ensures an opportunity to incorporate implementer feedback from earlier versions of the specification into subsequent versions. Limited-scope releases on a shorter timeline may occur occasionally where necessary to meet implementer needs.

Each new release is assigned a unique version number. The FHIR version policy is based on [Semantic versioning](http://semver.org/), but with some differences due to the fact that FHIR is a specification, not a software API.

There is a single development version of FHIR. This undergoes cycles of development as managed by HL7. Each major cycle of development is concluded by a formal ballot (or more than one), and then a new specification is published. In version control terms, each published specification is a branch off the development trunk, which may then itself undergo further change as HL7 maintains the published specification (though such changes are usually minimal, limited to necessary technical corrections or security alerts).

Each FHIR version is identified by a string composed from 4 parts: publication.major.minor.revision.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>publication</td>
<td><ul>
<li>Incremented when HL7 publishes FHIR as an updated specification, e.g. a <em>Trial Use</em> or <em>Normative</em> version of FHIR</li>
<li>The first <em>Trial Use</em> was version 0</li>
<li>FHIR Release 2 (DSTU) was version 1</li>
<li>FHIR Release 3 (STU) is version 3 (skipped '2' to align the major numbers at implementer request)</li>
</ul></td>
</tr>
<tr class="even">
<td>major</td>
<td><ul>
<li>Increments every time a breaking change is made (see <a href="#change">below</a>)</li>
<li>When a new publication is made, this is reset to 0 in the publication, and 1 in the development branch</li>
<li>Since HL7 does not make breaking changes as technical corrections to a published specification, these versions of FHIR always have a version number X.0.n.r</li>
<li>Because the development version is the subject of ongoing analysis, debate, ballot and repeated alterations, breaking changes are to be expected in STU content</li>
</ul></td>
</tr>
<tr class="odd">
<td>minor</td>
<td><ul>
<li>Increments every time an official snapshot release is generated that contains one or more substantive changes</li>
<li>Resets to 0 any time the major version changes</li>
<li>Snapshot releases are produced approximately 6 weeks in advance of the 3 annual HL7 working group meetings (and their associated connectathons), though they can also be produced for other major connectathons or to meet implementer requirements.</li>
</ul></td>
</tr>
<tr class="even">
<td>revision</td>
<td><ul>
<li>The hash for the GIT version from which the specification was built, for tracing publication / tooling issues</li>
<li>For the current build, changes are made numerous times a day, generally driven by <a href="http://hl7.org/fhir-issues">change requests</a> submitted by the implementation community</li>
<li>The publication revision number only changes when technical corrections are made</li>
</ul></td>
</tr>
</tbody>
</table>

Additional notes:

-   Changes to a formally published specification (except for minor publishing corrections, such as correcting broken external links) are only made via announced technical corrections
-   The reference implementations have 2 versions - the version of the specification that they implement and their own version. Consult the reference implementation documentation for policy regarding this version number
-   The current build - published by the continuous integration service (<http://build.fhir.org/>) - does not conform to this version policy, in that the version is not updated as changes are made. To indicate this, the revision is always "cb" e.g. 3.1.cb immediately after the publication of Release 3
-   The first DSTU was published prior to these rules being agreed as v0.80-2286. This has been updated to 0.0.81.2382 as a technical correction to align with this policy on 9-May 2014

<span id="version-identification"></span>
### Version identification

The FHIR version is usually known implicitly, but can be specified/determined by one of three methods:

-   The [fhirVersion](capabilitystatement-definitions.html#CapabilityStatement.fhirVersion) element in the applicable [CapabilityStatement](capabilitystatement-definitions.html), [StructureDefinition](structuredefinition.html), or [ImplementationGuide](implementationguide.html)
-   The [fhirVersion parameter](http.html#version-parameter) on the MIME-type that applies to the resource
-   Specifying a version specific profile on the resource itself in [Resource.meta](resource.html#Meta)

For further information, see [Managing Multiple FHIR Versions](versioning.html).

<span id="change"></span>
### Rules for Inter-version change

\[%dragons-start%\]
The intent of these rules is to ensure that applications that are conformant to an existing specification are also conformant to subsequent versions. In practice, there are many subtle issues around inter-version change, and the exact rules are subject to further clarification based on feedback from implementers.

\[%dragons-end%\]
The following kinds of changes may be made to the specification:

-   **Breaking changes** are changes that mean that previously conformant applications are no longer conformant to the updated specification
-   **Substantive changes** are changes that introduce new functionality - changes to the specification that create new capabilities - but would not render unchanged existing applications non-conformant
-   **Non-substantive changes** should not cause changes in any conformant application. For example, section renumbering, correcting broken links, changing styles, fixing typos, and providing clarifications that do not change the meaning of the specification. In addition, this covers corrections that are judged not to create any expectation of change to a conformant application

NOTE: The examples provided as part of this specification are never substantive. While every effort is made to ensure that FHIR examples are correct, changes to the examples in the specification are not considered substantive.

Content with a status of *Draft* or *Trial Use* can change - including Breaking Changes - from version to version, subject to the rules described by the [Maturity Process](#maturity). There are no rules for maintaining any sort of compatibility between versions for content with these statuses, though of we will only make breaking changes based on feedback from the community.

Once an artifact achieves *Normative* status, specific rules come into play around inter-version compatibility. These rules have implication for both forward and backward compatibility and are intended to allow implementations to exercise FHIR interfaces and process the content of FHIR resources safely while exchanging data between systems using different versions of FHIR.

**Forward compatibility** means that content that is conformant in an old release will remain conformant with future versions. Once normative, FHIR's rules try to enforce forward compatibility. However, that doesn't guarantee that all old systems will interoperate with future systems.

**Backward compatibility** means that instances created against future versions of the specification will interoperate with older versions of the specification. This is not guaranteed by FHIR, though there are strategies systems can adhere to that will increase their chances of such interoperability. Specifically, when dealing with content from a system supporting an unknown normative version and wishing to maximize backwards compatibility, applications SHOULD:

-   Ignore elements that are unexpected (new elements will never be modifier elements)
-   Ignore references to resources that are not recognized
-   Ignore unrecognized codes in required and extensible bindings unless the element they appear on is a modifier (in which case, treat the element as an unrecognized modifier extension)
-   Ignore unrecognized search criteria - see [Handling Search Errors](search.html#errors) for further information.
-   Respond to HTTP commands on unexpected URLs with an appropriate error code.

However, in a healthcare context, many implementers are unwilling to consider some of these steps because of concerns about clinical risk or technical limitations in their software (e.g. schema-based processing).

<span id="f-compat"></span>
#### Forward and backward compatible rules

The following rules apply once an artifact in the FHIR core specification or in an HL7-international published implementation guide has become normative
<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th>Category</th>
<th>Allowed changes</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Resources</td>
<td>New artifacts resources may be introduced. Existing resources will not have their names changed</td>
</tr>
<tr class="even">
<td>Artifacts (resources, profiles, code systems, etc.)</td>
<td>New artifacts including new resources and data types may be introduced. Existing artifacts will not have any computable identifiers (e.g. resource names) changed. Artifacts may be <a href="#deprecation">deprecated</a></td>
</tr>
<tr class="odd">
<td>Elements</td>
<td>New optional elements and/or content (e.g. XML attributes, etc.) may be introduced at any location in resource and data type structures provided they do not constitute &quot;isModifier&quot; elements. However, the names, path and meaning of previously existing data elements will not be changed. This means there will be no change to resource names and no changes to names assigned to slices and other elements within profiles.</td>
</tr>
<tr class="even">
<td>Cardinality</td>
<td>Minimum element cardinalities will not be changed. Upper cardinality may change from 1 to * only in circumstances where all elements except for the first repetition can be safely ignored. Note that this may change the path to the element in some syntaxes (e.g. JSON). This may mean that an order is assigned to the repeating items or that there is no preference as to which element is retained. Systems should follow the <a href="#f-compat">rules above</a> for unexpected elements.</td>
</tr>
<tr class="odd">
<td>Descriptions</td>
<td>Descriptive information about a resource - short labels, definitions, usage notes, aliases, examples, rationale, mappings, etc. may be updated or revised to provide additional clarity or guidance, but not in such a manner as to invalidate a reasonable interpretation of the previously documented use of an element. (This does not preclude fixing obvious errors.)</td>
</tr>
<tr class="even">
<td>Value Sets and Code Systems</td>
<td><p>The definition of any value set that is marked as <a href="valueset-definitions.html#ValueSet.immutable">immutable</a> will never change. The expansions for immutable value sets may still change if no &quot;stable date&quot; is declared and the value set does not restrict code system and/or value set references to specific versions and the codes in the referenced code system(s) or value set(s) change.</p>
<p>For non-immutable value sets:</p>
<ul>
<li>Value sets with an enumerated list of codes and having a 'fixed' binding may have additional codes introduced but will never have codes removed, though they may be deprecated.</li>
<li>Value sets making use of filters may have filters loosened or tightened to accommodate changes to underlying code systems. StableDates and referenced code system and value set versions may be adjusted to point to newer versions.</li>
<li>Definitions and display values for codes may change, but only in a manner that would not change the reasonable interpretation of data captured using the previous definitions or names.</li>
<li>Abstract codes may be made concrete. Concrete codes will not be made abstract.</li>
</ul>
<p>For both immutable and non-immutable value sets, additional designations may be declared.</p>
<p>Normative CodeSystems whose content is generated from a mix of normative and non-normative contents may break these rules. For example, the code system containing the list of all resources may have codes removed or renamed as non-normative resources are removed or renamed.</p>
<p>These expectations only apply to Value Sets and Code Systems maintained as part of the FHIR specification. HL7 cannot enforce these rules on terminology artifacts maintained by other authorities - e.g. UCUM unit codes, ISO language codes, etc.</p></td>
</tr>
<tr class="odd">
<td><a href="terminologies.html#strength">Terminology Bindings</a></td>
<td><ul>
<li>Required bindings will remain required and will continue to point to the same value set. If the reference is version-specific, it will not change</li>
<li>Extensible bindings will remain extensible and will continue to point to the same value set. If the reference is version-specific, it will not change.</li>
<li>Example bindings and preferred bindings may change to point to different value sets. Example bindings may be replaced with preferred bindings.</li>
</ul></td>
</tr>
<tr class="even">
<td>Data Types</td>
<td>Except as described in the preceding paragraph, Data types will not be removed or changed except as allowed above for elements. New data types may be introduced. Types declared on existing elements will not be removed or changed, except for the special case that <code>string</code> may be changed to <code>markdown</code>. Additional data types may be added to elements which are already expressed as a choice of data types only if those elements are optional (minimum cardinality = 0).</td>
</tr>
<tr class="odd">
<td>Value Constraints</td>
<td>The allowed list of Data types will not be added, removed or changed. Invariants, regular expressions, fixed values and patterns will not be added, removed or changed.</td>
</tr>
<tr class="even">
<td>Flags</td>
<td>The <em>Is Modifier</em> and <em>Is Summary</em> flags will not be changed.</td>
</tr>
<tr class="odd">
<td>Slicing</td>
<td>Slicing rules and aggregation characteristics will not be changed.</td>
</tr>
<tr class="even">
<td>Search Criteria</td>
<td>Search criteria may be added but not removed or renamed. Existing criteria will not have their type or path changed or have their description altered in any way that would invalidate the reasonable behavior of existing systems (except for correcting obvious errors).</td>
</tr>
<tr class="odd">
<td>Operations</td>
<td>New operations may be defined but operations will not be removed or renamed. Existing parameters will not be removed or renamed, nor may their type or lower cardinality be changed. Upper cardinality may be changed from 1 to *. (Systems should ignore unexpected repetitions.) Additional optional parameters may be introduced. Changes to operations that would violate the preceding constraints will be handled by defining new operations and, potentially, deprecating the old operations.</td>
</tr>
<tr class="even">
<td>Restful interface</td>
<td>Existing endpoints will not be renamed or removed, nor have their expected behavior changed in a manner that would cause reasonable systems designed against prior versions to be non-interoperable. Additional endpoints and interactions may be introduced.</td>
</tr>
<tr class="odd">
<td>Profiles and extension definitions</td>
<td>Profile structure, extension definitions and search criteria definitions will not be removed or have their URIs changed. New profile structures, extension definitions and search criteria definitions may be introduced. Profiles may have their statuses changed to &quot;retired&quot;. Profiles referenced by data elements for structures or data types may be replaced with a reference to a distinct profile that is &quot;compatible&quot; with the previously referenced profile according to these forward and backward compatibility rules.</td>
</tr>
<tr class="even">
<td>Capability Statements</td>
<td>Within the CapabilityStatements for defined FHIR Services or 'core' implementation guides, additional operations may be added. These additions might be optional (MAY/SHOULD) or mandatory (SHALL). Note that the introduction of mandatory operations would break forwards compatibility and will only occur with community consultation.</td>
</tr>
<tr class="odd">
<td>Implementation Guides</td>
<td>Additional artifacts can be added, and artifacts can be changed. The list of global profiles will not change</td>
</tr>
<tr class="even">
<td>References</td>
<td>Where one conformance resource points to another (e.g. CapabilityStatement to profile, profile to profiles, profile to value set, etc.), the reference may change to point to a newer version of the conformance resource or to a distinct conformance resource so long as the content of the newly referenced resource adheres to the compatibility rules with respect to the previously referenced version.</td>
</tr>
</tbody>
</table>

NOTE: In rare circumstances, HL7 may approve changes that technically break one of the above rules in situations where there is a high level of confidence that the change will not impact existing implementers. Such deviations from these declared rules will involve broad notification, extensive community consultation and reviews by multiple levels of HL7 governance processes.

 

<span id="deprecation"></span>
#### Deprecation / Withdrawal of Normative Content

Once content is normative, there is a process for removing it from the standard by marking it as `deprecated` or `withdrawn` (from the [HTML 4.0 Standard](https://www.w3.org/TR/html4/conform.html)):

|                |                                                                                                            |
|----------------|------------------------------------------------------------------------------------------------------------|
| **Deprecated** | Systems should continue to support the artifact/feature/concept, but are discouraged from making use of it |
| **Withdrawn**  | Documented for historical purposes, no longer supported                                                    |

The specification will provide guidance with deprecated materials showing how to avoid using them. `Deprecated` materials are eligible to be balloted to be `withdrawn` two years after their `deprecated` status is published.

The computable artifact labels (e.g. codes, element names, urls, etc.) associated with withdrawn materials SHALL not be used in future versions of HL7 specifications. Materials marked "deprecated" may have that marking removed as part of a subsequent ballot at a later moment, while withdrawn materials SHALL NOT.

The following artifacts are deprecated in this version of FHIR:

-   [OperationOutcome.issue.location](operationoutcome-definitions.html#OperationOutcome.issue.location)

------------------------------------------------------------------------

Additional discussion on inter-versioning issues can be found here: <https://confluence.hl7.org/display/FHIR/Interversion+Compatibility>.

<span id="stu"></span>
### Managing Change during the development process

Regardless of the degree of prior implementation, all aspects of the FHIR specification are potentially subject to change while an artifact has a status of *Draft* or *Trial Use*. These changes may be minor (clarifications of definitions, etc.) or major (refactoring of resources, changes to serialization rules, eliminating or adding data types, etc.) There is no commitment to backward or forward compatibility during the trial use process until content is normative. Changes will not be made without cause, however the interests of long-term implementability will generally trump the impact on early adopters when determining what changes should be made. This balance will shift more towards early adopters as maturity levels increase. I.e. Impact on existing implementations will be weighted more highly for an FMM-level 5 artifact than they would for an FMM-level 1 artifact.

Implementers who are willing to accept the risk of change (perhaps for the benefit of early implementation experience, first mover advantage and the ability to leverage FHIR's intrinsic benefits) are encouraged to implement those parts of FHIR that are early in the maturity cycle in real-world systems. However, those implementers should be aware that local adaptations may be necessary to meet real-world requirements. Furthermore, such implementers should architect their solutions to be tolerant of changes to the specification and, where necessary, to manage interoperability with systems that may be using different versions of the specification or different local adaptations.

During the *Trial Use* period, requests for change may be submitted using the HL7 issue tracker which can be found [here](http://hl7.org/fhir-issues). Where possible, updates to the "development" version of the specification will be made in a timely fashion. Implementers should be aware that the changes are not considered "official" until such time as they are balloted and approved as part of a subsequent *Trial Use* or *Normative* publication. Change requests might be fixes to allow implementation, clarifications or enhancements. In addition, HL7 will be developing and introducing additional resources and profiles as part of the FHIR specification.

SDOs and regulatory bodies that are interested in making use of the FHIR specification should feel free to do so, but should consider and plan for the possibility that the specification will evolve and change prior to becoming *Normative*.

A key aspect of the FHIR specification development process is gaining feedback from implementers making use of the specification. As well, the process is conditional on real world implementation in order to move through the maturity cycle. For this reason, all FHIR implementers are encouraged to register their usage [here](http://fhir.org/implementations/usage), which captures contact and other information that will allow HL7 to perform appropriate monitoring of FHIR usage. Survey information is confidential and reported in aggregate only.

<span id="extensions"></span>
### Extensions for converting between versions

Many implementations need to convert resources from one FHIR version to another. Once resources become normative (once sufficiently mature and stable), converting resources forwards from past versions is not needed. Converting back to older versions presents a challenge, however, in that the newer version may add additional elements that are not present in the older version. In some cases, the elements are simply irrelevant since the requirements they represent are not in scope for older applications, but in other cases, it is necessary to represent the data in order to cater for round-tripping.

A more complex problem arises with resources that are not yet stable (early in the maturity process). If applications have implemented less stable resources, not only do they have the problem of new elements for new requirements, the specification may change in either compatible or incompatible ways, and it may be necessary to carry data elements from past versions forward in order to allow seamless round-tripping.

In order to help implementers with this problem, any element defined in any version of FHIR is automatically assigned an extension URL that uniquely identifies the element and can be used in the relevant FHIR version. The extension URL for an element can automatically be derived:

    http://hl7.org/fhir/[version]/StructureDefinition/extension-[Path]

where \[version\] is taken from this list:

This technique can be used with all versions of FHIR, including R2 and R3:

|                                                        |     |
|--------------------------------------------------------|-----|
| [FHIR DSTU2](http://hl7.org/fhir/DSTU2)                | 1.0 |
| [FHIR R3](http://hl7.org/fhir/STU3) (STU3, or just R3) | 3.0 |
| [FHIR R4](http://hl7.org/fhir/r4) (this version)       | 4.0 |

Note that this extension framework only applies back to DSTU2. The \[Path\] is actually the ElementDefinition.id from the relevant StructureDefinition for the element. This leads to URLs like the following:

|                                                                                |                                                                                                             |
|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| `http://hl7.org/fhir/4.0/StructureDefinition/extension-Bundle.signature`       | [R4 Signature Element on Bundle](http://hl7.org/fhir/4.0/bundle-definitions.html#Bundle.signature)          |
| `http://hl7.org/fhir/3.0/StructureDefinition/extension-Patient.animal.species` | [STU3 Species Element on Patient](http://hl7.org/fhir/STU3/patient-definitions.html#Patient.animal.species) |
| `http://hl7.org/fhir/1.0/StructureDefinition/extension-ValueSet.extensible`    | [DSTU2 ValueSet.extensible](http://hl7.org/fhir/DSTU2/valueset-definitions.html#ValueSet.extensible)        |

Implementers should be aware of the following issues when using these extensions:

-   Implementations should always use the correct element for data when one exists. The version [differences](diff.html) and [maps](r3maps.html) (and their equivalent for other versions) can help
-   There is no way to represent the few special elements that have the type "Resource" in extensions, so these are not defined (e.g. `Bundle.entry.resource`, `DomainResource.contained`, etc)
-   Where complex data types have no equivalent in an earlier version, use a complex extension, containing extensions also following this pattern. Follow the same pattern for any elements not found in data types in earlier versions
-   This table shows the data type mapping across versions. The mapping table SHALL be used.

This table shows the mapping between primitive data types across versions:

|              |              |              |
|--------------|--------------|--------------|
| R4           | R3           | DSTU2        |
| base64Binary | base64Binary | base64Binary |
| boolean      | boolean      | boolean      |
| canonical    | *(uri)*      | *(uri)*      |
| code         | code         | code         |
| date         | date         | date         |
| dateTime     | dateTime     | dateTime     |
| decimal      | decimal      | decimal      |
| id           | id           | id           |
| instant      | instant      | instant      |
| integer      | integer      | integer      |
| markdown     | markdown     | markdown     |
| oid          | oid          | oid          |
| positiveInt  | positiveInt  | positiveInt  |
| string       | string       | string       |
| time         | time         | time         |
| unsignedInt  | unsignedInt  | unsignedInt  |
| uri          | uri          | uri          |
| url          | *(uri)*      | *(uri)*      |
| uuid         | uuid         | *(id)*       |

Formal Definitions for extensions:

|                |                                                                                                   |                                                                                                   |                                                                                                   |
|----------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| Format:        | R2 Package                                                                                        | R3 Package                                                                                        | R4 Package                                                                                        |
| R2 Extensions: | n/a                                                                                               | hl7.fhir.extensions.r2:3.0.1 [![](npm16.png)](http://hl7.org/fhir/1.0/extensions/3.0/package.tgz) | hl7.fhir.extensions.r2:4.1.0 [![](npm16.png)](http://hl7.org/fhir/1.0/extensions/4.0/package.tgz) |
| R3 Extensions: | hl7.fhir.extensions.r3:1.0.2 [![](npm16.png)](http://hl7.org/fhir/3.0/extensions/1.0/package.tgz) | n/a\`                                                                                             | hl7.fhir.extensions.r3:4.1.0 [![](npm16.png)](http://hl7.org/fhir/3.0/extensions/4.0/package.tgz) |
| R4 Extensions: | hl7.fhir.extensions.r4:1.0.2 [![](npm16.png)](http://hl7.org/fhir/4.0/extensions/1.0/package.tgz) | hl7.fhir.extensions.r4:3.0.1 [![](npm16.png)](http://hl7.org/fhir/4.0/extensions/3.0/package.tgz) | n/a                                                                                               |

Note for balloters: these packages will be created when R4 is finalized. Until then, these are broken links.

<span id="plans"></span>
### Plans for future releases

While implementation of this mixed *Normative* and *Trial Use* release is occurring, development will be progressing on the next release. This next release will include additional clarifications, resources, profiles and quality enhancements over the current release based on implementation experience and ongoing development work. It will also incorporate fixes for issues raised with the [FHIR issue tracker](http://hl7.org/fhir-issues). It may be useful for implementers of the STU to review the candidate current release (at <http://build.fhir.org>) to get a sense of what changes are likely coming and perhaps to find more robust definitions and guidance than are available in the this release. Some implementers who are dependent on content that exists in a draft release may choose to implement based on a particular snapshot of the development release, though in doing so, they will limit their potential communication partners.

The next major publication of FHIR will be Release 5. It is our hope release 5 will include more [Normative](#normative) content, including more of the core patient summary clinical content. Other content, including most if not all clinical knowledge/reasoning, care planning, and financial resources, are likely to remain at the [Trial Use](#stu) level as they are not expected to meet the criteria for Normative.

More information on plans for Release 5 can be found on the [HL7 product director's blog](https://onfhir.hl7.org/). (Subscribing to this blog is a good way to keep current on significant events in FHIR development, including ballot and publication timelines.)

There will be additional releases of FHIR with a frequency of somewhere between 18 and 24 months for the foreseeable future. These releases will include maintenance on Normative content, new content (e.g. in the public health, financial or clinical research spaces), revisions to trial use content reflecting implementer feedback and increasing maturity on Trial Use artifacts and the migration of additional content to normative status. As well, HL7 will continue to focus to providing additional guidance through the publication of implementation guides and profiles where consensus can be found at the international level.

\[%file newfooter%\]
