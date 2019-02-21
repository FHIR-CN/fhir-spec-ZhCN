---
title: 术语版块
type: spec
order: 400
FHIR_version: r4

---

## 4.0 Terminology Module[](terminology-module.html#4.0 "link to here")
--------------------------------------------------------------------

### 4.0.1 Introduction[](terminology-module.html#intro "link to here")

The Terminology Module provides an overview and guide to the FHIR resources, operations, coded data types and externally-defined standard and FHIR-defined terminologies that are used for representing and communicating coded, structured data in the FHIR core specification and profiles. Collectively, these capabilities are used to provide the terminology service functionality required for supporting the use of coded data in FHIR resources throughout the specification as described in the other modules.

The primary terminology-related structures and their relationships are shown below:

![Image showing the terminology resources and relationships](terminology-module-relationships.png)

**Example: Condition profile with Condition.code slice bound to "SNOMED CT fracture codes" value set**

\[Note: The ElementDefinition type (shown with a dotted box) is described elsewhere in the specification in the [Foundation](foundation-module.html) and [Conformance](conformance-module.html) modules.\]

### 4.0.2 Index[](terminology-module.html#index "link to here")

The Terminology Module covers the following:

**Resources**

*   [CodeSystem](codesystem.html "The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.")
*   [ValueSet](valueset.html "A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).")

*   [ConceptMap](conceptmap.html "A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.")
*   [NamingSystem](namingsystem.html "A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.")

*   [TerminologyCapabilities](terminologycapabilities.html "A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.")

**Terminology Service**

*   [Terminology Service Documentation](terminology-service.html)

**Operations**

*   **CodeSystem**

*   [$lookup](codesystem-operation-lookup.html)
*   [$validate-code](codesystem-operation-validate-code.html)
*   [$subsumes](codesystem-operation-subsumes.html)
*   [$find-matches](codesystem-operation-find-matches.html)

*   **ValueSet**

*   [$expand](valueset-operation-expand.html)
*   [$validate-code](valueset-operation-validate-code.html)

*   **ConceptMap**

*   [$translate](conceptmap-operation-translate.html)
*   [$closure](conceptmap-operation-closure.html)

**Coded Data Types**

*   [code](datatypes.html#code)

*   [Coding](datatypes.html#Coding)

*   [CodeableConcept](datatypes.html#CodeableConcept)

**Documentation**

*   [Using Codes in Resources](terminologies.html)
*   [Code Systems Defined/Referenced in FHIR](terminologies-systems.html)
*   [Value Sets Defined in FHIR](terminologies-valuesets.html)

*   [Mappings (FHIR-defined) Between Related Value Set Concepts](terminologies-conceptmaps.html)
*   [Known Identifier Systems](identifier-registry.html)

### 4.0.3 Security and Privacy[](terminology-module.html#secpriv "link to here")

For security considerations for terminology services, see the [Terminology Service page Security section](terminology-service.html#4.6.1). For more general considerations, see the [Security and Privacy module](secpriv-module.html).

### 4.0.4 Common Use Cases[](terminology-module.html#uses "link to here")

*   Create or reference a code system
*   Create or reference a value set
*   Record data using pre-coordinated codes
*   Record data using post-coordinated expressions
*   Record data using multiple local or standard code systems (translations)
*   Expand a value set
*   Validate a code
*   Look up a display term for a code
*   Translate a code from one value set to another
*   Maintain a client-side [transitive closure table ![](external.png)](https://en.wikipedia.org/wiki/Transitive_closure#In_graph_theory) on subsumption relationships
*   Test subsumption between concepts
*   For a set of property/concept pairs, return the set of concepts for the requested properties
*   Map data between different terminologies
*   Declare the capabilities of a terminology service

### 4.0.5 Development Roadmap[](terminology-module.html#roadmap "link to here")

The following terminology resources have been tested and are being used in production tooling and now are normative or are expected soon to progress to normative.

*   [ValueSet](valueset.html "A value set specifies a set of codes drawn from one or more code systems.") [N](versions.html#std-process "Normative Content")
*   [CodeSystem](codesystem.html "The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.") [N](versions.html#std-process "Normative Content")
*   [ConceptMap](conceptmap.html "A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.")[ ](versions.html#std-process "Maturity Level")[3](versions.html#maturity "Maturity Level")

Other terminology resources are still in earlier stages of development. We intend to continue to develop and test these resources and advance them through the [Maturity Levels](versions.html#maturity) at Connectathons and elsewhere.

*   [NamingSystem](namingsystem.html "A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.")[ ](versions.html#std-process "Maturity Level")[1](versions.html#maturity "Maturity Level")
*   [TerminologyCapabilities](terminologycapabilities.html "Resource to document a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.")[ ](versions.html#std-process "Maturity Level")[0](versions.html#maturity "Maturity Level")

®© HL7.org 2011+. FHIR Release 4 (v4.0.0) generated on Thu, Dec 27, 2018. [QA Page](qa.html)  
Links: [Search ![](external.png)](http://hl7.org/fhir/search.cfm) | [Version History](history.html) | [Table of Contents](toc.html) | [Credits](credits.html) | [Compare to R3 ![](external.png)](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhir%2FSTU3%2Fterminology-module.html&doc2=http%3A%2F%2Fhl7.org%2Ffhir%2Fterminology-module.html) | [![CC0](cc0.png)](license.html) | [Propose a change ![](external.png)](http://hl7.org/fhir-issues)