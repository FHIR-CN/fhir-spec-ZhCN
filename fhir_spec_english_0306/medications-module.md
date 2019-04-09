\[%settitle Medications Module%\]
\[%file newnavbar%\]
|                                                                                    |                                                                                        |
|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| Work Group [\[%wgt phx%\]](%5B%wg%20phx%%5D) & [\[%wgt pher%\]](%5B%wg%20pher%%5D) | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

<span id="root"></span>
Medications Module
------------------

<span id="intro"></span>
### Introduction

This module is concerned with resources and functionality in 3 main domains:

-   The ordering, dispensing, administration of medications and recording statements of medication use.
-   Recording of Immunizations given (or not given), evaluation of given immunizations and recommendations for an individual patient at a point in time.
-   The creation or querying for medications as part of drug information or drug knowledge.

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
<li><a href="medicationrequest.html">MedicationRequest</a></li>
<li><a href="medicationdispense.html">MedicationDispense</a></li>
<li><a href="medicationadministration.html">MedicationAdministration</a></li>
</ul></td>
<td><ul>
<li><a href="medicationstatement.html">MedicationStatement</a></li>
<li><a href="medication.html">Medication</a></li>
<li><a href="medicationknowledge.html">MedicationKnowledge</a></li>
</ul></td>
<td><ul>
<li><a href="immunization.html">Immunization</a></li>
<li><a href="immunizationevaluation.html">ImmunizationEvaluation</a></li>
<li><a href="immunizationrecommendation.html">ImmunizationRecommendation</a></li>
</ul></td>
</tr>
</tbody>
</table>

<span id="meds"></span>
#### Medications

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Name</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr class="even">
<td><a href="medicationrequest.html">MedicationRequest</a></td>
<td><p>Represents an instruction for the administration of medication to a patient - both in the inpatient (hospital) and community setting. It can also include instructions for the dispensing, the reasons why the administration should occur and other data.</p>
<p>It is called an 'Request' to be consistent with other FHIR resources and the workflow pattern, but a common alias for this resource is a 'Prescription' or an 'Order'. The Order itself represents the content of the instruction and is not, by itself, actionable. The workflow process around 'fulfilling' the order is part of the <a href="workflow-module.html">generic FHIR workflow</a> (see below), with the MedicationRequest representing the contents.</p></td>
</tr>
<tr class="odd">
<td><a href="medicationdispense.html">MedicationDispense</a></td>
<td>The provision of a supply of a medication with the intention that it is subsequently consumed by a patient (usually in response to a prescription).</td>
</tr>
<tr class="even">
<td><a href="medicationadministration.html">MedicationAdministration</a></td>
<td>A record of a patient actually consuming a medicine, or if it has otherwise been administered to them</td>
</tr>
<tr class="odd">
<td><a href="medicationstatement.html">MedicationStatement</a></td>
<td>This is a record indicating that a patient may be taking a medication now, has taken the medication in the past, or will be taking the medication in the future. The source for this information can be the patient, significant other (such as a family member or spouse), or a clinician. A common scenario where this information is captured is during the history taking process during a patient visit or stay. A medication statement is not a part of the prescribe-&gt;dispense-&gt;administer sequence, but is a report that such a sequence (or at least a part of it) did take place, resulting in a belief that the patient has received a particular medication. It may be used to construct a patients 'Current Medications' list.</td>
</tr>
<tr class="even">
<td><a href="medication.html">Medication</a></td>
<td>The medication resource represents an actual medication that can be given to a patient, and referenced by the other medication resources. In many cases, this resource is not needed and the drug is indicated by a reference to the appropriate terminology and so can be represented using a codeable concept. In other cases, however, it may be desired to indicate more details than the simple drug (such as the packaging, whether it is a generic medication or the active and inactive ingredients) and so the Medication resource can be used for this.</td>
</tr>
<tr class="odd">
<td><a href="medicationknowledge.html">MedicationKnowledge</a></td>
<td>The MedicationKnowledge resource is draft and is included for comment purposes. This resource represents information about a medication, for example, details about the medication including interactions, contraindications, cost, regulatory status, administration guidelines, etc.</td>
</tr>
</tbody>
</table>

<span id="imm"></span>
#### Immunizations

|                                                               |                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                                                      | **Description**                                                                                                                                                                                                                                                                                                                                                                              |
| [Immunization](immunization.html)                             | The Immunization resource is intended to cover the recording of current and historical administration of vaccines to patients across all healthcare disciplines in all care settings and all regions. This includes immunization of both humans and animals, but does not include the administration of non-vaccine agents, even those that may have or claim to have immunological effects. |
| [ImmunizationRecommendation](immunizationrecommendation.html) | A patient's point-in-time immunization and recommendation (i.e. forecasting a patient's immunization eligibility according to a published schedule) with optional supporting justification                                                                                                                                                                                                   |
| [ImmunizationEvaluation](immunizationevaluation.html)         | The ImmunizationEvaluation resource is intended to cover communicating the results of an evaluation of a vaccine administration event (documented using the Immunization resource) against a set of published recommendations (protocols).                                                                                                                                                   |

<span id="uses"></span>
### Common Use Cases

-   Placing a Medication Request (aka Prescription or Order). The MedicationRequest resource represents the details of what medication the prescriber intends the patient to receive and other details such as the dose, timing and route. However, while it represents that order, the actual workflow around the supply (dispensing) and administration of that medication is managed by the common [workflow functionality](workflow-module.html), resulting in the creation of the other medication resources (MedicationDispense, MedicationAdministration) as it executes.
-   Listing a patient's current medications. This is represented using the [List](list.html) resource, which allows an author to construct a 'curated' list. This has features beyond a simple collection of resources - such as the ability to state that the patient is not currently taking any medications at the time that the list is constructed, or changes that are made at a point in time (sometimes called medication reconciliation). FHIR defines a number of specific [functional lists](lifecycle.html#lists) for this purpose, and a specific [operation](list-operation-find.html) to retrieve it. Note that FHIR does not describe how the list should be maintained by the individual system, as that will vary widely between implementations.
-   Retrieving a list of Immunizations. This can be achieved using a [simple query](http.html#search) against the [Immunization](immunization.html) resource type. Note that an Immunization resource can specifically state that it was not given, as well as any reactions that occurred. Note that if the reaction is considered to be an indication of an allergy or intolerance, then a separate [AllergyIntolerance](allergyintolerance.html) resource should be created.
-   Retrieving recommendations for a specific patient at a point in time. The recommendation for immunizations to give would be represented by an ImmunizationRecommendation resource, but the determination of that recommendation is a part of [Decision Support](clinicalreasoning-module.html), with the actual immunization schedule being represented by a generic [Plan Definition](plandefinition.html), individual [Care Plan](careplan.html) or some other record.
-   Dispensing a medication based on a Medication Request (aka Prescription or Order). The MedicationDispense resource represents the details of the dispensing event including the actual product provided to the patient and the dosage to be administered or consumed.
-   Retrieving the planned medication therapy for specific patient at a point in time. The intended medication therapy may be represented by an individual [Care Plan](careplan.html).
-   Retrieving information about a medication either as a stand alone request or as while reviewing a patients' medication list

### Other resources

There are other resources that are of particular interest in the medication domain.
-   [SupplyRequest](supplyrequest.html) and [SupplyDelivery](supplydelivery.html) which, like MedicationRequest, are 'detail' resources used as part of a [workflow](workflow-module.html). They are concerned with the request of supplies used in the healthcare process. This includes supplies specifically used in the treatment of patients as well as supply movement within an institution (transport a set of supplies from materials management to a service unit (nurse station).
-   This specification also includes a draft set of resources that are used for registration of medications for regulatory purposes:
    -   [MedicinalProduct](medicinalproduct.html "[%resdesc MedicinalProduct%]")
    -   [MedicinalProductAuthorization](medicinalproductauthorization.html "[%resdesc MedicinalProductAuthorization%]")
    -   [MedicinalProductContraindication](medicinalproductcontraindication.html "[%resdesc MedicinalProductContraindication%]")
    -   [MedicinalProductIndication](medicinalproductindication.html "[%resdesc MedicinalProductIndication%]")
    -   [MedicinalProductIngredient](medicinalproductingredient.html "[%resdesc MedicinalProductIngredient%]")
    -   [MedicinalProductInteraction](medicinalproductinteraction.html "[%resdesc MedicinalProductInteraction%]")
    -   [MedicinalProductManufactured](medicinalproductmanufactured.html "[%resdesc MedicinalProductManufactured%]")
    -   [MedicinalProductPackaged](medicinalproductpackaged.html "[%resdesc MedicinalProductPackaged%]")
    -   [MedicinalProductPharmaceutical](medicinalproductpharmaceutical.html "[%resdesc MedicinalProductPharmaceutical%]")
    -   [MedicinalProductUndesirableEffect](medicinalproductundesirableeffect.html "[%resdesc MedicinalProductUndesirableEffect%]")
    -   [SubstancePolymer](substancepolymer.html "[%resdesc SubstancePolymer%]")
    -   [SubstanceReferenceInformation](substancereferenceinformation.html "[%resdesc SubstanceReferenceInformation%]")
    -   [SubstanceDefinition](substancedefinition.html "[%resdesc SubstanceDefinition%]")

    These resources are under development in association with several medication regulation authorities.

<span id="secpriv"></span>
### Security and Privacy

As with all clinical data, Medications (in particular) can be sensitive information as specific medications can indicate the presence of private information such as mental health disorders or HIV. However, withholding information about what medications a person is taking can lead to catastrophic results, and so needs to be considered very carefully. At the least, a clinician should be made aware that there is information available that they have not been given when making clinical decisions.

For more general considerations, see [the Security and Privacy module](secpriv-module.html).

<span id="roadmap"></span>
### Developmental Roadmap

The Pharmacy workgroup has plans to improve all existing resources e.g. adding in features that support detailing our conditional orders in a structured way; evaluating requirements for supporting drug formularies and medication knowledge. This work is expected to include the development and approval of a new resource and may involve updates to the Medication Resource.

\[%file newfooter%\]
