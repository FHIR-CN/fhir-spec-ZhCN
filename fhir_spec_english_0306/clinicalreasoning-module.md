\[%settitle Clinical Reasoning%\]
\[%file newnavbar%\]
|                                                                                  |                                                                                        |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| Work Group [\[%wgt cds%\]](%5B%wg%20cds%%5D) & [\[%wgt cqi%\]](%5B%wg%20cqi%%5D) | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

<span id="root"></span>
Clinical Reasoning
------------------

<span id="intro"></span>
### Introduction

The Clinical Reasoning module provides resources and operations to enable the representation, distribution, and evaluation of clinical knowledge artifacts such as clinical decision support rules, quality measures, public health indicators, order sets, and clinical protocols. In addition, the module describes how expression languages can be used throughout the specification to provide dynamic capabilities.

Clinical Reasoning involves the ability to represent and encode clinical knowledge in a very broad sense so that it can be integrated into clinical systems. This encoding may be as simple as controlling whether or not a particular section of an order set appears based on the conditions that a patient has, or it may be as complex as representing the care pathway for a patient with multiple conditions.

<span id="scope"></span>
#### Scope

The Clinical Reasoning module focuses on enabling two primary use cases:

1.  **Sharing** - The ability to represent clinical knowledge artifacts such as decision support rules, order sets, clinical protocols, and quality measures, and to do so in a way that enables those artifacts to be shared across all organizations involved in care management and delivery.
2.  **Evaluation** - The ability to evaluate clinical knowledge artifacts in the context of a specific patient or population, including the ability to request decision support guidance, impact clinical workflow, and retrospectively assess clinical quality metrics.

To enable these use cases, the module defines several components that can each be used independently, or combined to enable more complex functionality. These components are:

-   **Expression Logic** - the representation of logic using languages such as [FHIRPath](http://hl7.org/fhirpath) and [Clinical Quality Language (CQL)](http://cql.hl7.org).
-   **Definitional Resources** - resources that are not defined on any specific patient, but are used to define the actions to be performed as part of a clinical knowledge artifact such as an order set or decision support rule. These resources can be used directly, or with profiles to provide intended structure for specific types of resources.
-   **Knowledge Artifacts** - representation of clinical knowledge such as decision support rules and clinical quality measures.

These basic components can then be used to enable a broad variety of clinical decision support and quality measurement use cases, including knowledge sharing, decision support services, and clinical quality assessment and reporting. The topics below provide more detailed discussion on each of these components and uses:

| Topic                                                                                        | Description                                                                                                                                                                                                                                                                                                  |
|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Overview and Background](#background)                                                       | If you are interested in the background and development of the FHIR Clinical Reasoning module, this topic covers where it came from and why it exists. See also the general FHIR introductions for [clinicians](overview-clinical.html), [developers](overview-dev.html) or [architects](overview-arch.html) |
| [Using Expressions](clinicalreasoning-topics-using-expressions.html)                         | If you want to see how to add dynamic capabilities to FHIR resources using expressions, start here.                                                                                                                                                                                                          |
| [Definitional Resources](clinicalreasoning-topics-definitional-resources.html)               | If you want to see how to describe definitional resources using the ActivityDefinition resource, start here.                                                                                                                                                                                                 |
| [Representing Knowledge Artifacts](clinicalreasoning-knowledge-artifact-representation.html) | If you want to represent knowledge artifacts such as Event-Condition-Action rules, Order Sets, or Clinical Protocols, start here.                                                                                                                                                                            |
| [Sharing Knowledge Artifacts](clinicalreasoning-knowledge-artifact-distribution.html)        | If you want to share and distribute knowledge artifacts, start here.                                                                                                                                                                                                                                         |
| [Clinical Decision Support Service](clinicalreasoning-cds-on-fhir.html)                      | If you want to use the Clinical Reasoning module to provide or use Clinical Decision Support services, start here.                                                                                                                                                                                           |
| [Quality Reporting](clinicalreasoning-quality-reporting.html)                                | If you want to define or report clinical quality measures, start here.                                                                                                                                                                                                                                       |

<span id="audience"></span>
#### Audience

From the perspective of a Knowledge Author, this module describes an approach to representing knowledge artifacts within FHIR.

From the perspective of a Knowledge Content Provider, this module defines search functionality for using a FHIR server as a knowledge artifact repository.

From the perspective of a Knowledge Evaluation Service Provider, this module defines operations and profiles in support of evaluating quality measures, and defining and using [CDS Hooks](https://cds-hooks.hl7.org/) services.

And finally, from the perspective of a Knowledge Evaluation Service Consumer, this module defines the expected available operations and behavior of a knowledge evaluation service.

<span id="index"></span>
### Index

<span id="index-resources"></span>
#### Resources

| Resource                                                   | Description                                                                                                                                                                                                               |
|------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ActivityDefinition](activitydefinition.html)              | A resource to represent definitional resources.                                                                                                                                                                           |
| [DataRequirement](metadatatypes.html#datarequirement.html) | A data type that represents a general data requirement for a knowledge asset such as a decision support rule or quality measure.                                                                                          |
| [GuidanceResponse](guidanceresponse.html)                  | Represents the result from invoking a decision support service.                                                                                                                                                           |
| [Library](library.html)                                    | Provides a container for knowledge artifacts that includes logic libraries, model definitions, and asset collections.                                                                                                     |
| [Measure](measure.html)                                    | Represents a clinical quality measure and provides evaluation through the $evaluate-measure operation.                                                                                                                    |
| [MeasureReport](measurereport.html)                        | Represents the response to a specific measure evaluation request returned by the $evaluate-measure operation.                                                                                                             |
| [PlanDefinition](plandefinition.html)                      | Represents the description of a plan for accomplishing a particular goal. This resource is used to represent a broad variety of clinical knowledge artifacts including decision support rules, order sets, and protocols. |
| [RequestGroup](requestgroup.html)                          | Represents a group of options for a particular subject that can be used to accomplish a particular goal. This resource is often, but not always, the result of applying a PlanDefinition to a particular patient.         |

<span id="index-extensions"></span>
#### Extensions

| Extension                                                               | Description                                                                                                                                                                                                                                                                                |
|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [cdsHooksEndpoint](extension-cqf-cdshooksendpoint.html)                 | An extension applied to a PlanDefinition to indicate that it provides the behavior for a CDS Hooks service endpoint.                                                                                                                                                                       |
| [expression](extension-cqf-expression.html)                             | A general purpose extension that supports the use of languages such as FHIRPath and Clinical Quality Language within FHIR.                                                                                                                                                                 |
| [library](extension-cqf-library.html)                                   | A general purpose extension that supports the declaration of dependencies that can be accessed by expression logic.                                                                                                                                                                        |
| [measureInfo](extension-cqf-measureinfo.html)                           | An extension that can be applied to resources to indicate the measure criteria they satisfy. Used in evaluated resource bundles as part of reporting measure results for a patient to identify resources that contributed to the patient's membership in a particular population criteria. |
| [qualityOfEvidence](extension-cqf-qualityofevidence.html)               | An extension that can be applied to indicate the quality of evidence in support of a particular artifact or recommendation.                                                                                                                                                                |
| [relativeDateTime](extension-cqf-relativedatetime.html)                 | An extension that can be applied to define a date/time value relative to another event.                                                                                                                                                                                                    |
| [strengthOfRecommendation](extension-cqf-strengthofrecommendation.html) | An extension that can be applied to indicate the strength of a recommendation.                                                                                                                                                                                                             |

<span id="index-profiles"></span>
#### Profiles

| Profile                                                           | Description                                                                                                                                                                  |
|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Shareable ActivityDefinition](activitydefinition-shareable.html) | Enforces the minimum information set for the activity definition metadata required by HL7 and other organizations that share and publish activity definitions.               |
| [CQF-Questionnaire](cqf-questionnaire.html)                       | Defines extensions to the base Questionnaire that allow it to be used as a DocumentationTemplate with behavior specified via logic in CQL libraries.                         |
| [CDS Hooks GuidanceResponse](guidanceresponse-cdshooks.html)      | Defines a GuidanceResponse that represents the response container for a CDS Hooks response                                                                                   |
| [Shareable Library](library-shareable.html)                       | Enforces the minimum information set for the library metadata required by HL7 and other organizations that share and publish libraries                                       |
| [CQL Library](library-cql.html)                                   | Represents a CQL logic library                                                                                                                                               |
| [Shareable Measure](measure-shareable.html)                       | Enforces the minimum information set for the measure metadata required by HL7 and other organizations that share and publish measures                                        |
| [Shareable PlanDefinition](plandefinition-shareable.html)         | Enforces the minimum information set for the plan definition metadata required by HL7 and other organizations that share and publish plan definitions                        |
| [Computable PlanDefinition](plandefinition-computable.html)       | Defines a computable PlanDefinition that specifies a single library and requires all expressions referenced from the PlanDefinition to be definitions in that single library |
| [](plandefinition-cdshooks-service.html)CDS Hooks PlanDefinition  | Defines a PlanDefinition that implements the behavior for a CDS Hooks service                                                                                                |
| [CDS Hooks RequestGroup](requestgroup-cdshooks.html)              | Defines a RequestGroup that can represent a CDS Hooks response                                                                                                               |

<span id="index-services"></span>
#### Services

| Service                                                               | Description                                                      |
|-----------------------------------------------------------------------|------------------------------------------------------------------|
| [Knowledge Repository](capabilitystatement-knowledge-repository.html) | Defines minimum service capabilities for a knowledge repository. |
| [Measure Processor](capabilitystatement-measure-processor.html)       | Defines minimum service capabilities for a measure processor.    |

<span id="secpriv"></span>
### Security and Privacy

Because Knowledge Artifacts are typically patient-independent, many of the resources in the clinical reasoning module have no patient security and privacy concerns beyond the normal sensitivity that should be paid in any electronic healthcare system environment. However, the evaluation use case, including decision support guidance request/response, as well as quality measure evaluation have significant patient security and privacy concerns.

For the clinical decision support evaluation use case, as with any patient-specific information, care should be taken to ensure that the request and response are properly secured both at rest and in-motion, and that all access to the patient's information is done via a properly authenticated and authorized mechanism. This is particularly true of decision support artifacts where the logic is ingested as part of the definition of the artifact. In this scenario, the evaluation engine must ensure that data access within the ingested logic is subject to the same authentication and authorization requirements as any other access.

For guidance services that receive patient information, ensure that logging and auditing trails do not inadvertently compromise patient privacy and security by logging potentially sensitive information in an unencrypted way. In addition, guidance and recommendations returned from the service must ensure that content that contains patient information is clearly indicated so that consuming clients can take the appropriate care in integrating and displaying the resulting guidance.

For quality measure evaluation, individual and patient-list reports have the potential to contain large amounts of patient information. As with the decision support guidance responses, care must be taken to ensure the patient information is only accessible to properly authenticated and authorized agents, and that inadvertent breaches are minimized by following appropriate logging and auditing protocols.

In particular, because expression languages, depending on their power and scope, can provide the ability to access large amounts of data, as well as the potential for infinite recursion or looping, care should be taken to ensure that implementations adequately safeguard against Denial-of-Service-style attacks that leverage these capabilities to compromise systems by overloading capacity.

For more general considerations, see [the Security and Privacy module](secpriv-module.html).

<span id="uses"></span>
### Common use Cases

| Use Case                                                                                                                                 | Description                                                                                                                                                       |
|------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Providing a dynamic value for a resource element](clinicalreasoning-topics-using-expressions.html#dynamic-value-for-a-resource-element) | Using expressions to define the value for an element of a FHIR resource.                                                                                          |
| [Defining a CQL library](clinicalreasoning-knowledge-artifact-representation.html#defining-a-cql-library)                                | Using the Library resource to incorporate a Clinical Quality Language library for use in FHIR resources.                                                          |
| [Defining a Model Definition artifact](library-quick-model-definition.xml.html)                                                          | Using the Library resource to incorporate the definition of an information model for use with expressions in FHIR.                                                |
| [Defining an Event Condition Action rule](clinicalreasoning-knowledge-artifact-representation.html#event-condition-action-rule)          | Using the PlanDefinition resource to represent an event-condition-action rule in FHIR.                                                                            |
| [Defining a Referral Request activity](clinicalreasoning-topics-definitional-resources.html#referral-request-activity-definition)        | Using the ActivityDefinition resource to define a referral request activity that can be used as part of a knowledge artifact.                                     |
| [Defining a Medication Request activity](clinicalreasoning-topics-definitional-resources.html#referral-request-activity-definition)      | Using the ActivityDefinition resource to define a medication request activity that can be used as part of a knowledge artifact.                                   |
| [Defining an Order Set](clinicalreasoning-knowledge-artifact-representation.html#order-set)                                              | Using the PlanDefinition resource to represent an order set.                                                                                                      |
| [Defining a Protocol](clinicalreasoning-knowledge-artifact-representation.html#protocol)                                                 | Using the PlanDefinition resource to represent a protocol.                                                                                                        |
| [Defining a Questionnaire with dynamic content](clinicalreasoning-knowledge-artifact-representation.html#documentation-template)         | Using the Questionnaire resource and expression extensions to add dynamic functionality to a FHIR Questionnaire.                                                  |
| [Obtaining guidance from a Decision Support Service](clinicalreasoning-cds-on-fhir.html#guidance-request)                                | Using the $evaluate operation to request and process guidance from a decision support service.                                                                    |
| [Defining a Measure](clinicalreasoning-quality-reporting.html#representing-quality-measures)                                             | Using the Measure resource to represent a clinical quality measure.                                                                                               |
| [Evaluating a Measure](clinicalreasoning-quality-reporting.html#invoking-measures)                                                       | Using the $evaluate-measure operation to request calculation of a clinical quality measure.                                                                       |
| [Applying an ActivityDefinition](activitydefinition-operation-apply.html)                                                                | Using the $apply operation to realize the intent resource defined by an ActivityDefinition.                                                                       |
| [Applying a PlanDefinition](plandefinition-operation-apply.html)                                                                         | Using the $apply operation to realize a plan definition for a specific context.                                                                                   |
| [Representing Quality of Evidence/Strength of Recommendation](clinicalreasoning-topics-supporting-documentation.html)                    | Using the `qualityOfEvidence` and `strengthOfRecommendation` extensions to indicate ratings associated with evidence for a particular artifact or recommendation. |

<span id="roadmap"></span>
### Developmental Roadmap

The resources defined for the Clinical Reasoning module are the result of the combined efforts of multiple communities working on the shared goal of harmonized standards and specifications for clinical decision support and quality measurement artifacts. The current state of the module reflects changes incorporated both from previous ballots on the FHIR-specific material, as well as content derived from several other balloted specifications in the CDS and CQM domains. The content at this point is capable of supporting the two primary use cases of sharing and evaluation in both domains and for a broad variety of artifacts.

In particular, the use of Clinical Quality Language (CQL) as a foundational mechanism for representing clinical quality logic enables decision support and quality measurement artifacts to share common definitions. For example, a Chlamydia Screening measure and related decision support artifacts focused on improving the measure can share a common library that describes the criteria for detecting when Chlamydia Screening is required in a patient. The decision support rule applies these criteria to determine when and how to impact a workflow, while the quality measure uses these same criteria to determine whether the screening goal has been met for a patient or population. In addition, the resources defined in this module use common patterns for describing the structure of artifacts and their associated metadata, enabling a consistent approach to the sharing and distribution of clinical knowledge artifacts.

Over the past year of trial use, the Clinical Reasoning module has been used in both the quality measurement and decision support domains to represent, exchange, and evaluate knowledge artifacts. This usage has generated feedback resulting in the addition of several new profiles, as well as guidance for using the Clincal Reasoning module with CDS Hooks and for quality reporting. Although this feedback resulted in some substantive changes, there were comparatively few, and the goals of the module for the next year are to push towards higher maturity levels and continue to seek implementation feedback.

The goals of the module over the next year are to provide a stable basis for implementation of the sharing use case, as well as unification with the CDS Hooks specification in support of the evaluation use case. The Clinical Quality Framework Initiative will use these resources as the basis for implementation projects, targeting an FMM level of 3 or 4 for all module resources within a year.

<span id="crm-feedback"></span> \[%stu-note%\] We are actively seeking comments on all areas of the module, with particular focus on supporting the following scenarios:
-   FHIR-Based Knowledge Artifact Repository
-   FHIR-Based Clinical Decision Support Service
-   FHIR-Based Quality Measure Evaluation and Reporting
-   FHIR-Based Order Set Catalog/Ordering Services
-   The use of Measure and MeasureReport for public health indicator reporting
-   Enabling population level query
-   The use of FHIR Bulk Data as a mechanism to enable population-level quality reporting
-   The use of FHIR interactions in general as a mechanism for enabling knowledge artifact repository and distribution functionality.

Feedback is welcome [here](http://hl7.org/fhir-issues). \[%end-note%\] <span id="background"></span>

### Background

The FHIR Clinical Reasoning module is sponsored by the Clinical Decision Support (CDS) and Clinical Quality Information (CQI) HL7 Work Groups, with input and coordination from the FHIR Infrastructure and Service Oriented Architecture HL7 Work Groups.

The guidance in this module was prepared as a Universal Realm Specification with support from the [Clinical Quality Framework (CQF) initiative](https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/CQF+Home), which was a public-private partnership sponsored by the Centers for Medicare & Medicaid Services (CMS) and the U.S. Office of the National Coordinator for Health Information Technology (ONC) to identify, develop, and harmonize standards for clinical decision support and electronic clinical quality measurement. The [Clinical Quality Framework](https://confluence.hl7.org/display/CQIWC/Clinical+Quality+Framework) effort transitioned to HL7's Clinical Quality Information (CQI) and Clinical Decision Support (CDS) Work Groups in 2016.

The Clinical Quality Framework is focused on harmonizing the historically disjointed specifications used by the Clinical Quality Measurement and Clinical Decision Support communities. Specifically, the initiative has focused on the specifications used to represent knowledge artifacts within the two communities. The strategy employed has been to break the conceptual content of knowledge artifacts into three core components, to define common standards for these core components, and to re-use these common standards for both clinical decision support and clinical quality measurement:

-   Metadata - Descriptive information about the artifact and its content
-   Clinical Information - Information about a patient or population of concern within a given artifact
-   Logic - The clinical reasoning involved in an artifact

![Clinical Quality Framework Conceptual Components](clinicalreasoning-components-diagram.jpg)
The first component has resulted in the [Clinical Quality Common Metadata Conceptual Model](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=391), an informative document harmonizing metadata requirements between Quality Measurement and Decision Support artifacts.

The second component has resulted in the QUICK [Conceptual and Logical](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=378) Models, a harmonization of the [Virtual Medical Record (vMR)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=338) used in Decision Support and the [Quality Data Model (QDM)](https://ecqi.healthit.gov/qdm) used in Quality Measurement, and with its core requirements realized in FHIR as the Quality Improvement Core (QICore) [profiles](http://hl7.org/fhir/us/qicore/index.html#contents). Ongoing work in this area is focusing on coordination with the Clinical Information Modeling Initiative (CIMI) and a methodology for producing FHIR profiles from CIMI models. Currently, the QICore FHIR profiles (which are in turn derived from the US-Core profiles) can be used to model clinical quality data, and to present a consistent model for use in authoring and evaluating clinical quality artifacts.

Finally, the third component has resulted in the [Clinical Quality Language specification](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=400), a harmonization of the expressive capabilities of the [Clinical Decision Support Knowledge Artifact Specification (CDS KAS)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=337) (produced by the [Health eDecisions](http://healthedecisions.org) (HeD) Standards and Interoperability (S&I) initiative), and the [Health Quality Measures Format (HQMF)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=97).

As part of the ongoing CQF initiative pilot efforts, these developing specifications are being used to support knowledge artifact sharing, as well as evaluation of knowledge artifacts as part of decision support request/response and measure evaluation.

This module continues the harmonization of quality domain specifications by defining an approach to using a FHIR server as a component of a knowledge system in both the Knowledge Repository and Knowledge Evaluation Service roles.

<span id="related-specifications"></span>
### Related Specifications

The approach and representations within this guide are derived from and intended to be consistent with the following specifications:

-   [HL7 Version 3 Standard: Clinical Decision Support Knowledge Artifact Specification, Release 1.3](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=337)
-   [HL7 Version 3 Standard: Representation of the Health Quality Measure Format (eMeasure) Normative, Release 1](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=97)
-   [HL7 Version 3 Standard: Decision Support Service, Release 2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=12)
-   [HL7 Version 3 Implementation Guide: Decision Support Service, Release 1](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=334)

<span id="copyright-information"></span>
### Copyright Information

This material includes SNOMED Clinical Terms ® (SNOMED CT®), which are used by permission of the International Health Terminology Standards Development Organisation (IHTSDO). All rights reserved. SNOMED CT was originally created by the College of American Pathologists. "SNOMED ®" and "SNOMED CT ®" are registered trademarks of the IHTSDO.

This material contains content from Logical Observation Identifiers Names and Codes (LOINC®) (<http://loinc.org>). The LOINC table, LOINC codes, and LOINC panels and forms file are copyright © 1995-2017, Regenstrief Institute, Inc. and the LOINC Committee and available at no cost under the license at <http://loinc.org/terms-of-use>.

This material contains content from the Unified Code for Units of Measure (UCUM) (<http://unitsofmeasure.org>). The UCUM specification is copyright © 1999-2017, Regenstrief Institute, Inc. and available at no cost under the license at <http://unitsofmeasure.org/trac/wiki/TermsOfUse>.

This material contains quality measure content developed by the National Committee for Quality Assurance (NCQA). The measure content is copyright (c) 2008-2017 National Committee for Quality Assurance and used in accordance with the NCQA license terms for non-commercial use.

<span id="acknowledgements"></span>
### Acknowledgements

The guidance in this module is the work of a joint project between the HL7 Clinical Quality Information and Clinical Decision Support Work Groups with the co-sponsorship of the FHIR Infrastructure, Implementable Technology Specifications, and Service Oriented Architecture Work Groups.

\[%file newfooter%\]
