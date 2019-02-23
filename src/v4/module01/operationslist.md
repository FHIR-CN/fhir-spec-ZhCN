---
title: operationslist 目录
type: module01
order: 700
FHIR_version: r4

---


## 1.5 Defined RESTful API Operations[](operationslist.html#1.5 "link to here")
----------------------------------------------------------------------------

[FHIR Infrastructure ![](external.png)](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group

[Maturity Level](versions.html#maturity): N/A

[Standards Status](versions.html#std-process): [Informative](versions.html#std-process)

The [RESTful API](http.html) defines a set of common interactions (read, update, search, etc.) performed on a repository of typed resources. For further information concerning how operations are defined and invoked, see [Extended Operations on the RESTful API](operations.html).

This is a full list of the operations defined by this specification:

**Base Operations (All resource types)**

[Validate a resource](resource-operation-validate.html)

\[base\]/\[Resource\]/$validate | \[base\]/\[Resource\]/\[id\]/$validate

[Access a list of profiles, tags, and security labels](resource-operation-meta.html)

\[base\]/$meta | \[base\]/\[Resource\]/$meta | \[base\]/\[Resource\]/\[id\]/$meta

[Add profiles, tags, and security labels to a resource](resource-operation-meta-add.html)

\[base\]/\[Resource\]/\[id\]/$meta-add

[Delete profiles, tags, and security labels for a resource](resource-operation-meta-delete.html)

\[base\]/\[Resource\]/\[id\]/$meta-delete

[Convert from one form to another](resource-operation-convert.html)

\[base\]/$convert

[Execute a graphql statement](resource-operation-graphql.html)

\[base\]/$graphql | \[base\]/\[Resource\]/\[id\]/$graphql

[Return a graph of resources](resource-operation-graph.html)

\[base\]/\[Resource\]/\[id\]/$graph

**Operations Defined by Resource Types**

[Apply](activitydefinition-operation-apply.html)

\[base\]/ActivityDefinition/$apply | \[base\]/ActivityDefinition/\[id\]/$apply

[Data Requirements](activitydefinition-operation-data-requirements.html)

\[base\]/ActivityDefinition/\[id\]/$data-requirements

[Fetch a subset of the CapabilityStatement resource](capabilitystatement-operation-subset.html)

\[base\]/CapabilityStatement/$subset | \[base\]/CapabilityStatement/\[id\]/$subset

[Test if a server implements a client's required operations](capabilitystatement-operation-implements.html)

\[base\]/CapabilityStatement/$implements | \[base\]/CapabilityStatement/\[id\]/$implements

[Test if a server implements a client's required operations](capabilitystatement-operation-conforms.html)

\[base\]/CapabilityStatement/$conforms

[Discover what versions a server supports](capabilitystatement-operation-versions.html)

\[base\]/$versions

[Apply](chargeitemdefinition-operation-apply.html)

\[base\]/ChargeItemDefinition/\[id\]/$apply

[Submit a Claim resource for adjudication](claim-operation-submit.html)

\[base\]/Claim/$submit

[Concept Look Up & Decomposition](codesystem-operation-lookup.html)

\[base\]/CodeSystem/$lookup

[Code System based Validation](codesystem-operation-validate-code.html)

\[base\]/CodeSystem/$validate-code | \[base\]/CodeSystem/\[id\]/$validate-code

[Subsumption Testing](codesystem-operation-subsumes.html)

\[base\]/CodeSystem/$subsumes | \[base\]/CodeSystem/\[id\]/$subsumes

[Finding codes based on supplied properties](codesystem-operation-find-matches.html)

\[base\]/CodeSystem/$find-matches | \[base\]/CodeSystem/\[id\]/$find-matches

[Generate a Document](composition-operation-document.html)

\[base\]/Composition/$document | \[base\]/Composition/\[id\]/$document

[Concept Translation](conceptmap-operation-translate.html)

\[base\]/ConceptMap/$translate | \[base\]/ConceptMap/\[id\]/$translate

[Closure Table Maintenance](conceptmap-operation-closure.html)

\[base\]/$closure

[Submit an EligibilityRequest resource for assessment](coverageeligibilityrequest-operation-submit.html)

\[base\]/CoverageEligibilityRequest/$submit

[Fetch Encounter Record](encounter-operation-everything.html)

\[base\]/Encounter/\[id\]/$everything

[Fetch a group of Patient Records](group-operation-everything.html)

\[base\]/Group/\[id\]/$everything

[Data Requirements](library-operation-data-requirements.html)

\[base\]/$data-requirements | \[base\]/Library/\[id\]/$data-requirements

[Find a functional list](list-operation-find.html)

\[base\]/List/$find

[Evaluate Measure](measure-operation-evaluate-measure.html)

\[base\]/Measure/$evaluate-measure | \[base\]/Measure/\[id\]/$evaluate-measure

[Data Requirements](measure-operation-data-requirements.html)

\[base\]/Measure/\[id\]/$data-requirements

[Submit Data](measure-operation-submit-data.html)

\[base\]/Measure/$submit-data | \[base\]/Measure/\[id\]/$submit-data

[Collect Data](measure-operation-collect-data.html)

\[base\]/Measure/$collect-data | \[base\]/Measure/\[id\]/$collect-data

[Care Gaps](measure-operation-care-gaps.html)

\[base\]/Measure/$care-gaps

[Fetch Product Record](medicinalproduct-operation-everything.html)

\[base\]/MedicinalProduct/$everything | \[base\]/MedicinalProduct/\[id\]/$everything

[Process Message](messageheader-operation-process-message.html)

\[base\]/$process-message

[Fetch Preferred it](namingsystem-operation-preferred-id.html)

\[base\]/NamingSystem/$preferred-id

[Observation Statistics](observation-operation-stats.html)

\[base\]/Observation/$stats

[Last N Observations Query](observation-operation-lastn.html)

\[base\]/Observation/$lastn

[Find patient matches using MPI based logic](patient-operation-match.html)

\[base\]/Patient/$match

[Fetch Patient Record](patient-operation-everything.html)

\[base\]/Patient/$everything | \[base\]/Patient/\[id\]/$everything

[Apply](plandefinition-operation-apply.html)

\[base\]/PlanDefinition/$apply | \[base\]/PlanDefinition/\[id\]/$apply

[Data Requirements](plandefinition-operation-data-requirements.html)

\[base\]/PlanDefinition/\[id\]/$data-requirements

[Build Questionnaire](structuredefinition-operation-questionnaire.html)

\[base\]/StructureDefinition/$questionnaire | \[base\]/StructureDefinition/\[id\]/$questionnaire

[Generate Snapshot](structuredefinition-operation-snapshot.html)

\[base\]/StructureDefinition/$snapshot | \[base\]/StructureDefinition/\[id\]/$snapshot

[Model Instance Transformation](structuremap-operation-transform.html)

\[base\]/StructureMap/$transform | \[base\]/StructureMap/\[id\]/$transform

[Value Set Expansion](valueset-operation-expand.html)

\[base\]/ValueSet/$expand | \[base\]/ValueSet/\[id\]/$expand

[Value Set based Validation](valueset-operation-validate-code.html)

\[base\]/ValueSet/$validate-code | \[base\]/ValueSet/\[id\]/$validate-code

Notes:

*   The special operations on the `meta` element also operate on previous versions of a resource (/\_history/). They are the only operations that can manipulate versions other than the "current" version.
*   Implementation Guides can define additional operations

### 1.5.1 Services Defined by the FHIR specification[](operationslist.html#1.5.1 "link to here")

This specification defines a set of services, which are business level aggregations of [Resources](resourcelist.html) and Operations that provide a defined package of functionality that correspond to an identified business need.

Note that in addition to the services defined in this specification, many [implementation guides ![](external.png)](http://fhir.org/implementation_guides) define business level services.

This table lists the services currently defined:

**Name**

**Description**

**Links**

[Terminology Service](terminology-service.html)

A service that lets healthcare applications make use of codes, code systems, and value sets without having to become experts in the fine details of the code system, value set and concept map resources, and the underlying code systems and terminological principles. The service provides the following functionality:

*   Defining and managing code systems, value sets, and concept maps
*   Code lookup & Validation
*   Value Set Expansion (including for UI data entry support)
*   Value Set Validation
*   Translations between code systems
*   Subsumption testing and other logical analyses
*   Maintaining a closure table

[Capability statement](capabilitystatement-terminology-server.html)  
[module](terminology-module.html)

Conformance Service

A service that provides the underlying services needed to test whether resources conform to the rules defined by the FHIR specification and applicable implementation guides, and to help author implementation guides. The service provides the following functionality:

*   Defining and managing structure definitions, data elements, Capability statements, search parameters, and operation & compartment definitions
*   Resource Validation
*   Comparing and subsetting Capability statements

To be developed

Knowledge Repository

A service that provides basic retrieval and maintenance functionality for clinical knowledge artifacts. The service provides the following functionality:

*   Defining and managing plan and activity definitions (e.g. order sets, protocols, decision support rules, documentation templates, etc.), libraries, and measures
*   Search and retrieval of knowledge artifacts
*   Data requirements analysis of knowledge artifacts

[Capability statement](capabilitystatement-knowledge-repository.html)  
[module](clinicalreasoning-module.html)

Measure Processor

A service that provides measure evaluation functionality. The service provides the following functionality:

*   Searching and retrieval of measure definitions
*   Evaluation of measures for patients and populations
*   Data requirements analysis of measure definitions

[Capability statement](capabilitystatement-measure-processor.html)  
[module](clinicalreasoning-module.html)

Possible candidate Business Services for future versions:

*   Conversion Service (using mapping language, and also iso-semantic transforms in a resource)
*   Questionnaire related functionality (though see SDC)
*   Patient Registration & Reconciliation service (per IXS)
*   Medication Management service (home specific variant?)
*   Clinical Data Repository
*   Clinical Task Manager
*   Communications Manager
*   ...?

Note that there is already past & current work on some of these in HL7 (though not necessarily FHIR specific).

®© HL7.org 2011+. FHIR Release 4 (v4.0.0) generated on Thu, Dec 27, 2018. [QA Page](qa.html)  
Links: [Search ![](external.png)](http://hl7.org/fhir/search.cfm) | [Version History](history.html) | [Table of Contents](toc.html) | [Credits](credits.html) | [Compare to R3 ![](external.png)](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhir%2FSTU3%2Foperationslist.html&doc2=http%3A%2F%2Fhl7.org%2Ffhir%2Foperationslist.html) | [![CC0](cc0.png)](license.html) | [Propose a change ![](external.png)](http://hl7.org/fhir-issues)