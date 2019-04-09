\[%file newnavbar%\]
Guide to Resources
------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

The FHIR specification defines a set of resources, and an infrastructure for handling resources. In order to use FHIR to create solutions for integration requirements, implementers must map their problems to resources and their content.

The [Resource List](resourcelist.html) provides views of the resources organized in several different ways, and is the primary entry point to the resources.

This page describes the resources and their functional intent in more detail to assist implementers to understand their purpose and scope, and their supporting classifications.

Where to find common concepts in this specification:

**Concept**
**Example**
**Where to find**
**Clinical Findings**
Laboratory Results
Blood panels such as CBC with Differential, Liver Panel, etc.
[DiagnosticReport](diagnosticreport.html) with [Observations](observation.html)
Imaging Study Findings
CT Scans, MRI, Plain Radiographs, Ultrasounds)
[DiagnosticReport](diagnosticreport.html) (some with [Observations](observation.html))
Diagnostic Test Results
EKG, pulmonary function test, EEG
[Observations](observation.html) (and maybe a [DiagnosticReport](diagnosticreport.html))
Vital Signs
Temperature, Blood Pressure, Heart Rate, Respiratory Rate
[Observation](observation.html)
Other Physical Exam Findings
Auscultation findings
[Observation](observation.html)
Pulmonary Artery Catheter readings
Pulmonary artery pressure
[Observation](observation.html)
**Patient Problems, Allergies and Adverse Events**
Allergy
Food or drug allergies
[AllergyIntolerance](allergyintolerance.html)
Clinical Diagnosis
Diabetes, Congestive Heart Failure
[Condition](condition.html)
Adverse Event
Adverse reaction to an agent, falls, adverse surgical events, hospital infections
[AdverseEvent](adverseevent.html)
**Patient History**
Chief Complaint
Cough, Pain, Fever, Fatigue
[Condition](condition.html)
Past Surgical History
Appendectomy, Hernia repair
[Procedure](procedure.html)
Past Medical History
Diabetes, Congestive heart failure
[Condition](condition.html)
MAR (Medication Administration Record)
Warfarin 5mg PO administered on 12/10/2013 at 3pm
[MedicationAdministration](medicationadministration.html)
Home Meds
Warfarin 5mg, 30 day supply, dispensed on 12/01/2013
[MedicationStatement](medicationstatement.html)
Social History
Sexual behavior, Smoking status, Alcohol intake, Illicit drug use
[Observation](observation.html)
Family History
Mother has diabetes
[FamilyMemberHistory](familymemberhistory.html)
Signs & Symptoms
from a review of systems- Pain, Fever
[Condition](condition.html)
**Suggested Physician Orders**
Proposal for a laboratory test
A blood panel, a stool analysis
[ServiceRequest](servicerequest.html)
Proposal for an imaging procedure
CT Scan, MRI, X-Rays
[ServiceRequest](servicerequest.html)
Proposed Diet Order
An oral diet order
[NutritionOrder](nutritionorder.html)
Proposed respiratory order
Oxygen delivery
Not done yet
Proposed Medications
Aspirin, Lisinopril
[MedicationRequest](medicationrequest.html)
Proposed Supply
Wheel Chair, Food Tray
[SupplyRequest](supplyrequest.html)
**Interdisciplinary Care Planning**
Patient Goal
Reduce risk of falls, lose weight
[Goal](goal.html) (as part of a [CarePlan](careplan.html))
Intervention
Patient assessments
[ServiceRequest](servicerequest.html)
In addition, to the information on this page, see also [Common Use Cases](usecases.html).

<span id="w5"></span>
### Resource Classification

The following frameworks are provided for helping to understand the set of resources provided in this specification:

-   [Modules](modules.html#modules)
-   [Workflow Patterns](workflow.html#respatterns): [Event](event.html), [Request](request.html), [Definition](definition.html)
-   RIM Mappings (todo)

\[%file newfooter%\]
