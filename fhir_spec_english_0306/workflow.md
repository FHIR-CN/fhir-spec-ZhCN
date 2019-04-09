\[%settitle Workflow Description%\]
\[%file newnavbar%\]
|                                                |                                             |                                                                                       |
|------------------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process): [Trial Use](versions.html#std-process) |

-   [Overview](#)
-   [Communication Patterns](workflow-communications.html)
-   [Ad-hoc Workflow Patterns](workflow-ad-hoc.html)
-   [Workflow Management Patterns](workflow-management.html)
-   [Examples](workflow-examples.html)

<span id="root"></span>
Workflow Description
--------------------

Workflow is an essential part of healthcare - orders, care protocols, referrals are the drivers of most activity within in-patient settings and a great deal of activity in community care as well. FHIR is concerned with workflow when there's a need to share information about workflow state or relationships, when there's a need to coordinate or drive the execution of workflow across systems and when there's a need to define allowed actions, dependencies and conditions on behavior.

**Workflow state & relationships**

FHIR does not need to be used for the execution of workflow. Orders, care plans, lab results, hospital admissions, claim payments and other records can all be shared using FHIR resources without the process to solicit fulfillment of those orders or requesting payment of those claims being driven by a FHIR transaction. Interoperable support for workflow execution is a more advanced FHIR activity because it requires a higher degree of standardization. Rather than merely standardizing the data to exchange, interoperable workflow execution requires standardization of the processes, roles and activities across the different systems. However, even without using FHIR for workflow execution, there's still a need to standardize the data elements related to workflow: how does an event or a result point to the order that authorized it? How do parent steps and child steps get linked together? How does a care plan identify what protocol it's adhering to?

FHIR defines three categories of resources that are involved in activities - [requests](#request), [events](#event) and [definitions](#definition). Each of these categories has a "pattern" associated with it. Resources that fall into that category are encouraged to adhere to their respective pattern. These patterns provide standard elements that are typical for most resources of each category. Strict adherence is not required as work groups are expected to align with typical domain behavior and requirements as more authoritative than "desired" architectural patterns. In some cases, capabilities might be supported with extensions rather than core elements where a pattern capability is deemed to be "not common, but still relevant" for a given resource.

A full description of the patterns and their interrelationships can be found in the [Workflow Resource Patterns](#respatterns) section of this page.

**Workflow execution**

In addition to defining patterns for resources used in workflow processes, FHIR supports the execution of those processes as well. However, FHIR does not define a "one size fits all" solution for workflow architecture. FHIR supports a variety of interoperability paradigms and most of them ([REST](http.html), [Messaging](messaging.html) and [Services](services.html)) provide support for driving workflow execution. (The [Document](documents.html) paradigm does not directly support driving behavior, though it can be combined with one of the other patterns to do so.) In addition, several of these paradigms allow multiple approaches to supporting workflow, depending on the context and needs of the workflow process.

The [Workflow Execution and Communication Patterns](workflow-communications.html) section describes many options for workflow execution, summarizes their respective pros and cons and makes recommendations for the circumstances in which they might best be used.

**Workflow definition**

The definition of protocols, order sets, guidelines and other structures that define what sorts of activities should occur, what order they should occur on, what dependencies they have, in what circumstances they should start or end, etc. is handled by a pair of resources:

-   [PlanDefinition](plandefinition.html) defines the interrelationships of steps and the rules around their execution
-   [ActivityDefinition](activitydefinition.html) defines an activity to be performed as a single step

The use of these two artifacts is discussed [here](clinicalreasoning-topics-definitional-resources.html).

<span id="respatterns"></span>
### Workflow Resource Patterns

Not all resources in FHIR are related to workflow - many are used to describe entities and roles (patients, medications, etc.) or infrastructure (structure definitions, value sets, etc.). However, a large proportion of the FHIR resources are devoted to the description of activities in one fashion or another and almost all of these fall into the realm of workflow - they describe things that can be done (definitions), are desired to be done (requests) or that have been done (events). The table below summarizes the list of workflow-relevant resources:

<span id="list"></span>
#### Workflow resources

[Definitions](definition.html)
Resources that define something that can potentially happen in a patient and time-independent manner
-   [ActivityDefinition](activitydefinition.html)
-   [Measure](measure.html)

<!-- -->

-   [OperationDefinition](operationdefinition.html)

<!-- -->

-   [PlanDefinition](plandefinition.html)

<!-- -->

-   [Questionnaire](questionnaire.html)

[Requests](request.html)
Resources that ask for or express a desire/intention for something to be done
-   [Appointment](appointment.html)<sup>[\*](#listnotes)</sup>
-   [AppointmentResponse](appointmentresponse.html)<sup>[\*](#listnotes)</sup>
-   [CarePlan](careplan.html)
-   [Claim](claim.html)
-   [CommunicationRequest](communicationrequest.html)

<!-- -->

-   [Contract](contract.html)
-   [CoverageEligibilityRequest](coverageeligibilityrequest.html)
-   [DeviceRequest](devicerequest.html)
-   [EnrollmentRequest](enrollmentrequest.html)

<!-- -->

-   [ImmunizationRecommendation](immunizationrecommendation.html)
-   [MedicationRequest](medicationrequest.html)
-   [NutritionOrder](nutritionorder.html)
-   [ServiceRequest](servicerequest.html)

<!-- -->

-   [Task](task.html)<sup>[‡](#listnotes)</sup>
-   [SupplyRequest](supplyrequest.html)
-   [VisionPrescription](visionprescription.html)

[Events](event.html)
Resources that express that something has been done and which can potentially be done because of a request
-   [ChargeItem](chargeitem.html)
-   [ClaimResponse](claimresponse.html)
-   [ClinicalImpression](clinicalimpression.html)
-   [Communication](communication.html)
-   [Composition](composition.html)
-   [Condition (aka Problem)](condition.html)
-   [Consent](consent.html)
-   [Coverage](coverage.html)
-   [CoverageEligibilityResponse](coverageeligibilityresponse.html)
-   [DeviceUseStatement](deviceusestatement.html)

<!-- -->

-   [DiagnosticReport](diagnosticreport.html)
-   [DocumentManifest](documentmanifest.html)
-   [DocumentReference](documentreference.html)
-   [Encounter](encounter.html)
-   [EnrollmentResponse](enrollmentresponse.html)
-   [EpisodeOfCare](episodeofcare.html)
-   [ExplanationOfBenefit](explanationofbenefit.html)
-   [FamilyMemberHistory](familymemberhistory.html)

<!-- -->

-   [GuidanceResponse](guidanceresponse.html)
-   [ImagingStudy](imagingstudy.html)
-   [Immunization](immunization.html)
-   [MeasureReport](measurereport.html)
-   [Media](media.html)
-   [MedicationAdministration](medicationadministration.html)
-   [MedicationDispense](medicationdispense.html)
-   [MedicationStatement](medicationstatement.html)

<!-- -->

-   [Observation](observation.html)
-   [PaymentNotice](paymentnotice.html)
-   [PaymentReconciliation](paymentreconciliation.html)
-   [Procedure](procedure.html)
-   [QuestionnaireResponse](questionnaireresponse.html)
-   [RiskAssessment](riskassessment.html)
-   [SupplyDelivery](supplydelivery.html)
-   [Task](task.html)<sup>[‡](#listnotes)</sup>

<span id="listnotes"></span>
|               |                                                                                                                                                                                                                                                                                                                                                        |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <sup>\*</sup> | The [Appointment](appointment.html) and [AppointmentResponse](appointmentresponse.html) resources do not follow the same sort of request/response pattern as the other resources. Their design is based on iCal conventions, so their model won't align with the pattern as strictly as most other resources. They are included here for completeness. |
| <sup>‡</sup>  | The [Task](task.html) resource takes on characteristics of both "requests" and "events" and thus shares characteristics from both patterns                                                                                                                                                                                                             |

Note that requests, events and definitions don't exist in a 1:1:1 relationship. Some requests and events have obvious pairings. For example, a [SupplyRequest](supplyrequest.html) will generally always pair with a [SupplyDelivery](supplydelivery.html). The same goes for [EnrollmentRequest](enrollmentrequest.html)/[EnrollmentResponse](enrollmentresponse.html), etc. On the other hand, for other resources there isn't a strict pairing. A [ServiceRequest](servicerequest.html) might be responded to by an [Encounter](encounter.html), [DiagnosticReport](diagnosticreport.html), [Procedure](procedure.html), [RiskAssessment](riskassessment.html), etc. Similarly, a [Procedure](procedure.html) might be triggered by a [ServiceRequest](servicerequest.html). The set of common linkages should be asserted in their respective resources. The specific types of responses for a given request will be governed by the Request.code, any workflow definitions/protocols referenced and local convention.

<span id="relationships"></span>
#### Workflow Resource Relationships

These three patterns of resources have a standard set of relationships, both with themselves, as well as with each other.

<img src="workflow-relations.png" alt="Workflow relationships diagram showing Request, Event and Definition and their relationships to themselves and each other" width="624" height="421" />
Specifically:

-   requests, events and definitions can point to their respective definitions
-   events and requests can point to the proposals, plans or orders they are based on
-   events and definitions can be organized into parent-child relationships of parents and components
-   definitions and requests can both replace prior versions of the same type of artifact

This list of relationships is not exhaustive, but covers those that are "standardized" as part of the patterns. Further description and guidance on these relationships can be found in the [Request](request.html), [Event](event.html) and [Definition](definition.html) logical patterns.

<span id="request"></span>
#### Request Resource Pattern

Requests are resources that represent the proposal, plan or order for an activity to occur. A [Request pattern](request.html) defines the common elements typically present on all request resources.

The amount of information needed for a Request to be actionable can vary by circumstance. Some request instances might not be "fully specified" - additional information from protocol, patient preference and/or professional decision-making may be necessary before the authorized action can occur. For example, a [MedicationRequest](medicationrequest.html) might be specified without indicating a strength or route in situations where the pharmacy (or even nursing station) has the authority to determine those parameters. A [VisionPrescription](visionprescription.html) might not be actionable until frames have been chosen and the necessary measurements of the patient's face have been taken to allow the lenses to be positioned appropriately within the frames.

All requests with an intent of "order" authorize something. Whether what is authorized is sufficient to be immediately actionable depends on who is fulfilling the order and the context in which the fulfillment request is made. The determination of whether a given "request" is actionable may be made by the systems involved or the humans being asked to act.

As well, the existence of a "Request" instance doesn't necessarily imply that fulfillment will be requested immediately - or even ever. The decision to request fulfillment may be delegated to the patient or to down-stream practitioners. Such fulfilling practitioners may need to capture additional information prior to executing the fulfillment.

<span id="event"></span>
#### Event Resource Pattern

Events are resources that represent the ongoing or completed execution of some activity or observation. For example, a clinical procedure, a financial transaction, the recording of a diagnosis, etc. An [Event pattern](event.html) defines the common elements typically present on all event resources.

<span id="definition"></span>
#### Definition Resource Pattern

Definitions are resources that represent activities that could be performed in a time and subject-independent manner such as a protocol, order set, clinical guideline, etc. A [Definition pattern](definition.html) defines the common elements typically present on all definition resources.

<span id="issues"></span>
### Open Issues

> **STU Notes:**
>
> -   It is possible to replace some portions of the [MessageHeader](messageheader.html) with a reference to the [Task](task.html) resource. Doing so would mean consistency in how asynchronous requests are represented using REST and messaging. However, it introduces an additional layer of complexity and formality into the messaging paradigm that may be unwelcome, particularly for those systems that do not currently foresee a need to support both RESTful and messaging invocations of workflow
> -   The [OperationDefinition](operationdefinition.html) resource could be used to define types of tasks and the sets of parameters that can go with them. Is this an appropriate use of the OperationDefinition resource?
> -   The [SupplyRequest](supplyrequest.html), [DeviceRequest](devicerequest.html) and [VisionPrescription](visionprescription.html) resources have a significant degree of overlap. Should they remain distinct resources?
>
> Feedback is welcome [here](http://hl7.org/fhir-issues).

\[%file newfooter%\]
