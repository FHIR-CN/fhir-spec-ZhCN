\[%settitle Using MDC Codes with FHIR%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Using MDC Codes with FHIR
-------------------------

|                                              |                                             |                                                                                      |
|----------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt dev%\]](%5B%wg%20dev%%5D) Work Group | [Maturity Level](versions.html#maturity): 1 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

### Summary

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Source</td>
<td>Medical Device Communications (MDC) codes are from ISO/IEEE 11073-10101 Nomenclature standard and amendments. This is a detailed system of codes used in personal health devices and and acute-care (point-of-care) medical devices for identification of physiological measurements and also for alerts, alarms, and numerous technical conditions such as calibration state and battery state. The physiological measurements can in most common cases be mapped to LOINC if desired using a table of equivalences developed by LOINC. Medical Codes and related values are available from the <a href="https://rtmms.nist.gov/rtmms/">Rosetta Terminology Mapping Management System (RTMMS)</a>, maintained by the U.S. National Institute of Standards and Technology. RTMMS includes new codes in the process of being published in the standard.</td>
</tr>
<tr class="even">
<td>System</td>
<td>The URI <code>urn:iso:std:iso:11073:10101</code> identifies the MDC code system.</td>
</tr>
<tr class="odd">
<td>Version</td>
<td>Date (in FHIR <a href="datatypes.html#date">date format</a> YYYY-MM-DD) that this version of the code system was published.</td>
</tr>
<tr class="even">
<td>Code</td>
<td>MDC codes are 32-bit unsigned decimal integers where the upper 16 bits are the partition (a usage category - see below) and the lower 16 bits are the term codes. The codes are available as CF_CODE10 in the RTMMS database.</td>
</tr>
<tr class="odd">
<td>Display</td>
<td>The standard provides a Reference Identifier (REFID in RTMMS) for each code, which can placed in this element. If defined, Systematic Name, Common Term, and Acronym are added as designations for use as alternative display values</td>
</tr>
<tr class="even">
<td>Inactive</td>
<td>Codes with status withdrawn (see properties below) are considered inactive</td>
</tr>
<tr class="odd">
<td>Specification</td>
<td>The normative specification is defined in the documents
<ul>
<li>ISO/IEEE Standard 11073-10101 (2004) Health informatics — Point-of-care medical device communication — Part 10101:Nomenclature. <a href="http://standards.ieee.org/findstds/standard/11073-10101-2004.html" class="uri">http://standards.ieee.org/findstds/standard/11073-10101-2004.html</a></li>
<li>11073-10101a (2015) IEEE Standard Health informatics — Point-of-care medical device communication — Part 10101: Nomenclature Amendment 1: Additional Definitions. <a href="https://standards.ieee.org/findstds/standard/11073-10101a-2015.html" class="uri">https://standards.ieee.org/findstds/standard/11073-10101a-2015.html</a></li>
</ul></td>
</tr>
</tbody>
</table>

### Copyright Issues

IEEE holds copyright in the standards referenced. IEEE, as part of its support of the RTMMS database and on-going, royalty-free agreement with the NIST, makes these terms available for the development of IEEE11073 compliant products and supporting material (e.g. in user documentation, collateral, etc.). Any use of IEEE terms beyond compliant products and support material may require prior approval from IEEE. Please notify IEEE of any request to use, modify, or reproduce these terms in any manner beyond the permitted use described above. To request permission, please submit your request to <stds-ipr@ieee.org>.

The following information is provided free of charge to all NIST RTMMS users via the IEEE-SA and NIST Royalty Free Agreement:

-   `Reference ID` ('REFID' in RTMMS)
-   `Terminology Code` ( 'CODE10', 'CF\_CODE10', 'UCODE10', 'CF\_UCODE10', 'ECODE10', and 'CF\_ECODE10' in RTMMS)
-   `Description` ('Term Description' in RTMMS)
-   `Systematic Name` ('Systematic Name' in RTMMS)
-   `Common Term` ('Common term' in RTMMS)

(Source: <https://rtmms.nist.gov/rtmms/index.htm#!ieee>).

<span id="faq"></span>
### Frequently Asked Questions on Use of MDC Nomenclature

Source: [11073.org Our Standards &gt; Conditions of Use](http://www.11073.org/)

> Q. If I am writing a commercial application that takes medical measurements (perhaps from a proprietary device) and transcodes it to an HL7 V2 message or V3 document or FHIR resources using IEEE 11073 nomenclature codes, ref-ids, and descriptions obtained from RTMMS or are my own, am I required to pay any type of fee to IEEE?

A. No. If you wish to obtain the official 11073-10101 standard you will need to purchase that document. However, if you are just interested in using the codes, Ref-ids, and even descriptions, they are freely available in the NIST RTMMS tool.
> Q. If I am writing a commercial application that decodes HL7 V2 messages, V3 documents, and FHIR resources, and displays the contents in a human readable form where the descriptions of the codes are my own or are from RTMMS, am I required to pay any type of fee to IEEE?

A. No.
> Q. If I make a commercial library with source where one of the source files contains all the codes, ref-id, and descriptions (either my own or from the RTMMS tool) needed for the type of application it supports, am I required to pay any type of fee to IEEE?

A. No.
> Q. Am I freely able to use the codes, refids and above descriptions in customer-facing documentation?

A. Yes
<span id="refid"></span>
### Reference Identifiers

Text reference identifiers are given in the standards for each numeric code identifying a concept. Since they were constructed in simple patterns that are usually easy for humans to deduce meanings from, they are convenient for human readers, where the numeric codes are not. They are generally composed of upper case letters such as MDC\_ECG\_HEART\_RATE. The few exceptions are cases that where mixed-case identifiers are familiar to end users, such as identifiers for certain ECG leads.

<span id="partitions"></span>
### Partition Codes

The MDC codes are 32-bit, four-byte, integers. The most significant 16 bits are partition codes. Partitions define terminology groups, for example the dimension partition contains all the unit codes. There are currently the following partitions defined:

|                                                 |                       |      |
|-------------------------------------------------|-----------------------|------|
| Name                                            | Reference Identifier  | Code |
| Unspecified                                     | MDC\_PART\_UNSPEC     | 0    |
| Object infrastructure                           | MDC\_PART\_OBJ        | 1    |
| Supervisory Control And DataAcquisition (SCADA) | MDC\_PART\_SCADA      | 2    |
| Event                                           | MDC\_PART\_EVT        | 3    |
| Dimension                                       | MDC\_PART\_DIM        | 4    |
| Virtual Attribute                               | MDC\_PART\_VATTR      | 5    |
| Parameter Group                                 | MDC\_PART\_PGRP       | 6    |
| Body Sites                                      | MDC\_PART\_SITES      | 7    |
| Infrastructure                                  | MDC\_PART\_INFRA      | 8    |
| File Exchange Format                            | MDC\_PART\_FEF        | 9    |
| ECG Extension                                   | MDC\_PART\_ECG\_EXTN  | 10   |
| IDCO Extension                                  | MDC\_PART\_IDCO\_EXTN | 11   |
| Disease Management                              | MDC\_PART\_PHD\_DM    | 128  |
| Health and Fitness                              | MDC\_PART\_PHD\_HF    | 129  |
| Assisted Independent Living                     | MDC\_PART\_PHD\_AI    | 130  |
| Return codes                                    | MDC\_PART\_RET\_CODE  | 255  |
| External Nomenclature                           | MDC\_PART\_EXT\_NOM   | 256  |
| Device settings                                 | MDC\_PART\_SETTINGS   | 258  |
| Private                                         | MDC\_PART\_PVT        | 1024 |

Some of the partitions are currently used only for Personal Health Devices (PHDs) such as the Health and Fitness partition. Others, such as the virtual attribute partition, are only used by Point of Care Devices (PoCDs). However, there is nothing in either the 11073-10201, 11073-20601, or 11073-10101 standards that limit the use of any partition to either PoCDs or PHDs

<span id="terms"></span>
### Term Codes

The least significant 16-bits are term codes. While there are only a few partitions, for many of the partitions there are thousands of term codes. The term code, along with the partition, identifies the item. The example below shows a heart rate measurement encoding from an ECG device in XML and JSON:

``` xml
 <coding>
   <system value="urn:iso:std:iso:11073:10101"/>
   <code value="147842"/>
   <display value="MDC_ECG_HEART_RATE"/>
 </coding>
```

``` json
  coding": [{
    "system": "urn:iso:std:iso:11073:10101",
    "code": "147842",
    "display": "MDC_ECG_HEART_RATE"
  }]
```

If one converts the code 147842 into HEX, the value becomes 0x24182. The most significant 16 bits indicates that the code comes from the SCADA partition (2) and the term code is 0x4182 or 16770. Implementers can easily obtain the partition and term codes using simple binary AND and SHIFT operations. If one looks up this code in the RTMMS tool one will find an array of information about the code, for example, the term description “Rate of cardiac beats”.

<span id="properties"></span>
### MDC Properties

In addition to the standard properties, the following properties are defined for MDC:
|            |         |                                                                                                                                                                                       |
|------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| status     | Coding  | Life cycle status of the term code in RTMMS                                                                                                                                           |
| harmonized | boolean | Indicates whether the term code has been agreed upon during the open consensus-based Rosetta harmonization process                                                                    |
| partition  | code    | Partition is a group for type+types of semantics that are assigned to a contiguous term code range and have a categorical relationship. Partition codes are listed in the table above |

Status Property
\[Final definitions still to be determined from what's available at RTMMS\]

|             |                                                                                                                                                                                        |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Status      | Description                                                                                                                                                                            |
| provisional | Terms with provisional reference identifier and term code that may be used for development and interoperability testing. Provisional terms shall not be released in production devices |
| approved    | Terms that got final approval for inclusion to RTMMS. Approved terms may be used in production devices                                                                                 |
| zombie      | Provisional terms that didn't get final approval. Reference identifier and term code will not be allocated to new terms                                                                |
| published   | Terms that are included in in a revision of the IEEE 11073-10101 standard                                                                                                              |
| deprecated  | Deprecated terms shall be removed from use in production devices                                                                                                                       |
| withdrawn   | Use of withdrawn terms shall be indicated as an error                                                                                                                                  |

\[%file newfooter%\]
