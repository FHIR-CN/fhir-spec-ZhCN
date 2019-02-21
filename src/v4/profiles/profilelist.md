---
title: profile 目录
type: profiles
order: 100
FHIR_version: r4

---

## profile 目录

1.3 Profiles defined as part of FHIR[](profilelist.html#1.3 "link to here")
---------------------------------------------------------------------------

[FHIR Infrastructure ![](external.png)](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group

[Maturity Level](versions.html#maturity): N/A

[Standards Status](versions.html#std-process): [Informative](versions.html#std-process)

This specification is a common platform standard that must be [adapted to particular use cases](profiling.html). Some particular use cases are common or important enough to be described as a part of the specification itself. These are published as groups of [Structure Definitions](structuredefinition.html) (profiles or extensions), which are often found in implementation guides, along with [Value Sets](valueset.html), newly defined [search parameters](searchparameter.html) and examples that are all defined with a common purpose. Additional profiles and extensions may be registered on the HL7 FHIR registry at [http://registry.fhir.org ![](external.png)](http://registry.fhir.org) 

**Name**

**Description**

**Kind**

**[FMM](versions.html#Maturity)**

**General**

[EHRS FM Record Lifecycle Event - Audit Event](ehrsrle/auditevent-ehrsrle.html)

Defines the elements to be supported within the AuditEvent resource in order to conform with the Electronic Health Record System Functional Model Record Lifecycle Event standard

profiles

[Clinical Reasoning Extensions](clinicalreasoning-extensions.html)

Defines common extensions used by the Clinical Reasoning Module.

extensions

[Common extensions for Coding data type](coding-extensions.html)

Defines "common" extensions for use with the DataElement data type

extensions

[Common extensions for ContactPoint data type](contactpoint-extensions.html)

Defines "common" extensions for use with the ContactPoint data type

extensions

[Element-definition Extensions for use by FHIR Implementers](element-extensions.html)

A set of extensions that constrain data elements, whether used in DataElements, StructureDefinitions or Questionnaires

extensions

[ISO 11179 Element Definition Profile](elementdefinition-11179.html)

A profile showing how to use ElementDefinition to express 11179 Data\_Element and Concept\_Elements. At present, the profile is a partially-complete place-holder

extensions

[DataElement constraint on ElementDefinition data type](elementdefinition-dataelement.html)

Identifies how the ElementDefinition data type is used when it appears within a data element

profiles

[Common extensions for ElementDefinition data type](elementdefinition-extensions.html)

Defines "common" extensions for use with the DataElement data type

extensions

[Event Pattern HL7 Extensions](event-extensions.html)

This profile defines extensions that can be used to provide alignment with the Event workflow pattern data elements for concepts that may be generally applicable but may be sufficiently uncommon that they are more appropriate to include as extensions than as core properties of the resource. See the workflow module for more discussion about this specification that are typically involved in workflow.

extensions

[General Extensions for use by FHIR Implementers](general-extensions.html)

A set of general extensions defined for the convenience of implementers that use FHIR resources

extensions

[Common extensions for HumanName data type](humanname-extensions.html)

Defines "common" extensions for use with the HumanName data type

extensions

[Common extensions for Identifier data type](identifier-extensions.html)

Defines "common" extensions for use with the Identifier data type

extensions

[ISO 21090 Data Type Extensions](iso-21090.html)

Extra ISO 21090 features not included in data types because of core design policy

extensions

[International Realm Pharmacy Extensions Profile](pharmacy-core.html)

Contains a number of pharmacy domain extensions relevant to a number of medication-related resources.

[EHRS FM Record Lifecycle Event - Provenance](ehrsrle/provenance-ehrsrle.html)

Defines the elements to be supported within the Provenance resource in order to conform with the Electronic Health Record System Functional Model Record Lifecycle Event standard

profiles

[Common extensions for Quantity data type](quantity-extensions.html)

Defines "common" extensions for use with the DataElement data type

extensions

[Extensions for rendering data elements](rendering-extensions.html)

A set of extensions dealing with controlling how particular data elements are rendered when displayed. Initially created for questionnaires, but potentially useable elsewhere.

extensions

[Request Pattern HL7 Extensions](request-extensions.html)

This profile defines extensions that can be used to provide alignment with the Event workflow pattern data elements for concepts that may be generally applicable but may be sufficiently uncommon that they are more appropriate to include as extensions than as core properties of the resource. See the workflow module for more discussion about this specification that are typically involved in workflow.

extensions

[Smart App Launch Capability Statements](smart-app-launch.html)

Formal definitions of Smart App Launch extensions in the CapabilityStatement

extensions

[Common extensions for Timing data type](timing-extensions.html)

Defines "common" extensions for use with the Timing data type

extensions

[Metadata HL7 Extensions](metadata-extensions.html)

Defines common extensions used with or related to conformance and knowledge resources

extensions

[Workflow Pattern HL7 Extensions](workflow-extensions.html)

This profile defines extensions that can be used to provide alignment with the Event and Request workflow pattern data elements for concepts that may be generally applicable but may be sufficiently uncommon that they are more appropriate to include as extensions than as core properties of the resource. See the workflow module for more discussion about this specification that are typically involved in workflow.

extensions

**ActivityDefinition**

[Shareable ActivityDefinition](activitydefinition-shareable.html)

Enforces the minimum information set for the activity definition metadata required by HL7 and other organizations that share and publish activity definitions

profiles

**AllergyIntolerance**

[openEHR Archetype Profile](allergyintolerance-openehr.html)

A set of extensions that define how the parts of the openEHR RiskOfAdverseReaction archetype that are not generaly encountered by implementers are represented

extensions

[AllergyIntolerance HL7 Extensions](allergyintolerance-extensions.html)

Defines common extensions used with or related to the AllergyIntolerance resource

extensions

**AuditEvent**

[AuditEvent HL7 Extensions](auditevent-extensions.html)

Defines common extensions used with or related to the AuditEvent resource

extensions

**Bundle**

[Common extensions for bundle-related types](bundle-extensions.html)

Defines "common" extensions for use with the Bundle resource and contained elements

extensions

**CapabilityStatement**

[Common CapabilityStatement extensions](capabilitystatement-common.html)

Common extensions for use with the CapabilityStatement resource

extensions

**CarePlan**

[Common Care Plan Extensions](careplan-extensions.html)

A set of commonly used extensions that don't make the usage requirements for inclusion in the resource itself

extensions

**CodeSystem**

[CodeSystem HL7 Extensions](codesystem-extensions.html)

Defines common extensions used with or related to the CodeSystem resource

extensions, search parameters

[Shareable CodeSystem](codesystem-shareable.html)

Enforces the minimum information set for the value set metadata required by HL7 and other organizations that share and publish value sets

profiles

**Communication**

[Communication HL7 Extensions](communication-extensions.html)

Defines common extensions used with or related to the Communication resource

extensions

**CommunicationRequest**

[CommunicationRequest HL7 Extensions](communicationrequest-extensions.html)

Defines common extensions used with or related to the CommunicationRequest resource

extensions

**Composition**

[Clinical Document](composition-clinicaldocument.html)

The Clinical Document profile constrains Composition to specify a clinical document (matching CDA). The base Composition is a general resource for compositions or documents about any kind of subject that might be encountered in healthcare including such things as guidelines, medicines, etc. A clinical document is focused on documents related to the provision of care process, where the subject is a patient, a group of patients, or a closely related concept. A clinical document has additional requirements around confidentiality that do not apply in the same way to other kinds of documents.

profiles, extensions

[Profile for Catalog](composition-catalog.html)

describes how the Composition resource is used to represent a Catalog

profiles, extensions

[Composition HL7 Extensions](composition-extensions.html)

Defines common extensions used with or related to the Composition resource

extensions

**ConceptMap**

[ConceptMap HL7 Extensions](conceptmap-extensions.html)

Defines common extensions used with or related to the ConceptMap resource

extensions

**Condition**

[Condition HL7 Extensions](condition-extensions.html)

Defines common extensions used with or related to the Condition resource

extensions

**Consent**

[Consent HL7 Extensions](consent-extensions.html)

Defines common extensions used with or related to the Consent resource

extensions

**Device**

[Device HL7 Extensions](device-extensions.html)

Defines common extensions used with or related to the Device resource

extensions, search parameters

**DeviceRequest**

[DeviceRequest HL7 Extensions](devicerequest-extensions.html)

Defines common extensions used with or related to the DeviceRequest resource

extensions

**DeviceUseStatement**

[DeviceUseStatement HL7 Extensions](deviceusestatement-extensions.html)

Defines common extensions used with or related to the DeviceUseStatement resource

**DiagnosticReport**

[Example Lipid Profile](lipid-report.html)

Describes how the lab report is used for a standard Lipid Profile - Cholesterol, Triglyceride and Cholesterol fractions. Uses LOINC codes

profiles

1

[DiagnosticReport HL7 Extensions](diagnosticreport-extensions.html)

Defines common extensions used with or related to the DiagnosticReport resource

extensions

[DiagnosticReport-Genetics](diagnosticreport-genetic.html)

Describes how the DiagnosticReport resource is used to report structured genetic test results

profiles, extensions, search parameters

[Profile for HLA Genotyping Results](diagnosticreport-hla-results.html)

Describes how the HLA genotyping results

profiles, extensions

**Encounter**

[Encounter HL7 Extensions](encounter-extensions.html)

Defines common extensions used with or related to the Encounter resource

extensions

**Evidence**

[Evidence Synthesis Profile](evidence-synthesis.html)

Explanation of what this profile contains/is for.

profiles

**EvidenceVariable**

[PICO Element Profile](evidencevaraible-picoelement.html)

Explanation of what this profile contains/is for.

profiles

**FamilyMemberHistory**

[Family member history for genetics analysis](family-member-history-genetics.html)

Adds additional information to a family member history supporting both the capture of mother/father relationships as well as additional observations necessary to enable genetics-based risk analysis for patients

profiles, extensions

[Family Member History HL7 Extensions](familymemberhistory-extensions.html)

Defines common extensions used with or related to the FamilyMemberHistory resource

extensions

**Flag**

[Flag HL7 Extensions](flag-extensions.html)

Defines common extensions used with or related to the Flag resource

extensions

**Goal**

[FHIR Core Goal Profile](goal-extensions.html)

This profile holds core Goal extensions

extensions

**Group**

[Group Definition](group-definition.html)

Enforces a descriptive group that can be used in definitional resources

profiles

[Actual Group](group-actual.html)

Enforces an actual group, rather than a definitional group

profiles

**GuidanceResponse**

[CDS Hooks GuidanceResponse](guidanceresponse-cdshooks.html)

Defines a GuidanceResponse that represents the response container for a CDS Hooks response

profiles

**Immunization**

[Immunization HL7 Extensions](immunization-extensions.html)

Defines common extensions used with or related to the Immunization resource

**ImmunizationRecommendation**

[ImmunizationRecommendation HL7 Extensions](immunizationrecommendation-extensions.html)

Defines common extensions used with or related to the ImmunizationRecommendation resource

**ImplementationGuide**

[FHIR Core ImplementationGuide Profile](implementationguide-extensions.html)

This profile holds core ImplementationGuide extensions

**Library**

[Shareable Library](library-shareable.html)

Enforces the minimum information set for the library metadata required by HL7 and other organizations that share and publish libraries

profiles

[CQL Library](library-cql.html)

Represents a CQL logic library

profiles

**List**

[List HL7 Extensions](list-extensions.html)

Defines common extensions used with or related to the List resource

extensions

**Location**

[Location HL7 Extensions](location-extensions.html)

Defines common extensions used with or related to the Location resource

extensions

**Measure**

[Shareable Measure](measure-shareable.html)

Enforces the minimum information set for the measure metadata required by HL7 and other organizations that share and publish measures

profiles

**Medication**

[Medication HL7 Extensions](medication-extensions.html)

Defines common extensions used with or related to the Medication resource

**MedicationAdministration**

[MedicationAdministration HL7 Extensions](medicationadministration-extensions.html)

Defines common extensions used with or related to the MedicationAdministration resource

**MedicationDispense**

[MedicationDispense HL7 Extensions](medicationdispense-extensions.html)

Defines common extensions used with or related to the MedicationDispense resource

**MedicationRequest**

[MedicationRequest HL7 Extensions](medicationrequest-extensions.html)

Defines common extensions used with or related to the MedicationRequest resource

**MedicationStatement**

[MedicationStatement HL7 Extensions](medicationstatement-extensions.html)

Defines common extensions used with or related to the MedicationStatement resource

**MessageHeader**

[Common extensions for message header](messageheader-extensions.html)

Defines "common" extensions for use with the messageheader resource and contained elements

extensions

**NutritionOrder**

[NutritionOrder HL7 Extensions](nutritionorder-extensions.html)

Defines common extensions used with or related to the NutritionOrder resource

extensions

**Observation**

[Device Metric Observation Profile](observation-devicemetricobservation.html)

This profile describes the direct or derived, qualitative or quantitative physiological measurement, setting, or calculation data produced by a medical device or a device component.

profiles

[Observation HL7 Extensions](observation-extensions.html)

Defines common extensions used with or related to the Observation resource

extensions

[Observation-genetics](observation-genetic.html)

Describes how the observation resource is used to report structured genetic test results

profiles, extensions, search parameters

[observation-vitalsigns](observation-vitalsigns.html)

Defines constraints and extensions on the Observation resource for use in querying and retrieving Vital Signs information.

profiles

[observation-bodyweight](observation-bodyweight.html)

Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign body weight.

profiles

[observation-vitalspanel](observation-vitalspanel.html)

Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital signs panel.

profiles

[observation-bodyheight](observation-bodyheight.html)

Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign body height.

profiles

[observation-resprate](observation-resprate.html)

Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign respiratory rate.

profiles

[observation-heartrate](observation-heartrate.html)

Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign heart rate.

profiles

[observation-bodytemp](observation-bodytemp.html)

Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign body temperature.

profiles

[observation-headcircum](observation-headcircum.html)

Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign head circumference.

profiles

[observation-oxygensat](observation-oxygensat.html)

Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign oxygen saturation.

profiles

[observation-bmi](observation-bmi.html)

Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign body mass index.

profiles

[observation-bp](observation-bp.html)

Defines constraints and extensions on the Observation resource for use in querying and retrieving the vital sign blood pressure.

profiles

**OperationDefinition**

[Standard Operation Definition Extensions](operationdefinition-extensions.html)

This profile describes common extensions that are used with Operation Definitions

extensions

**OperationOutcome**

[Standard OperationOutcome Extensions](operationoutcome-extensions.html)

This profile describes common extensions that are used with OperationOutcomes

extensions

**Organization**

[Organization HL7 Extensions](organization-extensions.html)

Defines common extensions used with or related to the Organization resource

extensions

**OrganizationAffiliation**

[OrganizationAffiliation HL7 Extensions](organizationaffiliation-extensions.html)

Defines common extensions used with or related to the OrganizationAffiliation resource

extensions

**Patient**

[Patient HL7 Extensions](patient-extensions.html)

Defines common extensions used with or related to the Patient resource

extensions, search parameters

**PlanDefinition**

[Shareable PlanDefinition](plandefinition-shareable.html)

Enforces the minimum information set for the plan definition metadata required by HL7 and other organizations that share and publish plan definitions

profiles

[Computable PlanDefinition](plandefinition-computable.html)

Defines a computable PlanDefinition that specifies a single library and requires all expressions referenced from the PlanDefinition to be definitions in that single library

profiles

[CDS Hooks Service PlanDefinition](plandefinition-cdshooks-service.html)

Defines a PlanDefinition that implements the behavior for a CDS Hooks service

profiles

**Practitioner**

[Practitioner HL7 Extensions](practitioner-extensions.html)

Defines common extensions used with or related to the Practitioner resource

extensions

**PractitionerRole**

[PractitionerRole HL7 Extensions](practitionerrole-extensions.html)

Defines common extensions used with or related to the PractitionerRole resource

extensions

**Procedure**

[Procedure HL7 Extensions](procedure-extensions.html)

Defines common extensions used with or related to the Procedure resource

extensions

**Provenance**

[Provenance Relevant History](relevant-history.html)

Guidance on using Provenance for related history elements

profiles

**Questionnaire**

[Core extensions for Questionnaire](questionnaire-extensions.html)

Contains standard extensions for Questionnaire, amongst others for validation

extensions

[CQF-Questionnaire](cqf.html)

Adds the ability to define behavior as part of a questionnaire.

profiles

**QuestionnaireResponse**

[Core extensions for QuestionnaireResponse](questionnaireresponse-extensions.html)

Contains standard extensions for QuestionnaireResponse, amongst others for validation

extensions, search parameters

**RequestGroup**

[CDS Hooks RequestGroup](requestgroup-cdshooks.html)

Defines a RequestGroup that can represent a CDS Hooks response

profiles

**SearchParameter**

[Standard Search Parameter Extensions](searchparameter-extensions.html)

This profile describes common extensions that are used with Search Parameters

**ServiceRequest**

[ServiceRequest-Genetics](servicerequest-genetic.html)

Describes how the ServiceRequest resource is used to for genetics

profiles, extensions

[Service Request HL7 Extensions](servicerequest-extensions.html)

Defines common extensions used with or related to the Service Request resource

extensions

**Specimen**

[Specimen HL7 Extensions](specimen-extensions.html)

Defines common extensions used with or related to the Specimen resource

extensions

**StructureDefinition**

[Standard Structure Definition Extensions](structuredefinition-extensions.html)

This profile describes common extensions that are used with Structure Definitions

extensions

**Task**

[Task HL7 Extensions](task-extensions.html)

Defines common extensions used with or related to the Task resource

extensions

**ValueSet**

[ValueSet HL7 Extensions](valueset-extensions.html)

Defines common extensions used with or related to the ValueSet resource

extensions, search parameters

[Shareable ValueSet](valueset-shareable.html)

Enforces the minimum information set for the value set metadata required by HL7 and other organizations that share and publish value sets

profiles

®© HL7.org 2011+. FHIR Release 4 (v4.0.0) generated on Thu, Dec 27, 2018. [QA Page](qa.html)  
Links: [Search ![](external.png)](http://hl7.org/fhir/search.cfm) | [Version History](history.html) | [Table of Contents](toc.html) | [Credits](credits.html) | [Compare to R3 ![](external.png)](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhir%2FSTU3%2Fprofilelist.html&doc2=http%3A%2F%2Fhl7.org%2Ffhir%2Fprofilelist.html) | [![CC0](cc0.png)](license.html) | [Propose a change ![](external.png)](http://hl7.org/fhir-issues)