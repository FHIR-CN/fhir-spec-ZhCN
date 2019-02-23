---
title: 欢迎了解 FHIR®
type: spec
order: 102
---

## FHIR 是什么

FHIR 是 HL7 组织发布的一种用于医疗健康数据交换的标准。


### 翻译的工作开展

>从2015年迄今，我、张林老师、叶颜波老师都做过一些翻译的工作，但都不是完整版，目前想机器+人工校对方式完成R4版本的完整版，供大家学习之用。


无论如何都得先注册一个github账号。

#### 如果你是有编码经验和情节的
step1：搞好自己本机的github环境，先clone下来整个repo把 
```
git clone https://github.com/FHIR-CN/fhir-spec
```
#### 如果你是小白，只需要使用浏览器即可完成操作。

* step1：制作待翻译章节的英文md文件

    * 找到你感兴趣的fhir标准原文所在的章节，假如是[3.1.0](http://hl7.org/fhir/http.html)，使用任意浏览器打开此网页，右键查看网页源代码，全选所有html代码复制即可，
    
    * 打开[html——>markdown 在线转换工具](http://domchristie.github.io/turndown/)，将复制的html代码复制到左侧的框中，等待片刻，将右侧框中的内容全选复制出来。

    * 打开[第三部分 机器翻译初稿](https://github.com/FHIR-CN/fhir-spec/tree/r4/src/v4/module03)目录，使用"Create new file"，文件命名“http.md”，与原始标准文件保持一致，将上一步复制的内容拷贝到文件中即可。(可稍微删去一些诸如页眉页脚等无用代码)

* step2：使用机器翻译工具制作待翻译章节的中文机器翻译md文件

    * 新建一个文件，命名为"http-translate.md",
    
    * 使用[翻译工具](https://fanyi.transgod.cn/),将翻译好的内容复制到新建的文件中。


* step3：校对人员对第二步产生的文件进行校对，在机器翻译文件中提出修改意见，讨论期过后将此机器翻译文件转移到[校对完整版目录下](https://github.com/FHIR-CN/fhir-spec/tree/r4/src/v4/spec)













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
