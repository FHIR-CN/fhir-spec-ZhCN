\[%settitle Resource Life Cycle Page%\]
\[%file newnavbar%\]
FHIR Life Cycle Page
--------------------

|                                                |                                             |                                                                                      |
|------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 3 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

This page describes several issues around lifecycle management for the resources and the content they contain. Specifically, this page describes:

-   [Resource Status](#status): how resource status codes work
-   [Current List](#current): issues associated with retrieving "current X list" of resources
-   [Entered in Error](#error): information about how erroneous entry is handled for the resources

<span id="status"></span>
### Resource Status

Many FHIR resources have a status element that represents the lifecycle state of the resource or the clinical process represented by the resource. Work groups can specify status values appropriate to the individual resource. Although consistency between resources is not the primary objective, it is helpful to users and developers to have well-crafted value sets that cover all possible states (since the value sets are typically required and non-extensible).

To understand existing status elements, and to help create extensions and resources involving resource states, we note that status value sets follow one of the following life cycles:

-   Clinical workflow process life cycle
-   Request/Order life cycle
-   Entity status life cycle
-   Clinical status life cycle

For additional information about managing resource life cycles, see:

-   [Resource Identity](resource.html#id)
-   [Technical vs Business Versions](resource.html#versions)
-   [Managing Resource Identity](managing.html) (including "Consistent Resource Identification")

<span id="clinical"></span>
### Clinical Workflow Process Life Cycle

Describes the lifecycle states of complex activities common in healthcare. Typically, these states follow a chronological life cycle that leads from initiation to the conclusion of the action. A characteristic (but non-exhaustive) set of states for the clinical workflow process life cycle include:

-   planned - resources for the activity are being allocated but the activity has not begun
-   cancelled - the planned activity did not start and will not take place
-   in-progress - the activity has begun
-   on-hold (suspended) - the activity has been temporarily interrupted
-   stopped (aborted, failed) - the activity has not been completed but no future action is planned
-   completed (finished) - the activity has been completed

Examples of the clinical workflow life cycle:

-   Communication.status: &lt;%sclist Communication.status%&gt;
-   Encounter.status: &lt;%sclist Encounter.status%&gt;
-   Goal.lifecycleStatus: &lt;%sclist Goal.lifecycleStatus%&gt;
-   MedicationAdministration.status: &lt;%sclist MedicationAdministration.status%&gt;
-   MedicationDispense.status: &lt;%sclist MedicationDispense.status%&gt;
-   Procedure.status: &lt;%sclist Procedure.status%&gt;

<span id="order"></span>
### Request/Order Life Cycle

Some resources in FHIR represent orders or requests. The request lifecycle can be generalized in terms of four stages: creating the request, sending the request, receiving acceptance or refusal of the request, and fulfillment of the request. A characteristic (but non-exhaustive) set of states for the request/order pattern include:

-   proposed: An actor (e.g. a clinical decision support system) has proposed an action to be requested
-   draft: The request is in preliminary form, prior to being requested
-   requested: The request has been made
-   rejected: The request receiver has declined the request
-   accepted: The request receiver has accepted the request
-   in-progress: Work to fulfill the request has begun
-   on-hold (suspended): Work on the request has been interrupted
-   stopped (aborted): The activity has not been completed but no future action is planned
-   completed: Work on the requested task has been completed, and no further action is required
-   cancelled: The request has been withdrawn

Examples of the request/order life cycle:

-   CommunicationRequest.status: &lt;%sclist CommunicationRequest.status%&gt;
-   DeviceRequest.status: &lt;%sclist DeviceRequest.status%&gt;
-   MedicationRequest.status: &lt;%sclist MedicationRequest.status%&gt;
-   ServiceRequest.status: &lt;%sclist ServiceRequest.status%&gt;

<span id="entity"></span>
### Entity Availability Life Cycle

The entity availability life cycle indicates if the resource, or the entity described by the resource, is ready for use, not yet ready for use, or has been retired from use. A characteristic (but non-exhaustive) set of states for the entity availability life cycle include:

-   draft: The entity is being prepared but is not yet in use
-   active: The entity is in use
-   suspended: The entity is not in use at the moment, but may return to active status
-   amended: The entity has undergone a revision but is still active
-   retired (superseded): The entity is no longer in use.

Examples of the entity availability life cycle:

-   DiagnosticReport.status: &lt;%sclist DiagnosticReport.status%&gt;
-   MedicationStatement.status: &lt;%sclist MedicationStatement.status%&gt;. (note: in-progress and completed are states reflecting the administration of the medication)
-   DocumentManifest.status: &lt;%sclist DocumentManifest.status%&gt;
-   CapabilityStatement.status: &lt;%sclist CapabilityStatement.status%&gt;
-   StructureDefinition.status: &lt;%sclist StructureDefinition.status%&gt;
-   Questionnaire.status: &lt;%sclist Questionnaire.status%&gt;
-   DocumentReference.status: &lt;%sclist DocumentReference.status%&gt;
-   QuestionnaireResponse.status: &lt;%sclist QuestionnaireResponse.status%&gt;
-   Flag.status: &lt;%sclist Flag.status%&gt;
-   Location.status: &lt;%sclist Location.status%&gt;
-   Organization.active: &lt;%sclist Organization.active%&gt;
-   Patient.active: &lt;%sclist Patient.active%&gt;

<span id="cstatus"></span>
### Clinical Status Life Cycle

Clinical status is somewhat different than the previous status values, since it does not deal with workflow or lifecycle. Instead, it indicates how evidence is affecting a clinical interpretation. Here are two examples:

-   AllergyIntolerance.clinicalStatus: &lt;%sclist AllergyIntolerance.clinicalStatus%&gt;
-   Condition.clinicalStatus: &lt;%sclist Condition.clinicalStatus%&gt;

------------------------------------------------------------------------

<span id="current"></span>
### Current Resource Lists

Many clinical systems maintain current lists of some kind of resources for a patient. Some of the commonly maintained lists include:

-   Current Problem List: a list of the problems that are of concern for care of the patient
-   Current Medication List: a list of the medications that a patient is known to be on at the current time

Because of the way that resources are used, there is no simple way to determine, from examination of a resource, whether it is 'current' or not. Take, as an example, the [Condition](condition.html) resource. In a typical EHR, condition resources might be published on the RESTful interface for the following reasons:

-   to represent an item in a patient's curated problem list
-   to represent a complaint or a diagnosis from an encounter record
-   to represent a problem for investigation provided by a diagnostic system as part of a [ServiceRequest](servicerequest.html)/[DiagnosticReport](diagnosticreport.html) pair
-   the resources were received from another system as part of a referral package, and were current for that system when they were received

There is no element on the Condition resource that can convey the difference between these usages. In particular, there can be no way to differentiate between current and past resources without having to retrospectively alter resources, which is problematic with regard to integrity and digital signatures.

One consequence of this is that searching the condition resource for a given patient will return more than just the patient's current problems. Though this is somewhat counter-intuitive to some implementers, restricting searches on Condition to only include the patient's current curated problem list excludes all the other - important - uses of the Condition resource.

Determining whether a Condition is an entry on a patient's current problem list is done by checking with the Condition resource is referenced from the correct list.

On the RESTful API, this is done using the [list search mechanism](search.html#current):

     GET [base]/AllergyIntolerance?patient=42&_list=$current-allergies

This is a request to fetch all the allergies in the patient 42's "Current Problem List". Note that the server is not required to actually make a resource representation of the current allergy list available, though doing so assists clients in their audit/integrity tasks. See [List Operation "Find"](list-operation-find.html) for further information.

In a document, current lists are determined by the code on a Composition section.

<span id="lists"></span>
FHIR defines the following names for functional lists:

|                         |                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                         |
|-------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **List**                | **ResourceType**                                                                             | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                | **Possible LOINC codes in documents / sections**                                                                                        |
| $current-problems       | [Condition](condition.html)                                                                  | The "Current Problem List" - A list of current and active diagnoses as well as past diagnoses relevant to the current care of the patient                                                                                                                                                                                                                                                                                                                      | 46105-3 (Problem conditions Set)                                                                                                        |
| $current-medications    | [MedicationStatement](medicationstatement.html)/ [MedicationRequest](medicationrequest.html) | A list of all medications that the patient is taking. The 'current medications list' sometimes may include a mix of prescribed and over-the-counter medications - or only some of them. The list may contain a mix of [prescriptions](medicationrequest.html) and more general [statements](medicationstatement.html), or only one of the two. The list may also correspond to a formal reconciled medication administration schedule, but more often does not | 57828-6 (Prescription list), 10160-0 (History of medication)                                                                            |
| $current-allergies      | [AllergyIntolerance](allergyintolerance.html)                                                | A list of known or suspected propensities to medications, foods, or environmental agents that is provided to help prevent reactions while care is occurring                                                                                                                                                                                                                                                                                                    | 18716-1 (Allergy studies (set)), 52472-8 (Allergies and Adverse Drug Reactions), and 48765-2 (Allergies and adverse reactions Document) |
| $current-drug-allergies | [AllergyIntolerance](allergyintolerance.html)                                                | A list of known or suspected propensities to medications that is provided to help prevent reactions while care is occurring. This list is a subset of the full allergies list                                                                                                                                                                                                                                                                                  | (same as above?)                                                                                                                        |

------------------------------------------------------------------------

<span id="error"></span>
### Entered in Error Summary

The entered-in-error state indicates the resource was created accidentally and should be ignored. This state can apply to resources created by manual entry. It is usually not associated with the Clinical Workflow Process life cycle, but can be associated with the Request/Order and the Entity Availability life cycles.

This table summarizes what is expected to happen for each resource in the case that the data it contains is subsequently found to be an erroneous entry.

\[%enteredInErrorTable%\]
Note: Resources that are not listed in this table do not have any explicit documentation with regard to being entered in error.

\[%file newfooter%\]
