---
title: 2.17 HL7 FHIR  简要介绍
type: spec
order: 101
---

## Summary - FHIR v4.0.0                   

2.17 Introducing HL7 FHIR[](summary.html#2.17 "link to here")
=============================================================

[FHIR Infrastructure ![](external.png)](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group

[Maturity Level](versions.html#maturity): N/A

[Standards Status](versions.html#std-process): [Informative](versions.html#std-process)

FHIR® – Fast Healthcare Interoperability Resources (hl7.org/fhir) – is a next generation standards framework created by HL7. FHIR combines the best features of HL7's [v2 ![](external.png)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) , [HL7 v3 ![](external.png)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) and [CDA ![](external.png)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) product lines while leveraging the latest web standards and applying a tight focus on implementability.

FHIR solutions are built from a set of modular components called "Resources". These resources can easily be assembled into working systems that solve real world clinical and administrative problems at a fraction of the price of existing alternatives. FHIR is suitable for use in a wide variety of contexts – mobile phone apps, cloud communications, EHR-based data sharing, server communication in large institutional healthcare providers, and much more.

2.17.1 Why FHIR is better[](summary.html#2.17.1 "link to here")
---------------------------------------------------------------

FHIR offers many improvements over existing standards:

*   A strong focus on implementation: fast and easy to implement (multiple developers have had simple interfaces working in a single day)
*   Multiple implementation libraries, many examples available to kick-start development
*   Specification is free for use with no restrictions
*   Interoperability out-of-the-box: base resources can be used as is, but can also be adapted as needed - which happens a lot - for local requirements using Profiles, Extensions, Terminologies and more
*   Evolutionary development path from HL7 Version 2 and CDA: standards can co-exist and leverage each other
*   Strong foundation in Web standards: XML, JSON, HTTP, OAuth, etc.
*   Support for RESTful architectures, seamless exchange of information using messages or documents, and service-based architectures
*   Concise and easily understood specifications
*   A human-readable serialization format for ease of use by developers
*   Ontology-based analysis with formal mapping for correctness (under development)

2.17.2 Flexibility / Adaptation[](summary.html#flex "link to here")
-------------------------------------------------------------------

A central challenge for healthcare standards is how to handle the wide variability caused by diverse healthcare processes. Over time, more fields and optionality are added to the specification, gradually adding cost and complexity to the resulting implementations. The alternative is relying on custom extensions, but these create many implementation problems too.

FHIR solves this challenge by defining a simple framework for extending the existing resources and describing their use with Profiles. All systems can read all resources, but applications can add more control and meaning using profiles. Many healthcare contexts require extensive local agreements.

In addition, each resource carries a human-readable text representation using html as a fall-back display option for clinical safety. This is particularly important for complex clinical information where many systems take a simple textual/document based approach.

2.17.3 Example Resource: Patient[](summary.html#2.17.3 "link to here")
----------------------------------------------------------------------

This simple example shows the important parts of a resource: a local extension, the human readable HTML presentation, and the standard defined data content.

![](shot.png)

FHIR has resources for administrative concepts such as patient, provider, organization and device as well as a wide variety of clinical concepts covering problems, medications, diagnostics, care plans, financial concerns and more.

2.17.4 The FHIR development process[](summary.html#2.17.4 "link to here")
-------------------------------------------------------------------------

FHIR is published as a Standard for Trial Use. During the Trial Use phase, HL7 actively monitors implementations in order to continue to improve the specification to be responsive to their needs. Due to the many advantages FHIR offers, trial use is already beginning right now.

[http://hl7.org/fhir ![](external.png)](http://hl7.org/fhir) . Follow us on Twitter using [#FHIR ![](external.png)](https://twitter.com/search?q=%23FHIR) 

®© HL7.org 2011+. FHIR Release 4 (v4.0.0) generated on Thu, Dec 27, 2018. [
  