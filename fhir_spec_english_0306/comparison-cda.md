\[%settitle Relationship between FHIR and CDA%\]
\[%file newnavbar%\]
\[%cmpheader cda%\]
Clinical Document Architecture (CDA)
------------------------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

<span id="cda"></span>
[CDA](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) is HL7's most widely adopted [HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) standard. It provides both a standardized header containing metadata about the document as well as the ability to convey a wide variety of clinical content organized into various sections. The document content can be un-encoded, such as a PDF, through to a fully encoded HL7 v3 instance.

NOTE: While FHIR can be used to create [documents](documents.html) using the [Composition Resource](composition.html), FHIR can also be used to exchange traditional CDA R2 documents making use of the [DocumentReference](documentreference.html) resource, and handling the CDA document itself as a binary attachment (as XDS does).

### CDA Similarities and Differences

**Clinical document focus:** As its name implies, Clinical Document Architecture is limited to "clinical" use cases. The CDA model does not support exchange of content not deemed to have clinical relevance, such as financial information, and is limited to documents that deal with patients. (In some cases, such as the HL7 Structured Product Labeling standard, non-patient-specific CDA-like specifications are created to get around this limitation.) FHIR documents have no limitation on their content and can have subjects other than patients.

**Human readability approach:** CDA and FHIR both require that content be human-readable and define specific rules for how the human readable text is presented.

**Clinical Statement vs. resources:** In CDA, the "content" of the document is expressed using a complex and extremely abstract model based on HL7's "Clinical Statement" project. Its purpose is to allow implementers to express pretty much any clinical concept in any degree of rigor and granularity. (In practice, there are limitations built into the CDA model that make the expression of certain clinical concepts challenging). This model provides significant power, but also presents challenges. The first is that RIM modeling expertise is required in order to express any particular piece of clinical information. It isn't obvious how to represent things like allergies or surgery or blood pressure "out of the box". Templates are required to support interoperability. The second is that common clinical concepts can be (and frequently are) modeled differently in different circumstances. With FHIR, all clinical (and non-clinical) content in a message is handled by referencing existing resource definitions. These resources make it clear how to represent common structures like allergies and blood pressure "out of the box" and ensure that there's only one way for core content to be represented. It does however create the limitation that an appropriate resource must have been defined in order to share content. In the early stages of FHIR development, it may be necessary to make use of the [Basic](basic.html) resource if an appropriate standard resource has not yet been defined.

**Templates and Profiles:** As discussed above, CDA relies on the presence of templates in order to understand the meaning of instances. While the meaning can theoretically be determined by looking at RIM attributes and codes, the reality is that this is often not safe or sufficient. As such, pretty much every CDA instance includes *templateId* attribute values scattered throughout the instance to define meaning. With FHIR, meaning is defined by the resource. [Profiles](profiling.html) can be used to define extensions, but they never refine the meaning of core elements. While the profiles used in constructing a particular instance can be declared within the instance via [tags](resource.html#tag) such declaration is not required.

**Mark-up language:** CDA defines its own XML syntax for narrative content, loosely based on HTML. FHIR makes use of a constrained set of XHTML which is somewhat more expressive than the CDA markup. Conversions from FHIR to CDA will need to take these constraints into account (or alternatively provide a fully rendered version of the document).

### CDA Interoperability Considerations

CDA is a type of [HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) specification. Therefore, all [considerations](comparison-v3.html#V3-interoperability) that apply to v3 messaging also apply to CDA. In addition, the following topics are specific to CDA implementations.

**What to map:** The right-hand side (clinical content) portion of the CDA model qualifies as an abstract model [as discussed above](comparison-v3.html#V3-abstractModels). While the CDA header can reasonably be mapped to the HL7 [Composition](composition.html) resource and related resources, mappings between FHIR and CDA should be done at the template level rather than the CDA specification itself.

**Human readable granularity:** With FHIR, narrative only exists for the resources at the root of each section. With CDA, narrative exists for each section. Usually this means the narrative in CDA and FHIR will correspond. However, in some cases, a section will contain other sub-sections. In CDA, these "container" sections can have narrative. In FHIR, they cannot. Applications will need to have some way of managing this if converting.

**Discrete to human-readable linkages:** To ensure semantic traceability, both FHIR and CDA allow establishing linkages between text in the narrative and specific discrete elements in the encoded part of a document. If converting between FHIR and CDA, these linkages need to be converted as well. However, this is complicated by the fact that the granularity at which linkages can occur is different between the two specifications. In CDA, linkages can only occur at the level of a section or one of a couple of the entry types. With FHIR, linkages can occur at any level at all, including individual data type components or even portions of extensions. Converting from CDA to FHIR will be straight-forward, however there will be information loss when converting the other way.

\[%file newfooter%\]
