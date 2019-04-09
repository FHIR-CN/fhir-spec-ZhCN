\[%settitle Clinical Module%\]
\[%file newnavbar%\]
|                                            |                                                                                        |
|--------------------------------------------|----------------------------------------------------------------------------------------|
| Work Group [\[%wgt pc%\]](%5B%wg%20pc%%5D) | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

<span id="root"></span>
Clinical Module
---------------

<span id="intro"></span>
### Introduction

This Clinical Module focuses on the FHIR Resources that represent core clinical information for a patient. The information contained in these Resources are those frequently documented, created or retrieved by healthcare providers during the course of clinical care. Resources generated during the course of diagnostic studies can be found in the [Diagnostics Module](diagnostics-module.html), whereas the Resources related to medication ordering and administration process can be found in the [Medications Module](medications-module.html).

As an introduction to FHIR APIs and Resources, please see the [Developer's Introduction](overview-dev.html) or [Clinical Introduction](overview-clinical.html) in the Overview section of the [Foundation Module](foundation-module.html).

<span id="index"></span>
### Index

The Clinical Module covers the following resources:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><ul>
<li><a href="allergyintolerance.html" title="[%resdesc AllergyIntolerance%]">AllergyIntolerance</a></li>
<li><a href="condition.html" title="[%resdesc Condition%]">Condition</a> (Problem)</li>
<li><a href="procedure.html" title="[%resdesc Procedure%]">Procedure</a></li>
<li><a href="familymemberhistory.html" title="[%resdesc FamilyMemberHistory%]">FamilyMemberHistory</a></li>
</ul></td>
<td><ul>
<li><a href="careplan.html" title="[%resdesc CarePlan%]">CarePlan</a></li>
<li><a href="goal.html" title="[%resdesc Goal%]">Goal</a></li>
<li><a href="careteam.html" title="[%resdesc CareTeam%]">CareTeam</a></li>
<li><a href="clinicalimpression.html" title="[%resdesc ClinicalImpression%]">ClinicalImpression</a></li>
</ul></td>
<td><ul>
<li><a href="adverseevent.html" title="[%resdesc AdverseEvent%]">AdverseEvent</a></li>
<li><a href="detectedissue.html" title="[%resdesc DetectedIssue%]">DetectedIssue</a></li>
<li><a href="riskassessment.html" title="[%resdesc RiskAssessment%]">RiskAssessment</a></li>
</ul></td>
</tr>
</tbody>
</table>

FHIR Resources have a low, moderate or high levels of complexity with respect to the number of primary and child elements as well as the number of referenced Resources, found in this module and others. To better understand the relationships between Resources, we recommend beginning with the lower complexity, core Resources such as [Patient](patient.html), [Condition](condition.html), and [FamilyMemberHistory](familymemberhistory.html) before addressing a high complexity Resource such as [CarePlan](careplan.html).

<span id="secpriv"></span>
### Security and Privacy

The clinical resources often represent patient-related data, and as such are susceptible to data breaching. Necessary privacy and security provision must be in place for searching and fetching this information. For more general considerations, see the [Security and Privacy module](secpriv-module.html).

<span id="uses"></span>
### Common use Cases

-   **Documenting a patient's condition** - The [Condition](condition.html) Resource is used extensively throughout FHIR Resources to associate information and activities with specific conditions. The [Condition](condition.html) Resource is broadly defined to include problems, diagnoses and health concerns.
-   **Retrieving the patient's problems**
-   **Documenting and retrieving the patient's allergies** - The [AllergyIntolerance](allergyintolerance.html) Resource is used to represent the patient's allergy or intolerance to a substance. There is vibrant debate within clinical community regarding what is appropriate to document as an allergy or intolerance. These terms are used both formally by the Allergy and Immunology community as well as informally by patients leading to confusion. Readers are referred to the Resource definition for the Scope and Usage of this resource. The AllergyIntolerance Resource also supports the documenting of the absence of an allergy.
-   **Family History** - The [FamilyMemberHistory](familymemberhistory.html) Resource can be used to document known conditions of family members and support the creation of pedigrees.
-   **Care Plans** - The [CarePlan](careplan.html) resource supports a problem based care plan with references to other Resources including [CareTeam](careteam.html), [Condition](condition.html), [Goal](goal.html), and activities such as [ServiceRequest](servicerequest.html)

<span id="roadmap"></span>
### Developmental Roadmap

Over the next 18 months, we will continue to advance the resources through the [Maturity Levels](versions.html#maturity) through the process of development and testing of the Resources. We anticipate more widespread implementation of core Resources such as Condition. Complex Resources such as CarePlan are dependent on the maturation of its referred Resources and are expected to mature more gradually. The clinical community will need to develop use cases to test and further mature the [ServiceRequest](servicerequest.html) Resource at opportunities such as the [Clinicians on FHIR sessions](https://confluence.hl7.org/display/FHIR/Clinicians+on+FHIR) at the HL7 Working Group Meetings.

\[%file newfooter%\]
