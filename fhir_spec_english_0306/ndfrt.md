\[%settitle Using NDF-RT with FHIR%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Using NDF-RT (the National Drug File - Reference Terminology) with FHIR
-----------------------------------------------------------------------

|                                                  |                                             |                                                                                      |
|--------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt vocab%\]](%5B%wg%20vocab%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

### Summary

|                   |                                                                                                                                                                                                                                                                                                                                 |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Source            | the National Drug File - Reference Terminology - prepared by [Veterans Health Administration](http://www.va.gov/health/), and distributed as part of [UMLS](http://www.nlm.nih.gov/research/umls/) by the [NLM](http://www.nlm.nih.gov/) ([direct link](http://www.nlm.nih.gov/research/umls/sourcereleasedocs/current/NDFRT/)) |
| System            | The URI to identify NDF-RT is not resolved. As a temporary arrangement, the URL "`http://hl7.org/fhir/ndfrt`" is to be used                                                                                                                                                                                                     |
| Version           | A version is not needed. (Use the date of the UMLS release for the version of NDF-RT if a version is desired.)                                                                                                                                                                                                                  |
| Code              | The NUI is used for the code value for an NDF-RT concept                                                                                                                                                                                                                                                                        |
| Display           | ??                                                                                                                                                                                                                                                                                                                              |
| Inactive          | Todo: Describe how it is determined which concepts are inactive                                                                                                                                                                                                                                                                 |
| Subsumption       | Subsumption testing is based in the Is-a relationship defined by NDFRT                                                                                                                                                                                                                                                          |
| Filter Properties | None are described yet                                                                                                                                                                                                                                                                                                          |

*This URL is temporary while the NDF-RT and FHIR teams discuss the long term arrangements*. Further documentation can be [found in evs](http://evs.nci.nih.gov/ftp1/NDF-RT/NDF-RT%20Documentation.pdf).

### Version Issues

NDF-RT is released as part of UMLS. Therefore, each successive release has the date of the UMLS release as its version.

### Copyright/License Issues

NDF-RT has no copyright acknowledgement required. However, users must adhere to the UMLS license.

<span id="filters"></span>
### NDF-RT Filter Properties

This section documents the property filters that can be used with the SNOMED CT code system in value set composition statements.

#### By Subsumption

|                    |                                                                                                                                                   |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Description        | Select a set of concepts based on subsumption testing                                                                                             |
| Property Name      | concept                                                                                                                                           |
| Operations Allowed | is-a                                                                                                                                              |
| Values Allowed     | NUI                                                                                                                                               |
| Comments           | Includes all concepts that have a transitive is-a relationship with the concept Id provided in the value as an NUI (including the concept itself) |

Others yet to be done.

### Implicit Value Sets

Yet to be done.

\[%file newfooter%\]
