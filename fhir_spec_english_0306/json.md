\[%settitle JSON Format%\]
\[%file newnavbar%\]
&lt;%fmtheader json%&gt; <span id="json"></span>
JSON Representation of Resources
--------------------------------

|                                              |                                                     |                                                                                      |
|----------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt its%\]](%5B%wg%20its%%5D) Work Group | [Maturity Level](versions.html#maturity): Normative | [Standards Status](versions.html#std-process):[Normative](versions.html#std-process) |

\[%normative page%\]
The JSON representation for a resource is based on the [JSON format described in STD 90 (RFC 8259)](https://www.rfc-editor.org/info/std90), and is described using this format:

``` spec
{
  "resourceType" : "[Resource Type]",
  // from Source: property0
  "property1" : "<[primitive]>", // short description
  "property2" : { [Data Type] }, // short description
  "property3" : { // Short Description
    "propertyA" : { CodeableConcept }, // Short Description (Example)
  },
  "property4" : [{ // Short Description
    "propertyB" : { Reference(ResourceType) } // R!  Short Description
  }]
}
```

Using this format:

-   To build a valid JSON instance of a resource, replace the contents of the property values with valid content as described by the type rules and content description found in the property value for each element
-   In this example:
    1.  `property1` has a primitive data type; the value of the property will be as described for the stated type
    2.  `property2` has a complex data type; the value of the property is an object that has the content as described for the stated type
    3.  `property3` is an object property that contains additional properties (e.g. propertyA; the allowable properties are listed (but also include extensions as appropriate)
    4.  `property4` is an array property that contains items which are objects themselves. The items may have any of the types already encountered in points 1-3
    5.  `propertyA` is an example of an object property that has a binding to a value set - the Short description is a link to the value set. In addition, the binding strength is shown
    6.  `propertyB` is an example of an object property that has a reference to a particular kind of resource
-   Property names are case-sensitive (though duplicates that differ only in case are never defined)
-   Property names SHALL be unique. Note: this is not explicitly stated in the original JSON specification,so stated for clarity here
-   Properties can appear in any order
-   XHTML is represented as an escaped string
-   Objects are never empty. If an element is present in the resource, it SHALL have properties as defined for its type, or 1 or more [extensions](extensibility.html)
-   String property values can never be empty. Either the property is absent, or it is present with at least one character of content
-   The <span style="color: brown">**R!**</span> denotes that an element is mandatory - it must be present (or in an array, at least one item must be present)
-   In this format, `//` is used for comments. While // is legal in Javascript, it is not legal in JSON, and comments SHALL not be in JSON instances irrespective of whether partiular applications ignore them
-   The character encoding is always UTF-8
-   The MIME-type for this format is `application/fhir+json`.

Given the way [extensions](extensibility.html) work, applications reading JSON resources will never encounter unknown properties. However, once an application starts trading with other applications that conform to later versions of this specification, unknown properties may be encountered. Applications MAY choose to ignore unknown properties in order to foster forwards compatibility in this regard, but may also choose not to.

<span id="xml"></span>
### Comparison with XML

The JSON format is similar to the XML format:

-   The names for the JSON object members are the same as the names of the elements and attributes in XML, including elements that may repeat. Property names are case sensitive
-   Just as in XML, JSON objects and arrays are never empty, and properties never have null values (except for a special case documented below). Omit a property if it is empty
-   JSON whitespace is not part of the contents of a resource. Applications MAY preserve the whitespace when handling resources, but are not required to do so. Note that digital signatures may depend on the whitespace

There are differences from XML:

-   There are no namespaces in the JSON representation
-   The type of the resource is represented differently in JSON - instead of being the name of the base object (there is none in JSON), it is carried as the property `resourceType`
-   The order of properties of an object is not significant in the JSON representation, though order within an array SHALL be maintained
-   JSON does not have a notion of attributes versus elements, so attributes (e.g. `id`, `value`) are handled differently (see below)
-   JSON has the array notation, which is used to represent repeating elements. Note that arrays are used when the item might repeat, even if it does not repeat in a specific instance
-   The XHTML `<div>` element in the [Narrative](narrative.html) datatype is represented as a single escaped string of XHTML. This is to avoid problems in JSON with mixed content, etc. The XHTML SHALL still conform to the rules described for [the Narrative](narrative.html)

The JSON format for the resources follows the standard XML format closely to make interconversion easy, and so that XPath queries can easily be mapped to query the JSON structures. However, the differences - particularly the repeating element one, which cannot be avoided - mean that generic XML --&gt; JSON converters are not able to perform correctly. The [reference platforms](downloads.html#refimpl) provide XML &lt;--&gt; JSON conversion functionality that accommodates these FHIR-specific characteristics.

<span id="repeat"></span>
### JSON Representation for repeating elements

An element that has a maximum cardinality of &gt;1 (e.g. `x..*` in the definitions) may occur more than once in the instance. In XML, this is simply done by repeating the XML element multiple times. In JSON, this is done by using an array type. Note that:

-   The name of the array is singular - the same as the XML element
-   An item that may repeat is represented as an array even in the case that it doesn't repeat so that the process of parsing the resource is the same either way

``` xml
 <code>
   <coding>
     <system value="http://snomed.info/sct"/>
     <code value="104934005"/>
   </coding>
   <coding>
     <system value="http://loinc.org"/>
     <code value="2947-0"/>
   </coding>
 </code>
```

is represented in JSON like this:

``` json
{
 "coding": [
   {
     "system" : "http://snomed.info/sct",
     "code" : "104934005"
   },
   {
     "system" : "http://loinc.org",
     "code" : "2947-0"
   }
 ]
}
```

<span id="primitive"></span>
### JSON representation of primitive elements

FHIR elements with primitive data types are represented in two parts:

-   A JSON property with the name of the element, which has a JSON type of number, boolean, or string
-   a JSON property with `_` prepended to the name of the element, which, if present, contains the value's id and/or extensions

The FHIR types [integer](datatypes.html#integer) and [decimal](datatypes.html#decimal) are represented as a JSON number, the FHIR type [boolean](datatypes.html#boolean) as a JSON boolean, and all other types are represented as a JSON string which has the same content as that specified for the relevant data type. Whitespace is always significant (i.e. no leading and trailing spaces for non-strings).

``` xml
 <code value="abc"/> <!-- code -->
 <date value="1972-11-30"/> <!-- dateTime -->
 <deceased value="false" /> <!-- boolean -->
 <count value="23" />  <!-- integer -->
```

is represented in JSON as

``` json
 "code" : "abc",
 "date" : "1972-11-30",
 "deceased" : false,
 "count" : 23
```

<span id="decimal"></span> \[%dragons-start%\]
When using a JavaScript JSON.parse() implementation, note that JavaScript natively supports only one numeric datatype, which is a floating point number. This can cause loss of precision for FHIR numbers. In particular, trailing 0s after a decimal point will be lost e.g. 2.00 will be converted to 2. The FHIR decimal data type is defined such that precision, including trailing zeros, is preserved for presentation purposes, and this is widely regarded as critical for correct presentation of clinical measurements. Implementations should consider using a custom parser and big number library (e.g. <https://github.com/jtobey/javascript-bignum>) to meet these requirements.

\[%dragons-end%\]
If the value has an id attribute, or extensions, then this is represented as follows:

<span id="null"></span>
``` xml
 <birthDate id="314159" value="1970-03-30" >
   <extension url="http://example.org/fhir/StructureDefinition/text">
     <valueString value="Easter 1970"/>
   </extension>
 </birthDate>
```

is represented in JSON as:

``` json
 "birthDate": "1970-03-30",
 "_birthDate": {
   "id": "314159",
   "extension" : [ {
      "url" : "http://example.org/fhir/StructureDefinition/text",
      "valueString" : "Easter 1970"
   }]
 }
```

Note: If the primitive has an id attribute or extension, but no value, only the property with the `_` is rendered.

In the case where the primitive element may repeat, it is represented in two arrays. JSON null values are used to fill out both arrays so that the id and/or extension are aligned with the matching value in the first array, as demonstrated in this example:

``` xml
 <code value="au"/>
 <code value="nz">
   <extension url="http://hl7.org/fhir/StructureDefinition/display">
     <valueString value="New Zealand a.k.a Kiwiland"/>
   </extension>
 </code>
```

is represented in JSON as:

``` json
 "code": [ "au", "nz" ],
 "_code": [
   null,
   {
     "extension" : [ {
        "url" : "http://hl7.org/fhir/StructureDefinition/display",
        "valueString" : "New Zealand a.k.a Kiwiland"
     }]
   }
  ]
```

Note: when one of the repeating elements has no value, it is represented in the first array using a null. When an element has a value but no extension/id, the second array will have a null at the position of that element.

\[%impl-note%\] The representation of primitive data types has been split into two parts like this in order to simplify the representation of simple primitive values without id or extensions. This does have the cost of making the representation of the id attribute and extensions more ungainly, but these are both rarely used with primitive data types. \[%end-note%\] <span id="complex"></span>
### JSON representation of Elements and Complex Data types

Elements, and complex [datatypes](datatypes.html) (types that contain named elements of other types) are represented using a JSON object, containing a member for each element in the datatype. Composites can have id attributes, which are converted to JSON member values, in the same manner as described for primitives. For example:

``` xml
<Patient>
  <text>
    <status value="generated" />
    <div xmlns="http://www.w3.org/1999/xhtml"><p>...</p></div>
  </text>
  <name id="f2">
    <use value="official" />
    <given value="Karen" />
    <family id="a2" value="Van" />
  </name>
</Patient>
```

is represented in JSON as:

``` json
{
  "name" : [{
    "id" : "f2",
    "use" : "official" ,
    "given" : [ "Karen" ],
    "family" :  "Van",
    "_family" : {"id" : "a2"}
   }],
  "text" : {
    "status" : "generated" ,
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>...</p></div>"
  }
}
```

Things to note here are:

-   Both given is a repeating XML elements, so it is serialized as an Array, whether or not it repeats in this instance
-   In the family part of `name`, the `id` is added represented in `_family` as described above, while the `id` on the name itself is represented as just another property
-   The XHTML content in the `div` element which is in the Narrative element `text` is represented as an escaped string in the value property in JSON. The xhtml root element needs to be a &lt;div&gt; in the xhtml namespace

<span id="resources"></span>
### JSON representation of Resources

A resource is a JSON object with a property `resourceType` which informs the parser which resource type this is:

``` json
{
  "resourceType" : "Patient",
  "text" : {
    "status" : "generated" ,
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>...</p></div>"
  }
  // etc...
}
```

Note that parsers cannot assume that the resourceType property will come first.

\[%impl-note%\] This is a problem for several JSON -&gt; Object serializers that assume that the resourceType property does come first, including [Json.NET](http://james.newtonking.com/json). However, some JSON generators do not give the authoring application control of the order of the property values, and so these implementations cannot interoperate with implementations that make assumptions about order. Given that JSON says that the property values are an unordered map of name/value pairs, this specification cannot require that properties come in any particular order, though implementers may choose to fix the property order if they are able (and the reference platforms provided with this specification do so). \[%end-note%\]
There is [a sample file](json-edge-cases.json) with many edge cases to help test JSON parsers.

<span id="sig"></span> <span id="canonical"></span>
### Canonical JSON

Resources and/or Bundles may be digitally signed (see [Bundle](bundle.html) and [Provenance](provenance.html)).

This specification defines the following method for canonicalizing FHIR resources, when represented as JSON:

-   No whitespace other than single spaces in property values and in the xhtml in the [Narrative](narrative.html)
-   Order properties alphabetically

This canonicalization method is identified by the URI `http://hl7.org/fhir/canonicalization/json`. The following additional canonicalization URIs are also defined:

|                                                      |                                                                                                                                                                                                                                                                                                                                                                                                            |
|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| http://hl7.org/fhir/canonicalization/json\#data      | The narrative (`Resource.text`) is omitted prior to signing (note the deletion is at `Resource.text`, not `Resource.text.div`)                                                                                                                                                                                                                                                                             |
| http://hl7.org/fhir/canonicalization/json\#static    | In addition to narrative (Resource.text), the `Resource.meta` element is removed. This makes the signature robust as the content is moved from server to server, or workflow and access tags are added or removed. Note that workflow and security tags may contain information important to the handling of the resource, so meta elements should be protected from tampering by other means if unsigned. |
| http://hl7.org/fhir/canonicalization/json\#narrative | This method only retains the `Resource.id` and `Narrative` elements                                                                                                                                                                                                                                                                                                                                        |
| http://hl7.org/fhir/canonicalization/json\#document  | The signs everything in a Bundle, except for the Bundle.id and Bundle.metadata on the root Bundle (allows for a document to be copied from server to server)                                                                                                                                                                                                                                               |

These canonicalization methods allow system the flexibility to sign the various portions of the resource that matter for the workflow the signature serves. These canonicalization algorithms do not work for enveloped signatures. This will be researched and addressed in a future release. This specification may define additional canonicalizations in the future, and other specifications might also define additional canonicalization methods.

\[%impl-note%\] One consequence of signing the document is that URLs, identifiers and internal references are frozen and cannot be changed. This might be a desired feature, but it may also cripple interoperability between closed ecosystems where [re-identification](managing.html) frequently occurs. For this reason, it is recommended that systems consider carefully the impact of any signature processes. The impact of signatures on [Document bundles](documents.html) and their related processes is the most well understood use of digital signatures. \[%end-note%\]

\[%file newfooter%\]
