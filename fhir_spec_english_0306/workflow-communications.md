\[%settitle Workflow Description%\]
\[%file newnavbar%\]
|                                                |                                             |                                                                                       |
|------------------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process): [Trial Use](versions.html#std-process) |

-   [Overview](workflow.html)
-   [Communication Patterns](#)
-   [Ad-hoc Workflow Patterns](workflow-ad-hoc.html)
-   [Workflow Management Patterns](workflow-management.html)
-   [Examples](workflow-examples.html)

<span id="root"></span>
Workflow Execution and Communication Patterns
---------------------------------------------

As described in previous sections, many FHIR resources can be used within workflows without using FHIR to manage the execution of the workflows. When we want to manage workflow execution with FHIR, there are several mechanisms available. In addition to managing workflow with FHIR, there are also cases where management of workflow execution is not necessary, and supporting workflow becomes simply the use of the [resource patterns](workflow.html#respatterns) in an ad-hoc fashion. In deciding how best to interoperate around workflow with FHIR, there are several considerations:

-   Is sharing of the state of the workflow necessary among the participants?
-   Which paradigm do you want to use (REST, messaging, services, a mix)?
-   Who owns/manages the various resources involved in the workflow (placer, filler, another participant)?
-   Is there infrastructure in place to support polling, push notifications via subscriptions or both?
-   Is there a need for confirmation that the desired performer agrees to act, or can that be presumed?
-   Is there a need to negotiate whether/how the requested action will be performed?
-   Can the requesting and performing system communicate directly? Are they able to post to each other's servers (if using REST)?
-   Is there an ability/need to have a queue server to facilitate workflow execution?
-   How many potential actors are involved?
-   Will the workflow always be directed or is there a pool of potential performers who could choose to perform the requested action?

The answers to these (and other) questions will guide the selection of communication patterns to be used for a specific interoperability use case. It is recommended that domain workgroups analyze the support for workflow execution within their domains and provide recommendations for an appropriate subset of patterns, with a discussion on where and how to use them. Implementation guides, by their nature, should prescribe which patterns to use for workflow execution management.

<span id="commpatternsoverview"></span>
### Communication Patterns Conventions

This section highlights some of the more common patterns and identifies their characteristics and limitations and provides recommendations on when each approach may be most useful or relevant. Please note that this list of patterns is not exhaustive. Patterns can be combined in various ways and there are likely some possibilities we haven't thought about yet (feel free to submit additional patterns using the 'submit a change' link at the bottom of the page). As well, the recommendations given here are just that - recommendations. Implementers are free to choose which patterns they wish to support. Because of this, tight interoperability around workflow execution (as with any other tight interoperability using FHIR) will depend on communicating participants doing some up-front negotiation around how they plan to support workflow execution or all communicating partners will need to adhere to an implementation guide that sets out clear interoperability expectations.

Prior to reviewing this list of options, readers are encouraged to be familiar with the following pages and resources: [REST](http.html), [messaging](messaging.html), [operations](operations.html), [services](services.html) and the [Subscription](subscription.html) resource.

The scenarios used to illustrate the patterns below make use of a few conventions:

-   The focus here is on a "request" and the actioning of that request. Almost all workflows can be broken down to a sequence of these steps, though the responsibilities of the different parties may shift for each interaction and there can be more than two parties involved in the overall workflow
-   The request could be as simple as "please look at this information" and the response could be as simple as an implicit "it's been looked at" or the request could be for some more involved action that may include reporting back multiple interim and final steps
-   The requester is referred to as the "placer" and the performer is referred to as the "filler", which are often seen as order-specific terms. However, in this context, the terms hold whether the request is expressed as a proposal, plan or full-blown order
-   Each of the patterns defines the set of steps involved in processing the request, lists some of the benefits and limitations associated with the approach, provides a scenario to illustrate the use of the pattern, and then makes recommendations about when the pattern is most appropriate
-   The descriptions of these patterns focus on the notion of requesting fulfillment of a request. However most of these patterns are also applicable to requests for status change, requests for information, etc. If a pattern is limited in the types of execution it can trigger, this will be noted in the "limitations" section.

### Workflow State

One of the key distinguishing characteristics in the patterns below is whether the pattern supports the tracking of the workflow's state by both the placer and the filler. The workflow state is represented by the [Task](task.html) resource. The [Task state machine](task.html#statemachine), which is also presented here, shows the use of [Task.status](task-definitions.html#Task.status) to represent the general infrastructure state of the Task resource.

![Diagram showing typical state machine for the Task resource](task-state-machine.svg)
The combination of [Task.status](task-definitions.html#Task.status), [Task.statusReason](task-definitions.html#Task.statusReason) and [Task.businessStatus](task-definitions.html#Task.businessStatus) provide the mechanism for tracking the workflow state. The following two examples illustrate how that could be accomplished with regards of specific workflows. Note that these examples avoid any specificity on where the described resources exist, or any reference to a specific communication pattern. The goal of the examples is to demonstrate the use of the Task attributes to represent the workflow state.

#### Example: Workflow states for a lab order for a blood test

The following table shows the steps for a simple blood test order, and the corresponding values of the Task attributes. A lot of details on other attributes have been omitted in order to focus on the state changes.

Workflow step
[Task.status](task-definitions.html#Task.status)
[Task.statusReason](task-definitions.html#Task.statusReason)
[Task.businessStatus](task-definitions.html#Task.businessStatus)
Provider orders a blood test for a patient. A [ServiceRequest](servicerequest.html) resource is created to represent the order, and a [Task](task.html) resource is created to represent the request to the lab. [Task.basedOn](task-definitions.html#Task.basedOn) points to the ServiceRequest instance.
Requested
New order
Ordered
The lab accepts the order.
Accepted
Able to perform the test.
Accepted
The patient is at the lab, and blood is drawn.
In progress
Obtained the specimen
Specimen available
Work on the blood sample is in progress, preliminary results are available, a [DiagnosticReport](diagnosticreport.html) resource is created, and [Task.output.value\[1\]](task-definitions.html#Task.output.value_x_) references the DiagnosticReport resource.
In progress
Preliminary results available
Preliminary results
Final results are available
Complete
Final results are available
Final results
#### Example: Workflow states for a referral from a PCP to a specialist

The following table shows the steps for a referral workflow, and the corresponding values of the Task attributes. A lot of details on other attributes have been omitted in order to focus on the state changes.

Workflow step
[Task.status](task-definitions.html#Task.status)
[Task.statusReason](task-definitions.html#Task.statusReason)
[Task.businessStatus](task-definitions.html#Task.businessStatus)
Provider A is seeing a patient with a specific complaint. Based on the exam, Provider A refers the patient to a specialist at clinic B. It is an urgent referral, requesting to see the specialist within 4 days. A [ServiceRequest](servicerequest.html) resource is created to represent the referral order, and a [Task](task.html) resource is created with [Task.priority](task-definitions.html#Task.priority) set to Urgent, and [Task.restriction.period.end](task-definitions.html#Task.restriction.period) set to 4 days in the future.
Requested
New referral
Referred
Clinic B receives the referral and puts it on the urgent queue to be reviewed.
Received
Received by organization
Pending
Upon reviewing the referral, the clinic determines they have no capacity to see the patient within the specified time period, and they decline the referral.
Rejected
Provider unavailable
Declined
Provider A changes the referral request to clinic C. This creates a new [Task](task.html) resource, with the appropriate information
Requested
Changed the referred to provider
Referred
Clinic C accepts the referral and it is placed on a scheduler's queue.
Accepted
Able to provide the service.
Accepted
An appointment is scheduled for the patient at Clinic C.
In progress
Appointment scheduled
Scheduled
Soon after the appointment is scheduled, the patient calls provider A to ask for a different location for the referral appointment, as he lost his transportation, and he cannot reach Clinic C. The provider requests a cancel for the referral.
Suspended
Patient unable to make appointment.
Cancel requested
Clinic C confirms the cancellation of the existing task.
In progress
Failed
Referral cancelled
Cancelled as requested
Provider A changes the referral to Clinic D, which is located close to where the patient lives, and can be conveniently reached using public transportation. This creates a new [Task](task.html) resource, with the appropriate information.
Requested
Changed the referred to provider
Referred
Clinic D accepts the referral and it is placed on a scheduler's queue.
Accepted
Able to provide the service.
Accepted
An appointment is scheduled for the patient at Clinic D.
In progress
Appointment scheduled
Scheduled
Patient is seen at Clinic D. A diagnosis is made by the specialist, a prescription is given, and a follow-up appointment is made at clinic D. [Task.output.value\[1\]](task-definitions.html#Task.output.value_x_) references a [Compositions](composition.html) resource, which contains the encounter summary.
In progress
Intermediary consultation note available
Preliminary notes
Patient comes for follow-up appointment at clinic D. The specialist is satisfied by the progress the patient has made and creates the final consultation note. [Task.output.value\[2\]](task-definitions.html#Task.output.value_x_) references a [Compositions](composition.html) resource, which contains consultation note.
Completed
Final consultation note available
Final notes
<span id="commpatternslist"></span>
### List of patterns

The patterns that facilitate the execution of workflow using the [Task](task.html) resource are grouped in the Workflow Management Patterns section. The patterns where no Task resource is used are grouped in the Ad-hoc Workflow Patterns section. The list of patterns is as follows:

| [Ad-Hoc Workflow Patterns](workflow-ad-hoc.html)                                                                               |
|--------------------------------------------------------------------------------------------------------------------------------|
| [Option A: Simple RESTful POST or PUT](workflow-ad-hoc.html#optiona)                                                           |
| [Option B: Direct POST of request to fulfiller's system](workflow-ad-hoc.html#optionb)                                         |
| [Option C: POST of request to placer/queue server system, receiver uses polling or subscription](workflow-ad-hoc.html#optionc) |
| [Option D: Messaging request from placer to filler & acknowledgment](workflow-ad-hoc.html#optiond)                             |
| [Option E: Services request from placer to filler & acknowledgment](workflow-ad-hoc.html#optione)                              |
| [Workflow Management Patterns](workflow-management.html)                                                                       |
| [Option F: Creation of Task on placer's system](workflow-management.html#optionf)                                              |
| [Option G: POST of Task to fulfiller's system](workflow-management.html#optiong)                                               |
| [Option H: POST of Task to a workflow broker](workflow-management.html#optionh)                                                |
| [Option I: POST of Task to fulfiller's system, POST of sub-Task on placer's system](workflow-management.html#optioni)          |
| [Option J: Messaging Task from placer to fulfiller](workflow-management.html#optionj)                                          |
| [Option K: Service request referencing Task from placer to fullfiller](workflow-management.html#optionk)                       |
| [Additional Scenarios and Variations](workflow-ad-hoc.html#additional)                                                         |

TODO: Insert Jose's decision tree here?

\[%file newfooter%\]
