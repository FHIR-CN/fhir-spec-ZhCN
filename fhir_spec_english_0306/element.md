\[%settitle Element%\]
\[%file newnavbar%\]
&lt;%elheader base%&gt;
Element
=======

|                                                |                                                     |                                                                                      |
|------------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): Normative | [Standards Status](versions.html#std-process):[Normative](versions.html#std-process) |

\[%normative page%\]
The base definition for all elements contained inside a resource. All elements, whether defined as a [Data Type](datatypes.html) (including primitives) or as part of a resource structure, have this base content:

-   [Extensions](extensibility.html)
-   An internal id

There are 3 kinds of descendant types that specialize `Element`:

-   [Primitive data types](datatypes.html#primitive), that add a primitive value property of the specified type
-   [Complex data types](datatypes.html#complex), that add their own children (all of which are also elements)
-   [BackboneElement](backboneelement.html), A specialization that adds modifierExtension, which is the super-type of all the element types defined in resource definitions (e.g. [Patient.contact](patient.html#resource))

Note that resources themselves all specialize the base type [Resource](resource.html).

<span id="definition"></span>
Content
-------

-   [Structure](#tabs-Element-struc)
-   [UML](#tabs-Element-uml)
-   [XML](#tabs-Element-xml)
-   [JSON](#tabs-Element-json)
-   [All](#tabs-Element-all)

**Structure**

[Name](formats.html#table "The logical name of the element")
[Flags](formats.html#table "Information about the use of the element")
[Card.](formats.html#table "Minimum and Maximum # of times the element can appear in the instance")
[Type](formats.html#table "Reference to the type of the element")
[Description & Constraints](formats.html#table "Additional information about the element")<span style="float: right">[![doco](help16.png)](formats.html#table "Legend for this format")</span>
<img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="icon_element.gif" title="Element" alt="." class="hierarchy" /> [Element](element-definitions.html#Element "Element : Base definition for all elements in a resource.")<span id="Element"></span>
<span title="This element has or is affected by some invariants">I</span>
n/a
Base for all elements
<span title="ele-1" style="font-style: italic">All FHIR elements must have a @value or children</span>
<img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="tbl_vjoin.png" alt="." class="hierarchy" /><img src="icon_primitive.png" title="Primitive Data Type" alt="." class="hierarchy" /> [id](element-definitions.html#Element.id "Element.id : Unique id for the element within a resource (for internal references).")<span id="Element.id"></span>
0..1
[string](datatypes.html#string)
Unique id for inter-element referencing
<img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="tbl_vjoin_end.png" alt="." class="hierarchy" /><img src="icon_extension_simple.png" title="Extension" alt="." class="hierarchy" /> [extension](element-definitions.html#Element.extension "Element.extension : May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.")<span id="Element.extension"></span>
0..\*
[Extension](extensibility.html#Extension)
Additional content defined by implementations
[![doco](help16.png) Documentation for this format](formats.html#table "Legend for this format")

**UML Diagram** ([Legend](formats.html#uml))

Element [](extensibility.html)
Internal ID
id : [string](datatypes.html#string) 0..1 [](extensibility.html)
Extensions - as described for all elements: additional information that is not part of the basic definition of the resource / type
extension : [Extension](extensibility.html) 0..\*

**XML Template**

``` spec
<[name] xmlns="http://hl7.org/fhir" id="Internal id (e.g. like xml:id) (string)"> 
 <extension><!-- 0..* Extension Additional content defined by implementations --></extension>
</[name]>
```

**JSON Template**

``` spec
// complex types:

{
  "id" : "<string>", // Internal Id
  "extension" : [{//  Additional content defined by implementations
    // from Element: extension (recursive)
    "url" : "<uri>", // R!  identifies the meaning of the extension
    "value[x]" : <*> // identifies the meaning of the extension
  }]
}
// primitive types:

{
  "{name}" : "value",  // The primitive value
  "{name}_" : { // Special syntax for the id and extensions
    "id" : "<string>", // Internal Id
    "extension" : [{//  Additional content defined by implementations
      // from Element: extension (recursive)
      "url" : "<uri>", // R!  identifies the meaning of the extension
      "value[x]" : <*> // identifies the meaning of the extension
    }]
  }
}
```

<span id="tbl"></span>
**Structure**

[Name](formats.html#table "The logical name of the element")
[Flags](formats.html#table "Information about the use of the element")
[Card.](formats.html#table "Minimum and Maximum # of times the element can appear in the instance")
[Type](formats.html#table "Reference to the type of the element")
[Description & Constraints](formats.html#table "Additional information about the element")<span style="float: right">[![doco](help16.png)](formats.html#table "Legend for this format")</span>
<img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="icon_element.gif" title="Element" alt="." class="hierarchy" /> [Element](element-definitions.html#Element "Element : Base definition for all elements in a resource.")<span id="Element"></span>
<span title="This element has or is affected by some invariants">I</span>
[Element](element.html)
Base for all elements
<span title="ele-1" style="font-style: italic">All FHIR elements must have a @value or children</span>
<img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="tbl_vjoin.png" alt="." class="hierarchy" /><img src="icon_primitive.png" title="Primitive Data Type" alt="." class="hierarchy" /> [id](element-definitions.html#Element.id "Element.id : Unique id for the element within a resource (for internal references).")<span id="Element.id"></span>
0..1
[string](datatypes.html#string)
Unique id for inter-element referencing
<img src="tbl_spacer.png" alt="." class="hierarchy" /><img src="tbl_vjoin_end.png" alt="." class="hierarchy" /><img src="icon_extension_simple.png" title="Extension" alt="." class="hierarchy" /> [extension](element-definitions.html#Element.extension "Element.extension : May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.")<span id="Element.extension"></span>
0..\*
[Extension](extensibility.html#Extension)
Additional content defined by implementations
[![doco](help16.png) Documentation for this format](formats.html#table "Legend for this format")

<span id="uml"></span>
**UML Diagram** ([Legend](formats.html#uml))

Element [](extensibility.html)
Internal ID
id : [string](datatypes.html#string) 0..1 [](extensibility.html)
Extensions - as described for all elements: additional information that is not part of the basic definition of the resource / type
extension : [Extension](extensibility.html) 0..\*

<span id="xml"></span>
**XML Template**

``` spec
<[name] xmlns="http://hl7.org/fhir" id="Internal id (e.g. like xml:id) (string)"> 
 <extension><!-- 0..* Extension Additional content defined by implementations --></extension>
</[name]>
```

<span id="json"></span>
**JSON Template**

``` spec
// complex types:

{
  "id" : "<string>", // Internal Id
  "extension" : [{//  Additional content defined by implementations
    // from Element: extension (recursive)
    "url" : "<uri>", // R!  identifies the meaning of the extension
    "value[x]" : <*> // identifies the meaning of the extension
  }]
}
// primitive types:

{
  "{name}" : "value",  // The primitive value
  "{name}_" : { // Special syntax for the id and extensions
    "id" : "<string>", // Internal Id
    "extension" : [{//  Additional content defined by implementations
      // from Element: extension (recursive)
      "url" : "<uri>", // R!  identifies the meaning of the extension
      "value[x]" : <*> // identifies the meaning of the extension
    }]
  }
}
```

 

**Constraints**

\[%dt.constraints Element%\]
This constraint exists to reduce syntactical variation in resource contents. If an element has no children, then it is always omitted from the resource, as opposed to optionally present without any content.

<span id="its"></span>
Representation of Element
-------------------------

As the base type for all elements included in a resource, `Element` is an important structural element of FHIR. Even the primitive types inherit the base features and representation rules that apply to the Element type.

<span id="xml"></span>
XML Representation
------------------

Elements are represented by an XML element. The name of the element comes from the context in which it is used, not from the type. The internal `id` is represented as an attribute (similar to xml:id, but see below about scope). Extensions are represented as XML elements. Here is the representation for an element 'use' of type [Coding](datatypes.html#Coding):

```
  <use id="[internal id]">
    <extension url="..."/>
      ... if there are any extensions
    <extension>
    .. elements of Coding type...
  </use>
```

Primitive types have the same representation; the actual primitive value appears as an XML attribute named `value` on the XML element. For example, a code property named "status" will be represented like this:

```
  <status id="[internal id]" value="[value of code]"">
    <extension url="..."/>
      ... if there are any extensions
    <extension>
  </status>
```

<span id="json"></span>
JSON Representation
-------------------

Elements (except for primitive types, see below) are represented by a JSON object property. The name of the property comes from the context in which it is used, not from the type. The internal `id` is represented as a JSON string property named "id". Extensions are represented in a JSON array of objects named "extension". Here is the representation for a property 'use' of type [Coding](datatypes.html#Coding):

``` json
  {
    "use" : {
      "id" : "[internal id]",
      "extension" : [
        ..extensions, if present...
      ],
      .. properties of Coding type...
    }
  }
```

Primitive types are represented differently; the actual primitive value appears as a JSON string or number property. If an internal id or extensions are present, they appear in a JSON object with the name of the primitive value property with "\_" prepended. For example, a code property named "status" will be represented like this:

``` json
  {
    "status" : "[value of code]",
    "_status" : {
      "id" : "[internal id]",
      "extension" : [
        ..extensions, if present...
      ]
    }
  }
```

The exact use of this pattern is [described here](json.html#primitive).

<span id="id"></span>
Internal Id Scope
-----------------

The `id` property of the element is defined to allow implementers to build implementation functionality that makes use of internal references inside the resource. This specification does not define any general use for the internal id, though some resources (e.g. [StructureDefinition](elementdefinition.html#id)) and extensions (e.g. [originalText](extension-originaltext.html), [narrativeLink](extension-narrativelink.html)) make use of it.

The internal id is unique within the scope of the resource that contains it. Specifically, this means:

-   The id SHALL be unique within a given resource
-   The uniqueness boundary extends into contained resources. i.e. a contained resource cannot have the same id as any element in the resource that contains it or any other contained resource
-   The uniqueness boundary is broken at Bundle.entry.resource and Parameters.parameter.resource, since these are elements that aggregate different resources
-   The `id` element does not have extensions itself

These rules ensure that there is no need to change internal identifiers while exchanging resources.

\[%file newfooter%\]
