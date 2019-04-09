\[%settitle Using ICD-X with FHIR%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Using ICD-\[X\] Codes with FHIR
-------------------------------

|                                                  |                                             |                                                                                      |
|--------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt vocab%\]](%5B%wg%20vocab%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

ICD is a family of code systems maintained by [WHO](http://www.who.int/classifications/icd/en/), with many countries publishing their own variants.

There are two principal revisions of ICD in use - ICD-10 and ICD-9 (note that while US usage has recently updated to ICD-10, there is still a lot of legacy data coded in ICD-9). Though these can be referred to as different versions of ICD, they are entirely distinct sets of codes, with significant differences in organization and coding rules. Plus, if period ('.') characters are disregarded (as occurs in some systems), a few of the codes are overlapping between ICD-9 and ICD-10. Given these considerations, ICD-9 and ICD-10 are represented as entirely separate code systems. The next revision, ICD-11, is scheduled for release in 2017.

### Summary

ICD-10
ICD-9
Source
[WHO](http://www.who.int/classifications/icd/en/) or see below
([CDC](http://www.cdc.gov/nchs/icd/icd9.htm))
System
`http://hl7.org/fhir/sid/icd-10` and
http://hl7.org/fhir/sid/icd-10-\[x\] (see below)
http://hl7.org/fhir/sid/icd-9-cm
OID
2.16.840.1.113883.6.3
2.16.840.1.113883.6.42
Version
The versioning convention and frequency may vary between the various ICD revisions and variants. WHO publishes a new version of ICD-10 annually in October (with minor updates annually, and major updates, if required, every 3 years - the versions are identified as 'YYYY', e.g. '2016'). The national variants (which in some cases are used multi-nationally) are also typically published on an annual basis (refer to the documentation for a particular variant for details).
Code
Either an ICD-10 or ICD-9 code, or a dual (multiple) coding expression - see below. ICD codes SHALL be represented with the period included, e.g. 123.4
Display
There are no specific conventions required or described for obtaining the complete display string for use for each code.
Inactive
ICD-9 and ICD-10 do not have codes that are identified as inactive (although in some cases previously included codes may have been removed or changed in meaning in subsequent versions).
Hierarchy
The tabular representations are organized with headings and multiple levels of codes (typically based on the numbers of digits contained in each code), but an explicit hierarchy is not defined.
Filter Properties
None are described yet.
<span id="variants"></span>
### ICD-10 variants

Variants (other variants exist which are not listed here):

|               |                                             |                                                                        |
|---------------|---------------------------------------------|------------------------------------------------------------------------|
| Germany       | `http://fhir.de/CodeSystem/dimdi/icd-10-gm` | see [HL7 Germany page](http://wiki.hl7.de/index.php?title=Kodesysteme) |
| Netherlands   | `http://hl7.org/fhir/sid/icd-10-nl`         | 2.16.840.1.113883.6.3.2                                                |
| United States | `http://hl7.org/fhir/sid/icd-10-cm`         | 2.16.840.1.113883.6.90                                                 |

<span id="multiple-coding"></span>
### Multiple Coding

#### Dual Coding (“dagger and asterisk” system)

For dual ("two code", “dagger and asterisk”) coding see volume 2 [ICD-10 Manual](http://www.who.int/entity/classifications/icd/ICD-10_2nd_ed_volume2.pdf)), section 3.1.3 *Two codes for certain conditions*. In cases where two codes are required, the primary recommendation for representing this coding in FHIR (in Coding.code) is to simply use the two ICD-10 codes separated by a space, e.g. "J21.8 B95.6", as the code value (string). This is a simple form of post-coordination syntax. Alternatively, another possible syntax that may be used (which may be desirable or required in some situations) is to include the characters of the dagger (represented as † or +) for the primary code and the asterisk (\*) for the secondary code as part of the post-coordinated code value, e.g. "J21.8+ B95.6\*". In either case, it is recommended that the primary (+) code for the underlying generalized disease is listed first, followed by the secondary (\*) code for the specific manifestation in a particular organ or site.

Dual coding in ICD-10 is used for the following (and potentially other) reasons:

Coding for diagnostic statements containing information about both (1) an underlying generalized disease and (2) a manifestation in a particular organ or site which is a clinical problem in its own right. This is referred to as the "dagger and asterisk" system, as it marks the primary code for the underlying disease with a dagger (†) and an optional additional code for the manifestation with an asterisk (\*).
Other optional dual coding (noted in the tabular representation as “Use additional code, if desired ...”)
-   For local infections, classifiable to the “body systems” chapters, codes from Chapter I may be added to identify the infecting organism, where this information does not appear in the title of the rubric.
-   For neoplasms with functional activity. To the code from Chapter II may be added the appropriate code from Chapter IV to indicate the type of functional activity.
-   For neoplasms, the morphology code from Volume 1, although not part of the main ICD, may be added to the Chapter II code to identify the morphological type of the tumour.
-   For conditions classifiable to F00-F09 (Organic, including symptomatic, mental disorders) in Chapter V, where a code from another chapter may be added to indicate the cause, i.e. the underlying disease, injury or other insult to the brain.
-   Where a condition is caused by a toxic agent, a code from Chapter XX may be added to identify that agent.
-   Where two codes can be used to describe an injury, poisoning or other adverse effect: a code from Chapter XIX, which describes the nature of the injury, and a code from Chapter XX, which describes the cause.

Dual Coding Example: "Staph aureus bronchiolitis" is coded using ICD-10 codes J21.8 "Acute bronchiolitis due to other specified organisms" and B95.6 "Staphylococcus aureus as the cause of diseases classified to other chapters" as:

      <coding>
        <system value="http://hl7.org/fhir/sid/icd-10"/>
        <code value="J21.8 B95.6"/>
      </coding>

or, with the + and \* characters included:
      <coding>
        <system value="http://hl7.org/fhir/sid/icd-10"/>
        <code value="J21.8+ B95.6*"/>
      </coding>

#### Additional Characters

Some jurisdictions (e.g. Germany) have additional coding requirements that go beyond the dual coding “dagger and asterisk” coding approach (syntax). In ICD-10-GM used in Germany the ! character is used to indicate a secondary diagnosis.

Primary diagnosis

-   S62.32 - Fracture of shaft of metacarpal bone

Secondary diagnosis

-   Z33! - Pregnancy as a secondary diagnosis

The recommended syntax for representing these combinations of codes in FHIR (in Coding.code) is to include the additional (+\*!) characters when they are present and to separate the code groups with a space, as:

      <coding>
        <system value="http://fhir.de/CodeSystem/dimdi/icd-10-gm"/>
        <version value="2017"/>
        <code value="S62.32 Z33!"/>
      </coding>

#### Three or More Codes

The coding also may require three or sometimes more codes for a complete representation of the intended meaning. A further German coding example (from the *Deutsche Kodierrichtlinien* manual) includes an additional secondary diagnosis and a monitoring code.

Additional secondary diagnosis and monitoring codes

-   O09.1! - Duration of pregnancy between 5 and 13 weeks
-   Z34 - Monitoring of a regular pregnancy

A proper interpretation of this extended example is: "A patient is admitted to hospital due to a fracture of the metacarpal shaft. Since she is six weeks pregnant, the pregnancy and the monitoring of the pregnancy are coded as secondary diagnoses." The recommended FHIR representation is:

      <coding>
        <system value="http://fhir.de/CodeSystem/dimdi/icd-10-gm"/>
        <version value="2017"/>
        <code value="S62.32 Z33! O09.1! Z34"/>
      </coding>

Other jurisdictions may have similar needs for multiple coding but with different specific coding requirements. In those cases local coding manuals and authorities should be consulted to determine the recommended or expected syntax to use in a FHIR Coding instance.

### Copyright/License Issues

ICD-10 is ©Copyright World Health Organization (WHO). WHO licenses its published material widely, in order to encourage maximum use and dissemination. See [Licensing WHO classifications](http://www.who.int/about/licensing/classifications/en/) for details. The ICD variants have their own separate copyright and licensing (refer to the documentation for the particular variant for details).

### ICD-X Filter Properties

<span id="filters"></span>
No need for filters identified yet.

### Implicit Value Sets

No need for implicit value sets identified yet.

\[%file newfooter%\]
