\[%settitle Defined Systems%\]
\[%file newnavbar%\]
&lt;%txheader systems%&gt;
Code Systems
------------

|                                                 |                                             |                                                                                      |
|-------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt vocab%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 3 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

The following names (URIs) may be used in the *system* element of the [Coding](datatypes.html#Coding) data type. If a URI is defined here, it SHALL be used in preference to any other identifying mechanisms. If a code system is not listed here, the correct URI may be determined by working through the following list, in order:

-   the HL7 OID Registry
-   the documentation associated with the code system
-   consulting the owner of the code system
-   asking on the HL7 vocabulary mailing list

See also the [list of known identifier systems](identifier-registry.html) that can be used in the *system* element of the [Identifier](datatypes.html#Identifier) data type. Additional identifier systems may be registered on the HL7 FHIR registry at <http://hl7.org/fhir/registry>.

**Important Notes:**

-   This list of names is incomplete and subject to change. Some values may be dropped, and others will likely be added in the coming months as HL7 institutes formal processes around URIs in vocabulary
-   Note that some of the URNs in this list follow the URN specification in [RFC 5141](http://tools.ietf.org/html/rfc5141) for referring to standards published by ISO, such as urn:iso:std:iso:11073:10101. Where ISO standards define codes with meanings, and there is no entry in the list above, and they are not registered in the HL7 OID registry, the default URN for the code system is that defined by the RFC 5141.
-   For several of the code systems in this list, multiple systems are given. This means that the variants identified are different code systems, not just variants of the same code system
-   Any URL in `http://example.org` is reserved for testing and documentation purposes.

Note that the code systems are available as FHIR resources - see the [Downloads Page](downloads.html) (as part of the FHIR definitions) (excluding the External code systems.

**UMLS Note**: The [UMLS](https://www.nlm.nih.gov/research/umls/sourcereleasedocs/index.html) includes many code systems that do not have an entry in the table below, or in the HL7 OID registry, or on http://registry.fhir.org. Until these code systems are registered, implementers may use the pattern `http://www.nlm.nih.gov/research/umls/[SAB]`, where \[SAB\] is the lowercase of abbreviation of the code system as provided by UMLS. e.g. The system for "Multum MediSource Lexicon" would then be `http://www.nlm.nih.gov/research/umls/mmsl`. Implementers choosing to use this pattern should be aware that very often, when the code system is registered, it will use a different system.

**Don't see what you're looking for here?** See [Registering Code Systems](https://confluence.hl7.org/display/FHIR/Registering+Code+Systems) for further advice.

-   [External](#tabs-ext)
-   [Internal (FHIR)](#tabs-fhir)
-   [External (FHIR)](#tabs-fhirx)
-   [HL7 v3](#tabs-v3)
-   [HL7 v2](#tabs-v2)

URI
Source
Comment
OID (for non-FHIR systems)
**Externally Published code systems** <span id="external"></span>
http://snomed.info/sct <span id="http://snomed.info/sct"></span>
SNOMED CT ([IHTSDO](http://snomed.org))
See [Using SNOMED CT with FHIR](snomedct.html)
2.16.840.1.113883.6.96
http://www.nlm.nih.gov/research/umls/rxnorm<span id=" http://www.nlm.nih.gov/research/umls/rxnorm"></span>
RxNorm ([US NLM](http://www.nlm.nih.gov/))
See [Using RxNorm with FHIR](rxnorm.html)
2.16.840.1.113883.6.88
http://loinc.org <span id="http://loinc.org"></span>
LOINC ([LOINC.org](http://loinc.org))
See [Using LOINC with FHIR](loinc.html)
2.16.840.1.113883.6.1
http://unitsofmeasure.org <span id="http://unitsofmeasure.org"></span>
UCUM: ([UnitsOfMeasure.org](http://unitsofmeasure.org)) Case Sensitive Codes
See [Using UCUM with FHIR](ucum.html)
2.16.840.1.113883.6.8
http://ncimeta.nci.nih.gov <span id="http://ncimeta.nci.nih.gov"></span>
[NCI Metathesaurus](http://ncimeta.nci.nih.gov)
See [Using NCI Metathesaurus with FHIR](ncimeta.html)
2.16.840.1.113883.3.26.1.2
http://www.ama-assn.org/go/cpt <span id="http://www.ama-assn.org/go/cpt"></span>
[AMA CPT codes](http://www.ama-assn.org/go/cpt)
See [Using CPT with FHIR](cpt.html)
2.16.840.1.113883.6.12
http://hl7.org/fhir/ndfrt <span id="http://hl7.org/fhir/ndfrt"></span>
[NDF-RT (National Drug File – Reference Terminology)](http://www.nlm.nih.gov/research/umls/sourcereleasedocs/current/NDFRT/)
See [Using NDF-RT with FHIR](ndfrt.html)
2.16.840.1.113883.6.209
http://fdasis.nlm.nih.gov <span id="http://fdasis.nlm.nih.gov"></span>
[Unique Ingredient Identifier (UNII)](http://www.fda.gov/Drugs/InformationOnDrugs/ucm142438.htm)
See [Using UNII with FHIR](unii.html)
2.16.840.1.113883.4.9
http://hl7.org/fhir/sid/ndc <span id="http://hl7.org/fhir/sid/ndc"></span>
[NDC/NHRIC Codes](http://www.fda.gov/Drugs/InformationOnDrugs/ucm142438.htm)
See [Using NDC with FHIR](ndc.html)
2.16.840.1.113883.6.69
http://hl7.org/fhir/sid/cvx <span id="http://hl7.org/fhir/sid/cvx"></span>
[CVX (Vaccine Administered)](http://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=cvx)
See [Using CVX with FHIR](cvx.html)
2.16.840.1.113883.12.292
urn:iso:std:iso:3166 <span id="urn:iso:std:iso:3166"></span>
[ISO Country & Regional Codes](http://www.iso.org/iso/country_codes.htm)
See [Using ISO 3166 Codes with FHIR](iso3166.html)
1.0.3166.1.2.2
http://hl7.org/fhir/sid/dsm5 <span id="http://hl7.org/fhir/sid/dsm5"></span>
[DSM-5](https://en.wikipedia.org/wiki/DSM-5)
Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5)
2.16.840.1.113883.6.344
http://www.nubc.org/patient-discharge <span id="http://www.nubc.org/patient-discharge"></span>
[NUBC](http://www.nubc.org) code system for Patient Discharge Status
National Uniform Billing Committee, manual UB-04, UB form locator 17
2.16.840.1.113883.6.301.5
http://www.radlex.org <span id="http://www.radlex.org"></span>
[RadLex](http://www.radlex.org)
(Includes <span id="http://playbook.radlex.org">play book</span> codes)
2.16.840.1.113883.6.256
ICD-9, ICD-10
[WHO](http://www.who.int/classifications/icd/en/)) & National Variants
See [Using ICD-\[x\] with FHIR](icd.html)
See ICD page for details
http://hl7.org/fhir/sid/icpc-1 <span id="http://hl7.org/fhir/sid/icpc-1"></span>
http://hl7.org/fhir/sid/icpc-1-nl <span id="http://hl7.org/fhir/sid/icpc-1-nl"></span>
http://hl7.org/fhir/sid/icpc-2 <span id="http://hl7.org/fhir/sid/icpc-2"></span>
ICPC (International Classification of Primary Care) ([PH3C](http://www.ph3c.org/))
[NHG Table 24 ICPC-1 (NL)](https://referentiemodel.nhg.org/tabellen/nhg-tabel-24-icpc1)
2.16.840.1.113883.2.4.4.31.1
2.16.840.1.113883.6.139
http://hl7.org/fhir/sid/icf-nl <span id="http://hl7.org/fhir/sid/icf-nl"></span>
ICF (International Classification of Functioning, Disability and Health) ([WHO](http://www.who.int/classifications/icf/en/))
2.16.840.1.113883.6.254
http://terminology.hl7.org/CodeSystem/v2-\[X\](/v) <span id="http://terminology.hl7.org/CodeSystem/v2-[X](/v"></span>
[Version 2 tables](terminologies-v2.html)
\[X\] is the 4 digit identifier for a table; e.g. http://terminology.hl7.org/CodeSystem/v2-0203
Note: only [some tables](terminologies-v2.html) may be treated in this fashion. For some tables, the meaning of the code is version dependent, and so additional information must be included in the namespace, e.g. http://terminology.hl7.org/CodeSystem/v2-0123/2.3+, as defined in the [v2 table namespace list](terminologies-v2.html). Version 2 codes are case sensitive.
2.16.840.1.113883.12.\[X\]
http://terminology.hl7.org/CodeSystem/v3-\[X\] <span id="http://terminology.hl7.org/CodeSystem/v3-[X"></span>
[A](terminologies-v3.html)[HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) code system
\[X\] is the code system name; e.g. http://terminology.hl7.org/CodeSystem/v3-GenderStatus. HL7 v3 code systems are case sensitive.
see [v3 list](terminologies-v3.html)
https://www.gs1.org/gtin <span id="https://www.gs1.org/gtin"></span>
GTIN ([GS1](https://www.gs1.org))
Note: GTINs may be used in both [Codes](datatypes.html#Coding) and [Identifiers](datatypes.html#Identifier)
1.3.160
http://www.whocc.no/atc <span id="http://www.whocc.no/atc"></span>
Anatomical Therapeutic Chemical Classification System ([WHO](http://www.whocc.no/atc/structure_and_principles/))
2.16.840.1.113883.6.73
urn:ietf:bcp:47 <span id="urn:ietf:bcp:47"></span>
IETF language (see [Tags for Identifying Languages - BCP 47](http://tools.ietf.org/html/bcp47))
This is used for identifying language throughout FHIR. Note that usually these codes are in a `code` and the system is assumed
urn:ietf:bcp:13 <span id="urn:ietf:bcp:47"></span>
Mime Types (see [Multipurpose Internet Mail Extensions (MIME) Part Four - BCP 13](http://tools.ietf.org/html/bcp13))
This is used for identifying the mime type system throughout FHIR. Note that these codes are in a `code` (e.g. [Attachment.contentType](datatypes.html#Attachment) and in these elements the system is assumed). This system is defined for when constructing value sets of mime type codes
urn:iso:std:iso:11073:10101 <span id="urn:iso:std:iso:11073:10101"></span>
Medical Device Codes ([ISO 11073-10101](https://www.iso.org/standard/37890.html))
See [Using MDC Codes with FHIR](mdc.html)
2.16.840.1.113883.6.24
[http://dicom.nema.org/resources/ontology/DCM](codesystem-dicom-dcim.html) <span id="http://dicom.nema.org/resources/ontology/DCM"></span>
DICOM Code Definitions
The meanings of codes defined in DICOM, either explicitly or by reference to another part of DICOM or an external reference document or standard
1.2.840.10008.2.16.4
http://hl7.org/fhir/NamingSystem/ca-hc-din <span id="http://hl7.org/fhir/NamingSystem/ca-hc-din"></span>
[Health Canada Drug Identification Number](http://www.hc-sc.gc.ca/dhp-mps/prodpharma/activit/fs-fi/dinfs_fd-eng.php)
A computer-generated eight-digit number assigned by Health Canada to a drug product prior to being marketed in Canada. [Canada Health Drug Product Database](http://www.hc-sc.gc.ca/dhp-mps/prodpharma/databasdon/index-eng.php) contains product specific information on drugs approved for use in Canada.

2.16.840.1.113883.5.1105
http://hl7.org/fhir/sid/ca-hc-npn <span id="http://hl7.org/fhir/NamingSystem/ca-hc-npn"></span>
[Health Canada Natural Product Number](https://www.canada.ca/en/health-canada/services/drugs-health-products/natural-non-prescription/applications-submissions/product-licensing/licensed-natural-health-products-database.html)
A computer-generated number assigned by Health Canada to a natural health product prior to being marketed in Canada.

2.16.840.1.113883.5.1105
http://nucc.org/provider-taxonomy <span id="http://nucc.org/provider-taxonomy"></span>
[NUCC Provider Taxonomy](http://www.nucc.org/index.php/code-sets-mainmenu-41/provider-taxonomy-mainmenu-40/csv-mainmenu-57)
The Health Care Provider Taxonomy code is a unique alphanumeric code, ten characters in length. The code set is structured into three distinct "Levels" including Provider Type, Classification, and Area of Specialization.

Copyright statement for NUCC value sets:

> This value set includes content from NUCC Health Care Provider Taxonomy Code Set for providers which is copyright © 2016+ American Medical Association. For commercial use, including sales or licensing, a license must be obtained

2.16.840.1.113883.6.101
**Code Systems for Genetics** <span id="genetics"></span>
http://www.genenames.org<span id="http://www.genenames.org"></span>
[HGNC: Human Gene Nomenclature Committee](http://www.genenames.org)
2.16.840.1.113883.6.281
http://www.ensembl.org<span id="http://www.ensembl.org"></span>
[ENSEMBL reference sequence identifiers](http://www.ensembl.org)
Maintained jointly by the European Bioinformatics Institute and Welcome Trust Sanger Institute
*not assigned yet*
http://www.ncbi.nlm.nih.gov/refseq/<span id="http://www.ncbi.nlm.nih.gov/refseq/"></span>
[RefSeq: National Center for Biotechnology Information (NCBI) Reference Sequences](https://www.ncbi.nlm.nih.gov/refseq/)
2.16.840.1.113883.6.280
http://www.ncbi.nlm.nih.gov/clinvar/<span id="http://www.ncbi.nlm.nih.gov/clinvar/"></span>
[ClinVar Variant ID](http://www.ncbi.nlm.nih.gov/clinvar)
NCBI central repository for curating pathogenicity of potentially clinically relevant variants
*not assigned yet*
http://sequenceontology.org<span id="http://sequenceontology.org"></span>
[Sequence Ontology](http://sequenceontology.org)
*not assigned yet*
http://varnomen.hgvs.org/<span id="http://varnomen.hgvs.org/"></span>
[HGVS : Human Genome Variation Society](http://varnomen.hgvs.org/)
2.16.840.1.113883.6.282
http://www.ncbi.nlm.nih.gov/projects/SNP<span id="http://www.ncbi.nlm.nih.gov/projects/SNP"></span>
[DBSNP : Single Nucleotide Polymorphism database](http://www.ncbi.nlm.nih.gov/projects/SNP)
2.16.840.1.113883.6.284
http://cancer.sanger.ac.uk/
cancergenome/projects/cosmic<span id="http://cancer.sanger.ac.uk/cancergenome/projects/cosmic"></span>
[COSMIC : Catalogue Of Somatic Mutations In Cancer](http://cancer.sanger.ac.uk/cancergenome/projects/cosmic)
2.16.840.1.113883.3.912
http://www.lrg-sequence.org<span id="http://www.lrg-sequence.org"></span>
[LRG : Locus Reference Genomic Sequences](http://www.lrg-sequence.org)
2.16.840.1.113883.6.283
http://www.omim.org<span id="http://www.omim.org"></span>
[OMIM : Online Mendelian Inheritance in Man](http://www.omim.org)
2.16.840.1.113883.6.174
http://www.ncbi.nlm.nih.gov/pubmed<span id="http://www.ncbi.nlm.nih.gov/pubmed"></span>
[PubMed](http://www.ncbi.nlm.nih.gov/pubmed)
2.16.840.1.113883.13.191
http://www.pharmgkb.org<span id="http://www.pharmgkb.org"></span>
[PHARMGKB : Pharmacogenomic Knowledge Base](http://www.pharmgkb.org)
PharmGKB Accession ID
2.16.840.1.113883.3.913
http://clinicaltrials.gov<span id="http://clinicaltrials.gov"></span>
[ClinicalTrials.gov](http://clinicaltrials.gov)
2.16.840.1.113883.3.1077
http://www.ebi.ac.uk/ipd/imgt/hla <span id="http://www.ebi.ac.uk/ipd/imgt/hla"></span>
[European Bioinformatics Institute](http://www.ebi.ac.uk/ipd/imgt/hla)
2.16.840.1.113883.6.341

URI (all prefixed with http://hl7.org/fhir/)
Description
OID
&lt;%internalsystemlist%&gt;

URI (all prefixed with http://terminology.hl7​.org/CodeSystem/)
Description
OID
&lt;%internalsystemlistx%&gt;

&lt;%v3Index-cs%&gt;

Note: v2 code systems may or may not be case sensitive. v2 Code systems will have the `CodeSystem.caseSensitive` correctly populated in a future version of this specification.

&lt;%v2Index%&gt;

\[%file newfooter%\]
