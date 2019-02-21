---
title: 数据交换版块
type: spec
order: 300
FHIR_version: r4

---

## 3.0 FHIR Exchange Module[](exchange-module.html#3.0 "link to here")
-------------------------------------------------------------------

### 3.0.1 Introduction / Index[](exchange-module.html#3.0.1 "link to here")

FHIR is designed as an interface specification - it specifies the content of the data exchanged between healthcare applications, and how the exchange is implemented and managed. FHIR defines the following methods for exchanging data between systems:

*   [RESTful API](#rest)
*   [Messaging](#msg)
*   [Documents](#doc)
*   [Services](#soa)
*   [Database / Persistent Storage](#store)

Each of these approaches can be used to exchange information, and each has its own strengths and weaknesses and applicability. Note that applications are allowed to use any other method to exchange resources; the methods described in this specification are the common methods that are used enough to justify the effort to describe or standardize their use.

#### 3.0.1.1 RESTful API[](exchange-module.html#rest "link to here")

Most implementers focus on [RESTful API](http.html). This is a client/server API designed to follow the [principles of RESTful design ![](external.png)](https://en.wikipedia.org/wiki/Representational_state_transfer) for **C**reate, **R**ead, **U**pdate and **D**elete operations, along with [**S**earch](search.html) and [**E**xecute (Operations)](operations.html) support.

The RESTful API is a general-purpose interface that can be used to [push and pull](pushpull.html) data between systems. Which is appropriate depends on architecture and deployment considerations. The RESTful API also supports [Asynchronous Use](async.html) and [GraphQL](graphql.html).

#### 3.0.1.2 Messaging[](exchange-module.html#msg "link to here")

In addition to the RESTful API, a [messaging exchange framework](messaging.html) is documented, which supports exchange between systems by sending routed messages from system to system. This exchange can be implemented on the RESTful API or using some other messaging technology.

Implementers should note that the messaging framework is not provided to fill any functional deficiency in the RESTful API (or vice versa), these frameworks are provided to allow implementers to choose how to exchange content based on their own architectural and deployment considerations. Messaging may be more suitable for exchange between disparate organizations with low levels of process integration and/or trust.

#### 3.0.1.3 Documents[](exchange-module.html#doc "link to here")

This specification also defines a [document based exchange framework](documents.html), where content to be exchanged is wrapped by a [Composition](composition.html) that provides the context of the content, and that has a fixed presentation for a human reader. The document framework is provided to help with computer-assisted human to human communication uses - which are not uncommon in healthcare.

Typically, exchanging documents is associated with exchanging clinical information across clinical governance borders, while data-based exchange using the RESTful API is appropriate within where there are well established clinical governance arrangements.

#### 3.0.1.4 Services / SOA[](exchange-module.html#soa "link to here")

In addition, this specification describes the use of FHIR in a [services framework](services.html)(e.g. a SOA). Note that any use of any of the above approaches in production is a 'service' by some or many definitions. The services description provides context regarding the use of FHIR (and particularly the RESTful API) in a wider enterprise architecture.

#### 3.0.1.5 Database / Persistent Store[](exchange-module.html#store "link to here")

Another way to make use of the resources defined by FHIR is to store them natively in a database or persistent store, where different applications or modules write and read the resources as part of their implementation. Using resources in this fashion is described here.

### 3.0.2 Security and Privacy[](exchange-module.html#secpriv "link to here")

All forms of data exchange should be appropriately secured. This requires the following:

*   Only the parties to the exchange can access the communication
*   The parties are authenticated and authorized as required
*   Access control always checks that the only the appropriate data is exchanged
*   Appropriate patient consent has been obtained for the exchange

This subject is described further in the [Security](security.html) Page.

With regard to the RESTful API, implementers should always consider the [Smart App Launch ![](external.png)](http://hl7.org/fhir/smart-app-launch/) protocol as part of the overall secure API approach

### 3.0.3 Developmental Roadmap[](exchange-module.html#roadmap "link to here")

RESTful API

This is stable and currently being balloted as Normative. No breaking changes are expected. No significant development is planned, but HL7 will continue to respond to user experience

Messaging

Messaging has only be implemented in a few projects; some of the infrastructure has not yet been used in production. It is not clear whether significant development will be needed or appropriate

Documents

Documents have mostly only been used in prototype projects, though there is considerable impetus around implementation at this time. No significant development is planned, but HL7 will continue to respond to user experience

Services

At this point in time, it's not clear whether further work is required or appropriate in terms of service orientated architecture / enterprise integration. HL7 will continue to monitor implementer experience and feedback

Database / Persistent Storage

This is a new area with considerable action at this time, and many production implementations, though RDF itself is not getting much use. At this time, HL7 is monitoring implementer experience and feedback to see whether additional standardization is required

> **Trial-Use Note:**
> 
> **Note to balloters:** There's some interest in standardizing the use of [ProtocolBuffers ![](external.png)](https://developers.google.com/protocol-buffers/) directly in the specification itself ([basis ![](external.png)](https://github.com/google/fhir) ). Ballot comments are welcome.

®© HL7.org 2011+. FHIR Release 4 (v4.0.0) generated on Thu, Dec 27, 2018. [QA Page](qa.html)  
Links: [Search ![](external.png)](http://hl7.org/fhir/search.cfm) | [Version History](history.html) | [Table of Contents](toc.html) | [Credits](credits.html) | [Compare to R3 ![](external.png)](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhir%2FSTU3%2Fexchange-module.html&doc2=http%3A%2F%2Fhl7.org%2Ffhir%2Fexchange-module.html) | [![CC0](cc0.png)](license.html) | [Propose a change ![](external.png)](http://hl7.org/fhir-issues)