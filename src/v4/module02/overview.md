---
title: FHIR 概述
type: module02
order: 103
---

## 2.13 FHIR Overview[](overview.html#2.13 "link to here")
-------------------------------------------------------

[FHIR Infrastructure ![](external.png)](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group

[Maturity Level](versions.html#maturity): N/A

[Standards Status](versions.html#std-process): [Informative](versions.html#std-process)

Welcome to the FHIR (Fast Healthcare Interoperability Resources) Specification, which is a standard for exchanging healthcare information electronically. This page provides an overview of the standard, and serves as a road map for first-time readers of the specification to help find your way around FHIR quickly.

### 2.13.1 Background[](overview.html#Background "link to here")

Healthcare records are increasingly becoming digitized. As patients move around the healthcare ecosystem, their electronic health records must be available, discoverable, and understandable. Further, to support automated clinical decision support and other machine-based processing, the data must also be structured and standardized. (See [Coming digital challenges in healthcare](change.html))

[HL7 ![](external.png)](http://hl7.org) has been addressing these challenges by producing healthcare data exchange and information modeling standards for over 20 years. FHIR is a new specification based on emerging industry approaches, but informed by years of lessons around requirements, successes and challenges gained through defining and implementing [HL7 v2 ![](external.png)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) , [HL7 v3 ![](external.png)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) and the RIM, and [CDA ![](external.png)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) . FHIR can be used as a stand-alone data exchange standard, but can and will also be used in partnership with existing widely used standards. (See [Comparing FHIR to other HL7 standards](comparison.html))

FHIR aims to simplify implementation without sacrificing information integrity. It leverages existing logical and theoretical models to provide a consistent, easy to implement, and rigorous mechanism for exchanging data between healthcare applications. FHIR has built-in mechanisms for traceability to the HL7 RIM and other important content models. This ensures alignment to HL7's previously defined patterns and best practices without requiring the implementer to have intimate knowledge of the RIM or any [HL7 v3 ![](external.png)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) derivations. (See [Comparing FHIR to other HL7 standards](comparison.html))

### 2.13.2 Components[](overview.html#Components "link to here")

The basic building block in FHIR is a [Resource](resource.html). All exchangeable content is defined as a resource. Resources all share the following set of characteristics:

*   A common way to [define](resource.html) and [represent](formats.html) them, building them from [data types](datatypes.html) that define common reusable patterns of elements
*   A common set of [metadata](resource.html#metadata)
*   A [human readable](narrative.html) part

### 2.13.3 Approach[](overview.html#Approach "link to here")

#### 2.13.3.1 Approach to information modeling[](overview.html#modeling "link to here")

The philosophy behind FHIR is to build a base set of resources that, either by themselves or when combined, satisfy the majority of common use cases. FHIR resources aim to define the information contents and structure for the core information set that is shared by most implementations. There is a [built-in extension mechanism](extensibility.html) to cover the remaining content as needed.

FHIR modeling uses a composition approach. In comparison, [HL7 v3 ![](external.png)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) modeling is based on "model by constraint" (see [Comparing FHIR to other HL7 standards](comparison.html)). With FHIR, specific use cases are usually implemented by combining resources together through the use of [resource references](references.html). Although a single resource might be useful by itself for a given use case, it is more common that resources will be combined and tailored to meet use case specific requirements. Two special kinds of resources are used to describe how resources are defined and used:

*   [Capability Statement](capabilitystatement.html) - describes the interfaces that an implementation exposes for exchange of data
*   [StructureDefinition](structuredefinition.html) - provide additional rules that serve to constrain the optionality, cardinality, terminology bindings, data types and extensions defined in the resources used by the implementation

### 2.13.4 The Specification[](overview.html#Specification "link to here")

Broadly, the FHIR specification is broken up into a [set of modules](modules.html#modules):

*   [Foundation](foundation-module.html): The basic definitional infrastructure on which the rest of the specification is built
*   [Implementer Support](implsupport-module.html): Services to help implementers make use of the specification
*   [Security & Privacy](secpriv-module.html): Documentation and services to create and maintain security, integrity and privacy
*   [Conformance](conformance-module.html): How to test conformance to the specification, and define implementation guides
*   [Terminology](terminology-module.html): Use and support of terminologies and related artifacts
*   [Linked Data](exchange-module.html): Defined methods of exchange for resources
*   [Administration](administration-module.html): Basic resources for tracking patients, practitioners, organizations, devices, substances, etc.
*   [Clinical](clinicalsummary-module.html): Core clinical content such as problems, allergies, and the care process (care plans, referrals) + more
*   [Medications](medications-module.html): Medication management and immunization tracking
*   [Diagnostics](diagnostics-module.html): Observations, Diagnostic reports and requests + related content
*   [Workflow](workflow-module.html): Managing the process of care, and technical artifacts to do with obligation management
*   [Financial](financial-module.html): Billing and Claiming support
*   [Clinical Reasoning](clinicalreasoning-module.html): Clinical Decision Support and Quality Measures

Resources have a wide range of uses, from pure clinical content such as [care plans](careplan.html) and [diagnostic reports](diagnosticreport.html) to pure infrastructure such as [Message Header](messageheader.html) and [Capability Statements](capabilitystatement.html). They all share common technical characteristics (see below for a more formal definition), but they are used in totally different fashions. Note that you do not have to use REST to make use of resources.

### 2.13.5 Where to Start[](overview.html#Start "link to here")

The best place to start is to quickly read the [Resources](resourcelist.html) list to get a sense of what resources exist and then look at the [Patient resource](patient.html) definition to see what resource definitions look like, and then read these background pages:

*   [Resource Definitions](resource.html) - basic background to how resources are defined
*   About Resources: the [Narrative](narrative.html) they all contain, and how [Resources refer to each other](references.html)
*   [Formats](formats.html): [XML](xml.html) and [JSON](json.html)
*   About [Extensibility](extensibility.html): a key way that the specification is kept simple
*   If you are coming to FHIR with a background in another HL7 standard ([HL7 v2 ![](external.png)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) , [HL7 v3 ![](external.png)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) or [CDA ![](external.png)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) ), [The Relationship between FHIR and other HL7 Standards](comparison.html) may also be useful

#### 2.13.5.1 Header Tabs[](overview.html#Headers "link to here")

These header tabs found through-out the specification are important, and many readers miss them:

![](header-tabs.png)  

Resources and the [data types](datatypes.html) that they use are presented in a concise easy to read XML-like format, but they also have detailed descriptions of their contents. In addition, most resources are mapped to several different formats, including [HL7 v2 ![](external.png)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) , the [HL7 v3 ![](external.png)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) RIM, [CDA ![](external.png)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) , DICOM, and others. Also, all resources come with at least one example (sometimes many more) and, where appropriate, with profiles that describe their use in specific circumstances. Finally, some resources include notes that help implementers understand the design rationale underlying them.

### 2.13.6 Finding Additional Information and Providing Feedback[](overview.html#Feedback "link to here")

While intended to be consumable by a variety of audiences, the FHIR specification is targeted to the implementation community - those who will actually write the software that uses the specification. To help meet the needs of the implementation community, the editors have strived to keep the specification concise to reduce the amount of reading that must be done before writing useful code. For this reason, information that is not essential to the implementation process, such as considered alternatives, points of contention, future plans, etc. have been excluded from this specification. As well, it is likely that from time-to-time, implementers will encounter situations where the specification is unclear or incomplete. Finally, there may be circumstances where the specification is broken or where a change could allow it to better meet implementer needs.

HL7 has therefore provided a number of mechanisms through which additional information about FHIR can be sought and maintained and through which support and requests for change can be made.

#### 2.13.6.1 The FHIR Confluence Pages[](overview.html#Wiki "link to here")

The FHIR project team also maintains a set of [Confluence pages ![](external.png)](https://confluence.hl7.org/display/FHIR) where development processes, methodology and design decisions are documented. Implementers and others can also contribute to Confluence to provide additional guidance and supplemental information not found in the specification. Note that Confluence content is not authoritative and is not relevant for determining conformance to the FHIR specification. As well, some Confluence content might not be up to date with the most recent version of the FHIR specification.

Pages defined include [FHIR methodology ![](external.png)](https://confluence.hl7.org/display/FHIR/Guide+to+Designing+Resources) , use of the [FHIR design tools ![](external.png)](https://confluence.hl7.org/display/FHIR/Resource+Authoring) , etc. To explore the FHIR Confluence pages, you can start at the [root page ![](external.png)](https://confluence.hl7.org/display/FHIR) 

#### 2.13.6.2 Formal Change requests[](overview.html#Change "link to here")

Formal requests for change can be submitted [here ![](external.png)](http://hl7.org/fhir-issues) . (There's a link at the bottom of each page as well.) These will be reviewed by the appropriate work group and a decision made on their incorporation into the specification, including which release (if any) they will be part of.

#### 2.13.6.3 Additional Information sources/Engagement Mechanisms[](overview.html#Engagement "link to here")

In addition to the above mechanisms, HL7 provides a Stack Overflow tag, list servers and online chat system to provide various levels of implementer support and engagement. Instructions for accessing these other mechanisms (and instructions for how best to make use of them) can be found at the [Support Links ![](external.png)](https://confluence.hl7.org/display/FHIR/Implementer+Support) .

®© HL7.org 2011+. FHIR Release 4 (v4.0.0) generated on Thu, Dec 27, 2018. [QA Page](qa.html)  
Links: [Search ![](external.png)](http://hl7.org/fhir/search.cfm) | [Version History](history.html) | [Table of Contents](toc.html) | [Credits](credits.html) | [Compare to R3 ![](external.png)](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhir%2FSTU3%2Foverview.html&doc2=http%3A%2F%2Fhl7.org%2Ffhir%2Foverview.html) | [![CC0](cc0.png)](license.html) | [Propose a change ![](external.png)](http://hl7.org/fhir-issues)