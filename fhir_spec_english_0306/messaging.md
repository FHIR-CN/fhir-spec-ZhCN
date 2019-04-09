\[%settitle Messaging using FHIR Resources%\]
\[%file newnavbar%\]
Messaging using FHIR Resources
==============================

|                                                |                                             |                                                                                      |
|------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 3 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

FHIR Resources can be used in a traditional messaging context, much like [HL7 v2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) (see [detailed comparison](comparison-v2.html)). Applications asserting conformance to this framework claim to be conformant to "FHIR messaging" (see [Conformance](conformance-rules.html)).

In FHIR messaging, a "request message" is sent from a source application to a destination application when an event happens. Events mostly correspond to things that happen in the real world. The request message consists of a [Bundle](bundle.html) identified by the [type](bundle-definitions.html#Bundle.type) "message", with the first resource in the bundle being a [MessageHeader](messageheader.html) resource. The MessageHeader resource has a code - the message event - that identifies the nature of the request message, and it also carries additional request metadata. The other resources in the bundle depend on the type of the request.

The events supported in FHIR, along with the resources that are included in them, are defined below.

The destination application processes the request and returns one or more response messages which are also a [bundle](bundle.html) of resources identified by the [type](bundle-definitions.html#Bundle.type) "message", with the first resource in each bundle being a [MessageHeader](messageheader.html) resource with a response section that reports the outcome of processing the message and any additional response resources required.

-   [Example Request Message](message-request-link.xml.html)
-   [Example Response Message](message-response-link.xml.html)

<span id="basic"></span>
Basic Messaging Assumptions
---------------------------

This specification assumes that content will be delivered from one application to another by some delivery mechanism, and then one or more responses will be returned to the source application. The exact mechanism of transfer is irrelevant to this specification, but may include file transfer, HTTP based transfer, MLLP (HL7 minimal lower layer protocol), MQ series messaging or anything else. The only requirement for the transfer layer is that requests are sent to a known location and responses are returned to the source of the request. This specification considers the source and destination applications as logical entities, and the mapping from logical source and destination to implementation specific addresses is outside the scope of this specification, though this specification does provide a direct delivery mechanism below.

The agreements around the content of the messages and the behavior of the two applications form the "contract" that describes the exchange. The contract will add regional and local agreements to the rules defined in this specification.

This specification ignores the existence of interface engines and message transfer agents that exist between the *source* and *destination*. Either they are transparent to the message/transaction content and irrelevant to this specification, or they are actively involved in manipulating the message content (in particular, the source and destination headers are often changed). If these middleware agents are modifying the message content, then they become responsible for honoring the contract that applies (including applicable profiles) in both directions.

A key aspect of a message is the impact of its content:

\[%codelist http://hl7.org/fhir/message-significance-category%\]
Some Events defined by FHIR are assigned to one of these categories, but others are not able to be categorized in advance, and the category must be determined by the content, context, or use case.

#### Example: Elevation from Notification to Consequence

When it is necessary to receive an acknowledgement from multiple parties for a message of notification it becomes a message of consequence: The sender will have to send multiple messages, even if they have the same endpoint.

Local protocol requires notification of all lab values
Local protocol requires that critical values must be acknowledged by both the ordering and primary provider.
Therefore a message of notification becomes a message of consequence.
Two messages SHALL be sent, each with a unique identifier.
-   One to the ordering provider
-   One to the primary provider

Each message SHALL have a unique acknowledgement
### Implication to Receiver

Another key aspect of a message is the impact of its destination.receiver. In some circumstances it may be sufficient to direct a message to an endpoint, while in others it may be necessary to direct the message to a specific organization or person.

|              |                                                                           |
|--------------|---------------------------------------------------------------------------|
| Consequence  | A message of consequence SHOULD have one and only one receiver specified. |
| Currency     | A message of currency MAY have one or more receivers specified.           |
| Notification | A message of currency MAY have one or more receivers specified.           |

<span id="synchronous"></span> <span id="patterns"></span>
### Message Exchange Patterns

Each FHIR request message has one or more response messages. There must be at least one response message so that the sender can know that the message was properly received. Multiple response messages SHALL NOT be returned for messages of consequence, and SHOULD not be returned for notifications.

In principle, source applications are not required to wait for a response to a transaction before issuing a new transaction. However, in many cases, the messages in a given stream are dependent on each other, and must be sent and processed in order. In addition, some transfer methods may require sequential delivery of messages.

<span id="sync"></span>
#### Synchronous

For this reason, a synchronous exchange pattern - where the sender sends a message, and waits on the same channel for a single response, and then sends the next message - is the easiest to understand and manage:

-   the sender sends a message to the receiver (the server)
-   the server processes it, and then returns a response
-   Usually (though not always) the sender waits for the response to the current message before sending the next message

This kind of messaging exchange is the most common because it's the simplest to understand.

<span id="async"></span>
#### Asynchronous

However synchronous message exchange does not cater for multiple response messages, which may arise when processing queries, and also imposes through-put limitations which may become relevant at high volumes. Additionally, it might not be practical or appropriate to wait for response messages. In these cases, the asynchronous message pattern should be used.

In Asynchronous messaging, the server acknowledges receipt of the message immediately, and responds to the sender separately. The server may respond more than once to any given message.

When a message is received, a receiver can determine from the content of the message header whether it's a new message to process, or a response to a message that has already been sent. Note that asynchronous messaging can be harder to implement due to the amount of complexity opposed to synchronous messaging; more can go wrong. This specification does not dictate any particular error handling protocols or responsibilities; these are left to trading partner agreements between implementers.

### MessageHeader Identifiers & Timestamps

An incoming message contains two identifiers: the Bundle.id and the [MessageHeader](messageheader.html).id. Each time a new message is created, it SHALL be assigned an identifier (MessageHeader.id) that is unique within that message stream. Note that since message streams are often merged with other streams, it is recommended that the identifier should be globally unique. This can be achieved by using a UUID or an OID. Each time a message is sent, the Bundle.id should be changed to a new value.

When a receiver receives and processes the message, it responds with a new message with a new identifier, wrapped in a bundle which also has a new id. The response message also quotes the request MessageHeader.id in MessageHeader.response.identifier so that the source system can relate the response to its request.

A message has 2 important timestamps:

-   **[Bundle.timestamp](bundle-definitions.html#Bundle.timestamp)**: the time the message was sent
-   **[Bundle.meta.lastUpdated](resource-definitions.html#Meta.lastUpdated)**: the last time the message was updated (either by storing, or by modification)

In addition, the message may have additional timestamps in additional resources in the message, either .meta.lastUpdated or others throughout the resources. The meaning of these will depend on the message event.

<span id="reliable"></span>
### Absence of Reliable Messaging

Some of the message delivery mechanisms mentioned above are reliable delivery systems - the message is always delivered, or an appropriate error is returned to the source. However most implementations use methods which do not provide reliable messaging, and either the request or the response can get lost in transit. FHIR messaging describes a simple approach that receivers SHOULD conform to in order to handle the absence of reliable messaging that maintains predictable functionality.

If the sender of the message implements reliable messaging, it SHALL do the following when it receives no response to a message within a configured timeout period based on the value specified in the [CapabilityStatement](capabilitystatement.html) `messaging.event.category` for the event associated with the message:

|              |                                                                                     |
|--------------|-------------------------------------------------------------------------------------|
| Consequence  | Resend the same message (with the same MessageHeader.id) with the same Bundle.id    |
| Currency     | Resend the same message (with the same MessageHeader.id) with a different Bundle.id |
| Notification | Resend the same message (with the same MessageHeader.id) with a different Bundle.id |

When a receiver implements reliable messaging, it SHALL check the incoming Bundle.id and MessageHeader.id against a cache of previously received messages. The correct action to take depends on what is received:

|                                                                          |                                                                                                                                         |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Both the Bundle.id and MessageHeader.id have not been received           | This is the normal case, and the message should be processed                                                                            |
| Both envelope and message already received                               | The original response has been lost (failed to return to the request issuer), and the original response SHALL be resent                 |
| The MessageHeader.id has already been received, but the Bundle.id is new | A previously seen message has been resubmitted for processing again. The server may either reprocess the message, or reject the message |
| The Bundle.id has already been received, but the MessageHeader.id is new | This is an error - Bundle.id values should never be reused                                                                              |

The duration period for caching does generally not need to be very long. At a minimum, it could be 1 minute longer than the timeout of the sending system, though it may need to be longer depending on the re-sending policies of the sending system.

Applications that implement reliable messaging declare their reliable cache period in their [Capability Statement](capabilitystatement.html).

#### Example: Consequence

In the first example, a Clinical EHR issues an order for a particular imaging examination to be performed on a patient. This is considered to be a message of **Consequence**: multiple orders should not be created (in practice there are usually human review processes that catch multiple orders, but repeat orders create entropy in the system that is harmful). The EHR sends a message where the Bundle.id is UUID 1 (72edc4e0-6708-42ab-9734-f56721882c10), with a MessageHeader.id of UUID 2 (dad53a57-dcb4-4f18-b066-7239eb4b5229).

The EHR system never receives a response to the message; it does not know whether the request message got lost, or the imaging management systems was unable to process the request, or whether it successfully processed the message and the response was lost. In this case, the EHR system resends the message with same two identifiers.

In this case, the imaging system successfully received the message, and processed it. Because it receives the resent order after 1 minute (which is within its 15 minute cache time), and the two UUIDs 1 and 2 match a message it has already processed, it knows that it already processed the order, and simply returns the previous response. In the case of additional resent queries, the application keeps sending the original response, though it may also alert system administrators that the same original message keeps being resent, since lost messages should be a rare occurrence.

When the EHR system finally receives the message, it knows how the imaging management system responded; it can be sure because the message id from the original request is echoed in the response portion of the returned message.

#### Example: Currency

In this second example, a Clinical EHR needs to know what appointment slots are available for a particular imaging procedure. This is a message of **Currency**: available slots are ever disappearing, and ordering a slot that has become unavailable is a waste of time for the humans and systems involved. The EHR sends a message where the Bundle.id is UUID 3 (4c7f5cb2-5964-4d42-b719-e0227461818c), with a MessageHeader.id is UUID 4 (63ed7d68-b2cc-421d-ba1c-a6c7785581f2).

The EHR system never receives a response to the message; it does not know whether the request message got lost, or the imaging management systems was unable to process the request, or whether it successfully processed the message and the response was lost. In this case, the EHR system resends the message with same MessageHeader.id (UUID 4), but creates a new Bundle.id (c7c17fe4-9560-49c7-b2ae-42636476fb86).

In this case, the imaging system successfully received the message, and processed it. When it receives the resent order after 1 minute (which is within its 15 minute cache time), it sees that although the message id is the same, the Bundle.id has changed, and it reprocesses the message again, and sends a new response.

When the EHR system finally receives the message, it knows the current slot availability on the imaging management system responded.

Note that the existence of active intermediaries (or "middleware") creates the need for this protocol - the original sender matches the response to the request based on the MessageHeader.id, and so an active intermediary that choose the re-initiate a query that it previously relayed cannot change the MessageHeader.id. This protocol avoids the need for the MessageHeader.id to change, and only requires change to the Bundle.id which is never the basis for context linking outside the immediate message exchange protocol described here.

<span id="conf"></span>
Capability Statement
--------------------

Applications may only assert conformance to "FHIR messaging" if they publish a [Capability statement](capabilitystatement.html) so the claim may be verified. A Capability statement lists all the message events supported (either as sender or receiver) and for each event, a profile that states which resources are bundled (sender), or are required to be bundled (receiver), and any rules about the information content of the individual resources.

<span id="process"></span>
$process-message
----------------

The simplest way to handle messages where there are also [RESTful interactions](http.html) occurring is to use the [$process-message](messageheader-operation-process-message.html). This operation accepts a message, processes it according to the definition of the event in the message header, and returns a one or more response messages. See the opreation definition for further details.

<span id="endpoints"></span>
Relationship between Messaging and REST
---------------------------------------

As well as this messaging framework documented here, FHIR also defines a [RESTful API](http.html). The messaging and RESTful frameworks are related in that both share the same set of resources on which they operate. In fact, the basic [MessageHeader](messageheader.html) resource that the messaging framework is implemented is itself a resource that can treated in a RESTful approach.

The kinds of functionality that the RESTful API and the messaging framework offer are very similar; their primary difference is architectural in nature.

For instance, the messaging framework defines an event for notifying that an administration resource has been created or updated; the REST API offers similar services ([history](http.html#history) and [Subscription](subscription.html)). On the other hand, there are differences in the capabilities offered - while a patient merge can be implemented as a series of RESTful operations performed by the client that update all resources linked to the patient, when a message command to merge patient records is processed, the server will do all the work, and is also able to merge in areas not exposed on the RESTful API. The REST API, however, provides a set of basic operations on all resources that would need special definitions in the messaging framework - definitions that are not provided.

There is no expectation that RESTful systems will need to offer messaging support, or vice versa, though systems may find it useful to support both sets of functionality in order to satisfy a wider range of implementers.

As a resource that can be used with the RESTful framework, the MessageHeader resource has the normal resource end-point (/MessageHeader), which is used to manage a set of static message resources. This could be used to make an archive of past messages available. **Creating or updating MessageHeader resources in this fashion does not represent the actual occurrence of any event, nor can it trigger any logic associated with the actual event.** It is just for managing a set of message header resources.

<span id="rest"></span>
### Asynchronous Messaging using the RESTful API

It is possible to exchange messages using the RESTful end-point as a central point of exchange. This is not particularly efficient compared to other methods, but is useful for low-volume asynchronous exchange.

To send a message, a sender posts the message bundle to the /Bundle end-point, with a uri that identifies the receiver at [MessageHeader.destination.endpoint](messageheader-definitions.html#MessageHeader.destination.endpoint). The RESTful server accepts the bundle, stores it as a single bundle, and indexes it on the [MessageHeader](messageheader.html).

To receive messages, a receiver searches for all messages destined for itself, since its last check:

     GET [base]/Bundle?message.destination-uri=[rcv]&_lastUpdated=>2015-03-01T02:00:02+01:00

The receiver works through the response, processing each message. As each message is processed, the receiver creates a response message, reversing the source and destination, and posts it back to the server.

To check for responses, the original sender searches for response messages destined for itself, since its last check:

     GET [base]/Bundle?message.destination-uri=[snd]&message.response-id:missing=false
          &_lastUpdated=>2015-03-03T06:03:522+01:00

This lightweight protocol needs ongoing administration to ensure that multiple parties do not interfere with each other by re-using the same system identifier (and against malicious attack).

<span id="Events"></span> <span id="events"></span>
Defining Events
---------------

The *message.code* element carries a [Coding](datatypes.html#Coding) that identifies the event that the message conveys.

Events may be defined using the [MessageDefinition](messagedefinition.html) resource. This specification does not define any events, but may do so in the future if implementers find this useful.

<span id="operations"></span>
Invoking Operations via Messages
--------------------------------

A message can be used to invoke an operation as defined for a RESTful interface using an operation definition. To invoke an operation using a message:

-   The requester sends a message (a bundle with type = message, and a message header resource)
-   The message header has an event.system of `urn:ietf:rfc:3986`
-   The event.code is the URL from the operation definition `OperationDefinition.url`
-   The `MessageHeader.data` refers to a [Parameters](parameters.html) resource
-   The parameters resource is populated appropriately as specified by the nominated operation definition

The recipient executes the operation as specified, and then:

-   The receiver sends a message (a bundle with type = message, and a message header resource)
-   The message header has the same event as the original message
-   The MessageHeader contains a response that refers to the original request message, and a code for the outcome, with details if the operation failed
-   The `MessageHeader.data` refers to a [Parameters](parameters.html) resource
-   The parameters resource is populated appropriately as specified for the response by the nominated operation definition
-   If the operation definition specifies a single return, then this is returned as the target of the MesssageHeader.data directly

Here's an example:

``` xml
<Bundle xmlns="http://hl7.org/fhir">
  <id value="urn:uuid:77831928-2a35-4c08-9496-8232323bf48c"/>
  <!-- normal bundle stuff -->
  <entry>
    <fullUrl value="urn:uuid:6080d4a7-5e05-45dc-96d5-f75329564d1f"/>
    <resource>
      <MessageHeader>
              <id value="cac8143e-6138-4f45-b086-bb8ebf976aae">
        <!-- normal message header stuff -->
        <event>
          <system value="urn:ietf:rfc:3986"/>
          <!-- value set expansion -->
          <code value="http://hl7.org/fhir/OperationDefinition/ValueSet-expand"/>
        </event>
        <!-- more normal message header stuff -->
        <data>
          <reference value="urn:uuid:00213637-dc7c-40d2-a7de-f4ef1eea5685"/>
        </data>
      </MessageHeader>
    </resource>
  </entry>
  <entry>
    <fullUrl value="urn:uuid:00213637-dc7c-40d2-a7de-f4ef1eea5685"/>
    <resource>
      <Parameters>
        <parameter>
          <name value="identifier"/>
          <valueUri value="http://hl7.org/fhir/ValueSet/identifier-type"/>
        </parameter>
      </Parameters>
    </resource>
  </entry>
</Bundle>
```

Note that there's no way to anchor the execution of the operation against a URL. The only operations that can be executed in this way are defined to be executed at the System or Resource level for a particular resource.

<span id="search"></span>
### Invoking Search via Messages

In the same way that a defined operation can be invoked, a regular search operation can be invoked. This also uses the [Parameters](parameters.html) resource, with the following rules:

-   The event code is "search-type" or "search-system" in the system http://hl7.org/fhir/restful-interaction
-   If the event type is "search-type" there SHALL be a parameter "resourceType" with specifies the type of resource being searched
-   The search parameters are converted to FHIR data types according to the following table

|                           |                                                    |
|---------------------------|----------------------------------------------------|
| **Search Parameter Type** | **Data Type**                                      |
| number                    | integer                                            |
| date                      | dateTime                                           |
| string                    | string                                             |
| token                     | string or Coding (split the system and code apart) |
| reference                 | uri                                                |
| composite                 | string                                             |
| quantity                  | string or Quantity (split the syntax out)          |
| uri                       | uri                                                |

Here's an example:

``` xml
<Bundle xmlns="http://hl7.org/fhir">
  <id value="urn:uuid:77831928-2a35-4c08-9496-8232323bf48c"/>
  <!-- normal bundle stuff -->
  <entry>
    <fullUrl value="urn:uuid:c466754c-09c0-4f59-9f76-a48bd0ea27c9"/>
    <resource>
      <MessageHeader>
        <!-- normal message header stuff -->
        <event>
          <system value="http://hl7.org/fhir/restful-interaction"/>
          <!-- Search against Patient -->
          <code value="search-type"/>
        </event>
        <!-- more normal message header stuff -->
        <data>
          <reference value="urn:uuid:59a17a19-46eb-42d9-821a-f93a0c530cac"/>
        </data>
      </MessageHeader>
    </resource>
  </entry>
  <entry>
    <fullUrl value="urn:uuid:59a17a19-46eb-42d9-821a-f93a0c530cac"/>
    <resource>
      <Parameters>
        <parameter>
          <name value="resourceType"/>
          <valueString value="Patient"/>
        </parameter>
        <parameter>
          <name value="gender"/>
          <valueString value="m"/>
        </parameter>
      </Parameters>
    </resource>
  </entry>
</Bundle>
```

\[%file newfooter%\]
