\[%settitle Using NDC with FHIR%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Using NDC and NHRIC Codes with FHIR
-----------------------------------

|                                                  |                                             |                                                                                      |
|--------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt vocab%\]](%5B%wg%20vocab%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

The National Drug Codes (NDC) and National Health Related Items Code (NHRIC) codes are codes issued by the FDA for tracking drugs and devices. Note that the NHRIC codes are being replaced by the [UDI system](http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/).

### Summary

|                   |                                                                                                                                                                                                               |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Source            | [National Drug Code Directory](http://www.fda.gov/Drugs/InformationOnDrugs/ucm142438.htm) and the [NHRIC Labeler Codes](http://www.fda.gov/ForIndustry/DataStandards/StructuredProductLabeling/ucm191017.htm) |
| System            | The URI to identify NDC/NHRIC codes is `http://hl7.org/fhir/sid/ndc`                                                                                                                                          |
| Version           | Use YYYYMMDD for the date of publication, but see note below                                                                                                                                                  |
| Code              | The 10 digit NDC code, with "-" included. Note that different NDC codes have different positions for the "-": 1234-5678-90, 12345-6789-0, or 12345-678-90. The "-" must be correct for each NDC code          |
| Display           | Use the PACKAGEDESCRIPTION column value from the TSV or Excel distribution file                                                                                                                               |
| Inactive          | Todo: Describe how it is determined which concepts are inactive                                                                                                                                               |
| Subsumption       | No Subsumption relationships are defined for the NDC codes                                                                                                                                                    |
| Filter Properties | None are described yet                                                                                                                                                                                        |

### Version Issues

The FDA published list of NDC codes for [finished drug products](http://www.fda.gov/Drugs/InformationOnDrugs/ucm142438.htm) is updated daily. Use the format YYYYMMDD to refer to a particular distribution. Note that while only valid NDC codes appear in the distribution file, there are other NDC codes that organizations have assigned but not yet reported to FDA. Therefore, the full set of NDCs that exists in the marketplace is unknown and cannot be versioned completely.

### Copyright/License Issues

NDC codes have no copyright acknowledgment or license requirements.

### NDF-RT Filter Properties

<span id="filters"></span>
No need for filters identified yet.

### Implicit Value Sets

No need for implicit value sets identified yet.

\[%file newfooter%\]
