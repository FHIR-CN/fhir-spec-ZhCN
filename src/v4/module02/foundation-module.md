---
title: 基础版块
type: module02
order: 200
FHIR_version: r4

---

## 2.0 Foundation Module[](foundation-module.html#2.0 "link to here")
------------------------------------------------------------------

The Foundation Module is responsible for the overall infrastructure of the FHIR specification. Every implementer works with the content in the foundation module whichever way they use FHIR.

The Foundation Module maintains most of the basic [documentation](documentation.html) for the FHIR specification. In addition, the Foundation Module includes the following resources:

**Foundation Framework**

*   [Resource](resource.html)
*   [DomainResource](domainresource.html)
*   [Basic](basic.html)
*   [Binary](binary.html)
*   [Bundle](bundle.html)

Content Management Resources.

*   [Questionnaire](questionnaire.html)
*   [QuestionnaireResponse](questionnaireresponse.html)
*   [List](list.html)
*   [Composition](composition.html)
*   [DocumentReference](documentreference.html)
*   [DocumentManifest](documentmanifest.html)

Data Exchange Resources.

*   [OperationOutcome](operationoutcome.html)
*   [Parameters](parameters.html)
*   [Subscription](subscription.html)
*   [MessageHeader](messageheader.html)
*   [MessageDefinition](messagedefinition.html)

### 2.0.1 Relationships with other modules[](foundation-module.html#secpriv "link to here")

*   All the other modules depend on the foundation module
*   The [Exchange module](exchange-module.html) builds on the foundation model by defining the recognized methods for exchange of resources
*   The [Terminology module](terminology-module.html) provides the formal basis for using Concepts defined in Code Systems in the definitions
*   The [Conformance module](conformance-module.html) provides the basis for extending the foundation for national and local use
*   The [Security & Privacy](secpriv-module.html) provides the linking framework to external standards for security and privacy
*   The [Implementation Support module](implsupport-module.html) builds on the foundation to provide testing and reference implementations

### 2.0.2 Developmental Roadmap[](foundation-module.html#roadmap "link to here")

Several components of the foundation module have now reached normative status. The focus over the next 18-24 months as the 5th release of FHIR is prepared is to focus on some of the non-normative elements and move them towards normative status, such as Questionnaire, List, DocumentReference and Subscription. Exactly which resources will be candidates for normative release will be driven, in part, by the degree of implementation - and whether that implementation is communicated back to HL7.

®© HL7.org 2011+. FHIR Release 4 (v4.0.0) generated on Thu, Dec 27, 2018. [QA Page](qa.html)  
Links: [Search ![](external.png)](http://hl7.org/fhir/search.cfm) | [Version History](history.html) | [Table of Contents](toc.html) | [Credits](credits.html) | [Compare to R3 ![](external.png)](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhir%2FSTU3%2Ffoundation-module.html&doc2=http%3A%2F%2Fhl7.org%2Ffhir%2Ffoundation-module.html) | [![CC0](cc0.png)](license.html) | [Propose a change ![](external.png)](http://hl7.org/fhir-issues)