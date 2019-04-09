\[%settitle Outstanding Issues%\]
\[%file newnavbar%\]
Outstanding Issues
------------------

|                                                                                        |                                               |                                                                                         |
|----------------------------------------------------------------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------|
| [FHIR Infrastructure](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process): [Informative](versions.html#std-process) |

This specification is currently in its third round of trial use. While some parts of the specification are mature and stable, and HL7 is focusing on moving these to a formal standard, much work remains to be done in other areas. The following general areas of functionality have been deferred to a future version, or are incompletely covered in this version:

-   An alarm resource to represent current issues with the patient (e.g. device created)
-   Concern Tracking
-   Aggregated Data Reporting including Public Health Reporting
-   One or more resources for Advance Care Directive / Power of Attorney
-   A full server side query framework

For some of these, some draft content is included in the specification for implementer consideration.

In addition, there are a number of specific notes in the specification requesting feedback from implementers:

<span id="todo"></span>
-   [AllergyIntolerance](allergyintolerance.html#dstu0): new codes needed for certainty?
-   [AllergyIntolerance](allergyintolerance.html#dstu): How should "No Known Allergies" be represented?
-   [Appointment](appointment.html#dstu): Values for Appointment.priority: how interoperable are they
-   [ClinicalImpression](clinicalimpression.html#dstu): General Questions about use
-   [Clinical Reasoning](clinicalreasoning-module.html#crm-feedback): Multiple questions about implementation and usage
-   [Composition](composition.html#dstu): Is title different to type? and open questions about document signatures
-   [Condition](condition.html#dstu-1): How should "No Known Problems" be represented?
-   [DeviceRequest](devicerequest.html#dstu): Should this be combined with SupplyRequest?
-   [Exchange](exchange-module.html#dstu): Should support for ProtocolBuffers be added to the specification?
-   [Observation](observation.html#dstu): What is the best way to group Observations?
-   [Patient](patient.html#dstu): Should linking/merging affect the RESTful API?
-   [Profiling Resources](profiling.html#dstu): Need feedback on using system profiles
-   [References between Resources](references.html#dstu): Do we need to allow contained resources that reference the container?
-   [Safety](safety.html#dstu0): Request for comments about further development
-   [Security](signatures.html#dstu): Feedback about signatures on RESTful interfaces sought
-   [Subscription](subscription.html#dstu): messaging details still to be resolved
-   [SupplyRequest](supplyrequest.html#dstu): Should this be combined with DeviceRequest?
-   [Persistent Store/Database](storage.html#dstu): Is a standard extension required for resolved links?
-   [Task](task.html#dstu): Question about pre-requisites
-   [Workflow](workflow.html#issues): several implementation questions

\[%file newfooter%\]
