\[%settitle Financial Module%\]
\[%file newnavbar%\]
|                                            |                                                                                        |
|--------------------------------------------|----------------------------------------------------------------------------------------|
| Work Group [\[%wgt fm%\]](%5B%wg%20fm%%5D) | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

<span id="root"></span>
Financial Module
----------------

<span id="intro"></span>
### Introduction

The Financial module covers the resources and services provided by FHIR to support the costing, financial transactions and billing which occur within a healthcare provider as well as the eligibility, enrollment, authorizations, claims and payments which occur between healthcare providers and insurers and the reporting and notification between insurers and subscribers and patients.

See also the [Administration](administration-module.html) and [WorkFlow](workflow-module.html) modules.

<span id="index"></span>
### Index

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><ul>
<li><a href="account.html">Account</a></li>
<li><a href="contract.html">Contract</a></li>
<li><a href="coverage.html">Coverage</a></li>
<li><a href="coverageeligibilityrequest.html">CoverageEligibilityRequest</a></li>
<li><a href="coverageeligibilityresponse.html">CoverageEligibilityResponse</a></li>
</ul></td>
<td><ul>
<li><a href="enrollmentrequest.html">EnrollmentRequest</a></li>
<li><a href="enrollmentresponse.html">EnrollmentResponse</a></li>
<li><a href="claim.html">Claim</a></li>
<li><a href="claimresponse.html">ClaimResponse</a></li>
</ul></td>
<td><ul>
<li><a href="paymentnotice.html">PaymentNotice</a></li>
<li><a href="paymentreconciliation.html">PaymentReconciliation</a></li>
<li><a href="explanationofbenefit.html">ExplanationOfBenefit</a></li>
<li><a href="visionprescription.html">VisionPrescription</a></li>
</ul></td>
</tr>
</tbody>
</table>

<img src="financial-module.png" alt="Image showing the relationship between the financial resources" width="658" />

#### Support

Administrative

**Name**
**Aliases**
**Description**
\[%res-item Account%\] \[%res-item Contract%\] \[%res-item Coverage%\] \[%res-item CoverageEligibilityRequest%\] \[%res-item CoverageEligibilityResponse%\] \[%res-item EnrollmentRequest%\] \[%res-item EnrollmentResponse%\] \[%res-item VisionPrescription%\]
#### Billing

Claims, processing and responses

**Name**
**Aliases**
**Description**
\[%res-item Claim%\] \[%res-item ClaimResponse%\]
#### Payment

Used to support service payment processing and reporting

**Name**
**Aliases**
**Description**
\[%res-item PaymentNotice%\] \[%res-item PaymentReconciliation%\]
#### Other

Patient reporting and other purposes

**Name**
**Aliases**
**Description**
\[%res-item ExplanationOfBenefit%\]
Additional Resources will be added in the future. A list of hypothesized resources can be found on the [HL7 Confluence](https://confluence.hl7.org/display/FHIR/Resource+Types). Feel free to add any you think are missing or engage with one of the [HL7 Work Groups](http://www.hl7.org/Special/committees/index.cfm) to submit a [proposal](https://confluence.hl7.org/display/FHIR/Resource+Proposals) to define a resource of particular interest.

<span id="secpriv"></span>
### Security and Privacy

Financial information in general and in particular when related to or including health information, such as claims data, are typically considered Protected Health Information and as such must be afforded the same protection and safeguards as would be afforded to purely clinical identified health data.

The Security and Privacy measures associated with FHIR, such as the use of Security labels and tags in the resource.meta, are encouraged in addition to the use of whatever measures for authorization and encryption are supported by the chosen exchange model, e.g. FHIR REST, Web Services, Direct, MLLP, SMTP and others.

For more general considerations, see [the Security and Privacy module](secpriv-module.html).

<span id="fingloss"></span>
### Glossary

Financial information in general and in particular when related to or including health information, such as claims data, are typically considered Protected Health Information and as such must be afforded the same protection and safeguards as would be afforded to purely clinical identified health data.

|                         |                                                        |                                      |                                                                                                                                                                                                                                                                                                                                       |
|-------------------------|--------------------------------------------------------|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Term**                | **Alias**                                              | **Resource Type**                    | **Description**                                                                                                                                                                                                                                                                                                                       |
| Adjudication            | Claim, Preauthorization or Predetermination Processing | ClaimResponse                        | The processing by an insurer of a claim, preauthorization or predetermination to determine under the insurance plan what if any benefits are or would be payable.                                                                                                                                                                     |
| Assignment of Benefit   | Assignment                                             | n/a                                  | When a Beneficiary directs that any benefits they receive from the adjudication of a claim may be paid to the service provider who issued the claim.                                                                                                                                                                                  |
| Attachment              |                                                        | Communication                        | A collection of information objects sent to a party to support their understanding or processing of another resource such as a claim.                                                                                                                                                                                                 |
| Beneficiary             | Patient                                                | Patient                              | The party whose health care expenses may be covered by a policy issued by an Insurer.                                                                                                                                                                                                                                                 |
| Benefit Amount          | Benefit                                                | n/a                                  | The amount payable under an insurance policy for a given expense incurred by a patient.                                                                                                                                                                                                                                               |
| Claim                   | Claim                                                  | Claim                                | A request to an Insurer to adjudicate the supplied charges for health care goods and services under the identified policy and to pay the determined Benefit amount, if any.                                                                                                                                                           |
| Coordination of Benefit | COB                                                    | n/a                                  | The rules, usually regionally defined, which govern the order of application of multiple Insurance coverages or Self-Pay to a given suite of health care expenses.                                                                                                                                                                    |
| Dependent               |                                                        | Patient, RelatedPerson               | A person who receives their coverage via a policy which is own or subscribed to by another. Typically, these include spouses, partners and minor children but may also include students, parents and disabled persons.                                                                                                                |
| Insurer                 | Payer, Payor                                           | Organization                         | A public or private insurer which will adjudicate Claims for health care goods and services to determine if the there is any benefit payable, amount due, under the policy which covers the patient.                                                                                                                                  |
| Network                 |                                                        | n/a                                  | An insurer defined grouping of Providers for which the Beneficiary's plan preferentially covers the costs of treatment, e.g. closed, rental, etc.                                                                                                                                                                                     |
| Payer                   | Payor, Insurer                                         | Organization                         | A public or private insurer.                                                                                                                                                                                                                                                                                                          |
| Payor                   | Payer, Insurer                                         | Organization                         | A public or private insurer.                                                                                                                                                                                                                                                                                                          |
| Policy                  |                                                        | Contract                             | A contract between an Insurer and an individual or other entity such as an employer to reimburse covered parties (Beneficiaries) for some or all of a prescribed suite of health-related goods and services.                                                                                                                          |
| Policy Holder           | Policy owner                                           | Patient, RelatedPerson, Organization | The party which owns the policy. It may be the employer for work-related policies or the individual for purchased or public policies.                                                                                                                                                                                                 |
| Preauthorization        | Prior Authorization, Pre-Auth                          | Claim                                | A request to an Insurer to adjudicate the supplied ***proposed future*** charges for health care goods and services under the identified policy and to approve the services and provide the expected benefit amounts and potentially to reserve funds to pay the benefits when Claims for the indicated services are later submitted. |
| Predetermination        | Pre-Determination, PreD                                | Claim                                | A request to an Insurer to adjudicate the supplied ***'what if'*** charges for health care goods and services under the identified policy and report back what the Benefit payable would be had the services actually been provided.                                                                                                  |
| Solicited Attachment    |                                                        | Communication                        | An attachment sent to provide supporting information in response to having received a request for additional information.                                                                                                                                                                                                             |
| Subscriber              |                                                        | Patient, RelatedPerson               | The person who signs-up for the coverage. May be an employee or person with dependents.                                                                                                                                                                                                                                               |
| Unsolicited Attachment  |                                                        | Communication                        | An attachment sent to provide supporting information without first having received a request for additional information.                                                                                                                                                                                                              |

<span id="uses"></span>
### Common Use Cases

The table below details various common business activities which occur in the financial realm, and the focal resources which may be exchanged, along with supporting resources, to accomplish the business activities. Whether the resources specified are actually needed requires consideration of the business itself and the exchange methodology and transport being used.

For example: If a content model is not required to obtain the appropriate status element then a SEARCH (GET) may be used, however if a content model is required to support the request for information then the content model will need to be CREATEd (POST). Alternately, if FHIR Operations are being used then the specified focal resource may be employed as one of the Operation parameters or might not be required.

|                                                   |                                                                                          |                                                                                |
|---------------------------------------------------|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| **Business Activity**                             | **Request Resource**                                                                     | **Response Resource**                                                          |
| Eligibility Check                                 | [CoverageEligibilityRequest](coverageeligibilityrequest.html)                            | [CoverageEligibilityResponse](coverageeligibilityresponse.html)                |
| Enrollment Update                                 | [EnrollmentRequest](enrollmentrequest.html)                                              | [EnrollmentResponse](enrollmentresponse.html)                                  |
| Claim                                             | [Claim](claim.html) (type={discipline}, use=claim)                                       | [ClaimResponse](claimresponse.html)                                            |
| Claim with attachments                            | [Bundle](bundle.html) containing [Claim](claim.html) and the attachments                 | [ClaimResponse](claimresponse.html)                                            |
| Predetermination                                  | [Claim](claim.html) (type={discipline}, use=predetermination)                            | [ClaimResponse](claimresponse.html)                                            |
| Preauthorization                                  | [Claim](claim.html) (type={discipline}, use=preauthorization)                            | [ClaimResponse](claimresponse.html)                                            |
| Reversal<sup>[Cancel](#cancel)</sup>              | [Task](task.html) (code=cancel)                                                          | [Task](task.html) (optional output=[ClaimResponse](claimresponse.html))        |
| Nullify<sup>[Nullify](#nullify)</sup>             | [Task](task.html) (code=nullify)                                                         | [Task](task.html) (output=error codes)                                         |
| Release<sup>[Release](#release)</sup>             | [Task](task.html) (code=release)                                                         | [Task](task.html) (output=error codes)                                         |
| Re-adjudication<sup>[Reprocess](#reprocess)</sup> | [Task](task.html) (code=reprocess)                                                       | [Task](task.html) (output=[ClaimResponse](claimresponse.html))                 |
| Status Check<sup>[Status](#status)</sup>          | [Task](task.html) (code=status)                                                          | [Task](task.html) (output=status code)                                         |
| Pended Check (Polling)<sup>[Poll](#poll)</sup>    | [Task](task.html) (code=poll)                                                            | [Task](task.html) (output=[{Resource}](resourcelist.html))                     |
| Payment Notice                                    | [Task](task.html) (code=deliver, input=[PaymentNotice](paymentnotice.html))              | [Task](task.html) (output=error codes)                                         |
| Payment Reconciliation                            | [Task](task.html) (code=poll, input=[PaymentReconciliation](paymentreconciliation.html)) | [Task](task.html) (output=[PaymentReconciliation](paymentreconciliation.html)) |
| Send Attachments                                  | [Task](task.html) (code=deliver, input=[Communication](communication.html))              | [Task](task.html) (output=error codes)                                         |
| Request Attachments                               | [Task](task.html) (code=poll, input=[CommunicationRequest](communicationrequest.html))   | [Task](task.html) (output=[CommunicationRequest](communicationrequest.html))   |
| Request an Explanation of Benefits                | [Task](task.html) (code=poll, input=[ExplanationOfBenefit](explanationofbenefit.html))   | [Task](task.html) (output=[ExplanationOfBenefit](explanationofbenefit.html))   |

**{discipline}** means the type of claim: OralHealth, Vision, Pharmacy, Professional or Institutional.

**{Resource}** means any pended or undelivered resource subject to the selection details specified in the request.

<span id="tasks"></span>
### Tasks

See the Financial examples in [Task](task.html).

In addition to supplying a reference to a focal resource in the .focus element, where appropriate an .input element of type 'origresponse' may also be provided with a reference to the resource which was the original response to the focal resource.

<span id="cancel"></span>
#### Cancel

The **Cancel** is the formal request to cease processing an incomplete prior request or to reverse a completed prior request or information submission. A copy of the original request may be retained. The Task will be updated to indicate whether the requested action was accepted and successful or whether errors were found in the request and may contain a reference to the ClaimResponse or such other resource as may be appropriate for expressing the outcome of the cancellation.

<span id="nullify"></span>
#### Nullify

The **Nullify** is the formal request to cease processing an incomplete prior request or to reverse a completed prior request or information submission. All copies of the original submission are to be purged, although audit logs may be retained. The Task will be updated to indicate whether the requested action was accepted and successful or whether errors were found in the request.

<span id="poll"></span>
#### Poll

**Poll** provides supporting information for the poll request. The response to a Poll is a Task referring to: a previously undelivered response Resource; a Bundle containing one or more Resources; or, a Task which may contain errors.

A simple Poll request, one which doesn't specify additional .input parameters: origresponse, include, exclude, period or count; would return any single pended resource. Specific types of business behaviors may be supported by providing values for the filtering elements in the .input element, for example:

-   Get any pended resource - no filters specified
-   Get deferred response to a Claim - specify the Claim in the .focus and optionally the original response in 'origresponse'
-   Get all supporting information - specify 'Communication' as an 'include'
-   Get an Explanation of Benefit - specify 'ExplanationOfBenefit' as an 'include'
-   Get any resource except Explanation of Benefit - specify 'ExplanationOfBenefit' as an 'exclude'
-   Get a payment reconciliation - specify a 'period' which contains the expected reconciliation creation date, and specify 'PaymentReconciliation' as an 'include'
-   Get a bundle containing more than one resource - specify the maximum number in 'count'

Upon processing of the request, the Task or Bundle may contain errors or a reference to the resource(s) found.

<span id="release"></span>
#### Release

**Release** is the formal request for the release of any allocation or reserved resources such as funds or products reserved, for example on a preauthorization, which have not been consumed, e.g. as indicated on claims, and which are no longer required. The preauthorization which request ed the reservation will be identified in the .focus element and the insurer's response confirming the reservation may be provided as a .input element.

<span id="reprocess"></span>
#### Reprocess

**Reprocess** indicates the resource which is to be reprocessed in the .focus element, for example a claim to be re-adjudicated or a specimen or diagnostic image to be re-examined, and provides both supporting information for the reprocessing and the line items which are to be reprocessed in the .input element.

This is necessary for the limited supporters who require the ability to formally request the reprocessing of specified service sub-trees from an already processed resource such as a previously adjudicated Claim. Upon processing of the request the Task may contain errors or a reference to the ClaimResponse or such other resource as may be appropriate for expressing the outcome of the reprocessing.

<span id="status"></span>
#### Status

**Status** indicates the resource for which the processing status is requested in the .focus element and provides any supporting information for the status request. The

This is a formal request for systems which require requisition-level information or transports which don't support a 'Get Operation', for the processing status of a previously submitted processing request.

Upon processing of the status request the Task may contain errors or a .output parameter of 'status' containing the status of outcome code of the processing of the targeted resource.

<span id="order"></span>
### Relative Order of Use

The table below details the relative order of events and use of financial resources for patient care during the care cycle. Not all steps or information exchanges may occur. Supporting information may be required more frequently than has been depicted below.

|                                                                                                 |                                                                 |
|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| **Business Activity**                                                                           | **Focal Resource**                                              |
| **Patient visits Provider**                                                                     |                                                                 |
| Provider checks for valid insurance coverage                                                    | [CoverageEligibilityRequest](coverageeligibilityrequest.html)   |
| Insurer responds with coverage status and optional plan details                                 | [CoverageEligibilityResponse](coverageeligibilityresponse.html) |
| **Provider examines Patient and reviews treatment options**                                     |                                                                 |
| Provider submits Predetermination(s) for treatment options to determine potential reimbursement | [Claim](claim.html) {use=predetermination}                      |
| Insurer responds with potential reimbursement                                                   | [ClaimResponse](claimresponse.html)                             |
| **Provider and Patient determine treatment plan**                                               |                                                                 |
| Treatment plan submitted to Insurer to reserve funds                                            | [Claim](claim.html) {use=preauthorization}                      |
| Insurer acknowledges receipt of preauthorization                                                | [ClaimResponse](claimresponse.html)                             |
| Insurer requests additional information                                                         | [CommunicationRequest](communicationrequest.html)               |
| Provider submits supporting information                                                         | [Communication](communication.html)                             |
| Insurer provides adjudicated response to pre-authorization                                      | [ClaimResponse](claimresponse.html)                             |
| Provider checks on status of pre-authorization processing                                       | [Task](task.html) {code=status}                                 |
| Insurer responds indicating adjudication is ready                                               | [Task](task.html)                                               |
| Provider retrieves pre-authorization adjudication                                               | READ or [Task](task.html) {code=poll}                           |
| **Provider provides treatment**                                                                 |                                                                 |
| Provider submits patient's claim for reimbursement                                              | [Claim](claim.html) {use=claim}                                 |
| Insurer responds with claim adjudication                                                        | [ClaimResponse](claimresponse.html)                             |
| **Patient leaves treatment setting**                                                            |                                                                 |
| Patient requests an Explanation of Benefit for their Personal Health Record application         | READ or [Task](task.html) {code=poll}                           |
| Insurer responds with Explanation of Benefit                                                    | [ExplanationOfBenefit](explanationofbenefit.html)               |
| Provider requests the payment details associated with a bulk payment                            | SEARCH or [Task](task.html) {code=poll}                         |
| Insurer responds with a Payment Reconciliation                                                  | [PaymentReconciliation](paymentreconciliation.html)             |
| Insurer notifies provider that payment has been issued                                          | [PaymentNotice](paymentnotice.html)                             |
| Insurer notifies parties that payment funds have been received                                  | [PaymentNotice](paymentnotice.html)                             |

<span id="resource-status"></span>
### Resource Status Life-cycle

Financial resources, such as claim and eligibility resources, begin with the status 'draft' and continue with this status during the development of the resource. When a resource is exchanged with an external party, for example when a provider claim is sent or otherwise created on the insurer's system before the exchange the status of the claim shall be changed to 'active'. A resource with the 'active' status is immutable and cannot be edited except for further change to the status in the event the resource is subsequently canceled resulting in a status of 'cancel'.

In the event that a resource is determined to have been entered in error, for example a wrong date of service or billing code, while the status is 'draft' then the status may be changed to 'entered-in-error' and no further editing of the resource is permitted. If the resource status is 'active' when the error is noted, then the resource must be canceled and further interaction with whatever parties have been supplied the resource may be required to halt any processing or reverse any effects of the resource prior to creating an amended instance.

<span id="secondary-use"></span>
### Secondary Uses

In addition to their primary use of conveying patient billing information to insurers for reimbursement either to the subscriber or the provider ( assignment of benefit), many of the financial resources, such as [Claim](claim.html) and [ExplanationOfBenefit](explanationofbenefit.html), may be used to export data to other agencies to support reporting and analytics. Consequently the cardinalities of many elements are set to optional, '0..', to support reporting, for example of partial adjudications, where the cardinality for a normal claim profile or claim response profile would expect the cardinality to required, '1..'.

Profiles will usually be necessary to set tight constraints on cardinalities, require jurisdictional terminologies, and eliminate or introduce elements require to support various business needs and discipline requirements.

<span id="attachments"></span>
### Attachments - Supporting Information

There is often a need to provide supporting information, commonly referred to as **attachments**, to document the need for a service and/or to confirm that the good or service was authorized or rendered. This information may be in many forms, including: scanned documents, PDFs, word processing files, X-Rays, images, CDAs and FHIR Resources.

Supporting information may be provided, as a reference or the actual material, to support the [Claim](claim.html) (complete claim or Preauthorization) or [ExplanationOfBenefit](explanationofbenefit.html) in a variety of manners:

-   **Included**: in the *{resource}*.supportingInfo section;
-   **Unsolicited**: in a [Communication](communication.html) which refers to the Claim or Explanation of Benefit; or
-   **Solicited**: in a [Communication](communication.html) in response to a [CommunicationRequest](communicationrequest.html) from the insurer requesting more information; or
-   **Input**: in the input parameters of a FHIR operation or Task.input element if a [Task](task.html) resource is used.

<span id="subrogation"></span>
### Subrogation - Insurers recovering costs from other insurers

It is not always appropriate to send a Claim, or other eClaim requests such as eligibility or pre-authorizations, to some insurers. This may be due to jurisdictional rules, for example the national health program may pay for workplace accident claims then recover costs directly against that program, or there may be no direct relationship between the provider and the insurer, for example for injury caused by another party or covered under property or accident insurance, the patient's primary health insurer may pay for services then recover a portion of their costs from that other insurer.

To support the downstream recovery of costs from the appropriate insurer it is necessary to supply the insurance coverage information for all logically potentially applicable coverages and to flag those which are provided for subrogation so that both the provider and payor systems know whether to expect to submit eClaims requests to or expect eClaims responses from these insurers. In the specific case of the Claim resource (claim, predetermination, preauthorization) the provider would list all insurance coverages, including only work or accident related if appropriate, but send Claims only to non-subrogation coverages (Coverage.subrogation=false) and not include ClaimResponses, nor would payors expect ClaimResponses to be provided, for subrogated coverages.

<span id="cob"></span>
### Coordination of Benefit - Handling multiple insurance coverages

When a patient has multiple [Coverages](coverage.html) there will generally be agreement within the jurisdiction as to the order of application of claims recovery against the coverages which is referred to as the Coordination of Benefit (COB) order. This would also be the order used to request preauthorization and predeterminations. Coverage eligibility is typically independent of the COB order as it is coverage specific.

While the jurisdiction rules must be consulted for COB specifics, generally: risk specific polices apply before risk-general policies; national policies will apply before personal or top-up policies; coverage obtained with full-time employment applies before coverage obtained with part-time employment; policies where the patient is the subscriber apply before a spouse's policy; and, there will be some understanding as to the order of application for policies which apply to dependents, for example, birthday order of the subscribers.

When sending Claims down the COB order all logically applicable policies will be listed, so that insurers may confirm adherence to the COB order, and, aside from subrogated coverages, will include the [ClaimResponses](claimresponse.html) from any coverages appearing earlier in the COB order so that each insurer may correctly calculate their portion of the overall cost of products and services supplied. The claims work their way through the COB order until the order is exhausted or there is no further outstanding balance, whichever comes first.

While it is most common, it is not always the case that all claims originate with the provider. In some jurisdictions, in some or all cases, the primary health insurer takes or is assigned responsibility to obtain the [ClaimResponses](claimresponse.html) from downstream insurers and to return the suite of [ClaimResponses](claimresponse.html) to the provider. This is similar to subrogation in that it removes the claim-cycle work from the provider but unlike subrogation the individual insurers still make their payments to the provider, if Assignment of Benefit is agreed, and a reversal of the base claim often requires the provider to handle reversal of the downstream claims as well.

<span id="batch"></span>
### Batches - Handling multiple eClaim requests or responses within a single exchange

eClaims request and response resources may be exchanged between providers and payors individually or via batches. eClaim requests, individual and batches, may be created on a payor system via FHIR REST or sent to the payor, either synchronously via FHIR operations or another request-response protocol such as: WSI Web Services, a SOA exchange, MLLP, etc.

#### Individual eClaim Requests and Responses

An individual eClaim request or response, for example a [Claim](claim.html) (use=claim), may be either a simple Claim resource which refers to or contains any supporting resources or [Bundle](bundle.html) resource containing a single request, e.g. a [Claim](claim.html), and any associated resources (Patient, Practitioner, Organization, Coverage, etc.).

#### eClaim Batches

A batch of eClaim requests or responses is a ([FHIR Bundle](bundle.html)) containing one or more eClaim requests or responses, as above. The batch is simply a 'bag' of request or responses, typically of a consistent type of request or response, for example: all eligibility, preauthorizations, claim, payment notifications, etc. There is no assurance provided that when receiving a batch of 100 claim responses that they relate to the 100 claims just submitted.

<span id="real-time"></span>
### Real-time eClaims Exchange

The eClaims resources are intended to support the real-time exchange of eClaim request and responses. While certain eligibility, claims, preauthorizations and predeterminations may be processed in real-time there are many cases where they cannot due to the complexity of the material submitted, the maturity of the jurisdictional styles and insurer processing systems, and the inclusion or requirements for supporting information which tends to require manual review. Therefore, in some cases the eClaim response will only indicate the receipt and typically validation that the request is processable (or that it contain errors which inhibit processing).

Deferred responses, those which could not be returned in real-time, and those returned asynchronously may be obtained either by FHIR REST (a GET or SEARCH) or via a [Poll](#poll) depending upon the style of information exchange supported.

<span id="roadmap"></span>
### Developmental Roadmap

The Financial Management Work Group (FM) is responsible for two subdomains:

Financial Accounts and Billing (FIAB) - resources for accounts, charges (internal costing transactions) and patient billing, and
Financial Claims and Reimbursement (FICR) - insurance information, enrollment, eligibility, predetermination, preauthorization, claims, patient reporting and payments.

To date FM has been focusing on the resources required to support the exchange of claims and related information between health care providers and insurers. The first draft of this work is nearing completion with the release of the first Financial Standard for Trial Use in STU4 of FHIR. Over the next year further refinements will be expected as implementers begin developing regional profiles and begin live pilots with resources.

Once the above is well underway FM can then look to developing the Enrollment-related resources and the resources to support the FIAB functions.

<span id="terminology"></span>
### Terminology

In many cases an **example** valueset has been provided in this release. Financial Management will be devoting effort in the preparation to Release 5 of FHIR to develop more representative example sets and to determine where global codesets exist such that some of the valuesets may be elevated in strength to extensible or required.

\[%file newfooter%\]
