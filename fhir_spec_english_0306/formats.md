\[%settitle Formats%\]
\[%file newnavbar%\]
&lt;%fmtheader base%&gt; <span id="root"></span>
Resource Formats
================

|                                                |                                                     |                                                                                      |
|------------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): Normative | [Standards Status](versions.html#std-process):[Normative](versions.html#std-process) |

\[%normative page%\]
This page documents how the content of the resources are described. In actual exchange, resources can be represented in the following formats: [XML](xml.html), [JSON](json.html) and [Turtle](rdf.html). Additional [Bulk Data Formats](#bulk) are also undergoing exploration. Other representations are allowed, but are not described by this specification (though see link below .

<span id="defn"></span>
Resource Definition
-------------------

The resources are described in several different ways:

-   a hierarchical table that presents a logical view of the content
-   a UML diagram that summarizes the content graphically
-   a pseudo-XML syntax that provides a visual sense of what the end resource instances will look like in XML
-   a pseudo-JSON syntax that provides a visual sense of what the end resource instances will look like in JSON
-   a pseudo-Turtle syntax that provides a visual sense of what the end resource instances will look like in Turtle

In addition to this descriptive syntax, other definitional forms are available, including W3C schema, Schematron, JSON Schema, and the [StructureDefinition](structuredefinition.html) syntax defined internally.

<span id="table"></span>
### Logical table

The Logical View shows the resources as a tree structure with the following columns:

|                           |                                                                                                                                                                                                                                                                                                                                                                                                             |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Column**                | **Content**                                                                                                                                                                                                                                                                                                                                                                                                 |
| Name                      | The name of the element in the resource (manifests as XML element name or JSON or RDF property name). Some names finish with `[x]` - the meaning of this is discussed below. In addition, this column contains an icon that denotes the underlying type of the content. The icons are described below                                                                                                       |
| Flags                     | A set of information about the element that impacts how implementers handle them. The flags are described below                                                                                                                                                                                                                                                                                             |
| Card.                     | Cardinality: the lower and upper bounds on how many times this element is allowed to appear in the resource                                                                                                                                                                                                                                                                                                 |
| Type                      | The type of the element (hyperlinked to the definition of the type). Note that the type of the element has one of two meanings, depending on whether the element has defined children. If the element has children, then the element has an anonymous type that specializes the given type. If the element has no children, then the element has properties and children as specified by the nominated type |
| Description & Constraints | A description of the element, and details about constraints that are applied to it. Particularly, for coded elements, information about which codes can be used. The description comes from [ElementDefinition.short](elementdefinition-definitions.html#ElementDefinition.short)                                                                                                                           |

Here's an example:

<table>
<thead>
<tr class="header">
<th>Name</th>
<th>Flags</th>
<th>Card.</th>
<th>Type</th>
<th>Description &amp; Constraints</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="icon_resource.png" title="Resource" alt="." class="hierarchy" /> <a href="#" title="Definition">Resource Name</a></td>
<td></td>
<td></td>
<td><a href="resource.html">Base Type</a></td>
<td>Definition</td>
</tr>
<tr class="even">
<td><img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="tbl_vjoin.png" alt="." class="hierarchy" /><img src="icon_datatype.gif" title="Data Type" alt="." class="hierarchy" /> <a href="#" title="Definition">nameA</a></td>
<td><span title="This element is included in summaries">Σ</span></td>
<td>1..1</td>
<td><a href="#">TypeA</a></td>
<td>description of content</td>
</tr>
<tr class="odd">
<td><img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="tbl_vjoin.png" alt="." class="hierarchy" /><img src="icon_choice.gif" title="Choice of Types" alt="." class="hierarchy" /> <a href="#" title="Description">nameB[x]</a></td>
<td><span title="This element is a modifier element">?!</span><span title="This element is included in summaries">Σ</span></td>
<td>0..1</td>
<td></td>
<td>description<br />
<span title="1">SHALL at least have a value</span></td>
</tr>
<tr class="even">
<td><img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="tbl_vline.png" alt="." class="hierarchy" /><img src="tbl_vjoin.png" alt="." class="hierarchy" /><img src="icon_primitive.png" title="Primitive Data Type" alt="." class="hierarchy" /> <span title="Value of &quot;true&quot; or &quot;false&quot;">nameBType1</span></td>
<td></td>
<td>0..1</td>
<td><a href="#">TypeB</a></td>
<td></td>
</tr>
<tr class="odd">
<td><img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="tbl_vline.png" alt="." class="hierarchy" /><img src="tbl_vjoin_end.png" alt="." class="hierarchy" /><img src="icon_primitive.png" title="Primitive Data Type" alt="." class="hierarchy" /> <span title="Value of &quot;true&quot; or &quot;false&quot;">nameBType2</span></td>
<td><span title="This element has or is affected by some invariants">I</span></td>
<td>0..1</td>
<td><a href="#">typeC</a></td>
<td></td>
</tr>
<tr class="even">
<td><img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="tbl_vjoin_end.png" alt="." class="hierarchy" /><img src="icon_element.gif" title="Element" alt="." class="hierarchy" /> <a href="#" title="Definition">nameC</a></td>
<td></td>
<td>1..*</td>
<td>BackboneElement</td>
<td>Definition</td>
</tr>
<tr class="odd">
<td><img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="tbl_blank.png" alt="." class="hierarchy" /><img src="tbl_vjoin_end.png" alt="." class="hierarchy" /><img src="icon_datatype.gif" title="Data Type" alt="." class="hierarchy" /> <a href="#" title="Definition">nameD</a></td>
<td></td>
<td>1..1</td>
<td><a href="#">TypeD</a></td>
<td>Relevant Records</td>
</tr>
</tbody>
</table>

<span id="legend"></span>
Key to Type Icons

-   <img src="icon_resource.png" title="Resource" alt="." class="hierarchy" />: The base element for a resource (see [Resources](resource.html))
-   <img src="icon_element.gif" title="Element" alt="." class="hierarchy" />: An element that is part of the resource and has elements within it defined in the same resource or profile
-   <img src="icon_choice.gif" title="Choice of Types" alt="." class="hierarchy" />: An element which can have one of several different types (see below)
-   <img src="icon_primitive.png" title="Primitive Data Type" alt="." class="hierarchy" />: An element of a data type which describes an element that has a `value` attribute/property. These are also known as primitive types. All primitive type names start with a lower case letter
-   <img src="icon_datatype.gif" title="Data Type" alt="." class="hierarchy" />: An element of a data type which describes an element that has other elements. These are known as complex types. All complex type names defined in this specification start with an uppwer case letter
-   <img src="icon_reference.png" title="Reference to another Resource" alt="." class="hierarchy" />: An element that contains a reference to another resource (see [references](references.html))
-   <img src="icon_reuse.png" title="Reference to another Element" alt="." class="hierarchy" />: This element has the same content as another element defined within this resource or profile
-   <img src="icon_slice.png" title="Slice Definition" alt="." class="hierarchy" />: Introduction of a set of slices (see [Slicing](profiling.html#slicing))
-   <img src="icon_extension_complex.png" title="Complex Extension" alt="." class="hierarchy" />: A complex extension - one with nested extensions (see [Extensibility](extensibility.html#complex))
-   <img src="icon_extension_simple.png" title="Simple Extension" alt="." class="hierarchy" />: An extension that has a value and no nested extensions (see [Extensibility](extensibility.html))
-   <img src="icon_modifier_extension_complex.png" title="Complex Modifier Extension" alt="." class="hierarchy" />: A complex modifier extension - one with nested extensions (see [Extensibility](extensibility.html#complex))
-   <img src="icon_modifier_extension_simple.png" title="Simple Modifier Extension" alt="." class="hierarchy" />: A modifier extension that has a value and no nested extensions (see [Extensibility](extensibility.html))
-   <img src="icon_profile.png" title="Profile" alt="." class="hierarchy" />: The root of a logical profile

Key to Flags

-   `?!`: This element is a modifying element - see [Modifier Elements](conformance-rules.html#isModifier)
-   `S`: This element is an element that must be supported - see [MustSupport Elements](conformance-rules.html#mustSupport)
-   `Σ`: This element is an element that is part of the summary set - see [Summary Searches](search.html#summary)
-   `I`: This element defines or is affected by constraints - see [Constraints](conformance-rules.html#constraints)
-   `NE`: This element cannot have extensions (some infrastructural elements only)
-   [TU](versions.html#std-process): This element has a [standards status of Trial Use](versions.html#std-process) (for discussion about mixing standards status in a resource, see [Mixed Normative content](versions.html#std-process))
-   [N](versions.html#std-process): This element has a [standards status of Normative](versions.html#std-process)
-   [D](versions.html#std-process): This element has a [standards status of Draft](versions.html#std-process)

Notes:

-   Resource and Element names are case-sensitive (though duplicates that differ only in case are never defined)
-   Any elements that have a [primitive type](datatypes.html#primitive) will have a `value` attribute/property to contain the actual value of the element
-   This `value` attribute/property can never be empty. Either it is absent, or it is present with at least one character of non-whitespace content
-   Elements are assigned a cardinality that specifies how many times the element may or must appear.
-   Unless elements have children defined directly (as nameC does above) they are assigned one or more types (see [the data types](datatypes.html)). All the type names are hyperlinked to the source definition
-   Element reuse: Some data types that have children have the same set of children as some other element defined in the resource. In that case, the type of that element has a "see \[name\]" where \[name\] is the name of the element that has the defined children
-   Each element name is also a hyperlink to the formal definition of the element in the data dictionary that underlies the exchange formats.
-   Any of the elements may have an `id` attribute to serve as [the target of an internal reference](references.html#id). The `id` attribute is not shown in this format. Extensions are not always shown, but may appear except where the flag `NE` appears
-   FHIR elements can never be empty. If an element is present in the resource, it SHALL have either a value, child elements as defined for its type, or 1 or more [extensions](extensibility.html)
-   Infrastructural elements that are common to all resources are not shown in the logical representation. These are described in the common base classes [Resource](resource.html), and [DomainResource](domainresource.html)

The data type for a particular element is typically expressed as the name of the specified type with a hyperlink to its definition. However, there are two exceptions:

-   If the element supports multiple types (name ends with \[x\]), then the type will be a list of data type options, each separated by "|"
-   If one of the types is [Reference](references.html) or [canonical](datatypes.html#canonical), the data type might be followed by a list of allowed targets the reference is allowed to be. These might be resource names, data type names, or profile URLs, depending on the context. As well, the following symbols may appear that represent expectations of where the referenced resource is located:
    -   `b`: Resource must appear within the same [Bundle](bundle.html);
    -   `c`: Resource must be sent as a [contained](references.html) resource;
    -   `r`: Resource is a non-contained reference - i.e. to a resource within the same Bundle or to an external resource

In profiles, references to types may be profiled - i.e. Instances of the element must comply with a specified profile or one of a list of profiles. The canonical URLs of any applicable profiles are listed inside {}.

Where an element can have a choice of data types, or is a [Reference](references.html) these are represented by showing the common type (`Reference` or `Type`), and then showing the applicable data type names or resource types in a stereotype, separated by the `|` character. `Type` is not formally otherwise defined by this specification, but is a super type of all the data types.

<span id="choice"></span>
### Choice of Data Types

A few elements have a choice of more than one data type for their content. All such elements have a name that takes the form `nnn[x]`. The "nnn" part of the name is constant, and the "\[x\]" is replaced with the title-cased name of the type that is actually used. The table view shows each of these names explicitly.

Elements that have a choice of data type cannot repeat - they must have a maximum cardinality of 1. When constructing an instance of an element with a choice of types, the authoring system must create a single element with a data type chosen from among the list of permitted data types.

Note: In object-orientated implementations, this is naturally represented as a polymorphic property. However this is not necessary and the correct implementation varies according to the particular features of the language. In XML schema, these become an xs:choice of element. To help with code generation, [a list of choice elements](choice-elements.json) is published.

<span id="uml"></span>
### UML

The UML diagrams represent the same content as a series of classes that represent the elements of a resource.

[NameA](#uml) [](datatypes-definitions.html#Timing.event)
Documentation
element : [\[type\]](#uml) \[0..\*\] [](datatypes-definitions.html#Timing.code)
Documentation
nameB : [CodeableConcept](datatypes.html#CodeableConcept) \[0..1\] « [](#uml)
Value Set Description (Strength=Preferred)
Value Set Name? » NameC [](datatypes-definitions.html#Timing.repeat.bounds_x_)
Documentation
value\[x\] : [Type](formats.html#umlchoice) \[0..1\] « [Type1](#uml)|[Type2](#uml)|[Type3](#) » [](#uml)
Docuementation
reference : [Reference](references.html) \[0..1\] « [Resource1](#uml)|[Resource2](#uml) » [](datatypes-definitions.html#Timing.repeat)
Documentation
nameC \[0..1\]
The elements and the data types are hyperlinks to the formal definitions of the parts. The UML diagrams also show the vocabulary bindings. These are hyperlinks to the value set details.

<span id="umlchoice"></span>
The actual order of the elements in XML cannot be determined from the diagram, nor whether a UML property becomes an element or an attribute in the XML representation.

<span id="binding"></span>
Bindings to value sets are indicated by a stereotype on the element. The stereotype has 2 parts: the value set name, and a symbol that denotes the strength of the binding:

-   ??: [Example](terminologies.html#example) Binding
-   ?: [Preferred](terminologies.html#example) Binding
-   +: [Extensible](terminologies.html#example) Binding
-   !: [Required](terminologies.html#example) Binding

<span id="wire"></span>
### Serialization Format Representations

This specification defines the following ways to represent resources when they are exchanged:

-   [JSON](json.html)
-   [XML](xml.html)
-   [RDF (Turtle)](rdf.html)

Systems SHALL declare which format(s) they support in their [Capability Statement](capabilitystatement.html). If a server receives a request for its Capability Statement in a format it does not otherwise support, it SHALL return a `406 Not Acceptable`. Note: `406` is the appropriate response when the `Accept` header requests a format that the server does not support, and `415 Unsupported Media Type` when the client posts a format that is not supported to the server.

Clients and servers can choose what syntax(s) to implement. In the interests of interoperability, servers SHOULD support both the XML and JSON formats, which have the same functionality, for different technical stacks. The RDF format has quite different benefits - primarily around data analysis rather than exchange.

<span id="bulk"></span>
#### Bulk Data Formats

Unlike this rest of this page, the bulk use formats are draft until further experience is gained with their use. Their status will be reviewed in a future version of FHIR.

The XML and JSON formats are designed to support typical system process-based data exchange uses. FHIR is also used to exchange large amounts of data- 1000s of records, or more (up to billions). The formats above can be used for this, but more suitable formats exist. This specification documents (or is exploring documenting) the following formats:

-   [ND-Json](nd-json.html) (New line delimited JSON)
-   Google Protobuf (under consideration)
-   Apache Parquet/Avro (bulk data formats under consideration)

\[%file newfooter%\]
