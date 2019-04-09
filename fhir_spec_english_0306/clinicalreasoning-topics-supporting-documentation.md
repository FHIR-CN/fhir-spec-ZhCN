\[%settitle Clinical Reasoning%\]
\[%file newnavbar%\]
|                                              |                                             |                                                                                       |
|----------------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------|
| Work Group [\[%wgt cds%\]](%5B%wg%20cds%%5D) | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process): [Trial Use](versions.html#std-process) |

<span id="supporting-documentation"></span>
### Supporting Documentation

There are many kinds of supporting documentation that can be provided with clinical quality improvement artifacts, from detailed documentation, to references to the guidelines from which artifacts are derived, to grades and scores indicating quality of evidence or the strength of a recommendation.

The `relatedArtifact` element present on the Clinical Reasoning Module artifacts allows supporting documentation to be provided, either in the form of a reference to a resource, such as a DocumentReference, or as a reference to external content as an Attachment.

This same mechanism can be used to attach supporting documentation to the `actionDefinition` elements of a PlanDefinition, allowing supporting documentation for specific steps in a rule or protocol, as well as to the `action` elements of a RequestGroup to provide supporting documentation for individual recommendations as part of the result of a decision support evaluation.

    <documentation>
      <type value="justification"/>
      <document>
        <extension url="http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence">
          <valueCodeableConcept>
            <coding>
              <system value="http://terminology.hl7.org/CodeSystem/evidence-quality"/>
              <code value="high"/>
            </coding>
            <text value="High Quality"/>
          </valueCodeableConcept>
        </extension>
        <contentType value="text/html"/>
        <url value="http://psychiatryonline.org/pb/assets/raw/sitewide/practice_guidelines/guidelines/mdd.pdf"/>
        <title value="Practice Guideline for the Treatment of Patients with Major Depressive Disorder"/>
      </document>
    </documentation>

In all these cases, the qualityOfEvidence and strengthOfRecommendation extensions can be used to grade the information being provided. For example, the qualityOfEvidence extension can be attached to a DocumentReference to indicate a rating for the quality of the evidence represented in the document. Similarly, a strengthOfRecommendation extension can be attached to the action element of a RequestGroup to indicate the strength of the recommendation being made.

These extensions are bound to example valuesets based on the [GRADE](http://www.gradeworkinggroup.org/) rating systems for quality of evidence and strength of recommendation. Other rating systems could be used by defining the appropriate valuesets and profiles to make use of them.

\[%file newfooter%\]
