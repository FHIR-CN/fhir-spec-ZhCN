\[%settitle Implementation%\]
\[%file newnavbar%\]
Clinical Safety
---------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

This specification defines data elements, resources, formats, methods and APIs for exchanging healthcare data between different participants in the healthcare process. As such, Clinical Safety is a key concern with regard to the specification and its many and various implementations.

<span id="dstu0"></span> \[%stu-note%\] This page, and the concept of *safety* in an API specification, needs further development.
Feedback is welcome [here](http://hl7.org/fhir-issues). \[%end-note%\]

### Implementer's Safety Check List

FHIR is as simple to implement as we know how to make it. However, due to the nature of healthcare, and healthcare processes, and cultural concerns, there are a number of features in FHIR that implementers are obliged to consider in order to implement safe systems.

This section is a check list to help implementers be sure that they've considered all the parts of FHIR that impact on their system design with regard to safety. Note that for this list, safety is interpreted loosely, and the list covers security and privacy issues as well.

<span id="conformance"></span>
### Conformance Related Safety Checks

These basic safety checks relate to using the FHIR specification correctly.

1.  For each resource that my system handles, my system handles the full [Life cycle](lifecycle.html) (status codes, currency issues, and erroneous entry status)
2.  For each resource that my system handles, I've reviewed the [Modifier elements](conformance-rules.html#isModifier)
3.  My system checks for [modifierExtension](extensibility.html#modifierExtension) elements
4.  My system supports [elements labeled as "MustSupport"](conformance-rules.html#mustSupport) in the [profiles](profiling.html) that apply to my system
5.  My system has documented how [distributed resource identification](managing.html#distributed) works in its relevant contexts of use, and where (and why) [contained](references.html#contained) resources are used
6.  My system manages lists of [current resources](lifecycle.html#current) correctly
7.  When other systems [return http errors from the RESTful API](http.html#summary) and [Operations](operations.html) (perhaps using [Operation Outcome](operationoutcome.html)), my system checks for them and handles them appropriately
8.  My system ensures checks for patient links (and/or merges) and handles data that is linked to patients accordingly
9.  My system publishes a [Capability Statement](capabilitystatement.html) with [StructureDefinitions](structuredefinition.html), [ValueSets](valueset.html), and [OperationDefinitions](operationdefinition.html), etc., so other implementers know how the system functions
10. All resources in use are [valid](validation.html) against the base specification and the [profiles](profiling.html) that apply to my system (see note about the [correct run-time use of validation](validation.html#correct-use))
11. I've reviewed the [Observation](observation.html) resource, and understand how `focus` is a mechanism for observations to be about someone or something other than the patient or subject of record.

<span id="conformance"></span>
### Date / Timezone Related Safety Checks

Dates and timezone issues are well-known sources of confusion and safety issues in clinical applications.

1.  My system checks for time zones and adjusts times appropriately. (note: time zones are extremely difficult to get correct - see [W3C Timezone Advice](https://www.w3.org/TR/timezone/), and note that some fields should be timezone corrected, and others should not be)
2.  My system renders dates safely for changes in culture and language (the date formats D-M-Y and M-D-Y are not differentiated for many dates, and this is a well-known source of confusion. Systems should use the month name, or otherwise be specific for each date when rendering, unless there is solid confidence that such confusion cannot arise, even in the future when information/narrative from resources will be shared much more widely)

<span id="search"></span>
### Search Related Safety Checks

These basic safety checks relate to managing the search process correctly. Mismatches in expectations between client and server (or search requester and search processor) can result in finding more resources than expected or appropriate, or much more seriously, missing resources out in search results that were expected to be present.

1.  My system takes care to ensure that clients can (for servers) or will (for clients) find the information they need when content that might reasonably be exposed using more than one FHIR resource. Possible patterns: Support a single search across the applicable resources, or expose data through each applicable resource. See discussion on [Wiki Page](https://confluence.hl7.org/display/FHIR/Managing+Overlap+Between+Resources) for further information

**For clients**

1.  My system will display warnings returned by the server to the user
2.  My system checks whether the server processed all the requested search parameter, and is safe if servers ignore parameters (typically, either filters locally or warns the user)

**For Servers**

1.  My system caters for [parameters that have missing values](search.html#missing) when doing search operations, and responds correctly to the client with regard to [erroneous search parameters](search.html#errors)
2.  My system includes appropriate default filters when searching based on patient context - e.g. filtering out entered-in-error records, filtering to only include active, living patients if appropriate, and clearly documents these (preferably including them in the self link for a search

<span id="conformance"></span>
### Deletion Safety Checks

Deleting records and/or marking records as no longer valid is a well known source of safety issues in all applications. This specification allows for resources to be deleted, but does not require systems to behave in any particular fashion.

1.  For each resource, I have checked whether resources can be deleted, and/or how records are marked as incorrect/no longer relevant
2.  Deletion of records (or equivalent updates in status) flow through the system so any replicated copies are deleted/updated
3.  (If a server) my documentation about deleted resources is clear, and my test sandbox (if exists) has deleted/error record cases in the test data

<span id="privacy"></span>
### Privacy Related Safety Checks

FHIR defines a set of capabilities to support data exchange. Not all the capabilities that FHIR enables may be appropriate or legal for use in some combinations of context and jurisdiction (e.g. HIPAA for exchange between institutions). It is the responsibility of implementers to ensure that relevant regulations and other requirements are met.

1.  My system checks that the right [Patient consent](consent.html) has been granted (where applicable)
2.  My system sends an [Accounting of Disclosure](secpriv-module.html#AoD) to the consenter as requested when permitted actions on resources are performed using an [AuditEvent](auditevent.html) Resource

<span id="security-framework"></span>
### Security Related Safety Checks

Basic Context:

1.  My system ensures that system clocks are synchronized using a protocol like NTP or SNTP, or my server is robust against clients that have the wrong clock set
2.  My system uses security methods for an API to authenticate where Domain Name System (DNS) responses are coming from and ensure that they are valid

Communications:

1.  Production exchange of patient or other sensitive data will always use some form of [encryption on the wire](security.html#http)
2.  Where resources are exchanged using [HTTP](security.html#http), [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) should be utilized to protect the communications channel
3.  Where resources are exchanged using email, [S/MIME](https://en.wikipedia.org/wiki/S/MIME) should be used to protect the end-to-end communication
4.  Production exchange should utilize recommendations for [Best-Current-Practice on TLS in BCP 195](https://tools.ietf.org/html/bcp195)

Authentication/Authorization:

Note: Users/Clients may be identified and authenticated in any way desired. For web-centric use, OAuth is recommended.

1.  My system utilizes a risk and use case [appropriate OAuth profile](security.html#oauth) (preferably [Smart App Launch](http://hl7.org/fhir/smart-app-launch)), with a [clear policy on authentication strength](security.html#authentication)
2.  My system uses [OpenID Connect](https://openid.net/connect/) (or other suitable authentication protocol) to verify identity of end user, where it is necessary that end-users be identified to the client application, and has a clear policy on [identity proofing](secpriv-module.html#user)

Access Control:

1.  My system applies appropriate access control to every request, using a combination of requester’s clearance (ABAC) and/or roles (RBAC)
2.  My system considers [security labels](security-labels.html) on the affected resources when making access control decisions

Integrity:

1.  My system can [render narratives properly](narrative.html#css) and [securely](security.html#narrative)(where they are used)
2.  My system [validates all input received](validation.html) (whether in resource format or other) from other actors so that it data is well-formed and does not contain content that would cause unwanted system behavior
3.  My system makes the right [Provenance](provenance.html) statements and [AuditEvent](auditevent.html) logs, and uses the right [security labels](security-labels.html#core) where appropriate

<span id="other"></span>
### Other Safety Checks

Obviously, this list is only a small part of the overall safety check list for an application, which will have checks regarding jurisdictionally mandated policies, internal integrity, etc.

In addition, server developers should check these specific additional checks for client convenience:

1.  Server: CORS ([cross-origin resource sharing](http://enable-cors.org/)) is appropriately enabled (many clients are Javascript apps running in a browser)
2.  JSON is supported (many clients are Javascript apps running in a browser; XML is inconvenient at best)
3.  JSON is returned correctly when errors happen (clients often don't handle HTML errors well)
4.  The \_format header is supported correctly
5.  Errors are trapped and an OperationOutcome returned

\[%file newfooter%\]
