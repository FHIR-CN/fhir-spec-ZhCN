---
title: 编码系统
type: module04
order: 800
FHIR_version: r4

---

## 4.3.0 Code Systems[](terminologies-systems.html#4.3.0 "link to here")
---------------------------------------------------------------------

[Vocabulary ![](external.png)](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group

[Maturity Level](versions.html#maturity): 3

[Standards Status](versions.html#std-process): [Trial Use](versions.html#std-process)

The following names (URIs) may be used in the _system_ element of the [Coding](datatypes.html#Coding) data type. If a URI is defined here, it SHALL be used in preference to any other identifying mechanisms. If a code system is not listed here, the correct URI may be determined by working through the following list, in order:

*   the HL7 OID Registry
*   the documentation associated with the code system
*   consulting the owner of the code system
*   asking on the HL7 vocabulary mailing list

See also the [list of known identifier systems](identifier-registry.html) that can be used in the _system_ element of the [Identifier](datatypes.html#Identifier) data type. Additional identifier systems may be registered on the HL7 FHIR registry at [http://hl7.org/fhir/registry ![](external.png)](http://hl7.org/fhir/registry) .

**Important Notes:**

*   This list of names is incomplete and subject to change. Some values may be dropped, and others will likely be added in the coming months as HL7 institutes formal processes around URIs in vocabulary
*   Note that some of the URNs in this list follow the URN specification in [RFC 5141 ![](external.png)](http://tools.ietf.org/html/rfc5141) for referring to standards published by ISO, such as urn:iso:std:iso:11073:10101. Where ISO standards define codes with meanings, and there is no entry in the list above, and they are not registered in the HL7 OID registry, the default URN for the code system is that defined by the RFC 5141.
*   For several of the code systems in this list, multiple systems are given. This means that the variants identified are different code systems, not just variants of the same code system
*   Any URL in `http://example.org` is reserved for testing and documentation purposes.

Note that the code systems are available as FHIR resources - see the [Downloads Page](downloads.html) (as part of the FHIR definitions) (excluding the External code systems.

**UMLS Note**: The [UMLS ![](external.png)](https://www.nlm.nih.gov/research/umls/sourcereleasedocs/index.html) includes many code systems that do not have an entry in the table below, or in the HL7 OID registry, or on http://registry.fhir.org. Until these code systems are registered, implementers may use the pattern `http://www.nlm.nih.gov/research/umls/[SAB]`, where \[SAB\] is the lowercase of abbreviation of the code system as provided by UMLS. e.g. The system for "Multum MediSource Lexicon" would then be `http://www.nlm.nih.gov/research/umls/mmsl`. Implementers choosing to use this pattern should be aware that very often, when the code system is registered, it will use a different system.

**Don't see what you're looking here?** See [Registering Code Systems ![](external.png)](https://confluence.hl7.org/display/FHIR/Registering+Code+Systems) for further advice.

*   [External](#tabs-ext)
*   [Internal (FHIR)](#tabs-fhir)
*   [External (FHIR)](#tabs-fhirx)
*   [HL7 v3](#tabs-v3)
*   [HL7 v2](#tabs-v2)

URI

Source

Comment

OID (for non-FHIR systems)

**Externally Published code systems**

http://snomed.info/sct

SNOMED CT ([IHTSDO ![](external.png)](http://snomed.org) )

See [Using SNOMED CT with FHIR](snomedct.html)

2.16.840.1.113883.6.96

http://www.nlm.nih.gov/research/umls/rxnorm

RxNorm ([US NLM ![](external.png)](http://www.nlm.nih.gov/) )

See [Using RxNorm with FHIR](rxnorm.html)

2.16.840.1.113883.6.88

http://loinc.org

LOINC ([LOINC.org ![](external.png)](http://loinc.org) )

See [Using LOINC with FHIR](loinc.html)

2.16.840.1.113883.6.1

http://unitsofmeasure.org

UCUM: ([UnitsOfMeasure.org ![](external.png)](http://unitsofmeasure.org) ) Case Sensitive Codes

See [Using UCUM with FHIR](ucum.html)

2.16.840.1.113883.6.8

http://ncimeta.nci.nih.gov

[NCI Metathesaurus ![](external.png)](http://ncimeta.nci.nih.gov) 

See [Using NCI Metathesaurus with FHIR](ncimeta.html)

2.16.840.1.113883.3.26.1.2

http://www.ama-assn.org/go/cpt

[AMA CPT codes ![](external.png)](http://www.ama-assn.org/go/cpt) 

See [Using CPT with FHIR](cpt.html)

2.16.840.1.113883.6.12

http://hl7.org/fhir/ndfrt

[NDF-RT (National Drug File – Reference Terminology) ![](external.png)](http://www.nlm.nih.gov/research/umls/sourcereleasedocs/current/NDFRT/) 

See [Using NDF-RT with FHIR](ndfrt.html)

2.16.840.1.113883.6.209

http://fdasis.nlm.nih.gov

[Unique Ingredient Identifier (UNII) ![](external.png)](http://www.fda.gov/Drugs/InformationOnDrugs/ucm142438.htm) 

See [Using UNII with FHIR](unii.html)

2.16.840.1.113883.4.9

http://hl7.org/fhir/sid/ndc

[NDC/NHRIC Codes ![](external.png)](http://www.fda.gov/Drugs/InformationOnDrugs/ucm142438.htm) 

See [Using NDC with FHIR](ndc.html)

2.16.840.1.113883.6.69

http://hl7.org/fhir/sid/cvx

[CVX (Vaccine Administered) ![](external.png)](http://www2a.cdc.gov/vaccines/iis/iisstandards/vaccines.asp?rpt=cvx) 

See [Using CVX with FHIR](cvx.html)

2.16.840.1.113883.12.292

urn:iso:std:iso:3166

[ISO Country & Regional Codes ![](external.png)](http://www.iso.org/iso/country_codes.htm) 

See [Using ISO 3166 Codes with FHIR](iso3166.html)

1.0.3166.1.2.2

http://hl7.org/fhir/sid/dsm5

[DSM-5 ![](external.png)](https://en.wikipedia.org/wiki/DSM-5) 

Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5)

2.16.840.1.113883.6.344

http://www.nubc.org/patient-discharge

[NUBC ![](external.png)](http://www.nubc.org) code system for Patient Discharge Status

National Uniform Billing Committee, manual UB-04, UB form locator 17

2.16.840.1.113883.6.301.5

http://www.radlex.org

[RadLex ![](external.png)](http://www.radlex.org) 

(Includes play book codes)

2.16.840.1.113883.6.256

ICD-9, ICD-10

[WHO ![](external.png)](http://www.who.int/classifications/icd/en/) ) & National Variants

See [Using ICD-\[x\] with FHIR](icd.html)

See ICD page for details

http://hl7.org/fhir/sid/icpc-1  
http://hl7.org/fhir/sid/icpc-1-nl  
http://hl7.org/fhir/sid/icpc-2

ICPC (International Classification of Primary Care) ([PH3C ![](external.png)](http://www.ph3c.org/) )

  
[NHG Table 24 ICPC-1 (NL) ![](external.png)](https://referentiemodel.nhg.org/tabellen/nhg-tabel-24-icpc1)   

  
2.16.840.1.113883.2.4.4.31.1  
2.16.840.1.113883.6.139

http://hl7.org/fhir/sid/icf-nl

ICF (International Classification of Functioning, Disability and Health) ([WHO ![](external.png)](http://www.who.int/classifications/icf/en/) )

2.16.840.1.113883.6.254

http://terminology.hl7.org/CodeSystem/v2-\[X\](/v)

[Version 2 tables](terminologies-v2.html)

\[X\] is the 4 digit identifier for a table; e.g. http://terminology.hl7.org/CodeSystem/v2-0203  
Note: only [some tables](terminologies-v2.html) may be treated in this fashion. For some tables, the meaning of the code is version dependent, and so additional information must be included in the namespace, e.g. http://terminology.hl7.org/CodeSystem/v2-0123/2.3+, as defined in the [v2 table namespace list](terminologies-v2.html). Version 2 codes are case sensitive.

2.16.840.1.113883.12.\[X\]

http://terminology.hl7.org/CodeSystem/v3-\[X\]

[A](terminologies-v3.html) [HL7 v3 ![](external.png)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) code system

\[X\] is the code system name; e.g. http://terminology.hl7.org/CodeSystem/v3-GenderStatus. HL7 v3 code systems are case sensitive.

see [v3 list](terminologies-v3.html)

https://www.gs1.org/gtin

GTIN ([GS1 ![](external.png)](https://www.gs1.org) )

Note: GTINs may be used in both [Codes](datatypes.html#Coding) and [Identifiers](datatypes.html#Identifier)

1.3.160

http://www.whocc.no/atc

Anatomical Therapeutic Chemical Classification System ([WHO ![](external.png)](http://www.whocc.no/atc/structure_and_principles/) )

2.16.840.1.113883.6.73

urn:ietf:bcp:47

IETF language (see [Tags for Identifying Languages - BCP 47 ![](external.png)](http://tools.ietf.org/html/bcp47) )

This is used for identifying language throughout FHIR. Note that usually these codes are in a `code` and the system is assumed

urn:ietf:bcp:13

Mime Types (see [Multipurpose Internet Mail Extensions (MIME) Part Four - BCP 13 ![](external.png)](http://tools.ietf.org/html/bcp13) )

This is used for identifying the mime type system throughout FHIR. Note that these codes are in a `code` (e.g. [Attachment.contentType](datatypes.html#Attachment) and in these elements the system is assumed). This system is defined for when constructing value sets of mime type codes

urn:iso:std:iso:11073:10101

Medical Device Codes ([ISO 11073-10101 ![](external.png)](https://www.iso.org/standard/37890.html) )

See [Using MDC Codes with FHIR](mdc.html)

2.16.840.1.113883.6.24

[http://dicom.nema.org/resources/ontology/DCM](codesystem-dicom-dcim.html)

DICOM Code Definitions

The meanings of codes defined in DICOM, either explicitly or by reference to another part of DICOM or an external reference document or standard

1.2.840.10008.2.16.4

http://hl7.org/fhir/NamingSystem/ca-hc-din

[Health Canada Drug Identification Number ![](external.png)](http://www.hc-sc.gc.ca/dhp-mps/prodpharma/activit/fs-fi/dinfs_fd-eng.php) 

A computer-generated eight-digit number assigned by Health Canada to a drug product prior to being marketed in Canada. [Canada Health Drug Product Database ![](external.png)](http://www.hc-sc.gc.ca/dhp-mps/prodpharma/databasdon/index-eng.php) contains product specific information on drugs approved for use in Canada.

2.16.840.1.113883.5.1105

http://hl7.org/fhir/sid/ca-hc-npn

[Health Canada Natural Product Number ![](external.png)](https://www.canada.ca/en/health-canada/services/drugs-health-products/natural-non-prescription/applications-submissions/product-licensing/licensed-natural-health-products-database.html) 

A computer-generated number assigned by Health Canada to a natural health product prior to being marketed in Canada.

2.16.840.1.113883.5.1105

http://nucc.org/provider-taxonomy

[NUCC Provider Taxonomy ![](external.png)](http://www.nucc.org/index.php/code-sets-mainmenu-41/provider-taxonomy-mainmenu-40/csv-mainmenu-57) 

The Health Care Provider Taxonomy code is a unique alphanumeric code, ten characters in length. The code set is structured into three distinct "Levels" including Provider Type, Classification, and Area of Specialization.

Copyright statement for NUCC value sets:

> This value set includes content from NUCC Health Care Provider Taxonomy Code Set for providers which is copyright © 2016+ American Medical Association. For commercial use, including sales or licensing, a license must be obtained

2.16.840.1.113883.6.101

**Code Systems for Genetics**

http://www.genenames.org

[HGNC: Human Gene Nomenclature Committee ![](external.png)](http://www.genenames.org) 

2.16.840.1.113883.6.281

http://www.ensembl.org

[ENSEMBL reference sequence identifiers ![](external.png)](http://www.ensembl.org) 

Maintained jointly by the European Bioinformatics Institute and Welcome Trust Sanger Institute

_not assigned yet_

http://www.ncbi.nlm.nih.gov/refseq/

[RefSeq: National Center for Biotechnology Information (NCBI) Reference Sequences ![](external.png)](https://www.ncbi.nlm.nih.gov/refseq/) 

2.16.840.1.113883.6.280

http://www.ncbi.nlm.nih.gov/clinvar/

[ClinVar Variant ID ![](external.png)](http://www.ncbi.nlm.nih.gov/clinvar) 

NCBI central repository for curating pathogenicity of potentially clinically relevant variants

_not assigned yet_

http://sequenceontology.org

[Sequence Ontology ![](external.png)](http://sequenceontology.org) 

_not assigned yet_

http://varnomen.hgvs.org/

[HGVS : Human Genome Variation Society ![](external.png)](http://varnomen.hgvs.org/) 

2.16.840.1.113883.6.282

http://www.ncbi.nlm.nih.gov/projects/SNP

[DBSNP : Single Nucleotide Polymorphism database ![](external.png)](http://www.ncbi.nlm.nih.gov/projects/SNP) 

2.16.840.1.113883.6.284

http://cancer.sanger.ac.uk/  
cancergenome/projects/cosmic

[COSMIC : Catalogue Of Somatic Mutations In Cancer ![](external.png)](http://cancer.sanger.ac.uk/cancergenome/projects/cosmic) 

2.16.840.1.113883.3.912

http://www.lrg-sequence.org

[LRG : Locus Reference Genomic Sequences ![](external.png)](http://www.lrg-sequence.org) 

2.16.840.1.113883.6.283

http://www.omim.org

[OMIM : Online Mendelian Inheritance in Man ![](external.png)](http://www.omim.org) 

2.16.840.1.113883.6.174

http://www.ncbi.nlm.nih.gov/pubmed

[PubMed ![](external.png)](http://www.ncbi.nlm.nih.gov/pubmed) 

2.16.840.1.113883.13.191

http://www.pharmgkb.org

[PHARMGKB : Pharmacogenomic Knowledge Base ![](external.png)](http://www.pharmgkb.org) 

PharmGKB Accession ID

2.16.840.1.113883.3.913

http://clinicaltrials.gov

[ClinicalTrials.gov ![](external.png)](http://clinicaltrials.gov) 

2.16.840.1.113883.3.1077

http://www.ebi.ac.uk/ipd/imgt/hla

[European Bioinformatics Institute ![](external.png)](http://www.ebi.ac.uk/ipd/imgt/hla) 

2.16.840.1.113883.6.341

URI (all prefixed with http://hl7.org/fhir/)

Description

OID

[ACMECholCodesBlood](codesystem-example.html)

ACME Codes for Cholesterol in Serum/Plasma: This is an example code system that includes all the ACME codes for serum/plasma cholesterol from v2.36.

[CholCodeLegacyStatus](codesystem-example-supplement.html)

[CholCodeLegacyStatus](codesystem-example-supplement.html)

[ACMECholCodesBlood](codesystem-example.html)

ACME Codes for Cholesterol in Serum/Plasma: This is an example code system that includes all the ACME codes for serum/plasma cholesterol from v2.36.

[Medication Status Codes](codesystem-medication-statement-status.html)

Medication status codes: Medication Status Codes

2.16.840.1.113883.4.642.1.1379

[Medication Status Codes](codesystem-medication-status.html)

Medication status codes: Medication Status Codes

2.16.840.1.113883.4.642.1.1380

[medicationRequest Intent](codesystem-medicationrequest-intent.html)

Medication request intent: MedicationRequest Intent Codes

2.16.840.1.113883.4.642.1.1378

[medicationrequest Status](codesystem-medicationrequest-status.html)

Medicationrequest status: MedicationRequest Status Codes

2.16.840.1.113883.4.642.1.1377

[status](codesystem-verificationresult-status.html)

Status: The validation status of the target

2.16.840.1.113883.4.642.1.885

[Code system summary example for ACME body sites](codesystem-example-summary.html)

This is an example code system summary for the ACME codes for body site.

[Code system summary example for ACME body sites](codesystem-example-summary.html)

This is an example code system summary for the ACME codes for body site.

[TaskCode](codesystem-task-code.html)

Task Codes: Codes indicating the type of action that is expected to be performed

2.16.840.1.113883.4.642.1.1397

[FHIRVersion](codesystem-FHIR-version.html) [N](versions.html#std-process "Normative Content")

FHIRVersion: All published FHIR Versions.

2.16.840.1.113883.4.642.1.1310

[AbstractType](codesystem-abstract-types.html) [N](versions.html#std-process "Normative Content")

AbstractType: A list of the base types defined by this version of the FHIR specification - types that are defined, but for which only specializations actually are created.

[AccountStatus](codesystem-account-status.html)

AccountStatus: Indicates whether the account is available to be used.

2.16.840.1.113883.4.642.1.727

[ActionCardinalityBehavior](codesystem-action-cardinality-behavior.html)

ActionCardinalityBehavior: Defines behavior for an action or a group for how many times that item may be repeated.

2.16.840.1.113883.4.642.1.808

[ActionConditionKind](codesystem-action-condition-kind.html)

ActionConditionKind: Defines the kinds of conditions that can appear on actions.

2.16.840.1.113883.4.642.1.816

[ActionGroupingBehavior](codesystem-action-grouping-behavior.html)

ActionGroupingBehavior: Defines organization behavior of a group.

2.16.840.1.113883.4.642.1.800

[ActionParticipantType](codesystem-action-participant-type.html)

ActionParticipantType: The type of participant for the action.

2.16.840.1.113883.4.642.1.812

[ActionPrecheckBehavior](codesystem-action-precheck-behavior.html)

ActionPrecheckBehavior: Defines selection frequency behavior for an action or group.

2.16.840.1.113883.4.642.1.806

[ActionRelationshipType](codesystem-action-relationship-type.html)

ActionRelationshipType: Defines the types of relationships between actions.

2.16.840.1.113883.4.642.1.814

[ActionRequiredBehavior](codesystem-action-required-behavior.html)

ActionRequiredBehavior: Defines expectations around whether an action or action group is required.

2.16.840.1.113883.4.642.1.804

[ActionSelectionBehavior](codesystem-action-selection-behavior.html)

ActionSelectionBehavior: Defines selection behavior of a group.

2.16.840.1.113883.4.642.1.802

[AdditionalMaterialCodes](codesystem-additionalmaterials.html)

Additional Material Codes: This value set includes sample additional material type codes.

2.16.840.1.113883.4.642.1.530

[AddressType](codesystem-address-type.html) [N](versions.html#std-process "Normative Content")

AddressType: The type of an address (physical / postal).

2.16.840.1.113883.4.642.1.70

[AddressUse](codesystem-address-use.html) [N](versions.html#std-process "Normative Content")

AddressUse: The use of an address.

2.16.840.1.113883.4.642.1.68

[AdministrativeGender](codesystem-administrative-gender.html) [N](versions.html#std-process "Normative Content")

AdministrativeGender: The gender of a person used for administrative purposes.

2.16.840.1.113883.4.642.1.2

[AdverseEventActuality](codesystem-adverse-event-actuality.html)

AdverseEventActuality: Overall nature of the adverse event, e.g. real or potential.

2.16.840.1.113883.4.642.1.832

[AllergyIntoleranceCategory](codesystem-allergy-intolerance-category.html)

AllergyIntoleranceCategory: Category of an identified substance associated with allergies or intolerances.

2.16.840.1.113883.4.642.1.134

[AllergyIntoleranceCriticality](codesystem-allergy-intolerance-criticality.html)

AllergyIntoleranceCriticality: Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.

2.16.840.1.113883.4.642.1.130

[AllergyIntoleranceType](codesystem-allergy-intolerance-type.html)

AllergyIntoleranceType: Identification of the underlying physiological mechanism for a Reaction Risk.

2.16.840.1.113883.4.642.1.132

[GenderStatus](codesystem-animal-genderstatus.html)

Gender status: This example value set defines a set of codes that can be used to indicate the current state of the animal's reproductive organs.

2.16.840.1.113883.4.642.1.419

[AnimalSpecies](codesystem-animal-species.html)

Animal species: This example value set defines a set of codes that can be used to indicate species of animal patients.

2.16.840.1.113883.4.642.1.421

[AppointmentStatus](codesystem-appointmentstatus.html)

AppointmentStatus: The free/busy status of an appointment.

2.16.840.1.113883.4.642.1.485

[AssertionDirectionType](codesystem-assert-direction-codes.html)

AssertionDirectionType: The type of direction to use for assertion.

2.16.840.1.113883.4.642.1.707

[AssertionOperatorType](codesystem-assert-operator-codes.html)

AssertionOperatorType: The type of operator to use for assertion.

2.16.840.1.113883.4.642.1.709

[AssertionResponseTypes](codesystem-assert-response-code-types.html)

AssertionResponseTypes: The type of response code to use for assertion.

2.16.840.1.113883.4.642.1.711

[ContractResourceAssetAvailiabilityCodes](codesystem-asset-availability.html)

Contract Resource Asset Availiability codes: This value set has asset availability codes.

2.16.840.1.113883.4.642.1.1296

[AuditEventAction](codesystem-audit-event-action.html)

AuditEventAction: Indicator for type of action performed during the event that generated the event.

2.16.840.1.113883.4.642.1.453

[AuditEventOutcome](codesystem-audit-event-outcome.html)

AuditEventOutcome: Indicates whether the event succeeded or failed.

2.16.840.1.113883.4.642.1.455

[BindingStrength](codesystem-binding-strength.html) [N](versions.html#std-process "Normative Content")

BindingStrength: Indication of the degree of conformance expectations associated with a binding.

2.16.840.1.113883.4.642.1.44

[BundleType](codesystem-bundle-type.html) [N](versions.html#std-process "Normative Content")

BundleType: Indicates the purpose of a bundle - how it is intended to be used.

2.16.840.1.113883.4.642.1.621

[CapabilityStatementKind](codesystem-capability-statement-kind.html) [N](versions.html#std-process "Normative Content")

CapabilityStatementKind: How a capability statement is intended to be used.

2.16.840.1.113883.4.642.1.199

[CarePlanActivityStatus](codesystem-care-plan-activity-status.html)

CarePlanActivityStatus: Codes that reflect the current state of a care plan activity within its overall life cycle.

2.16.840.1.113883.4.642.1.147

[CareTeamStatus](codesystem-care-team-status.html)

CareTeamStatus: Indicates the status of the care team.

2.16.840.1.113883.4.642.1.154

[ChargeItemStatus](codesystem-chargeitem-status.html)

ChargeItemStatus: Codes identifying the lifecycle stage of a ChargeItem.

2.16.840.1.113883.4.642.1.847

[Use](codesystem-claim-use.html)

Use: The purpose of the Claim: predetermination, preauthorization, claim.

2.16.840.1.113883.4.642.1.545

[CodeSearchSupport](codesystem-code-search-support.html)

CodeSearchSupport: The degree to which the server supports the code search parameter on ValueSet, if it is supported.

2.16.840.1.113883.4.642.1.861

[CodeSystemContentMode](codesystem-codesystem-content-mode.html) [N](versions.html#std-process "Normative Content")

CodeSystemContentMode: The extent of the content of the code system (the concepts and codes it defines) are represented in a code system resource.

2.16.840.1.113883.4.642.1.783

[CodeSystemHierarchyMeaning](codesystem-codesystem-hierarchy-meaning.html) [N](versions.html#std-process "Normative Content")

CodeSystemHierarchyMeaning: The meaning of the hierarchy of concepts in a code system.

2.16.840.1.113883.4.642.1.785

[CompartmentType](codesystem-compartment-type.html)

CompartmentType: Which type a compartment definition describes.

2.16.840.1.113883.4.642.1.787

[CompositionAttestationMode](codesystem-composition-attestation-mode.html)

CompositionAttestationMode: The way in which a person authenticated a composition.

2.16.840.1.113883.4.642.1.239

[CompositionStatus](codesystem-composition-status.html)

CompositionStatus: The workflow/clinical status of the composition.

2.16.840.1.113883.4.642.1.242

[ConceptMapEquivalence](codesystem-concept-map-equivalence.html)

ConceptMapEquivalence: The degree of equivalence between concepts.

2.16.840.1.113883.4.642.1.18

[FHIR Defined Concept Properties](codesystem-concept-properties.html) [N](versions.html#std-process "Normative Content")

A set of common concept properties for use on coded systems throughout the FHIR eco-system.

[PropertyType](codesystem-concept-property-type.html) [N](versions.html#std-process "Normative Content")

PropertyType: The type of a property value.

2.16.840.1.113883.4.642.1.781

[ConceptSubsumptionOutcome](codesystem-concept-subsumption-outcome.html)

ConceptSubsumptionOutcome: The subsumption relationship between code/Coding "A" and code/Coding "B". There are 4 possible codes to be returned: equivalent, subsumes, subsumed-by, and not-subsumed. If the server is unable to determine the relationship between the codes/Codings, then it returns an error (i.e. an OperationOutcome).

2.16.840.1.113883.4.642.1.1239

[ConceptMapGroupUnmappedMode](codesystem-conceptmap-unmapped-mode.html)

ConceptMapGroupUnmappedMode: Defines which action to take if there is no match in the group.

2.16.840.1.113883.4.642.1.481

[ConditionalDeleteStatus](codesystem-conditional-delete-status.html) [N](versions.html#std-process "Normative Content")

ConditionalDeleteStatus: A code that indicates how the server supports conditional delete.

2.16.840.1.113883.4.642.1.195

[ConditionalReadStatus](codesystem-conditional-read-status.html) [N](versions.html#std-process "Normative Content")

ConditionalReadStatus: A code that indicates how the server supports conditional read.

2.16.840.1.113883.4.642.1.201

[ConsentDataMeaning](codesystem-consent-data-meaning.html)

ConsentDataMeaning: How a resource reference is interpreted when testing consent restrictions.

2.16.840.1.113883.4.642.1.760

[ConsentProvisionType](codesystem-consent-provision-type.html)

ConsentProvisionType: How a rule statement is applied, such as adding additional consent or removing consent.

2.16.840.1.113883.4.642.1.758

[ConsentState](codesystem-consent-state-codes.html)

ConsentState: Indicates the state of the consent.

2.16.840.1.113883.4.642.1.756

[PerformerRoleCodes](codesystem-consent-performer.html)

Performer Role Codes: This value set includes sample Performer Role codes.

2.16.840.1.113883.4.642.1.1017

[ConstraintSeverity](codesystem-constraint-severity.html) [N](versions.html#std-process "Normative Content")

ConstraintSeverity: SHALL applications comply with this constraint?

2.16.840.1.113883.4.642.1.82

[ContactPointSystem](codesystem-contact-point-system.html) [N](versions.html#std-process "Normative Content")

ContactPointSystem: Telecommunications form for contact point.

2.16.840.1.113883.4.642.1.72

[ContactPointUse](codesystem-contact-point-use.html) [N](versions.html#std-process "Normative Content")

ContactPointUse: Use of contact point.

2.16.840.1.113883.4.642.1.74

[ContractResourceActionStatusCodes](codesystem-contract-actionstatus.html)

Contract Resource Action Status codes: This value set contract specific codes for action status.

2.16.840.1.113883.4.642.1.1304

[ContractResourceAssetContextCodes](codesystem-contract-assetcontext.html)

Contract Resource Asset Context codes: This value set contract specific codes for asset context.

2.16.840.1.113883.4.642.1.1298

[ContractResourceAssetScopeCodes](codesystem-contract-assetscope.html)

Contract Resource Asset Scope codes: This value set contract specific codes for asset scope.

2.16.840.1.113883.4.642.1.1294

[ContractResourceAssetSub-TypeCodes](codesystem-contract-assetsubtype.html)

Contract Resource Asset Sub-Type codes: This value set contract specific codes for asset subtype.

2.16.840.1.113883.4.642.1.1302

[ContractResourceAssetTypeCodes](codesystem-contract-assettype.html)

Contract Resource Asset Type codes: This value set contract specific codes for asset type.

2.16.840.1.113883.4.642.1.1300

[ContractResourceDecisionModeCodes](codesystem-contract-decision-mode.html)

Contract Resource Decision Mode codes: This value set contract specific codes for decision modes.

2.16.840.1.113883.4.642.1.1292

[ContractResourceDefinitionSubtypeCodes](codesystem-contract-definition-subtype.html)

Contract Resource Definition Subtype codes: This value set contract specific codes for status.

2.16.840.1.113883.4.642.1.1213

[ContractResourceDefinitionTypeCodes](codesystem-contract-definition-type.html)

Contract Resource Definition Type codes: This value set contract specific codes for status.

2.16.840.1.113883.4.642.1.1211

[ContractResourceExpirationTypeCodes](codesystem-contract-expiration-type.html)

Contract Resource Expiration Type codes: This value set contract specific codes for status.

2.16.840.1.113883.4.642.1.1215

[ContractResourceLegalStateCodes](codesystem-contract-legalstate.html)

Contract Resource Legal State codes: This value set contract specific codes for status.

2.16.840.1.113883.4.642.1.1207

[ContractResourcePartyRoleCodes](codesystem-contract-party-role.html)

Contract Resource Party Role codes: This value set contract specific codes for offer party participation.

2.16.840.1.113883.4.642.1.1225

[ContractResourcePublicationStatusCodes](codesystem-contract-publicationstatus.html)

Contract Resource Publication Status codes: This value set contract specific codes for status.

2.16.840.1.113883.4.642.1.1209

[ContractResourceScopeCodes](codesystem-contract-scope.html)

Contract Resource Scope codes: This value set contract specific codes for scope.

2.16.840.1.113883.4.642.1.1217

[ContractResourceScopeCodes](codesystem-contract-security-category.html)

Contract Resource Scope codes: This value set contract specific codes for security category.

2.16.840.1.113883.4.642.1.1221

[ContractResourceScopeCodes](codesystem-contract-security-classification.html)

Contract Resource Scope codes: This value set contract specific codes for security classification.

2.16.840.1.113883.4.642.1.1219

[ContractResourceSecurityControlCodes](codesystem-contract-security-control.html)

Contract Resource Security Control codes: This value set contract specific codes for security control.

2.16.840.1.113883.4.642.1.1223

[ContractResourceStatusCodes](codesystem-contract-status.html)

Contract Resource Status Codes: This value set contract specific codes for status.

2.16.840.1.113883.4.642.1.744

[ContributorType](codesystem-contributor-type.html)

ContributorType: The type of contributor.

2.16.840.1.113883.4.642.1.94

[DataType](codesystem-data-types.html) [N](versions.html#std-process "Normative Content")

DataType: A version specific list of the data types defined by the FHIR specification for use as an element type (any of the FHIR defined data types).

[DaysOfWeek](codesystem-days-of-week.html) [N](versions.html#std-process "Normative Content")

DaysOfWeek: The days of the week.

2.16.840.1.113883.4.642.1.513

[DefinitionResourceType](codesystem-definition-resource-types.html)

DefinitionResourceType: A list of all the definition resource types defined in this version of the FHIR specification.

2.16.840.1.113883.4.642.1.1057

[DetectedIssueSeverity](codesystem-detectedissue-severity.html)

DetectedIssueSeverity: Indicates the potential degree of impact of the identified issue on the patient.

2.16.840.1.113883.4.642.1.207

[ProcedureDeviceActionCodes](codesystem-device-action.html)

Procedure Device Action Codes: Example codes indicating the change that happened to the device during the procedure. Note that these are in no way complete and might not even be appropriate for some uses.

2.16.840.1.113883.4.642.1.426

[FHIRDeviceStatus](codesystem-device-definition-status.html)

FHIRDeviceStatus: Codes representing the current status of the device - on, off, suspended, etc.

2.16.840.1.113883.4.642.1.1308

[DeviceNameType](codesystem-device-nametype.html)

DeviceNameType: The type of name the device is referred by.

2.16.840.1.113883.4.642.1.1084

[DeviceUseStatementStatus](codesystem-device-statement-status.html)

DeviceUseStatementStatus: A coded concept indicating the current status of the Device Usage.

2.16.840.1.113883.4.642.1.215

[FHIRDeviceStatus](codesystem-device-status.html)

FHIRDeviceStatus: The availability status of the device.

2.16.840.1.113883.4.642.1.210

[DiagnosticReportStatus](codesystem-diagnostic-report-status.html)

DiagnosticReportStatus: The status of the diagnostic report.

2.16.840.1.113883.4.642.1.236

[DiscriminatorType](codesystem-discriminator-type.html) [N](versions.html#std-process "Normative Content")

DiscriminatorType: How an element value is interpreted when discrimination is evaluated.

2.16.840.1.113883.4.642.1.92

[DocumentMode](codesystem-document-mode.html) [N](versions.html#std-process "Normative Content")

DocumentMode: Whether the application produces or consumes documents.

2.16.840.1.113883.4.642.1.187

[DocumentReferenceStatus](codesystem-document-reference-status.html)

DocumentReferenceStatus: The status of the document reference.

2.16.840.1.113883.4.642.1.8

[DocumentRelationshipType](codesystem-document-relationship-type.html)

DocumentRelationshipType: The type of relationship between documents.

2.16.840.1.113883.4.642.1.245

[EligibilityRequestPurpose](codesystem-eligibilityrequest-purpose.html)

EligibilityRequestPurpose: A code specifying the types of information being requested.

2.16.840.1.113883.4.642.1.1183

[EligibilityResponsePurpose](codesystem-eligibilityresponse-purpose.html)

EligibilityResponsePurpose: A code specifying the types of information being requested.

2.16.840.1.113883.4.642.1.1185

[EncounterLocationStatus](codesystem-encounter-location-status.html)

EncounterLocationStatus: The status of the location.

2.16.840.1.113883.4.642.1.263

[EncounterStatus](codesystem-encounter-status.html)

EncounterStatus: Current state of the encounter.

2.16.840.1.113883.4.642.1.247

[EndpointStatus](codesystem-endpoint-status.html)

EndpointStatus: The status of the endpoint.

2.16.840.1.113883.4.642.1.495

[EpisodeOfCareStatus](codesystem-episode-of-care-status.html)

EpisodeOfCareStatus: The status of the episode of care.

2.16.840.1.113883.4.642.1.665

[EventCapabilityMode](codesystem-event-capability-mode.html) [N](versions.html#std-process "Normative Content")

EventCapabilityMode: The mode of a message capability statement.

2.16.840.1.113883.4.642.1.183

[EventResourceType](codesystem-event-resource-types.html)

EventResourceType: A list of all the event resource types defined in this version of the FHIR specification.

2.16.840.1.113883.4.642.1.1061

[EventStatus](codesystem-event-status.html)

EventStatus: Codes identifying the lifecycle stage of an event.

2.16.840.1.113883.4.642.1.110

[EventTiming](codesystem-event-timing.html) [N](versions.html#std-process "Normative Content")

EventTiming: Real world event relating to the schedule.

2.16.840.1.113883.4.642.1.76

[ClaimItemTypeCodes](codesystem-fm-itemtype.html)

Claim Item Type Codes: This value set includes sample Item Type codes.

2.16.840.1.113883.4.642.1.549

[TeethCodes](codesystem-teeth.html)

Teeth Codes: This value set includes the FDI Teeth codes.

2.16.840.1.113883.4.642.1.551

[ExampleOnsetType(Reason)Codes](codesystem-ex-onsettype.html)

Example Onset Type (Reason) Codes: This value set includes example Onset Type codes which are used to identify the event for which the onset, starting date, is required.

2.16.840.1.113883.4.642.1.579

[OralProsthoMaterialTypeCodes](codesystem-oral-prosthodontic-material.html)

Oral Prostho Material type Codes: This value set includes sample Oral Prosthodontic Material type codes.

2.16.840.1.113883.4.642.1.539

[ExamplePharmacyServiceCodes](codesystem-service-pharmacy.html)

Example Pharmacy Service Codes: This value set includes a smattering of Pharmacy Service codes.

2.16.840.1.113883.4.642.1.563

[ExampleServiceModifierCodes](codesystem-service-modifiers.html)

Example Service Modifier Codes: This value set includes sample Service Modifier codes which may support differential payment.

2.16.840.1.113883.4.642.1.573

[ExampleService/ProductCodes](codesystem-service-product.html)

Example Service/Product Codes: This value set includes a smattering of Service/Product codes.

2.16.840.1.113883.4.642.1.561

[UDICodes](codesystem-udi.html)

UDI Codes: This value set includes sample UDI codes.

2.16.840.1.113883.4.642.1.555

[ExampleScenarioActorType](codesystem-examplescenario-actor-type.html)

ExampleScenarioActorType: The type of actor - system or human.

2.16.840.1.113883.4.642.1.859

[ExplanationOfBenefitStatus](codesystem-explanationofbenefit-status.html)

ExplanationOfBenefitStatus: A code specifying the state of the resource instance.

2.16.840.1.113883.4.642.1.619

[ExposureState](codesystem-exposure-state.html)

ExposureState: Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).

2.16.840.1.113883.4.642.1.1352

[ExpressionLanguage](codesystem-expression-language.html)

ExpressionLanguage: The media type of the expression language.

2.16.840.1.113883.4.642.1.106

[ExtensionContextType](codesystem-extension-context-type.html) [N](versions.html#std-process "Normative Content")

ExtensionContextType: How an extension context is interpreted.

2.16.840.1.113883.4.642.1.1013

[ExtraActivityType](codesystem-extra-activity-type.html)

This value set includes coded concepts not well covered in any of the included valuesets.

[FeedingDeviceCodes](codesystem-feeding-device.html)

Feeding Device Codes: Materials used or needed to feed the patient.

2.16.840.1.113883.4.642.1.962

[FilterOperator](codesystem-filter-operator.html) [N](versions.html#std-process "Normative Content")

FilterOperator: The kind of operation to perform as a part of a property based filter.

2.16.840.1.113883.4.642.1.479

[FlagPriorityCodes](codesystem-flag-priority.html)

Flag Priority Codes: This value set is provided as an exemplar. The value set is driven by IHE Table B.8-4: Abnormal Flags, Alert Priority.

2.16.840.1.113883.4.642.1.951

[FlagStatus](codesystem-flag-status.html)

FlagStatus: Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.

2.16.840.1.113883.4.642.1.121

[FMConditionCodes](codesystem-fm-conditions.html)

FM Condition Codes: This value set includes sample Conditions codes.

2.16.840.1.113883.4.642.1.557

[FinancialResourceStatusCodes](codesystem-fm-status.html)

Financial Resource Status Codes: This value set includes Status codes.

2.16.840.1.113883.4.642.1.593

[GenderIdentity](codesystem-gender-identity.html)

Gender identity: This example value set defines a set of codes that can be used to indicate a patient's gender identity.

2.16.840.1.113883.4.642.1.973

[GoalLifecycleStatus](codesystem-goal-status.html)

GoalLifecycleStatus: Codes that reflect the current state of a goal and whether the goal is still being targeted.

2.16.840.1.113883.4.642.1.272

[GoalStatusReason](codesystem-goal-status-reason.html)

Goal status reason: Example codes indicating the reason for a current status. Note that these are in no way complete and might not even be appropriate for some uses.

2.16.840.1.113883.4.642.1.278

[GraphCompartmentRule](codesystem-graph-compartment-rule.html)

GraphCompartmentRule: How a compartment must be linked.

2.16.840.1.113883.4.642.1.281

[GraphCompartmentUse](codesystem-graph-compartment-use.html)

GraphCompartmentUse: Defines how a compartment rule is used.

2.16.840.1.113883.4.642.1.283

[GroupMeasure](codesystem-group-measure.html)

GroupMeasure: Possible group measure aggregates (E.g. Mean, Median).

2.16.840.1.113883.4.642.1.1346

[GroupType](codesystem-group-type.html)

GroupType: Types of resources that are part of group.

2.16.840.1.113883.4.642.1.285

[GuidanceResponseStatus](codesystem-guidance-response-status.html)

GuidanceResponseStatus: The status of a guidance response.

2.16.840.1.113883.4.642.1.818

[GuidePageGeneration](codesystem-guide-page-generation.html)

GuidePageGeneration: A code that indicates how the page is generated.

2.16.840.1.113883.4.642.1.999

[GuideParameterCode](codesystem-guide-parameter-code.html)

GuideParameterCode: Code of parameter that is input to the guide.

2.16.840.1.113883.4.642.1.997

[FamilyHistoryStatus](codesystem-history-status.html)

FamilyHistoryStatus: A code that identifies the status of the family history record.

2.16.840.1.113883.4.642.1.268

[TestScriptRequestMethodCode](codesystem-http-operations.html)

TestScriptRequestMethodCode: The allowable request method or HTTP operation codes.

2.16.840.1.113883.4.642.1.717

[HTTPVerb](codesystem-http-verb.html) [N](versions.html#std-process "Normative Content")

HTTPVerb: HTTP verbs (in the HTTP command line). See \[HTTP rfc\](https://tools.ietf.org/html/rfc7231) for details.

2.16.840.1.113883.4.642.1.625

[IdentifierUse](codesystem-identifier-use.html) [N](versions.html#std-process "Normative Content")

IdentifierUse: Identifies the purpose for this identifier, if known .

2.16.840.1.113883.4.642.1.58

[IdentityAssuranceLevel](codesystem-identity-assuranceLevel.html)

IdentityAssuranceLevel: The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.

2.16.840.1.113883.4.642.1.657

[ImagingStudyStatus](codesystem-imagingstudy-status.html)

ImagingStudyStatus: The status of the ImagingStudy.

2.16.840.1.113883.4.642.1.991

[InterventionCodes](codesystem-intervention.html)

Intervention Codes: This value set includes sample Intervention codes.

2.16.840.1.113883.4.642.1.533

[InvoicePriceComponentType](codesystem-invoice-priceComponentType.html)

InvoicePriceComponentType: Codes indicating the kind of the price component.

2.16.840.1.113883.4.642.1.869

[InvoiceStatus](codesystem-invoice-status.html)

InvoiceStatus: Codes identifying the lifecycle stage of an Invoice.

2.16.840.1.113883.4.642.1.867

[IssueSeverity](codesystem-issue-severity.html) [N](versions.html#std-process "Normative Content")

IssueSeverity: How the issue affects the success of the action.

2.16.840.1.113883.4.642.1.409

[IssueType](codesystem-issue-type.html) [N](versions.html#std-process "Normative Content")

IssueType: A code that describes the type of issue.

2.16.840.1.113883.4.642.1.411

[QuestionnaireItemType](codesystem-item-type.html)

QuestionnaireItemType: Distinguishes groups from questions and display text and indicates data type for questions.

2.16.840.1.113883.4.642.1.445

[KnowledgeResourceType](codesystem-knowledge-resource-types.html)

KnowledgeResourceType: A list of all the knowledge resource types defined in this version of the FHIR specification.

2.16.840.1.113883.4.642.1.1063

[LanguagePreferenceType](codesystem-language-preference-type.html)

Language preference type: This value set defines the set of codes for describing the type or mode of the patient's preferred language.

2.16.840.1.113883.4.642.1.1023

[LinkType](codesystem-link-type.html) [N](versions.html#std-process "Normative Content")

LinkType: The type of link between this patient resource and another patient resource.

2.16.840.1.113883.4.642.1.424

[LinkageType](codesystem-linkage-type.html)

LinkageType: Used to distinguish different roles a resource can play within a set of linked resources.

2.16.840.1.113883.4.642.1.315

[ListMode](codesystem-list-mode.html)

ListMode: The processing mode that applies to this list.

2.16.840.1.113883.4.642.1.319

[ListStatus](codesystem-list-status.html)

ListStatus: The current state of the list.

2.16.840.1.113883.4.642.1.327

[LocationMode](codesystem-location-mode.html)

LocationMode: Indicates whether a resource instance represents a specific location or a class of locations.

2.16.840.1.113883.4.642.1.331

[LocationStatus](codesystem-location-status.html)

LocationStatus: Indicates whether the location is still in use.

2.16.840.1.113883.4.642.1.333

[StructureMapContextType](codesystem-map-context-type.html)

StructureMapContextType: How to interpret the context.

2.16.840.1.113883.4.642.1.680

[StructureMapGroupTypeMode](codesystem-map-group-type-mode.html)

StructureMapGroupTypeMode: If this is the default rule set to apply for the source type, or this combination of types.

2.16.840.1.113883.4.642.1.688

[StructureMapInputMode](codesystem-map-input-mode.html)

StructureMapInputMode: Mode for this instance of data.

2.16.840.1.113883.4.642.1.678

[StructureMapModelMode](codesystem-map-model-mode.html)

StructureMapModelMode: How the referenced structure is used in this mapping.

2.16.840.1.113883.4.642.1.676

[StructureMapSourceListMode](codesystem-map-source-list-mode.html)

StructureMapSourceListMode: If field is a list, how to manage the source.

2.16.840.1.113883.4.642.1.684

[StructureMapTargetListMode](codesystem-map-target-list-mode.html)

StructureMapTargetListMode: If field is a list, how to manage the production.

2.16.840.1.113883.4.642.1.686

[StructureMapTransform](codesystem-map-transform.html)

StructureMapTransform: How data is copied/created.

2.16.840.1.113883.4.642.1.682

[MeasureReportStatus](codesystem-measure-report-status.html)

MeasureReportStatus: The status of the measure report.

2.16.840.1.113883.4.642.1.777

[MeasureReportType](codesystem-measure-report-type.html)

MeasureReportType: The type of the measure report.

2.16.840.1.113883.4.642.1.779

[MessageEvent](codesystem-message-events.html) [N](versions.html#std-process "Normative Content")

MessageEvent: One of the message events defined as part of this version of FHIR.

[MessageSignificanceCategory](codesystem-message-significance-category.html)

MessageSignificanceCategory: The impact of the content of a message.

2.16.840.1.113883.4.642.1.189

[messageheader-response-request](codesystem-messageheader-response-request.html)

messageheader-response-request: HL7-defined table of codes which identify conditions under which acknowledgments are required to be returned in response to a message.

2.16.840.1.113883.4.642.1.925

[DeviceMetricCalibrationState](codesystem-metric-calibration-state.html)

DeviceMetricCalibrationState: Describes the state of a metric calibration.

2.16.840.1.113883.4.642.1.653

[DeviceMetricCalibrationType](codesystem-metric-calibration-type.html)

DeviceMetricCalibrationType: Describes the type of a metric calibration.

2.16.840.1.113883.4.642.1.651

[DeviceMetricCategory](codesystem-metric-category.html)

DeviceMetricCategory: Describes the category of the metric.

2.16.840.1.113883.4.642.1.649

[DeviceMetricColor](codesystem-metric-color.html)

DeviceMetricColor: Describes the typical color of representation.

2.16.840.1.113883.4.642.1.655

[DeviceMetricOperationalStatus](codesystem-metric-operational-status.html)

DeviceMetricOperationalStatus: Describes the operational status of the DeviceMetric.

2.16.840.1.113883.4.642.1.647

[NameUse](codesystem-name-use.html) [N](versions.html#std-process "Normative Content")

NameUse: The use of a human name.

2.16.840.1.113883.4.642.1.66

[NamingSystemIdentifierType](codesystem-namingsystem-identifier-type.html)

NamingSystemIdentifierType: Identifies the style of unique identifier used to identify a namespace.

2.16.840.1.113883.4.642.1.493

[NamingSystemType](codesystem-namingsystem-type.html)

NamingSystemType: Identifies the purpose of the naming system.

2.16.840.1.113883.4.642.1.491

[NarrativeStatus](codesystem-narrative-status.html)

NarrativeStatus: The status of a resource narrative.

2.16.840.1.113883.4.642.1.56

[AuditEventAgentNetworkType](codesystem-network-type.html)

AuditEventAgentNetworkType: The type of network access point of this agent in the audit event.

2.16.840.1.113883.4.642.1.457

[NoteType](codesystem-note-type.html)

NoteType: The presentation types of notes.

2.16.840.1.113883.4.642.1.16

[ObservationRangeCategory](codesystem-observation-range-category.html)

ObservationRangeCategory: Codes identifying the category of observation range.

2.16.840.1.113883.4.642.1.1334

[ObservationStatus](codesystem-observation-status.html) [N](versions.html#std-process "Normative Content")

ObservationStatus: Codes providing the status of an observation.

2.16.840.1.113883.4.642.1.401

[OperationKind](codesystem-operation-kind.html) [N](versions.html#std-process "Normative Content")

OperationKind: Whether an operation is a normal operation or a query.

2.16.840.1.113883.4.642.1.507

[OperationParameterUse](codesystem-operation-parameter-use.html) [N](versions.html#std-process "Normative Content")

OperationParameterUse: Whether an operation parameter is an input or an output parameter.

2.16.840.1.113883.4.642.1.509

[OrganizationAffiliationRole](codesystem-organization-role.html)

Organization Affiliation Role: This example value set defines a set of codes that can be used to indicate the role of one Organization in relation to another.

2.16.840.1.113883.4.642.1.881

[orientationType](codesystem-orientation-type.html)

orientationType: Type for orientation.

2.16.840.1.113883.4.642.1.988

[ParticipantRequired](codesystem-participantrequired.html)

ParticipantRequired: Is the Participant required to attend the appointment.

2.16.840.1.113883.4.642.1.489

[ParticipationStatus](codesystem-participationstatus.html)

ParticipationStatus: The Participation status of an appointment.

2.16.840.1.113883.4.642.1.487

[ObservationDataType](codesystem-permitted-data-type.html)

ObservationDataType: Permitted data type for observation value.

2.16.840.1.113883.4.642.1.1332

[PractitionerSpecialty](codesystem-practitioner-specialty.html)

Practitioner specialty: This example value set defines a set of codes that can be used to indicate the specialty of a Practitioner.

2.16.840.1.113883.4.642.1.442

[ProcedureProgressStatusCodes](codesystem-procedure-progress-status-codes.html)

Procedure Progress Status Codes: This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the procedure performance process.

2.16.840.1.113883.4.642.1.947

[BiologicallyDerivedProductCategory](codesystem-product-category.html)

BiologicallyDerivedProductCategory: Biologically Derived Product Category.

2.16.840.1.113883.4.642.1.901

[BiologicallyDerivedProductStatus](codesystem-product-status.html)

BiologicallyDerivedProductStatus: Biologically Derived Product Status.

2.16.840.1.113883.4.642.1.903

[BiologicallyDerivedProductStorageScale](codesystem-product-storage-scale.html)

BiologicallyDerivedProductStorageScale: BiologicallyDerived Product Storage Scale.

2.16.840.1.113883.4.642.1.905

[PropertyRepresentation](codesystem-property-representation.html) [N](versions.html#std-process "Normative Content")

PropertyRepresentation: How a property is represented when serialized.

2.16.840.1.113883.4.642.1.88

[ProvenanceEntityRole](codesystem-provenance-entity-role.html)

ProvenanceEntityRole: How an entity was used in an activity.

2.16.840.1.113883.4.642.1.437

[ProvenanceParticipantRole](codesystem-provenance-agent-role.html)

Provenance participant role: The role that a provenance participant played

2.16.840.1.113883.4.642.1.1306

[PublicationStatus](codesystem-publication-status.html) [N](versions.html#std-process "Normative Content")

PublicationStatus: The lifecycle status of an artifact.

2.16.840.1.113883.4.642.1.4

[qualityType](codesystem-quality-type.html)

qualityType: Type for quality report.

2.16.840.1.113883.4.642.1.229

[QuantityComparator](codesystem-quantity-comparator.html) [N](versions.html#std-process "Normative Content")

QuantityComparator: How the Quantity should be understood and represented.

2.16.840.1.113883.4.642.1.60

[QuestionnaireResponseStatus](codesystem-questionnaire-answers-status.html)

QuestionnaireResponseStatus: Lifecycle status of the questionnaire response.

2.16.840.1.113883.4.642.1.448

[QuestionnaireTextCategories](codesystem-questionnaire-display-category.html)

Questionnaire Text Categories: Codes defining the purpose of a Questionnaire item of type 'text'.

2.16.840.1.113883.4.642.1.936

[EnableWhenBehavior](codesystem-questionnaire-enable-behavior.html)

EnableWhenBehavior: Controls how multiple enableWhen values are interpreted - whether all or any must be true.

2.16.840.1.113883.4.642.1.1008

[QuestionnaireItemOperator](codesystem-questionnaire-enable-operator.html)

QuestionnaireItemOperator: The criteria by which a question is enabled.

2.16.840.1.113883.4.642.1.1006

[QuestionnaireItemUIControlCodes](codesystem-questionnaire-item-control.html)

Questionnaire Item UI Control Codes: Starter set of user interface control/display mechanisms that might be used when rendering an item in a questionnaire.

2.16.840.1.113883.4.642.1.932

[AllergyIntoleranceSeverity](codesystem-reaction-event-severity.html)

AllergyIntoleranceSeverity: Clinical assessment of the severity of a reaction event as a whole, potentially considering multiple different manifestations.

2.16.840.1.113883.4.642.1.136

[SNOMEDCTReasonMedicationNotGivenCodes](codesystem-reason-medication-not-given-codes.html)

SNOMED CT Reason Medication Not Given Codes: This value set includes all medication refused, medication not administered, and non-administration of necessary drug or medicine codes from SNOMED CT - provided as an exemplar value set.

2.16.840.1.113883.4.642.1.343

[ReferenceHandlingPolicy](codesystem-reference-handling-policy.html) [N](versions.html#std-process "Normative Content")

ReferenceHandlingPolicy: A set of flags that defines how references are supported.

2.16.840.1.113883.4.642.1.203

[ReferenceVersionRules](codesystem-reference-version-rules.html) [N](versions.html#std-process "Normative Content")

ReferenceVersionRules: Whether a reference needs to be version specific or version independent, or whether either can be used.

2.16.840.1.113883.4.642.1.90

[RelatedArtifactType](codesystem-related-artifact-type.html)

RelatedArtifactType: The type of relationship to the related artifact.

2.16.840.1.113883.4.642.1.100

[CatalogEntryRelationType](codesystem-relation-type.html)

CatalogEntryRelationType: The type of relations between entries.

2.16.840.1.113883.4.642.1.1029

[Beneficiary Relationship Codes](codesystem-relationship.html)

This value set includes the Patient to subscriber relationship codes.

2.16.840.1.113883.4.642.1.36

[ClaimProcessingCodes](codesystem-remittance-outcome.html)

Claim Processing Codes: This value set includes Claim Processing Outcome codes.

2.16.840.1.113883.4.642.1.14

[TestReportActionResult](codesystem-report-action-result-codes.html)

TestReportActionResult: The results of executing an action.

2.16.840.1.113883.4.642.1.721

[TestReportParticipantType](codesystem-report-participant-type.html)

TestReportParticipantType: The type of participant.

2.16.840.1.113883.4.642.1.723

[TestReportResult](codesystem-report-result-codes.html)

TestReportResult: The reported execution result.

2.16.840.1.113883.4.642.1.719

[TestReportStatus](codesystem-report-status-codes.html)

TestReportStatus: The current status of the test report.

2.16.840.1.113883.4.642.1.725

[repositoryType](codesystem-repository-type.html)

repositoryType: Type for access of external URI.

2.16.840.1.113883.4.642.1.231

[RequestIntent](codesystem-request-intent.html)

RequestIntent: Codes indicating the degree of authority/intentionality associated with a request.

2.16.840.1.113883.4.642.1.114

[RequestPriority](codesystem-request-priority.html)

RequestPriority: Identifies the level of importance to be assigned to actioning the request.

2.16.840.1.113883.4.642.1.116

[RequestResourceType](codesystem-request-resource-types.html)

RequestResourceType: A list of all the request resource types defined in this version of the FHIR specification.

2.16.840.1.113883.4.642.1.1059

[RequestStatus](codesystem-request-status.html)

RequestStatus: Codes identifying the lifecycle stage of a request.

2.16.840.1.113883.4.642.1.112

[ResearchElementType](codesystem-research-element-type.html)

ResearchElementType: The possible types of research elements (E.g. Population, Exposure, Outcome).

2.16.840.1.113883.4.642.1.1342

[ResearchStudyStatus](codesystem-research-study-status.html)

ResearchStudyStatus: Codes that convey the current status of the research study.

2.16.840.1.113883.4.642.1.820

[ResearchSubjectStatus](codesystem-research-subject-status.html)

ResearchSubjectStatus: Indicates the progression of a study subject through a study.

2.16.840.1.113883.4.642.1.830

[AggregationMode](codesystem-resource-aggregation-mode.html) [N](versions.html#std-process "Normative Content")

AggregationMode: How resource references can be aggregated.

2.16.840.1.113883.4.642.1.86

[SlicingRules](codesystem-resource-slicing-rules.html) [N](versions.html#std-process "Normative Content")

SlicingRules: How slices are interpreted when evaluating an instance.

2.16.840.1.113883.4.642.1.84

[Canonical Status Codes for FHIR Resources](codesystem-resource-status.html)

The master set of status codes used throughout FHIR. All status codes are mapped to one of these codes.

[ResourceType](codesystem-resource-types.html) [N](versions.html#std-process "Normative Content")

ResourceType: One of the resource types defined as part of this version of FHIR.

[ResourceValidationMode](codesystem-resource-validation-mode.html)

ResourceValidationMode: Codes indicating the type of validation to perform.

2.16.840.1.113883.4.642.1.119

[ResponseType](codesystem-response-code.html)

ResponseType: The kind of response to a message.

2.16.840.1.113883.4.642.1.381

[RestfulCapabilityMode](codesystem-restful-capability-mode.html) [N](versions.html#std-process "Normative Content")

RestfulCapabilityMode: The mode of a RESTful capability statement.

2.16.840.1.113883.4.642.1.177

[FHIR Restful Interactions](codesystem-restful-interaction.html) [N](versions.html#std-process "Normative Content")

The set of interactions defined by the RESTful part of the FHIR specification.

[SearchComparator](codesystem-search-comparator.html)

SearchComparator: What Search Comparator Codes are supported in search.

2.16.840.1.113883.4.642.1.638

[SearchEntryMode](codesystem-search-entry-mode.html) [N](versions.html#std-process "Normative Content")

SearchEntryMode: Why an entry is in the result set - whether it's included as a match or because of an \_include requirement, or to convey information or warning information about the search process.

2.16.840.1.113883.4.642.1.623

[SearchModifierCode](codesystem-search-modifier-code.html)

SearchModifierCode: A supported modifier for a search parameter.

2.16.840.1.113883.4.642.1.640

[SearchParamType](codesystem-search-param-type.html) [N](versions.html#std-process "Normative Content")

SearchParamType: Data types allowed to be used for search parameters.

2.16.840.1.113883.4.642.1.12

[XPathUsageType](codesystem-search-xpath-usage.html)

XPathUsageType: How a search parameter relates to the set of elements returned by evaluating its xpath query.

2.16.840.1.113883.4.642.1.636

[ObservationCategoryCodes](codesystem-secondary-finding.html)

Observation Category Codes: Codes to denote a guideline or policy statement.when a genetic test result is being shared as a secondary finding.

2.16.840.1.113883.4.642.1.1286

[sequenceType](codesystem-sequence-type.html)

sequenceType: Type if a sequence -- DNA, RNA, or amino acid sequence.

2.16.840.1.113883.4.642.1.220

[ICD-10ProcedureCodes](codesystem-icd-10-procedures.html)

ICD-10 Procedure Codes: This value set includes sample ICD-10 Procedure codes.

2.16.840.1.113883.4.642.1.575

[SlotStatus](codesystem-slotstatus.html)

SlotStatus: The free/busy status of the slot.

2.16.840.1.113883.4.642.1.483

[SortDirection](codesystem-sort-direction.html)

SortDirection: The possible sort directions, ascending or descending.

2.16.840.1.113883.4.642.1.980

[SPDXLicense](codesystem-spdx-license.html)

SPDXLicense: The license that applies to an Implementation Guide (using an SPDX license Identifiers, or 'not-open-source'). The binding is required but new SPDX license Identifiers are allowed to be used (https://spdx.org/licenses/).

2.16.840.1.113883.4.642.1.1027

[SpecimenContainedPreference](codesystem-specimen-contained-preference.html)

SpecimenContainedPreference: Degree of preference of a type of conditioned specimen.

2.16.840.1.113883.4.642.1.853

[SpecimenStatus](codesystem-specimen-status.html)

SpecimenStatus: Codes providing the status/availability of a specimen.

2.16.840.1.113883.4.642.1.472

[strandType](codesystem-strand-type.html)

strandType: Type for strand.

2.16.840.1.113883.4.642.1.986

[StructureDefinitionKind](codesystem-structure-definition-kind.html) [N](versions.html#std-process "Normative Content")

StructureDefinitionKind: Defines the type of structure that a definition is describing.

2.16.840.1.113883.4.642.1.669

[SubscriptionChannelType](codesystem-subscription-channel-type.html)

SubscriptionChannelType: The type of method used to execute a subscription.

2.16.840.1.113883.4.642.1.501

[SubscriptionStatus](codesystem-subscription-status.html)

SubscriptionStatus: The status of a subscription.

2.16.840.1.113883.4.642.1.503

[FHIRSubstanceStatus](codesystem-substance-status.html)

FHIRSubstanceStatus: A code to indicate if the substance is actively used.

2.16.840.1.113883.4.642.1.475

[SupplyDeliveryStatus](codesystem-supplydelivery-status.html)

SupplyDeliveryStatus: Status of the supply delivery.

2.16.840.1.113883.4.642.1.701

[SupplyRequestStatus](codesystem-supplyrequest-status.html)

SupplyRequestStatus: Status of the supply request.

2.16.840.1.113883.4.642.1.696

[TaskIntent](codesystem-task-intent.html)

TaskIntent: Distinguishes whether the task is a proposal, plan or full order.

2.16.840.1.113883.4.642.1.1241

[TaskStatus](codesystem-task-status.html)

TaskStatus: The current status of the task.

2.16.840.1.113883.4.642.1.791

[TransactionMode](codesystem-transaction-mode.html)

TransactionMode: A code that indicates how transactions are supported.

2.16.840.1.113883.4.642.1.193

[TriggerType](codesystem-trigger-type.html)

TriggerType: The type of trigger.

2.16.840.1.113883.4.642.1.104

[TypeDerivationRule](codesystem-type-derivation-rule.html) [N](versions.html#std-process "Normative Content")

TypeDerivationRule: How a type relates to its baseDefinition.

2.16.840.1.113883.4.642.1.674

[UDIEntryType](codesystem-udi-entry-type.html)

UDIEntryType: Codes to identify how UDI data was entered.

2.16.840.1.113883.4.642.1.212

[UnknownContentCode](codesystem-unknown-content-code.html)

UnknownContentCode: A code that indicates whether an application accepts unknown elements or extensions when reading resources.

2.16.840.1.113883.4.642.1.197

[EvidenceVariableType](codesystem-variable-type.html)

EvidenceVariableType: The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).

2.16.840.1.113883.4.642.1.1344

[ResourceVersionPolicy](codesystem-versioning-policy.html) [N](versions.html#std-process "Normative Content")

ResourceVersionPolicy: How the system supports versioning for a resource.

2.16.840.1.113883.4.642.1.191

[VisionBase](codesystem-vision-base-codes.html)

VisionBase: A coded concept listing the base codes.

2.16.840.1.113883.4.642.1.663

[VisionEyes](codesystem-vision-eye-codes.html)

VisionEyes: A coded concept listing the eye codes.

2.16.840.1.113883.4.642.1.661

[W3cProvenanceActivityType](codesystem-w3c-provenance-activity-type.html)

This value set includes W3C PROV Data Model Activity concepts, which are treated as codes in this valueset. Some adaptations were made to make these concepts suitable values for the Provenance.activity element. Coded concepts are from PROV-DM and the display names are their counterparts in PROV-N (human readable notation syntax specification).\[code system OID: http://www.w3.org/TR/2013/REC-prov-dm-20130430/ and http://www.w3.org/TR/2013/REC-prov-n-20130430/\]

URI (all prefixed with http://terminology.hl7​.org/CodeSystem/)

Description

OID

[SurfaceCodes](codesystem-surface.html)

Surface Codes: This value set includes a smattering of FDI tooth surface codes.

2.16.840.1.113883.4.642.1.1154

[ActionType](codesystem-action-type.html)

ActionType: The type of action to be performed.

2.16.840.1.113883.4.642.1.1246

[ActivityDefinitionCategory](codesystem-activity-definition-category.html)

ActivityDefinitionCategory: High-level categorization of the type of activity.

2.16.840.1.113883.4.642.1.1243

[AdjudicationValueCodes](codesystem-adjudication.html)

Adjudication Value Codes: This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.

2.16.840.1.113883.4.642.1.1171

[Adjudication Error Codes](codesystem-adjudication-error.html)

This value set includes a smattering of adjudication codes.

2.16.840.1.113883.4.642.1.1053

[AdjudicationReasonCodes](codesystem-adjudication-reason.html)

Adjudication Reason Codes: This value set includes smattering of Adjudication Reason codes.

2.16.840.1.113883.4.642.1.1172

[AdmitSource](codesystem-encounter-admit-source.html)

Admit source: This value set defines a set of codes that can be used to indicate from where the patient came in.

2.16.840.1.113883.4.642.1.1092

[AdverseEventCategory](codesystem-adverse-event-category.html)

AdverseEventCategory: Overall categorization of the event, e.g. product-related or situational.

2.16.840.1.113883.4.642.1.1251

[AdverseEventCausalityAssessment](codesystem-adverse-event-causality-assess.html)

AdverseEventCausalityAssessment: Codes for the assessment of whether the entity caused the event.

2.16.840.1.113883.4.642.1.1254

[AdverseEventCausalityMethod](codesystem-adverse-event-causality-method.html)

AdverseEventCausalityMethod: TODO.

2.16.840.1.113883.4.642.1.1255

[AdverseEventOutcome](codesystem-adverse-event-outcome.html)

AdverseEventOutcome: TODO (and should this be required?).

2.16.840.1.113883.4.642.1.1252

[AdverseEventSeriousness](codesystem-adverse-event-seriousness.html)

AdverseEventSeriousness: Overall seriousness of this event for the patient.

2.16.840.1.113883.4.642.1.1253

[AdverseEventSeverity](codesystem-adverse-event-severity.html)

AdverseEventSeverity: The severity of the adverse event itself, in direct relation to the subject.

2.16.840.1.113883.4.642.1.1256

[AllergyIntoleranceSubstanceExposureRisk](codesystem-allerg-intol-substance-exp-risk.html)

AllergyIntoleranceSubstanceExposureRisk: The risk of an adverse reaction (allergy or intolerance) for this patient upon exposure to the substance (including pharmaceutical products).

2.16.840.1.113883.4.642.1.1275

[AllergyIntoleranceClinicalStatusCodes](codesystem-allergyintolerance-clinical.html)

AllergyIntolerance Clinical Status Codes: Preferred value set for AllergyIntolerance Clinical Status.

2.16.840.1.113883.4.642.1.1373

[AllergyIntoleranceVerificationStatusCodes](codesystem-allergyintolerance-verification.html)

AllergyIntolerance Verification Status Codes: Preferred value set for AllergyIntolerance Verification Status.

2.16.840.1.113883.4.642.1.1371

[BenefitCostApplicability](codesystem-insuranceplan-applicability.html)

Benefit cost applicability: Whether the cost applies to in-network or out-of-network providers.

2.16.840.1.113883.4.642.1.0

[AppointmentCancellationReason](codesystem-appointment-cancellation-reason.html)

Appointment cancellation reason: This example value set defines a set of reasons for the cancellation of an appointment.

2.16.840.1.113883.4.642.1.1382

[AuditEventEntityType](codesystem-audit-entity-type.html)

Audit event entity type: Code for the entity type involved in the audit event.

2.16.840.1.113883.4.642.1.1134

[AuditEventID](codesystem-audit-event-type.html)

Audit Event ID: Event Types for Audit Events - defined by DICOM with some FHIR specific additions.

2.16.840.1.113883.4.642.1.1136

[BasicResourceTypes](codesystem-basic-resource-type.html)

Basic Resource Types: This value set defines codes for resources not yet supported by (or which will never be supported by) FHIR. Many of the codes listed here will eventually be turned into official resources. However, there is no guarantee that any particular resource will be created nor that the scope will be exactly as defined by the codes presented here. Codes in this set will be deprecated if/when formal resources are defined that encompass these concepts.

2.16.840.1.113883.4.642.1.1072

[NetworkTypeCodes](codesystem-benefit-network.html)

Network Type Codes: This value set includes a smattering of Network type codes.

2.16.840.1.113883.4.642.1.1177

[BenefitTermCodes](codesystem-benefit-term.html)

Benefit Term Codes: This value set includes a smattering of Benefit Term codes.

2.16.840.1.113883.4.642.1.1179

[BenefitTypeCodes](codesystem-benefit-type.html)

Benefit Type Codes: This value set includes a smattering of Benefit type codes.

2.16.840.1.113883.4.642.1.1176

[UnitTypeCodes](codesystem-benefit-unit.html)

Unit Type Codes: This value set includes a smattering of Unit type codes.

2.16.840.1.113883.4.642.1.1178

[can-push-updates](codesystem-verificationresult-can-push-updates.html)

Can-push-updates: Ability of the primary source to push updates/alerts

2.16.840.1.113883.4.642.1.897

[CatalogType](codesystem-catalogType.html)

CatalogType: The type of catalog.

2.16.840.1.113883.4.642.1.1288

[CertaintySubcomponentRating](codesystem-certainty-subcomponent-rating.html)

CertaintySubcomponentRating: The quality rating of the subcomponent of a quality of evidence rating.

2.16.840.1.113883.4.642.1.1362

[CertaintySubcomponentType](codesystem-certainty-subcomponent-type.html)

CertaintySubcomponentType: The subcomponent classification of quality of evidence rating systems.

2.16.840.1.113883.4.642.1.1360

[ChargeItemCode](codesystem-chargeitem-billingcodes.html)

ChargeItemCode: Example set of codes that can be used for billing purposes.

2.16.840.1.113883.4.642.1.1257

[ChoiceListOrientation](codesystem-choice-list-orientation.html)

ChoiceListOrientation: Direction in which lists of possible answers should be displayed.

2.16.840.1.113883.4.642.1.1273

[chromosome-human](codesystem-chromosome-human.html)

chromosome-human: Chromosome number for human.

2.16.840.1.113883.4.642.1.1086

[ExceptionCodes](codesystem-claim-exception.html)

Exception Codes: This value set includes sample Exception codes.

2.16.840.1.113883.4.642.1.1162

[ClaimTypeCodes](codesystem-claim-type.html)

Claim Type Codes: This value set includes Claim Type codes.

2.16.840.1.113883.4.642.1.1156

[ClaimCareTeamRoleCodes](codesystem-claim-careteamrole.html)

Claim Care Team Role Codes: This value set includes sample Claim Care Team Role codes.

2.16.840.1.113883.4.642.1.1165

[ClaimInformationCategoryCodes](codesystem-claim-informationcategory.html)

Claim Information Category Codes: This value set includes sample Information Category codes.

2.16.840.1.113883.4.642.1.1163

[AlternativeCodeKind](codesystem-codesystem-altcode-kind.html)

AlternativeCodeKind: Indicates the type of use for which the code is defined.

2.16.840.1.113883.4.642.1.1284

[CommonTags](codesystem-common-tags.html)

Common Tags: Common Tag Codes defined by FHIR project

2.16.840.1.113883.4.642.1.1067

[CommunicationCategory](codesystem-communication-category.html)

CommunicationCategory: Codes for general categories of communications such as alerts, instructions, etc.

2.16.840.1.113883.4.642.1.1076

[CommunicationNotDoneReason](codesystem-communication-not-done-reason.html)

CommunicationNotDoneReason: Codes for the reason why a communication did not happen.

2.16.840.1.113883.4.642.1.1077

[CommunicationTopic](codesystem-communication-topic.html)

CommunicationTopic: Codes describing the purpose or content of the communication.

2.16.840.1.113883.4.642.1.1078

[CompositeMeasureScoring](codesystem-composite-measure-scoring.html)

CompositeMeasureScoring: The composite scoring method of the measure.

2.16.840.1.113883.4.642.1.1235

[AlternativeCodeKind](codesystem-composition-altcode-kind.html)

AlternativeCodeKind: Indicates the type of use for which the code is defined.

2.16.840.1.113883.4.642.1.1406

[ConditionCategoryCodes](codesystem-condition-category.html)

Condition Category Codes: Preferred value set for Condition Categories.

2.16.840.1.113883.4.642.1.1073

[ConditionClinicalStatusCodes](codesystem-condition-clinical.html)

Condition Clinical Status Codes: Preferred value set for Condition Clinical Status.

2.16.840.1.113883.4.642.1.1074

[ConditionState](codesystem-condition-state.html)

ConditionState: Enumeration indicating whether the condition is currently active, inactive, or has been resolved.

2.16.840.1.113883.4.642.1.1287

[ConditionVerificationStatus](codesystem-condition-ver-status.html)

ConditionVerificationStatus: The verification status to support or decline the clinical status of the condition or diagnosis.

2.16.840.1.113883.4.642.1.1075

[ConformanceExpectation](codesystem-conformance-expectation.html)

ConformanceExpectation: Indicates the degree of adherence to a specified behavior or capability expected for a system to be deemed conformant with a specification.

2.16.840.1.113883.4.642.1.1271

[ConsentActionCodes](codesystem-consent-action.html)

Consent Action Codes: This value set includes sample Consent Action codes.

2.16.840.1.113883.4.642.1.1227

[ConsentCategoryCodes](codesystem-consent-category.html)

Consent Category Codes: This value set includes sample Consent Directive Type codes, including several consent directive related LOINC codes; HL7 VALUE SET: ActConsentType(2.16.840.1.113883.1.11.19897); examples of US realm consent directive legal descriptions and references to online and/or downloadable forms such as the SSA-827 Authorization to Disclose Information to the Social Security Administration; and other anticipated consent directives related to participation in a clinical trial, medical procedures, reproductive procedures; health care directive (Living Will); advance directive, do not resuscitate (DNR); Physician Orders for Life-Sustaining Treatment (POLST)

2.16.840.1.113883.4.642.1.1226

[ConsentPolicyRuleCodes](codesystem-consent-policy.html)

Consent PolicyRule Codes: This value set includes sample Regulatory consent policy types from the US and other regions.

2.16.840.1.113883.4.642.1.1229

[ConsentScopeCodes](codesystem-consent-scope.html)

Consent Scope Codes: This value set includes the four Consent scope codes.

2.16.840.1.113883.4.642.1.1228

[ContactEntityType](codesystem-contactentity-type.html)

Contact entity type: This example value set defines a set of codes that can be used to indicate the purpose for which you would contact a contact party.

2.16.840.1.113883.4.642.1.1129

[ContainerCap](codesystem-container-cap.html)

ContainerCap: Color of the container cap.

2.16.840.1.113883.4.642.1.1258

[ContractContentDerivationCodes](codesystem-contract-content-derivative.html)

Contract Content Derivation Codes: This is an example set of Content Derivative type codes, which represent the minimal content derived from the basal information source at a specific stage in its lifecycle, which is sufficient to manage that source information, for example, in a repository, registry, processes and workflows, for making access control decisions, and providing query responses.

2.16.840.1.113883.4.642.1.1204

[ContractDataMeaning](codesystem-contract-data-meaning.html)

ContractDataMeaning: How a resource reference is interpreted when evaluating contract offers.

2.16.840.1.113883.4.642.1.1205

[ContractTypeCodes](codesystem-contract-type.html)

Contract Type Codes: This value set includes sample Contract Type codes.

2.16.840.1.113883.4.642.1.1330

[ContractActionCodes](codesystem-contract-action.html)

Contract Action Codes: This value set includes sample Contract Action codes.

2.16.840.1.113883.4.642.1.1202

[ContractActorRoleCodes](codesystem-contract-actorrole.html)

Contract Actor Role Codes: This value set includes sample Contract Actor Role codes.

2.16.840.1.113883.4.642.1.1203

[ContractSignerTypeCodes](codesystem-contract-signer-type.html)

Contract Signer Type Codes: This value set includes sample Contract Signer Type codes.

2.16.840.1.113883.4.642.1.1201

[ContractSubtypeCodes](codesystem-contract-subtype.html)

Contract Subtype Codes: This value set includes sample Contract Subtype codes.

2.16.840.1.113883.4.642.1.1198

[ContractTermSubtypeCodes](codesystem-contract-term-subtype.html)

Contract Term Subtype Codes: This value set includes sample Contract Term SubType codes.

2.16.840.1.113883.4.642.1.1200

[ContractTermTypeCodes](codesystem-contract-term-type.html)

Contract Term Type Codes: This value set includes sample Contract Term Type codes.

2.16.840.1.113883.4.642.1.1199

[CopyNumberEvent](codesystem-copy-number-event.html)

CopyNumberEvent: Copy Number Event.

2.16.840.1.113883.4.642.1.1087

[CoverageClassCodes](codesystem-coverage-class.html)

Coverage Class Codes: This value set includes Coverage Class codes.

2.16.840.1.113883.4.642.1.1147

[CoverageCopayTypeCodes](codesystem-coverage-copay-type.html)

Coverage Copay Type Codes: This value set includes sample Coverage Copayment Type codes.

2.16.840.1.113883.4.642.1.1149

[CoverageSelfPayCodes](codesystem-coverage-selfpay.html)

Coverage SelfPay Codes: This value set includes Coverage SelfPay codes.

2.16.840.1.113883.4.642.1.1148

[CoverageEligibilityResponseAuthSupportCodes](codesystem-coverageeligibilityresponse-ex-auth-support.html)

CoverageEligibilityResponse Auth Support Codes: This value set includes CoverageEligibilityResponse Auth Support codes.

2.16.840.1.113883.4.642.1.1394

[DataAbsentReason](codesystem-data-absent-reason.html) [N](versions.html#std-process "Normative Content")

DataAbsentReason: Used to specify why the normally expected content of the data element is missing.

2.16.840.1.113883.4.642.1.1048

[DefinitionStatus](codesystem-definition-status.html)

DefinitionStatus: Codes identifying the lifecycle stage of a definition.

2.16.840.1.113883.4.642.1.1070

[DefinitionTopic](codesystem-definition-topic.html)

DefinitionTopic: High-level categorization of the definition, used for searching, sorting, and filtering.

2.16.840.1.113883.4.642.1.1244

[DefinitionUseCodes](codesystem-definition-use.html) [N](versions.html#std-process "Normative Content")

Structure Definition Use Codes / Keywords: Structure Definition Use Codes / Keywords

2.16.840.1.113883.4.642.1.1191

[FHIRDeviceStatusReason](codesystem-device-status-reason.html)

FHIRDeviceStatusReason: The availability status reason of the device.

2.16.840.1.113883.4.642.1.1082

[DiagnosisRole](codesystem-diagnosis-role.html)

This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.

2.16.840.1.113883.4.642.1.1054

[DICOM Audit Message Record Lifecycle Events](codesystem-dicom-audit-lifecycle.html)

Attached is vocabulary for the record lifecycle events, as per DICOM Audit Message,

[Diet](codesystem-encounter-diet.html)

Diet: This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.

2.16.840.1.113883.4.642.1.1091

[DischargeDisposition](codesystem-encounter-discharge-disposition.html)

Discharge disposition: This value set defines a set of codes that can be used to where the patient left the hospital.

2.16.840.1.113883.4.642.1.1093

[DoseAndRateType](codesystem-dose-rate-type.html)

DoseAndRateType: The kind of dose or rate specified.

2.16.840.1.113883.4.642.1.1069

[EffectEstimateType](codesystem-effect-estimate-type.html)

EffectEstimateType: Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).

2.16.840.1.113883.4.642.1.1356

[SpecialArrangements](codesystem-encounter-special-arrangements.html)

Special arrangements: This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.

2.16.840.1.113883.4.642.1.1090

[EncounterType](codesystem-encounter-type.html)

Encounter type: This example value set defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.

2.16.840.1.113883.4.642.1.1088

[EndpointConnectionType](codesystem-endpoint-connection-type.html)

Endpoint Connection Type: This is an example value set defined by the FHIR project, that could be used to represent possible connection type profile values.

2.16.840.1.113883.4.642.1.1140

[EndpointPayloadType](codesystem-endpoint-payload-type.html)

Endpoint Payload Type: This is an example value set defined by the FHIR project, that could be used to represent possible payload document types.

2.16.840.1.113883.4.642.1.1139

[EnteralFormulaAdditiveTypeCode](codesystem-entformula-additive.html)

Enteral Formula Additive Type Code: EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.

2.16.840.1.113883.4.642.1.1123

[EpisodeOfCareType](codesystem-episodeofcare-type.html)

Episode of care type: This example value set defines a set of codes that can be used to express the usage type of an EpisodeOfCare record.

2.16.840.1.113883.4.642.1.1189

[QualityOfEvidenceRating](codesystem-evidence-quality.html)

QualityOfEvidenceRating: A rating system that describes the quality of evidence such as the GRADE, DynaMed, or Oxford CEBM systems.

2.16.840.1.113883.4.642.1.1267

[EvidenceVariantState](codesystem-evidence-variant-state.html)

EvidenceVariantState: Used for results by exposure in variant states such as low-risk, medium-risk and high-risk states.

2.16.840.1.113883.4.642.1.1354

[USCLSCodes](codesystem-service-uscls.html)

USCLS Codes: This value set includes a smattering of USCLS codes.

2.16.840.1.113883.4.642.1.1153

[BenefitCategoryCodes](codesystem-ex-benefitcategory.html)

Benefit Category Codes: This value set includes examples of Benefit Category codes.

2.16.840.1.113883.4.642.1.1175

[ExampleClaimSubTypeCodes](codesystem-claim-subtype.html)

Example Claim SubType Codes: This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.

2.16.840.1.113883.4.642.1.1158

[ExampleCoverageFinancialExceptionCodes](codesystem-coverage-financial-exception.html)

Example Coverage Financial Exception Codes: This value set includes Example Coverage Financial Exception Codes.

2.16.840.1.113883.4.642.1.1329

[ExampleDiagnosisOnAdmissionCodes](codesystem-ex-diagnosis-on-admission.html)

Example Diagnosis on Admission Codes: This value set includes example Diagnosis on Admission codes.

2.16.840.1.113883.4.642.1.1170

[ExampleDiagnosisRelatedGroupCodes](codesystem-ex-diagnosisrelatedgroup.html)

Example Diagnosis Related Group Codes: This value set includes example Diagnosis Related Group codes.

2.16.840.1.113883.4.642.1.1166

[ExampleDiagnosisTypeCodes](codesystem-ex-diagnosistype.html)

Example Diagnosis Type Codes: This value set includes example Diagnosis Type codes.

2.16.840.1.113883.4.642.1.1167

[ClaimPayeeResourceType](codesystem-ex-payee-resource-type.html)

ClaimPayeeResourceType: The type of Claim payee Resource.

2.16.840.1.113883.4.642.1.1164

[ExamplePaymentTypeCodes](codesystem-ex-paymenttype.html)

Example Payment Type Codes: This value set includes example Payment Type codes.

2.16.840.1.113883.4.642.1.1181

[ExampleProcedureTypeCodes](codesystem-ex-procedure-type.html)

Example Procedure Type Codes: This value set includes example Procedure Type codes.

2.16.840.1.113883.4.642.1.1388

[ExampleProgramReasonCodes](codesystem-ex-program-code.html)

Example Program Reason Codes: This value set includes sample Program Reason Span codes.

2.16.840.1.113883.4.642.1.1161

[ExampleProviderQualificationCodes](codesystem-provider-qualification.html)

Example Provider Qualification Codes: This value set includes sample Provider Qualification codes.

2.16.840.1.113883.4.642.1.1160

[ExampleRelatedClaimRelationshipCodes](codesystem-related-claim-relationship.html)

Example Related Claim Relationship Codes: This value set includes sample Related Claim Relationship codes.

2.16.840.1.113883.4.642.1.1159

[ExampleRevenueCenterCodes](codesystem-ex-revenue-center.html)

Example Revenue Center Codes: This value set includes sample Revenue Center codes.

2.16.840.1.113883.4.642.1.1168

[ExampleServicePlaceCodes](codesystem-service-place.html)

Example Service Place Codes: This value set includes a smattering of Service Place codes.

2.16.840.1.113883.4.642.1.1157

[OralSiteCodes](codesystem-tooth.html)

Oral Site Codes: This value set includes a smattering of FDI oral site codes.

2.16.840.1.113883.4.642.1.1152

[ExampleVisionPrescriptionProductCodes](codesystem-vision-product.html)

Example Vision Prescription Product Codes: This value set includes a smattering of Prescription Product codes.

2.16.840.1.113883.4.642.1.1188

[ExpansionParameterSource](codesystem-expansion-parameter-source.html)

ExpansionParameterSource: Declares what the source of a parameter is.

2.16.840.1.113883.4.642.1.1279

[ExpansionProcessingRule](codesystem-expansion-processing-rule.html)

ExpansionProcessingRule: Defines how concepts are processed into the expansion when it's for UI presentation.

2.16.840.1.113883.4.642.1.1281

[SecurityRoleType](codesystem-extra-security-role-type.html)

This CodeSystem contains Additional FHIR-defined Security Role types not defined elsewhere

[failure-action](codesystem-verificationresult-failure-action.html)

Failure-action: The result if validation fails

2.16.840.1.113883.4.642.1.891

[FinancialTaskCodes](codesystem-financial-taskcode.html)

Financial Task Codes: This value set includes Financial Task codes.

2.16.840.1.113883.4.642.1.1390

[FinancialTaskInputTypeCodes](codesystem-financial-taskinputtype.html)

Financial Task Input Type Codes: This value set includes Financial Task Input Type codes.

2.16.840.1.113883.4.642.1.1392

[FlagCategory](codesystem-flag-category.html)

Flag Category: Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)

2.16.840.1.113883.4.642.1.1071

[Form Codes](codesystem-forms.html)

This value set includes a sample set of Forms codes.

2.16.840.1.113883.4.642.1.1052

[Funds Reservation Codes](codesystem-fundsreserve.html)

This value set includes sample funds reservation type codes.

2.16.840.1.113883.4.642.1.1051

[GoalAcceptanceStatus](codesystem-goal-acceptance-status.html)

GoalAcceptanceStatus: Codes indicating whether the goal has been accepted by a stakeholder.

2.16.840.1.113883.4.642.1.1270

[GoalAchievementStatus](codesystem-goal-achievement.html)

Goal achievement status: Describes the progression, or lack thereof, towards the goal against the target.

2.16.840.1.113883.4.642.1.1375

[GoalCategory](codesystem-goal-category.html)

Goal category: Example codes for grouping goals to use for filtering or presentation.

2.16.840.1.113883.4.642.1.1097

[GoalPriority](codesystem-goal-priority.html)

Goal priority: Indicates the level of importance associated with reaching or sustaining a goal.

2.16.840.1.113883.4.642.1.1096

[GoalRelationshipType](codesystem-goal-relationship-type.html)

GoalRelationshipType: Types of relationships between two goals.

2.16.840.1.113883.4.642.1.1269

[HandlingConditionSet](codesystem-handling-condition.html)

HandlingConditionSet: Set of handling instructions prior testing of the specimen.

2.16.840.1.113883.4.642.1.1259

[FamilyHistoryAbsentReason](codesystem-history-absent-reason.html)

FamilyHistoryAbsentReason: Codes describing the reason why a family member's history is not available.

2.16.840.1.113883.4.642.1.1094

[HL7Workgroup](codesystem-hl7-work-group.html)

HL7Workgroup: An HL7 administrative unit that owns artifacts in the FHIR specification.

2.16.840.1.113883.4.642.1.1277

[ImmunizationEvaluationDoseStatusCodes](codesystem-immunization-evaluation-dose-status.html)

Immunization Evaluation Dose Status codes: The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the validity of a dose relative to a particular recommended schedule. This value set is provided as a suggestive example.

2.16.840.1.113883.4.642.1.1102

[ImmunizationEvaluationDoseStatusReasonCodes](codesystem-immunization-evaluation-dose-status-reason.html)

Immunization Evaluation Dose Status Reason codes: The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why an administered dose has been assigned a particular status. Often, this reason describes why a dose is considered invalid. This value set is provided as a suggestive example.

2.16.840.1.113883.4.642.1.1103

[ImmunizationFundingSource](codesystem-immunization-funding-source.html)

Immunization Funding Source: The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the vaccine administered. This value set is provided as a suggestive example.

2.16.840.1.113883.4.642.1.1100

[ImmunizationOriginCodes](codesystem-immunization-origin.html)

Immunization Origin Codes: The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.

2.16.840.1.113883.4.642.1.1101

[ImmunizationProgramEligibility](codesystem-immunization-program-eligibility.html)

Immunization Program Eligibility: The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the patient's eligibility for a vaccination program. This value set is provided as a suggestive example.

2.16.840.1.113883.4.642.1.1099

[ImmunizationRecommendationStatusCodes](codesystem-immunization-recommendation-status.html)

Immunization Recommendation Status Codes: The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.

2.16.840.1.113883.4.642.1.1104

[ImmunizationSubpotentReason](codesystem-immunization-subpotent-reason.html)

Immunization Subpotent Reason: The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose is considered to be subpotent. This value set is provided as a suggestive example.

2.16.840.1.113883.4.642.1.1098

[Implant Status](codesystem-implantStatus.html)

Implant Status: A set codes that define the functional status of an implanted device.

2.16.840.1.113883.4.642.1.1283

[InsurancePlanType](codesystem-insuranceplan-type.html)

Insurance plan type: This example value set defines a set of codes that can be used to indicate a type of insurance plan.

2.16.840.1.113883.4.642.1.1261

[ISO 21089-2017 Health Record Lifecycle Events](codesystem-iso-21089-lifecycle.html)

Attached is vocabulary for the 27 record lifecycle events, as per ISO TS 21089-2017, Health Informatics - Trusted End-to-End Information Flows, Section 3, Terms and Definitions (2017, at ISO Central Secretariat, passed ballot and ready for publication). This will also be included in the FHIR EHR Record Lifecycle Event Implementation Guide, balloted and (to be) published with FHIR STU-3.

[LibraryType](codesystem-library-type.html)

LibraryType: The type of knowledge asset this library contains.

2.16.840.1.113883.4.642.1.1230

[ListEmptyReasons](codesystem-list-empty-reason.html)

List Empty Reasons: General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).

2.16.840.1.113883.4.642.1.1106

[ExampleUseCodesForList](codesystem-list-example-codes.html)

Example Use Codes for List: Example use codes for the List resource - typical kinds of use.

2.16.840.1.113883.4.642.1.1105

[ListOrderCodes](codesystem-list-order.html)

List Order Codes: Base values for the order of the items in a list resource.

2.16.840.1.113883.4.642.1.1107

[LocationType](codesystem-location-physical-type.html)

Location type: This example value set defines a set of codes that can be used to indicate the physical form of the Location.

2.16.840.1.113883.4.642.1.1108

[MatchGrade](codesystem-match-grade.html)

MatchGrade: A Master Patient Index (MPI) assessment of whether a candidate patient record is a match or not.

2.16.840.1.113883.4.642.1.1289

[MeasureDataUsage](codesystem-measure-data-usage.html)

MeasureDataUsage: The intended usage for supplemental data elements in the measure.

2.16.840.1.113883.4.642.1.1234

[MeasureImprovementNotation](codesystem-measure-improvement-notation.html)

MeasureImprovementNotation: Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.

2.16.840.1.113883.4.642.1.1395

[MeasurePopulationType](codesystem-measure-population.html)

MeasurePopulationType: The type of population.

2.16.840.1.113883.4.642.1.1231

[MeasureScoring](codesystem-measure-scoring.html)

MeasureScoring: The scoring type of the measure.

2.16.840.1.113883.4.642.1.1232

[MeasureType](codesystem-measure-type.html)

MeasureType: The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).

2.16.840.1.113883.4.642.1.1233

[MedicationAdministration Performer Function Codes](codesystem-med-admin-perform-function.html)

Medication administration performer function codes: MedicationAdministration Performer Function Codes

2.16.840.1.113883.4.642.1.1112

[MediaModality](codesystem-media-modality.html)

Media Modality: Detailed information about the type of the image - its kind, purpose, or the kind of equipment used to generate it.

2.16.840.1.113883.4.642.1.1109

[MediaType](codesystem-media-type.html)

Media Type: Codes for high level media categories.

2.16.840.1.113883.4.642.1.326

[MedicationAdministration Category Codes](codesystem-medication-admin-category.html)

Medication administration category codes: MedicationAdministration Category Codes

2.16.840.1.113883.4.642.1.1111

[MedicationAdministration Status Codes](codesystem-medication-admin-status.html)

Medication administration status codes: MedicationAdministration Status Codes

2.16.840.1.113883.4.642.1.1311

[Medication Status Codes](codesystem-medication-statement-category.html)

Medication status codes: Medication Status Codes

2.16.840.1.113883.4.642.1.1120

[MedicationDispense Performer Function Codes](codesystem-medicationdispense-performer-function.html)

Medication dispense performer function codes: MedicationDispense Performer Function Codes

2.16.840.1.113883.4.642.1.1319

[MedicationDispense Status Codes](codesystem-medicationdispense-status.html)

Medication dispense status codes: MedicationDispense Status Codes

2.16.840.1.113883.4.642.1.1313

[medicationKnowledge Characteristic Codes](codesystem-medicationknowledge-characteristic.html)

Medication knowledge characteristic codes: MedicationKnowledge Characteristic Codes

2.16.840.1.113883.4.642.1.1338

[medicationKnowledge Package Type Codes](codesystem-medicationknowledge-package-type.html)

Medication knowledge package type codes: MedicationKnowledge Package Type Codes

2.16.840.1.113883.4.642.1.1340

[MedicationKnowledge Status Codes](codesystem-medicationknowledge-status.html)

Medication knowledge status codes: MedicationKnowledge Status Codes

2.16.840.1.113883.4.642.1.1336

[medicationRequest Category Codes](codesystem-medicationrequest-category.html)

Medication request category codes: MedicationRequest Category Codes

2.16.840.1.113883.4.642.1.1323

[medicationRequest Course of Therapy Codes](codesystem-medicationrequest-course-of-therapy.html)

Medication request course of therapy codes: MedicationRequest Course of Therapy Codes

2.16.840.1.113883.4.642.1.1327

[medicationRequest Status Reason Codes](codesystem-medicationrequest-status-reason.html)

Medication request status reason codes: MedicationRequest Status Reason Codes

2.16.840.1.113883.4.642.1.1325

[ExampleMessageReasonCodes](codesystem-message-reason-encounter.html)

Example Message Reason Codes: Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.

2.16.840.1.113883.4.642.1.1122

[MessageTransport](codesystem-message-transport.html) [N](versions.html#std-process "Normative Content")

MessageTransport: The protocol used for message transport.

2.16.840.1.113883.4.642.1.1080

[MissingToothReasonCodes](codesystem-missing-tooth-reason.html)

Missing Tooth Reason Codes: This value set includes sample Missing Tooth Reason codes.

2.16.840.1.113883.4.642.1.1150

[ModifierTypeCodes](codesystem-claim-modifiers.html)

Modifier type Codes: This value set includes sample Modifier type codes.

2.16.840.1.113883.4.642.1.1151

[HumanNameAssemblyOrder](codesystem-name-assembly-order.html)

HumanNameAssemblyOrder: A code that represents the preferred display order of the components of a human name.

2.16.840.1.113883.4.642.1.1266

[need](codesystem-verificationresult-need.html)

Need: The frequency with which the target must be validated

2.16.840.1.113883.4.642.1.883

[AuditEventEntityRole](codesystem-object-role.html)

AuditEventEntityRole: Code representing the role the entity played in the audit event.

2.16.840.1.113883.4.642.1.1135

[ObservationCategoryCodes](codesystem-observation-category.html)

Observation Category Codes: Observation Category codes.

2.16.840.1.113883.4.642.1.1125

[StatisticsCode](codesystem-observation-statistics.html)

StatisticsCode: The statistical operation parameter -"statistic" codes.

2.16.840.1.113883.4.642.1.1126

[OperationOutcomeCodes](codesystem-operation-outcome.html)

Operation Outcome Codes: Operation Outcome codes used by FHIR test servers (see Implementation file translations.xml)

2.16.840.1.113883.4.642.1.1127

[OrganizationType](codesystem-organization-type.html)

Organization type: This example value set defines a set of codes that can be used to indicate a type of organization.

2.16.840.1.113883.4.642.1.1128

[DeviceDefinitionParameterGroup](codesystem-parameter-group.html)

DeviceDefinitionParameterGroup: Codes identifying groupings of parameters; e.g. Cardiovascular.

2.16.840.1.113883.4.642.1.1264

[ParticipantType](codesystem-encounter-participant-type.html)

Participant type: This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.

2.16.840.1.113883.4.642.1.1089

[Claim Payee Type Codes](codesystem-payeetype.html)

This value set includes sample Payee Type codes.

2.16.840.1.113883.4.642.1.1050

[PaymentAdjustmentReasonCodes](codesystem-payment-adjustment-reason.html)

Payment Adjustment Reason Codes: This value set includes smattering of Payment Adjustment Reason codes.

2.16.840.1.113883.4.642.1.1173

[PaymentTypeCodes](codesystem-payment-type.html)

Payment Type Codes: This value set includes sample Payment Type codes.

2.16.840.1.113883.4.642.1.1186

[PaymentStatusCodes](codesystem-payment-status.html)

Payment Status Codes: This value set includes a sample set of Payment Status codes.

2.16.840.1.113883.4.642.1.1187

[PlanDefinitionType](codesystem-plan-definition-type.html)

PlanDefinitionType: The type of PlanDefinition.

2.16.840.1.113883.4.642.1.1245

[PractitionerRole](codesystem-practitioner-role.html)

Practitioner role: This example value set defines a set of codes that can be used to indicate the role of a Practitioner.

2.16.840.1.113883.4.642.1.1132

[PrecisionEstimateType](codesystem-precision-estimate-type.html)

PrecisionEstimateType: Method of reporting variability of estimates, such as confidence intervals, interquartile range or standard deviation.

2.16.840.1.113883.4.642.1.1358

[primary-source-type](codesystem-verificationresult-primary-source-type.html)

Primary-source-type: Type of the validation primary source

2.16.840.1.113883.4.642.1.893

[ProcessPriorityCodes](codesystem-process-priority.html)

Process Priority Codes: This value set includes the financial processing priority codes.

2.16.840.1.113883.4.642.1.1155

[Program](codesystem-program.html)

Program: This value set defines an example set of codes that could be can be used to classify groupings of service-types/specialties.

2.16.840.1.113883.4.642.1.1384

[ProvenanceParticipantType](codesystem-provenance-agent-type.html)

Provenance participant type: The type of participation a provenance participant.

2.16.840.1.113883.4.642.1.1131

[push-type-available](codesystem-verificationresult-push-type-available.html)

Push-type-available: Type of alerts/updates the primary source can send

2.16.840.1.113883.4.642.1.899

[MaxOccurs](codesystem-question-max-occurs.html)

MaxOccurs: Flags an element as having unlimited repetitions.

2.16.840.1.113883.4.642.1.1272

[QuestionnaireItemUsageMode](codesystem-questionnaire-usage-mode.html)

QuestionnaireItemUsageMode: Identifies the modes of usage of a questionnaire that should enable a particular questionnaire item.

2.16.840.1.113883.4.642.1.1274

[AllergyIntoleranceCertainty](codesystem-reaction-event-certainty.html)

AllergyIntoleranceCertainty: Statement about the degree of clinical certainty that a specific substance was the cause of the manifestation in a reaction event.

2.16.840.1.113883.4.642.1.1276

[ReasonMedicationGivenCodes](codesystem-reason-medication-given-codes.html)

Reason Medication Given Codes: This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.

2.16.840.1.113883.4.642.1.1110

[StrengthOfRecommendationRating](codesystem-recommendation-strength.html)

StrengthOfRecommendationRating: A rating system that describes the strength of the recommendation, such as the GRADE, DynaMed, or HGPS systems.

2.16.840.1.113883.4.642.1.1268

[ObservationReferenceRangeMeaningCodes](codesystem-referencerange-meaning.html)

Observation Reference Range Meaning Codes: This value set defines a set of codes that can be used to indicate the meaning/use of a reference range for a particular target population.

2.16.840.1.113883.4.642.1.1124

[RejectionCriterion](codesystem-rejection-criteria.html)

RejectionCriterion: Criterion for rejection of the specimen by laboratory.

2.16.840.1.113883.4.642.1.1260

[ResearchStudyObjectiveType](codesystem-research-study-objective-type.html)

ResearchStudyObjectiveType: Codes for the kind of study objective.

2.16.840.1.113883.4.642.1.1248

[ResearchStudyPhase](codesystem-research-study-phase.html)

ResearchStudyPhase: Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.

2.16.840.1.113883.4.642.1.1247

[ResearchStudyPrimaryPurposeType](codesystem-research-study-prim-purp-type.html)

ResearchStudyPrimaryPurposeType: Codes for the main intent of the study.

2.16.840.1.113883.4.642.1.1250

[ResearchStudyReasonStopped](codesystem-research-study-reason-stopped.html)

ResearchStudyReasonStopped: Codes for why the study ended prematurely.

2.16.840.1.113883.4.642.1.1249

[ResourceSecurityCategory](codesystem-resource-security-category.html)

ResourceSecurityCategory: Provides general guidance around the kind of access Control to Read, Search, Create, Update, or Delete a resource.

2.16.840.1.113883.4.642.1.1404

[PayeeResourceType](codesystem-resource-type-link.html)

PayeeResourceType: The type of payee Resource.

2.16.840.1.113883.4.642.1.1180

[RestfulSecurityService](codesystem-restful-security-service.html) [N](versions.html#std-process "Normative Content")

RestfulSecurityService: Types of security services used with FHIR.

2.16.840.1.113883.4.642.1.1079

[RiskEstimateType](codesystem-risk-estimate-type.html)

RiskEstimateType: Whether the risk estimate is dichotomous, continuous or qualitative and the specific type of risk estimate (eg proportion or median).

2.16.840.1.113883.4.642.1.1364

[RiskProbability](codesystem-risk-probability.html)

Risk Probability: Codes representing the likelihood of a particular outcome in a risk assessment.

2.16.840.1.113883.4.642.1.1133

[AuditEventSourceType](codesystem-audit-source-type.html)

Audit Event Source Type: The type of process where the audit event originated from.

2.16.840.1.113883.4.642.1.1137

[ServiceCategory](codesystem-service-category.html)

Service category: This value set defines an example set of codes that can be used to classify groupings of service-types/specialties.

2.16.840.1.113883.4.642.1.1144

[ServiceProvisionConditions](codesystem-service-provision-conditions.html)

ServiceProvisionConditions: The code(s) that detail the conditions under which the healthcare service is available/offered.

2.16.840.1.113883.4.642.1.1143

[ReferralMethod](codesystem-service-referral-method.html)

ReferralMethod: The methods of referral can be used when referring to a specific HealthCareService resource.

2.16.840.1.113883.4.642.1.1142

[ServiceType](codesystem-service-type.html)

Service type: This value set defines an example set of codes of service-types.

2.16.840.1.113883.4.642.1.1145

[SmartCapabilities](codesystem-smart-capabilities.html)

SmartCapabilities: Codes that define what the server is capable of.

2.16.840.1.113883.4.642.1.1265

[SpecialValues](codesystem-special-values.html)

SpecialValues: A set of generally useful codes defined so they can be included in value sets.

2.16.840.1.113883.4.642.1.1049

[StandardsStatus](codesystem-standards-status.html)

StandardsStatus: HL7 Ballot/Standards status of artifact.

2.16.840.1.113883.4.642.1.1366

[StudyType](codesystem-study-type.html)

StudyType: Types of research studies (types of research methods).

2.16.840.1.113883.4.642.1.1350

[SubscriberRelationshipCodes](codesystem-subscriber-relationship.html)

SubscriberPolicyholder Relationship Codes: This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).

2.16.840.1.113883.4.642.1.1386

[SubscriptionTag](codesystem-subscription-tag.html)

SubscriptionTag: Tags to put on a resource after subscriptions have been sent.

2.16.840.1.113883.4.642.1.1141

[SubstanceCategoryCodes](codesystem-substance-category.html)

Substance Category Codes: Substance category codes

2.16.840.1.113883.4.642.1.1138

[SupplyItemType](codesystem-supplydelivery-type.html)

Supply Item Type: This value sets refers to a specific supply item.

2.16.840.1.113883.4.642.1.1194

[SupplyType](codesystem-supplyrequest-kind.html)

Supply Type: This value sets refers to a Category of supply.

2.16.840.1.113883.4.642.1.1192

[SupplyRequestReason](codesystem-supplyrequest-reason.html)

SupplyRequestReason: The reason why the supply item was requested.

2.16.840.1.113883.4.642.1.1193

[SynthesisType](codesystem-synthesis-type.html)

SynthesisType: Types of combining results from a body of evidence (eg. summary data meta-analysis).

2.16.840.1.113883.4.642.1.1348

[TestScriptOperationCode](codesystem-testscript-operation-codes.html)

Test script operation code: This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.

2.16.840.1.113883.4.642.1.1195

[TestScriptProfileDestinationType](codesystem-testscript-profile-destination-types.html)

Test script profile destination type: This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the destination within a TestScript.

2.16.840.1.113883.4.642.1.1197

[TestScriptProfileOriginType](codesystem-testscript-profile-origin-types.html)

Test script profile origin type: This value set defines a set of codes that are used to indicate the profile type of a test system when acting as the origin within a TestScript.

2.16.840.1.113883.4.642.1.1196

[UsageContextType](codesystem-usage-context-type.html)

UsageContextType: A code that specifies a type of context being specified by a usage context.

2.16.840.1.113883.4.642.1.1068

[validation-process](codesystem-verificationresult-validation-process.html)

Validation-process: The primary process by which the target is validated

2.16.840.1.113883.4.642.1.889

[validation-status](codesystem-verificationresult-validation-status.html)

Validation-status: Status of the validation of the target against the primary source

2.16.840.1.113883.4.642.1.895

[validation-type](codesystem-verificationresult-validation-type.html)

Validation-type: What the target is validated against

2.16.840.1.113883.4.642.1.887

[sequenceStatus](codesystem-variant-state.html)

sequenceStatus: Codes providing the status of the variant test result.

2.16.840.1.113883.4.642.1.1085

[verificationresult-communication-method](codesystem-verificationresult-communication-method.html)

VerificationResult Communication Method: Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.

2.16.840.1.113883.4.642.1.1402

**Name (URI = http://terminology.hl7.org/CodeSystem/v3-...)**

**Description**

**OID**

[AcknowledgementCondition](v3/AcknowledgementCondition/cs.html)

The codes identify the conditions under which accept acknowledgements are required to be returned in response to this message. Note that accept acknowledgement address two different issues at the same time: reliable transport as well as syntactical correctness

2.16.840.1.113883.5.1050

[AcknowledgementDetailCode](v3/AcknowledgementDetailCode/cs.html)

OpenIssue: Missing description.

2.16.840.1.113883.5.1100

[AcknowledgementDetailType](v3/AcknowledgementDetailType/cs.html)

A code identifying the specific message to be provided. Discussion: A textual value may be specified as the print name, or for non-coded messages, as the original text. Examples: 'Required attribute xxx is missing', 'System will be unavailable March 19 from 0100 to 0300'

2.16.840.1.113883.5.1082

[AcknowledgementType](v3/AcknowledgementType/cs.html)

This attribute contains an acknowledgement code as described in the HL7 message processing rules. OpenIssue: Description was copied from attribute and needs to be improved to be appropriate for a code system.

2.16.840.1.113883.5.18

[ActClass](v3/ActClass/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.6

[ActCode](v3/ActCode/cs.html)

A code specifying the particular kind of Act that the Act-instance represents within its class. Constraints: The kind of Act (e.g. physical examination, serum potassium, inpatient encounter, charge financial transaction, etc.) is specified with a code from one of several, typically external, coding systems. The coding system will depend on the class of Act, such as LOINC for observations, etc. Conceptually, the Act.code must be a specialization of the Act.classCode. This is why the structure of ActClass domain should be reflected in the superstructure of the ActCode domain and then individual codes or externally referenced vocabularies subordinated under these domains that reflect the ActClass structure. Act.classCode and Act.code are not modifiers of each other but the Act.code concept should really imply the Act.classCode concept. For a negative example, it is not appropriate to use an Act.code "potassium" together with and Act.classCode for "laboratory observation" to somehow mean "potassium laboratory observation" and then use the same Act.code for "potassium" together with Act.classCode for "medication" to mean "substitution of potassium". This mutually modifying use of Act.code and Act.classCode is not permitted.

2.16.840.1.113883.5.4

[ActExposureLevelCode](v3/ActExposureLevelCode/cs.html)

A qualitative measure of the degree of exposure to the causative agent. This includes concepts such as "low", "medium" and "high". This quantifies how the quantity that was available to be administered to the target differs from typical or background levels of the substance.

2.16.840.1.113883.5.1114

[ActInvoiceElementModifier](v3/ActInvoiceElementModifier/cs.html)

Processing consideration and clarification codes.

2.16.840.1.113883.5.1051

[ActMood](v3/ActMood/cs.html)

OpenIssue: In Ballot 2009May, a strong Negative vote was lodged against several of the concept definitions in the vocabulary used for Act.moodCode. The vote was found "Persuasive With Mod", with the understanding that M and M would undertake a detailed review of these concept definitions for a future release of the RIM.

2.16.840.1.113883.5.1001

[ActPriority](v3/ActPriority/cs.html)

A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.

2.16.840.1.113883.5.7

[ActReason](v3/ActReason/cs.html)

A set of codes specifying the motivation, cause, or rationale of an Act, when such rationale is not reasonably represented as an ActRelationship of type "has reason" linking to another Act. Examples: Example reasons that might qualify for being coded in this field might be: "routine requirement", "infectious disease reporting requirement", "on patient request", "required by law".

2.16.840.1.113883.5.8

[ActRelationshipCheckpoint](v3/ActRelationshipCheckpoint/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.10

[ActRelationshipJoin](v3/ActRelationshipJoin/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.12

[ActRelationshipSplit](v3/ActRelationshipSplit/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.13

[ActRelationshipSubset](v3/ActRelationshipSubset/cs.html)

<ns1:p>Used to indicate that the target of the relationship will be a filtered subset of the total related set of targets.</ns1:p><ns1:p>Used when there is a need to limit the number of components to the first, the last, the next, the total, the average or some other filtered or calculated subset.</ns1:p>

2.16.840.1.113883.5.1099

[ActRelationshipType](v3/ActRelationshipType/cs.html)

The source is an excerpt from the target.

2.16.840.1.113883.5.1002

[ActSite](v3/ActSite/cs.html)

An anatomical location on an organism which can be the focus of an act.

2.16.840.1.113883.5.1052

[ActStatus](v3/ActStatus/cs.html)

Codes representing the defined possible states of an Act, as defined by the Act class state machine.

2.16.840.1.113883.5.14

[ActUSPrivacyLaw](v3/ActUSPrivacyLaw/cs.html)

A jurisdictional mandate in the US relating to privacy. Deprecation Comment: Content moved to ActCode under \_ActPrivacyLaw; use that instead.

2.16.840.1.113883.5.1138

[ActUncertainty](v3/ActUncertainty/cs.html)

OpenIssue: Missing Description

2.16.840.1.113883.5.1053

[AddressPartType](v3/AddressPartType/cs.html)

Description: Code that specifies whether an address part names the street, city, country, postal code, post box, etc. Discussion: The hierarchical nature of these concepts shows composition. E.g. "Street Name" is part of "Street Address Line"

2.16.840.1.113883.5.16

[AddressUse](v3/AddressUse/cs.html)

Codes that provide guidance around the circumstances in which a given address should be used.

2.16.840.1.113883.5.1119

[AdministrativeGender](v3/AdministrativeGender/cs.html)

The gender of a person used for adminstrative purposes (as opposed to clinical gender)

2.16.840.1.113883.5.1

[AmericanIndianAlaskaNativeLanguages](v3/AmericanIndianAlaskaNativeLanguages/cs.html)

American Indian and Alaska Native languages currently being used in the United States.

2.16.840.1.113883.5.1054

[Calendar](v3/Calendar/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.1055

[CalendarCycle](v3/CalendarCycle/cs.html)

Calendar cycle identifiers

2.16.840.1.113883.5.9

[CalendarType](v3/CalendarType/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.1017

[Charset](v3/Charset/cs.html)

Internet Assigned Numbers Authority (IANA) Charset Types

2.16.840.1.113883.5.21

[CodingRationale](v3/CodingRationale/cs.html)

Identifies how to interpret the instance of the code, codeSystem value in a set of translations. Since HL7 (or a government body) may mandate that codes from certain code systems be sent in conformant messages, other synonyms that are sent in the translation set need to be distinguished among the originally captured source, the HL7 specified code, or some future role. When this code is NULL, it indicates that the translation is an undefined type. When valued, this property must contain one of the following values: SRC - Source (or original) code HL7 - HL7 Specified or Mandated SH - both HL7 mandated and the original code (precoordination) There may be additional values added to this value set as we work through the use of codes in messages and determine other Use Cases requiring special interpretation of the translations.

2.16.840.1.113883.5.1074

[CommunicationFunctionType](v3/CommunicationFunctionType/cs.html)

Describes the type of communication function that the associated entity plays in the associated transmission.

2.16.840.1.113883.5.1056

[CompressionAlgorithm](v3/CompressionAlgorithm/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.1009

[Confidentiality](v3/Confidentiality/cs.html)

A set of codes specifying the security classification of acts and roles in accordance with the definition for concept domain "Confidentiality".

2.16.840.1.113883.5.25

[ContainerCap](v3/ContainerCap/cs.html)

The type of cap associated with a container

2.16.840.1.113883.5.26

[ContainerSeparator](v3/ContainerSeparator/cs.html)

A material in a blood collection container that facilites the separation of of blood cells from serum or plasma

2.16.840.1.113883.5.27

[ContentProcessingMode](v3/ContentProcessingMode/cs.html)

Description: Identifies the order in which content should be processed.

2.16.840.1.113883.5.1110

[ContextControl](v3/ContextControl/cs.html)

A code that specifies how an ActRelationship or Participation contributes to the context of an Act, and whether it may be propagated to descendent Acts whose association allows such propagation (see also attributes Participation.contextControlCode, ActRelationship.contextControlCode, ActRelationship.contextConductionInd).

2.16.840.1.113883.5.1057

[DataOperation](v3/DataOperation/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.1123

[Dentition](v3/Dentition/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.1080

[DeviceAlertLevel](v3/DeviceAlertLevel/cs.html)

Domain values for the Device.Alert\_levelCode

2.16.840.1.113883.5.31

[DocumentCompletion](v3/DocumentCompletion/cs.html)

Identifies the current completion state of a clinical document.

2.16.840.1.113883.5.33

[DocumentStorage](v3/DocumentStorage/cs.html)

Identifies the storage status of a document.

2.16.840.1.113883.5.34

[EducationLevel](v3/EducationLevel/cs.html)

Years of education that a person has completed

2.16.840.1.113883.5.1077

[EmployeeJobClass](v3/EmployeeJobClass/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.1059

[EncounterAdmissionSource](v3/EncounterAdmissionSource/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.37

[EncounterSpecialCourtesy](v3/EncounterSpecialCourtesy/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.40

[EntityClass](v3/EntityClass/cs.html)

Classifies the Entity class and all of its subclasses. The terminology is hierarchical. At the top is this HL7-defined domain of high-level categories (such as represented by the Entity subclasses). Each of these terms must be harmonized and is specializable. The value sets beneath are drawn from multiple, frequently external, domains that reflect much more fine-grained typing.

2.16.840.1.113883.5.41

[EntityCode](v3/EntityCode/cs.html)

OpenIssue: Missing description.

2.16.840.1.113883.5.1060

[EntityDeterminer](v3/EntityDeterminer/cs.html)

EntityDeterminer in natural language grammar is the class of words that comprises articles, demonstrative pronouns, and quantifiers. In the RIM, determiner is a structural code in the Entity class to distinguish whether any given Entity object stands for some, any one, or a specific thing.

2.16.840.1.113883.5.30

[EntityHandling](v3/EntityHandling/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.42

[EntityNamePartQualifier](v3/EntityNamePartQualifier/cs.html)

OpenIssue: Needs description

2.16.840.1.113883.5.43

[EntityNamePartQualifierR2](v3/EntityNamePartQualifierR2/cs.html)

Description: The qualifier is a set of codes each of which specifies a certain subcategory of the name part in addition to the main name part type. For example, a given name may be flagged as a nickname, a family name may be a pseudonym or a name of public records.

2.16.840.1.113883.5.1122

[EntityNamePartType](v3/EntityNamePartType/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.44

[EntityNamePartTypeR2](v3/EntityNamePartTypeR2/cs.html)

Description: Indicates whether the name part is a given name, family name, prefix, suffix, etc.

2.16.840.1.113883.5.1121

[EntityNameUse](v3/EntityNameUse/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.45

[EntityNameUseR2](v3/EntityNameUseR2/cs.html)

Description: A set of codes advising a system or user which name in a set of names to select for a given purpose.

2.16.840.1.113883.5.1120

[EntityRisk](v3/EntityRisk/cs.html)

Kinds of risks associated with the handling of the material..

2.16.840.1.113883.5.46

[EntityStatus](v3/EntityStatus/cs.html)

Codes representing the defined possible states of an Entity, as defined by the Entity class state machine.

2.16.840.1.113883.5.1061

[EquipmentAlertLevel](v3/EquipmentAlertLevel/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.49

[Ethnicity](v3/Ethnicity/cs.html)

In the United States, federal standards for classifying data on ethnicity determine the categories used by federal agencies and exert a strong influence on categorization by state and local agencies and private sector organizations. The federal standards do not conceptually define ethnicity, and they recognize the absence of an anthropological or scientific basis for ethnicity classification. Instead, the federal standards acknowledge that ethnicity is a social-political construct in which an individual's own identification with a particular ethnicity is preferred to observer identification. The standards specify two minimum ethnicity categories: Hispanic or Latino, and Not Hispanic or Latino. The standards define a Hispanic or Latino as a person of "Mexican, Puerto Rican, Cuban, South or Central America, or other Spanish culture or origin, regardless of race." The standards stipulate that ethnicity data need not be limited to the two minimum categories, but any expansion must be collapsible to those categories. In addition, the standards stipulate that an individual can be Hispanic or Latino or can be Not Hispanic or Latino, but cannot be both.

2.16.840.1.113883.5.50

[ExposureMode](v3/ExposureMode/cs.html)

Code for the mechanism by which the exposure agent was exchanged or potentially exchanged by the participants involved in the exposure.

2.16.840.1.113883.5.1113

[GTSAbbreviation](v3/GTSAbbreviation/cs.html)

Open Issue: It appears that the printnames are suboptimal and should be improved for many of the existing codes.

2.16.840.1.113883.5.1022

[GenderStatus](v3/GenderStatus/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.51

[HL7ContextConductionStyle](v3/HL7ContextConductionStyle/cs.html)

The styles of context conduction usable by relationships within a static model derived from tyhe HL7 Reference Information Model.

2.16.840.1.113883.5.1129

[HL7StandardVersionCode](v3/HL7StandardVersionCode/cs.html)

This code system holds version codes for the Version 3 standards. Values are to be determined by HL7 and added with each new version of the HL7 Standard.

2.16.840.1.113883.5.1097

[HL7UpdateMode](v3/HL7UpdateMode/cs.html)

The possible modes of updating that occur when an attribute is received by a system that already contains values for that attribute.

2.16.840.1.113883.5.57

[HtmlLinkType](v3/HtmlLinkType/cs.html)

HtmlLinkType values are drawn from HTML 4.0 and describe the relationship between the current document and the anchor that is the target of the link

2.16.840.1.113883.5.58

[IdentifierReliability](v3/IdentifierReliability/cs.html)

Specifies the reliability with which the identifier is known. This attribute MAY be used to assist with identifier matching algorithms.

2.16.840.1.113883.5.1117

[IdentifierScope](v3/IdentifierScope/cs.html)

Description: Codes to specify the scope in which the identifier applies to the object with which it is associated, and used in the datatype property II.

2.16.840.1.113883.5.1116

[IntegrityCheckAlgorithm](v3/IntegrityCheckAlgorithm/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.1010

[LanguageAbilityMode](v3/LanguageAbilityMode/cs.html)

A value representing the method of expression of the language. Example: Expressed spoken, expressed written, expressed signed, received spoken, received written, received signed. OpenIssue: Description copied from Concept Domain of same name. Must be verified.

2.16.840.1.113883.5.60

[LanguageAbilityProficiency](v3/LanguageAbilityProficiency/cs.html)

A value representing the level of proficiency in a language. Example: Excellent, good, fair, poor. OpenIssue: Description copied from Concept Domain of same name. Must be verified.

2.16.840.1.113883.5.61

[LivingArrangement](v3/LivingArrangement/cs.html)

A code depicting the living arrangements of a person

2.16.840.1.113883.5.63

[LocalMarkupIgnore](v3/LocalMarkupIgnore/cs.html)

Tells a receiver to ignore just the local markup tags (local\_markup, local\_header, local\_attr) when value="markup", or to ignore the local markup tags and all contained content when value="all"

2.16.840.1.113883.5.65

[LocalRemoteControlState](v3/LocalRemoteControlState/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.66

[ManagedParticipationStatus](v3/ManagedParticipationStatus/cs.html)

Codes representing the defined possible states of a Managed Participation, as defined by the Managed Participation class state machine.

2.16.840.1.113883.5.1062

[MapRelationship](v3/MapRelationship/cs.html)

The closeness or quality of the mapping between the HL7 concept (as represented by the HL7 concept identifier) and the source coding system. The values are patterned after the similar relationships used in the UMLS Metathesaurus. Because the HL7 coding sy

2.16.840.1.113883.5.67

[MaritalStatus](v3/MaritalStatus/cs.html)

\* \* \* No description supplied \* \* \* Open Issue: The specific meanings of these codes can vary somewhat by jurisdiction and implementation so caution should be used when determining equivalency.

2.16.840.1.113883.5.2

[MessageWaitingPriority](v3/MessageWaitingPriority/cs.html)

Indicates that the receiver has messages for the sender OpenIssue: Description does not make sense relative to name of coding system. Must be reviewed and improved.

2.16.840.1.113883.5.1083

[ModifyIndicator](v3/ModifyIndicator/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.81

[NullFlavor](v3/NullFlavor/cs.html)

A collection of codes specifying why a valid value is not present.

2.16.840.1.113883.5.1008

[ObservationCategory](v3/ObservationCategory/cs.html)

High level observation categories for the general type of observation being made. URL: http://hl7-fhir.github.io/valueset-observation-category.html This is an inline code system http://hl7.org/fhir/observation-category.

2.16.840.1.113883.4.642.1.222

[ObservationInterpretation](v3/ObservationInterpretation/cs.html)

One or more codes providing a rough qualitative interpretation of the observation, such as "normal" / "abnormal", "low" / "high", "better" / "worse", "resistant" / "susceptible", "expected" / "not expected". The value set is intended to be for ANY use where coded representation of an interpretation is needed.

2.16.840.1.113883.5.83

[ObservationMethod](v3/ObservationMethod/cs.html)

A code that provides additional detail about the means or technique used to ascertain the observation. Examples: Blood pressure measurement method: arterial puncture vs. sphygmomanometer (Riva-Rocci), sitting vs. supine position, etc. OpenIssue: Description copied from Concept Domain of same name. Must be verified. Note that the Domain has a full discussion about use of the attribute and constraining that is not appropriate for the code system description. Needs to be improved.

2.16.840.1.113883.5.84

[ObservationValue](v3/ObservationValue/cs.html)

This domain is the root domain to which all HL7-recognized value sets for the Observation.value attribute will be linked when Observation.value has a coded data type. OpenIssue: Description copied from Concept Domain of same name. Must be corrected..

2.16.840.1.113883.5.1063

[ParticipationFunction](v3/ParticipationFunction/cs.html)

This code is used to specify the exact function an actor had in a service in all necessary detail. This domain may include local extensions (CWE).

2.16.840.1.113883.5.88

[ParticipationMode](v3/ParticipationMode/cs.html)

A set of codes specifying the modality by which the Entity playing the Role is participating in the Act. Examples: Physically present, over the telephone, written communication. Rationale: Particularly for author (originator) participants this is used to specify whether the information represented by the act was initially provided verbally, (hand-)written, or electronically. Open Issue: There needs to be a reexamination of the hierarchies as there seems to be some muddling between ELECTRONIC and other concepts that involve electronic communication that are in other hierarchies.

2.16.840.1.113883.5.1064

[ParticipationSignature](v3/ParticipationSignature/cs.html)

A set of codes specifying whether and how the participant has attested his participation through a signature and or whether such a signature is needed. Examples: A surgical Procedure act object (representing a procedure report) requires a signature of the performing and responsible surgeon, and possibly other participants. (See also: Participation.signatureText.)

2.16.840.1.113883.5.89

[ParticipationType](v3/ParticipationType/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.90

[PatientImportance](v3/PatientImportance/cs.html)

Patient VIP code

2.16.840.1.113883.5.1075

[PaymentTerms](v3/PaymentTerms/cs.html)

Describes payment terms for a financial transaction, used in an invoice. This is typically expressed as a responsibility of the acceptor or payor of an invoice.

2.16.840.1.113883.5.91

[PersonDisabilityType](v3/PersonDisabilityType/cs.html)

A code identifying a person's disability.

2.16.840.1.113883.5.93

[ProbabilityDistributionType](v3/ProbabilityDistributionType/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.1020

[ProcessingID](v3/ProcessingID/cs.html)

Codes used to specify whether a message is part of a production, training, or debugging system.

2.16.840.1.113883.5.100

[ProcessingMode](v3/ProcessingMode/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.101

[QueryParameterValue](v3/QueryParameterValue/cs.html)

The domain of coded values used as parameters within QueryByParameter queries.

2.16.840.1.113883.5.1096

[QueryPriority](v3/QueryPriority/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.102

[QueryRequestLimit](v3/QueryRequestLimit/cs.html)

Definition: Defines the units associated with the magnitude of the maximum size limit of a query response that can be accepted by the requesting application.

2.16.840.1.113883.5.1112

[QueryResponse](v3/QueryResponse/cs.html)

A code classifying the general nature of the response to a given query. Includes whether or not data was found, or whether an error occurred.

2.16.840.1.113883.5.1067

[QueryStatusCode](v3/QueryStatusCode/cs.html)

A code specifying the state of the Query.

2.16.840.1.113883.5.103

[Race](v3/Race/cs.html)

In the United States, federal standards for classifying data on race determine the categories used by federal agencies and exert a strong influence on categorization by state and local agencies and private sector organizations. The federal standards do not conceptually define race, and they recognize the absence of an anthropological or scientific basis for racial classification. Instead, the federal standards acknowledge that race is a social-political construct in which an individual's own identification with one more race categories is preferred to observer identification. The standards use a variety of features to define five minimum race categories. Among these features are descent from "the original peoples" of a specified region or nation. The minimum race categories are American Indian or Alaska Native, Asian, Black or African American, Native Hawaiian or Other Pacific Islander, and White. The federal standards stipulate that race data need not be limited to the five minimum categories, but any expansion must be collapsible to those categories.

2.16.840.1.113883.5.104

[RelationalOperator](v3/RelationalOperator/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.105

[RelationshipConjunction](v3/RelationshipConjunction/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.106

[ReligiousAffiliation](v3/ReligiousAffiliation/cs.html)

Assigment of spiritual faith affiliation

2.16.840.1.113883.5.1076

[ResponseLevel](v3/ResponseLevel/cs.html)

Specifies whether a response is expected from the addressee of this interaction and what level of detail that response should include

2.16.840.1.113883.5.108

[ResponseModality](v3/ResponseModality/cs.html)

Defines the timing and grouping of the response instances. OpenIssue: Description copied from Concept Domain of same name. Must be verified.

2.16.840.1.113883.5.109

[ResponseMode](v3/ResponseMode/cs.html)

Specifies the mode, immediate versus deferred or queued, by which a receiver should communicate its receiver responsibilities.

2.16.840.1.113883.5.1126

[RoleClass](v3/RoleClass/cs.html)

Codes for the Role class hierarchy. The values in this hierarchy, represent a Role which is an association or relationship between two entities - the entity that plays the role and the entity that scopes the role. Roles names are derived from the name of the playing entity in that role. The role hierarchy stems from three core concepts, or abstract domains: RoleClassOntological is an abstract domain that collects roles in which the playing entity is defined or specified by the scoping entity. RoleClassPartitive collects roles in which the playing entity is in some sense a "part" of the scoping entity. RoleClassAssociative collects all of the remaining forms of association between the playing entity and the scoping entity. This set of roles is further partitioned between: RoleClassPassive which are roles in which the playing entity is used, known, treated, handled, built, or destroyed, etc. under the auspices of the scoping entity. The playing entity is passive in these roles in that the role exists without an agreement from the playing entity. RoleClassMutualRelationship which are relationships based on mutual behavior of the two entities. The basis of these relationship may be formal agreements or they may bede facto behavior. Thus, this sub-domain is further divided into: RoleClassRelationshipFormal in which the relationship is formally defined, frequently by a contract or agreement. Personal relationship which inks two people in a personal relationship. The hierarchy discussed above is represented In the current vocabulary tables as a set of abstract domains, with the exception of the "Personal relationship" which is a leaf concept. OpenIssue: Description copied from Concept Domain of same name. Must be verified.

2.16.840.1.113883.5.110

[RoleCode](v3/RoleCode/cs.html)

A set of codes further specifying the kind of Role; specific classification codes for further qualifying RoleClass codes.

2.16.840.1.113883.5.111

[RoleLinkStatus](v3/RoleLinkStatus/cs.html)

Description: Codes representing possible states of a RoleLink, as defined by the RoleLink class state machine.

2.16.840.1.113883.5.1137

[RoleLinkType](v3/RoleLinkType/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.107

[RoleStatus](v3/RoleStatus/cs.html)

Codes representing the defined possible states of an Role, as defined by the Role class state machine.

2.16.840.1.113883.5.1068

[RouteOfAdministration](v3/RouteOfAdministration/cs.html)

The path the administered medication takes to get into the body or into contact with the body.

2.16.840.1.113883.5.112

[Sequencing](v3/Sequencing/cs.html)

Specifies sequence of sort order.

2.16.840.1.113883.5.113

[SetOperator](v3/SetOperator/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.1069

[SpecimenType](v3/SpecimenType/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.129

[SubstitutionCondition](v3/SubstitutionCondition/cs.html)

Identifies what sort of change is permitted or has occurred between the item that was ordered/requested and the one that was/will be provided.

2.16.840.1.113883.5.1071

[TableCellHorizontalAlign](v3/TableCellHorizontalAlign/cs.html)

These values are defined within the XHTML 4.0 Table Model

2.16.840.1.113883.5.131

[TableCellScope](v3/TableCellScope/cs.html)

These values are defined within the XHTML 4.0 Table Model

2.16.840.1.113883.5.132

[TableCellVerticalAlign](v3/TableCellVerticalAlign/cs.html)

These values are defined within the XHTML 4.0 Table Model

2.16.840.1.113883.5.133

[TableFrame](v3/TableFrame/cs.html)

These values are defined within the XHTML 4.0 Table Model

2.16.840.1.113883.5.134

[TableRules](v3/TableRules/cs.html)

These values are defined within the XHTML 4.0 Table Model

2.16.840.1.113883.5.136

[TargetAwareness](v3/TargetAwareness/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.137

[TelecommunicationCapabilities](v3/TelecommunicationCapabilities/cs.html)

Description: Concepts that define the telecommunication capabilities of a particular device. Used to identify the expected capabilities to be found at a particular telecommunication address.

2.16.840.1.113883.5.1118

[TimingEvent](v3/TimingEvent/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.139

[TransmissionRelationshipTypeCode](v3/TransmissionRelationshipTypeCode/cs.html)

Description: A code specifying the meaning and purpose of every TransmissionRelationship instance. Each of its values implies specific constraints to what kinds of Transmission objects can be related and in which way.

2.16.840.1.113883.5.1111

[TribalEntityUS](v3/TribalEntityUS/cs.html)

INDIAN ENTITIES RECOGNIZED AND ELIGIBLE TO RECEIVE SERVICES FROM THE UNITED STATES BUREAU OF INDIAN AFFAIRS

2.16.840.1.113883.5.140

[VaccineManufacturer](v3/VaccineManufacturer/cs.html)

The manufacturer of a vaccine.

2.16.840.1.113883.5.144

[WorkClassificationODH](v3/WorkClassificationODH/cs.html)

Code system of concepts representing a person's job type as defined by compensation and sector (e.g. paid vs. unpaid, self-employed vs. not self-employed, government vs. private, etc.).

2.16.840.1.113883.5.1139

[hl7ApprovalStatus](v3/hl7ApprovalStatus/cs.html)

Description: Codes for concepts describing the approval level of HL7 artifacts. This code system reflects the concepts expressed in HL7's Governance & Operations Manual (GOM) past and present.

2.16.840.1.113883.5.1130

[hl7CMETAttribution](v3/hl7CMETAttribution/cs.html)

\*\*\*\* MISSING DEFINITIONS \*\*\*\*

2.16.840.1.113883.5.1132

[hl7ITSType](v3/hl7ITSType/cs.html)

Description: Codes identifying types of HL7 Implementation Technology Specifications

2.16.840.1.113883.5.1135

[hl7ITSVersionCode](v3/hl7ITSVersionCode/cs.html)

HL7 implementation technology specification versions. These codes will document the ITS type and version for message encoding. The code will appear in the instances based upon rules expressed in the ITS, and do not appear in the abstract message, either as it is presented to received from the ITS.

2.16.840.1.113883.5.1092

[hl7PublishingDomain](v3/hl7PublishingDomain/cs.html)

Description: Codes for HL7 publishing domains (specific content area)

2.16.840.1.113883.5.1136

[hl7PublishingSection](v3/hl7PublishingSection/cs.html)

Description: Codes for HL7 publishing sections (major business categories)

2.16.840.1.113883.5.1133

[hl7PublishingSubSection](v3/hl7PublishingSubSection/cs.html)

Description: Codes for HL7 publishing sub-sections (business sub-categories)

2.16.840.1.113883.5.1134

[hl7Realm](v3/hl7Realm/cs.html)

Description: Coded concepts representing Binding Realms (used for Context Binding of terminology in HL7 models) and/or Namespace Realms (used to help ensure unique identification of HL7 artifacts). This code system is partitioned into three sections: Affiliate realms, Binding realms and Namespace realms. All affiliate realm codes may automatically be used as both binding realms and namespace realms. Furthermore, affiliate realms are the only realms that have authority over the creation of binding realms. (Note that 'affiliate' includes the idea of both international affiliates and the HL7 International organization.) All other codes must be associated with an owning affiliate realm and must appear as a specialization of \_BindingRealm or \_NamespaceRealm. For affiliates whose concepts align with nations, the country codes from ISO 3166-1 2-character alpha are used for the code when possible so these codes should not be used for other realm types. It is recommended that binding realm and namespace codes submitted by affiliates use the realm code as a prefix to avoid possible collisions with ISO codes. However, tooling does not currently support namepace realm codes greater than 2 characters. Open Issue: The name of the concept property "owningAffiliate" should be changed to better reflect that the property value is the human readable name of the organizational entity that manages the Realm identified by the Realm Code. Open Issue: In spite of the inability of tooling to process codes longer than 2 characters, there is at least one realm codes ('SOA') that was added that is 3 characters in length.

2.16.840.1.113883.5.1124

[hl7V3Conformance](v3/hl7V3Conformance/cs.html)

Description: Identifies allowed codes for HL7aTMs v3 conformance property.

2.16.840.1.113883.5.1125

[hl7VoteResolution](v3/hl7VoteResolution/cs.html)

Description: Based on concepts for resolutions from HL7 ballot spreadsheet according to HL7's Governance & Operations Manual (GOM).

2.16.840.1.113883.5.1131

[orderableDrugForm](v3/orderableDrugForm/cs.html)

OpenIssue: Missing description.

2.16.840.1.113883.5.85

[policyHolderRole](v3/policyHolderRole/cs.html)

This vocabulary is defined by Implementation Guide for CDA Release 2 - Level 1 - Care Record Summary (US realm). It describes roles recognized through the issuance of an insurance policy to a policyholder who a relationship with the covered party, such as spouse, child, etc. This vocabulary is essentially an inversion of the role relations of the HL7 CoverageRoleType vocabulary. It provides more detailed roles with respect to the underwriter (the scoping organization) for those participants in the policyholder role for a patient. Open Issue: The code values for this coding system must be extracted from the CDA documentation and brought forward through Harmonization for instantiation in this repository.

2.16.840.1.113883.5.1128

[styleType](v3/styleType/cs.html)

<ns1:p>The style code is used within the CDA/SPL narrative block to give the instance author some control over various aspects of style</ns1:p>

2.16.840.1.113883.5.1095

[substanceAdminSubstitution](v3/substanceAdminSubstitution/cs.html)

Identifies what sort of change is permitted or has occurred between the therapy that was ordered and the therapy that was/will be provided.

2.16.840.1.113883.5.1070

[triggerEventID](v3/triggerEventID/cs.html)

Description: This code system contains all HL7 artifacts of type TE (Trigger Event) that are created by HL7 or its affiliates or their designates using the realm namespacing rules approved by HL7. Local implementations who create trigger events outside of these namespacing rules, (e.g. using the ZZ realm code) must register their own code system. The specific list of legal codes can be found by consulting the HL7 publications (editions, ballots, implementation guides, etc.) published by HL7 Inc. and by the various HL7 affiliates and their designates. Codes shall be expressed in upper case, with separator as shown in HL7 publications with no version id. E.g. PORX\_TE123456UV.

2.16.840.1.113883.1.18

Note: v2 code systems may or may not be case sensitive. v2 Code systems will have the `CodeSystem.caseSensitive` correctly populated in a future version of this specification.

**URI** (all prefixed with http://terminology.hl7.org/CodeSystem/v2-/)

**ID**

**OID**

[0001](v2/0001/index.html)

Administrative Sex

[0002](v2/0002/index.html)

Marital Status

[0003](v2/0003/index.html)

Event Type

[0004](v2/0004/index.html)

Patient Class

0006

ReligionVersion Dependent. Use one of:

*   [2.1+](v2/0006/2.1/index.html)
*   [2.4+](v2/0006/2.4/index.html)

[0007](v2/0007/index.html)

Admission Type

[0008](v2/0008/index.html)

Acknowledgment code

[0009](v2/0009/index.html)

Ambulatory Status

[0012](v2/0012/index.html)

STOCK LOCATION

[0017](v2/0017/index.html)

Transaction Type

[0023](v2/0023/index.html)

Admit Source

[0027](v2/0027/index.html)

Priority

[0033](v2/0033/index.html)

ROUTE

[0034](v2/0034/index.html)

SITE ADMINISTERED

[0038](v2/0038/index.html)

Order status

[0043](v2/0043/index.html)

Condition Code

[0048](v2/0048/index.html)

What subject filter

[0052](v2/0052/index.html)

Diagnosis Type

[0061](v2/0061/index.html)

Check Digit Scheme

[0062](v2/0062/index.html)

Event Reason

[0063](v2/0063/index.html)

Relationship

[0065](v2/0065/index.html)

Specimen Action Code

[0066](v2/0066/index.html)

Employment Status

[0069](v2/0069/index.html)

Hospital Service

[0070](v2/0070/index.html)

Specimen Source Codes

[0074](v2/0074/index.html)

Diagnostic Service Section ID

[0076](v2/0076/index.html)

Message Type

[0078](v2/0078/index.html)

Interpretation Codes

[0080](v2/0080/index.html)

Nature of Abnormal Testing

[0083](v2/0083/index.html)

Outlier Type

[0085](v2/0085/index.html)

Observation Result Status Codes Interpretation

[0091](v2/0091/index.html)

Query Priority

[0092](v2/0092/index.html)

Re-Admission Indicator

[0098](v2/0098/index.html)

Type of Agreement

[0100](v2/0100/index.html)

Invocation event

[0102](v2/0102/index.html)

Delayed acknowledgment type

[0103](v2/0103/index.html)

Processing ID

[0104](v2/0104/index.html)

Version ID

[0105](v2/0105/index.html)

Source of Comment

[0106](v2/0106/index.html)

Query/response format code

[0107](v2/0107/index.html)

Deferred response type

[0108](v2/0108/index.html)

Query results level

[0109](v2/0109/index.html)

Report priority

[0116](v2/0116/index.html)

Bed Status

[0119](v2/0119/index.html)

Order Control Codes

[0121](v2/0121/index.html)

Response Flag

[0122](v2/0122/index.html)

Charge Type

[0123](v2/0123/index.html)

Result Status

[0124](v2/0124/index.html)

Transportation Mode

[0126](v2/0126/index.html)

Quantity Limited Request

[0127](v2/0127/index.html)

Allergen Type

[0128](v2/0128/index.html)

Allergy Severity

[0130](v2/0130/index.html)

Visit User Code

[0131](v2/0131/index.html)

Contact Role

[0133](v2/0133/index.html)

Procedure Practitioner Identifier Code Type

[0135](v2/0135/index.html)

Assignment of Benefits

[0136](v2/0136/index.html)

Yes/no Indicator

[0137](v2/0137/index.html)

Mail Claim Party

[0140](v2/0140/index.html)

Military Service

[0141](v2/0141/index.html)

Military Rank/Grade

[0142](v2/0142/index.html)

Military Status

[0144](v2/0144/index.html)

Eligibility Source

[0145](v2/0145/index.html)

Room Type

[0146](v2/0146/index.html)

Amount Type

[0147](v2/0147/index.html)

Policy Type

[0148](v2/0148/index.html)

Money or Percentage Indicator

[0149](v2/0149/index.html)

Day Type

[0150](v2/0150/index.html)

Certification Patient Type

[0153](v2/0153/index.html)

Value Code

[0155](v2/0155/index.html)

Accept/Application Acknowledgment Conditions

[0156](v2/0156/index.html)

Which date/time qualifier

[0157](v2/0157/index.html)

Which date/time status qualifier

[0158](v2/0158/index.html)

Date/time selection qualifier

[0159](v2/0159/index.html)

Diet Code Specification Type

[0160](v2/0160/index.html)

Tray Type

[0161](v2/0161/index.html)

Allow Substitution

[0162](v2/0162/index.html)

Route of Administration

[0163](v2/0163/index.html)

Body Site

[0164](v2/0164/index.html)

Administration Device

[0165](v2/0165/index.html)

Administration Method

[0166](v2/0166/index.html)

RX Component Type

[0167](v2/0167/index.html)

Substitution Status

[0168](v2/0168/index.html)

Processing Priority

[0169](v2/0169/index.html)

Reporting Priority

[0170](v2/0170/index.html)

Derived Specimen

[0173](v2/0173/index.html)

Coordination of Benefits

[0174](v2/0174/index.html)

Nature of Service/Test/Observation

[0175](v2/0175/index.html)

Master File Identifier Code

[0177](v2/0177/index.html)

Confidentiality Code

[0178](v2/0178/index.html)

File Level Event Code

[0179](v2/0179/index.html)

Response Level

[0180](v2/0180/index.html)

Masterfile Action Code

[0181](v2/0181/index.html)

MFN Record-level Error Return

[0183](v2/0183/index.html)

Active/Inactive

[0185](v2/0185/index.html)

Preferred Method of Contact

[0187](v2/0187/index.html)

Provider Billing

[0189](v2/0189/index.html)

Ethnic Group

[0190](v2/0190/index.html)

Address Type

[0191](v2/0191/index.html)

Type of Referenced Data

[0193](v2/0193/index.html)

Amount Class

[0200](v2/0200/index.html)

Name Type

[0201](v2/0201/index.html)

Telecommunication Use Code

[0202](v2/0202/index.html)

Telecommunication Equipment Type

[0203](v2/0203/index.html)

Identifier Type

[0204](v2/0204/index.html)

Organizational Name Type

[0205](v2/0205/index.html)

Price Type

[0206](v2/0206/index.html)

Segment Action Code

[0207](v2/0207/index.html)

Processing Mode

[0208](v2/0208/index.html)

Query Response Status

[0209](v2/0209/index.html)

Relational Operator

[0210](v2/0210/index.html)

Relational Conjunction

[0211](v2/0211/index.html)

Alternate Character Sets

[0213](v2/0213/index.html)

Purge Status Code

[0214](v2/0214/index.html)

Special Program Code

[0215](v2/0215/index.html)

Publicity Code

[0216](v2/0216/index.html)

Patient Status Code

[0217](v2/0217/index.html)

Visit Priority Code

[0220](v2/0220/index.html)

Living Arrangement

[0223](v2/0223/index.html)

Living Dependency

[0224](v2/0224/index.html)

Transport Arranged

[0225](v2/0225/index.html)

Escort Required

[0227](v2/0227/index.html)

Manufacturers of Vaccines (code=MVX)

[0228](v2/0228/index.html)

Diagnosis Classification

[0229](v2/0229/index.html)

DRG Payor

[0230](v2/0230/index.html)

Procedure Functional Type

[0231](v2/0231/index.html)

Student Status

[0232](v2/0232/index.html)

\- Insurance Company Contact Reason

[0234](v2/0234/index.html)

Report Timing

[0235](v2/0235/index.html)

Report Source

[0236](v2/0236/index.html)

Event Reported To

[0237](v2/0237/index.html)

Event Qualification

[0238](v2/0238/index.html)

Event Seriousness

[0239](v2/0239/index.html)

Event Expected

[0240](v2/0240/index.html)

Event Consequence

[0241](v2/0241/index.html)

Patient Outcome

[0242](v2/0242/index.html)

Primary Observer's Qualification

[0243](v2/0243/index.html)

Identity May Be Divulged

[0247](v2/0247/index.html)

Status of Evaluation

[0248](v2/0248/index.html)

Product Source

[0250](v2/0250/index.html)

Relatedness Assessment

[0251](v2/0251/index.html)

Action Taken in Response to the Event

[0252](v2/0252/index.html)

Causality Observations

[0253](v2/0253/index.html)

Indirect Exposure Mechanism

[0254](v2/0254/index.html)

Kind of Quantity

[0255](v2/0255/index.html)

Duration Categories

[0256](v2/0256/index.html)

Time Delay Post Challenge

[0257](v2/0257/index.html)

Nature of Challenge

[0258](v2/0258/index.html)

Relationship Modifier

[0259](v2/0259/index.html)

Modality

[0260](v2/0260/index.html)

Patient Location Type

[0261](v2/0261/index.html)

Location Equipment

[0262](v2/0262/index.html)

Privacy Level

[0263](v2/0263/index.html)

Level of Care

[0265](v2/0265/index.html)

Specialty Type

[0267](v2/0267/index.html)

Days of the Week

[0268](v2/0268/index.html)

Override

[0269](v2/0269/index.html)

Charge On Indicator

[0270](v2/0270/index.html)

Document Type

[0271](v2/0271/index.html)

Document Completion Status

[0272](v2/0272/index.html)

Document Confidentiality Status

[0273](v2/0273/index.html)

Document Availability Status

[0275](v2/0275/index.html)

Document Storage Status

[0276](v2/0276/index.html)

Appointment reason codes

[0277](v2/0277/index.html)

Appointment Type Codes

[0278](v2/0278/index.html)

Filler status codes

[0279](v2/0279/index.html)

Allow Substitution Codes

[0280](v2/0280/index.html)

Referral Priority

[0281](v2/0281/index.html)

Referral Type

[0282](v2/0282/index.html)

Referral Disposition

[0283](v2/0283/index.html)

Referral Status

[0284](v2/0284/index.html)

Referral Category

[0286](v2/0286/index.html)

Provider Role

[0287](v2/0287/index.html)

Problem/Goal Action Code

[0290](v2/0290/index.html)

MIME base64 encoding characters

[0291](v2/0291/index.html)

Subtype of Referenced Data

[0292](v2/0292/index.html)

Vaccines Administered

[0294](v2/0294/index.html)

Time Selection Criteria Parameter Class Codes

[0298](v2/0298/index.html)

CP Range Type

[0299](v2/0299/index.html)

Encoding

[0301](v2/0301/index.html)

Universal ID Type

[0305](v2/0305/index.html)

Person Location Type

[0309](v2/0309/index.html)

Coverage Type

[0311](v2/0311/index.html)

Job Status

[0315](v2/0315/index.html)

Living Will Code

[0316](v2/0316/index.html)

Organ Donor Code

[0317](v2/0317/index.html)

Annotations

[0321](v2/0321/index.html)

Dispense Method

[0322](v2/0322/index.html)

Completion Status

[0323](v2/0323/index.html)

Action Code

[0324](v2/0324/index.html)

Location Characteristic ID

[0325](v2/0325/index.html)

Location Relationship ID

[0326](v2/0326/index.html)

Visit Indicator

[0329](v2/0329/index.html)

Quantity Method

[0330](v2/0330/index.html)

Marketing Basis

[0331](v2/0331/index.html)

Facility Type

[0332](v2/0332/index.html)

Source Type

[0334](v2/0334/index.html)

Disabled Person Code

[0335](v2/0335/index.html)

Repeat Pattern

[0336](v2/0336/index.html)

Referral Reason

[0337](v2/0337/index.html)

Certification Status

[0338](v2/0338/index.html)

Practitioner ID Number Type

[0339](v2/0339/index.html)

Advanced Beneficiary Notice Code

[0344](v2/0344/index.html)

Patient's Relationship to Insured

[0350](v2/0350/index.html)

Occurrence Code

[0351](v2/0351/index.html)

Occurrence Span

[0354](v2/0354/index.html)

Message Structure

[0355](v2/0355/index.html)

Primary Key Value Type

[0356](v2/0356/index.html)

Alternate Character Set Handling Scheme

[0357](v2/0357/index.html)

Message Error Condition Codes

[0359](v2/0359/index.html)

Diagnosis Priority

0360

Degree/License/CertificateVersion Dependent. Use one of:

*   [2.3.1+](v2/0360/2.3.1/index.html)
*   [2.7+](v2/0360/2.7/index.html)

[0363](v2/0363/index.html)

Assigning Authority

[0364](v2/0364/index.html)

Comment Type

[0365](v2/0365/index.html)

Equipment State

[0366](v2/0366/index.html)

Local/Remote Control State

[0367](v2/0367/index.html)

Alert Level

[0368](v2/0368/index.html)

Remote Control Command

[0369](v2/0369/index.html)

Specimen Role

[0370](v2/0370/index.html)

Container Status

[0371](v2/0371/index.html)

Additive/Preservative

[0372](v2/0372/index.html)

Specimen Component

[0373](v2/0373/index.html)

Treatment

[0374](v2/0374/index.html)

System Induced Contaminants

[0375](v2/0375/index.html)

Artificial Blood

[0376](v2/0376/index.html)

Special Handling Code

[0377](v2/0377/index.html)

Other Environmental Factors

[0383](v2/0383/index.html)

Substance Status

[0384](v2/0384/index.html)

Substance Type

[0387](v2/0387/index.html)

Command Response

[0388](v2/0388/index.html)

Processing Type

[0389](v2/0389/index.html)

Analyte Repeat Status

0391

Segment GroupVersion Dependent. Use one of:

*   [2.4+](v2/0391/2.4/index.html)
*   [2.6+](v2/0391/2.6/index.html)

[0392](v2/0392/index.html)

Match Reason

[0393](v2/0393/index.html)

Match Algorithms

[0394](v2/0394/index.html)

Response Modality

[0395](v2/0395/index.html)

Modify Indicator

[0396](v2/0396/index.html)

Coding System

[0397](v2/0397/index.html)

Sequencing

[0398](v2/0398/index.html)

Continuation Style Code

[0401](v2/0401/index.html)

Government Reimbursement Program

[0402](v2/0402/index.html)

School Type

[0403](v2/0403/index.html)

Language Ability

[0404](v2/0404/index.html)

Language Proficiency

[0406](v2/0406/index.html)

Participant Organization Unit Type

[0409](v2/0409/index.html)

Application Change Type

[0411](v2/0411/index.html)

Supplemental Service Information Values

[0415](v2/0415/index.html)

Transfer Type

[0416](v2/0416/index.html)

Procedure DRG Type

[0417](v2/0417/index.html)

Tissue Type Code

[0418](v2/0418/index.html)

Procedure Priority

[0421](v2/0421/index.html)

Severity of Illness Code

[0422](v2/0422/index.html)

Triage Code

[0423](v2/0423/index.html)

Case Category Code

[0424](v2/0424/index.html)

Gestation Category Code

[0425](v2/0425/index.html)

Newborn Code

[0426](v2/0426/index.html)

Blood Product Code

[0427](v2/0427/index.html)

Risk Management Incident Code

[0428](v2/0428/index.html)

Incident Type Code

[0429](v2/0429/index.html)

Production Class Code

[0430](v2/0430/index.html)

Mode of Arrival Code

[0431](v2/0431/index.html)

Recreational Drug Use Code

[0432](v2/0432/index.html)

Admission Level of Care Code

[0433](v2/0433/index.html)

Precaution Code

[0434](v2/0434/index.html)

Patient Condition Code

[0435](v2/0435/index.html)

Advance Directive Code

[0436](v2/0436/index.html)

Sensitivity to Causative Agent Code

[0437](v2/0437/index.html)

Alert Device Code

[0438](v2/0438/index.html)

Allergy Clinical Status

[0440](v2/0440/index.html)

Data Types

[0441](v2/0441/index.html)

Immunization Registry Status

[0442](v2/0442/index.html)

Location Service Code

[0443](v2/0443/index.html)

Provider Role

[0444](v2/0444/index.html)

Name Assembly Order

[0445](v2/0445/index.html)

Identity Reliability Code

[0450](v2/0450/index.html)

Event Type

[0455](v2/0455/index.html)

Type of Bill Code

[0456](v2/0456/index.html)

Revenue code

[0457](v2/0457/index.html)

Overall Claim Disposition Code

[0459](v2/0459/index.html)

Reimbursement Action Code

[0460](v2/0460/index.html)

Denial or Rejection Code

[0465](v2/0465/index.html)

Name/Address Representation

[0466](v2/0466/index.html)

Ambulatory Payment Classification Code

[0468](v2/0468/index.html)

Payment Adjustment Code

[0469](v2/0469/index.html)

Packaging Status Code

[0470](v2/0470/index.html)

Reimbursement Type Code

[0472](v2/0472/index.html)

TQ Conjunction ID

[0473](v2/0473/index.html)

Formulary Status

[0474](v2/0474/index.html)

Practitioner Organization Unit Type

[0475](v2/0475/index.html)

Charge Type Reason

[0477](v2/0477/index.html)

Controlled Substance Schedule

[0478](v2/0478/index.html)

Formulary Status

[0480](v2/0480/index.html)

Pharmacy Order Types

[0482](v2/0482/index.html)

Order Type

[0483](v2/0483/index.html)

Authorization Mode

[0484](v2/0484/index.html)

Dispense Type

[0485](v2/0485/index.html)

Extended Priority Codes

[0487](v2/0487/index.html)

Specimen Type

[0488](v2/0488/index.html)

Specimen Collection Method

[0489](v2/0489/index.html)

Risk Codes

[0490](v2/0490/index.html)

Specimen Reject Reason

[0491](v2/0491/index.html)

Specimen Quality

[0492](v2/0492/index.html)

Specimen Appropriateness

[0493](v2/0493/index.html)

Specimen Condition

[0494](v2/0494/index.html)

Specimen Child Role

[0495](v2/0495/index.html)

Body Site Modifier

[0496](v2/0496/index.html)

Consent Type

[0497](v2/0497/index.html)

Consent Mode

[0498](v2/0498/index.html)

Consent Status

[0499](v2/0499/index.html)

Consent Bypass Reason

[0500](v2/0500/index.html)

Consent Disclosure Level

[0501](v2/0501/index.html)

Consent Non-Disclosure Reason

[0502](v2/0502/index.html)

Non-Subject Consenter Reason

[0503](v2/0503/index.html)

Sequence/Results Flag

[0504](v2/0504/index.html)

Sequence Condition Code

[0505](v2/0505/index.html)

Cyclic Entry/Exit Indicator

[0506](v2/0506/index.html)

Service Request Relationship

[0507](v2/0507/index.html)

Observation Result Handling

[0508](v2/0508/index.html)

Blood Product Processing Requirements

[0510](v2/0510/index.html)

Blood Product Dispense Status

[0511](v2/0511/index.html)

BP Observation Status Codes Interpretation

[0513](v2/0513/index.html)

Blood Product Transfusion/Disposition Status

[0514](v2/0514/index.html)

Transfusion Adverse Reaction

[0516](v2/0516/index.html)

Error Severity

[0517](v2/0517/index.html)

Inform Person Code

[0518](v2/0518/index.html)

Override Type

[0520](v2/0520/index.html)

Message Waiting Priority

[0523](v2/0523/index.html)

Computation Type

[0524](v2/0524/index.html)

Sequence condition

[0527](v2/0527/index.html)

Calendar Alignment

[0528](v2/0528/index.html)

Event Related Period

[0529](v2/0529/index.html)

Precision

[0530](v2/0530/index.html)

Organization, Agency, Department

[0534](v2/0534/index.html)

Notify Clergy Code

[0535](v2/0535/index.html)

Signature Code

[0536](v2/0536/index.html)

Certificate Status

[0538](v2/0538/index.html)

Institution Relationship Type

[0540](v2/0540/index.html)

Inactive Reason Code

[0544](v2/0544/index.html)

Container Condition

[0547](v2/0547/index.html)

Jurisdictional Breadth

[0548](v2/0548/index.html)

Signatory's Relationship to Subject

[0550](v2/0550/index.html)

Body Parts

[0553](v2/0553/index.html)

Invoice Control Code

[0554](v2/0554/index.html)

Invoice Reason Codes

[0555](v2/0555/index.html)

Invoice Type

[0556](v2/0556/index.html)

Benefit Group

[0557](v2/0557/index.html)

Payee Type

[0558](v2/0558/index.html)

Payee Relationship to Invoice

[0559](v2/0559/index.html)

Product/Service Status

[0561](v2/0561/index.html)

Product/Services Clarification Codes

[0562](v2/0562/index.html)

Processing Consideration Codes

[0564](v2/0564/index.html)

Adjustment Category Code

[0565](v2/0565/index.html)

Provider Adjustment Reason Code

[0566](v2/0566/index.html)

Blood Unit Type

[0569](v2/0569/index.html)

Adjustment Action

[0570](v2/0570/index.html)

Payment Method Code

[0571](v2/0571/index.html)

Invoice Processing Results Status

[0572](v2/0572/index.html)

Tax status

[0615](v2/0615/index.html)

User Authentication Credential Type Code

[0616](v2/0616/index.html)

Address Expiration Reason

[0617](v2/0617/index.html)

Address Usage

[0618](v2/0618/index.html)

Protection Code

[0625](v2/0625/index.html)

Item Status Codes

[0634](v2/0634/index.html)

Item Importance Codes

[0642](v2/0642/index.html)

Reorder Theory Codes

[0651](v2/0651/index.html)

Labor Calculation Type

[0653](v2/0653/index.html)

Date Format

[0657](v2/0657/index.html)

Device Type

[0659](v2/0659/index.html)

Lot Control

[0667](v2/0667/index.html)

Device Data State

[0669](v2/0669/index.html)

Load Status

[0682](v2/0682/index.html)

Device Status

[0702](v2/0702/index.html)

Cycle Type

[0717](v2/0717/index.html)

Access Restriction Value

[0719](v2/0719/index.html)

Access Restriction Reason Code

[0725](v2/0725/index.html)

Mood Codes

[0728](v2/0728/index.html)

CCL Value

[0731](v2/0731/index.html)

DRG Diagnosis Determination Status

[0734](v2/0734/index.html)

Grouper Status

[0739](v2/0739/index.html)

DRG Status Patient

[0742](v2/0742/index.html)

DRG Status Financial Calculation

[0749](v2/0749/index.html)

DRG Grouping Status

[0755](v2/0755/index.html)

Status Weight At Birth

[0757](v2/0757/index.html)

DRG Status Respiration Minutes

[0759](v2/0759/index.html)

Status Admission

[0761](v2/0761/index.html)

DRG Procedure Determination Status

[0763](v2/0763/index.html)

DRG Procedure Relevance

[0776](v2/0776/index.html)

Item Status

[0778](v2/0778/index.html)

Item Type

[0790](v2/0790/index.html)

Approving Regulatory Agency

[0793](v2/0793/index.html)

Ruling Act

[0806](v2/0806/index.html)

Sterilization Type

[0818](v2/0818/index.html)

Package

[0834](v2/0834/index.html)

MIME Types

[0868](v2/0868/index.html)

Telecommunication Expiration Reason

[0871](v2/0871/index.html)

Supply Risk Codes

[0881](v2/0881/index.html)

Role Executing Physician

[0882](v2/0882/index.html)

Medical Role Executing Physician

[0894](v2/0894/index.html)

Side of body

[0895](v2/0895/index.html)

Present On Admission (POA) Indicator

[0904](v2/0904/index.html)

Security Check Scheme

[0905](v2/0905/index.html)

Shipment Status

[0906](v2/0906/index.html)

ActPriority

[0907](v2/0907/index.html)

Confidentiality

[0909](v2/0909/index.html)

Patient Results Release Categorization Scheme

[0912](v2/0912/index.html)

Participation

[0914](v2/0914/index.html)

Root Cause

[0916](v2/0916/index.html)

Relevant Clinicial Information

[0917](v2/0917/index.html)

Bolus Type

[0918](v2/0918/index.html)

PCA Type

[0919](v2/0919/index.html)

Exclusive Test

[0920](v2/0920/index.html)

Preferred Specimen/Attribute Status

[0921](v2/0921/index.html)

Certification Type Code

[0922](v2/0922/index.html)

Certification Category Code

[0923](v2/0923/index.html)

Process Interruption

[0924](v2/0924/index.html)

Cumulative Dosage Limit UoM

[0925](v2/0925/index.html)

Phlebotomy Issue

[0926](v2/0926/index.html)

Phlebotomy Status

[0927](v2/0927/index.html)

Arm Stick

[0933](v2/0933/index.html)

Intended Procedure Type

[0935](v2/0935/index.html)

Process Interruption Reason

[4000](v2/4000/index.html)

Name/address representation

®© HL7.org 2011+. FHIR Release 4 (v4.0.0) generated on Thu, Dec 27, 2018. [QA Page](qa.html)  
Links: [Search ![](external.png)](http://hl7.org/fhir/search.cfm) | [Version History](history.html) | [Table of Contents](toc.html) | [Credits](credits.html) | [Compare to R3 ![](external.png)](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhir%2FSTU3%2Fterminologies-systems.html&doc2=http%3A%2F%2Fhl7.org%2Ffhir%2Fterminologies-systems.html) | [![CC0](cc0.png)](license.html) | [Propose a change ![](external.png)](http://hl7.org/fhir-issues) 

try { var currentTabIndex = sessionStorage.getItem('fhir-codesystem-tab-index'); } catch(exception){ } if (!currentTabIndex) currentTabIndex = '0'; $( '#tabs' ).tabs({ active: currentTabIndex, activate: function( event, ui ) { var active = $('.selector').tabs('option', 'active'); currentTabIndex = ui.newTab.index(); document.activeElement.blur(); try { sessionStorage.setItem('fhir-codesystem-tab-index', currentTabIndex); } catch(exception){ } } });