\[%settitle Security and Privacy Module%\]
\[%file newnavbar%\]
|                                                                                    |                                                                                        |
|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| Work Group [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) & [\[%wgt sec%\]](%5B%wg%20sec%%5D) | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

<span id="root"></span>
Security and Privacy Module
---------------------------

<span id="intro"></span>
### Introduction

The Security and Privacy Module describes how to protect a FHIR server (through access control and authorization), how to document what permissions a user has granted (consent), and how to keep records about what events have been performed (audit logging and provenance). FHIR does not mandate a single technical approach to security and privacy; rather, the specification provides a set of building blocks that can be applied to create secure, private systems.

<span id="index"></span>
### Index

The Security and Privacy module includes the following materials:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Resources</strong></td>
<td><strong>Datatypes</strong></td>
<td><strong>Implementation Guidance and Principles</strong></td>
</tr>
<tr class="even">
<td><ul>
<li><a href="consent.html">Consent</a></li>
<li><a href="provenance.html">Provenance</a></li>
<li><a href="auditevent.html">Audit Event</a></li>
</ul></td>
<td><ul>
<li><a href="datatypes.html#signature">Signature</a></li>
</ul></td>
<td><ul>
<li><a href="security.html">Security Principles</a></li>
<li><a href="security-labels.html">Security Labels</a></li>
<li><a href="signatures.html">Signatures</a></li>
</ul></td>
</tr>
</tbody>
</table>

The following common use-cases are elaborated below:

-   [Security](#security) and [Privacy](#privacy)
-   [Authorization and Access Control](#authorization)
-   [Authorization considerations with Query Parameters](#query-parameters)
-   [User Identity and Access Context](#user)
-   [Security and Privacy Audit Logging](#audit)
-   [Accounting of Disclosures and Access Reports](#AoD)
-   [Privacy Consent](#privacy-consent)
-   [Provenance](#provenance)
-   [Digital and Electronic Signatures](#signature)
-   [De-Identification, Anonymization, and Pseudonymization](#deId)
-   [Security Considerations on Test Data](#testData)

<span id="security"></span>
### Security

FHIR is focused on the data access methods and encoding leveraging existing Security solutions. Security in FHIR needs to focus on the set of considerations required to ensure that data can be discovered, accessed, or altered only in accordance with expectations and policies. Implementation should leverage existing security standards and implementations to ensure that:

-   All communications can be encrypted to prevent unauthorized access.
-   No information leaks when errors occur
-   No active script content can be injected into narrative resources
-   Full audit trails can be constructed and used to detect anomalous access patterns

For general security considerations and principles, see [Security](security.html). Please leverage mature Security Frameworks covering device security, cloud security, big-data security, service-to-service security, etc. See [NIST Mobile Device Security](https://nccoe.nist.gov/projects/building_blocks/mobile_device_security) and [OWASP Mobile Security](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10). These security frameworks include prioritized lists of most important concerns.

<span id="privacy"></span>
### Privacy

Privacy in FHIR includes the set of considerations required to ensure that individual data are treated according to an individual's Privacy Principles and Privacy-By-Design. FHIR includes implementation guidance to ensure that:

-   Individual preferences can be communicated through standards-based protocols (e.g., OAuth, User-Managed Access) or using an explicit FHIR representation ([Consent](consent.html))
-   Resources can be tagged to indicate the sensitivity or confidentiality of the data they represent ([Security Labels](security-labels.html))
-   Data access records and audit logs can be shared with individuals, e.g. for accounting of disclosures ([Audit Event](auditevent.html))

<span id="uses"></span>
### Common Use Cases

<span id="authorization"></span>
#### Authorization and Access Control

*Use case:* A FHIR server should ensure that API access is allowed for authorized requests and denied for unauthorized requests.

*Approach:* Authorization details can vary according to local policy, and according to the access scenario (e.g. sharing data among institution-internal subsystems vs. sharing data with trusted partners vs. sharing data with third-party user-facing apps). In general, FHIR enables a separation of concerns between the FHIR REST API and standards-based authorization protocols like OAuth. For the use case of user-facing third-party app authorization, we recommend the OAuth-based SMART protocol see [Security: Authentication](security.html#authentication) as an externally-reviewed authorization mechanism with a real-world deployment base - but we note that community efforts are underway to explore a variety of approaches to authorization. For further details, see [Security: Authorization and Access Control](security.html#binding).

<span id="query-parameters"></span>
##### Query Parameters Considerations

*Use-Case:* When a user has restricted rights but attempts to do a query they do not have rights to, they should not be given the data. Policy should be used to determine if the user query should result in an error, zero data, or the data one would get after removing the non-authorized parameters.

*Approach:* Enforcement is by local enforcement methods. Note that community efforts are underway to explore a variety of approaches to enforcement.

*Example:* Using \_include or \_revinc to get at resources beyond those authorized. Ignoring (removing) the \_include parameter would give some results, just not the \_include Resources. This could be silently handled and thus give some results, or it could be returned as error.

<span id="user"></span>
#### User Identity and Access Context

*Use case:* "Access to protected Resources are enabled though user Role-Based, Context-Based, and/or Attribute-Based Access Control."

*Approach:* Ensure that the level of assurance for identity proofing reflects the appropriate risk, given the issued party's exposure to health information. Users should be identified and should have their Functional and/or Structural role declared when these roles are related to the functionality the user is interacting with. Roles should be conveyed using standard codes from [Security Role Vocabulary](valueset-security-role-type.html).

A purpose of use should be asserted for each requested action on a Resource. Purpose of use should be conveyed using standard codes from [Purpose of Use Vocabulary](v3/PurposeOfUse/vs.html).

When using OAuth, the requested action on a Resource for specified one or more purpose of use and the role of the user are managed by the OAuth authorization service (AS) and may be communicated in the security token where JWT tokens are used. For details, see [Security: HCS vocabulary](security-labels.html#hcs).

<span id="audit"></span>
#### Audit Logging

*Use case:* "A FHIR server should keep a complete, tamper-proof log of all API access and other security- and privacy-relevant events".

*Approach:* FHIR provides an AuditEvent resource suitable for use by FHIR clients and servers to record when a security or privacy relevant event has occurred. This form of audit logging records as much detail as reasonable at the time the event happened. The FHIR AuditEvent is aligned and cross-referenced with IHE Audit Trail and Node Authentication (ATNA) Profile. For details, see [Security: Audit](security.html#audit).

<span id="AoD"></span>
#### Accounting of Disclosures and/or Access Report

*Use case:* "A Patient should be offered a report that informs about how their data is Collected, Used, and Disclosed."

*Approach:* The AuditEvent resource can inform this report.

There are many motivations to provide a Patient with some report on how their data was used. There is a very restricted version of this in HIPAA as an "Accounting of Disclosures", there are others that would include more accesses. The result is a human readable report. The raw material used to create this report can be derived from a well recorded 'security audit log', specifically based on AuditEvent. The format of the report delivered to the Patient is not further discussed but might be: printed on paper, PDF, comma separated file, or FHIR Document made up of filtered and crafted AuditEvent Resources. The report would indicate, to the best ability, Who accessed What data from Where at When for Why purpose. The 'best ability' recognizes that some events happen during emergent conditions where some knowledge is not knowable. The report usually does need to be careful not to abuse the Privacy rights of the individual that accessed the data (Who). The report would describe the data that was accessed (What), not duplicate the data.

Some events are known to be subject to the Accounting of Disclosures report when the event happens, thus can be recorded as an Accounting of Disclosures - See [example Accounting of Disclosures](auditevent-example-disclosure.html). Other events must be pulled from the security audit log. A security audit log will record ALL actions upon data regardless of if they are reportable to the Patient. This is true because the security audit log is used for many other purposes. - See [Audit Logging](security.html#audit). These recorded AuditEvents may need to be manipulated to protect organization or employee (provider) privacy constraints. Given the large number of AuditEvents, there may be multiple records of the same actual access event, so the reporting will need to de-duplicate.

<span id="privacy-consent"></span>
#### Privacy Consent

*Use case:* "Documentation of a Patient's Privacy Consent Directive - rules for Collection, Use, and Disclosure of their health data."

*Approach:* FHIR provides a Consent resource suitable for use by FHIR clients and servers to record current Privacy Consent state. The meaning of a consent or the absence of the consent is a local policy concern. The Privacy Consent may be a pointer to privacy rules documented elsewhere, such as a policy identifier or identifier in XACML. The Privacy Consent has the ability to point at a scanned image of an ink-on-paper signing ceremony, and supports digital signatures through use of [Provenance](provenance.html). The Privacy Consent has the ability to include some simple FHIR centric base and exception rules.

All uses of FHIR Resources would be security/privacy relevant and thus should be recorded in an [AuditEvent](auditevent.html). The data access that qualifies as a Disclosure should additionally be recorded as a Disclosure, see [Disclosure Audit Event Example](auditevent-example-disclosure.html).

For Privacy Consent guidance and examples, see [Consent Resource](consent.html).

<span id="provenance"></span>
#### Provenance

*Use case:* "All FHIR Resources should be capable of having the Provenance fully described."

*Approach:* FHIR provides the Provenance resource suitable for use by FHIR clients and servers to record the full provenance details: who, what, where, when, and why. A Provenance resource can record details for Create, Update, and Delete; or any other activity. Generally, Read operations would be recorded using [AuditEvent](auditevent.html). Many Resources include these elements within; this is done when that provenance element is critical to the use of that Resource. This [overlap is expected and cross-referenced on the Five Ws pattern](fivews.html). For details, see [Provenance Resource](provenance.html).

*Use case:* "For any given query, need Provenance records also."

*Approach:* Given that a system is using Provenance records. When one needs the Provenance records in addition to the results of a query on other records (e.g. Query on MedicationRequest), then one uses reverse include to request that all Provenance records also be returned. That is to add `?_revinclude=Provenance:target`. For details, see [\_revinclude](search.html#revinclude).

<span id="signature"></span>
#### Signature

*Use case:* "Digital Signature is needed to prove authenticity, integrity, and non-repudiation."

*Approach:* FHIR Resources are often parts of Medical Record or are communicated as part of formal Medical Documentation. As such there is a need to cryptographically bind a signature so that the receiving or consuming actor can verify authenticity, integrity, and non-repudiation. This functionality is provided through the signature element in [Provenance](provenance.html) Resource. Where the signature can be any local policy agreed to signature including Digital Signature methods and Electronic Signature. For details, see [Security: Digital Signatures](signatures.html).

Digital Signatures bind cryptographically the exact contents, so that any changes will make the Digital Signature invalid. When a Resource is [created](http.html#create), or [updated](http.html#update) the server is expected to update relevant elements that it manages (id, lastupdated, etc.). These changes, although expected of normal RESTful create/update operations, will break any Digital Signature that has been calculated prior. One solution is to create the Digital Signature after the REST create operation completes, one must first confirm that the resulting created/updated Resource is as expected, then the Digital Signature is formed.

A variation of this happens in Messaging, Documents, and other interaction models. For details, see [Ramifications of storage/retrieval variations](updates.html)

<span id="deId"></span>
#### De-Identification, pseudonymization, anonymization

De-Identification is inclusive of pseudonymization and anonymization; which are the processes of reducing privacy risk by eliminating and modifying data elements to meet a targeted use-case.

Use-Case: "Requesting Client should have access to De-Identified data only."

*Trigger:* Based on an Access Control decision that results in a permit with an Obligation to De-Identify, the Results delivered to the Requesting Client would be de-identified.

*Consideration:* This assumes the system knows the type and intensity of the de-identification algorithm, where de-identification is best viewed as a process, not an algorithm - a process that reduces Privacy risk while enabling a targeted and authorized use-case.

*Modifying an element:* The de-identification process may determine that specific elements need to be modified to lower privacy risk. Some methods of modifying are: eliminating the element, setting to a static value (e.g. "removed"), fuzzing (e.g. adjusting by some random value), masking (e.g. encryption), pseudonym (e.g. replace with an alias), etc. [Narrative](narrative.html) and [Attachment](datatypes.html#Attachment) elements present particularly difficult challenges. See standards below for further details.

*Discussion:* Obviously the most important elements for de-identification are names and identifiers. FHIR resources have many different types of ids and identifiers that serve different purposes. Some (`id`s) are the basis for internal links between different resources, while identifiers are mainly - but not exclusively - for correlating with external data sources. Strategies for de-identification need to consider whether re-identification with the source system is a problem, in which case ids will need to be modified - and consistently across the resource set being de-identified. External identifiers will mostly need to be removed, but even then, where they are used for internal references within the resource set, they'll need to be changed consistently.

Then, there is the question of where to make the de-identification changes. For example, the Observation Resource has a subject element that mostly refers to a Patient resource. Should it be removed? Left and the Patient resource it refers to be de-identified? Updated to a new patient resource randomly or consistently? There are many other Reference elements on Observation that can easily be used to navigate back to the Subject; e.g., Observation.context value of Encounter or EpisodeOfCare; or Observation.performer. These also need to be de-identified, and it will depend on the intended use of the data whether these all need to be consistent with each other.

Some identifiers in Observation Resource:

-   Direct Identifiers: .identifier, .subject, .performer, .encounter, .focus, .note, .specimen, .basedOn
-   Indirect Identifiers: .category, .code, .issued, .effective\[x\], .method, .bodySite, .interpretation, .value\[x\], .component

*Emphasis:* The .specimen is a direct identifier of a particular specimen; and would be a direct identifier of a particular patient. This is a ramification of having the specimen identifier. One solution is to create pseudo specimen resources that will stand-in for the original specimen resource. This pseudo specimen management is supplied by a trusted-third-party that maintains a database of pseudo-identifiers with authorized reversibility.

Care should be taken when modifying an isModifier elements, as the modification will change the meaning of the Resource.

In practice, then, the de-identification process depends on the intended use of the data, the scope of the data being extracted, and the risk associated with the release of the data (e.g. data released into the public domain has a different risk than internal sharing of data within a tightly managed organization with strong information security policies.

*Security-label:* The resulting Resource should be marked with security-label to indicate that it has been de-identified. This would assure that downstream use doesn't mistake this Resource as representing full fidelity. These security-labels come from the Security Integrity Observation ValueSet. Some useful security-tag vocabulary: ANONYED, MASKED, PSEUDED, REDACTED

Further Standards: [Health: ISO Pseudonymization](http://www.iso.org/iso/catalogue_detail?csnumber=42807), [NIST IR 8053 - De-Identification of Personal Information](http://nvlpubs.nist.gov/nistpubs/ir/2015/NIST.IR.8053.pdf), [IHE De-Identification Handbook](http://wiki.ihe.net/index.php/Healthcare_De-Identification_Handbook), [DICOM (Part 15, Chapter E)](http://dicom.nema.org/medical/dicom/current/output/html/part15.html#chapter_E)

<span id="testData"></span>
#### Using FHIR to publish test data

Use-Case: There are times when test data is needed. Test data are data that is not associated with any real patient. Test data are usually representative of expected data that is published for the purpose of testing. Test data may be fully fabricated, synthetic, or derived from use-cases that had previously caused failures.

*Trigger:* When test data are published it may be important to identify the data as test data.

*Consideration:* This identification may be to assure that the test data is not misunderstood as real data, and that the test data is not factored into statistics or reporting. However, there is a risk that identifying test data may inappropriately thwart the intended test that the data are published to test.

*Discussion:*

Test data could be isolated in a server specific to test data.

Test data could be intermingled with real-patient data using one or both of the following methods:

-   Security-label -- All test data Resources could be tagged with PurposeOfUse HTEST
-   Test Patient -- The Patient that the data is associated with could be a clear indication of a test patient. (For example, in the USA the SSN starting with "666-" will never be issued so is commonly used as an indicator of a test patient)

*Considerations:* Note there is a risk when co-mingling test data with real patient data that someone will accidentally use test data without realizing it is test data.

<span id="roadmap"></span>
### Developmental Roadmap

In the STU3 release, FHIR includes building blocks and principles for creating secure, privacy-oriented health IT systems; FHIR does not mandate a single technical approach to security and privacy.

In future releases, we anticipate including guidance on:

-   incorporate the SMART on FHIR authorization specification, for user-authorized apps,
-   methods for organization-to-organization authorization,
-   more details about how to use digital Signatures for data integrity and non-repudiation, including an approach that supports some level of manipulation of resources (e.g. separating the entries in a bundle, or conversion between XML and JSON during processing),
-   more detailed Consent management, including support for specific consent use cases.
-   guidance and methods to support GDPR or other emerging Privacy regulations.

\[%file newfooter%\]
