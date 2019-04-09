\[%settitle FHIR STU3 Ballot Welcome%\]
\[%file newnavbar%\]
R4 Ballot Roadmap
-----------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

Welcome to the second round of the FHIR Release 4 (R4) ballot, which is working toward our first release planned to include normative content. The R4 release of FHIR will have content with different ballot statuses:

-   <span style="background-color: #e6ffe6; border: 1px grey solid; padding-left: 3px; padding-right: 3px;">**Normative**</span>: Content that is subject to normative ballot rules. Once passed, [strict rules](versions.html#change) are imposed on future change to help ensure inter-version compatibility
-   <span style="background-color: #fff5e6; border: 1px grey solid; padding-left: 3px; padding-right: 3px;">**Trial Use**</span>: Content that is undergoing [FHIR maturity Model](versions.html#maturity) based testing. In a future ballot cycle, once sufficiently mature, it will be balloted as normative
-   <span style="background-color: #ffffe6; border: 1px grey solid; padding-left: 3px; padding-right: 3px;">**Informative**</span>: Content that is advisory (e.g. implementers are not required to conform to the content), or navigational content - tables of contents, generated lists, etc.
-   <span style="background-color: #efefef; border: 1px grey solid; padding-left: 3px; padding-right: 3px;">**Draft**</span>: Content added late in the balloting process that has no formal standing, but is published for visibility. It might not be suitable for use in production systems.
-   <span style="background-color: #ffcccc; border: 1px grey solid; padding-left: 3px; padding-right: 3px;">**Deprecated**</span>: Content that is in the process of being removed (see [deprecation](versions.html#deprecation)).
-   <span style="background-color: #e6ffff; border: 1px grey solid; padding-left: 3px; padding-right: 3px;">**External**</span>: Content that is replicated from external standards (e.g. HL7 v2, DICOM) and is not subject to ballot comment

<span id="process"></span>
### The FHIR R4 Ballot Process

The FHIR R4 ballot process is significantly more complex than previous ballots because of the introduction of content on the normative track.

Three ballot periods are anticipated:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Draft Ballot</td>
<td>Dec 2017 - Jan 2018</td>
<td>This first ballot was mainly a development ballot for the FHIR team. It allowed for:
<ul>
<li>The community to review the packaging and publication of the normative content</li>
<li>The FHIR Management Group to hone ballot procedures</li>
<li>Ongoing review of the FHIR content - particularly that marked as candidate-normative</li>
</ul></td>
</tr>
<tr class="even">
<td>Full FHIR Ballot</td>
<td>Apr 2018 - May 2018</td>
<td>The full R4 ballot. It included:
<ul>
<li>Multiple packages of normative content (see below)</li>
<li>The rest of the content balloted for &quot;Trial Use&quot;</li>
</ul></td>
</tr>
<tr class="odd">
<td><strong>Follow up Ballot</strong></td>
<td>Aug 2018 - Sep 2018</td>
<td>A follow up ballot
<ul>
<li>Reballoting of normative content where substantive changes were required in response to ballot and implementer feedback</li>
<li>Additional significant new (added post the full FHIR ballot) or significantly revised content balloted for &quot;Trial Use&quot;</li>
</ul>
<strong>This is the current ballot</strong></td>
</tr>
</tbody>
</table>

The key driver of this complexity is the introduction of normative content. HL7's ballot rules for normative content require that if any substantive changes are made as a result of ballot reconciliation, the content must be reballoted. (Note that 'substantive changes' means any change that is likely to change implementations - a very low bar).

In the past, normative ballots have undergone many cycles of balloting, a process that can take years. The FHIR ballot will be different, in that there are 2 ballot cycles allowed; any normative content that cannot pass ballot with 2 cycles will fall back to Trial Use for R4, and HL7 will try again for FHIR R5. Note that the content on the normative track has already undergone extensive testing, production implementation, and previous ballots.

To facilitate this process, the ballot is broken up into multiple normative packages:

|                             |                                                                                         |
|-----------------------------|-----------------------------------------------------------------------------------------|
| Infrastructure              | Abstract base types, data types, formats, the RESTful API, and content and typing rules |
| Terminology and Conformance | The terminology infrastructure and the base resources that define FHIR implementations  |
| Patient                     | The Patient resource and related content                                                |
| Observation                 | The Observation resource and related content                                            |

A full list of the pages that are in each normative package can be found below. Any content that is not in these packages is considered to be part of the general Trial Use Ballot.

In addition to these ballots of the core FHIR specification, several implementation guides are undergoing ballot as well.

<span id="background"></span>
### R4 Ballot Background

Release 4 of the FHIR specification provides thousands of significant changes and enhancements from the third FHIR Standard for Trial Use specification HL7 published in May, 2017. These changes resulted from committee meetings, connectathons, over a thousand change proposals, and collaborations with other standards organizations. A [summary of changes](history.html#v1.6.0) and a [complete list of changes to resources and data types](diff.html) are available, along with [transforms](r3maps.html) between R3 and R4 for many resources.

The FHIR specification is presented as a series of interlinked HTML pages. They can either be reviewed online or can be [downloaded](fhir-spec.zip) for exploration on your own device. (175MB zip, ~1GB unzipped). The scope of this FHIR Ballot is any page where the URL starts with http://hl7.org/fhir/2018Sep, though balloters must pay careful attention to which ballot package content is in (see below, or the [Table of Contents](toc.html)).

A few notes to consider when balloting:

-   Pay close attention to the ballot status and FMM level of the artifacts. More scrutiny is appropriate for higher-maturity artifacts. While feedback is welcome for all content, expect draft and low maturity content to be a bit rough around the edges.
-   Not all of the existing outstanding issues will be resolved prior to the ballot passing. Some may be left open to allow feedback from the early adopter community.
-   While many applications have used the FHIR specification in production, the functionality it covers is not yet complete. Resources may evolve and new ones will be introduced over time. Refer to [FHIR Timelines](versions.html) for additional guidance on expectations around the evolution of the FHIR specification. Also look at the road maps on the module pages.

### Balloting Guidelines

HL7 ballot rules require that participants sign up prior to opening of the ballot. If you did not sign up in advance, you can still submit comments using the [Propose a Change](http://hl7.org/fhir-issues) link at the bottom of each page of the specification. Feedback from balloters will be given priority but all suggestions will be considered as much as time allows. (And be sure to [sign up](https://confluence.hl7.org/display/FHIR/Mailing+List+Instructions) to the FHIR list-server and/or follow the [\#FHIR](https://twitter.com/hashtag/fhir) hash-tag so you don't miss the chance to vote in the next ballot cycle.)

If you are signed up to ballot, you can download the balloting spreadsheet from the [Ballot Desktop](http://www.hl7.org/participate/onlineballoting.cfm). All ballot feedback must be provided using the spreadsheet template provided. (There's a help tab that explains the meaning of each of the columns.) For FHIR, you have the option of making your comments directly in the spreadsheet or submitting your comment using the FHIR [Change Tracker](http://hl7.org/fhir-issues) tool. If you take the latter approach, you **must** include a reference to each tracker item in your ballot spreadsheet along with a vote (negative, affirmative typo, etc.). The other columns can (and should) be left blank. All spreadsheets must be submitted along with an overall vote by end of day Eastern time on the designated ballot closure date for the comments to be considered as part of ballot disposition.

**IMPORTANT:** We encourage balloters to capture their comments using the HL7 issue tracker and to use the spreadsheet only to list their tracker item numbers and votes. (If you include additional information beyond tracker item and vote, we need to cross-check to ensure the content is aligned, which eliminates any savings. So if you keep additional columns for internal review, please wipe them before submission.) Tracker-based comment submission dramatically reduces administrative overhead in managing the ballot. It also means that you can receive automatic notifications when your comment is scheduled for discussion, commented on, or resolved.

When submitting your ballot feedback, if you have a general comment on something that you see occurring multiple times, please include at least a couple of specific locations where you see the issue. As much as possible, capture each separate concern as a distinct row in the ballot sheet or separate [tracker item](http://hl7.org/fhir-issues). (If using tracker items for your submissions, you **MUST** still submit a ballot spreadsheet referencing the relevant tracker items.) It makes our job of reconciling much easier. Also, don't forget to fill in the section numbers (gray numbers to the left of each heading) and URLs. Only one URL should be placed in the "url" element or column. If you want to reference additional URLs, include them in the text of your ballot comment.

If you have questions that are interfering with the ability to review the specification or submit ballot comments, please contact one of the co-chairs of the FHIR Management Group: [Lloyd McKenzie](mailto:lloyd@lmckenzie.com) or [David Hay](mailto:david.hay25@gmail.com).

Thanks for taking the time to review the FHIR specification. We appreciate any feedback you can provide.

<span id="round2"></span>
### Rules for Round 2 Ballot (Follow up ballot)

This is the round 2 ballot for FHIR R4. As such, the scope of this second ballot for the R4 cycle is limited to the changes made from the 2018-May ballot cycle. Feedback not related to changes made will most likely be found "not related" and/or deferred to consideration as part of R5.

To assist balloters, for the Normative ballot, each substantitive change made is listed, along with links to the page and the task that prompted the change. Also, diff links are provided to assist with reviewing the non-substantitive changes.

For the Trial-Use ballot, the significant new content areas or changes are indicated.

<span id="maps"></span>
The specification has been updated to include R3/R4 maps and difference analysis, but these have not been updated. This will be done proper to publication of the final specification. In the meantime, balloters are welcome to comment on suggested improvements to the mappings and difference statements, but these cannot be the basis for negative votes. Contributions may also be made directly (join the [conversation at chat.fhir.org](https://chat.fhir.org/#narrow/stream/133-R3.2FR4-Conversion.20work)).

<span id="diffs"></span>
The lists below provide 2 "diff" links - these are links that ask a W3C differencing engine to compare the 2 pages of the specification. There are two different types of link:

-   [ΔR](#self "Difference to R3"): Difference analysis from R3 (last full release)
-   [ΔB](#self "Difference to last ballot"): Difference analysis from the first normative ballot

The W3C differencing engine is the best free html diff engine that we know of, but does have issues. In particular, when reviewing differences for resources and types, the special presentation forms (tables, svg) which are rich in rendering metadata makes the difference analysis a little confusing or even unreliable in places. Reviewers will find it easier to looks the differences for the definitions rather that the tables structures - e.g. when reviewing based on the diffs, review the definitions page changes first.

<span id="normative"></span>
### Normative Ballot Packages

<span id="infrastructure"></span>
#### Infrastructure

Abstract base types, data types, formats, the RESTful API, and content and typing rules

Please consult the [Round 2 ballot guide above](#round2) before commenting on this ballot.

\[%normative-pages infrastructure%\]
**Substantive Changes since the first Normative ballot**

**Description**
**Committee + Tasks**
**Pages**
**Scope Changes**
Mark `Managing Resource Identity` as trial-use, not normative (move normative parts to [Resource](resource.html))
FHIR-I: \[%GF\#16466%\]
\[%diff managing.html Managing Resource Identity%\]
**Base Documentation**
Make it explicit about canonical URLs with fragments
FHIR-I: \[%GF\#17357%\]
\[%diff references.html\#canonical References%\]
Added reference.type
FHIR-I: \[%GF\#13543%\]
\[%diff references.html\#type References between Resources%\]
Clarify definition of is-modifier + impacts on modifier extensions
Note: this led to **breaking changes** on a few extensions (changed from modifierExtension to normal extension)
FHIR-I: \[%GF\#16188%\]
\[%diff conformance-rules.html Conformance Rules%\], \[%diff extensibility.html\#modifiers Extensibility%\]
Multiple language support on narratives
FHIR-I: \[%GF\#15759%\]
\[%diff narrative.html\#languages Narrative%\]
Rules around extensible bindings (intended to be clarifications, but may be substantive for some)
Vocab: \[%GF\#17402%\]
\[%diff terminologies.html\#extensible Using Codes%\]
Enhance/extend rules around changes between versions
FHIR-I: \[%GF\#13089%\]
\[%diff versions.html\#rules Version Management Policy%\]
Add note about namespaces in types in FHIRPath consequence to FHIRPath changes
FHIR-I: \[%GF\#15876%\]
\[%diff fhirpath.html\#types FHIRPath%\]
Add draft Terminology Service API to FHIRPath
FHIR-I: \[%GF\#15777%\]
\[%diff fhirpath.html FHIRPath%\]
Fix missing code for 1.0.2 [FHIR versions Code System](codesystem-fhir-version.html)
FHIR-I: \[%GF\#16318%\]
\[%diff codesystem-fhir-version.html FHIR versions Code System%\]
**RESTful API**
Add fhirVersion parameter to application/fhir mime type
FHIR-I: \[%GF\#16165%\]
\[%diff http.html\#version-parameter RESTful API%\]
Fix HTTP response status codes for If-Match header **Breaking change!**
FHIR-I: \[%GF\#16096%\]
\[%diff http.html Search%\]
Clarify about 406 and 415 status codes **Breaking change!**
FHIR-I: \[%GF\#16329%\]
\[%diff http.html Restful API%\], \[%diff formats.html Formats%\]
Rewrite intermediaries section, and refocus on custom headers
FHIR-I: \[%GF\#14162%\]
\[%diff http.html\#custom RESTful API%\]
Clarify version requirements in Location header
FHIR-I: \[%GF\#13915%\]
\[%diff http.html\#create RESTful API%\]
Describe use of :below on reference for searching canonicals
FHIR-I: \[%GF\#14195%\]
\[%diff http.html\#versions RESTful API%\]
Change rules around optionality of Bundle.entry.request and .response **Breaking change!**
FHIR-I: \[%GF\#14551%\]
\[%diff http.html\#transaction RESTful API%\]
Add \_list parameter to history interaction
FHIR-I: \[%GF\#16022%\]
\[%diff http.html\#history RESTful API%\]
Add conformance language about errors and operation outcome
FHIR-I: \[%GF\#14495%\]
\[%diff http.html RESTful API%\]
Mark Conditional Create, Update, Patch, and Delete as Trial-use
FHIR-I: \[%GF\#16448%\]
\[%diff http.html RESTful API%\]
Add mode parameter to /metadata
FHIR-I: \[%GF\#14444%\]
\[%diff http.html RESTful API%\]
**Search Page**
Rename the "recurse" modifier on \_include to "iterate" **Breaking change!**
FHIR-I: \[%GF\#13602%\]
\[%diff search.html Search%\]
Add rule that search parameter names cannot differ only by case
FHIR-I: \[%GF\#14961%\]
\[%diff search.html Search%\]
Describe use of exponential form when searching numbers (+ clarifications for precision)
FHIR-I: \[%GF\#16369%\]
\[%diff search.html\#decimal Search%\]
Describe use of :below on token for searching mime types
FHIR-I: \[%GF\#16970%\]
\[%diff search.html\#mimetype Search%\]
Introduce `special` search parameter type
FHIR-I: \[%GF\#17488%\]
\[%diff search.html\#types Search%\]
Note about timezones (not substantive?)
FHIR-I: \[%GF\#16550%\]
\[%diff search.html\#timezones Search%\]
Details about searching on versions
FHIR-I: \[%GF\#16361%\]
\[%diff search.html\#versions Search%\]
**Operations**
Remove support for operations on historical resources **Breaking change!**
FHIR-I: \[%GF\#17258%\]
\[%diff operations.html Operations%\]
Add the $versions operation
FHIR-I: \[%GF\#17009%\]
\[%diff capabilitystatement-operations.html Capability Statement Operations%\]
**Data Types**
Fix OID regex
FHIR-I: \[%GF\#16023%\]
\[%diff datatypes.html\#oid OID Data type%\]
Allow exponential form for decimals (with corresponding consequences for precision)
FHIR-I: \[%GF\#16874%\]
\[%diff datatypes.html\#decimal Data Types%\], \[%diff xml.html\#decimal XML%\]
Change Money Type to make it simpler **Breaking change!**
FHIR-I: \[%GF\#16297%\]
\[%diff datatypes.html\#Money Data Types%\]
Change Identifier.type codes to use v2 codes now that they are defined **Breaking change!**
FHIR-I: \[%GF\#9239%\], \[%GF\#16898%\]
\[%diff valueset-identifier-type.html Identifier Type ValueSet%\]
Change Annotation.text to support markdown
FHIR-I: \[%GF\#16965%\]
\[%diff datatypes.html\#Annotation Annotation Data type%\]
Add minutes to Duration value set
FHIR-I: \[%GF\#15868%\]
\[%diff valueset-duration-units.html Duration Value Set%\]
Addition of expression in metadatatypes (not normative, but appears in multiple places)
FHIR-I: \[%GF\#17227%\]
\[%diff metadatatypes.html\#Expression Metadata Types%\]
**ElementDefinition**
Make it clear and consistent that ElementDefinition specializes BackboneElement
FHIR-I: \[%GF\#17404%\]
\[%diff elementdefinition.html\#custom ElementDefinition%\]
Clarify use of slicing entry
FHIR-I: \[%GF\#16309%\]
\[%diff elementdefinition.html\#slicing ElementDefinition%\]
Make `ElementDefinition.constraint.expression` optional, and `ElementDefinition.constraint.xpath` trial-use
FHIR-I: \[%GF\#16862%\]
\[%diff elementdefinition.html ElementDefinition%\]
Add `ElementDefinition.sliceIsConstraining` (trial-use)
FHIR-I: \[%GF\#13545%\]
\[%diff elementdefinition.html ElementDefinition%\]
Change ElementDefinition.binding.valueSet to only be of type Canonical **Breaking change!**
FHIR-I: \[%GF\#16055%\]
\[%diff elementdefinition.html Element Definition%\]
Add a note restricting use of ElementDefinition.contentReference
FHIR-I: \[%GF\#14958%\]
\[%diff elementdefinition.html ElementDefinition%\]
Make additional constraint on valid Element names
FHIR-I: \[%GF\#15678%\]
\[%diff elementdefinition.html ElementDefinition%\]
**Resources**
Make it clear that contained resources can't contain security labels
FHIR-I: \[%GF\#16622%\]
\[%diff resource.html Resource%\]
Contained resources MAY contain narrative
FHIR-I: \[%GF\#13870%\]
\[%diff domainresource.html\#contained Domain Resource%\]
Remove restriction on Bundle containing multiple versions of the same resource **Breaking change!**
FHIR-I: \[%GF\#17085%\]
\[%diff bundle.html Bundle%\]
Add `deleted` as an issue type
FHIR-I: \[%GF\#17327%\]
\[%diff valueset-issue-type.html Issue Type ValueSet%\]
New codes, adjustments, and fixed definitions to codes for OperationOutcome.issue.code
FHIR-I: \[%GF\#16922%\], \[%GF\#17329%\]
\[%diff codesystem-issue-type.html Issue Type Code System%\]
Deprecate OperationOutcome.location
FHIR-I: \[%GF\#17589%\]
\[%diff operationoutcome.html OperationOutcome%\]
Rename Binary.content to Binary.data and exclude it from summary (which makes it optional) **Breaking change!**
FHIR-I: \[%GF\#16998%\], \[%GF\#16898%\]
\[%diff binary.html Binary Resource%\]
<span id="terminology"></span> <span id="conformance"></span>
#### Terminology and Conformance

The terminology infrastructure, and the base resources that specify content

Please consult the [Round 2 ballot guide above](#round2) before commenting on this ballot.

\[%normative-pages conformance%\]
**Substantive Changes since the first Normative ballot**

**Description**
**Committee + Tasks**
**Pages**
**Scope Changes / General**
Remove ConceptMap from Normative package
Vocab: \[%GF\#16363%\]
\[%diff conceptmap.html ConceptMap%\]
Change the canonical URL for all v2 and v3 CodeSystems and ValueSets to `http://terminology.hl7.org` (from the Unified Terminology Process) **Breaking change!**
(no task: Vocab committee decision)
todo
**CodeSystem**
Remove codesystem-deprecated extension
Vocab: \[%GF\#12312%\]
\[%diff codesystem.html CodeSystem%\]
Rationalise ordinal value extensions (not normative) **Breaking change!**
FHIR-I: \[%GF\#17350%\]
(later removed)
Mark section "Code systems with detailed metadata" informative
Vocab: \[%GF\#16335%\]
\[%diff codesystem.html\#detailed-metadata CodeSystem%\]
**ValueSet**
Remove ValueSet.$expand profile parameter, and add parameters from ExpansionProfile **Breaking change!**
Vocab: \[%GF\#16337%\] & \[%GF\#16490%\]
\[%diff valueset-operation-expand.html ValueSet.$expand%\]
Remove ValueSet.$expand.limitedExpansion parameter, and document how to use count instead **Breaking change!**
Vocab: \[%GF\#16449%\]
\[%diff valueset-operation-expand.html ValueSet $expand operation%\]
Document Valueset.expansion.parameters better, along with new requirements
Vocab: \[%GF\#16841%\], \[%GF\#16484%\], \[%GF\#16445%\]
\[%diff valueset.html\#parameters ValueSet%\]
Move Valueset.extensible to an extension
Vocab: \[%GF\#16427%\]
\[%diff valueset.html ValueSet%\]
Add note about Supplements and future rules around expansions
Vocab: \[%GF\#16832%\]
\[%diff valueset.html\#expansions ValueSet%\], \[%diff codesystem.html\#supplements CodeSystem%\]
Add datetime as an allowed type for ValueSet.expansion.parameter.value
Vocab: \[%GF\#17616%\]
\[%diff valueset.html ValueSet%\]
Add "Any Version" special value for ValueSet.compose.include.version
Vocab: \[%GF\#15998%\]
\[%diff valueset.html ValueSet%\]
Allow a value set to contain neither compose or expansion (metadata only) **Breaking change?**
Vocab: \[%GF\#17475%\]
\[%diff valueset.html ValueSet%\]
Add contextDirection as a parameter for $expand
Vocab: \[%GF\#17321%\]
\[%diff valueset-operation-expand.html ValueSet.\#expand%\]
**StructureDefinition**
Update StructureDefinition invariants
FHIR-I: \[%GF\#17185%\]
\[%diff structuredefinition.html StructureDefinition.kind%\]
**CapabilityStatement**
Mark many attributes in CapabilityStatement as trial-use
FHIR-I: \[%GF\#14444%\]
\[%diff capabilitystatement.html CapabilityStatement%\]
Fix minor errors in CapabilityStatement invariants
FHIR-I: \[%GF\#13551%\]
\[%diff capabilitystatement.html CapabilityStatement%\]
Make `CapabilityStatement.rest.resource.searchParam.definition` mandatory for search parameters defined in the FHIR Specification **Breaking change!**
FHIR-I: \[%GF\#16359%\]
\[%diff capabilitystatement.html CapabilityStatement%\]
Add [CapabilityStatement.implementation.custodian](capabilitystatement-definitions.html#CapabilityStatement.implementation.custodian)
FHIR-I: \[%GF\#16342%\]
\[%diff capabilitystatement.html CapabilityStatement%\]
Change all documentation elements in CapabilityStatement to use markdown
FHIR-I: \[%GF\#14170%\]
\[%diff capabilitystatement.html CapabilityStatement%\]
Add CapabilityStatement.imports
FHIR-I: \[%GF\#14299%\]
\[%diff capabilitystatement.html CapabilityStatement%\]
Fix search parameter generation so that context related search parameters are defined
FHIR-I: \[%GF\#17215%\]
\[%diff capabilitystatement.html CapabilityStatement%\]
Revoke constraint `cpb-8` on CapabilityStatement.rest cardinality
FHIR-I: \[%GF\#10205%\]
\[%diff capabilitystatement.html CapabilityStatement%\]
**OperationDefinition**
Add OperationDefinition.title
FHIR-I: \[%GF\#15982%\]
\[%diff operationdefinition.html OperationDefinition%\]
Add OperationDefinition.parameter.referencedFrom
FHIR-I: \[%GF\#17508%\]
\[%diff operationdefinition.html OperationDefinition%\]
<span id="patient"></span>
#### Patient

The Patient resource, and related content

Please consult the [Round 2 ballot guide above](#round2) before commenting on this ballot. Patient is being reballoted solely because of changes driven by terminology standardization, which means that the [Coding.system](datatypes.html#Coding) values for [Patient.maritalStatus](patient-definitions.html#Patient.maritalStatus) and [Patient.contact.relationship](patient-definitions.html#Patient.contact.relationship). There is no other change.

\[%normative-pages patient%\]
**Substantive Changes since the first ballot**

|                                                                                                                                             |                                     |           |
|---------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|-----------|
| **Description**                                                                                                                             | **Committee + Tasks**               | **Pages** |
| Change the canonical URL for all v2 and v3 CodeSystems and ValueSets to `http://terminology.hl7.org` (from the Unified Terminology Process) | (no task: Vocab committee decision) | todo      |

<span id="observation"></span>
#### Observation

The Observation resource, and related content

Please consult the [Round 2 ballot guide above](#round2) before commenting on this ballot.

\[%normative-pages observation%\]
**Substantive Changes since the first ballot**

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                     |                                         |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|-----------------------------------------|
| **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                               | **Committee + Tasks**               | **Pages**                               |
| Change the canonical URL for all v2 and v3 CodeSystems and ValueSets to `http://terminology.hl7.org` (from the Unified Terminology Process)                                                                                                                                                                                                                                                                                                                                   | (no task: Vocab committee decision) | todo                                    |
| Updated the definition of `subject` and added a note to the FHIR safety page about not being surprised by the `focus` element.                                                                                                                                                                                                                                                                                                                                                | OO: \[%GF\#16136%\]                 | \[%diff observation.html Observation%\] |
| Created a standard extension event-relatedArtifact to reference other knowledge resources used for citations and documentation of the Observation instance.                                                                                                                                                                                                                                                                                                                   | OO: \[%GF\#15824%\]                 | \[%diff observation.html Observation%\] |
| Created a standard extension event-supportingInfo to reference other resources *from the patient record* that were used in creating the Observation instance.                                                                                                                                                                                                                                                                                                                 | OO: \[%GF\#16172%\]                 | \[%diff observation.html Observation%\] |
| Created a standard extension observation-precondition to reference other observations that must be known to correctly interpret the observation.                                                                                                                                                                                                                                                                                                                              | OO: \[%GF\#17228%\]                 | \[%diff observation.html Observation%\] |
| The code system for value set observation-interpretation is changed from HL7 Version 2 Table 0078 to v3-ObservationInterpretation as part of the HL7 [Unified Terminology Governance Project](https://confluence.hl7.org/display/VOC/Unified+Terminology+Governance+Project+%28UTG%29+Page). Added clarifying text to indicate that all use cases *where interpretations are relevant* might not be covered by the observation-interpretation value set. **Breaking change!** | OO: \[%GF\#16186%\], UTG Process    | \[%diff observation.html Observation%\] |
| Changed cardinality of `Observation.interpretation` and `Observation.component.interpretation` from 0..1 to 0..\*                                                                                                                                                                                                                                                                                                                                                             | OO: \[%GF\#16231%\]                 | \[%diff observation.html Observation%\] |
| Added guidance on how other observations or code translations provide additional context that may alter the semantics of the observation.                                                                                                                                                                                                                                                                                                                                     | OO: \[%GF\#17578%\]                 | \[%diff observation.html Observation%\] |
| Changed `Observation.context` to `Observation.encounter` and changed type from `Reference(EncounterIEpisodeOfCare)` to `Reference(Encounter)`. Update search parameter definition and add a standard extension event-episodeOfCare. **Breaking change!**                                                                                                                                                                                                                      | OO: \[%GF\#17661%\]                 | \[%diff observation.html Observation%\] |

<span id="stu"></span>
#### Trial-Use R4

This ballot includes everything else not listed above, including draft, informative and externally derived content. Balloters are welcome to comment about these, though there is no difference between ballot comments on these content and normal content.

There have been many changes to the content; balloters should use the "Ballot Comparison" link at the bottom of page to compare the differences. For implementer convenience, **some of the more signficant** (not all) changes are listed here:

-   New Resources: [MedicationKnowledge](medicationknowledge.html), [DeviceDefinition](devicedefinition.html), [ChargeItemDefinition](chargeitemdefinition.html)
-   Renamed Resources: `OrganizationRole` to [OrganizationAffiliation](organizationaffiliation.html), `EligibilityRequest` to [CoverageEligibilityRequest](coverageeligibilityrequest.html), `EligibilityResponse` to [CoverageEligibilityResponse](coverageeligibilityresponse.html), and `ProductPlan` to [InsurancePlan](insuranceplan.html)
-   Significant rework around devices - in the [Device](device.html) resource, remove `DeviceComponent` + new resource [DeviceDefinition](devicedefinition.html)
-   Update maps/diffs to R3 (see [note](#maps) above)
-   New page listing [best practices](best-practices.html)
-   A sweeping change to code system and value set URLs to align with new terminology infrastructure
-   Add [information](versioning.html) and [operations](capabilitystatement-operation-versions.html) related to supporting multiple versions of FHIR
-   Rewrite [Asynchronous Pattern Operation](async.html)
-   New [security notes](security.html) about suggested best practices, and new [safety notes](safety.html) about deleting records
-   Lots of changes to [Financial Resources](financial-module.html) (especially [Contract](contract.html))

\[%file newfooter%\]
