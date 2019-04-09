\[%settitle Messaging using FHIR Resources%\]
\[%file newnavbar%\]
Genomics Implementation Guidance
--------------------------------

|                                            |                                             |                                                                                      |
|--------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt cg%\]](%5B%wg%20cg%%5D) Work Group | [Maturity Level](versions.html#maturity): 1 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

**Table of Contents**

1.  [Background](#background)
2.  [Overview](#overview)
3.  [MolecularSequence Resource](#sequence)
4.  [Observation-genetics Profile](#observation-genetics)
5.  [DiagnosticReport-genetics Profile](#diagnosticreport-genetics)
6.  [ServiceRequest-genetics Profile](#servicerequest-genetics)
7.  [HLA genotyping results Profile](#hla)
8.  [Relationship among MolecularSequence resource and genetics profiles](#resource_vs_profiles)
9.  [HL7 Domain Analysis Model Use Cases](#dam)
10. [Other Genomics Use Cases](#other_examples)
11. [Clinical Genomics Apps](#apps)
12. [Appendix 1: From DSTU2 Genomics to STU3](#history)

\[%stu-note%\]
The material on this page is currently undergoing work to be refactored in a future release as further analysis is done, for example as part of the [Genomics Reporting Implementation Guide](http://hl7.org/fhir/uv/genomics-reporting/index.html).

\[%end-note%\] <span id="background"></span>
Background
----------

Rapid advances in sequencing technologies, clinical genetics tests for whole genome and exome sequencing are allowing sophisticated genetics testing to be used by providers and patients in clinical decisions. Results from such tests are used to identify distinct genetic variants that may contribute to syndromes, conditions and/or predictive responses to treatments. The implementation of precision medicine will depend upon having such data to diagnose patients, choose medications, and predict the course of disease and care, but will require standards and effective user interfaces.

A current technical challenge exists in interoperability, the ability to access and share clinical and genetics data. The challenges of interoperability includes collection, coding, and retrieval to scale. An individual's genetic data set is large, complex and requires curation. Unfortunately, incompatible systems and nomenclatures are already in use. A standards-based ontology that could be adopted to integrate both genetic data and clinical information systems will be crucial to accelerating the integration of precision medicine and to make sense of genetic testing results in a complete clinical context.

One approach for collecting, coding, and retrieving genetics data comes from the [Global Alliance for Genomics and Health](http://genomicsandhealth.org) (GA4GH). The GA4GH organization has built and is refining an API and data model for the exchange of full sequence genomic information across multiple research organizations and platforms. The GA4GH focuses on the needs of researchers.

A second approach is evolving from [HL7](http://hl7.org) through **FHIR**. FHIR is attractive because it is relatively easy to implement because it is comprised of a set of modular components called resources, which can be easily and incrementally assembled into working systems. The clinical requirements for genetics data is, relative to genomics research needs, utilitarian and reductive because it is about distilling and extracting particular genetics data produced by ever more sophisticated testing for use at the point-of-care. This has made FHIR a very functional framework to initiate an interoperable clinical genetics data standardization to which multiple stakeholders have contributed to this guide.

FHIR DSTU2 introduced a standard genetics profile that applies to the FHIR Observation resource. Using this profile, Observation payloads can return genetic testing results in a standardized manner.

Extending Observations rather than creating a new, dedicated FHIR genetics data resource is consistent with the FHIR community mandate because it only adds new resources to an existing resource library when there is a compelling case to do so. We provide the case to add a MolecularSequence resource in this specification.

<span id="overview"></span>
Overview
--------

STU3 moves beyond FHIR DSTU2 Standard Genetics profile on Observation allowing increased granularity and less ambiguity by creating a new resource to be called **MolecularSequence**. This resource will be used to hold clinically relevant sequence data in a manner that is both efficient and versatile integrating new and as yet undefined types of genomic and other -omics data that will soon be commonly entered into health records for clinical use. MolecularSequence will be leveraged by other FHIR resources, including Observation. This is consistent with how all FHIR resources are designed and used.

The September 2014 Informative Ballot (“HL7 Clinical Genomics, Domain Analysis Model: Clinical Sequencing Release 1”) provided guiding use cases, which initially informed development of the initial Standard Genetics profile that is found in FHIR DSTU2. The same use cases also led to a second Project to develop a MolecularSequence resource (“Develop FHIR sequence resource for Clinical Genomics”). A preliminary effort to address these issues has been explored and published in context of the [Substitutable Medical Applications and Reusable Technologies](http://smarthealthit.org/an-app-platform-for-healthcare/about/) (SMART) Platforms Project and described in an article (“[SMART on FHIR Genomics: Facilitating standardized clinico-genomic apps](http://jamia.oxfordjournals.org/content/early/2015/07/21/jamia.ocv045.long)”).

MolecularSequence is designed to hold genetic sequences in blocks relevant to actionable clinical decision-making. Extensions to MolecularSequence address complex cases and can associate it with repositories for retrieving a patient’s full sequence data, such as those defined by GA4GH. Other changes include a suite of genetics profiles for other FHIR resources. In addition, the Observation-genetics profile adds new references so that an Observation can report genetics test results to be integrated into the EHR. There are also new genetics-extension profiles for DiagnosticReport, ServiceRequest and FamilyMemberHistory, respectively, to extend them to report genetics results. We have given all of these FHIR genetics profiles the suffix “-genetics” (e.g. “DiagnosticReport-genetics profile”). New profiles on top of DiagnosticReport have been created for reporting HLA genotyping results.

On the following pages, we elaborate upon the rationale for the proposed design, introducing in some detail the following resource and profiles:

-   A MolecularSequence resource
-   An Observation-genetics profile on Observation
-   A DiagnosticReport-genetics profile on DiagnosticReport
-   A ServiceRequest-genetics profile on ServiceRequest
-   An HLA-genotyping-results profile on DiagnosticReport

With these resource and profiles, FHIR can support a large set of clinical use cases (see [Section 9](#dam), [10](#other_examples) , and [11](#apps)) and is thus positioned to address all emergent -omics use cases, including Next-Generation Sequencing (NGS). These tools are simple to implement, will optimize payload sizes, and help developers avoid redundant retrieval of data. [Appendix 1](#history) of this document shows how DSTU 2.0 can be mapped to the new additions to the resource.

<span id="sequence"></span>
MolecularSequence Resource
--------------------------

### Structure Diagram

\[%resource-table MolecularSequence%\]
### Description

The [MolecularSequence resource](molecularsequence.html) is designed for next-generation sequencing data. Patients’ observed sequences should be represented by recording reference sequence id/string and detected variants. To specify how it proceed, here is a picture below:

![](genomics-image34.jpg)
MolecularSequence.coordinateSystem: This element shall be constrained into only two possible values: 0 for 0-based system and 1 for 1-based system. Below is the picture that could explain what’s the difference between these two systems:

![coordinateSystem](genomics-image11.png)
Here are two examples that clarify the usage in both cases (they represent same segment part):

-   0-based example: [here](coord-0base-example.html) Source:[XML](coord-0base-example.xml.html),[JSON](coord-0base-example.json.html)
-   1-based example: [here](coord-1base-example.html) Source:[XML](coord-1base-example.xml.html),[JSON](coord-1base-example.json.html)

MolecularSequence.referenceSeq: Four optional ways are provided to represent reference sequence in MolecularSequence resource:

1.  MolecularSequence.referenceSeq.referenceSeqId: Reference sequence id in public database;
2.  MolecularSequence.referenceSeq.referenceSeqString: Reference sequence string;
3.  MolecularSequence.referenceSeq.referenceSeqPointer: Reference to observed sequence stored in another sequence entity;
4.  MolecularSequence.referenceSeq.genomeBuild, MolecularSequence.reference.chromosome: The combination of genome build and chromosome.

The window selects a range from the reference sequence (or genome) that is used to define building block of a current sequence (e.g. MolecularSequence resource instance 1).

MolecularSequence.referenceSeq.strand: Only two possible values can be made by strand, +1 for plus strand while -1 for minus strand. Since the directionality of the sequence string might be represented in different word in different omics scenario, below are simple example of how to map other expressions into its correlated value:

| Map to +1          | Map to -1          |
|--------------------|--------------------|
| 5′-to-3′ direction | 3′-to-5′ direction |
| Watson             | Crick              |
| Sense              | Antisense          |
| Positive           | Negative           |

MolecularSequence.quality: Quality scores for bases in the sequence. It is intended to be compliant with emerging regulatory needs needs (eg: those found at [PrecisionFDA](https://precision.fda.gov)).

MolecularSequence.variant: This complex element is used for encoding sequence. When the information of reference sequence and variants are provided, the observed sequence will be derived.

#### Internal Pointers

MolecularSequence.patient: This element points to a Patient identifier to show that this sequence is related to the same patient.

MolecularSequence.specimen: A pointer to specimen identifier, if needed.

MolecularSequence.device: A pointer to Device identifier which is used for describing sequencing method (such as chip id, chip manufacturer etc.)

MolecularSequence.pointer: A pointer to a MolecularSequence instance for the next sequence block to build a sequence graph.

#### External Pointers

MolecularSequence.repository: This complex element is used to provide a clarifying structure, a base URL, and/or relevant IDs when referring to an external repository.

GA4GH Repository Example. If the MolecularSequence resource refers to a GA4GH repository for read info, references to a GA4GH full sequence dataset should conform to GA4GH data models and accessed via the GA4GH API. The URL of a GA4GH repository, ids of a GA4GH variant and read group are contained in the MolecularSequence resource. The URL of a GA4GH repository is an api\_base of a GA4GH server that could be called for sequence data. The GA4GH variant set is a collection of call sets and the GA4GH call set is a collection of variant calls, typically for one sample. A variant call represents a determination of genotype with respect to that variant.

VariantSet definition: A VariantSet is a collection of variants and variant calls intended to be analyzed together.

CallSet definition: A CallSet is a collection of calls that were generated by the same analysis of the same sample.

A read group is a collection of reads produced by a sequencer. A read group set typically models reads corresponding to one sample, sequenced one way, and aligned one way. The API reference of [Google Genomics](https://cloud.google.com/genomics/) is a GA4GH repository built by Google and provides details of the data models, such as the resource representations.

### Usage Examples

#### Different way to represent sequence record with variations

We provide a detailed example to show how sequence resource can be used to represent record of observed sequence by different method.

![MolecularSequence Graph](genomics-image15.jpeg)
The diagram above describes 4 optional ways provided in the MolecularSequence resource to encode sequencing data. Here are the corresponding examples

-   [By referenceSeqId](sequence-graphic-example-1.html) Source:[XML](sequence-graphic-example-1.xml.html),[JSON](sequence-graphic-example-1.json.html),[TURTLE](sequence-graphic-example-1.ttl.html)
-   [By referenceSeqString](sequence-graphic-example-2.html) Source:[XML](sequence-graphic-example-2.xml.html),[JSON](sequence-graphic-example-2.json.html),[TURTLE](sequence-graphic-example-2.ttl.html)
-   [By referenceSeqPointer](sequence-graphic-example-3.html) Source:[XML](sequence-graphic-example-3.xml.html),[JSON](sequence-graphic-example-3.json.html),[TURTLE](sequence-graphic-example-3.ttl.html)
-   [By Genomebuild+chromosome](sequence-graphic-example-4.html) Source:[XML](sequence-graphic-example-4.xml.html),[JSON](sequence-graphic-example-4.json.html),[TURTLE](sequence-graphic-example-4.json.html)

#### Example from precision FDA

We provide one [example](sequence-example-fda.html) to show how precision FDA vcf data can be upload and comform FHIR specification, and how quality in sequence resource is represented by comparison between a reference sequence and the observed sequence.

Source: [XML](sequence-example-fda.xml.html), [JSON](sequence-example-fda.json.html), [Turtle](sequence-example-fda.ttl.html).

#### Complex Variation example

We provide one [example](sequence-complex-variant.html) to show how a complex variant can be represented with the help of cigar. The deletion, insertion and mutation is represented in characters along with the number of repetition.

Source: [XML](sequence-complex-variant.xml.html), [JSON](sequence-complex-variant.json.html), [Turtle](sequence-complex-variant.ttl.html).

<span id="observation-genetics"></span>
Observation-genetics Profile
----------------------------

### Structure Diagram

\[%profile-diff observation-genetics%\]
### Description

The [Observation-genetics profile](observation-genetic.html) Observation-genetics profile is used to interpret variants from sequence resource. Clinical usage may need more specific representation of variant at locus or structural variant in whole genome.

Some of the attributes of the profile follow:

-   The observation-geneticsSequence extension will refer to the MolecularSequence resource for sequence information related to this variant.
-   The observation-geneticsInterpretation extension will refer to an Observation instance which contains clinical interpretations for the variant described.
-   The code, effective\[x\], issued, performer, method, specimen elements can be used to describe how the genetic observation (variant and sequence data) is obtained.
-   Other extensions are used to describe attributes of this variant such as Genomics Source Class, Amino Acid Change Type, etc. These are mappings from v2 and lonic code reference with details can be found in this [list](observation-genetic.html#content).

Additional Observations instance will be created for variant's further analysis. For example, Observation.component element will be used for knowledge-based interpretations of the sequence variant. Here are some examples for the component.code.

| LOINC Code | LOINC Element Name                              | Comments                                                                                                                                                                                                              |
|------------|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 51963-7    | Medication Assessed                             | A coded medication accessed in a pharmacogenetic test (recommend RxNorm).                                                                                                                                             |
| 51967-8    | Genetic disease assessed                        | A coded disease that is associated with the region of DNA covered by the genetic test (recommend SNOMED).                                                                                                             |
| 53037-8    | Genetic Disease Sequence Variant Interpretation | Interpretation of the pathogenicity of the DNA Sequence Variant in the context of the assessed genetic disease.                                                                                                       |
| 53040-2    | Drug Metabolism Sequence Variant Interpretation | Predicted phenotype for drug efficacy. A sequence variant interpretation value known to allow (responsive) or prevent (resistant) the drug to perform.                                                                |
| 51961-1    | Drug Efficacy Sequence Variant Interpretation   | Predicted phenotype for ability of drug to bind to intended site in order to deliver intended effect. A Sequence Variant interpretation value known to allow (responsive) or prevent (resistant) the drug to perform. |

In the meantime, the related element in this Observation instance will point to Observaiton-genetics profile to show these clinical interpretations are further analysis for the variant. (For example, sequence variant has its pointer back to the observation, see [PGx example](#PGx-example))

### Usage Examples

#### An Observation-genetics instance and its two related Observation instances for interpretations

We provide an [example](observation-example-genetics-1.html) of an Observation-genetics instance which records a variant detected in the patient. (we call this example A)

Source: [XML](observation-example-genetics-1.xml.html), [JSON](observation-example-genetics-1.json.html), [Turtle](observation-example-genetics-1.ttl.html).

An [example](observation-example-genetics-2.html) of an Observation instance which records knowledge-based clinical interpretations for the variant represented in A.

Source: [XML](observation-example-genetics-2.xml.html), [JSON](observation-example-genetics-2.json.html), [Turtle](observation-example-genetics-2.ttl.html).

An [example](observation-example-genetics-3.html) of an Observation instance which records PCR validation test for the variant in A.

Source: [XML](observation-example-genetics-3.xml.html), [JSON](observation-example-genetics-3.json.html), [Turtle](observation-example-genetics-3.ttl.html).

#### Phenotype, Diplotype and Haplotye

We provide the following examples to reveal how PGx data can be harmonized within the FHIR specification. Detailed discussion will be put [here.](#PGx-example)

-   [Phenotype](observation-example-phenotype.html) Source:[XML](observation-example-phenotype.xml.html),[JSON](observation-example-phenotype.json.html),[TURTLE](observation-example-phenotype.ttl.html)
-   [Diplotype](observation-example-diplotype1.html) Source:[XML](observation-example-diplotype1.xml.html),[JSON](observation-example-diplotype1.json.html),[TURTLE](observation-example-diplotype1.ttl.html)
-   [Haplotype](observation-example-haplotype1.html) Source:[XML](observation-example-haplotype1.xml.html),[JSON](observation-example-haplotype1.json.html),[TURTLE](observation-example-haplotype1.ttl.html)

<span id="diagnosticreport-genetics"></span>
DiagnosticReport-genetics Profile
---------------------------------

### Structure Diagram

\[%profile-diff diagnosticreport-genetics%\]
This [DiagnosticReport-genetics](diagnosticreport-genetic.html) is built on top of DiagnosticReport. The new profile is used to describe a genetics test report. The result element in DiagnosticReport will refer to the Observation resource that can lead to a bundle of genetic observations. The element of code, effective\[x\], issued, performer, request, specimen are be used to describe the details of the genetic test. Extensions about AssessedCondition and FamilyMemberHistory are added. Overall, this profile extends the DiagnosticReport resource to enable reporting of structured genetic test results. In addition, it denotes condition context for genetic testing, which may influence reported variants and interpretations for large genomic testing panels.

-   The DiagnosticReport-genetics profile contains two extensions referring to other resources/profiles and one complex extension.
-   AssessedCondition is used to denote condition context for genetic testing, which may influence reported variants and interpretation for large genomic testing panels. It refers to the Condition resource.
-   FamilyMemberHistory are significant health events and conditions for one or more persons related to the patient. It refers to the FamilyMemberHistory-Genetic profile.
-   Analysis provides knowledge-based interpretation of overall results of tests performed on patients.

Examples for analysis.code:

| LOINC Code | LOINC Element Name                              | Comments                                                                                                                                                                                                                                    |
|------------|-------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 51968-6    | Genetic Disease Analysis Overall Interpretation | Interpretation of all identified DNA Sequence variants along with any known clinical information for the benefit of aiding clinicians in understanding the results overall in either the context of diagnosis or increased risk of disease. |
| 51964-5    | Drug Efficacy Analysis Overall Interpretation   | Overall predicted phenotype for drug efficacy for all DNA Sequence Variants identified in a single case.                                                                                                                                    |
| 51971-0    | Drug metabolism analysis overall interpretation | Overall predicted phenotype for drug metabolism for all DNA Sequence Variants identified in a single case.                                                                                                                                  |

### Usage Examples

An [example](diagnosticreport-genetics-example-2-familyhistory.html) of a genetic test report for a patient with FamilyHistory.

Source: [XML](diagnosticreport-genetics-example-2-familyhistory.xml.html), [JSON](diagnosticreport-genetics-example-2-familyhistory.json.html), [Turtle](diagnosticreport-genetics-example-2-familyhistory.ttl.html).

An [example](diagnosticreport-genetics-comprehensive-bone-marrow-report.html) of a comprehensive bone marrow report.

Source: [XML](diagnosticreport-genetics-comprehensive-bone-marrow-report.xml.html), [JSON](diagnosticreport-genetics-comprehensive-bone-marrow-report.json.html), [Turtle](diagnosticreport-genetics-comprehensive-bone-marrow-report.ttl.html).

<span id="servicerequest-genetics"></span>
ServiceRequest-genetics profile
-------------------------------

### Structure Diagram

A complex extension is added on top of the ServiceRequest resource. Here is the structure of the extension:

\[%profile-diff servicerequest-genetics%\]
### Description

To describe an order requested sequence variants detection. User must set up the code for the request and they can also refer to the corresponding sequence instance for that variant.

### Usage Example

#### An order for genetics test

[Here](servicerequest-genetics-example-1.html) is a diagnostic request for testing 185delAG variant. The mother of the patient received results from a mutation panel (eg. MyRisk from Myriad) and she has a BRCA1 185delAG mutation. The clinician the would like to request to test the patient only for an 185delAG mutation. In this case, the diagnostic request for the patient will specify the sequence variant - 185delAG.

<span id="hla"></span>
HLA genotyping results Profile
------------------------------

Human leukocyte antigen (HLA) genotyping is fundamental for research and clinical practice in immunogenetics and histocompatibility. Pointers to external locations refer to registered methods, raw NGS reads, and reference standards can be conveyed in this profile. Information about allele assignment including ambiguous results and the allele database used for assignments is stored in extensions.

The structure of the [HLA typing report](hlaresult.html) in this profile attempts to follow the principles outlined in the Minimum Information for ReportIng Next-generation sequence Genotyping (MIRING). These principles were identified through a series of meetings with international group of stakeholders in the application of Next Generation Sequencing (NGS) technology for genotyping the HLA and KIR loci as well as other immune-related loci (http://igdawg.org/ngs.html). MIRING describes eight principles, described in detail in [Human Immunology. 2015 Dec; 76(12):954-962](http://www.ncbi.nlm.nih.gov/pubmed/26319908). These include detailed metadata about:

1.  MIRING Annotation
2.  Reference Context
3.  Full Genotype
4.  Consensus Sequence
5.  Novel Polymorphisms
6.  Platform Documentation
7.  Read Processing Documentation
8.  Primary Data

(see the publication above for details about each)
These principles were implemented in a technical specification by extending an existing XML based format for exchanging histocompatibility and immunogenetic genotyping data called Histoimmunogenetics Markup Language (HML) to include results from NGS methodologies (https://bioinformatics.bethematchclinical.org/hla-resources/hml/). The resulting schema may be found in https://schemas.nmdp.org/. The National Marrow Donor Program (NMDP)/Be The Match uses this format for reporting HLA genotyping from potential donors and for patients needing stem cell transplants.

Both MIRING and HML were used to inform mapping data elements to FHIR resources such as Patient, Specimen, MolecularSequence, Observation-Genetic Profile, and DiagnosticReport where possible. Several additional data elements were needed specifically for this use case, resulting in the development of a specific profile for reporting HLA genotyping results (Diagnostic Report Profile for HLA Genotyping Results).

-   Minimum information for reporting next generation sequence genotyping (MIRING): Guidelines for reporting HLA and KIR genotyping via next generation sequencing (see [here](http://www.ncbi.nlm.nih.gov/pubmed/26407912))
-   Histoimmunogenetics Markup Language 1.0: Reporting Next Generation Sequencing-based HLA and KIR Genotyping (see [here](http://www.ncbi.nlm.nih.gov/pubmed/26319908))

### Structure Diagram of HLA genotyping results Profile

\[%extension-diff hla-genotyping-results-haploid%\]
Both hla-genotyping-results-glstring and hla-genotyping-results-haploid are complex extensions.

The development of these extensions were informed from the allele-assignment structure found in HML. While allele assignment for individual loci can be reported in an Observation, here they are used to summarize the assignments at a report level. Two methods may be used for reporting HLA allele-assignments: Haploid and GL String.

Structure of hla-genotyping-results-haploid:

\[%extension-diff hla-genotyping-results-haploid%\]
Haploid reporting is a method that is used to report an individual allele, or a list of possible alleles if the results are ambiguous, using NMDP Multiple Allele Codes (MAC) which is a shorthand for describing allele ambiguity (https://bioinformatics.bethematchclinical.org/hla-resources/allele-codes/). MACs are widely used for reporting HLA typing results because they are able to report long allele lists in a small amount of space, but the system has a number of shortcomings ([Tissue Antigens. 2013 Aug;82(2):106-12](http://www.ncbi.nlm.nih.gov/pubmed/23849068)). When reporting data using haploid, typical use is one or two haploid elements for a particular locus, but possibly more if multiple loci are covered (ex: two HLA-DRB1 haploids + one HLA-DRB3 haploid).

Within Haploid, Method indicates whether the general methodology is DNA based typing (e.g., Sequence Specific Primers (SSP), Sequence Specific Oligonucleotide Probes (SSOP), or Sequence Based Typing (SBT)), or SER which indicates serology based methods.

Example of using two hla-genotyping-results-haploid extensions to report a HLA-A genotype of HLA-A\*01:AB and HLA-A\*02:MN which expands to HLA-A\*01:01/HLA-A\*01:02 and HLA-A:02:01/HLA-A:02:02/HLA-A:02:03

``` xml
  <extension url="http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-haploid" >
    <extension url=”locus”>
        <valueCodeableConcept>
            <coding>
                <system value="http://www.genenames.org"/>
                <code value="4931"/>
                <display value="HLA-A"/>
            </coding>
            <text value="HLA-A"/>
        </valueCodeableConcept>
    </extension>
    <extension url=”type”>
        <valueCodeableConcept>
             <coding>
                <system value="https://bioinformatics.bethematchclinical.org/hla-resources/allele-codes/"/>
                <code value="AB"/>
                <display value="01/02"/>
            </coding>
            <text value="HLA-A*01:AB"/>
        </valueCodeableConcept>
    </extension>
    <extension url=”method”>
        <valueCodeableConcept>
            <text value=”DNA”/>
        </valueCodeableConcept>
    </extension>
  </extension>
  <extension url="http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-haploid" >
    <extension url=”locus”>
        <valueCodeableConcept>
            <coding>
                <system value="http://www.genenames.org"/>
                <code value="4931"/>
                <display value="HLA-A"/>
            </coding>
            <text value="HLA-A"/>
        </valueCodeableConcept>
    </extension>
    <extension url=”type”>
        <valueCodeableConcept>
             <coding>
                <system value="https://bioinformatics.bethematchclinical.org/hla-resources/allele-codes/"/>
                <code value="AB"/>
                <display value="01/02/03"/>
            </coding>
            <text value="HLA-A*02:MN"/>
        </valueCodeableConcept>
    </extension>
    <extension url=”method”>
        <valueCodeableConcept>
            <text value=”DNA”/>
        </valueCodeableConcept>
    </extension>
  </extension>
```

Because of limitations with MAC, another method called GL Strings was developed that encodes the results in a text string with hierarchical set of operators to describe the relationships between alleles, lists of possible alleles, phased alleles, genotypes, lists of possible genotypes, and multilocus unphased genotypes, without losing typing information or increasing typing ambiguity. ([Tissue Antigens. 2013 Aug;82(2):106-12](http://www.ncbi.nlm.nih.gov/pubmed/23849068)).

The structure of HLA-genotyping-results-glstring:

\[%extension-diff hla-genotyping-results-glstring%\]
While the string format is easily parsed into separate components to be rendered for user viewing, GL Strings by themselves are potentially quite long and difficult to read. It often advantageous to point to a URI which may return the GL String on demand to avoid manual data entry. This is available through the URI element in this extension.

Example of using the hla-genotyping-results-glstring to report a GL String in both text and URI formats

``` xml
  <extension url="http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-glstring">
    <extension url=”text”>
        <valueString value="HLA-A*01:01:01:01/HLA-A*01:02+HLA-A*02:01:02/HLA-A*02:02:02/HLA-A*02:03:01"/>
    </extension>
    <extension url=”uri”>
        <valueUri value="https://gl.nmdp.org/imgt-hla/3.23.0/genotype/1h"/>
    </extension>
  </extension>
```

Whether reporting in Haploid or GL String formats, it is important to identify the version of the IMGT/HLA allele database, as new HLA alleles are constantly being discovered and allele assignment is based on the known alleles at the time, and so results may need to be reinterpreted later. This is done through the Allele Database element.

Structure of hla-genotyping-results-allele-database

\[%extension-diff hla-genotyping-results-allele-database%\]
Example of using hla-genotyping-results-allele-database to report using the IMGT/HLA database, version 3.23

``` xml
  <extension url="http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-allele-database">
    <valueCodeableConcept>
        <coding>
            <system value="http://www.ebi.ac.uk/ipd/imgt/hla"/>
            <version value="3.23"/>
        </coding>
        <text value="IMGT/HLA 3.23"/>
    </valueCodeableConcept>
  </extension>
```

Overall methodology may be reported using hla-genotyping-results-method. Here a codeable concept may be used to refer to method entered into a public registry, such as the NCBI Genetic Test Registry, or a local private registry.

Structure of hla-genotyping-results-method

\[%extension-diff hla-genotyping-results-method%\]
Example of hla-genotyping-results-method to report a lab test registered in the NCBI Genetic Test Registry

``` xml
  <extension  uri="http://hl7.org/fhir/StructureDefinition/hla-genotyping-results-method">
    <valueCodeableConcept>
          <coding>
              <system value="http://www.ncbi.nlm.nih.gov/gtr/"/>
              <code value="GTR000000000.0"/>
          </coding>
          <text value=”NGS based HLA-A genotyping”
    </valueCodeableConcept>
  </extension>
```

### Usage Example

[Example](diagnosticreport-hla-genetics-results-example.html) of a HLA genotyping report

-   that was requested in a Diagnostic Request,
-   with results for HLA-A, HLA-B, HLA-C loci,
-   by Sequence Based Typing (SBT) of exons 2 and 3,
-   using Next Generation Sequencing technologies,
-   allele assignment based on the IMGT/HLA database version 3.23,
-   reported as a multilocus unphased genotype using GL Strings,
-   and with genotyping results for individual loci available in separate Observations

Source: [XML](diagnosticreport-hla-genetics-results-example.xml.html), [JSON](diagnosticreport-hla-genetics-results-example.json.html), [Turtle](diagnosticreport-hla-genetics-results-example.ttl.html).

In the above example, three Observations are referenced, each containing the details surrounding the genotyping of each gene/locus. Those observations would further refer to other observations (using Observation.related) that point to phased exon sequences which are the basis for individual allele assignment. This strategy is illustrated in the following figure for one gene, and sequencing two exons for each allele. Note that references from DiagnosticReport and Observation back to Patient/Donor and Specimen are not shown for clarity, although we would include them in the resource instances.

![Phasing](genomics-image25.png) <span id="resource_vs_profiles"></span>
Relationship among MolecularSequence resource and genetics profiles
-------------------------------------------------------------------

![](genomics-image20.png)
### Pointers to MolecularSequence resource

MolecularSequence resource is used to transmit and represent sequencing data. In FHIR Genomics, there are several genetics profiles containing internal pointers to MolecularSequence resource for genetic data reporting. Here is the summary:

MolecularSequence.pointer: A bundle of MolecularSequence instances can be connected by MolecularSequence.pointer to build sequence graph described in Section 3. MolecularSequence.pointer will point to the next sequence block.

MolecularSequence extension in Observation-genetics profile: Observation-genetics profile is used to report a genetic variant found in patients. MolecularSequence extension contains a pointer to MolecularSequence identifier which has related sequencing read info. It will provide reference/observed allele information and quality scores for each base/sequence block.

### Pointer to Observation resource (based on genetics profile)

Observation-genetics based Observation resource is used for interpretative genetic data. MolecularSequence resource and genetics profiles will use internal pointers to Observation-genetics-profile based Observation instance for variant report.

MolecularSequence.observation: A pointer to genetics Observation instance which is used for interpretations of this sequence block. Interpretations are generally about genetic variant found in this sequence block.

DiagnosticReport.result: A pointer to Observation instance. This element is used for reporting genetic result.

Item extension in ServiceRequest-genetics profile: It is used to describe the genetic test order.

FamilyMemberHistory: A pointer to genetics Observation instance to report genetic test results of family member

### Observation vs. MolecularSequence

MolecularSequence is used for raw sequencing data while genetic-profile-based Observation resource is used for reporting interpretative genetic information (eg. DNA/amino acid variant detected in the patient). Although both MolecularSequence and Observation-genetics profiles contain variant info, they are used differently: MolecularSequence.variant is used for encoding the sequence block; the Observation-genetics profile is mainly used for a variants test result or interpretations of raw data in MolecularSequence resource.

<span id="PGx-example"></span>
### Usage example

This picture depicts the logical relationship among these resources. The definition of pointers are described above:

![](genomics-image21.png)
Here are the details and examples mentioned above.

| Resource          | Details of data structures and pointers                       | Links of resources example                        |
|-------------------|---------------------------------------------------------------|---------------------------------------------------|
| MolecularSequence | [MolecularSequence Data Structure](#sequence)                 | [Example Here](molecularsequence-example.html)    |
| Observation       | [Observation Data Structure](#observation-genetics)           | [Example Here](observation-example.html)          |
| ServiceRequest    | [ServiceRequest Data Structure](#servicerequest-genetics)     | [Example Here](servicerequest-example-lipid.html) |
| DiagnosticReport  | [DiagnosticReport Data Structure](#diagnosticreport-genetics) | [Example Here](diagnosticreport-example.html)     |

Here is a specific use case to depict the whole story of FHIR in the clinical genomics setting: a [ServiceRequest](servicerequest-example-pgx.html) is requested, then a [Diagnosticreport](diagnosticreport-example-pgx.html) are reported. Two [MolecularSequence](sequence-example-pgx-1.html) instance, two [Observation-haplotype](observation-example-haplotype1.html) instance, a [Observation-diplotype](observation-example-diplotype1.html) and a [Observation-phenotype](observation-example-phenotype.html) for further interpretation are also created. (You can see the xml code and json code if you click the link.)

-   **Haplotype:** A haplotype is a set of DNA variations, or polymorphisms, that tend to be inherited together. A haplotype can refer to a combination of alleles or to a set of single nucleotide polymorphisms (SNPs) found on the same chromosome.
-   **Diplotype:** A diplotype is defined as a specific combination of two haplotypes.
-   **Genotype:** A genotype is an individual’s collection of genes.
-   **Phenotype:** A phenotype is the composite of an organism’s observable characteristics or traits, such as its morphology, development, biochemical or physiological properties, behavior and products of behavior.

You can see the relationship among these resources in following picture:

![](genomics-image23.png) <span id="dam"></span>
HL7 Domain Analysis Use Cases
-----------------------------

Simulated use of the proposed MolecularSequence resource and profiles on other FHIR resources are shown for many of the examples in Section 5 – Use Case Scenarios in the [HL7 Domain Analysis Model (DAM): Clinical Genomics, Release 1, September 2014 Informative Ballot](https://www.hl7.org/documentcenter/public_temp_649E1787-1C23-BA17-0CA4C354EB3E41D5/wg/clingenomics/docs/V3DAM_CG_CLINSEQ_R1_O1_2013JAN.pdf).

We show use of the FHIR design we are proposing for these cases:

1.  Specimen Identification
    1.  Get references to all variants obtained from germline analysis.
    2.  Explore antibacterial drug resistance over time (non-patient DNA)
2.  Clinical Sequencing – Germline Testing
3.  Cancer Profiling
4.  Decision Making Tools – Family History and Drug Dosage Calculators
    1.  Today clinicians translate (i.e. manually re-enter) genetic data into tools for decision making. This includes family history tools and drug dosage calculators. In the future, this data will automatically be incorporated into clinical decision making tools.
    2.  Get pharmacogenomic reporting and disease risk or diagnosis associated with variant
5.  Public Health
6.  Clinical and Research Data Warehouses

### Specimen Identification

-   Germline testing for biomarkers/mutations (usually inherited)
-   Tumor testing for biomarkers/mutations (somatic / tumor specific)
-   Pediatric Testing
-   Infectious Disease Testing

#### Get references to all variants obtained from germline analysis

``` http
GET   /Observation?
    _profile=http://hl7.org/fhir/StructureDefinition/observation-genetics&
    GenomicSourceClass=http://loinc.org|LA6683-2
```

![](genomics-image30.png)
\*Return a bundle of genetics-profile-based Observation instances

### Clinical Sequencing – Germline Testing

For a chart review, get references to all DNA sequences related to mutations with an interpretation “Unknown Significance”

``` http
GET /Observation?
    subject=123&
    component-code-value-[x]= http://loinc.org|53037-8$LA6682-4
```

53037-8: LOINC code for “Genetic disease sequence variant interpretation”

LA6682-4: LOINC answer code for “Unknown Significance”.

![](genomics-image04.png)
### Cancer Profiling

The goal of this profile methodology is to get references from all variants obtained from somatic analysis. Changes in the population of cells with particular mutations will change overtime as well as in conjunction with events such as therapy. For instance, targeted chemotherapy may kill a specific population of cancer cells with specific mutations and other cancer cell populations may survive and continue to divide. Therefore, clearly annotating these specimens as somatic variants and capturing annotations related to a time relevant to a treatment timeline may be critical for analysis.

``` http
GET /Observation?
    _profile=http://hl7.org/fhir/StructureDefinition/observation-genetics&
    GenomicsSourceClass=http://loinc.org|LA6684-0&
    date=2015-07-04&
    subject=123
```

![](genomics-image37.png)
### Decision Making Tools – Family History and Drug Dosage Calculators

Today clinicians translate (i.e. manually re-enter) genetic data into tools for decision making. This includes family history tools and drug dosage calculators. In the future, this data will automatically be incorporated into clinical decision making tools.

Get family history related to one observation:

``` http
GET /DiagnosticReport?
    _profile=http://hl7.org/fhir/StructureDefinition/diagnosticreport-genetic&
    subject=123
```

![](genomics-image02.png)
#### Get pharmacogenomic reporting and disease risk or diagnosis associated with variant

``` http
GET /Observation?
    _profile=http://hl7.org/fhir/StructureDefinition/observation-genetics&
    subject=123&
    Interpretation.component-code= http://loinc.org|51963-7
```

51963-7 : LOINC code for “Medication Assessed ”

![](genomics-image08.png)
### Public Health

Today Registrars manually translate clinical data into public health reporting systems. This data is used to monitor and improve public health (e.g. surveillance and clinical research). In the future, this data will be extracted from the EHR in an automated (or semi-automated) fashion.

For a breast cancer clinical genomic study, get all genetic-profile-based observations of patients with breast cancer:

``` http
GET /DiagnosticReport?
    _profile=http://hl7.org/fhir/StructureDefinition/diagnosticreport-genetic&
    AssessedCondition.code=http://snomed.info/sct|254837009
```

![](genomics-image29.png)
### Clinical and Research Data Warehouses

Health data warehousing should persist data in its standardized formats, while allowing users to export subsets of the data in the warehouse into multiple ‘data marts’, optimized for specific use cases, analysis type or reporting needs.

Get all genetic-profile-based observations of patients with the variant c.181T&gt;G

``` http
GET /Observation?
    _profile=http://hl7.org/fhir/StructureDefinition/observation-genetics&
    DNAVariantID=http://www.ncbi.nlm.nih.gov/projects/SNP|rs58238560
```

![](genomics-image07.png) <span id="other_examples"></span>
Other Genomics Use Cases
------------------------

During the development of the FHIR Genomics design, CGWG participants have commented on the earlier use cases and/or proposed new use cases. In this section, we list describe of these new cases and demonstrate how the proposed design will address them.

### Get a patient’s family members genetics report

This example is proposed by Kevin Hughes. Family history is useful for clinicians to know more about the condition of the patient.

``` http
Get /FamilyMemberHistory?
    _profile=http://hl7.org/fhir/StructureDefinition/familymemberhistory-genetic&
    patient=123
```

![](genomics-image22.png)
### Panel

Search for results from nephrotic syndrome panel

``` http
Get /DiagnosticReport&
    _profile=http://hl7.org/fhir/StructureDefinition/diagnosticreport-genetic&
    code=N0336&
    patient=123
```

![](genomics-image13.png)
### Basic Queries

Find patients by condition and affected status

``` http
GET /Condition?
    component-code-value-[x]=http://snomed.info/sct|439401001
```

Find patients by phenotypical attribute

``` http
Get /Observation?
    =http://hl7.org/fhir/StructureDefinition/observation-geneticsGene&
    CodeableConcept=http://loinc.org|79716-7
```

79716-7: LOINC code for “CYP2C9 gene product metabolic activity interpretation”

Find patients by molecular data type available

``` http
Get /Observation?
    =http://hl7.org/fhir/StructureDefinition/observation-genetics&
    Interpretation.component-code=http://loinc.org|34193-3
```

34193-3: LOINC code for “SMPD1 gene mutations tested for in Blood or Tissue by Molecular genetics method Nominal"

Find patients by specific molecular marker (genomic region, position, gene, SNP)

``` http
Get /Observation?
    =http://hl7.org/fhir/StructureDefinition/observation-genetics&
    DNARegionName=NC_000017.10:g.497469T>A
```

53035-2: LOINC code for “DNA marker assessed"

Find mutation by mutation type and position

``` http
Get /Observation?
    =http://hl7.org/fhir/StructureDefinition/observation-geneticsVariant&
    Name=NM_000059.3:c.706C;A&
    Type=http://loinc.org|81289-1 
```

Find patients based on mode of inheritance (genomic region, position, gene, SNP)

``` http
Get /FamilyMemberHistory?
    _profile=http://hl7.org/fhir/StructureDefinition/familymemberhistory-genetic&
    reasonCode=http://snomed.info/sct|272398008
```

7272398008: SNOMED code for “ Inheritance types "

Search for patient by ID

``` http
Get /Patient?
    subject=123
```

Search for diagnostic reports with a given variant

``` http
GET /DiagnosticReport?
    _profile=http://hl7.org/fhir/StructureDefinition/diagnosticreport-genetics&
    geneticsAnalysis=http://www.ncbi.nlm.nih.gov/projects/SNP|rs58238560
```

Given diagnostic report, return associated family history information

``` http
GET /DiagnosticReport?
    _profile=http://hl7.org/fhir/StructureDefinition/diagnosticreport-geneticsFamilyMemberHistory&
    id=123
```

Search for variants given gene and variant classification

``` http
GET /Observation?
    =http://hl7.org/fhir/StructureDefinition/observation-genetics&
    Gene=http://www.genenames.org|3236&
    GenomicSourceClass=http://loinc.org|LA6684-0
```

Search for patients based on genetic ancestry

``` http
GET /Observation?
    =http://hl7.org/fhir/StructureDefinition/observation-genetics&
    Ancestry=http://www.genenames.org|186044009
    GenomicSourceClass=http://snomed.info/sct|LA6684-0
```

### Boolean Queries

Find all patients with a set of variants

``` http
GET /Observation?
    _profile=http://hl7.org/fhir/StructureDefinition/observaiton-genetics&
    DNAVariantID=http://www.ncbi.nlm.nih.gov/projects/SNP|rs58238560$rs58238559$rs58238565
```

rs58238560: variant: NC\_000017.10:g.497469T&gt;A

rs58238559: variant: NC\_000007.13:g.87082273T&gt;C

rs58238565: variant: NC\_000005.10:g.131929452C&gt;A

### Specimen-based Queries

Find specimens collected from specific specimen body sites

``` http
GET /Specimen?
   bodySite=http://snomed.info/sct|85151006
```

Find specimens from this patient's pedigree

``` http
Get /FamilyMemberHistory?
    =http://hl7.org/fhir/StructureDefinition/familymemberhistory-genetic&
    patient=123
```

Find specimens based on patient disease status

``` http
Get /DiagnosticReport?
    =http://hl7.org/fhir/StructureDefinition/diagnosticreport-genetic&
    AssessedCondition.code=http://snomed.info/sct|254837009&
    patient=123
```

Find specimens based on specimen disease status

``` http
Get /Specimen?
    status=available&
```

Find specimens based on technology platform

``` http
Get /Specimen?
    =http://hl7.org/fhir/StructureDefinition/shareablecodesystem&
    code=Information Technology
```

Find specimens based on instrument identifier

``` http
Get /Specimen?   
    container.identifier=48736-15394-75465
```

### Time-based Queries

Find specimens collected within an absolute date range

``` http
Get /Specimen?   
    receivedTime=2011-03-04T07:03:00Z
```

Find specimens collected within a relative date range

``` http
Get /Specimen?
    =http://hl7.org/fhir/StructureDefinition/specimen-treatmentTime&   
    duration=quot
```

### MolecularSequence Test Metrics

<span id="apps"></span>
Clinical Genomic Apps
---------------------

The idea for a MolecularSequence resource grew out, in part, the SMART Platforms Project, which explored creating clinical genomic apps to integrated traditional EMR clinical data and genomic data to show data visualization and analysis, including CDS that depended upon both types of data. Below are a couple of examples. Several apps have already been designed including Genomics Advisor, SMART Precision Cancer Medicine, and Diabetes Bear EMR. Below, one of these apps will be described. To include other apps in this section, please feel free to add a note on it and how it uses FHIR/Genomics calls.

### Genomics Advisor

The SMART on FHIR Genomics Advisor was an app incorporating genomics data to show risk of disease, drug susceptibility, and related conditions based upon genotype. Technically, this app was architected (see below) by combining data from independent data services, a SMART on FHIR clinical server for clinical information and one for a SMART on FHIR Genomics data server for genomic data. The set of FHIR API calls that are necessary to support this app are shown below:

![](genomics-image26.png)
The presentation of the app looks like this:

![](genomics-image31.png) <span id="history"></span>
Appendix 1: From DSTU2 Genomics to STU3
---------------------------------------

The table shows how the data elements in the DSTU2 Observation resource as extended by the Standard Genetics Profile would be mapped to the new MolecularSequence resource.

| DSTU2 Standard Genetics profile on Observation | Observation-genetics profile                       | Maps to MolecularSequence (Proposed) |
|------------------------------------------------|----------------------------------------------------|--------------------------------------|
| geneticsGenomeBuild                            | MolecularSequence extension                        | referenceSeq.genomicsBuild           |
| geneticsChromosome                             | MolecularSequence extension                        | referenceSeq.chromosome              |
| geneticsGenomicsStart                          | MolecularSequence extension                        | variant.start                        |
| geneticsGenomicsStop                           | MolecularSequence extension                        | variant.end                          |
| geneticsReferenceAllele                        | MolecularSequence extension                        | variant.referenceAllele              |
| geneticsObservedAllele                         | MolecularSequence extension                        | variant.observedAllele               |
| geneticsSpecies                                | MolecularSequence extension                        | specimen                             |
| geneticsAllelicState                           | Allelic State extension                            |                                      |
| geneticsAllelicFrequency                       | Allelic Frequency extension                        |                                      |
| geneticsReadCoverage                           | MolecularSequence extension                        | readCoverage                         |
| geneticsCopyNumberEvent                        | Copy number event extension                        |                                      |
| geneticsTranscriptReferenceSequenceId          | Transcript reference sequence identifier extension |                                      |
| geneticsProteinReferenceSequenceId             | Protein reference sequence identifier              |                                      |
| geneticsCIGAR                                  | MolecularSequence extension                        | variant.cigar                        |
| geneticsVariationId                            | DNA variation id extension                         |                                      |
| geneticsVariationType                          | DNA sequence variation type extension              |                                      |
| geneticsAminoAcidChange                        | Amino acid change extension                        |                                      |
| geneticsAminoAcidChangeType                    | Amino acid change type extension                   |                                      |
| geneticsGene                                   | Gene extension                                     |                                      |
| geneticsDNARegionName                          | DNA region name extension                          |                                      |
| geneticsGenomicSourceClass                     | Genomic source class extension                     |                                      |

\[%file newfooter%\]
