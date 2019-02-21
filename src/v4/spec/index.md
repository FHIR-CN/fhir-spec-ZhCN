---
title: 欢迎了解 FHIR®
type: spec
order: 102
---

## FHIR 是什么

FHIR 是 HL7 组织发布的一种用于医疗健康数据交换的标准。

### 首次接触

See the [executive summary](summary.html), the [developer's introduction](overview-dev.html), [clinical introduction](overview-clinical.html), or [architect's introduction](overview-arch.html), and then the FHIR [overview / roadmap](overview.html) & [Timelines](versions.html). See also the [open license](license.html) (and don't miss the full [Table of Contents](toc.html) and the [Community Credits](credits.html) or you can [search this specification](search.cfm)).



### 五个版块


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


### 外部链接



**External Links:**

**Implementation Guides**

Specifications based on the FHIR standard

*   [Published by HL7, Affiliates & FHIR Foundation ![](external.png)](http://www.fhir.org/guides/registry) 
*   [Other IGs (FHIR Confluence) ![](external.png)](https://confluence.hl7.org/display/FHIR/IGs+from+other+Organizations) 

**[FHIR Foundation ![](external.png)](http://fhir.org)** 

Enabling health interoperability through FHIR

*   [Community Forum ![](external.png)](http://community.fhir.org/) + [FHIR Chat ![](external.png)](http://chat.fhir.org/) 
*   [Public Test Servers & Software ![](external.png)](https://confluence.hl7.org/display/FHIR/Public+Test+Servers) 
*   [Blogs that cover FHIR ![](external.png)](https://confluence.hl7.org/display/FHIR/Blogs) 
*   [FHIR Confluence ![](external.png)](https://confluence.hl7.org/display/FHIR) 

**Translations**

Note that translations are not always up to date

*   [Russian ![](external.png)](http://fhir-ru.github.io/index.html) 
*   [Chinese ![](external.png)](https://github.com/wanghaisheng/fhir-cn/blob/source/README.md) 
*   [Japanese ![](external.png)](https://sites.google.com/site/fhirjp/) 

Note: This specification requires a browser that is SVG compatible (Microsoft Internet Explorer 10+/Edge, Firefox 3.0+, Chrome, or Safari), and uses the browser's session storage to remember which tabs are active.

®© HL7.org 2011+. FHIR Release 4 (v4.0.0) generated on Thu, Dec 27, 2018. 
