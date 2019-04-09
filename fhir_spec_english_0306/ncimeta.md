\[%settitle Using the NCI Metathesaurus with FHIR%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Using the NCI Metathesaurus with FHIR
-------------------------------------

|                                                  |                                             |                                                                                      |
|--------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt vocab%\]](%5B%wg%20vocab%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

### Summary

|                   |                                                                                                                            |
|-------------------|----------------------------------------------------------------------------------------------------------------------------|
| Source            | NCI Metathesaurus [the NCI Center for Biomedical Informatics and Information Technology (CBIIT)](http://cbiit.nci.nih.gov) |
| System            | The URI <http://ncimeta.nci.nih.gov> identifies the NCI Metathesaurus                                                      |
| Version           | There is no version or versioning associated with the NCI metathesaurus                                                    |
| Code              | The Concept Unique Identifier (CUI) is used for the code value for a Metathesaurus concept                                 |
| Display           | The name should be used as the display for English usage (e.g. "*Aerosol Dose Form*" for CUI C1112870)                     |
| Inactive          | Todo: Describe how it is determined which concepts are inactive                                                            |
| Subsumption       | No Subsumption relationships are defined for the NCI Metathesaurus                                                         |
| Filter Properties | None are described yet                                                                                                     |

### Version Issues

There are no staged releases of the NCI metathesaurus, so there is no versioning policy.

### Copyright/License Issues

The NCI metathesaurus is in the public domain, so there are no copyright notices needed in value sets that refer to NCI metathesaurus concepts, and there are no licensing requirements limiting use of NCI metathesaurus concepts in instances or systems.

### MCI Metathesaurus MySQL Database

Like [RxNorm](rxnorm.html), the RRF files that are the distributed source of the NCI Metathesaurus can be used to populate a MySQL database that contains the data. This page provides SQL statements that describe how to implement the features of the NCI Metathesaurus correctly against this database. They are provided only for implementer convenience, and do not imply that any particular approach must be used in implementations. (Note: for consistency, the RxNorm table and column names are used and the CUIs are 1 character longer, so the scripts must be updated).

For example, the correct display name for a CUI is

      select STR from rxnconso where RXCUI = :code and SAB = 'RXNORM' and TTY <> 'SY'

. <span id="filters"></span>
### NCI metathesaurus Filter Properties

This section documents the property filters that can be used with the RxNorm code system in value set composition statements.

The base SQL statement for returning a list of CUIs that conform to these filters is:

      select RXCUI from RXNCONSO where SAB = 'RXNORM' and TTY <> 'SY' 

#### Semantic Type

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Allows for selection of a set of CUIs based on their Semantic Type</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>STY</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>= / in</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>[column:]value</td>
</tr>
<tr class="odd">
<td>Comments</td>
<td>If a column is not specified, the default is TUI</td>
</tr>
<tr class="even">
<td>SQL</td>
<td><pre><code>and RXCUI in (select RXCUI from RXNSTY where [:column] = :value)</code></pre></td>
</tr>
</tbody>
</table>

#### Source

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Allows for selection of the set of concepts that have mappings to a particular RxNorm source</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>SAB</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>= / in</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>Values from the SAB table (e.g. select RSAB from RXNsab)</td>
</tr>
<tr class="odd">
<td>SQL</td>
<td><pre><code>and RXCUI in (select RXCUI from RXNconso where SAB = :value)</code></pre></td>
</tr>
</tbody>
</table>

#### Term Type

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Allows for selection of a concept based on its designated type</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>TTY</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>= / in</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>TTY values from the RxNorm Concept table (e.g. select distinct TTY from rxnconso)</td>
</tr>
<tr class="odd">
<td>SQL</td>
<td><pre><code>and TTY = :value</code></pre></td>
</tr>
</tbody>
</table>

#### Relationship

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Allows for selection of a concept based on its relationships</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>[REL]</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>= / in</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>CUI:[RXCUI] or AUI:[RXAUI] must be a valid CUI or AUI. Note that a CUI does not need to have a SAB=RXNORM entry to be used here</td>
</tr>
<tr class="odd">
<td>Comments</td>
<td>[REL] (:rel) is one of AQ, CHD, PAR, QB, RB, RN, RO, RQ, SIB or SY</td>
</tr>
<tr class="even">
<td>SQL</td>
<td>for CUI:
<pre><code>and (RXCUI in (select RXCUI from rxnconso where RXCUI in (select RXCUI1 from rxnrel where REL = :rel and RXCUI2 = :value))</code></pre>
for AUI:
<pre><code>and (RXCUI in (select RXCUI from rxnconso where RXAUI in (select RXAUI1 from rxnrel where REL = :rel and RXAUI2 = :value))</code></pre></td>
</tr>
</tbody>
</table>

#### Relationship Type

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Allows for selection of a concept based on the type of its relationships</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>[RELA]</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>= / in</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>CUI:[RXCUI] or AUI:[RXAUI] must be a valid CUI or AUI. Note that a CUI does not need to have a SAB=RXNORM entry to be used here</td>
</tr>
<tr class="odd">
<td>Comments</td>
<td>[RELA] (:rela) is one of the relationship types listed in the NCI file &quot;Relationships_Help_Page.txt&quot; - the current list (nearly 1000 types) is at the end of the page</td>
</tr>
<tr class="even">
<td>SQL</td>
<td>for CUI:
<pre><code>and (RXCUI in (select RXCUI from rxnconso where RXCUI in (select RXCUI1 from rxnrel where RELA = :rel and RXCUI2 = :value))</code></pre>
for AUI:
<pre><code>and (RXCUI in (select RXCUI from rxnconso where RXAUI in (select RXAUI1 from rxnrel where RELA = :rel and RXAUI2 = :value))</code></pre></td>
</tr>
</tbody>
</table>

### Implicit Value Sets

This section needs investigation

### Current NCI Metathesaurus relationship types

-   3\_UTR\_of
-   5\_UTR\_of
-   Abnormal\_Cell\_Affected\_By\_Chemical\_Or\_Drug
-   Abnormality\_Associated\_With\_Allele
-   Abstract\_of
-   access\_device\_used\_by
-   access\_of
-   action\_of
-   active\_ingredient\_of
-   active\_metabolites\_of
-   Activity\_Of\_Allele
-   adheres\_to
-   adjacent\_to
-   afferent\_to
-   agent\_in
-   alias\_of
-   Allele\_Absent\_From\_Wild-type\_Chromosomal\_Location
-   Allele\_Has\_Abnormality
-   Allele\_Has\_Activity
-   Allele\_In\_Chromosomal\_Location
-   Allele\_of
-   Allele\_Plays\_Altered\_Role\_In\_Process
-   Allele\_Plays\_Role\_In\_Metabolism\_Of\_Chemical\_Or\_Drug
-   allelic\_variant\_of
-   Amino\_Acid\_Variant\_of
-   analyzed\_by
-   analyzes
-   Anatomic\_Structure\_Has\_Location
-   Anatomic\_Structure\_Is\_Physical\_Part\_Of
-   anatomical\_site
-   Anatomy\_Originated\_From\_Biological\_Process
-   Aneuploidy\_Addition\_of
-   Aneuploidy\_Deletion\_of
-   anterior\_to
-   application\_of
-   Arm\_Location\_of
-   Arm\_of
-   arterial\_supply\_of
-   articulates\_with
-   associated\_disease
-   associated\_finding\_of
-   associated\_genetic\_condition
-   associated\_morphology\_of
-   associated\_procedure\_of
-   associated\_with
-   Associated\_With\_Malfunction\_Of\_Gene\_Product
-   attaches\_to
-   attributed\_constitutional\_part\_of
-   attributed\_continuous\_with
-   attributed\_part\_of
-   attributed\_regional\_part\_of
-   Author\_of
-   Band\_Location\_of
-   Band\_of
-   bearer\_of
-   Biological\_Process\_Has\_Associated\_Location
-   Biological\_Process\_Has\_Initiator\_Chemical\_Or\_Drug
-   Biological\_Process\_Has\_Initiator\_Process
-   Biological\_Process\_Has\_Result\_Anatomy
-   Biological\_Process\_Has\_Result\_Biological\_Process
-   Biological\_Process\_Has\_Result\_Chemical\_Or\_Drug
-   Biological\_Process\_Involves\_Chemical\_Or\_Drug
-   Biological\_Process\_Involves\_Gene\_Product
-   Biological\_Process\_Is\_Part\_Of\_Process
-   Biological\_Process\_Results\_From\_Biological\_Process
-   Biomarker\_Type\_Includes\_Gene
-   Biomarker\_Type\_Includes\_Gene\_Product
-   blood\_supply\_of
-   bounded\_by
-   bounds
-   branch\_of
-   branch\_part\_of
-   causative\_agent\_of
-   cause\_of
-   cell\_connecting\_part\_of
-   cell\_shape\_of
-   cell\_surface\_specialization\_of
-   Cell\_Type\_Is\_Associated\_With\_EO\_Disease
-   Cell\_Type\_Or\_Tissue\_Affected\_By\_Chemical\_Or\_Drug
-   Centromere\_of
-   CH3\_Status\_of
-   Chemical\_Or\_Drug\_Affects\_Abnormal\_Cell
-   Chemical\_Or\_Drug\_Affects\_Cell\_Type\_Or\_Tissue
-   Chemical\_Or\_Drug\_Affects\_Gene\_Product
-   Chemical\_Or\_Drug\_Has\_Mechanism\_Of\_Action
-   Chemical\_Or\_Drug\_Has\_Physiologic\_Effect
-   Chemical\_Or\_Drug\_Initiates\_Biological\_Process
-   Chemical\_Or\_Drug\_Is\_Metabolized\_By\_Enzyme
-   Chemical\_Or\_Drug\_Is\_Product\_Of\_Biological\_Process
-   Chemical\_Or\_Drug\_Metabolism\_Is\_Associated\_With\_Allele
-   Chemical\_Or\_Drug\_Plays\_Role\_In\_Biological\_Process
-   chemical\_structure\_of
-   Chemotherapy\_Regimen\_Has\_Component
-   Chromosomal\_Location\_of
-   Chromosomal\_Location\_Of\_Allele
-   Chromosomal\_Location\_of\_Wild-type\_Gene
-   Chromosomal\_Structural\_Variant
-   Chromosome\_Involved\_In\_Cytogenetic\_Abnormality
-   Chromosome\_Mapped\_To\_Disease
-   class\_code\_classified\_by
-   classified\_as
-   classifies
-   classifies\_class\_code
-   clinical\_course\_of
-   common\_name\_of
-   Completely\_Excised\_Anatomy\_Has\_Procedure
-   Completely\_Excised\_Anatomy\_May\_Have\_Procedure
-   Complex\_Has\_Physical\_Part
-   component\_of
-   Concept\_In\_Subset
-   conceptual\_part\_of
-   conjugate\_component\_of
-   consider
-   consider\_from
-   consists\_of
-   Constituent\_Amino\_Acid\_of
-   Constituent\_Element\_of
-   Constituent\_Protein\_of
-   Constituent\_Variant\_of
-   constitutes
-   constitutional\_part\_of
-   contained\_in
-   contains
-   context\_binding\_of
-   continuation\_branch\_of
-   continuous\_with
-   continuous\_with\_distally
-   continuous\_with\_proximally
-   contraindicated\_with\_disease
-   contraindicating\_class\_of
-   contraindicating\_mechanism\_of\_action\_of
-   contraindicating\_physiologic\_effect\_of
-   Cytogenetic\_Abnormality\_Involves\_Chromosome
-   Data\_Element\_Of
-   definitional\_manifestation\_of
-   degree\_of
-   Deleted\_Region\_End\_Band
-   Deleted\_Region\_Start\_Band
-   denoted\_by
-   denotes
-   dependent\_of
-   derivatized\_to
-   derives\_from
-   determines\_parameter\_for
-   determines\_property
-   develops\_from
-   device\_used\_by
-   diagnosed\_by
-   diagnoses
-   direct\_device\_of
-   direct\_morphology\_of
-   direct\_procedure\_site\_of
-   direct\_substance\_of
-   Disease\_Excludes\_Abnormal\_Cell
-   Disease\_Excludes\_Cytogenetic\_Abnormality
-   Disease\_Excludes\_Finding
-   Disease\_Excludes\_Molecular\_Abnormality
-   Disease\_Excludes\_Normal\_Cell\_Origin
-   Disease\_Excludes\_Normal\_Tissue\_Origin
-   Disease\_Excludes\_Primary\_Anatomic\_Site
-   Disease\_Has\_Abnormal\_Cell
-   Disease\_Has\_Accepted\_Treatment\_With\_Regimen
-   Disease\_Has\_Associated\_Anatomic\_Site
-   Disease\_Has\_Associated\_Disease
-   Disease\_Has\_Associated\_Gene
-   Disease\_Has\_Cytogenetic\_Abnormality
-   Disease\_Has\_Finding
-   Disease\_Has\_Metastatic\_Anatomic\_Site
-   Disease\_Has\_Molecular\_Abnormality
-   Disease\_Has\_Normal\_Cell\_Origin
-   Disease\_Has\_Normal\_Tissue\_Origin
-   Disease\_Has\_Primary\_Anatomic\_Site
-   Disease\_Is\_Grade
-   Disease\_Is\_Marked\_By\_Gene
-   Disease\_Is\_Stage
-   Disease\_Mapped\_To\_Chromosome
-   Disease\_Mapped\_To\_Gene
-   Disease\_May\_Have\_Abnormal\_Cell
-   Disease\_May\_Have\_Associated\_Disease
-   Disease\_May\_Have\_Cytogenetic\_Abnormality
-   Disease\_May\_Have\_Finding
-   Disease\_May\_Have\_Molecular\_Abnormality
-   Disease\_May\_Have\_Normal\_Cell\_Origin
-   Disease\_Pathogenesis\_Involves\_Gene
-   disease\_with\_contraindication
-   distal\_to
-   DOI\_of
-   dose\_form\_of
-   doseformgroup\_of
-   drains\_into
-   drug\_contraindicated\_for
-   due\_to
-   Duplicated\_Region\_End\_Band
-   Duplicated\_Region\_Start\_Band
-   effect\_may\_be\_inhibited\_by
-   Effect\_of
-   efferent\_to
-   encapsulated\_component\_of
-   Encoded\_by
-   Encodes
-   Endogenous\_Product\_Related\_To
-   energy\_used\_by
-   entrapment\_site\_of
-   entrapped\_component\_of
-   entry\_version\_of
-   Enzyme\_Metabolizes\_Chemical\_Or\_Drug
-   EO\_Anatomy\_Is\_Associated\_With\_EO\_Disease
-   EO\_Disease\_Has\_Associated\_Cell\_Type
-   EO\_Disease\_Has\_Associated\_EO\_Anatomy
-   EO\_Disease\_Has\_Property\_Or\_Attribute
-   EO\_Disease\_Maps\_To\_Human\_Disease
-   epithelial\_cell\_shape\_of
-   evaluation\_of
-   Excised\_Anatomy\_Has\_Procedure
-   Excised\_Anatomy\_May\_Have\_Procedure
-   exhibited\_by
-   exhibits
-   Exon\_of
-   expanded\_form\_of
-   external\_to
-   fascicular\_architecture\_of
-   Feature\_of
-   finding\_context\_of
-   finding\_informer\_of
-   finding\_method\_of
-   finding\_site\_of
-   focus\_of
-   form\_of
-   function\_of
-   Gene\_Associated\_With\_Disease
-   Gene\_Encodes\_Gene\_Product
-   Gene\_Found\_In\_Organism
-   Gene\_Has\_Abnormality
-   Gene\_Has\_Physical\_Location
-   Gene\_In\_Chromosomal\_Location
-   Gene\_Involved\_In\_Molecular\_Abnormality
-   Gene\_Involved\_In\_Pathogenesis\_Of\_Disease
-   Gene\_Is\_Biomarker\_Of
-   Gene\_Is\_Biomarker\_Type
-   Gene\_Is\_Element\_In\_Pathway
-   Gene\_Location\_of
-   Gene\_Mapped\_To\_Disease
-   Gene\_Mutant\_Encodes\_Gene\_Product\_Sequence\_Variation
-   Gene\_of
-   Gene\_Plays\_Role\_In\_Process
-   Gene\_Product\_Affected\_By\_Chemical\_Or\_Drug
-   Gene\_Product\_Encoded\_By\_Gene
-   Gene\_Product\_Expressed\_In\_Tissue
-   Gene\_Product\_Has\_Abnormality
-   Gene\_Product\_Has\_Associated\_Anatomy
-   Gene\_Product\_Has\_Biochemical\_Function
-   Gene\_Product\_Has\_Chemical\_Classification
-   Gene\_Product\_Has\_Organism\_Source
-   Gene\_Product\_Has\_Structural\_Domain\_Or\_Motif
-   Gene\_Product\_Is\_Biomarker\_Of
-   Gene\_Product\_Is\_Biomarker\_Type
-   Gene\_Product\_Is\_Element\_In\_Pathway
-   Gene\_Product\_Is\_Physical\_Part\_Of
-   Gene\_Product\_Malfunction\_Associated\_With\_Disease
-   Gene\_Product\_Plays\_Role\_In\_Biological\_Process
-   Gene\_Product\_Sequence\_Variation\_Encoded\_By\_Gene\_Mutant
-   Genomic\_Mutation\_Of
-   germ\_origin\_of
-   gives\_rise\_to
-   Has\_3\_UTR
-   Has\_5\_UTR
-   has\_Abstract
-   has\_access
-   has\_action
-   has\_active\_ingredient
-   has\_active\_metabolites
-   has\_additive
-   has\_adherent
-   has\_affiliation
-   has\_agent
-   has\_alias
-   Has\_Allele
-   has\_allelic\_variant
-   Has\_Amino\_Acid\_Variant
-   Has\_Aneuploidy\_Addition
-   Has\_Aneuploidy\_Deletion
-   has\_application
-   Has\_Arm
-   Has\_Arm\_Location
-   has\_arterial\_supply
-   has\_associated\_finding
-   has\_associated\_morphology
-   has\_associated\_procedure
-   has\_atmospheric\_component
-   has\_attributed\_constitutional\_part
-   has\_attributed\_part
-   has\_attributed\_regional\_part
-   has\_Author
-   Has\_Band
-   Has\_Band\_Location
-   has\_been\_treated
-   has\_bioassay\_data
-   has\_bioassays
-   has\_biomaterial\_characteristics
-   has\_blood\_supply
-   has\_branch
-   has\_branch\_part
-   has\_cancer\_site
-   has\_category
-   has\_causative\_agent
-   Has\_CDRH\_Parent
-   has\_cell\_connecting\_part
-   has\_cell\_shape
-   has\_cell\_surface\_specialization
-   Has\_Centromere
-   Has\_CH3\_Status
-   has\_chemical\_structure
-   has\_chromosomal\_aberration\_classification
-   Has\_Chromosomal\_Location
-   has\_citation
-   has\_clinical\_course
-   has\_clinical\_finding
-   has\_clinical\_record
-   has\_clinical\_treatment
-   has\_common\_name
-   has\_component
-   has\_component\_part
-   has\_compound
-   has\_conceptual\_part
-   has\_conjugated\_component\_part
-   Has\_Constituent\_Amino\_Acid
-   Has\_Constituent\_Element
-   Has\_Constituent\_Protein
-   Has\_Constituent\_Variant
-   has\_constitutional\_part
-   has\_context\_binding
-   has\_continuation\_branch
-   has\_contraindicated\_drug
-   has\_contraindicating\_class
-   has\_contraindicating\_mechanism\_of\_action
-   has\_contraindicating\_physiologic\_effect
-   has\_cubic\_volume
-   Has\_Data\_Element
-   has\_database
-   has\_database\_entry\_type
-   has\_datum\_value
-   has\_definitional\_manifestation
-   has\_degree
-   has\_dependent
-   has\_diameter
-   has\_direct\_device
-   has\_direct\_morphology
-   has\_direct\_procedure\_site
-   has\_direct\_substance
-   has\_disease\_location
-   has\_disease\_staging
-   has\_disease\_state
-   has\_DOI
-   has\_donor
-   has\_dose\_form
-   has\_doseformgroup
-   Has\_Effect
-   has\_encapsulated\_component\_part
-   has\_endpoint\_of\_measurement
-   has\_entrapment\_site
-   has\_entrapped\_component\_part
-   has\_entry\_version
-   has\_epithelial\_cell\_shape
-   has\_evaluation
-   Has\_Exon
-   has\_expanded\_form
-   has\_experiment\_design
-   has\_experiment\_design\_type
-   has\_experiment\_factors
-   has\_factor\_value
-   has\_factor\_value\_ontology\_entry
-   has\_family\_member
-   has\_family\_relationship
-   has\_fascicular\_architecture
-   Has\_Feature
-   has\_feature\_shape
-   has\_fiducials
-   has\_finding\_context
-   has\_finding\_informer
-   has\_finding\_method
-   has\_finding\_site
-   has\_focus
-   has\_form
-   Has\_Free\_Acid\_Or\_Base\_Form
-   has\_function
-   Has\_Gene
-   Has\_Gene\_Location
-   Has\_Gene\_Product\_Element
-   Has\_Genomic\_Mutation
-   has\_germ\_origin
-   has\_hardware
-   has\_height
-   has\_host
-   has\_host\_part
-   has\_identification\_type
-   has\_image\_format
-   has\_indicator
-   has\_indirect\_device
-   has\_indirect\_morphology
-   has\_indirect\_procedure\_site
-   has\_individual
-   has\_individual\_genetic\_characteristics
-   has\_ingredient
-   has\_ingredients
-   has\_inherent\_3d\_shape
-   has\_inheritance\_type
-   has\_initial\_time\_point
-   has\_innervation\_source
-   has\_input\_participant
-   has\_insertion
-   has\_integral\_part
-   has\_intent
-   has\_interpretation
-   Has\_Intron
-   has\_Journal\_Name
-   has\_laterality
-   has\_length
-   has\_location
-   has\_lymphatic\_drainage
-   has\_MAGE\_description
-   has\_manifestation
-   has\_manufacturer
-   has\_mapping\_qualifier
-   has\_mass
-   Has\_Maternal\_Uniparental\_Disomy
-   has\_maximum\_measurement
-   has\_measure
-   has\_measurement
-   has\_measurement\_method
-   has\_measurement\_type
-   has\_mechanism\_of\_action
-   has\_member
-   has\_method
-   Has\_Mode\_of\_Inheritance
-   has\_multi\_level\_category
-   has\_muscle\_attachment
-   has\_muscle\_insertion
-   has\_muscle\_origin
-   has\_nerve\_supply
-   Has\_NICHD\_Parent
-   has\_node\_value
-   has\_node\_value\_type
-   has\_nodes
-   Has\_Nucleotide\_Repeat
-   Has\_Nucleotide\_Variant
-   has\_nutrient\_component
-   has\_occurrence
-   has\_organism\_part
-   has\_orientation
-   has\_origin
-   has\_output\_participant
-   has\_owner
-   has\_owning\_affiliate
-   has\_owning\_section
-   has\_owning\_subsection
-   has\_parent\_organization
-   has\_part
-   has\_part\_modified
-   has\_participant
-   Has\_Paternal\_Uniparental\_Disomy
-   has\_pathological\_process
-   has\_performer
-   has\_permuted\_term
-   has\_pharmacokinetics
-   Has\_Physical\_Part\_Of\_Anatomic\_Structure
-   has\_physical\_state
-   has\_physiologic\_effect
-   has\_precise\_ingredient
-   has\_primary\_segmental\_supply
-   has\_print\_name
-   has\_prior\_disease\_state
-   has\_priority
-   has\_procedure\_context
-   has\_procedure\_device
-   has\_procedure\_morphology
-   has\_procedure\_site
-   has\_product\_component
-   has\_property
-   has\_property\_set
-   has\_protocol
-   has\_providers
-   has\_Publication\_Year
-   has\_PubMedID
-   has\_quality
-   has\_quantified\_form
-   has\_reason\_for\_deprecation
-   has\_recipient\_category
-   has\_regional\_part
-   has\_result
-   has\_revision\_status
-   has\_role
-   has\_route\_of\_administration
-   Has\_RT\_Product
-   Has\_Salt\_Form
-   has\_scale
-   has\_scale\_type
-   has\_secondary\_segmental\_supply
-   has\_segment
-   has\_segmental\_composition
-   has\_segmental\_supply
-   has\_severity
-   has\_shape
-   has\_single\_level\_category
-   has\_software
-   has\_sort\_version
-   has\_species
-   has\_specimen
-   has\_specimen\_procedure
-   has\_specimen\_source\_identity
-   has\_specimen\_source\_morphology
-   has\_specimen\_source\_topography
-   has\_specimen\_substance
-   has\_subject\_relationship\_context
-   Has\_Subset
-   has\_supported\_concept\_property
-   has\_supported\_concept\_relationship
-   has\_surgical\_approach
-   has\_systemic\_part
-   Has\_Target
-   Has\_Telomere
-   has\_temperature\_condition
-   has\_temporal\_context
-   has\_test\_result
-   has\_test\_type
-   has\_therapeutic\_class
-   has\_time\_period
-   has\_tradename
-   Has\_Transcript
-   has\_treatment
-   has\_tributary
-   has\_type
-   has\_unit
-   has\_unit\_of\_measure
-   has\_units
-   has\_URI
-   has\_venous\_drainage
-   has\_version
-   Human\_Disease\_Maps\_To\_EO\_Disease
-   Human\_Sex\_Determinant
-   icd\_dagger
-   identification\_type\_of
-   Imaged\_Anatomy\_Has\_Procedure
-   included\_in
-   includes
-   indicator\_of
-   indirect\_device\_of
-   indirect\_morphology\_of
-   indirect\_procedure\_site\_of
-   induced\_by
-   induces
-   inferior\_to
-   ingredient\_of
-   ingredients\_of
-   inherence\_for
-   inherent\_3d\_shape\_of
-   inheres\_in
-   inheritance\_type\_of
-   innervates
-   insertion\_of
-   instrument\_used\_by
-   intent\_of
-   internal\_to
-   interpretation\_of
-   interprets
-   Intron\_of
-   INV\_Chromosomal\_Structural\_Variant
-   INV\_Deleted\_Region\_End\_Band
-   INV\_Deleted\_Region\_Start\_Band
-   INV\_Duplicated\_Region\_End\_Band
-   INV\_Duplicated\_Region\_Start\_Band
-   INV\_Human\_Sex\_Determinant
-   INV\_Inverted\_Region\_End\_Band
-   INV\_Inverted\_Region\_End\_Exon
-   INV\_Inverted\_Region\_End\_Gene
-   INV\_Inverted\_Region\_End\_UTR
-   INV\_Inverted\_Region\_Start\_Band
-   INV\_Inverted\_Region\_Start\_Exon
-   INV\_Inverted\_Region\_Start\_Gene
-   INV\_Inverted\_Region\_Start\_Intron
-   INV\_Involves
-   INV\_Isochromosome\_Origin
-   INV\_Karyotype\_Class
-   INV\_Source\_Band
-   INV\_Source\_Exon
-   INV\_Source\_Gene
-   INV\_Source\_Intron
-   INV\_Target\_Band
-   INV\_Target\_Exon
-   INV\_Target\_Gene
-   INV\_Target\_Intron
-   inverse\_has\_additive
-   inverse\_has\_affiliation
-   inverse\_has\_atmospheric\_component
-   inverse\_has\_been\_treated
-   inverse\_has\_bioassay\_data
-   inverse\_has\_bioassays
-   inverse\_has\_biomaterial\_characteristics
-   inverse\_has\_cancer\_site
-   inverse\_has\_category
-   inverse\_has\_chromosomal\_aberration\_classification
-   inverse\_has\_citation
-   inverse\_has\_clinical\_finding
-   inverse\_has\_clinical\_record
-   inverse\_has\_clinical\_treatment
-   inverse\_has\_compound
-   inverse\_has\_cubic\_volume
-   inverse\_has\_database
-   inverse\_has\_database\_entry\_type
-   inverse\_has\_diameter
-   inverse\_has\_disease\_location
-   inverse\_has\_disease\_staging
-   inverse\_has\_disease\_state
-   inverse\_has\_donor
-   inverse\_has\_experiment\_design
-   inverse\_has\_experiment\_design\_type
-   inverse\_has\_experiment\_factors
-   inverse\_has\_factor\_value
-   inverse\_has\_factor\_value\_ontology\_entry
-   inverse\_has\_family\_member
-   inverse\_has\_family\_relationship
-   inverse\_has\_feature\_shape
-   inverse\_has\_fiducials
-   inverse\_has\_hardware
-   inverse\_has\_height
-   inverse\_has\_host
-   inverse\_has\_host\_part
-   inverse\_has\_image\_format
-   inverse\_has\_individual
-   inverse\_has\_individual\_genetic\_characteristics
-   inverse\_has\_initial\_time\_point
-   inverse\_has\_length
-   inverse\_has\_MAGE\_description
-   inverse\_has\_manufacturer
-   inverse\_has\_mass
-   inverse\_has\_maximum\_measurement
-   inverse\_has\_measurement\_type
-   inverse\_has\_node\_value
-   inverse\_has\_node\_value\_type
-   inverse\_has\_nodes
-   inverse\_has\_nutrient\_component
-   inverse\_has\_organism\_part
-   inverse\_has\_owner
-   inverse\_has\_parent\_organization
-   inverse\_has\_part\_modified
-   inverse\_has\_performer
-   inverse\_has\_prior\_disease\_state
-   inverse\_has\_property\_set
-   inverse\_has\_protocol
-   inverse\_has\_providers
-   inverse\_has\_reason\_for\_deprecation
-   inverse\_has\_software
-   inverse\_has\_species
-   inverse\_has\_test\_result
-   inverse\_has\_test\_type
-   inverse\_has\_treatment
-   inverse\_has\_type
-   inverse\_has\_units
-   inverse\_has\_URI
-   inverse\_isa
-   inverse\_was\_tested\_for
-   Inverted\_Region\_End\_Band
-   Inverted\_Region\_End\_Exon
-   Inverted\_Region\_End\_Gene
-   Inverted\_Region\_End\_UTR
-   Inverted\_Region\_Start\_Band
-   Inverted\_Region\_Start\_Exon
-   Inverted\_Region\_Start\_Gene
-   Inverted\_Region\_Start\_Intron
-   Involves
-   Is\_Abnormal\_Cell\_Of\_Disease
-   Is\_Abnormality\_Of\_Gene
-   Is\_Abnormality\_Of\_Gene\_Product
-   is\_anatomical\_site\_of
-   Is\_Associated\_Anatomic\_Site\_Of
-   Is\_Associated\_Anatomy\_Of\_Gene\_Product
-   Is\_Associated\_Disease\_Of
-   Is\_Biochemical\_Function\_Of\_Gene\_Product
-   is\_borne\_by
-   Is\_Chemical\_Classification\_Of\_Gene\_Product
-   Is\_Chromosomal\_Location\_Of\_Gene
-   Is\_Component\_Of\_Chemotherapy\_Regimen
-   Is\_Cytogenetic\_Abnormality\_Of\_Disease
-   is\_datum\_of
-   Is\_Finding\_Of\_Disease
-   Is\_Grade\_Of\_Disease
-   is\_integral\_part\_of
-   is\_interpreted\_by
-   Is\_Location\_Of
-   Is\_Location\_Of\_Anatomic\_Structure
-   Is\_Location\_Of\_Biological\_Process
-   Is\_Marked\_By\_Gene\_Product
-   is\_measurement\_endpoint\_of
-   Is\_Mechanism\_Of\_Action\_Of\_Chemical\_Or\_Drug
-   Is\_Metastatic\_Anatomic\_Site\_Of\_Disease
-   Is\_Molecular\_Abnormality\_Of\_Disease
-   Is\_Normal\_Cell\_Origin\_Of\_Disease
-   Is\_Normal\_Tissue\_Origin\_Of\_Disease
-   Is\_Not\_Abnormal\_Cell\_Of\_Disease
-   Is\_Not\_Cytogenetic\_Abnormality\_Of\_Disease
-   Is\_Not\_Finding\_Of\_Disease
-   Is\_Not\_Molecular\_Abnormality\_Of\_Disease
-   Is\_Not\_Normal\_Cell\_Origin\_Of\_Disease
-   Is\_Not\_Normal\_Tissue\_Origin\_Of\_Disease
-   Is\_Not\_Primary\_Anatomic\_Site\_Of\_Disease
-   Is\_Organism\_Source\_Of\_Gene\_Product
-   Is\_Physical\_Location\_Of\_Gene
-   Is\_Physiologic\_Effect\_Of\_Chemical\_Or\_Drug
-   Is\_Primary\_Anatomic\_Site\_Of\_Disease
-   Is\_Property\_Or\_Attribute\_Of\_EO\_Disease
-   Is\_Qualified\_By
-   is\_realized\_in
-   Is\_Related\_To\_Endogenous\_Product
-   Is\_Stage\_Of\_Disease
-   Is\_Structural\_Domain\_Or\_Motif\_Of\_Gene\_Product
-   Is\_Target\_Of\_Agent
-   is\_temperature\_of
-   is\_time\_period\_of
-   isa
-   Isochromosome\_Origin
-   Journal\_Name\_of
-   Karyotype\_Class
-   Kind\_Is\_Domain\_Of
-   Kind\_Is\_Range\_Of
-   larger\_than
-   laterality\_of
-   location\_of
-   lymphatic\_drainage\_of
-   manifestation\_of
-   mapped\_from
-   mapped\_to
-   mapping\_qualifier\_of
-   Maternal\_Uniparental\_Disomy\_of
-   May\_Be\_Abnormal\_Cell\_Of\_Disease
-   May\_Be\_Associated\_Disease\_Of\_Disease
-   may\_be\_caused\_by
-   May\_Be\_Cytogenetic\_Abnormality\_Of\_Disease
-   may\_be\_diagnosed\_by
-   May\_Be\_Finding\_Of\_Disease
-   May\_Be\_Molecular\_Abnormality\_Of\_Disease
-   May\_Be\_Normal\_Cell\_Origin\_Of\_Disease
-   may\_be\_prevented\_by
-   may\_be\_qualified\_by
-   may\_be\_treated\_by
-   may\_cause
-   may\_diagnose
-   may\_inhibit\_effect\_of
-   may\_prevent
-   may\_qualify
-   may\_treat
-   measure\_of
-   measured\_by
-   measurement\_method\_of
-   measurement\_of
-   measures
-   mechanism\_of\_action\_of
-   member\_of
-   metabolic\_site\_of
-   method\_of
-   modality\_is\_related\_to
-   Mode\_of\_Inheritance
-   Molecular\_Abnormality\_Involves\_Gene
-   mth\_british\_form\_of
-   mth\_expanded\_form\_of
-   mth\_has\_british\_form
-   mth\_has\_expanded\_form
-   mth\_has\_plain\_text\_form
-   mth\_has\_xml\_form
-   mth\_plain\_text\_form\_of
-   mth\_xml\_form\_of
-   muscle\_attachment\_of
-   muscle\_insertion\_of
-   muscle\_origin\_of
-   Negative\_Protein\_Expression
-   Negatively\_Expressed\_By
-   negatively\_regulated\_by
-   negatively\_regulates
-   nerve\_supply\_of
-   Nucleotide\_Repeat\_of
-   Nucleotide\_Variant\_of
-   occurs\_after
-   occurs\_before
-   occurs\_in
-   Organism\_Has\_Gene
-   orientation\_of
-   origin\_of
-   owning\_affiliate\_of
-   owning\_section\_of
-   owning\_subsection\_of
-   parameter\_determined\_from
-   Parent\_Is\_CDRH
-   Parent\_Is\_NICHD
-   part\_component\_of
-   part\_of
-   Partially\_Excised\_Anatomy\_Has\_Procedure
-   Partially\_Excised\_Anatomy\_May\_Have\_Procedure
-   participates\_in
-   Paternal\_Uniparental\_Disomy\_of
-   pathological\_process\_of
-   Pathway\_Has\_Gene\_Element
-   permuted\_term\_of
-   pharmacokinetics\_of
-   physical\_state\_of
-   physiologic\_effect\_of
-   Positive\_Protein\_Expression
-   Positively\_Expressed\_By
-   positively\_regulated\_by
-   positively\_regulates
-   posterior\_to
-   precise\_ingredient\_of
-   primary\_segmental\_supply\_of
-   print\_name\_of
-   priority\_of
-   procedure\_context\_of
-   procedure\_device\_of
-   Procedure\_Has\_Completely\_Excised\_Anatomy
-   Procedure\_Has\_Excised\_Anatomy
-   Procedure\_Has\_Imaged\_Anatomy
-   Procedure\_Has\_Partially\_Excised\_Anatomy
-   Procedure\_Has\_Target\_Anatomy
-   Procedure\_May\_Have\_Completely\_Excised\_Anatomy
-   Procedure\_May\_Have\_Excised\_Anatomy
-   Procedure\_May\_Have\_Partially\_Excised\_Anatomy
-   procedure\_morphology\_of
-   procedure\_site\_of
-   Process\_Altered\_By\_Allele
-   Process\_Includes\_Biological\_Process
-   Process\_Initiates\_Biological\_Process
-   Process\_Involves\_Gene
-   product\_component\_of
-   projects\_from
-   projects\_to
-   projects\_towards
-   property\_determined\_from
-   property\_of
-   proximal\_to
-   Publication\_Year\_of
-   PubMedID\_of
-   Qualifier\_Applies\_To
-   quality\_of
-   quantified\_form\_of
-   reagent\_used\_in
-   realizes
-   receives\_attachment
-   receives\_drainage\_from
-   receives\_input\_from
-   receives\_projection\_from
-   recipient\_category\_of
-   reformulated\_to
-   reformulation\_of
-   Regimen\_Has\_Accepted\_Use\_For\_Disease
-   regional\_part\_of
-   regulated\_by
-   regulates
-   related\_modality
-   related\_to
-   replaced\_by
-   replaces
-   responsive\_to\_stimulus
-   result\_of
-   result\_of\_regulation
-   results\_in
-   revision\_status\_of
-   Role\_Has\_Domain
-   Role\_Has\_Parent
-   Role\_Has\_Range
-   Role\_Is\_Parent\_Of
-   role\_of
-   route\_of\_administration\_of
-   RT\_Product\_of
-   scale\_of
-   scale\_type\_of
-   secondary\_segmental\_supply\_of
-   see
-   see\_from
-   Segment\_of
-   segmental\_composition\_of
-   segmental\_supply\_of
-   sends\_output\_to
-   severity\_of
-   shape\_of
-   sib\_in\_branch\_of
-   sib\_in\_isa
-   sib\_in\_part\_of
-   sib\_in\_tributary\_of
-   site\_of\_metabolism
-   smaller\_than
-   sort\_version\_of
-   Source\_Band
-   Source\_Exon
-   Source\_Gene
-   Source\_Intron
-   specifies\_value
-   specimen\_of
-   specimen\_procedure\_of
-   specimen\_source\_identity\_of
-   specimen\_source\_morphology\_of
-   specimen\_source\_topography\_of
-   specimen\_substance\_of
-   stimulus\_causes\_response
-   subject\_relationship\_context\_of
-   Subset\_Includes\_Concept
-   Subset\_of
-   substance\_used\_by
-   Subsumed\_By
-   Subsumes
-   superior\_to
-   supported\_concept\_property\_in
-   supported\_concept\_relationship\_in
-   surgical\_approach\_of
-   surrounded\_by
-   surrounds
-   systemic\_part\_of
-   Target\_Anatomy\_Has\_Procedure
-   Target\_Band
-   Target\_Exon
-   Target\_Gene
-   Target\_Intron
-   technique\_used\_for
-   Telomere\_of
-   temporal\_context\_of
-   therapeutic\_class\_of
-   Tissue\_Is\_Expression\_Site\_Of\_Gene\_Product
-   tradename\_of
-   Transcript\_of
-   treated\_by
-   treats
-   tributary\_of
-   unit\_of
-   unit\_of\_measurement\_of
-   use
-   used\_by
-   used\_for
-   uses
-   uses\_access\_device
-   uses\_device
-   uses\_energy
-   uses\_instrument
-   uses\_reagent
-   uses\_substance
-   uses\_technique
-   value\_specified\_at
-   venous\_drainage\_of
-   version\_of
-   was\_tested\_for

\[%file newfooter%\]
