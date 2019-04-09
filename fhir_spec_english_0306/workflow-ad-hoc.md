\[%settitle Workflow Description%\]
\[%file newnavbar%\]
|                                                |                                             |                                                                                      |
|------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

-   [Overview](workflow.html)
-   [Communication Patterns](workflow-communications.html)
-   [Ad-hoc Workflow Patterns](#)
-   [Workflow Management Patterns](workflow-management.html)
-   [Examples](workflow-examples.html)

<span id="root"></span>
Ad-Hoc Workflow Communication Patterns
--------------------------------------

*TODO: Discussion (or reference to one) on Polling and Subscription*

<span id="optiona"></span>
### Option A: Simple RESTful POST or PUT

#### Steps

1.  The placer makes a RESTful call to [create](http.html#create) or [update](http.html#update) a record or a POST to invoke an [operation](operations.html#executing) over HTTP
2.  The receiver responds with a 2xx HTTP response indicating whether the request was successfully processed or not and, if appropriate, provides the response to the request in the payload of the HTTP response

#### Benefits

-   Simplest of all the possible workflow architectures
-   Placer knows whether the request was accepted or not and knows when the task has been done

#### Limitations

-   Only works for automated execution where the decision to perform the request and the execution of the request can be done synchronously within the HTTP timeout period (generally on the order of 10s of seconds).
-   Requires that the placer have authority to post directly to the placer's system
-   Requires that the "request" be expressible as a simple creation, update or operation invocation
-   Only works for "fulfillment" requests for Request resources - can't handle request for state changes or information
-   Only way to cancel the request is with a separate custom operation

#### Usage Recommendations

This is by far the most common pattern in FHIR for simple changes as it requires the least overhead. However, it covers only automated responses, and does not support any actual workflows of more than one step. If human processing is involved in the request execution, then this approach won't suffice. This approach is listed here to make sure that implementers consider whether they can make this one work first before falling back to one of the more sophisticated patterns.

#### Usage Examples

*???*

<span id="optionb"></span>
### Option B: Direct POST of request to fulfiller's system

![Diagram showing direct POST of request to fulfiller's system workflow](workflow-optionb.png)
#### Steps

1.  Placer system invokes a [create](http.html#create) by POSTing a 'request' resource (e.g. [MedicationRequest](medicationrequest.html), [ServiceRequest](servicerequest.html), etc.) to the appropriate RESTful resource endpoint (e.g. \[base\]/MedicationRequest) on the filler system and places an [actionable](codesystem-common-tags.html#common-tags-actionable) [tag](resource.html#simple-tags) on the resource that indicates the request is intended to be acted upon, not merely stored.
2.  The filler synchronously responds with a "201" indicating that they have received and stored (created) the resource on their system
3.  At some later point, the filler POSTs an 'event' resource (e.g. [MedicationDispense](medicationdispense.html), [DiagosticReport](diagnosticreport.html), [Encounter](encounter.html), etc.) to the appropriate resource endpoint on the placer system, including a `basedOn` link to the 'request' resource that the action was performed in fulfillment of.
4.  The placer system synchronously responds with a "201" indicating they've received and store (created) the resource on their system

#### Benefits

-   Lowest amount of overhead. No need for [Task](task.html). No need for polling or subscriptions
-   Explicit acknowledgement that filler has received the request

#### Limitations

-   Can only use when requesting fulfillment (can't use to request status change or other updates)
-   Placer and filler must be able to communicate directly (i.e. know each other's respective endpoints), must each have a FHIR server, and must have "write" permissions to each other's servers. This could become unmanageable if there are a large (or dynamic) number of placers and fillers that need to communicate
-   No indication of agreement to act on the request
-   There's no ability to negotiate fulfillment - no ability to say "no"
-   This completely reverses the usual provenance of resources, as the request only exists on the fulfiller's system, and the event only exists on the placer's system. This greatly limits the use of these resources for any other purpose.
-   The only way to stop fulfillment is to update the Request to have a 'cancelled' status

#### Usage Recommendations

Use this approach when there's no ability to have queue servers and no support/need for complexity of Task, polling or pub/sub (and no need for negotiation or the ability for the filler to say "no"). This is a pseudo-messaging architecture that doesn't actually use messaging architecture.

#### Usage Examples

<span id="optionc"></span>
### Option C: POST of request to placer/queue server system, receiver uses polling or subscription

![Diagram showing POST of request to placer/queue server system, receiver uses polling workflow](workflow-optionc.png)
#### Steps

1.  Placer system creates a 'request' resource (e.g. ServiceRequest etc.) by a system action or a POST on either its own system or a third-party queue server system and places an "actionable" tag on the resource that indicates the request is intended to be acted upon. The request explicitly identifies the intended fullfiller
2.  The filler system uses polling (or a subscription) at the placer or queue server system to see if there are any "new" requests that: are tagged as "actionable", have the filler identified as the intended performer, and are a type of request "of interest" to the filler.
3.  At some later point, the filler creates an 'event' resource (e.g. MedicationDispense, DiagosticReport, Encounter, etc.) via a system action, or a POST on either its own system, the same queue server as the request was placed on, or some alternate queue server, including a link to the 'request' resource that the action was performed in fulfillment of
4.  The placer system uses polling (or a subscription) to the filler or queue server system to see if there are any "new" events that are tied to any outstanding requests the placer has initiated

#### Benefits

-   Placer and fulfiller don't have to communicate directly (can act through queue server). This can reduce the number of point-to-point interfaces that need to be supported
-   Preserves the conventional management and ownership of the request and event at the placer and fulfiller's systems respectively
-   No need for Task

#### Limitations

-   Can only use when requesting fulfillment (can't use to request status change or other updates)
-   Additional complexity of using subscription or polling
-   Polling by the placer for "anything related to these 500 open orders" could be onerous, especially if some orders never get closed.
-   Placer and fulfiller must know where to poll or subscribe for content - this could be a large number of systems
-   No indication of agreement to act on the request
-   There's no ability to negotiate fulfillment - no ability to say "no"
-   Placer might not know when (or if) filler system has retrieved the request
-   If the Request is cancelled, there's no guarantee the filler will notice or act on the change

#### Usage Recommendations

This pattern could be used when there's no support/need for complexity of Task, usually for simple two step workflows. This is a more typically RESTful approach where data resides on the server "owned" by the data creator and is accessed by other systems.

#### Usage Examples

<span id="optiond"></span>
### Option D: Messaging request from placer to filler & acknowledgment

*TODO: needs review and update*

#### Steps

1.  Placer sends message to filler system including Request resource (and other relevant resources) along with a MessageHeader with an "event" code saying "please fulfill" and "data" element pointing to the Request resource as the item to fulfill. Message could potentially use Task instead of MessageHeader.event to convey desired action (ongoing discussion)
2.  Filler system sends a response indicating receipt of the message and, optionally an indication of their intention to fulfill the request
3.  Filler system may send incremental messages to the placer showing progress (e.g. specimen collected, preliminary results, final results)

#### Benefits

-   Reduced number of communications
-   All relevant data sent in one package
-   Responses can be asynchronous, and content may be routed
-   There's an ability to negotiate fulfillment - i.e. the ability to say "no"
-   Can request things other than just fulfillment (e.g. please suspend)
-   Explicit acknowledgement that filler has received and agreed to act on the request (though no need for the placer to check)

#### Limitations

-   Messaging is "heavy"
-   Need to negotiate what allowed responses are and what data can be present in request and response messages
-   Additional complexity of setting up and maintaining a subscription or polling infrastructure
-   Additional complexity of using Task
-   Need message delivery infrastructure in place
-   Cancellation requires a separate purpose-specific message

#### Usage Recommendations

Existing messaging infrastructure (e.g. v2 LTP, MLTP, WSI Web Services, Direct, VISA, REST, etc.) and a need to stay consistent with that architecture

<span id="optione"></span>
### Option E: Services request from placer to filler & acknowledgment

*TODO: Needs review, update and more work - there's not a lot of experience using FHIR services to manage the fulfillment process*

#### Steps

1.  Placer may create and store a Request resource on their own system or a queue server.
2.  Placer invokes a service on the filler system saying "please fulfill this order", including the content or a reference to the request resource and any other relevant data
3.  Filler system responds (synchronously if using HTTP, but may be asynchronous if using SOAP or other transport mechanisms) with conformation of receipt and, optionally indication of intention to fulfill and/or results
4.  

#### Benefits

-   ???

#### Limitations

-   ???

#### Usage Recommendations

TBD

<span id="additional"></span>
### Additional Scenarios

*TODO: needs review and update. Possibly add options about using messaging and/or services instead of polling/subscription in above scenarios*

#### Querying the status of a workflow using REST

1.  Placer sends query for Task(s) that have a focus of the request of interest to a system (placer system, queue server or filler) that holds tasks related to their request.
2.  System returns a query response showing all related tasks (typically just one). Task shows current status.

#### Querying the status of a workflow using services

1.  Placer invokes a "what's the status of this order" service, passing the request business identifier or URL of the request
2.  Services responds with a Task showing the current state of the fulfillment of the request

#### Cancellation of a Task using REST - placer owns

1.  Placer sends an update to the Task setting the status to "cancelled" signaling they are no longer concerned about the outcome of the task
2.  Filler receives notification of the update (because the task is on their system, or because they poll it, or are subscribed to it) and ceases work if they are able

#### Cancellation of a Task using REST - filler owns

1.  Placer creates a new task requesting cancellation of the original fulfillment task
    Fulfillment of the "cancellation task" can be requested using any of the mechanisms above
2.  Filler decides whether they can cancel the task and update the "cancellation" task to indicate either cancellation is complete or has been refused

\[%file newfooter%\]
