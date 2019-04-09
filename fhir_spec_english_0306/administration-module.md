\[%settitle Administration Module%\]
\[%file newnavbar%\]
|                                            |                                                                                        |
|--------------------------------------------|----------------------------------------------------------------------------------------|
| Work Group [\[%wgt pa%\]](%5B%wg%20pa%%5D) | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

<span id="root"></span>
Administration Module
---------------------

<span id="intro"></span>
### Introduction

The Administrative module covers the base data that is then linked into the other modules for clinical content, finance/billing, workflow, etc.
It is built on the FHIR technology platform modules.

Before any clinical data can be recorded, the basic information of the patient must be recorded, and then often the basis of the interaction (such as an encounter).

<span id="index"></span>
### Index

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<tbody>
<tr class="odd">
<td><ul>
<li><a href="patient.html">Patient</a></li>
<li><a href="relatedperson.html">RelatedPerson</a></li>
<li><a href="person.html">Person</a></li>
<li><a href="group.html">Group</a></li>
<li><a href="practitioner.html">Practitioner</a></li>
<li><a href="practitionerrole.html">PractitionerRole</a></li>
</ul></td>
<td><ul>
<li><a href="organization.html">Organization</a></li>
<li><a href="location.html">Location</a></li>
<li><a href="healthcareservice.html">HealthcareService</a></li>
<li><a href="endpoint.html">Endpoint</a></li>
<li><a href="schedule.html">Schedule</a></li>
<li><a href="slot.html">Slot</a></li>
</ul></td>
<td><ul>
<li><a href="episodeofcare.html">EpisodeOfCare</a></li>
<li><a href="encounter.html">Encounter</a></li>
<li><a href="appointment.html">Appointment</a></li>
<li><a href="appointmentresponse.html">AppointmentResponse</a></li>
<li><a href="account.html">Account</a></li>
<li><a href="flag.html">Flag</a></li>
</ul></td>
<td><ul>
<li><a href="device.html">Device</a></li>
<li><a href="devicedefinition.html">DeviceDefinition</a></li>
<li><a href="devicemetric.html">DeviceMetric</a></li>
<li><a href="substance.html">Substance</a></li>
</ul></td>
</tr>
</tbody>
</table>

<span id="patient-reg"></span>
#### Patient Registers

Track people involved in receiving healthcare, the basics nearly everything else references back to

**Name**
**Aliases**
**Description**
\[%res-item Patient%\] \[%res-item RelatedPerson%\] \[%res-item Person%\] \[%res-item Group%\]
<img src="administration-module-person.png" alt="Image showing the relationship between resources representing people" width="584" />

\[%impl-note%\] [Patient linking](patient.html#links) should also be considered when evaluating searches with references to other resources. e.g. searching for a patients' conditions for a patient.
At present the specification does not define if the links should be also followed to include conditions that reference the linked patients too. We are currently seeking feedback on this. \[%end-note%\] \[%impl-note%\] The Person resource may be used as a centralized register of people that may eventually be involved in healthcare, and could be used as the central core demographics register.
However, the fields/values in Person are duplicated in the other resources, and in many cases the Person resource will be hosted on external systems. \[%end-note%\] <span id="clinical-reg"></span>
#### Clinical Categorization Resources

Most clinical activities occur grouped in some way. Long term care is typically covered by an EpisodeOfCare, whereas short term care is covered by encounters. Account associates the tracking of transactions back to a Patient (or other resource). Flag is just used to highlight a warning or other notification about a patient (or other resource)

**Name**
**Aliases**
**Description**
\[%res-item EpisodeOfCare%\] \[%res-item Encounter%\] \[%res-item Account%\] \[%res-item Flag%\]
<img src="administration-module-interactions.png" alt="Image showing the administration interactions" width="600" />

\[%impl-note%\] Resources shown with a dotted box are described in other sections of the specification: `Coverage` and `Claim` are from the [section on Finance](financial-module.html). \[%end-note%\] <span id="dir-reg"></span>
#### Service Provider Directory Resources

Service Provider Directory resources are usually stored in the administration section of applications, and may even be synchronized from external systems.

**Name**
**Aliases**
**Description**
\[%res-item Organization%\] \[%res-item Location%\] \[%res-item Practitioner%\] \[%res-item PractitionerRole%\] \[%res-item HealthcareService%\] \[%res-item Endpoint%\]
<img src="administration-module-prov-dir.png" alt="Image showing the provider directory resources" width="513" />

<span id="sched"></span>
#### Scheduling and Appointments

The Scheduling/Appointment resources permit the planning of encounters to occur and follow on with other clinical activities.

**Name**
**Aliases**
**Description**
\[%res-item Schedule%\] \[%res-item Slot%\] \[%res-item Appointment%\] \[%res-item AppointmentResponse%\]
<img src="administration-module-scheduling.png" alt="Image showing the scheduling interactions" width="600" />

<span id="dev-sub"></span>
#### Devices and Substances

Other assets are often registered in the administration system, and maintained as master files.

**Name**
**Aliases**
**Description**
\[%res-item Device%\] \[%res-item DeviceDefinition%\] \[%res-item DeviceMetric%\] \[%res-item Substance%\]
<span id="secpriv"></span>
### Security and Privacy

Patient privacy is handled with security labels and tags in the Resource [Meta](resource.html#Meta) property. This is the standard way in which that the FHIR specification provides this supporting information to a sub-system that implements it (which is not defined by FHIR).

One of the more common use cases is for marking a patient as being a [celebrity](security-labels.html).

Note that privacy considerations apply to Person, Practitioner and RelatedPerson records in addition to Patient's.

While Organization, Location, Device and other non-person-identifying records are generally subject to less stringent security precautions, such data must still be protected to avoid safety issues (e.g. someone maliciously changing the ingredients associated with a drug to cause/fail to cause alerts)

Devices can be linked to Patients. If this occurs, they must be protected as any other patient-linked element

For more general considerations, see [the Security and Privacy module](secpriv-module.html).

<span id="uses"></span>
### Common Use Cases

Administration Resources are cornerstone resources that are used by clinical and other domains of the FHIR Standard.

-   **Managing a Master Record of a Patient and a Person** (e.g. MPI)
    A [Patient](patient.html) resource is used to describe patient demographic information and any updates to it. It can be used to communicate [Patient](patient.html) information to other systems (e.g. other registries, clinical, ancillary and financial systems). Some systems distinguish the Patient Registry (or Client Registry) from the Person Registry. A [Person](person.html) resource is a base for the Person Registry system. The Patient/Person Management use case includes creation, update, as well as merge/unmerge and link/unlink scenarios.
-   **Managing a Master Record of a Provider and Service Catalogue** (e.g. Provider Registry, Service Directory)
    A [Practitioner](practitioner.html) resource is a base resource for enabling the registry of individuals, related to providing health care services. Other resources, such as [Organization](organization.html), [Location](location.html), [HealthcareService](healthcareservice.html), are creating a complete picture of where, how and by whom the care services are offered to a patient. The resources can be used for managing the master record or as a reference in clinical resources to inform about participants and places for various clinical resources.
-   **Managing Other Administrative Records**
    The Administration domain of the FHIR standard includes creation and update of [Device](device.html) and [Substance](substance.html) records. Resources can be used for managing a master record or communicating its information to other systems.
-   **Enabling Patient Profiles, Clinical Reporting and Connecting Clinical Records**
    Administration Resources are referred to by almost all clinical resources. Querying systems, using the references to Administration Resources enables the creation of profiles and reports of various complexities.
-   **Enabling Clinical Grouping and Financial Reporting**
    Other use cases are included in the roadmap of resources, developed by the Patient Administration group. The roadmap section lists plans and updates of the current work.

<span id="roadmap"></span>
### Developmental Roadmap

The Patient Administration is currently working through resources that support:

-   Encounters and Scheduling *(enhance maturity of encounters and further develop in/outpatient scheduling)*
-   Service Provider Directory *(in co-ordination with the Argonaut Provider Directory group)*
-   Financial Management interactions *(account/coverage, then charge item, which links administration to billing)*

Many of the administrative resources are part of the core resources that most systems use first and have formed the basis for most people's first experiences with FHIR.
However this limited exposure has still to be proven in all contexts, such as veterinary, public health and clinical research.

\[%file newfooter%\]
