\[%settitle Workflow Module%\]
\[%file newnavbar%\]
|                                                |                                                                                         |
|------------------------------------------------|-----------------------------------------------------------------------------------------|
| Work Group [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) | [Standards Status](versions.html#std-process): [Informative](versions.html#std-process) |

<span id="root"></span>
Workflow Module
---------------

The workflow module focuses on the coordination of activities within and across systems. This includes three primary aspects:

-   How do we ask for another person, device or system to do something?
-   How do we track the linkages and dependencies between activities - actions to their authorizations, complex activities to individual steps, protocols to plans to orders, etc.?
-   How do we define what activities are possible and the expected order and dependencies of the steps within those activities? I.e. process/orchestration definition

Index
-----

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Infrastructure</td>
<td><ul>
<li>Start here: <a href="workflow.html">Overview</a></li>
<li>Resource: <a href="task.html">Task</a></li>
<li>Patterns: <a href="definition.html">Definition</a>, <a href="request.html">Request</a>, <a href="event.html">Event</a></li>
<li>Documentation: <a href="workflow-communications.html">Communication Patterns</a>, <a href="workflow-ad-hoc.html">Ad-Hoc Patterns</a>, <a href="workflow-management.html">Management Patterns</a> &amp; <a href="workflow-examples.html">Examples</a></li>
</ul></td>
</tr>
<tr class="even">
<td>Scheduling</td>
<td><ul>
<li>Appointments: <a href="appointment.html">Appointment</a> / <a href="appointmentresponse.html">AppointmentResponse</a></li>
<li>Availability: <a href="schedule.html">Schedule</a> / <a href="slot.html">Slot</a></li>
</ul></td>
</tr>
<tr class="odd">
<td>Clinical Process</td>
<td><ul>
<li>Referrals: <a href="servicerequest.html">ServiceRequest</a></li>
<li>Orders: <a href="nutritionorder.html">NutritionOrder</a>, <a href="visionprescription.html">VisionPrescription</a></li>
<li>Definitions: <a href="activitydefinition.html">ActivityDefinition</a>, <a href="plandefinition.html">PlanDefinition</a></li>
<li>Miscellaneous: <a href="devicerequest.html">DeviceRequest</a> &amp; <a href="deviceusestatement.html">DeviceUseStatement</a>, <a href="supplyrequest.html">SupplyRequest</a> &amp; <a href="supplydelivery.html">SupplyDelivery</a></li>
</ul></td>
</tr>
</tbody>
</table>

<span id="intro"></span>
### Introduction

Workflows can be performed through direct posting of resources to a target server (combined with a specific tag), by using the [Task](task.html) resource, through the use of [messaging](messaging.html) or via FHIR [services](services.html). This specification includes a [workflow](workflow.html) page that describes the concepts underlying the discussion of workflows, and points to a number of different communication and architectural [workflow patterns](workflow-communications.html).

In addition to the [Task](task.html) resource, this specification defines three logical models - [Definition](definition.html), [Request](request.html) and [Event](event.html) that define the patterns for resources that are typically involved in workflow. These patterns include elements defining common attributes of each type of resource as well as relationships between them. These relationships are summarized on the [workflow](workflow.html#relationships) page, along with a complete [list](workflow.html#list) of resources that follow (or are hoped to soon follow) the request and event patterns.

Finally the [PlanDefinition](plandefinition.html) and [ActivityDefinition](activitydefinition.html) resources combine to support the creation of protocols, orders sets, guidelines and other workflow definitions by describing the types of activities that can occur and setting rules about their composition, sequencing, interdependencies and flow.

<span id="uses"></span>
### Common use Cases

Workflow manifests in many places in the healthcare environment:

-   Creating a [lab order](servicerequest.html), [drug prescription](medicationrequest.html), or other clinical order or an [insurance claim](claim.html), [enrollment request](enrollmentrequest.html), [Appointment](appointment.html) or similar administrative request and asking for it to be actioned by a specific organization or practitioner
-   Negotiating a fulfillment process, such as requesting further information before accepting a claim or referral or proposing an alternative therapy when processing an order
-   Letting an ordering physician know what the current progress is in fulfilling an order (e.g. blood has been drawn, sample is being processed, preliminary results are in, etc.)
-   Defining a [plan](careplan.html) or recommendation for a set of clinical and/or administrative activities to manage a patient's care and then tracking how those plans and recommendations are (or are not) acted upon over time.
-   Communicating a state change to a request or order (e.g. suspension, update, cancellation, etc.) to a fulfilling system so that they can take appropriate action
-   Asking for a state change, requesting the merge of a couple of patients or the invoking of some operation or decision support in an asynchronous manner - for example, one where human intervention is required
-   Designing or adhering to a study protocol, chemotherapy protocol, instantiating an order set or other [plan definition](plandefinition.html)

FHIR provides multiple ways to enable these scenarios (and many others). Common mechanisms, along with their pros and cons can be found in the workflow sections on [patterns](workflow-communications.html#commpatternslist).

<span id="secpriv"></span>
### Security and Privacy

Resources related to workflow need to adhere to the same [security and privacy guidelines](security.html) that apply to all FHIR resources, including specific considerations for those that may contain personally-identifying information. There are a couple of additional security and privacy considerations specific to workflow:

1. Some workflows are ad-hoc without pre-defined participants or flows. These can be challenging for security and privacy processes to manage appropriately

2. Workflow can drive automated behavior. I.e. The mere existence of an electronic record can cause information to flow, procedures to be performed, records to be changed and money to be transferred, potentially without any intervention, oversight or sanity checking by a human being. As such, even greater care must be taken to ensure that:

-   constraints are placed on what systems (and users) can initiate workflow processes
-   requests for action are appropriately authenticated before action is taken
-   patient consents and other relevant policies are enforced either by the system storing the request or the system acting upon it (and that if enforcement is not performed by the actor, that they are confident that relevant policies have been enforced on the request prior to action)

For more general considerations, see [the Security and Privacy module](secpriv-module.html).

<span id="roadmap"></span>
### Developmental Roadmap

Initial work has taken place on aligning most (though not yet all) resources with the [Definition](definition.html), [Request](request.html) and [Event](event.html) patterns. In the lead-up to R5, we'll be moving the alignment checks into the build process and more formally documenting (and potentially reporting) on variations along with their justifications. Further alignment is also possible (where beneficial to implementers). We'll also be examining the potential for exposing alignment with the patterns in a computably useful manner (e.g. as interfaces).

Work will continue on the workflow patterns, including vetting the patterns against various clinical scenarios and enhancing pattern documentation. We also hope to examine both messaging and services in more detail with further guidance about when and how such mechanisms should be used for workflow and how they relate to the [Task](task.html) resource. As well, we'll examine the possibility for developing "standardized" workflows for certain domains and how such patterns might be documented, particularly through the use of the [ExampleScenario](examplescenario.html) resource. We will look for implementer feedback to guide this work.

The [PlanDefinition](plandefinition.html) and [ActivityDefinition](activitydefinition.html) resources will continue to evolve based on feedback from the implementer community. We'll explore using them in a variety of ways, including clinical order sets, medication protocols, workflow protocols, clinical pathways, administrative protocols, etc. We hope to develop several example workflow protocols.

Additional topics for future work include:

-   The initial effort to align with workflow patterns has been a bit over-zealous for some resources, resulting in the loss of domain-specific context or occasionally the introduction of elements that might be more properly represented as extensions. In R5, we'll continue to work on improving the balance, ensuring that consistency with patterns does not overshadow the essential requirements for implementer intuitiveness and simplicity
-   Resolving the overlap between the [SupplyRequest](supplyrequest.html), [DeviceRequest](devicerequest.html) and [VisionPrescription](visionprescription.html) resources
-   Improving mapping and alignment of the elements and status codes of the [Task](task.html) resource with the WS-HumanTask specification
-   Creating "best practice" guides for how to implement workflow for different business patterns
-   Examining how workflow is used for [compensating actions](https://en.wikipedia.org/wiki/Compensating_transaction) E.g. account transactions and reversals

\[%file newfooter%\]
