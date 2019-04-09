\[%settitle MetaData Types%\]
\[%file newnavbar%\]
&lt;%mdtheader base%&gt;
MetaData Types
==============

|                                                |                                             |                                                                                                |
|------------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 4 | [Standards Status](versions.html#std-process):[Partially Normative](versions.html#std-process) |

\[%normative page%\]
This page describes a set of types used for conveying metadata about knowledge resources (mainly for [Terminology](terminology-module.html), [Conformance](conformance-module.html) and [Clinical Definition](clinicalreasoning-module.html) resources).

**Table of Contents**

|                                     |                                         |                                     |                                             |
|-------------------------------------|-----------------------------------------|-------------------------------------|---------------------------------------------|
| [ContactDetail](#ContactDetail)     | [Contributor](#Contributor)             | [DataRequirement](#DataRequirement) | [ParameterDefinition](#ParameterDefinition) |
| [RelatedArtifact](#RelatedArtifact) | [TriggerDefinition](#TriggerDefinition) | [Expression](#Expression)           | [UsageContext](#UsageContext)               |

For an index of all data types, see [the Data types page](datatypes.html).

<span id="ContactDetail"></span> <span id="contactdetail"></span>
### ContactDetail

\[%StandardsStatus normative DataType%\]
See also [Examples](metadatatypes-examples.html#ContactDetail), [Detailed Descriptions](metadatatypes-definitions.html#ContactDetail) and [Mappings](metadatatypes-mappings.html#ContactDetail).

The ContactDetail structure defines general contact details.

\[%dt ContactDetail 1%\]
**Constraints**

\[%dt.constraints ContactDetail%\]

ContactDetail is used in the following places: \[%dtusage ContactDetail%\]

<span id="interpretation"></span>
#### Interpretation of ContactDetail in different contexts

 

<span id="Contributor"></span> <span id="contributor"></span>
### Contributor

\[%StandardsStatus trial-use DataType\_(and\_the\_rest\_on\_this\_page) infrastructure%\]
See also [Examples](metadatatypes-examples.html#Contributor), [Detailed Descriptions](metadatatypes-definitions.html#Contributor) and [Mappings](metadatatypes-mappings.html#Contributor).

\[%dt Contributor 1%\]
**Constraints**

\[%dt.constraints Contributor%\] \[%tx Contributor%\]

Contributor is used in the following places: \[%dtusage Contributor%\]

<span id="interpretation"></span>
#### Interpretation of Contributor in different contexts

 

<span id="DataRequirement"></span> <span id="datarequirement"></span>
### DataRequirement

See also [Examples](metadatatypes-examples.html#DataRequirement), [Detailed Descriptions](metadatatypes-definitions.html#DataRequirement) and [Mappings](metadatatypes-mappings.html#DataRequirement).

The DataRequirement structure defines a general data requirement for a knowledge asset such as a decision support rule or quality measure.

\[%dt DataRequirement 1%\]
**Constraints**

\[%dt.constraints DataRequirement%\] \[%tx DataRequirement%\]

A DataRequirement differs from a parameter in that it specifies the data to be provided in terms of the type of data, and specific filters on code-valued and/or date-valued attributes. Data requirements are not named because they are referenced by type within the evaluation context.

DataRequirements are used by knowledge modules to communicate the set of required data to a consumer in a way that is computable (as opposed to a set of named parameters which must be integrated by hand based on the meaning of the parameter as communicated through the documentation).

DataRequirements are typically used to communicate patient-dependent information such as MedicationStatements and Encounters, whereas Parameters are typically used to communicate patient-independent information such as configuration values.

For example, consider the following CQL expression:

    define "Total Colectomy Procedures":
      [Procedure: "Total Colectomy Value Set"] P
        where P.performedPeriod during "Measurement Period"

The criteria is looking for procedures matching the "Total Colectomy Value Set" that were performed during the "Measurement Period". In this case, "Measurement Period" is a parameter, referenced by name, whereas the reference to Procedure uses the name of the resource type, and so constitutes a data requirement of the criteria:

    <dataRequirement>
        <type value="Procedure"/>
        <codeFilter>
            <path value="code"/>
            <valueSetString value="Total Colectomy Value Set"/>
        </codeFilter>
        <dateFilter>
            <path value="performedPeriod"/>
            <valuePeriod>
                <start value="2016-01-01"/>
                <end value="2016-12-31"/>
            </valuePeriod>
        </dateFilter>
    </dataRequirement>

If a resource type has multiple date attributes, then it may be necessary to include multiple date criteria. For instance, in the example above the Procedure resource is using the performedPeriod date attribute. However, the Procedure resource also provides a performedDateTime (specific date and/or time when procedure was performed) attribute. Therefore, if the date criteria for the Procedure in the example was recorded using the performedDateTime attribute, the date criteria would be incomplete. To account for this additional date attribute, the example could be expanded as follows:

    define "Total Colectomy Procedures":
      [Procedure: "Total Colectomy Value Set"] P
        where exists (P.performedPeriod during "Measurement Period")
          or exists (P.performedDateTime during "Measurement Period")

The data requirement for the expanded criteria:

    <dataRequirement>
        <type value="Procedure"/>
        <codeFilter>
            <path value="code"/>
            <valueSetString value="Total Colectomy Value Set"/>
        </codeFilter>
        <dateFilter>
            <path value="performedPeriod"/>
            <path value="performedDateTime"/>
        </dateFilter>
    </dataRequirement>

DataRequirement is used in the following places: \[%dtusage DataRequirement%\]

 

<span id="ParameterDefinition"></span> <span id="parameterdefinition"></span>
### ParameterDefinition

See also [Examples](metadatatypes-examples.html#ParameterDefinition), [Detailed Descriptions](metadatatypes-definitions.html#ParameterDefinition) and [Mappings](metadatatypes-mappings.html#ParameterDefinition).

The ParameterDefinition structure defines a parameter to a knowledge asset such as a decision support rule or quality measure.

Parameters are typically used to communicate patient-independent information such as configuration values, whereas DataRequirements are typically used to communicate patient-dependent information such as MedicationStatements and Encounters.

\[%dt ParameterDefinition 1%\]
**Constraints**

\[%dt.constraints ParameterDefinition%\] \[%tx ParameterDefinition%\]

 

<span id="RelatedArtifact"></span> <span id="relatedartifact"></span>
### RelatedArtifact

See also [Examples](metadatatypes-examples.html#RelatedArtifact), [Detailed Descriptions](metadatatypes-definitions.html#RelatedArtifact) and [Mappings](metadatatypes-mappings.html#RelatedArtifact).

The RelatedArtifact structure defines resources related to a module such as previous and next versions of documents, documentation, citations, etc. Note that the name *resource* here is being used in a more general sense than the FHIR-specific Resource. The related resource may be a FHIR resource, or it may be another type of resource, represented using the Attachment data type.

\[%dt RelatedArtifact 1%\]
**Constraints**

\[%dt.constraints RelatedArtifact%\] \[%tx RelatedArtifact%\]

The following examples illustrate the use of relatedArtifact elements to provide citations:

    <relatedArtifact>
        <label value="1"/>
        <type value="citation"/>
        <citation value="Linder, J.A., D.W. Bates, G.M. Lee, J.A. Finkelstein. 2005. _Antibiotic treatment of children with sore throat_ JAMA 294(18):2315-2322. "/>
      </relatedArtifact>
      <relatedArtifact>
        <type value="citation"/>
        <label value="2"/>
        <citation value="Infectious Diseases Society of America. 2012. _Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis: 2012 Update._ "/>
      </relatedArtifact>
      <relatedArtifact>
        <type value="citation"/>
        <label value="3"/>
        <citation value="Roberts, R.R., B. Hota, I. Ahmad, et al. _Hospital and Societal Costs of Antimicrobial-Resistant Infections in a Chicago Teaching Hospital: Implications for Antibiotic Stewardship._ Clin Infect Dis. Oct 2009; 49(8):1175-84."/>
      </relatedArtifact>

RelatedArtifact is used in the following places: \[%dtusage RelatedArtifact%\]

<span id="interpretation"></span>
#### Interpretation of RelatedArtifact in different contexts

 

<span id="TriggerDefinition"></span> <span id="triggerdefinition"></span>
### TriggerDefinition

See also [Examples](metadatatypes-examples.html#TriggerDefinition), [Detailed Descriptions](metadatatypes-definitions.html#TriggerDefinition) and [Mappings](metadatatypes-mappings.html#TriggerDefinition).

The TriggerDefinition structure defines when a knowledge artifact is expected to be evaluated. The structure can represent three main kinds of triggering events, depending on the value of `type`:

-   Named Event
-   Scheduled Event
-   Data Event

A named event is an event identified by the implementation environment. This allows any event generated within the implementation environment to be used as a trigger, but it requires pre-coordination of the names involved with the consuming environments. [HL7 v2 events](v2/0003/index.html) are assigned the URI http://terminology.hl7.org/CodeSystem/v2-0003\#\[code\] e.g. http://terminology.hl7.org/CodeSystem/v2-0003/A01, and reference any data change that would trigger the sending of the matching HL7 v2 version, if the application providing the FHIR API supports v2 events internally.

A scheduled event occurs on a fixed or periodic schedule.

And finally, a data event occurs in response to some data-related event in the integrated environment such as a record being added or updated. The data-of-interest for a data event is described using a [DataRequirement](metadatatypes.html#DataRequirement). This allows for systems to automatically invoke based on data activity occurring within the system. A condition may also be specified to further refine the trigger

\[%dt TriggerDefinition 1%\]
**Constraints**

\[%dt.constraints TriggerDefinition%\] \[%tx TriggerDefinition%\]

TriggerDefinition is used in the following places: \[%dtusage TriggerDefinition%\]

 

<span id="Expression"></span> <span id="expression"></span>
### Expression

See also [Examples](metadatatypes-examples.html#Expression), [Detailed Descriptions](metadatatypes-definitions.html#Expression) and [Mappings](metadatatypes-mappings.html#Expression).

The Expression structure defines an expression that generates a value. The expression is provided in a specifed language (by mime type)

The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.

\[%dt Expression 1%\]
**Constraints**

\[%dt.constraints Expression%\] \[%tx Expression%\]

Expression is used in the following places: \[%dtusage Expression%\]

 

<span id="UsageContext"></span> <span id="usagecontext"></span>
### UsageContext

See also [Examples](metadatatypes-examples.html#UsageContext), [Detailed Descriptions](metadatatypes-definitions.html#UsageContext) and [Mappings](metadatatypes-mappings.html#UsageContext).

The UsageContext structure defines the context of use for a module.

\[%dt UsageContext 1%\]
**Constraints**

\[%dt.constraints UsageContext%\] \[%tx UsageContext%\]

UsageContext is used in the following places: \[%dtusage UsageContext%\]

<span id="interpretation"></span>
Interpretation of UsageContext in different contexts
----------------------------------------------------

 

\[%file newfooter%\]
