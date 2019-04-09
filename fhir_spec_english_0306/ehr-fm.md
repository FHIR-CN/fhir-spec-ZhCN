\[%settitle EHR System Functional Model Map%\]
\[%file newnavbar%\]
<span id="ehr-fm"></span>
Appendix: HL7 EHR System Functional Model and FHIR
--------------------------------------------------

|                                              |                                               |                                                                                        |
|----------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt ehr%\]](%5B%wg%20ehr%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

ISO/HL7 10781 EHR System Functional Model Release 2 provides a reference list of functions that may be present in an Electronic Health Record System. While FHIR is an implementation focused on exchange of information in healthcare, this often happens in the context of an EHR system and EHR record. This table briefly describes one way that FHIR can be used to meet the requirements described in the EHR-S FM and is provided to help readers of the FHIR specification understand how FHIR can be used. There are many other equally valid ways to implement the EHR-S FM and to make use of FHIR.

EHR Function
FHIR Implementation Notes
TI.1
Security
FHIR defines parts of the security infrastructure, and delegates others to standard web-based security frameworks
TI.1.1
Entity Authentication
FHIR assumes that the users are authenticated. OAuth is the preferred mechanism
TI.1.2
Entity Authorization
FHIR does not currently provide any resources to describe or manage access-control permissions. By default, underlying web frameworks such as SAML would be used. See [the security section](security.html#binding) for a discussion of binding between FHIR and SAML
TI.1.3
Entity Access Control
See above about SAML / OAuth
TI.1.4
Patient Access Management
See [Security Labels](security-labels.html)
TI.1.5
Non-Repudiation
The [provenance resource](provenance.html) tracks the timestamps, actors, and digital signatures associated with resources
TI.1.6
Secure Data Exchange
TLS (https:) should be used for all production exchange of data. All conformant FHIR RESTful implementations SHALL be able to use TLS
TI.1.7
Secure Data Routing
FHIR allows for brokers and various forms of messaging that support assured destinations and delivery (also see IN.2.2 below)
RI.1.1.4
Information Attestation
See the [provenance resource](provenance.html)
TI.1.8
Patient Privacy and Confidentiality
FHIR does not include functionality related to this requirement, though implementations would be expected to provide this
RI.1.1
Health Record Information and Management
This is a core application of the FHIR capabilities
RI.1.22
Data Retention, Availability and Destruction
A FHIR RESTful server gives precise and fine-grained control of retention, availability and destruction of resources, all clearly described by the capability statement
RI.1.1.x.1
Auditable Records
FHIR provides the [AuditEvent](auditevent.html) resource for auditable records.
RI.2
Synchronization
FHIR supports synchronization using standard web publication/subscription methods via [Bundles](bundle.html). Bundle-based pub/sub may be push or pull based, and can include all resources of a particular type, or selected subsets of the resources. In addition, groups of resources can be exchanged in bundles, keeping a set of related resources in synchronization
RI.1.1.13
Extraction of Health Record Information
FHIR does not provide report formats, but does provide extensive search and retrieval functions to assist with building such reports
RI.1.1.1
Store and Manage Health Record Information
A FHIR RESTful server can store and manage health information persistently - see below for further information.
RI.1.2.1
Manage Structured and Unstructured Health Record Information
The dual contents of FHIR resources - structured data and XHTML narrative - provide seamless support for dealing with a mix of structured and unstructured information
TI.3
Registry and Directory Services
The FHIR [Administration resources](resourcelist.html#administrative) provide registry-based access to patients, providers, etc.
TI.4
Standard Terminologies and Terminology Services
FHIR encourages the use of standard terminologies wherever possible, and provides full support for their use through a variety of terminology related [data types](datatypes.html). FHIR defines [a terminology service infrastructure](terminology-service.html). Also, see [profiling](profiling.html), which discusses how terminology is used in a FHIR context
TI.5
Standards-based Interoperability
FHIR is a definition of a standard on which to base interoperability
TI.5.1
Interchange Standards
This is the core focus of FHIR. See below for discussion of interaction modes
TI.5.2
Interchange Standards Versioning and Maintenance
FHIR version maintenance is [described here](resource.html#version)
TI.5.3
Standards-based Application Integration
FHIR enables simple integration through use of an easy to understand, use, and debug web-based infrastructure. The same framework used within an EHR for data persistence can also offer a simple way to implement data exchange
TI.5.4
Interchange Agreements
The FHIR Conformance Statement and Resource Profile resources provide a registry-based infrastructure for individual trading partner agreements, as well as for community based ones
TI.6
Business Rules Management
FHIR does not currently address this requirement
TI.7
Workflow Management
FHIR does not currently address this requirement, though the resources and services exist to support this functionality
The EHR system functional model describes several modes for interaction between systems. Each of these can be implemented in several different ways using FHIR

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th>Interaction Modes</th>
<th>FHIR Options</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Unsolicited Notifications<br />
e.g. a patient has arrived for a clinic appointment</td>
<td><ul>
<li>Create/update new resource via HTTP</li>
<li>Push resources using Bundle</li>
<li>Send FHIR <a href="messaging.html">Message</a> (if appropriate event is defined)</li>
</ul></td>
</tr>
<tr class="even">
<td>Query/Response<br />
e.g. Is Adam Everyman known to the system? Yes, MRN is 12345678.</td>
<td><ul>
<li>Search with parameters</li>
<li>A query message (though not defined yet)</li>
</ul></td>
</tr>
<tr class="odd">
<td>Service Request and Response<br />
e.g. Laboratory Order for Fasting Blood Sugar and a response containing the results of the test.</td>
<td>Could be supported either through Messaging or SOA solutions. Request/Response support is not yet defined</td>
</tr>
<tr class="even">
<td>Information Interchange between organizations (e.g. in a RHIO, or in a National Health System)</td>
<td><ul>
<li>Pub/sub using bundles (push or pull)</li>
<li>RESTful interface</li>
<li>FHIR messaging</li>
</ul></td>
</tr>
<tr class="odd">
<td>Structured / Unstructured clinical document, e.g. dictated surgical note</td>
<td>See the <a href="documents.html">Documents</a></td>
</tr>
</tbody>
</table>

The combination of a properly secured and managed FHIR server, along with enforced use of the [AuditEvent](auditevent.html) and [Provenance](provenance.html) resources ensures that the core record management functions defined in the EHR-S FM are met (as follows). See the FHIR Record Lifecycle Event Implementation Guide for additional details.

-   Lifespan/Lifecycle tracking, including capturing source, origination and authorship information, along with tracking of views and exchanges
-   Attestation for accuracy and completeness, along with digital signature
-   A full version history with content retention
-   Retention and persistence

Additional functionality, not currently defined in FHIR, is required to ensure non-repudiation, access control, and consent tracking.

\[%file newfooter%\]
