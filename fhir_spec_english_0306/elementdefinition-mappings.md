\[%settitle Element Definition Mappings%\]
\[%file newnavbar%\]
&lt;%edheader mappings%&gt;
Element Definition Mappings
---------------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

This page provides mappings for Element Definition (see [Mappings to Other Standards](mappings.html) for further information & status).

Many other standard frameworks define frameworks for defining "data elements". These overlap to some degree with the `ElementDefinition` type. This page provides general mappings between ElementDefinition and the other frameworks. One important consideration with regard to other Element definition frameworks is the scope of the definition. Many of these definition frameworks use the term "Data Element" to refer to a data item that is collected and stored with provenance, such as when it was collected, who recorded it, etc. In this specification, that's an [Observation](observation.html), and the definition of this kind of data element is an [ObservationDefinition](observationdefinition.html), or a [StructureDefinition](structuredefinition.html) that contains several different atomic data items. An ElementDefinition in this specification is a narrower notion, solely around the characteristics of a single element, it's definition, and it's [value domain](https://en.wikipedia.org/wiki/Data_domain). Other frameworks - especially ISO 11179 - are used in both ways, sometimes with no formal differentiation between them. For this reason, the mappings on this page are very provisional, and are provided with the intent of helping implementers understand the possible relationships.

On this page:

|                            |                                                                                                                                                                                                                                                                                                                                                                                                      |
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **[v2](#v2)**              | Mappings to the V2 segment OM1 which is used to define observations (i.e. also related to [ObservationDefinition](observationdefinition.html))                                                                                                                                                                                                                                                       |
| **[RIM](#rim)**            | Mappings to the RIM class Observation in definition mood which is used to define observations (i.e. also related to [ObservationDefinition](observationdefinition.html))                                                                                                                                                                                                                             |
| **[IHE DEX](#dex)**        | Mappings IHE Data Element Exchange, which is closer to defining atomic data elements - still very incomplete                                                                                                                                                                                                                                                                                         |
| **[LOINC](#loinc)**        | Mappings to the LOINC master table which defines observations (i.e. also related to [ObservationDefinition](observationdefinition.html))                                                                                                                                                                                                                                                             |
| **[ISO 11179](#iso11179)** | Mappings to ISO 11179 which details how the ElementDefinition class relates to the ISO 11179 framework. Note that the principle differences are that FHIR does not differentiate between a Data Element and a Data Element Value, and the FHIR specification is heavily type dependent. Also, the FHIR specification includes constraints and other concerns that are outside the scope of ISO 11179 |

&lt;%dtmappings ElementDefinition%&gt;

\[%file newfooter%\]
