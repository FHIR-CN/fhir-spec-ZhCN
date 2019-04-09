\[%settitle Clinical Reasoning%\]
\[%file newnavbar%\]
|                                              |                                             |                                                                                       |
|----------------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------|
| Work Group [\[%wgt cqi%\]](%5B%wg%20cqi%%5D) | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process): [Trial Use](versions.html#std-process) |

<span id="quality-reporting"></span>
### Quality Reporting

<span id="representing-quality-measures"></span>
#### Representing Quality Measures

The [Measure](measure.html) resource builds on the general approach to representing knowledge artifacts and adds the metadata and structure information that is specific to quality measures:

![Measure Structure](clinicalreasoning-measure-structure.png)
Quality measures follow a generally hierarchical structure that defines:

-   **Population Groups:** Groups of population criteria that define a particular area of measurement. A given measure may include any number of population groups, each with different criteria for the various measure components.

    -   **Populations:** Within each population group, a measure defines criteria appropriate to the type of measure being calculated. Each population type identifies a specific component of the calculation such as the *numerator*, *denominator*, and *initial population*.
    -   **Stratifiers:** Additional criteria used to calculate the measure along different dimensions within the population such as age or gender. A measure may define any number of stratifiers for each population group.

-   **Supplemental Data:** Additional information that should be included with the calculated results of the measure such as individual age or gender. A measure may define any number of supplemental data elements.

Population Quality Measures are often focused on evaluating from a patient perspective, but this is not always the case. The `subject` element of the Measure indicates the intended subjects of a measure. If no `subject` is specified, the measure subject is Patient, but Practitioners, Organizations, Locations, or even Devices can also be the subject of a measure.

<span id="measure-metadata"></span>
##### Measure Metadata

The following table provides a requirements mapping from the content of an [eMeasure](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=97) to the elements defined in the [Measure](measure.html) resource:

| eMeasure                          | Cardinality | Element                         | Notes                                                                        |
|-----------------------------------|-------------|---------------------------------|------------------------------------------------------------------------------|
| Title                             | 0..1        | Measure.title                   |                                                                              |
| Identifier                        | 0..1        | Measure.identifier              | identifier type code as http://hl7.org/fhir/cqi/ecqm/Measure/Identifier/cms  |
| Version Number                    | 0..1        | Measure.version                 |                                                                              |
| NQF Number                        | 0..1        | Measure.identifier              | identifier type code as http://hl7.org/fhir/cqi/ecqm/Measure/Identifier/nqf  |
| GUID                              | 0..1        | Measure.identifier              | identifier type code as http://hl7.org/fhir/cqi/ecqm/Measure/Identifier/guid |
| Measure Steward                   | 0..1        | Measure.publisher               |                                                                              |
| Measure Developer                 | 0..1        | Measure.contributor             | type.code of author                                                          |
| Endorser                          | 0..1        | Measure.contributor             | type.code of endorser                                                        |
| Description                       | 0..1        | Measure.description             |                                                                              |
| Copyright                         | 0..1        | Measure.copyright               |                                                                              |
| Reference                         | 0..\*       | Measure.relatedArtifact         | type.code of citation                                                        |
| Disclaimer                        | 0..1        | disclaimer                      | String (containing Markdown)                                                 |
| Measure Scoring                   | 0..1        | scoring                         | Code, e.g. proportion, CV                                                    |
| Measure Type                      | 0..1        | type                            | Code, e.g. process, outcome                                                  |
| Risk Adjustment                   | 0..1        | riskAdjustment                  | String                                                                       |
| Rate Aggregation                  | 0..1        | rateAggregation                 | String                                                                       |
| Rationale                         | 0..1        | rationale                       | String (containing Markdown)                                                 |
| Clinical Recommendation Statement | 0..1        | clinicalRecommendationStatement | String (containing Markdown)                                                 |
| Improvement Notation              | 0..1        | improvementNotation             | String, e.g. Higher score indicates better quality                           |
| Definition                        | 0..1        | definition                      | String (containing Markdown)                                                 |
| Guidance                          | 0..1        | guidance                        | String (containing Markdown)                                                 |

<span id="measure-logic"></span>
##### Measure Logic

As with other knowledge artifacts, logic is included by referencing a [Library](library.html) resource. Although the base resource allows for the measure to reference any number of libraries, for simplicity of managing sharing, measures should reference only one Library, the *primary measure library*, and that library should contain all the named expressions required to define the measure structure.

Note that this approach does not preclude sharing of logic between measures, it only requires that that sharing be explicitly done as dependencies within the referenced libraries, rather than allowing a measure to reference multiple libraries directly.

<span id="specifying-population-criteria"></span>
###### Specifying Population Criteria

A measure can specify various types of populations, depending on the type of measure scoring being used. The following table shows which population criteria types are required (R), optional (O), or not permitted (NP) for proportion, ratio, and continuous variable measures. This table is adapted from Table 1 from the [HQMF Release 1 Normative](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=97) specification, and Table 2.1 from the [QDM-based HQMF IG](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=346).

| MeasureType         | Initial Population | Denominator | Denominator Exclusion | Denominator Exception | Numerator | Numerator Exclusion | Measure Population | Measure Population Exclusion |
|---------------------|--------------------|-------------|-----------------------|-----------------------|-----------|---------------------|--------------------|------------------------------|
| Proportion          | R                  | R           | O                     | O                     | R         | O                   | NP                 | NP                           |
| Ratio               | R                  | R           | O                     | NP                    | R         | O                   | NP                 | NP                           |
| Continuous Variable | R                  | NP          | NP                    | NP                    | NP        | NP                  | R                  | O                            |
| Cohort              | R                  | NP          | NP                    | NP                    | NP        | NP                  | NP                 | NP                           |

The Measure resource then identifies specific named expressions within the referenced primary measure library that define the criteria for each population. For example, the following fragment illustrates the population criteria definitions for the CMS146 measure example:

    <group id="CMS146-group-1">
      <population>
        <code>
          <coding>
            <code value="initial-population"/>
          </coding>
        </code>
        <criteria value="CMS146.InInitialPopulation"/>
      </population>
      <population>
        <code>
          <coding>
            <code value="numerator"/>
          </coding>
        </code>
        <criteria value="CMS146.InNumerator"/>
      </population>
      <population>
        <code>
          <coding>
            <code value="denominator"/>
          </coding>
        </code>
        <criteria value="CMS146.InDenominator"/>
      </population>
      <population>
        <code>
          <coding>
            <code value="denominator-exclusion"/>
          </coding>
        </code>
        <criteria value="CMS146.InDenominatorExclusions"/>
      </population>
    </group>

<span id="multiple-populations"></span>
###### Measures with Multiple Populations

Quality measures often specify multiple rates, with different population crtiteria for each rate. This is different than stratifying the scores for the same population. For quality measures that contain multiple rates, the Measure will contain multiple group elements, where the criteria are specified once for each group. The `id` attribute of the `group` element is used to uniquely identify the group within the measure, as well as within the quality reporting results.

<span id="continuous-variable-measures"></span>
###### Continuous Variable Measures

Continuous variable measures may include a measure observation section. This section defines variables (for example, time from check-in to time of antibiotic administration) used to measure particular aspects of a process or outcome. Note that measure observations are not population criteria in that they do not filter the population in any way. Rather, measure observations are data elements, to be collected from each subject that satisfies the population criteria, which are used to calculate the results for each member of the population.

<span id="stratification-and-supplemental-data"></span>
##### Stratification and Supplemental Data

Stratifiers and supplemental data are specified using the `stratifier` and `supplementalData` elements of the [Measure](measure.html) resource. Stratification criteria are specified either as a reference to a CQL named expression within a Library (e.g. `CMS146.AgesUpToNine`), or as FHIR resource paths (e.g. `Patient.gender`). When the stratification criteria is an expression, the stratification will yield as many result groups as the expression returns. For example, if the expression returns a boolean, then there would be two stratification groups: true and false. When the stratification criteria is a FHIR resource path, there will be as many stratification groups as possible values for the resource path. For example, specifying Patient.gender will yield four stratification groups since FHIR has four gender codes: male, female, other, and unknown.

Supplemental data elements are also specified using FHIR resource paths, however, supplemental data only results in groups in the summary measure report. For individual-level reports, supplemental data elements are reported as Observation resources and included by reference in the evaluateResource for the individual-level report.

The CMS146 example measure illustrates the stratification and supplemental data described above:

-   **Measure:** [measure-cms146-example](measure-cms146-example.html)
-   **MeasureReport:** [measurereport-cms146-cat3-example](measurereport-cms146-cat3-example.html)

<span id="Data Criteria"></span>
###### Data Criteria

The data criteria for the primary library defines the data of interest in the measure as a set of [DataRequirement](metadatatypes.html#DataRequirement) elements. Each data requirement identifies specific types of data along with constraints that the data must meet. For example, one data requirement for [CMS 146](library-cms146-example.xml.html) identifies FHIR Condition resources that represent confirmed diagnoses of acute pharyngitis. Other data requirements for this measure include Encounters, DiagnosticReports and other FHIR resources representing specific data that is used to calculate the measure.

Specifying the data criteria in this way enables the following use cases:

-   Determining the set of data used by a particular eCQM.
-   Limited "scoop-and-filter" for creation of population reports.
-   Limited backwards compatibility with existing implementations of previous eCQM IGs.

Data criteria can be specified statically, or they can be *inferred* from the expressions referenced by the measure. The `$data-requirements` operation can be invoked to retrieve the aggregate data requirements for the measure. This approach has two advantages:

-   When the data requirements for the expression contain dynamic criteria (such as date ranges relative to today), the results returned are based on the evaluation request time.
-   When the expressions involve multiple libraries, rather than having to retrieve and deal with the requirements for each library, the $data-requirements operation can aggregate the requirements and return them as a single `module-definition` library.

<span id="invoking-measures"></span>
#### Invoking Measures

The Health Quality Measure Format (HQMF) defines the electronic representation of an eMeasure but does not define a mechanism for invoking an eMeasure. FHIR defines both the representation of resources and a general mechanism for interacting with them via the [OperationDefinition](operationdefinition.html) resource. Prior sections of this specification described the Measure representation of an eMeasure, this section describes the `$evaluate-measure` operation that is used to invoke an eMeasure and obtain the results.

<span id="operation-definition"></span>
##### Operation Definition

FHIR defines a standard set of common interactions that include read, update, delete and search. In addition, FHIR defines a standard set of extended operations that can be performed on resources, resource types and system wide. The standard operations include profile validation, concept translation and value set expansion. FHIR also supports custom operations via the FHIR [OperationDefinition](operationdefinition.html) resource. This resource offers a means to create a formal definition of a custom operation that can be performed on a FHIR server. For the purposes of measure evaluation we define a new custom operation with a code of [$evaluate-measure](operation-measure-evaluate-measure.html).

The $evaluate-measure operation has the following properties:

-   **Idempotent** The operation may be invoked multiple times without side effects. Note that the result of invoking the operation may vary over time if clinical data used in the eMeasure changes between invocations. Note also that the parameters supplied with the operation invocation can affect the results.
-   **InvocationTarget** The operation can be invoked on instances of the MeasureArtifact resource that represent a particular eMeasure or on the type of the resource with a parameter that specifies the eMeasure to calculate.

The effect of invoking the $evaluate-measure operation is to calculate the quality measure according to the supplied parameters and to return a [MeasureReport](measurereport.html) resource through which the results will be made available. Note that because measure calculation might not be instantaneous, the MeasureReport resource provides a mechanism to handle long running calculations.

<span id="operation-examples"></span>
##### Examples

    GET [base]/Measure/$evaluate-measure?measure=CMS146&periodStart=2014&periodEnd=2014

    GET [base]/Measure/CMS146/$evaluate-measure?periodStart=2014&periodEnd=2014

The above examples show how to obtain the results of evaluating the eMeasure with id "CMS146" for all patients over a measurement period that consists of all of 2014. Some items of note:

-   the first variant evaluates the operation on `[base]/Measure` which is the type of resource and specifies the eMeasure to evaluate using a parameter
-   the second variant evaluates the operation on `[base]/Measure/CMS146` which is the Measure instance that represents that measure so there's no need to also include a reference to the eMeasure in the operation parameters
-   the `HTTP GET` method is used since the `$evaluate-measure` operation is idempotent
-   `[base]` is used as a shortcut for the base URI of the FHIR server
-   the period start and end values are both specified to a granularity of a year, the description of the parameters above explains why this results in a measure period that spans the entire year

The next example demonstrates how to obtain the results of evaluating the eMeasure with id "CMS146" for the patient with id "124" over a measurement period that consists of the first three months of 2014.

    GET [base]/Basic/CMS146/$evaluate-measure?subject=124&periodStart=2014-01&periodEnd=2014-03

<span id="measure-report"></span>
#### Measure Report

When eCQMs are represented with the Health Quality Measure Format (HQMF), a single HQMF document represents both the measure itself and the request. Meanwhile, the responses are represented as Quality Reporting Document Architecture (QRDA) documents. QRDA documents come in two flavors: [Category I](https://confluence.hl7.org/display/CQIWC/Quality+Reporting+Document+Architecture+Category+1) for individual patient reports and [Category III](https://confluence.hl7.org/display/CQIWC/Quality+Reporting+Document+Architecture+Category+3) for population reports.

When eCQMs are represented with FHIR resources, the measure is represented as a [Measure](measure.html) resource, and the request is an `HTTP GET` conforming to the [OperationDefinition](operationdefinition.html) described above. Meanwhile, the responses are represented as [MeasureReport](measurereport.html) resources. Like QRDA, the MeasureReport allows for Category I (individual), Category II (subject-list), and Category III (population) reports.

<span id="reporting-population-data"></span>
##### Reporting Population Data

A [MeasureReport](measurereport.html) will contain one group of data for each group specified in the corresponding [Measure](measure.html), consisting of a set of population elements, one for each criteria defined in each group.

![Population Measure Report](clinicalreasoning-measure-report-population.png)
In addition, each group will contain stratifiers with a value stratum for each value defined by the stratifier criteria, for each criteria defined in the measure.

<span id="reporting-individual-data"></span>
##### Reporting Individual Data

When using a MeasureReport resource to represent the results of an individual calculation, the MeasureReport SHALL have a type-code of "individual" and SHALL have a reference to the subject of the report. In addition, the result SHOULD include a reference to a Bundle containing the subject-specific resources that were used to calculate the result.

![Individual Measure Report](clinicalreasoning-measure-report-individual.png)
See the MeasureReport [examples](measurereport-examples.html) for a detailed illustration of how the data elements involved in the calculation of the measure are communicated through the `evaluatedResources` element.

<span id="reporting-subject-list-data"></span>
##### Subject-List Reports

When using a MeasureReport resource to represent a subject-list, the MeasureReport SHALL have a type-code of "subject-list" and if a subject reference is present, it SHALL be a reference to a Group. In addition, the resource SHALL include for each population a reference to a List resource that references individual level MeasureReport resources for the same measure, one for each subject in the overall population.

![Subject-List Measure Report](clinicalreasoning-measure-report-patient-list.png)
For example, the initial population report, in addition to providing the count, provides a reference to a List resource that identifies each of the subjects that make up that population. For each of those subjects, the List will contain a reference to an individual-level report for that subject. Note that for very large populations, implementations MAY decide to limit the size of the result, either by returning an error indicating the request is too costly, or by returning a partial result, so long as there is an indication that the report is only a partial response. In addition, we are actively seeking feedback on how best to approach evaluation of quality measures on large populations, including the use of [bulk data](formats.html#bulk) formats.

In addition, implementations may return a MeasureReport with a status of pending, indicating that the evaluation is in progress. In this case, clients can request the MeasureReport resource until the status changes to complete.

<span id="references"></span>
#### References

1.  <span id="bibitem-cql"></span> [HL7 Standard: Clinical Quality Language Specification, Release 1 (Standard for Trial Use, Release 2).](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=400)
2.  <span id="bibitem-qicore"></span> [Quality Improvement Core (QICore) FHIR Implementation Guide.](http://hl7.org/fhir/us/qicore)
3.  <span id="bibitem-hqmf"></span> [Representation of the Health Quality Measures Format (eMeasure) Release 1 Normative.](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=97)
4.  <span id="bibitem-qdmhqmf1"></span> [HL7 Version 3 Implementation Guide: Quality Data Model (QDM)-based Health Quality Measure Format (HQMF), R1 - US Realm, Volume 1 (Draft Standard for Trial Use)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=346)
5.  <span id="bibitem-qdmhqmf2"></span> [HL7 Version 3 Implementation Guide: Quality Data Model (QDM)-based Health Quality Measure Format (HQMF), R1 - US Realm, Volume 2 (Draft Standard for Trial Use)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=346)
6.  <span id="bibitem-cqlhqmf"></span> [HL7 Version 3 Implementation Guide: Clinical Quality Language (CQL)-based Health Quality Measure Format (HQMF), Release 1 - US Realm (Standard for Trial Use)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=405)
7.  <span id="bibitem-qdm"></span> [Quality Data Model, Version 4.2](https://ecqi.healthit.gov/system/files/qdm_4_2.pdf)
8.  <span id="bibitem-qrda"></span> [HL7 CDA R2 Implementation Guide: Quality Reporting Document Architecture - Category I (QRDA I) DSTU Release 3 (US Realm)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=35)

\[%file newfooter%\]
