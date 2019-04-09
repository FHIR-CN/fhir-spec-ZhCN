\[%settitle Resource Index%\]
\[%file newnavbar%\]
<span id="CDA"></span>
Clinical Document Architecture (CDA) on FHIR
--------------------------------------------

|                                            |                                               |                                                                                        |
|--------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt sd%\]](%5B%wg%20sd%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

### What is CDA on FHIR?

CDA on FHIR specifies how to implement CDA R2 with the FHIR [Composition](composition.html) resource.
The original HL7 Clinical Document Architecture (CDA) defined the structure and semantics of "clinical documents" for the purpose of exchange. A clinical document is a documentation of clinical observations and services, with the following characteristics:

-   Persistence - A clinical document continues to exist in an unaltered state, for a time period defined by local and regulatory requirements (NOTE: There is a distinct scope of persistence for a clinical document, independent of the persistence of any XML-encoded CDA document instance).
-   Stewardship - A clinical document is maintained by an organization entrusted with its care.
-   Potential for authentication - A clinical document is an assemblage of information that is intended to be legally authenticated.
-   Context - A clinical document establishes the context for its contents.
-   Wholeness - Authentication of a clinical document applies to the whole and does not apply to portions of the document without the full context of the document.
-   Human readability - A clinical document is human readable.

A CDA document on FHIR is a defined and complete information object that can include text, images, sounds, and other multimedia content.
### Scope of the CDA on FHIR

The scope of CDA on FHIR is the standardization of clinical documents for exchange.
The data format of clinical documents outside of the exchange context (e.g. the data format used to store clinical documents) is not addressed in this specification.
CDA on FHIR does not specify the creation or management of documents, only their exchange markup. While it may be possible to directly use the CDA Schema in a document authoring environment, such use is not the primary purpose of the CDA specification.
Document management is critically interdependent with the CDA specifications, but the specification of document management messages is outside the scope of the CDA.

### Goals and Design Principles

The goals of CDA on FHIR are:

-   Give priority to delivery of patient care.
-   Allow cost effective implementation across as wide a spectrum of systems as possible.
-   Support exchange of human-readable documents between users, including those with different levels of technical sophistication.
-   Promote longevity of all information encoded according to this architecture.
-   Enable a wide range of post-exchange processing applications.
-   Be compatible with a wide range of document creation applications.
-   Promote exchange that is independent of the underlying transfer or storage mechanism.
-   Prepare the design reasonably quickly.
-   Enable policy-makers to control their own information requirements without extension to this specification.

Several design principles follow from consideration of the above goals:
-   This architecture must be compatible with XML and JSON.
-   This architecture must be compatible with representations of clinical information arising from other HL7 committees.
-   Technical barriers to the use of the architecture should be minimized.
-   The architecture specifies the representation of instances required for exchange.
-   The architecture should impose minimal constraints or requirements on document structure and content required for exchange.
-   The architecture must be scalable to accommodate fine-grained markup such as highly structured text and coded data.
-   Document specifications based on this architecture should accommodate such constraints and requirements as supplied by appropriate professional, commercial, and regulatory agencies.
-   Document specifications for document creation and processing, if intended for exchange, should map to this exchange architecture.
-   CDA documents must be human readable using widely-available and commonly-deployed XML-aware browsers and print drivers and a generic CDA style sheet written in a standard style sheet language.
-   Use open standards.

<span id="general"></span>
General CDA on FHIR Concepts
----------------------------

### Major Components of a CDA on FHIR Document

This section serves as a high-level introduction to the major components of a CDA document, all of which are described again and in greater detail later on. The intent here is to familiarize the reader with the high-level concepts to facilitate an understanding of the sections that follow. \[EDITORS: in CDA r2 there is a bunch of detail about how CDA is wrapped - and an example. Consider whether the discussion is relevant here: "A CDA document is wrapped by the &lt;ClinicalDocument&gt; element, and contains a header..."\]

### Human Readability and Rendering CDA Documents

The CDA requirement for human readability guarantees that a receiver of a CDA document can algorithmically display the clinical content of the note on a standard Web browser.

-   There must be a deterministic way for a recipient of an arbitrary CDA document to render the attested content.
-   Human readability shall not require a sender to transmit a special style sheet along with a CDA document. It must be possible to render all CDA documents with a single style sheet and general-market display tools.
-   Human readability applies to the authenticated content. There may be additional information conveyed in the document that is there primarily for machine processing that is not authenticated and need not be rendered.
-   When structured content is derived from narrative, there must be a mechanism to describe the process (e.g. by author, by human coder, by natural language processing algorithm, by specific software) by which machine-processable portions were derived from a block of narrative.
-   When narrative is derived from structured content, there must be a mechanism to identify the process by which narrative was generated from structured data.

These principles and requirements have led to the current approach, where the material to be rendered is placed into the Section.content. \[EDITORS: The current design doesn't make it clear where to consistently find narrative.\]

\[%file newfooter%\]
