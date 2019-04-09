\[%settitle Version History%\]
\[%file newnavbar%\]
<span id="history"></span>
### Version History since DSTU \#1

|                                                                                        |                                               |                                                                                         |
|----------------------------------------------------------------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------|
| [FHIR Infrastructure](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process): [Informative](versions.html#std-process) |

For background to this version history, see [FHIR Version Management Policy](versions.html).

<span id="pubs"></span>
Major Milestones:

|                                                       |        |                                                                       |
|-------------------------------------------------------|--------|-----------------------------------------------------------------------|
| [Dec 27, 2018](http://hl7.org/fhir/R4/index.html)     | 4.1.0  | Release 4 (1<sup>st</sup> Normative Content + Trial Use Developments) |
| [Feb 21, 2017](http://hl7.org/fhir/STU3/index.html)   | 3.0.1  | Release 3 (STU - Standard for Trial Use)                              |
| [Oct 24, 2015](http://hl7.org/fhir/DSTU2/index.html)  | 1.0.2  | DSTU2 (Second Draft Standard for Trial Use)                           |
| [Sept 30, 2014](http://hl7.org/fhir/DSTU2/index.html) | 0.0.82 | DSTU1 (First Draft Standard for Trial Use)                            |

This is the 4th milestone release of FHIR. The only changes tracked here are the changes made after the publication of the first DSTU release. For earlier changes, see the [DSTU \#1 Version History](http://hl7.org/fhir/history.html). Note that a full archive history of everything is available [through the HL7 GitHub archives](http://github.com/hl7/fhir).

**Version**
**Changes**
4.1.0<span id="v4.1.0"></span>
Current build after 4.1.0 release
4.1.0<span id="v4.1.0"></span>
**R4**: Dec 27, 2018. First Normative content, with many significant changes

Note that between R3 and R4, nearly 3000 change proposals were applied to the specification, including &gt;1000 substantive changes, of which 339 were labeled 'non-compatible'. As such, providing a comprehensive list of changes between specifications is not appropriate. To help see and understand the differences between the specification releases, implementers can:

-   consult the [R3/R4 difference analysis](diff.html)
-   review (or use) the [R3/R4 transforms](r3maps.html)
-   Use the ![](compare-to-r3.png) link at the foot of every page

To help implementers, the more significant changes are listed here:

-   Some content marked Normative using <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a> - see [Documentation](documentation.html) and [Resource](resourcelist.html) indexes. The meaning of normative is described at length in the [Rules for Inter-version change](versions.html#change).
-   New Resources:
    -   [BiologicallyDerivedProduct](biologicallyderivedproduct.html)
    -   [CatalogEntry](catalogentry.html)
    -   [ChargeItemDefinition](chargeitemdefinition.html)
    -   [DeviceDefinition](devicedefinition.html)
    -   [EffectEvidenceSynthesis](effectevidencesynthesis.html)
    -   [EventDefinition](eventdefinition.html)
    -   [Evidence](evidence.html)
    -   [EvidenceVariable](evidencevariable.html)
    -   [ExampleScenario](examplescenario.html)
    -   [ImmunizationEvaluation](immunizationevaluation.html)
    -   [InsurancePlan](insuranceplan.html)
    -   [Invoice](invoice.html)
    -   [MedicationKnowledge](medicationknowledge.html)
    -   [MedicinalProduct](medicinalproduct.html)
    -   [MedicinalProductAuthorization](medicinalproductauthorization.html)
    -   [MedicinalProductContraindication](medicinalproductcontraindication.html)
    -   [MedicinalProductIndication](medicinalproductindication.html)
    -   [MedicinalProductIngredient](medicinalproductingredient.html)
    -   [MedicinalProductInteraction](medicinalproductinteraction.html)
    -   [MedicinalProductManufactured](medicinalproductmanufactured.html)
    -   [MedicinalProductPackaged](medicinalproductpackaged.html)
    -   [MedicinalProductPharmaceutical](medicinalproductpharmaceutical.html)
    -   [MedicinalProductUndesirableEffect](medicinalproductundesirableeffect.html)
    -   [ObservationDefinition](observationdefinition.html)
    -   [OrganizationAffiliation](organizationaffiliation.html)
    -   [ResearchDefinition](researchdefinition.html)
    -   [ResearchElementDefinition](researchelementdefinition.html)
    -   [RiskEvidenceSynthesis](riskevidencesynthesis.html)
    -   [SpecimenDefinition](specimendefinition.html)
    -   [SubstancePolymer](substancepolymer.html)
    -   [SubstanceReferenceInformation](substancereferenceinformation.html)
    -   SubstanceSpecification
    -   [TerminologyCapabilities](terminologycapabilities.html)
    -   [VerificationResult](verificationresult.html)
-   Renamed Resources:
    -   `BodySite` -&gt; [BodyStructure](bodystructure.html)
    -   `EligibilityRequest` -&gt; [CoverageEligibilityRequest](coverageeligibilityrequest.html)
    -   `EligibilityResponse` -&gt; [CoverageEligibilityResponse](coverageeligibilityresponse.html)
    -   `Sequence` -&gt; [MolecularSequence](molecularsequence.html)
    -   `ReferralRequest` & `ProcedureRequest` -&gt; [ServiceRequest](servicerequest.html)
-   Deleted Resources:
    -   `DeviceComponent`
    -   `ImagingManifest`
-   Clarification of the meaning and use of [IsModifier](conformance-rules.html#isModifier)
-   Considerable development of the [Version Management Policy](versions.html#versions), and support for [multiple FHIR versions](versioning.html) (specifically, the [FHIR Version parameter](http.html#version-parameter))
-   Datatypes: Rework [Money](datatypes.html#Money) (no longer a constraint on [Quantity](datatypes.html#Quantity)), and add [Expression](metadatatypes.html#Expression)

3.6.0<span id="v3.6.0"></span>
Current build after 3.5.0 release
3.5.0<span id="v3.5.0"></span>
**Release R4 Ballot \#1**: Sept 20, 2018. R4 ballot \#2

Major changes from R4 Ballot 1 (3.3.0):

**Description**
**Committee + Tasks**
**Pages**
**All Ballots**
Change the canonical URL for all v2 and v3 CodeSystems and ValueSets (and some FHIR ones too), to
`http://terminology.hl7.org` (from the Unified Terminology Process) **Breaking change!**
(no task: Vocab committee decision)
todo
**Normative / Infrastructure**
Added reference.type
FHIR-I: \[%GF\#13543%\]
\[%diff references.html\#type References between Resources%\]
Clarify definition of is-modifier + impacts on modifier extensions. Note: this lead to **breaking changes**
on a few extensions (changed from modifierExtension to normal extension)
FHIR-I: \[%GF\#16188%\]
\[%diff conformance-rules.html Conformance Rules%\], \[%diff extensibility.html\#modifiers Extensibility%\]
Add mode parameter to /metadata
FHIR-I: \[%GF\#14444%\]
\[%diff http.html RESTful API%\]
Enhance/extend rules around changes between versions
FHIR-I: \[%GF\#13089%\]
\[%diff versions.html\#rules Version Management Policy%\]
Add fhirVersion parameter to application/fhir mime type
FHIR-I: \[%GF\#16165%\]
\[%diff http.html\#version-parameter RESTful API%\]
Add the $versions operation
FHIR-I: \[%GF\#17009%\]
\[%diff capabilitystatement-operations.html Capability Statement Operations%\]
Allow exponential form for decimals (with corresponding consequences for precision)
FHIR-I: \[%GF\#16874%\]
\[%diff datatypes.html\#decimal Data Types%\], \[%diff xml.html\#decimal XML%\]
Describe use of exponential form when searching numbers (+ clarifications for precision)
FHIR-I: \[%GF\#16369%\]
\[%diff search.html\#decimal Search%\]
Remove support for operations on historical resources **Breaking change!**
FHIR-I: \[%GF\#17258%\]
\[%diff operations.html Operations%\]
Change Money Type to make it simpler **Breaking change!**
FHIR-I: \[%GF\#16297%\]
\[%diff datatypes.html\#Money Data Types%\]
Change ElementDefinition.binding.valueSet to only be of type canonical **Breaking change!**
FHIR-I: \[%GF\#16055%\]
\[%diff elementdefinition.html Element Definition%\]
Remove restriction on Bundle containing multiple versions of the same resource **Breaking change!**
FHIR-I: \[%GF\#17085%\]
\[%diff bundle.html Bundle%\]
Rename Binary.content to Binary.data and exclude it from summary (which makes it optional) **Breaking change!**
FHIR-I: \[%GF\#16998%\], \[%GF\#16898%\]
\[%diff binary.html Binary Resource%\]
**Normative / Conformance + Terminology**
Remove ValueSet.$expand profile parameter, and add parameters from ExpansionProfile **Breaking change!**
Vocab: \[%GF\#16337%\] & \[%GF\#16490%\]
\[%diff valueset-operation-expand.html ValueSet.$expand%\]
Remove ValueSet.$expand.limitedExpansion parameter, and document how to use count instead **Breaking change!**
Vocab: \[%GF\#16449%\]
\[%diff valueset-operation-expand.html ValueSet $expand operation%\]
Move Valueset.extensible to an extension
Vocab: \[%GF\#16427%\]
\[%diff valueset.html ValueSet%\]
Add [CapabilityStatement.implementation.custodian](capabilitystatement-definitions.html#CapabilityStatement.implementation.custodian)
FHIR-I: \[%GF\#16342%\]
\[%diff capabilitystatement.html CapabilityStatement%\]
Add CapabilityStatement.imports
FHIR-I: \[%GF\#14299%\]
\[%diff capabilitystatement.html CapabilityStatement%\]
**Normative / Observation**
Update definition of `subject` and add note [safety page](safety.html) the `focus` element
OO: \[%GF\#16136%\]
\[%diff observation.html Observation%\]
Changed cardinality of `Observation.interpretation` and
`Observation.component.interpretation` from 0..1 to 0..\*
OO: \[%GF\#16231%\]
\[%diff observation.html Observation%\]
Changed `Observation.context` to `Observation.encounter` with type `Reference(Encounter)`. **Breaking change!**
OO: \[%GF\#17661%\]
\[%diff observation.html Observation%\]
**This is only the major changes**. More comprehensive lists can be found in the ballot introduction (later removed).

Major changes in the other parts of the specification:

-   New Resources: [MedicationKnowledge](medicationknowledge.html), [DeviceDefinition](devicedefinition.html), [ChargeItemDefinition](chargeitemdefinition.html)
-   Renamed Resources: `OrgnizationRole` to [OrganizationAffiliation](organizationaffiliation.html), `EligibilityRequest` to [CoverageEligibilityRequest](coverageeligibilityrequest.html), `EligibilityResponse` to [CoverageEligibilityResponse](coverageeligibilityresponse.html), and `ProductPlan` to [InsurancePlan](insuranceplan.html)
-   Significant rework around devices - in the [Device](device.html) resource, remove `DeviceComponent` + new resource [DeviceDefinition](devicedefinition.html)
-   Update maps/diffs to R3 (see [note](#maps) above)
-   New page listing [best practices](best-practices.html)
-   A sweeping change to code system and value set URLs to align with new terminology infrastructure
-   Add [information](versioning.html) and [operations](capabilitystatement-operation-versions.html) related to supporting multiple versions of FHIR
-   Rewrite [Asynchronous Pattern Operation](async.html)
-   New [security notes](security.html) about suggested best practices, and new [safety notes](safety.html) about deleting records
-   Lots of changes to [Financial Resources](financial-module.html) (especially [Contract](contract.html))

3.4.0<span id="v3.4.0"></span>
Current build after 3.3.0 release
3.3.0<span id="v3.3.0"></span>
**Release R4 Ballot \#1**: Apr 3, 2018. R4 ballot \#1. Major changes from R3:

-   Mark all content with a standards status - Normative, Trial use, Draft, or external
-   Many minor & major changes to data types, resources, operations
-   New Resources: [BiologicallyDerivedProduct](biologicallyderivedproduct.html), [CatalogEntry](catalogentry.html), [EventDefinition](eventdefinition.html), [ExampleScenario](examplescenario.html), [ImmunizationEvaluation](immunizationevaluation.html), [Invoice](invoice.html), ItemInstance, [ObservationDefinition](observationdefinition.html), OccupationalData, [OrganizationAffiliation](organizationaffiliation.html), [SpecimenDefinition](specimendefinition.html), [TerminologyCapabilities](terminologycapabilities.html), UserSession and [VerificationResult](verificationresult.html), and a new set of resources for medication knowledge management: [MedicinalProduct](medicinalproduct.html), [MedicinalProductAuthorization](medicinalproductauthorization.html), MedicinalProductClinicals, MedicinalProductDeviceSpec, [MedicinalProductIngredient](medicinalproductingredient.html), [MedicinalProductPackaged](medicinalproductpackaged.html), MedicinalProductPharmaceutical, [InsurancePlan](insuranceplan.html), SubstancePolymer, [SubstanceReferenceInformation](substancereferenceinformation.html) and SubstanceSpecification.
-   Renamed Resources: ProcedureRequest to [ServiceRequest](servicerequest.html) & BodySite to [BodyStructure](bodystructure.html)
-   Removed Resources: DataElement, ImagingManifest and ServiceDefinition
-   New Pages: [Asynchronous Use](async.html), [Persistence/Data bases](storage.html), [FiveWs Pattern](fivews.html) and [Multi-language support](languages.html)

3.2.0<span id="v3.2.0"></span>
**Release R4 Draft**: Dec 21, 2017. R4 draft ballot. Major changes:

-   Ensure that all pages have a standards status, and enforce standards status throughout. Add dependency analysis
-   Many minor changes to data types, resources, operations
-   New Resources: [CatalogEntry](catalogentry.html), [SpecimenDefinition](specimendefinition.html), [ObservationDefinition](observationdefinition.html), [ExampleScenario](examplescenario.html), [TerminologyCapabilities](terminologycapabilities.html), UserSession, [Invoice](invoice.html), [InsurancePlan](insuranceplan.html), OccupationalData, [OrganizationAffiliation](organizationaffiliation.html), [VerificationResult](verificationresult.html), [MedicinalProduct](medicinalproduct.html), [MedicinalProductAuthorization](medicinalproductauthorization.html) MedicinalProductClinicals, [MedicinalProductIngredient](medicinalproductingredient.html), [MedicinalProductPackaged](medicinalproductpackaged.html), MedicinalProductPharmaceutical MedicinalProductDeviceSpec, SubstanceSpecification, SubstancePolymer, [SubstanceReferenceInformation](substancereferenceinformation.html), [BiologicallyDerivedProduct](biologicallyderivedproduct.html), ItemInstance
-   Add draft support for bulk data ([Asynchronous API](async.html) + [nd-json format](nd-json.html))

3.1.0<span id="v3.1.0"></span>
R4 development begins
3.0.0<span id="v3.0.0"></span>
**Release 3**: Mar 21, 2017. STU3

This is the full FHIR Release 3 (R3). R3 is a complete overhaul of the specification from R2, with over 2400 change proposals process, and applied in R3. Of those changes, 380+ are labeled as a breaking change. Given this level of change, there is no useful way to present a single change list. Users can use the R2/R3 difference comparison, the R2 &lt;-&gt; R3 transforms, or the "Compare to R2" link at the foot of every page to help visualise the differences between R2 and R3.

Many of the changes made in this release (since 1.8.0) are in response to Quality Assurance processes in HL7, with a goal of readying the specification for Normative processes in R4:

-   Reorder many resources and improve their definitions and bindings (Quality Assurance work)
-   Add draft resources [AdverseEvent](adverseevent.html) and [GraphDefinition](graphdefinition.html)
-   Change to the [way discriminators work](profiling.html#discriminator) in profiles (for profile/tooling authors)
-   Finalization of the [Turtle (RDF) format, along with JSON-LD (later removed)](rdf.html)
-   Consolidation of Vresion management issues into a single [Version Policy](versions.html) page, and update to current policy
-   Add [rules about how missing data](search.html#missing) in search

Roll up: Of all the many changes (thousands) between R2 and R3, these are the most significant:

-   Change the [FHIR mime type](http.html#mime-type) to application/fhir+xml|json instead of application/xml|json+fhir (**breaking change**, for conformance to W3C+IETF rules)
-   Rename the "Conformance" resource to "[CapabilityStatement](capabilitystatement.html)" and Deprecate use of the OPTIONS command to retrieve the CapabilityStatement
-   [Search](search.html) Changes around [errors in search parameters](search.html#errors), [missing data](search.html#missing), [sorting](search.html#sort)
-   Change [HumanName](datatypes.html#HumanName).family from 0..\* to 0..1
-   [CodeSystem](codesystem.html) now separated out from [ValueSet](valueset.html)

1.9.0
**FHIR Rolling Build, 2016 Dec onwards**<span id="v1.9.0"></span>

1.8.0
**FHIR QA Release, Dec 6, 2016**<span id="v1.8.0"></span>

STU 3 Candidate, and also the basis for several implementation guide ballots and the [San Antonio Jan 2017 Connectathon](https://confluence.hl7.org/display/FHIR/Connectathon+14)

**Breaking Changes Summary:**

-   Change [HumanName](datatypes.html#HumanName).family from 0..\* to 0..1
-   Rename MedicationOrder and DiagnosticOrder to [MedicationRequest](medicationrequest.html) and DiagnosticRequest and make a series of changes to align with the [Request Pattern](request.html)
-   Add cross resource search + rework composite parameter expressions
-   Harmonise resource metadata across the Terminology, Conformance, and Knowledge resources
-   Change the way [versioned references to canonical URLs](references.html#canonical) are handled
-   REST - servers must [return a location header](http.html#create) on a create
-   [Condition](condition.html) status elements reworked

These are only the more significant changes, there were many 100s of changes made in response to ballot comments and ongoing implementation experience. These include breaking changes to may resources. Structural changes are [summarized here](diff.html), and `Transforms between DSTU 2 and STU 3` are provided for many resources.

1.6.0
**FHIR STU3 ballot, Aug 11, 2016**<span id="v1.6.0"></span>

STU 3 ballot version, and also the basis for the [Baltimore Sept 2016 Connectathon](https://confluence.hl7.org/display/FHIR/Connectathon+13)

**Publication Changes:**

-   Move the US Realm implementation guides out of the specification (see <http://www.fhir.org/guides/registry>)
-   Rework the home page, and introduce modules as a way to navigate the specification + add significant new implementer advice (e.g. "[Getting Started](modules.html)")
-   Change the Navigation menu to focus on indexes to the content in the specification
-   Move FHIRPath expression language to its [long term home](http://hl7.org/fhirpath)

**Technical Changes:**

-   RESTful API
    -   Change the [FHIR mime type](http.html#mime-type) to application/fhir+xml|json instead of application/xml|json+fhir (**breaking change**, for conformance to W3C+IETF rules)
    -   Add new uses for the Prefer header (return OperationOutcome, and manage behavior related to unknown / unsupported search parameters
    -   Deprecate use of the OPTIONS command to retrieve the CapabilityStatement
    -   Add support for conditional references to the transaction interaction
    -   Add reverse chaining
-   Formats: No change to XML + JSON formats. Add [Turtle Format](rdf.html), and related validation tools
-   For Data Types and Resources, there is [formal difference](diff.html) analysis from DSTU2 (also found throughout the specification), and `transforms between DSTU 2 and STU 3` are provided for many resources

1.5.0
**FHIR Current Build Update, July 8 2016**<span id="v1.5.0"></span>

Update current version to 1.5 to prevent confusion with implementations still running the May 2016 version.

-   There are many changes in this version from 1.4.0, but no formal list is provided. A formal list will be provided for 1.6 (as a diff to 1.4)

1.4.0
**FHIR Connectathon 12 Snapshot, Mar 30 2016**<span id="v1.4.0"></span>

Frozen base for Connectathon 12 & For Comment ballots:

-   FHIR API and Serialization Format Enhancement

    -   The [\_sort parameter](search.html#sort) has been reworked
    -   New or extended search parameters for read, search or history: \_type, \_at, \_summary, \_elements
    -   Change [Turtle representation](rdf.html) - now ready for trial

-   Conformance resources with significant breaking changes and behavior:
    -   [StructureDefinition](structuredefinition.html) - Type Handling: Changes to how the structure definition types work: **baseType** *replaces* **constrainedType** (now type) & **baseDefinition** *replaces* **base**
    -   [CodeSystem](codesystem.html) now separated out from [ValueSet](valueset.html): CodeSystem is now a first class resource type in order to support use throughout the FHIR eco-system, such as to support value set expansion and validation. It is intended to be used for distributing the smaller ad-hoc code systems that are ubiquitously encountered throughout the healthcare process.
-   Other resources with significant breaking changes and behavior:

    -   [AllergyIntolerance](allergyintolerance.html)
    -   [Appointment](appointment.html)
    -   [AuditEvent](auditevent.html)
    -   [Claim](claim.html)
    -   [ClaimResponse](claimresponse.html)
    -   [Device](device.html)
    -   [ConceptMap](conceptmap.html)
    -   [Conformance](capabilitystatement.html) (now CapabilityStatement)
    -   [Contract](contract.html)
    -   [CoverageEligibilityRequest](coverageeligibilityrequest.html)
    -   [CoverageEligibilityResponse](coverageeligibilityresponse.html)
    -   [Device](device.html)
    -   DiagnosticRequest
    -   [ExplanationOfBenefit](explanationofbenefit.html)
    -   [Library](library.html)
    -   [Measure](measure.html)
    -   [Medication](medication.html)
    -   [MedicationAdministration](medicationadministration.html)
    -   [MedicationStatement](medicationstatement.html)
    -   [Observation](observation.html): the introduction of the Vital Signs Profile (proposed to be mandatory)
    -   [OperationDefinition](operationdefinition.html)
    -   [Patient](patient.html)
    -   [PaymentNotice](paymentnotice.html)
    -   [PaymentReconciliation](paymentreconciliation.html)
    -   [Practitioner](practitioner.html)
    -   [Provenance](provenance.html)
    -   ReferralRequest
    -   [Schedule](schedule.html)
    -   [MolecularSequence](molecularsequence.html)
    -   [Slot](slot.html)
    -   [StructureDefinition](structuredefinition.html)
    -   [TestScript](testscript.html)
    -   [ValueSet](valueset.html)

-   Add new **draft** resources:
    -   [CareTeam](careteam.html)
    -   [CodeSystem](codesystem.html)
    -   [CompartmentDefinition](compartmentdefinition.html)
    -   [Linkage](linkage.html)
    -   [MeasureReport](measurereport.html)
    -   [PractitionerRole](practitionerrole.html)
    -   Protocol
    -   [StructureMap](structuremap.html)
    -   [Task](task.html)

1.2.0
**FHIR Connectathon 11 Snapshot, Dec 11 2015**<span id="v1.2.0"></span>

Frozen base for Connectathon 11:

-   Remove GuidanceRequest
-   Add new **draft** resources: [MolecularSequence](molecularsequence.html), ExpansionProfile
-   Modifications to Financial Resource & TestScript resource

Note: this version is temporary, and was removed after Connectathon 11 was complete

1.1.0
**GAO Ballot + technical corrections, Dec 2 2015**<span id="v1.1.0"></span>

A ballot publication for the `GAO Ballot` that also includes:

-   Various technical corrections to the generated snapshots
-   Populate FHIRPath expressions in extensions for all search parameters and invariants
-   Add new **draft** resources: `GuidanceRequest`, [GuidanceResponse](guidanceresponse.html), `ModuleMetadata`, `ModuleDefinition`, [Library](library.html), `DecisionSupportServiceModule`, `DecisionSupportRule`, `OrderSet`, [Measure](measure.html)
-   Major restructure of [Questionnaire](questionnaire.html)

1.0.2
**Technical Correction 1, Oct 24 2015**<span id="v1.0.2"></span>

A series of technical corrections to the specification following extensive review:

-   Corrections to Extension cardinalities in implementation guides
-   Corrections in the conformance resources that support the specifications
-   Correct several erroneous invariants
-   Various typos, broken links, and fixes in examples
-   For a comprehensive list of corrections, see the [Task list for FHIR DSTU2 Technical Correction 1](https://confluence.hl7.org/display/FHIR/DSTU2+Technical+Correction+1+Tasks)

1.0.1
**DSTU 2, Sept 23 2015**

Changes of significance during the QA process:

-   Remove the Clinical Quality Improvement Framework (CQIF) from this published version
-   made fixes to generated schematrons
-   updated generated comformance resources (StructureDefinitions and SearchParameters) so they were consistent with the specification
-   Many spelling / grammar / broken link fixes

1.0.0
**DSTU 2 QA Preview, Aug 31 2015**

This version had extensive change as a result of the May 2015 DSTU ballot, ongoing testing, and the open change proposals (1317 tasks). The extent of the changes is best illustrated by the number of the [list of changes labeled 'breaking change'](https://confluence.hl7.org/display/FHIR/DSTU2+Ballot+to+Final+breaking+changes) - 158 changes of 1317 total tasks. Below is a list of the most important changes:

-   General: introduced the [maturity framework](versions.html#maturity)
-   [RESTful API](http.html): add batch, several clarifications around versioning & transactional integrity, changed Bundle URL resolution rules
-   [Search](search.html): changed the way &lt;&gt; etc.works, added \_list parameter, changed rules around contained and included resources
-   Formats: added a [note about whitespace in XML](xml.html), added [code generation schemas](xml.html#schema-gen)
-   Data Types:
    -   New data types: [markdown](datatypes.html#markdown), [Annotation](datatypes.html#Annotation),
    -   changed data types: [Coding](datatypes.html#Coding), [Quantity](datatypes.html#Quantity), [Signature](datatypes.html#Signature), [Timing](datatypes.html#Timing), [Address](datatypes.html#Address), [ContactPoint](datatypes.html#ContactPoint)
    -   changes to [ElementDefinition](elementdefinition.html): add base, make type.profile repeat, remove invariant.name and replace with invariant.requirements, remove binding.name, add min/max value
-   Resources:
    -   New resources: [Account](account.html), [ImplementationGuide](implementationguide.html), [TestScript](testscript.html)
    -   renamed: Contraindication -&gt; [DetectedIssue](detectedissue.html), MedicationPrescription -&gt; [MedicationRequest](medicationrequest.html), QuestionnaireAnswers -&gt; [QuestionnaireResponse](questionnaireresponse.html)
    -   removed: Supply
    -   changed: almost all resources - too many to list (1317 tasks worth of changes) - add, remove elements, change types, references, definitions & value sets, re-order elements, provide much more documentation and new examples
-   Implementation Guide:
    -   Move [Argonaut content](http://argonautwiki.hl7.org/index.php?title=Main_Page) out

0.5.0
**DSTU Ballot, May 2015**

This version had extensive change as a result of the January 2015 Draft ballot, ongoing testing, and the open change proposals (over 800 tasks). The list below is a summary of the major changes to resource content. It shows only a limited number of the overall changes.

**Enumerations**

-   All spaces removed
-   Extensive content changes not noted here

**New Data Types**

-   [unsignedInt](datatypes.html#unsignedInt)
-   [positiveInt](datatypes.html#positiveInt)
-   [Signature](datatypes.html#Signature)
-   [Meta](resource.html#Meta)

**Changed Data Types**

-   [Coding](datatypes.html#Coding) - remove valueSet property
-   [Attachment](datatypes.html#Attachment) - add creation
-   [Identifier](datatypes.html#Identifier) - replace label with type
-   [Timing](datatypes.html#Timing) - major rework of content
-   [ElementDefinition](elementdefinition.html) - add label, code, rename 'formal' to definition, rename synonym to alias, add language to mapping, remove conformance and isExtensible and replace with strength

**New Resources**

-   BodySite
-   [Claim](claim.html)

**Removed Resources**

-   CarePlan2 -&gt; collapsed into CarePlan
-   FamilyHistory -&gt; broken up into FamilyMemberHistory
-   InstitutionalClaim, OralHealthClaim, PharmacyClaim, ProfessionalClaim, VisionClaim -&gt; collapsed into Claim
-   Other - use Basic instead
-   PendedRequest,Readjudicate, Reversal, StatusRequest, StatusResponse - use ProcessRequest/Response instead
-   SupportingDocumentation - use DocumentManifest instead
-   ProcessRequest, ProcessResponse - use Task instead

**Renamed Resources**

-   Alert -&gt; Flag: 'alert' made people think it was an action like an alarm
-   SecurityEvent -&gt; AuditEvent: it wasn't just for security purposes
-   ClinicalAssessment -&gt; ClinicalImpression: people got confused with 'assessment' tools like APGAR score
-   Profile -&gt; StructureDefinition: 'Profile' is the process, a package of statements

**Changes Inside Resources**

-   [Parameters](parameters.html) - allow parameter.part to contain a resource
-   [AllergyIntolerance](allergyintolerance.html) - rename subject to patient
-   [Appointment](appointment.html) - remove lastModifiedBy/lastModified, add location
-   [AppointmentResponse](appointmentresponse.html) - remove lastModifiedBy/lastModified, add rename individual to actor
-   [AuditEvent](auditevent.html) - add .event.purposeOfEvent, participant.location, .policy, and .purposeOfUse
-   [Bundle](bundle.html) - major reorganization
-   [CarePlan](careplan.html) - pull goal out + other reorganization
-   [ClinicalImpression](clinicalimpression.html) - add status, replace careplan & referral with trigger, rename diagnosis to finding, make plan 0..\*,
-   [Composition](composition.html) - change .section.content to refer to List only, not any
-   [ConceptMap](conceptmap.html) - change identifier to url, add useContext, change telecom to contact,
-   [Condition](condition.html) - rename subject to patient, rename status to clinicalStatus, change to bodySite = code or Reference(BodySite), rename .codeableConcept to .code
-   [Conformance](capabilitystatement.html) (now CapabilityStatement) - change identifier to url, add useContext, change telecom to contact, add requirements and copyright, add support for conditional operations,
-   [Contract](contract.html) - extensive rewrite
-   [Coverage](coverage.html) - add bin, subscriberId
-   DataElement (now [StructureDefinition](structuredefinition.html)) - total rewrite to use ElementDefinition
-   [Device](device.html) - add status, manufactureDate
-   [DeviceMetric](devicemetric.html) - rename operationalState to operationalStatus, add measurementMode, rename calibrationInfo to calibration, change color to an enumerations
-   [DeviceRequest](devicerequest.html)/[DeviceUseStatement](deviceusestatement.html) - change to bodySite = code or Reference(BodySite)
-   DiagnosticRequest- change to bodySite = code or Reference(BodySite)
-   [DiagnosticReport](diagnosticreport.html) - add encounter
-   [DocumentManifest](documentmanifest.html) - add options for how content is referred to
-   [DocumentReference](documentreference.html) - add format, remove policyManager, make content : Attachment, and remove several related attributes, remove service reference and add context.practiceSetting, sourcePatientInfo, and related
-   [Encounter](encounter.html) - add incomingReferralRequest, allow reason to repeat, rename diet to dietPreference
-   [EpisodeOfCare](episodeofcare.html) - rename currentStatus to status, allow referralRequest to repeat,
-   [Flag](flag.html) - rename subject to patient, change from note to code
-   [Goal](goal.html) - add targetDate, statusDate, author, priority
-   [HealthcareService](healthcareservice.html) - extensive rewrite
-   `ImagingObjectSelection` - remove retrieveAETitle, rename retrieveUrl to url, add frames
-   [ImagingStudy](imagingstudy.html) - add laterality, change url to attachment
-   [Immunization](immunization.html) - add encounter, rename subject to patient, rename refusedIndicator to wasNotGiven, rename refusalReason to reasonNotGiven
-   [ImmunizationRecommendation](immunizationrecommendation.html) - rename subject to patient
-   [List](list.html) - add title, status, change ordered to orderedBy, add note
-   [Location](location.html) - remove status
-   [Media](media.html) - remove created (-&gt; Attachment)
-   [Medication](medication.html) - add batch
-   [MedicationAdministration](medicationadministration.html) - add reasonGiven, note, text. remove timing & maxDosePerPeriod
-   [MedicationDispense](medicationdispense.html) - collapse to a single dispense, add daysSupply, note and substitution, change quantity to allow range
-   [MedicationRequest](medicationrequest.html) - add note, change quantity to allow range,
-   [MedicationStatement](medicationstatement.html) - add informationSource, status, dateAsserted, replace whenGiven with effective\[x\], remove device, add dosage.text
-   [NamingSystem](namingsystem.html) - add date, publisher,
-   [NutritionOrder](nutritionorder.html) - extensive rewrite
-   [Observation](observation.html) - change name to code, allow more types of value\[x\], change type of dataAbsentReason, change to bodySite = code or Reference(BodySite), allow identifier to repeat, add device,
-   [OperationDefinition](operationdefinition.html) - change identifier to url, add useContext, change telecom to contact, change name to title, add reuqirements, idempotent,
-   [OperationOutcome](operationoutcome.html) - change type of .issue.type
-   `OrderResponse` - rename code to orderStatus
-   [Organization](organization.html) - remove location and contact.gender
-   [Patient](patient.html) - communication to allow 'preferred'
-   [Person](person.html) - rename other to target
-   [Practitioner](practitioner.html) - change type of birthDate, allow multiple roles per practitioner
-   [Procedure](procedure.html) - add status and category, change to bodySite = code or Reference(BodySite), allow date to be period too, add location, change followUp to code 0..\*, add device tracking
-   [ServiceRequest](servicerequest.html) - change to bodySite = code or Reference(BodySite)
-   [Provenance](provenance.html) - change integritySignature to signature & make it a type, allow reference by Reference as well as URI
-   [Questionnaire](questionnaire.html) - add telecom
-   [Schedule](schedule.html) - move lastModified
-   [SearchParameter](searchparameter.html) - change telecom to contact, add status, experimental, date,
-   [Slot](slot.html) - move lastModified
-   [Specimen](specimen.html) - change source to parent, change to bodySite = code or Reference(BodySite)
-   [StructureDefinition](structuredefinition.html) - complete rewrite
-   [Subscription](subscription.html) - change type of tag, reanme url to endPoint,
-   [ValueSet](valueset.html) - change identifier to url, add useContext, change telecom to contact, replace purpose with useContext, add requirements, rename stableDate to lockedDate, change type of expansion.identifier, add expansion parameters

0.4.0
**Draft For Comment, January 2015 Ballot**

Breaking Changes (full list):

-   Replace atom and taglist with a native [Bundle](bundle.html) format ([3728](https://jira.hl7.org/projects/FHIR/issues/FHIR-3728), [3558](https://jira.hl7.org/projects/FHIR/issues/FHIR-3558), [2889](https://jira.hl7.org/projects/FHIR/issues/FHIR-2889)) (and also [Binary](binary.html))
-   JSON: change how extensions are represented ([3471](https://jira.hl7.org/projects/FHIR/issues/FHIR-3471))
-   RESTful API: change how version specific upgrades work ([3451](https://jira.hl7.org/projects/FHIR/issues/FHIR-3451))
-   DataTypes:
-   Rename Schedule to [Timing](datatypes.html#Timing) ([3536](https://jira.hl7.org/projects/FHIR/issues/FHIR-3536), [3236](https://jira.hl7.org/projects/FHIR/issues/FHIR-3236))
-   Rename Contact to [ContactPoint](datatypes.html#ContactPoint) ([3533](https://jira.hl7.org/projects/FHIR/issues/FHIR-3533)) and swap order of elements ([3108](https://jira.hl7.org/projects/FHIR/issues/FHIR-3108)))
-   [Address](datatypes.html#Address) - change zip to postCode ([2888](https://jira.hl7.org/projects/FHIR/issues/FHIR-2888))
-   [Quantity](datatypes.html#Quantity): Correct schema spelling for "QuantityCompararator" ([3531](https://jira.hl7.org/projects/FHIR/issues/FHIR-3531))
-   Change allowable values for the [id](datatypes.html#id) type to include capital letters, and allow up to 64 chars ([3750](https://jira.hl7.org/projects/FHIR/issues/FHIR-3750))
-   Restructure Profile - only one structure, and pull [ExtensionDefinition](structuredefinition.html) out of Profile (3647, 3498), and pull [SearchParameter](searchparameter.html) out ([3626](https://jira.hl7.org/projects/FHIR/issues/FHIR-3626))
-   Profile: allow 0..\* discriminator ([3131](https://jira.hl7.org/projects/FHIR/issues/FHIR-3131)), and change the way discriminators work across resource boundaries ([3124](https://jira.hl7.org/projects/FHIR/issues/FHIR-3124)) + generate multiple types properly ([2856](https://jira.hl7.org/projects/FHIR/issues/FHIR-2856))
-   remove \_validate interaction, and replace with $validate operation ([3686](https://jira.hl7.org/projects/FHIR/issues/FHIR-3686))
-   [Patient](patient.html): separate birth time from birthDate ([3731](https://jira.hl7.org/projects/FHIR/issues/FHIR-3731)), Change Administrative Gender from a CodableConcept to a Code. Also fixed the values as male|female|other|unknown with mappings to v2 and v3 ([3070](https://jira.hl7.org/projects/FHIR/issues/FHIR-3070))
-   [DocumentReference](documentreference.html): change encoding of Hash to Base64 ([3291](https://jira.hl7.org/projects/FHIR/issues/FHIR-3291))
-   [Group](group.html): rename header to title ([3126](https://jira.hl7.org/projects/FHIR/issues/FHIR-3126))
-   [Condition](condition.html): split relatedItem into two ([3111](https://jira.hl7.org/projects/FHIR/issues/FHIR-3111))
-   [Questionnaire](questionnaire.html): drop questionnaire.group.question.remarks ([3255](https://jira.hl7.org/projects/FHIR/issues/FHIR-3255)) and move omitReason from extension to base resource ([3260](https://jira.hl7.org/projects/FHIR/issues/FHIR-3260))
-   [QuestionnaireResponse](questionnaireresponse.html): allow multiple answers ([3146](https://jira.hl7.org/projects/FHIR/issues/FHIR-3146))
-   [ValueSet](valueset.html): replace ValueSet.compose.include.code with ValueSet.compose.include.concept ([3258](https://jira.hl7.org/projects/FHIR/issues/FHIR-3258)), added new rules about expansion content ([3138](https://jira.hl7.org/projects/FHIR/issues/FHIR-3138))
-   [Media](media.html): Rename element 'dateTime' to 'created' ([3174](https://jira.hl7.org/projects/FHIR/issues/FHIR-3174)) and length to duration ([2866](https://jira.hl7.org/projects/FHIR/issues/FHIR-2866))
-   Remove DeviceObservationReport and Query
-   Collapse AdverseReaction into [AllergyIntolerance](allergyintolerance.html)
-   [Appointment](appointment.html) changes - individual field renamed to actor, and added mappings to [HL7 v2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) and [HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186)
-   [FamilyMemberHistory](familymemberhistory.html) combined with [List](list.html) replaces FamilyHistory (with corresponding updates to related profiles)
-   [Flag](flag.html) replaces Alert including improved clarification of how it is used and replacement of "note" with "code"
-   [CarePlan](careplan.html) significantly refactored including splitting Goal out as a distinct resource, moving elements between activity and detail, introduction of several new elements and supported relationship types
-   

New Resources:

-   [Appointment](appointment.html)
-   [AppointmentResponse](appointmentresponse.html)
-   [Basic](basic.html)
-   [ClaimResponse](claimresponse.html)
-   [ClinicalImpression](clinicalimpression.html)
-   [Communication](communication.html)
-   [CommunicationRequest](communicationrequest.html)
-   [Contract](contract.html)
-   [Contraindication](detectedissue.html)
-   [Coverage](coverage.html)
-   [CoverageEligibilityRequest](coverageeligibilityrequest.html)
-   [CoverageEligibilityResponse](coverageeligibilityresponse.html)
-   DataElement (now [StructureDefinition](structuredefinition.html))
-   [DeviceMetric](devicemetric.html)
-   [DeviceRequest](devicerequest.html)
-   [DeviceUseStatement](deviceusestatement.html)
-   [EnrollmentRequest](enrollmentrequest.html)
-   [EnrollmentResponse](enrollmentresponse.html)
-   [EpisodeOfCare](episodeofcare.html)
-   [ExplanationOfBenefit](explanationofbenefit.html)
-   [StructureDefinition](structuredefinition.html)
-   [Goal](goal.html)
-   [HealthcareService](healthcareservice.html)
-   `ImagingObjectSelection`
-   [InstitutionalClaim](claim.html)
-   [NamingSystem](namingsystem.html)
-   [NutritionOrder](nutritionorder.html)
-   [OperationDefinition](operationdefinition.html)
-   [OralHealthClaim](claim.html)
-   [PaymentNotice](paymentnotice.html)
-   [PaymentReconciliation](paymentreconciliation.html)
-   [Person](person.html)
-   [PharmacyClaim](claim.html)
-   [ServiceRequest](servicerequest.html)
-   [ProfessionalClaim](claim.html)
-   [QuestionnaireResponse](questionnaireresponse.html)
-   ReferralRequest
-   [RiskAssessment](riskassessment.html)
-   [SearchParameter](searchparameter.html)
-   [Schedule](schedule.html)
-   [Slot](slot.html)
-   [Subscription](subscription.html)
-   SupportingDocumentation
-   [VisionClaim](claim.html)
-   [VisionPrescription](visionprescription.html)

New Implementation Guides (see `discussion of status`)

-   `Argonaut Project`
-   `Data Access Framework`
-   `Structured Data Capture` & `Structured Data Capture - Data Element Exchange`
-   US Laboratory `Order`, `Report` & `Report to Public Health`
-   [EHRS Functional model - Record Lifecycle Events](ehrsrle/ehrsrle.html)

0.3.0
-   Renamed Namespace to NamingSystem
-   Split [QuestionnaireResponse](questionnaireresponse.html) from [Questionnaire](questionnaire.html) and significantly revamped the [Questionnaire](questionnaire.html) in response to feedback from the Connectathon.
-   Added DataElement (now [StructureDefinition](structuredefinition.html)) resource (has been previously discussed as ObservationDefinition)
-   Defined [Subscription](subscription.html) resource for evaluation
-   Add [time](datatypes.html#time) data type
-   Define RPC-type [operations](operations.html) on the RESTful interface, and add [Operation Definition](operationdefinition.html)
-   Defined operations on several resources including [ConceptMap](conceptmap.html), [Questionnaire](questionnaire.html) and [ValueSet](valueset.html)
-   [Conformance](capabilitystatement.html) (now CapabilityStatement): Change Conformance.rest.operation to Conformance.rest.interaction and Conformance.rest.resource.operation to Conformance.rest.resource.interaction, and add Conformance.rest.operation to point to [Operation Definition](operationdefinition.html)
-   Profile: add Profile.url, Profile.structure.snapshot and Profile.structure.differential, and remove query definition (now in OperationDefinition)
-   Add pages for [LOINC](loinc.html), [RxNorm](rxnorm.html), and [SNOMED CT](snomedct.html)
-   Significant rework for [ConceptMap](conceptmap.html) so it can be used to map between structures as well as value sets
-   Add [Contraindication](detectedissue.html) and [Risk Assessment](riskassessment.html) and added examples to other resources in support of these
-   Add Referral Request
-   Add supportingInformation to DiagnosticRequest
-   Add fulfills to [Encounter](encounter.html)
-   Add date and age\[x\] to [FamilyHistory](familymemberhistory.html)
-   Change cardinality of [Location](location.html).identifier to 0..\*
-   Change cardinality of [Practitioner](practitioner.html).address to 0..\*
-   Add [Observation](observation.html).encounter to 0..\*
-   Temporarily added content for the [Structured Data Capture implementation guide](http://hl7.org/fhir/us/sdc/index.html), including profiles on several resources, conformance instances, etc. This content will be moved to an external specification once the necessary tooling is in place to support that form of publication.

0.2.1
-   Minor new optional elements on value set for metadata, new extensions for all the rest of the VSD project metadata, formal profile to express basic minimum metadata for value set

**0.2.0**
-   Namespace: adjustments based on Grahame's feedback

0.1.0
-   Add [Appointment](appointment.html), [Appointment Response](appointmentresponse.html), [Schedule](schedule.html) and [Slot](slot.html)
-   Add *Namespace*

Note: a useful tool for displaying the differences between pages is the [W3C HTML Diff engine](http://services.w3.org/htmldiff).

\[%file newfooter%\]
