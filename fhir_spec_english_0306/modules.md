\[%settitle Getting Started with FHIR%\]
\[%file newnavbar%\]
<span id="root"></span>
Getting Started with FHIR
-------------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

FHIR is a platform specification that defines a set of capabilities use across the healthcare process, in all jurisdictions, and in lots of different contexts. While the basics of the FHIR specification are relatively straight-forward (see the Overviews: [General](overview.html), [Developers](overview-dev.html), [Clinical](overview-clinical.html), and [Architects](overview-arch.html)), it can still be difficult to know where to start when implementing a solution based on FHIR.

This page provides some guidance to help get new implementers started on their path to successful implementation. Beyond reading the overviews (previous paragraph), where should an implementer start? Generally, an implementer needs to resolve:

-   How will information be exchanged? (see [Foundation Module](foundation-module.html#uses))
-   How are terminologies being used? (see [Terminology Module](terminology-module.html#uses))
-   How will the information be secured? (see [Security and Privacy Module](secpriv-module.html#uses))
-   When is information exchanged? (See [Workflow Module](workflow-module.html))
-   What information is going to be exchanged?

The remaining sections provide guidance on specific areas (Foundation, Implementer Support, Security and Privacy, Conformance, Terminology, Linked Data, Administration, Clinical, Diagnostics, Medications, Workflow, Financial and Clinical Reasoning).

All implementers should be aware of how versioning works in the FHIR specification. See both:

-   [Managing Multiple FHIR Versions](versioning.html)
-   [Specification Version Management Policy](versions.html)

<span id="modules"></span>
### Modules

In order to help implementers find their way around the specification and answer these questions, it is organized into a set of "modules". Each module represents a different functional area of the specification, and contains:

-   **Scope and Index**: A description of the content covered by the module, and an index of the important content
-   **Use cases**: Guidance for common uses of the module, and how to approach them. This is a key resource for implementers familiarizing themselves with the FHIR specification
-   **Security / Privacy**: Information
-   **Roadmap**: Where the content covered by the module is in terms of overall progress (see also, for general information: [FHIR Timelines](versions.html))

Broadly, the modules are organized into 3 groups:

-   Infrastructure (bottom rung, and bottom row of boxes)
-   Content (middle rung, and top row of boxes)
-   Reasoning (top rung)

\[%file modules-fragment%\]
Dependencies between the modules are mainly downwards, with some horizontal dependencies. Implementers should choose the content modules to engage with based on their requirements, and should only engage with the reasoning module if they need to do clinical decision support, and/or Quality Measures.

In addition to the use case based assistance in the modules, these additional documentation pages may be useful:

-   [Common Use Cases](usecases.html): Personal Health Record, Document Sharing (XDS) and Decision Support
-   [Resource Guide](resourceguide.html): Further information about the resources and the relationship between them

Finally, one important place to look is the [registry of implementation guides](http://www.fhir.org/guides/registry), to see whether similar (or identical) requirements have been met.

\[%file newfooter%\]
