---
title: 1.9 入门指南
type: spec
order: 109
FHIR_version: r4

---

## **Getting Started**

1.9 Getting Started with FHIR[](modules.html#1.9 "link to here")
----------------------------------------------------------------

[FHIR Infrastructure ![](external.png)](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group

[Maturity Level](versions.html#maturity): N/A

[Standards Status](versions.html#std-process): [Informative](versions.html#std-process)

FHIR is a platform specification that defines a set of capabilities use across the healthcare process, in all jurisdictions, and in lots of different contexts. While the basics of the FHIR specification are relatively straight-forward (see the Overviews: [General](overview.html), [Developers](overview-dev.html), [Clinical](overview-clinical.html), and [Architects](overview-arch.html)), it can still be difficult to know where to start when implementing a solution based on FHIR.

This page provides some guidance to help get new implementers started on their path to successful implementation. Beyond reading the overviews (previous paragraph), where should an implementer start? Generally, an implementer needs to resolve:

*   How will information be exchanged? (see [Foundation Module](foundation-module.html#uses))
*   How are terminologies being used? (see [Terminology Module](terminology-module.html#uses))
*   How will the information be secured? (see [Security and Privacy Module](secpriv-module.html#uses))
*   When is information exchanged? (See [Workflow Module](workflow-module.html))
*   What information is going to be exchanged?

The remaining sections provide guidance on specific areas (Foundation, Implementer Support, Security and Privacy, Conformance, Terminology, Linked Data, Administration, Clinical, Diagnostics, Medications, Workflow, Financial and Clinical Reasoning).

All implementers should be aware of how versioning works in the FHIR specification. See both:

*   [Managing Multiple FHIR Versions](versioning.html)
*   [Specification Version Management Policy](versions.html)

### 1.9.1 Modules[](modules.html#modules "link to here")

In order to help implementers find their way around the specification and answer these questions, it is organized into a set of "modules". Each module represents a different functional area of the specification, and contains:

*   **Scope and Index**: A description of the content covered by the module, and an index of the important content
*   **Use cases**: Guidance for common uses of the module, and how to approach them. This is a key resource for implementers familiarizing themselves with the FHIR specification
*   **Security / Privacy**: Information
*   **Roadmap**: Where the content covered by the module is in terms of overall progress (see also, for general information: [FHIR Timelines](versions.html))

Broadly, the modules are organized into 3 groups:

*   Infrastructure (bottom rung, and bottom row of boxes)
*   Content (middle rung, and top row of boxes)
*   Reasoning (top rung)

**Level 1** Basic framework on which the specification is built

[Foundation](foundation-module.html)

[Base Documentation](documentation.html), [XML](xml.html), [JSON](json.html), [Data Types](datatypes.html), [Extensions](extensibility.html)

**Level 2** Supporting implementation and binding to external specifications

[Implementer Support](implsupport-module.html)

[Downloads](downloads.html),  
[Version Mgmt](versioning.html),  
[Use Cases](usecases.html),  
[Testing](testing.html)

[Security & Privacy](secpriv-module.html)

[Security](security.html),  
[Consent](consent.html),  
[Provenance](provenance.html),  
[AuditEvent](auditevent.html)

[Conformance](conformance-module.html)

[StructureDefinition](structuredefinition.html),  
[CapabilityStatement](capabilitystatement.html),  
[ImplementationGuide](implementationguide.html),  
[Profiling](profiling.html)

[Terminology](terminology-module.html)

[CodeSystem](codesystem.html),  
[ValueSet](valueset.html),  
[ConceptMap](conceptmap.html),  
[Terminology Svc](terminology-service.html)

[Exchange](exchange-module.html)

[REST API](http.html) + [Search](search.html)  
[Documents](documents.html)  
[Messaging](messaging.html)  
[Services](services.html)  
[Databases](storage.html)  

**Level 3** Linking to real world concepts in the healthcare system

[Administration](administration-module.html)

[Patient](patient.html), [Practitioner](practitioner.html), [CareTeam](careteam.html), [Device](device.html), [Organization](organization.html), [Location](location.html), [Healthcare Service](healthcareservice.html)

**Level 4** Record-keeping and Data Exchange for the healthcare process

[Clinical](clinicalsummary-module.html)

[Allergy](allergyintolerance.html), [Problem](condition.html), [Procedure](procedure.html), [CarePlan](careplan.html)/[Goal](goal.html), [ServiceRequest](servicerequest.html), [Family History](familymemberhistory.html), [RiskAssessment](riskassessment.html), etc.

[Diagnostics](diagnostics-module.html)

[Observation](observation.html), [Report](diagnosticreport.html), [Specimen](specimen.html), [ImagingStudy](imagingstudy.html), [Genomics](genomics.html), [Specimen](specimen.html), [ImagingStudy](imagingstudy.html), etc.

[Medications](medications-module.html)

[Medication](medication.html),  
[Request](medicationrequest.html), [Dispense](medicationdispense.html),  
[Administration](medicationadministration.html),  
[Statement](medicationstatement.html),  
[Immunization](immunization.html), etc.

[Workflow](workflow-module.html)

[Introduction](workflow.html) + [Task](task.html), [Appointment](appointment.html), [Schedule](schedule.html), [Referral](servicerequest.html), [PlanDefinition](plandefinition.html), etc

[Financial](financial-module.html)

[Claim](claim.html), [Account](account.html),  
[Invoice](invoice.html), [ChargeItem](chargeitem.html),  
[Coverage](coverage.html) + Eligibility  
[Request](coverageeligibilityrequest.html) & [Response](coverageeligibilityresponse.html), [ExplanationOfBenefit](explanationofbenefit.html), etc.

**Level 5** Providing the ability to reason about the healthcare process

[Clinical Reasoning](clinicalreasoning-module.html)

[Library](library.html), [PlanDefinition](plandefinition.html) & [GuidanceResponse](guidanceresponse.html), [Measure](measure.html)/[MeasureReport](measurereport.html), etc.

Dependencies between the modules are mainly downwards, with some horizontal dependencies. Implementers should choose the content modules to engage with based on their requirements, and should only engage with the reasoning module if they need to do clinical decision support, and/or Quality Measures.

In addition to the use case based assistance in the modules, these additional documentation pages may be useful:

*   [Common Use Cases](usecases.html): Personal Health Record, Document Sharing (XDS) and Decision Support
*   [Resource Guide](resourceguide.html): Further information about the resources and the relationship between them

Finally, one important place to look is the [registry of implementation guides ![](external.png)](http://www.fhir.org/guides/registry) , to see whether similar (or identical) requirements have been met.
