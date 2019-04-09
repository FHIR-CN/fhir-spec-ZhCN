\[%settitle Clinical Reasoning%\]
\[%file newnavbar%\]
|                                              |                                             |                                                                                       |
|----------------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------|
| Work Group [\[%wgt cds%\]](%5B%wg%20cds%%5D) | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process): [Trial Use](versions.html#std-process) |

<span id="knowledge-artifact-representation"></span>
### Representing Knowledge Artifacts

For the purposes of the Clinical Reasoning module, a Knowledge Artifact is a structured, computable, and shareable representation of clinical knowledge. A comprehensive definition of clinical knowledge is beyond the scope of this module, but we effectively mean any knowledge relevant to improving patient care. For example, "Patients with diabetes should have regular comprehensive foot examinations to identify risk factors predictive of ulcers and amputations" is a statement of clinical knowledge. A knowledge artifact would then be some representation that can be used to integrate that knowledge into existing healthcare delivery systems.

There are any number of ways to accomplish this integration of clinical knowledge, ranging from direct implementation within an existing EHR system to the use of high-level representation and reasoning systems that can adapt clinical workflow to provide cognitive support to clinicians. Within this module, we aim to provide a representation that is both flexible enough to represent a broad range of knowledge artifacts, but simple and specific enough to enable automated integration of the content.

<span id="knowledge-artifact-components"></span>
#### Knowledge Artifact Components

To achieve these goals, we define several components that are present in a broad variety of knowledge artifacts:

| Component                                   | Description                                                                                                                                 |
|---------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| [Artifact Identity](#artifact-identity)     | Information used to uniquely identify an artifact.                                                                                          |
| [Metadata](#metadata)                       | Information about the knowledge artifact such as lifecycle status, publisher, documentation, and supporting evidence.                       |
| [Action Definitions](#action-definitions)   | Descriptions of actions to be taken as part of the implementation of knowledge                                                              |
| [Trigger Definitions](#trigger-definitions) | Information about what events should trigger the use of the artifact                                                                        |
| [Expression Logic](#expression-logic)       | Expressions used to represent reasoning such as whether or not some criteria is satisfied, or calculation of new values from existing ones. |

<span id="artifact-identity"></span>
##### Artifact Identity

As with any FHIR resource, the instance identity is specified by the [id](resource-definitions.html#Resource.id) element. Knowledge artifacts also have a [canonical](resource.html#canonical) identifier, specified by the `url` element that serves as the globally unique, "canonical URL" for the artifact that always identifes the resource. The canonical URL is a special kind of logical (or business) identifier, and artifacts may define any number of additional logical identifiers based on the content or behavior they provide, such as the CMS or NQF identifiers for measure content. These logical identifiers can be provided in the `identifier` element defined on each resource.

In addition to identity, the `version` element can be used to specify a content version for the artifact. In general, version numbers are required for published, non-experimental artifacts, and optional otherwise.

The following fragment shows the use of the logical identifier and version elements:

    <url value="http://motivemi.com/artifacts/PlanDefinition/low-suicide-risk-order-set"/>
      <identifier>
      <use value="official"/>
      <system value="http://motivemi.com/artifacts"/>
      <value value="mmi:low-suicide-risk-order-set"/>
    </identifier>
    <version value="1.0.0"/>

When using the `identifier` element to provide the Entity Identifier for a service module consistent with the Decision Support Service (DSS) specification, the following mappings apply:

| **DSS Model Element** | **FHIR Element**  | **Example**             |
|-----------------------|-------------------|-------------------------|
| businessId            | Identifier.value  | hemoglobin-control-rule |
| scopingEntityUri      | Identifier.system | com.clinica             |
| version               | Artifact.version  | 1.0.0                   |

<span id="metadata"></span>
##### Metadata

Each of the various knowledge artifact resources defines a set of elements that provide consistent representation of metadata such as title, description, and usage, repository indexing and publication information, as well as additional supporting documentation and evidence:

| Element                                                             | Description                                                                                                                                                                                  |
|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [name](library-definitions.html#Library.name)                       | A machine-friendly name for the artifact [example](plandefinition-example.xml.html)                                                                                                          |
| [title](library-definitions.html#Library.title)                     | A user-friendly title for the artifact [example](plandefinition-example.xml.html)                                                                                                            |
| [status](library-definitions.html#Library.status)                   | The lifecycle status for the artifact (draft, active, or inactive) [example](plandefinition-example.xml.html)                                                                                |
| [experimental](library-definitions.html#Library.experimental)       | Whether the artifact is for testing purposes, rather than production usage [example](plandefinition-example-kdn5-simplified.xml.html)                                                        |
| [description](library-definitions.html#Library.description)         | A natural language description of the artifact [example](plandefinition-example.xml.html)                                                                                                    |
| [purpose](library-definitions.html#Library.purpose)                 | Describes the purpose of the artifact [example](plandefinition-example.xml.html)                                                                                                             |
| [usage](library-definitions.html#Library.usage)                     | Describes the clinical usage of the artifact [example](plandefinition-example.xml.html)                                                                                                      |
| [approvalDate](library-definitions.html#Library.approvalDate)       | The date when this artifact was approved by the publisher [example](plandefinition-example-kdn5-simplified.xml.html)                                                                         |
| [lastReviewDate](library-definitions.html#Library.lastReviewDate)   | The date this version of the artifact was last reviewed [example](plandefinition-example-kdn5-simplified.xml.html)                                                                           |
| [effectivePeriod](library-definitions.html#Library.effectivePeriod) | The effective date range for the artifact [example](plandefinition-example.xml.html)                                                                                                         |
| [useContext](library-definitions.html#Library.useContext)           | Describes the context of use for this artifact [example](plandefinition-example.xml.html)                                                                                                    |
| [topic](library-definitions.html#Library.topic)                     | Descriptional topics for the artifact [example](plandefinition-example.xml.html)                                                                                                             |
| [contributor](library-definitions.html#Library.contributor)         | A content contributor [example](plandefinition-example.xml.html)                                                                                                                             |
| [publisher](library-definitions.html#Library.publisher)             | The name of the publisher (either an organization or an individual) [example](plandefinition-example.xml.html)                                                                               |
| [contact](library-definitions.html#Library.contact)                 | Contact details for the publisher [example](plandefinition-example.xml.html)                                                                                                                 |
| [copyright](library-definitions.html#Library.copyright)             | Legal copyright description for the artifact [example](plandefinition-example-kdn5-simplified.xml.html)                                                                                      |
| [relatedArtifact](library-definitions.html#Library.relatedArtifact) | Related resources for the artifact, including additional documentation, supporting evidence, or knowledge management dependencies [example](plandefinition-example-kdn5-simplified.xml.html) |

<span id="documentation"></span>
###### Documentation

General documentation elements, including description, purpose, and usage, provide immediately available documentation as part of the artifact. Additional documentation can be provided using the `relatedArtifact` element to link to more detailed information, supporting evidence, and to additional required artifacts as appropriate.

    <title value="Appropriate Testing for Children with Pharyngitis"/>
    <status value="active"/>
    <experimental value="true"/>
    <description value="Percentage of children 2-18 years of age who were diagnosed with pharyngitis, ordered an antibiotic and
        received a group A streptococcus (strep) test for the episode."/>
    <purpose value="The Infectious Diseases Society of America (IDSA) "recommends swabbing the throat and testing for GAS
        pharyngitis by rapid antigen detection test (RADT) and/or culture because the clinical features alone do not reliably discriminate
        between GAS and viral pharyngitis except when overt viral features like rhinorrhea, cough, oral ulcers, and/or hoarseness are present""/>
    <topic>
      <coding>
        <system value="http://loinc.org" />
        <code value="57024-2" />
      </coding>
    </topic>

For information on the `useContext` and `topic` elements, refer to the [Knowledge Artifact Distribution](clinicalreasoning-knowledge-artifact-distribution.html) section.

<span id="publication-information"></span>
###### Publication Information

The `status` element describes the lifecycle status of the artifact, indicating whether it is a *draft*, *active*, or *retired* artifact. This representation is consistent with the states described by the Quality Metadata Conceptual Model. The following table provides a mapping from the states defined here, to the states as defined in the Clinical Decision Support Knowledge Artifact Specification (CDS KAS), as well as the Decision Support Service (DSS) standard:

| **Experimental?** | **Status**  | **CDS KAS Mapping** | **DSS Mapping**    |
|-------------------|-------------|---------------------|--------------------|
| **true**          | **draft**   | Draft, InTest       | DRAFT, DEFINED     |
| **true**          | **active**  | InTest              | DEFINED            |
| **true**          | **retired** | Inactive            | REJECTED           |
| **false**         | **draft**   | Draft               | DRAFT              |
| **false**         | **active**  | Active              | APPROVED, PROMOTED |
| **false**         | **retired** | Inactive            | REJECTED, RETIRED  |

Note that the `experimental` element can be used independent of the lifecycle status, allowing the full lifecycle of an artifact to be tested.

<span id="action-definitions"></span>
##### Action Definitions

Actions describe the "output" actions of the knowledge artifact. These actions may be in the form of messages (such as reminders), structured clinical acts (e.g., a laboratory test order) that can be implemented via clinical systems such as a computerized provider entry system or a documentation system, or they may create new events (e.g., declaration of a patient state such as failure of a treatment). Each action definition contains the following basic information:

|                            |                                                                                                                                                               |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Description                | Descriptive information such as identifier, label, title, and textEquivalent.                                                                                 |
| Documentation              | Supporting documentation, citations, or evidence in support of the action.                                                                                    |
| Related Action Definitions | Each action definition can specify relationships to other actions, allowing timings and offsets to be expressed.                                              |
| Trigger Definitions        | Triggering events for the action. See the section on trigger definitions below for more information.                                                          |
| Condition                  | An optional condition specifying whether the action definition applies.                                                                                       |
| Timing                     | A description of when the action definition should occur.                                                                                                     |
| Behavior                   | Various behaviors that communicate the intended semantics of groups and actions (e.g. selection behavior, grouping behavior, etc.)                            |
| Type                       | The type of action to be performed (e.g. create, update, delete, etc.)                                                                                        |
| Activity Definition        | A description of what activity is to be performed. To enable reuse and modularity, ActivityDefinition resources may be reused by multiple action definitions. |
| Dynamic Values             | Expressions that can be used to specify dynamic values for the resulting activity.                                                                            |
| Child Actions              | Each action may contain any number of child actions, allowing a hierarchy of actions to be described (for example, sections in an order set).                 |

The following fragment shows a simple referral creation action from an example order set for suicide risk assessment and management:

> **Note:** the provided examples can be used formally, but can also be informational. The intent of the structures is to enable communication of the behavior. For systems that support calculation, they would be formal, but for systems that don't support calculation, the resource should still provide enough information to communicate the behavior.

    <action>
      <textEquivalent value="Refer to outpatient mental health program for evaluation and treatment of mental health conditions now"/>
      <definition value="#referralToMentalHealthCare"/>
      <dynamicValue>
        <path value="timing.event"/>
        <expression>
          <language value="text/cql"/>
          <expression value="Now()"/>
        </expression>
      </dynamicValue>
      <dynamicValue>
        <path value="specialty"/>
        <expression>
          <language value="text/cql"/>
          <expression value="Code '261QM0850X' from SuicideRiskLogic."NUCC Provider Taxonomy" display 'Adult Mental Health'"/>
        </expression>
      </dynamicValue>
      <dynamicValue>
        <path value="occurrenceDateTime"/>
        <expression>
          <language value="text/cql"/>
          <expression value="SuicideRiskLogic.ServiceRequestFulfillmentTime"/>
        </expression>
      </dynamicValue>
      <dynamicValue>
        <path value="subject"/>
        <expression>
          <language value="text/cql"/>
          <expression value="SuicideRiskLogic.Patient"/>
        </expression>
      </dynamicValue>
      <dynamicValue>
        <path value="requester.agent"/>
        <expression>
          <language value="text/cql"/>
          <expression value="SuicideRiskLogic.Practitioner"/>
        </expression>
      </dynamicValue>
      <dynamicValue>
        <path value="reasonCode"/>
        <expression>
          <language value="text/cql"/>
          <expression value="SuicideRiskLogic.RiskAssessmentScore"/>
        </expression>
      </dynamicValue>
      <dynamicValue>
        <path value="reasonReference"/>
        <expression>
          <language value="text/cql"/>
          <expression value="SuicideRiskLogic.RiskAssessment"/>
        </expression>
      </dynamicValue>
    </action>

The example describes how to create a `ServiceRequest` resource using information available from the context in which the order set is applied. The definition includes expressions for retrieving contextual information using the `dynamicValue` element of the `ActivityDefinition` resource. For more information on using expressions to provide dynamic values as part of a definition, refer to the [Using Expressions](clinicalreasoning-topics-using-expressions.html) topic in this module.

<span id="action-type"></span>
###### Action Type

Each action may specify the type of action to perform:

-   Create
-   Update
-   Remove
-   Fire Event

The Create, Update, and Remove actions indicate that particular resources should be created, updated, or removed, and the Fire Event action indicates that a particular named event should be triggered.

Note that this element is optional, and is used to indicate what type of action is to be taken with the associated activity definition. For example, an action that indicates `create` with an activity definition that defines a referral request means that the referral request should be realized and the resulting resource created (i.e. applied to the patient's record). An action that indicates `update` with an activity definition would indicate that an existing resource on the patient's record should be updated based on the new resource content.

<span id="trigger-definitions"></span>
###### Trigger Definitions

Each action may have any number of triggers associated to indicate what events should trigger the action to be taken. The following types of triggers may be defined:

-   Named Event
-   Periodic Event
-   Data Event

A named event is an event identified by the implementation environment. This type of event allows Event-Condition-Action (ECA) rules to be triggered by any event generated within the implementation environment. A periodic event occurs on a fixed or periodic schedule. And finally, a data event occurs in response to some data-related event in the integrated environment such as a record being added or updated.

For triggered PlanDefinitions, the event means the PlanDefinition apply process should be performed. How that actually happens within an implementation is not prescribed.

As examples, the following fragments illustrate the use of a named event, a scheduled event, and a data event as part of an ECA rule definition:

    <trigger>
      <type value="named-event"/>
      <name value="Admission"/>
    </trigger>

    <trigger>
      <type value="periodic"/>
      <timingDate>10/12/2015</timingDate>
    </trigger>

    <trigger>
      <type value="data-added"/>
      <data>
        <type value="Condition"/>
        <codeFilter>
          <path value="code"/>
          <valueSet value="urn:oid:2.16.840.1.113883.3.464.1003.111.12.1006"/>
        </codeFilter>
      </data>
    </trigger>

<span id="expression-logic"></span>
###### Expression Logic

Each action may have associated conditions that specify whether the action is applicable, or when it should be started and stopped. The `$apply` operation is used to apply a plan definition, and the parameters to apply are available as context to expressions within the plan definition, including the applicable condition and the dynamic value expressions.

For example, the following fragment shows the condition element of an action definition used in an ECA rule. The condition references the named expression "NoScreening":

    <condition>
      <kind value="applicability"/>
      <expression>
        <language value="text/cql"/>
        <expression value="NoScreening"/>
      </expression>
    </condition>

<span id="knowledge-artifact-resources"></span>
#### Knowledge Artifact Resources

The Clinical Reasoning module defines several resources, including Library, PlanDefinition, and Measure to represent each of the components described above. By combining these components in different ways, several different types of knowledge artifacts can be represented:

| Artifact Type                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Example                                                                                                                                                                         |
|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Library](#library)                                               | A general purpose container for clinical knowledge, potentially defined in non-FHIR structures. For example, a sharable package of clinical logic expressed in Clinical Quality Language.                                                                                                                                                                                                                                                                                                                        | Expressions that define the criteria that must be met to determine whether or not a patient has diabetes.                                                                       |
| [Event-Condition-Action (ECA) Rule](#event-condition-action-rule) | A decision support rule of the form `[on Event] if Condition then Action`, defining actions that should be taken whenever some condition is met in response to a particular event.                                                                                                                                                                                                                                                                                                                               | On a patient checking in to a clinic appointment, if the patient has diabetes and has not had a recent foot examination, place an unsigned order for a comprehensive foot exam. |
| [Order Set](#order-set)                                           | A pre-defined and approved group of orders related to a particular clinical condition (e.g., hypertension treatment and monitoring) or stage of care (e.g., hospital admission to Coronary Care Unit). Order sets are used within electronic health record systems as a checklist for physicians when treating a patient with a specific condition or in a specific context. An order set is a structured collection of orders presented to the physician in a computerized physician order entry system (CPOE). | The specific orders to be placed when a patient presents with diabetic ketoacidosis.                                                                                            |
| [Protocol](#protocol)                                             | A pre-defined procedural method for standardizing a set of activities. As examples, protocols can be used within laboratory settings to standardize handling of specimens for specific tests; standardize the treatment steps for a particular condition; or standardize the steps to be taken in a particular research trial.                                                                                                                                                                                   | The specific tasks that should be performed to provide effective treatment for a new diagnosis of diabetes.                                                                     |
| [Documentation Template](#documentation-template)                 | A structured form for recording information on a patient into a set of predefined data slots.                                                                                                                                                                                                                                                                                                                                                                                                                    | A form describing the information that should be gathered during a comprehensive diabetic foot exam.                                                                            |
| [Measure](#measure)                                               | A quantitative tool to assess the performance of an individual or organization with respect to a specified process or outcome via the measurement of actions, processes, or outcomes of clinical care. Quality measures are often derived from clinical guidelines and are designed to determine whether the appropriate care has been provided given a set of clinical criteria and an evidence base.                                                                                                           | Percentage of patients aged 18-75 years of age with diabetes who had a foot exam during the measurement period.                                                                 |

<span id="library"></span>
#### Library

The [Library](library.html) resource is a general purpose container for clinical knowledge that may be defined in non-FHIR representations. For example, a Clinical Quality Language expression library can be represented as a Library resource so that it can be referenced as part of other knowledge artifacts.

For example, the following fragment shows a Library that contains the CQL logic for Chlamydia Screening decision support:

<span id="defining-a-cql-library"></span>
    <Library>
      <id value="example"/>
      <identifier>
        <use value="official"/>
        <value value="ChalmydiaScreening_Common"/>
      </identifier>
      <version value="2.0.0"/>
      <title value="Chlamydia Screening Common Library"/>
      <status value="draft"/>
      <type>
        <coding>
          <code value="logic-library"/>
        </coding>
      </type>
      <date value="2015-07-22"/>
      <description value="Common Logic for adherence to Chlamydia Screening guidelines"/>
      <topic>
        <text value="Chlamydia Screening"/>
      </topic>
      <relatedArtifact>
        <type value="depends-on"/>
        <resource value="Library/library-quick-model-definition"/>
      </relatedArtifact>
      <dataRequirement>
        <type value="Condition"/>
        <codeFilter>
          <path value="code"/>
          <valueSet value="urn:oid:2.16.840.1.113883.3.464.1003.111.12.1006"/>
        </codeFilter>
      </dataRequirement>
      <content>
        <contentType value="text/cql"/>
        <url value="library-example-content.cql"/>
      </content>
    </Library>

<span id="event-condition-action-rule"></span>
#### Event-Condition-Action (ECA) Rule

An Event-Condition-Action (ECA) rule is an artifact with the general syntax "on event, if condition is true, then do action." The event triggers the invocation of the rule; the condition is a logical test that, if satisfied or evaluates "true", causes an action; while the action describes a set of activities to be performed. These actions may in turn cause further events to occur, which may in turn cause other ECA rules to fire.

Note that the "activity" to be performed may be to document a patient-specific assessment performed by a clinical decision support service (e.g. patient has a 37% chance of a heart attack in the next 5 years), not just recommendations/recommended actions. In this case, the action would be to "create" a RiskAssessment.

The [PlanDefinition](plandefinition.html) resource can be used to represent an ECA rule using the `action` element. A single, top-level `action` represents the overall rule, with the `trigger` element used to specify the triggering event(s), the `condition` element used to specify the applicable condition for the rule, and the `action` element describing the action to be performed.

For example, the following fragment illustrates a simple use of PlanDefinition to expose a Chlamydia Screening ECA rule:

    <PlanDefinition>
      <id value="chlamydia-screening-intervention"/>
      <identifier>
        <use value="official"/>
        <value value="ChlamydiaScreening_CDS_UsingCommon"/>
      </identifier>
      <version value="2.0.0"/>
      <title value="Chalmydia Screening CDS Example Using Common"/>
      <status value="draft"/>
      <date value="2015-07-22"/>
      <description value="Chlamydia Screening CDS Example Using Common"/>
      <topic>
        <text value="Chlamydia Screening"/>
      </topic>
      <library value="Library/example"/>
      <action>
        <title value="Patient has not had chlamydia screening within the recommended timeframe..."/>
        <condition>
          <kind value="applicability"/>
          <expression>
            <language value="text/cql"/>
            <expression value="NoScreening"/>
          </expression>
        </condition>
        <dynamicValue>
          <path value="$this"/>
          <expression>
            <language value="text/cql"/>
            <expression value="ChlamydiaScreeningRequest"/>
          </expression>
        </dynamicValue>
      </action>
    </PlanDefinition>

Note that the use of `$this`in the `path` element here indicates that the result of the expression is the entire result for the action, rather than providing the value for a specific element of the result. In other words, the `ChlamydiaScreeningRequest` expression will result in an entire ServiceRequest resource, which is the action to be performed.

The following is an example of a possible result when invoking the `$apply` operation on the above ECA Rule:

    <CarePlan>
      <id value="chlamydia-screening-intervention-cp"/>
      <contained>
        <RequestGroup>
          <id value="chlamydia-screening-intervention-rg"/>
          <contained>
            <ServiceRequest>
              <id value="chlamydia-screening-service-request"/>
              <status value="active"/>
              <intent value="order"/>
              <code>
                <coding>
                  <system value="http://snomed.info/sct"/>
                  <code value="412761009"/>
                  <display value="Urine screen for chlamydia (procedure)"/>
                </coding>
              </code>
              <subject>
                <reference value="Patient/example"/>
              </subject>
            </ServiceRequest>
          </contained>
          <status value="active"/>
          <intent value="order"/>
          <action>
            <type>
              <coding>
                <system value="http://terminology.hl7.org/CodeSystem/action-type"/>
                <code value="create"/>
              </coding>
            </type>
            <resource>
              <reference value="#chlamydia-screening-service-request"/>
            </resource>
          </action>
        </RequestGroup>
      </contained>
      <status value="active"/>
      <intent value="order"/>
      <subject>
        <reference value="Patient/example"/>
      </subject>
      <activity>
        <reference>
          <reference value="#chlamydia-screening-intervention-rg"/>
        </reference>
      <activity>
    </CarePlan>

<span id="order-set"></span>
#### Order Set

An order set is a pre-defined and approved group of orders related to a particular clinical context (e.g., hypertension treatment and monitoring) or stage of care (e.g., hospital admission to Coronary Care Unit) or a particular grouping (e.g. pediatrics, adult, males over 50, etc.). An order set is typically used as a checklist for clinicians when managing a patient with a specific context. It is a structured collection of orders relevant to that condition or context and presented to the clinician in a computerized provider order entry system (CPOE).

The [PlanDefinition](plandefinition.html) resource can represent an Order Set using action definitions to define the orderable items in the order set. The items in an order set are typically organized hierarchically, as a set of sections, sub-sections, etc., with the actions themselves at the very bottom of the structure. In the PlanDefinition resource, each section, and sub-section, as well as the individual items are all represented as action definitions. Each group and/or subgroup may have behavior indicators associated with it, e.g., the number of actions that can/should/must be selected from the group of actions.

For example, the following fragment illustrates the items in a suicide risk order set:

*Note that this example is a fragment of a larger example for the PlanDefinition resource, available [here](plandefinition-example.xml.html).*
    <!-- Suicide Risk Assessment and Outpatient Management -->
    <action>
      <title value="Suicide Risk Assessment and Outpatient Management"/>
      <action>
        <title value="Consults and Referrals"/>
        <groupingBehavior value="logical-group"/>
        <selectionBehavior value="any"/>
        <action>
          <textEquivalent value="Refer to outpatient mental health program for evaluation and treatment of mental health
           conditions now"/>
          <definition value="#referralToMentalHealthCare"/>
          <dynamicValue>...</dynamicValue>
        </action>
      </action>
      <action>
        <title value="Medications"/>
        <groupingBehavior value="logical-group"/>
        <selectionBehavior value="at-most-one"/>
        <action>
          <title value="First-Line Antidepressants"/>
            <documentation>
              <type value="citation"/>
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
          <groupingBehavior value="logical-group"/>
          <selectionBehavior value="at-most-one"/>
          <action>
            <title value="Selective Serotonin Reuptake Inhibitors (Choose a mazimum of one or document reasons for exception)"/>
            <documentation>
              <type value="citation"/>
              <document>
                <contentType value="text/html"/>
                <url value="http://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6daeb45c-451d-b135-bf8f-2d6dff4b6b01"/>
                <title value="National Library of Medicine. DailyMed website. CITALOPRAM- citalopram hydrobromide tablet, film coated."/>
              </document>
            </documentation>
            <groupingBehavior value="logical-group"/>
            <selectionBehavior value="at-most-one"/>
            <action>
              <textEquivalent value="citalopram 20 mg tablet 1 tablet oral 1 time daily now (30 table; 3 refills)"/>
              <definition value="#citalopramPrescription"/>
              <dynamicValue>...</dynamicValue>
            </action>
            <action>
              <textEquivalent value="escitalopram 10 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills)"/>
            </action>
            <action>
              <textEquivalent value="fluoxetine 20 mg capsule 1 capsule oral 1 time daily now (30 tablet; 3 refills)"/>
            </action>
            <action>
              <textEquivalent value="paroxetine 20 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills)"/>
            </action>
            <action>
              <textEquivalent value="sertraline 50 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills)"/>
            </action>
          </action>
          <action>
            <textEquivalent value="Dopamine Norepinephrine Reuptake Inhibitors (Choose a maximum of one or document reasons for exception)"/>
          </action>
          <action>
            <textEquivalent value="Serotonin Norepinephrine Reuptake Inhibitors (Choose a maximum of one or doument reasons for exception)"/>
          </action>
          <action>
            <textEquivalent value="Norepinephrine-Serotonin Modulators (Choose a maximum of one or document reasons for exception)"/>
          </action>
        </action>
      </action>
    </action>

In this example, the order set structure consists of:

    <!-- Suicide Risk Assessment and Outpatient Management -->
      <!-- Consults and Referrals -->
          <!-- Refer to outpatient mental health program for evaluation and treatment of mental health conditions now -->
      <!-- Medications -->
          <!-- First-Line Antidepressants -->
            <!-- Selective Serotonin Reuptake Inhibitors (Choose a maximum of one or document reasons for exception) -->
              <!-- citalopram 20 mg tablet 1 tablet oral 1 time daily now (30 table; 3 refills) -->
              <!-- escitalopram 10 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills) -->
              <!-- fluoxetine 20 mg capsule 1 capsule oral 1 time daily now (30 tablet; 3 refills) -->
              <!-- paroxetine 20 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills) -->
              <!-- sertraline 50 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills) -->
            <!-- Dopamine Norepinephrine Reuptake Inhibitors (Choose a maximum of one or document reasons for exception) -->
            <!-- Serotonin Norepinephrine Reuptake Inhibitors (Choose a maximum of one or doument reasons for exception) -->
            <!-- Norepinephrine-Serotonin Modulators (Choose a maximum of one or document reasons for exception) -->

Each group defines the selection and grouping behavior for the items in the group, as well as providing links to supporting documentation for the particular items in the order set.

<span id="protocol"></span>
#### Protocol

A protocol is a pre-defined procedural method for standardizing a set of activities. As examples, protocols can be used within laboratory settings to standardize handling of specimens for specific tests; standardize the treatment steps for a particular condition; or standardize the steps to be taken in a particular research trial.

The [PlanDefinition](plandefinition.html) resource can be used to represent a Protocol, using the action definitions to define the steps of the protocol and the relationships between them. Triggering events for each action, as well as applicable conditions can all be specified using the appropriate action elements within the PlanDefinition.

As a simple example, the following fragment shows a portion of a BMI Assessment protocol:

    <action>
      <!--  step title  -->
      <title value="Measure BMI"/>
      <description value="Measure, Weight, Height, Waist, Circumference; Calculate BMI"/>
      <!--  description of activity  -->
      <textEquivalent value="Weight must be measured so that the BMI can be calculated. Most charts are based on weights
        obtained with the patient wearing undergarments and no shoes. BMI can be manually calculated
        (kg/[height in meters]2), but is more easily obtained from a nomogram. Waist circumference
        is important because evidence suggests that abdominal fat is a particularly strong determinant
        of cardiovascular risk in those with a BMI of 25 to 34.9 kg/m2. Increased waist circumference
        can also be a marker of increased risk even in persons of normal weight. The technique
        for measuring waist circumference is described in the text. A nutrition assessment will
        also help to assess the diet and physical activity habits of overweight patients"/>
      <goalId value="reduce-bmi-ratio"/>
      <condition>
        <kind value="applicability"/>
        <expression>
          <description value="The practitioner must seek to determine whether the patient has ever been overweight.
            While a technical definition is provided, a simple question such as 'Have you ever been
            overweight?' will accomplish the same goal. Questions directed towards weight history,
            dietary habits, physical activities, and medications may provide useful information about
            the origins of obesity in particular patients. For those who have not been overweight,
            a 2 year interval is appropriate for the reassessment of BMI. While this time span is
            not evidence-based, it is believed to be a reasonable compromise between the need to identify
            weight gain at an early stage and the need to limit the time, effort, and cost of repeated
            measurements."/>
          <language value="text/cql"/>
          <expression value="exists ([Condition: Obesity]) or not exists ([Observation: BMI] O where O.effectiveDateTime 2 years or less before Today())"/>
        </expression>
      </condition>
      <requiredBehavior value="must-unless-documented"/>
      <cardinalityBehavior value="single"/>
      <definition value="#procedure"/>
    </action>

<span id="documentation-template"></span>
#### Documentation Template

A documentation template is a structured form for recording information on a patient into a set of pre-defined data slots. These templates are used to guide structured data entry within an EHR or other clinical information system. Some types of clinical documents that can be represented via the documentation template artifacts are encounter summaries, procedure notes, patient-reported outcomes, and flowsheets.

The [Questionnaire](questionnaire.html) resource provides a basis for representing the structure of a documentation template. Using the expression extensions, the resource can be extended to provide dynamic behavior such as calculating values, showing/hiding content based on answers to questions, and other interactive functionality.

Documentation Templates often include not only a description of the data to be collected, but the behavior of the template during evaluation. For example, whether or not to display a particular question or group of questions based on answers to previously asked questions, or calculating the value of an answer based on other answers. The Questionnaire resource by itself does not provide this functionality, so this module introduces a [CQF-Questionnaire](cqf-questionnaire.html) profile of the [Questionnaire](questionnaire.html) resource to allow this behavior to be modeled.

As an example, the PHQ-9 Health Questionnaire contains a question that is answered by totaling the weights from the answers of each of the previous questions. The [CQF Questionnaire](questionnaire-cqf-example.html) example illustrates the representation of this questionnaire with the required logic for computation.

The following fragment taken from that example illustrates the use of the expression extension to calculate the TotalScore answer for a PHQ-9 Depression Assessment instrument:

    <item>
      <extension url="http://hl7.org/fhir/StructureDefinition/cqf-expression">
        <valueExpression>
          <language value="text/cql"/>
          <expression value="CalculateTotalScore"/>
        </valueExpression>
      </extension>
      <linkId value="TotalScore"/>
      <code>
        <system value="http://loinc.org"/>
        <code value="44261-6"/>
      </code>
      <text value="Total score"/>
      <type value="integer"/>
      <required value="true"/>
    </item>

<span id="measure"></span>
#### Measure

A quantitative tool to assess the performance of an individual or organization with respect to a specified process or outcome via the measurement of actions, processes, or outcomes of clinical care. Note that the [Measure](measure.html) itself does not contain any logic; rather a [Library](#library) resource is referenced that contains the logic required by the measure, and the various expression elements, such as population criteria, reference named expressions within that library (or libraries).

For example, the following fragment defines how to calculate the controlling high blood pressure measure:

    <Measure>
      <id value="cbp"/>
      <status value="active"/>
      <experimental value="true"/>
      <description value="Controlling High Blood Pressure Cohort Definition"/>
      <topic>
        <coding>
          <system value="http://loinc.org"/>
          <code value="57024-2"/>
        </coding>
      </topic>
      <library value="Library/cbp-logic"/>
      <group>
        <population>
          <code value="initial-population"/>
          <criteria value="In Demographic"/>
        </population>
      </group>
      <group>
        <population>
          <code value="initial-population"/>
          <criteria value="BP: Systolic"/>
        </population>
      </group>
      <group>
        <population>
          <code value="initial-population"/>
          <criteria value="BP: Diastolic"/>
        </population>
      </group>
    </Measure>

\[%file newfooter%\]
