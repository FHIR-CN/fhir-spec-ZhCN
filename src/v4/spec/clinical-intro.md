---
title: 临床工作人员入门介绍
type: spec
order: 105
---

##    **Clinical Introduction**

2.15 FHIR Overview - Clinicians[](overview-clinical.html#2.15 "link to here")
-----------------------------------------------------------------------------

[FHIR Infrastructure ![](external.png)](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group

[Maturity Level](versions.html#maturity): N/A

[Standards Status](versions.html#std-process): [Informative](versions.html#std-process)

FHIR (_Fast Healthcare Interoperability Resources_) is designed to enable the exchange of healthcare-related information. This includes clinical data as well as healthcare-related administrative, public health and research data. It covers both human and veterinary medicine and is intended to be usable world-wide in a wide variety of contexts, including in-patient, ambulatory care, acute care, long-term care, community care, allied health, etc.

The FHIR specification is targeted to individuals and organizations developing software and architecting interoperable solutions that will be using FHIR. The FHIR specification does not attempt to define good or best clinical practices, nor does it provide guidance on user interfaces or workflows. Guidance in these areas may be useful, but it is outside of FHIR's scope.

Because of FHIR's focus on implementation, many aspects of the specification deal with the technical underpinnings of the exchange of clinical information between electronic systems. This section provides an introduction to what FHIR provides, and tries to highlight those portions of the specification that are likely to be of most interest to the clinical community while skipping over some of the technical minutiae of interoperability. However, clinical readers are welcome to explore some of the more technical areas if they find them of interest.

### 2.15.1 Resources[](overview-clinical.html#Resources "link to here")

From a clinical perspective, the most important parts of the FHIR specification to understand are the Resources. Think of Resources as paper "forms" reflecting different types of clinical and administrative information that can be captured and shared. The FHIR specification defines a generic "form template" for each type of clinical information - so one for allergies, one for prescriptions, one for referrals, etc.

FHIR data consists of repositories containing completed "forms" (resource instances). The resource instances describe patient-related information (such as demographics, health conditions and procedures) as well as administrative information (such as practitioners, organizations and locations). Some resources are infrastructure components used to support the technical exchange of information by describing what systems are able to do, defining allowed sets of codes, etc. FHIR repositories might be electronic health record (EHR) systems, pharmacy systems, hospital information systems (HIS), etc. Some systems, such as clinical decision support engines, may expose FHIR interfaces even though they don't actually store any patient or administrative information themselves.

Each Resource defines a small amount of highly-focused data. A single resource doesn't say very much, but a collection of Resources taken together creates a useful clinical record. Information systems map the actions that a user takes (look up patient records, make a note in their history, etc.) to operations on the relevant resources.

### 2.15.2 Extensibility and Profiling[](overview-clinical.html#Extensibility "link to here")

The paper forms (Resources) in FHIR are somewhat generic. They have to be usable in different countries and by different types of clinicians in different contexts (human care, veterinary care, public health, research, etc.). Recognizing that a _one size fits all_ approach is not appropriate in the healthcare space, FHIR provides the ability to adjust the forms (Resources) to be able to handle the needs of different implementation spaces by defining "extensions" as well as enforcing constraints. For example, a "prescription" form might have extension elements added to support tracking of restricted medications while also constraining the codes that can be used to communicate types of drugs to a particular national standard. Forms are designed in such a way that these changes can be made without changing how systems pass forms around, enabling any system to consume completed forms even if they have additional elements added, whether or not those additional elements are used by the receiving system.

To keep the base forms that everyone uses from being overly complex, FHIR has a rule that, in most cases, a resource will only include data elements if there's an expectation that most implementations will use that particular data element. That doesn't mean the data must always exist. For example, most systems in the world are capable of tracking "deceased date" for a patient, even though that element will be blank for many patient records. On the other hand, not as many systems track hair color, so hair color would be omitted from the base form and those systems that need it (perhaps in a specialty clinical or research setting) can use a FHIR extension to capture it if needed.

To keep the number of resources reasonable, some of them are fairly broad. For example, the [Observation](observation.html) resource is used for vital signs, lab results, psychological assessments and a variety of other things. To support setting rules for more narrow areas (e.g. "_What should I send if I want to share a blood pressure?_"), FHIR allows the creation of Profiles. There will be a great deal of clinical work involved in forming consensus around how different types of detailed clinical information should be captured and shared in particular settings. Tooling to support the creation of profiles directly by clinicians is part of the plan for FHIR, but is still in the very early stages.

### 2.15.3 Narrative[](overview-clinical.html#Narrative "link to here")

FHIR is intended to support sharing data in a computable manner. I.e. The information shared should be usable for computer-mediated processes such as decision support, rules triggering, trend analysis, etc. However, not every system is the same and not all systems are able to recognize all discrete data. Also, there is still considerable value in data exchange in circumstances where not all or even none of that data is captured in a discrete manner. For this reason, FHIR resources support sharing not only discrete data for computation, but also a human-readable view so that the humans on each end of a healthcare information exchange can still get a full picture of what's going on.

Narrative is expected to exist for most resource instances, although it can be omitted in a few limited circumstances. In some cases, the narrative will be generated from discrete information. For example, the narrative for a patient might look like this:

**Peter James Chalmers (OFFICIAL), Jim**  
**identifier**: MRN = 12345 (USUAL)  
**telecom**: ph: (03) 5555 6473(WORK)  
**gender**: MALE  
**birthDate**: Dec 25, 1974  
**deceased**: false  
**address**: 534 Erewhon St PleasantVille Vic 3999 (HOME)

In other cases, the narrative might be free-form text commentary entered directly by a practitioner, such as referral letters, pathology reports, etc. Certain parts of the narrative content could also later be exposed as discrete data.

### 2.15.4 Interfaces[](overview-clinical.html#Interfaces "link to here")

In addition to defining the "forms" for data exchange (Resources), FHIR also defines a set of interfaces by which systems actually share that information. There are four primary mechanisms or "paradigms" of exchange supported by FHIR: via a REST interface, by exchanging Documents, by sending and receiving Messages and by exposing and invoking Services.

#### 2.15.4.1 REST[](overview-clinical.html#REST "link to here")

REST is the simplest exchange mechanism. Continuing with the "form" metaphor, a RESTful server can be thought of as a room full of filing cabinets. Within the room is a cabinet for each "type" of form (or Resource) it supports. The cabinet contains folders where each folder has a unique number and represents one particular real-world thing: one Patient, one Encounter, one Medication, etc. Each folder (which represents a single Resource _instance_) contains multiple pieces of paper, with each piece of paper representing a specific "version" of that instance. Every time someone updates a record, a new piece of paper is added to the top of the file folder. To see the history of a resource, you simply have to flip through the pieces of paper in the folder.

Note that a typical medical record is generally a big "folder-of-folders" with many different types of 'forms' or 'reports' gathered together. This is convenient for someone who wants to review the whole record, but inconvenient for someone updating bits of it. There's always contention for access to it to update the right part. In the computer application the record will be decomposed to its smallest components for management purposes, and a computer will (or should) assemble the correct bits as required, by following references that exist from one piece of information to the next.

Now picture a clerk at the front door of that room. You can pass the clerk a requisition to have them do something with the information in those file cabinets. The "clerk" and the set of requisition forms on the clerk's counter make up the FHIR restful API. With that API, you can do the following:

*   _search_: Have the clerk search through the folders for one(s) that meet a set of search criteria and give you a copy of the top piece of paper in each relevant folder
*   _read_: Get a copy of the top piece of paper (which is the most current version) from a specific folder in one of the cabinets
*   _create_: Add a new folder to the appropriate cabinet (with a new number)
*   _update_: Add a new page (version) to the contents of a specific folder
*   _delete_: Remove a folder from the cabinet (or more accurately, virtually remove it by putting a sticker on it saying "do not open")
*   _history_: Look at all the pages in a single folder, in a particular file cabinet or possibly in the whole room. Such a broad request would be used primarily for administrative purposes rather than clinical purposes
*   _transaction_: Give the clerk multiple pieces of paper to place in distinct folders at the same time
*   _operation_: Ask the clerk to perform an action or procedure on papers from one or more of the folders - for example, averaging numbers across patients, producing a summary record, or perform a complex search just by ticking a box on a requisition saying "do that one"

EHRs and other systems may present a more sophisticated interface to their end users, but behind the scenes they're all making these same types of requests to the file clerk.

#### 2.15.4.2 Documents[](overview-clinical.html#Documents "link to here")

Documents are a familiar mechanism for sharing information in the healthcare space. They are useful whenever there's a desire to guide how a consumer of information will navigate it and there's a need to have a "frozen" view of information that can be reliably retrieved even years in the future. Examples of document-like things in healthcare include discharge summaries and lab reports.

In FHIR, there's a special resource called [Composition](composition.html) that acts as the "cover page" for a document. It identifies the title, author date, relevant patient and the table of contents. A FHIR document can be thought of as a set of sheets (Resource _instances_) stacked together with a title page on top that's stapled together. That stapled collection can then be stored or passed around, conveying a complete set of information at once.

#### 2.15.4.3 Messaging[](overview-clinical.html#Messaging "link to here")

Much healthcare information exchange happens using a messaging paradigm. In messaging, a set of information is sent from one system to another, typically triggered by an event in the sender system. For example, a patient being admitted, a lab test being ordered, a drug being administered, the clock striking 12:00 or someone pressing a button. The message serves to notify the receiver that the event occurred as well as provide details about any existing data that was modified or new data that was created. Typically receiving a message means there's an expectation that the receiving system will "do something" in response.

A message might request that a lab order be fulfilled or notify a system that two patient records have been merged or that a patient has been transferred from one bed to another. A message is similar to a document in that it collects resources together, however for a message, the "cover page" is a [MessageHeader](messageheader.html) that acts as a requisition. And rather than using a staple, the resources are joined together with a paper-clip and there's no expectation that the receiving system will store the contents of the message exactly as received, if at all.

#### 2.15.4.4 Services[](overview-clinical.html#Services "link to here")

Services can be thought of as a light-weight way of doing messaging. Rather than a full cover page, a small sticky note is attached to the front of a resource. And sometimes rather than sending a full piece of paper, the relevant pieces are cut out and sent as fragments. The response to a requisition is a similarly paper-clipped bundle of resource instances. Services are likely to be used for things like decision support. E.g. "_Is there a problem with prescribing medication X for patient Y?_" or "_What's the recommended care plan for a patient with conditions A, B and C?_"

### 2.15.5 Approaching the specification[](overview-clinical.html#Approaching "link to here")

A FHIR-based system's capabilities are defined by what the Resources can say and from a clinical perspective, these things define the clinical record:

*   the kinds of Resources that are defined
*   their data contents, and rules about the data such as what terminology codes are supported and/or required
*   how resources reference to each other
*   how you can search for information

This information can all be found in the resource definition pages. The resources most likely to be of interest can be found in the following modules:

*   [Clinical & Care provision](clinicalsummary-module.html)
*   [Diagnostics](diagnostics-module.html)
*   [Medications](medications-module.html)
*   [Administrative](administration-module.html)

Instructions on how to interpret the information found on the resource pages can be found [here](formats.html). The _Logical table_ or the _UML_ views are likely to be easiest to understand. Don't forget to look at the examples tab for an idea of what kind of information can be expressed. Seeing how elements are used to convey real data is often more useful than just looking at definitions. Also, look at the Profiles tab to see examples of how different resources can be constrained for use in particular contexts.

Clinician and other domain expertise and feedback is always welcome as we continue refining the FHIR specification. At the top of each resource page is a link to the home page for the work group responsible for that particular resource. If you have feedback on resource design, consider getting involved.

®© HL7.org 2011+. FHIR Release 4 (v4.0.0) generated on Thu, Dec 27, 2018. [QA Page](qa.html)  
Links: [Search ![](external.png)](http://hl7.org/fhir/search.cfm) | [Version History](history.html) | [Table of Contents](toc.html) | [Credits](credits.html) | [Compare to R3 ![](external.png)](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhir%2FSTU3%2Foverview-clinical.html&doc2=http%3A%2F%2Fhl7.org%2Ffhir%2Foverview-clinical.html) | [![CC0](cc0.png)](license.html) | [Propose a change ![](external.png)](http://hl7.org/fhir-issues)