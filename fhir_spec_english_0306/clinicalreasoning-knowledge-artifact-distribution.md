\[%settitle Clinical Reasoning%\]
\[%file newnavbar%\]
|                                              |                                             |                                                                                       |
|----------------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------|
| Work Group [\[%wgt cds%\]](%5B%wg%20cds%%5D) | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process): [Trial Use](versions.html#std-process) |

<span id="knowledge-artifact-distribution"></span>
### Sharing Knowledge Artifacts

One of the primary use cases of the Clinical Reasoning Module is to enable the sharing and distribution of computable clinical knowledge artifacts:

![Knowledge Artifact Sharing](clinicalreasoning-knowledge-artifact-distribution.png)
The distribution use case involves enabling knowledge artifacts to be distributed as resources via a FHIR server. The search and read interactions defined by the FHIR infrastructure can be used for this purpose. The [Library](library.html), [ActivityDefinition](activitydefinition.html), [PlanDefinition](plandefinition.html), [Questionnaire](questionnaire.html), and [Measure](measure.html) resources can all be used to represent knowledge artifacts, and so define several search parameters specifically to enable searching based on the various attributes of a knowledge artifact. A FHIR service that supports at least searching and retrieval of these resources is then a basic Knowledge Artifact Repository. More advanced knowledge management capabilities such as change management, semantic indexing, and dependency tracking can all be provided on top of this basic infrastructure.

In particular, the `useContext` and `topic` elements are intended to provide both semantic and topical indexing functionality for use in knowledge repositories. For example, the following fragment illustrates the use of the `useContext` element to indicate semantic usage context for an example suicide risk order set:

      <coverage>
        <patientAgeGroup>
          <coding>
            <system value="http://snomed.info/sct"/>
            <code value="133936004"/>
            <display value="Adult"/>
          </coding>
        </patientAgeGroup>
        <clinicalFocus>
          <coding>
            <system value="http://snomed.info/sct"/>
            <code value="87512008"/>
            <display value="Mild major depression"/>
          </coding>
        </clinicalFocus>
        <clinicalFocus>
          <coding>
            <system value="http://snomed.info/sct"/>
            <code value="394687007"/>
            <display value="Low suicide risk"/>
          </coding>
        </clinicalFocus>
        <targetUser>
          <coding>
            <system value="http://snomed.info/sct"/>
            <code value="309343006"/>
            <display value="Physician"/>
          </coding>
        </targetUser>
        <clinicalVenue>
          <coding>
            <system value="http://snomed.info/sct"/>
            <code value="440655000"/>
            <display value="Outpatient environment"/>
          </coding>
        </clinicalVenue>
      </coverage>

The `useContext` element can contain any number of characteristics that define the particular context of use for the artifact. Note that the base resource does not communicate the intended semantics when multiple useContext elements are present. To accomplish this, a core extension is defined, [usagecontext-group](extension-usagecontext-group.html). All use contexts within a group apply, while groups of use contexts indicate that any group applies.

In addition, the `useContext` element is intended to convey *prescriptive* semantics about the appropriate context of use for an artifact, while the `topic` element is intended to convey *descriptive* semantics suitable for indexing and searching using the `topic` search parameter.

The FHIR search interaction specifies that search results are returned in a Bundle, and the entries in that bundle allow a score to be specified, consistent with the Decision Support Service (DSS) relevance result. Note that the DSS score range is 1 to 100, while the FHIR score range is 0..1.

The algorithm for determining relevance is not prescribed by this guidance. When calculating relevance, implementations are encouraged to take advantage of the metadata represented within the artifact to help users understand the relevance of the returned artifacts to their search criteria.

To reduce the size of returned results and ensure efficient searching and retrieval, the Bundle returned SHOULD consist only of resources of the requested type. Dependencies of the resources returned SHOULD NOT be included unless specifically referenced by [including](search.html#include) the resources using the `_include` and `_revinclude` parameters.

Support for two different distribution use cases can be provided using the basic GET interaction:

-   Summary - Using the `_summary` parameter, the resources returned represent only the basic information and metadata about each matching artifact.
-   Full - Using the `_include` and `_revinclude` search parameters to include related resources in the result.

The following table lists the search criteria elements defined by the Decision Support Service (DSS) standard along with their appropriate representation in FHIR:

| DSS Search Criteria                           | FHIR Equivalent                                                              |
|-----------------------------------------------|------------------------------------------------------------------------------|
| Maximum Results                               | \_count global search parameter                                              |
| Minimum Score                                 | KnowledgeArtifact.minScore search parameter                                  |
| Knowledge Artifact Trait                      | Knowledge search parameters (identifier, topic, title, description, version) |
| Knowledge Artifact Status                     | KnowledgeArtifact.status search parameter                                    |
| Evaluation Result Semantics                   | Not Implemented                                                              |
| Data Requirements                             | Not Implemented                                                              |
| Relationships to specific Knowledge Artifacts | Not Implemented                                                              |

Support for exclusion criteria as described in the DSS is provided by the :not search parameter modifier of FHIR.

Implementing at least the FHIR search and get interactions for the clinical reasoning resources (Library, ActivityDefinition, PlanDefinition, and Measure) is then a basic implementation of a Knowledge Artifact Repository. For example, the following GET retrieves all measures that reference a specific value set:

    GET [base]/ValueSet/zika-affected-areas?_revinclude=Library:depends-on&_revinclude:recurse=Measure:depends-on

More sophisticated management functionality including semantic indexing, change management, and dependency tracking can be provided on top of this basic functionality using the same resource structures.

\[%file newfooter%\]
