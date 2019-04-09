\[%settitle XML Format%\]
\[%file newnavbar%\]
&lt;%fmtheader xml%&gt; <span id="root"></span>
XML Representation of Resources
-------------------------------

|                                              |                                                     |                                                                                      |
|----------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt its%\]](%5B%wg%20its%%5D) Work Group | [Maturity Level](versions.html#maturity): Normative | [Standards Status](versions.html#std-process):[Normative](versions.html#std-process) |

\[%normative page%\]
The XML representation for a resource is described using this format:

``` spec
 <name xmlns="http://hl7.org/fhir" (attrA="value")>   
   <!-- from Resource: id, meta, implicitRules, and language -->
   <nameA><!--  1..1 type description of content  --><nameA>
   <nameB[x]><!-- 0..1 type1|type1 description  --></nameB[x]>
   <nameC> <!--  1..* -->
     <nameD><!-- 1..1 type>Relevant elements  --></nameD>
   </nameC>
 <name>
```

Using this format:

-   To build a valid XML instance of a resource, simply replace the contents of the elements and attributes with valid content as described by the cardinality, type rules and content description found in the comment in each element
-   Resource and Element names are case-sensitive (though duplicates that differ only in case are never defined)
-   Elements must always appear in the order documented
-   When an element is allowed to repeat, the elements are ordered, and the technical infrastructure needs to be able to access the items in the right order (see also [Cardinality Rules](conformance-rules.html#cardinality) for a further description of elements with cardinality &gt; 1)
-   A few properties are represented as attributes: values of primitive types in a `value` attribute, extension URLs in the `url` attribute on an extension, and the `id` property on elements (but not on resources, where the resource id is an element)
-   Any of the XML elements may have an id attribute to serve as [the target of an internal reference](narrative.html#internal). The id attribute is not shown in this format
-   FHIR elements are always in the namespace <http://hl7.org/fhir>. This is usually specified as the default namespace on the root element. The only other namespace that occurs in FHIR resources is the XHTML namespace - [XHTML is found in most resources](narrative.html)
-   Infrastructural elements must appear prior to any other defined child elements in the following order:
    -   First, the elements from the [base resource](resource.html), in order
    -   Second, the elements from the [domain resource](domainresource.html), in order
-   FHIR elements are never empty. If an element is present in the resource, it SHALL have either a value attribute, child elements as defined for its type, or 1 or more [extensions](extensibility.html)
-   Attributes cannot be empty. Either they are absent, or they are present with at least one character of non-whitespace content
-   <span id="whitepace"></span>Implementers SHOULD trim leading and trailing whitespace before writing and SHOULD trim leading and trailing whitespace when reading attribute values (for XML schema conformance)
-   The lock icon (![??](lock.png)) denotes that an element defines or is affected by [additional rules](conformance-rules.html#constraints) that control its presence and/or content
-   XML comments, processing instructions and formatting are not part of the contents of a resource
-   There SHALL be no DTD references in FHIR resources (because of the [XXE security exploit](https://en.wikipedia.org/wiki/XML_external_entity_attack))
-   XML resources SHALL be exchanged using UTF-8 encoding. Specifying the character encoding using an XML declaration (`<?xml encoding="UTF-8" ?>`) is optional but recommended
-   Other processing instructions SHOULD not be included and SHALL NOT be required to properly understand and/or present the data or narrative of the resource. Applications MAY preserve processing instructions when handling resources, but are not required to do so
-   The MIME-type for this format is `application/fhir+xml`.

<span id="schema"></span>
### XML Schema and Schematron

This specification provides schema definitions for all the resource and data type content models it describes.

The base schema is called "[fhir-base.xsd](fhir-base.xsd)" and defines all the datatypes and base infrastructure types. In addition, there is a schema for each resource and a common schema [fhir-all.xsd](fhir-all.xsd) that includes all the resource schemas. For schema processors that do not like circular includes, there is [a single schema](fhir-single.xsd) that contains everything.

In addition to the w3c schema files, this specification also provides Schematron files that enforce most of the constraints defined for the datatypes and resources, though some are only expressible and validatable using [FHIRPath](fhirpath.html). These are packaged as files for each resource.

XML that is exchanged SHALL be valid against the w3c schema and Schematron, though being valid against the schema and Schematron is not sufficient to be a conformant instance: this specification makes several rules that cannot be checked by either mechanism. Operational systems may choose to use schema tools to check validation, but are not required to do so. Exchanged content SHALL NOT specify the schema or even contain the schema instance namespace in the resource itself.

Given the way [extensions](extensibility.html) work, applications reading XML resources will never encounter unknown elements. However, once an application starts trading with other applications that conform to later versions of this specification, unknown XML elements may be encountered. Applications MAY choose to ignore unknown elements to foster forwards compatibility in this regard, but may also choose not to - which would be the normal behavior for schema generated applications.

<span id="schema-gen"></span>
### Code Generation Schema

In addition to the validation schema, this specification provides a set of schemas suitable for code generation. These schemas describe the same XML syntax, but apply less validation to create schemas that work better with code generation tooling.

Specifically, these schemas are generated without any `xsd:choice` elements, for code generators that don't deal with choices well. Implementers that use these schemas will need to enforce the correct usage of the [choice elements](formats.html#choice) without schema support.

Implementers making use of schema-driven code generation tooling need to consider how to handle the [decimal](datatypes.html#decimal) data type. The decimal data type is defined to be precision aware - that is, that implementers need to preserve the difference between "2.0" and "2.00" - this is ubiquitously considered important in handling observed data in healthcare. Both schemas map this data type to a union of `xsd:decimal` and `xsd:double`, but the base [W3C schema decimal type](http://www.w3.org/TR/xmlschema-2/#decimal) is specified not to be precision aware. Schema driven implementations vary as to how precision is handled. Implementers will need to determine how their generated code handles decimals/doubles and consider changing the type for decimal in their schema from `xsd:decimal/double` to `xsd:string`. Specifically, implementers may wish to change:

      <xs:simpleType name="decimal-primitive">
        <xs:union memberTypes="xs:decimal xs:double"/>
      </xs:simpleType>

to this:

      <xs:simpleType name="decimal-primitive">
        <xs:restriction base="xs:string">
          <xs:pattern value="-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?"/>
        </xs:restriction>
      </xs:simpleType>

Alternatively, if supported, implementers may wish to use the [precisionDecimal](http://www.w3.org/TR/xsd-precisionDecimal/) from the XSD 1.1 framework.

Note that most code generation frameworks ignore the pattern restriction.

<span id="canonical"></span> <span id="digsig"></span>
### Canonical XML

Resources and/or Bundles may be digitally signed (see [Bundle](bundle.html) and [Provenance](provenance.html)).

This specification defines the following method for canonicalizing FHIR resources, when represented as XML:

-   No whitespace other than single spaces in attribute values and in the XHTML in the [Narrative](narrative.html)
-   Use default namespaces for the FHIR and XHTML namespaces
-   Omit all comments
-   Always use the Unicode character representation for any XML entities (e.g. `&#39;` instead of `&quot;`)
-   Include the XML processing instruction `<?xml version="1.0" encoding="UTF-8"?>`
-   Using the XML canonical method [Canonical XML 1.1](http://www.w3.org/TR/xmldsig-core1/#sec-Canonical) (`http://www.w3.org/2006/12/xml-c14n11`)

This canonicalization method is identified by the URI `http://hl7.org/fhir/canonicalization/xml`. The following additional canonicalization URIs are also defined:

|                                                     |                                                                                                                                                                                                                                                                                                                                                                                                            |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| http://hl7.org/fhir/canonicalization/xml\#data      | The narrative (`Resource.text`) is omitted prior to signing (note the deletion is at `Resource.text`, not `Resource.text.div`)                                                                                                                                                                                                                                                                             |
| http://hl7.org/fhir/canonicalization/xml\#static    | In addition to narrative (Resource.text), the `Resource.meta` element is removed. This makes the signature robust as the content is moved from server to server, or workflow and access tags are added or removed. Note that workflow and security tags may contain information important to the handling of the resource, so meta elements should be protected from tampering by other means if unsigned. |
| http://hl7.org/fhir/canonicalization/xml\#narrative | The method only retains the `Resource.id` and Narrative (`Resource.text`                                                                                                                                                                                                                                                                                                                                   |
| http://hl7.org/fhir/canonicalization/xml\#document  | The signs everything in a Bundle, except for the Bundle.id and Bundle.metadata on the root Bundle (allows for a document to be copied from server to server)                                                                                                                                                                                                                                               |

These canonicalization methods allow systems the flexibility to sign the various portions of the resource that matter for the workflow the signature serves. These canonicalization algorithms do not work for enveloped signatures. This will be researched and addressed in a future release. This specification may define additional canonicalizations in the future, and other specifications might also define additional canonicalization methods.

\[%impl-note%\] One consequence of signing the document is that URLs, identifiers and internal references are frozen and cannot be changed. This might be a desired feature, but it may also cripple interoperability between closed ecosystems where [re-identification](managing.html) frequently occurs. For this reason, it is recommended that systems consider carefully the impact of any signature processes. The impact of signatures on [Document bundles](documents.html) and their related processes is the most well understood use of digital signatures. \[%end-note%\]

\[%file newfooter%\]
