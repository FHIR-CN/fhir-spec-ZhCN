\[%settitle Data Types%\]
\[%file newnavbar%\]
&lt;%dtheader base%&gt;
Data Types
==========

|                                                |                                                     |                                                                                                |
|------------------------------------------------|-----------------------------------------------------|------------------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): Normative | [Standards Status](versions.html#std-process):[Partially Normative](versions.html#std-process) |

\[%normative page%\]
The FHIR specification defines a set of data types that are used for the resource elements. There are four categories of data types:

1.  Simple / primitive types, which are single elements with a primitive value ([below](#primitive))
2.  General-purpose complex types, which are re-usable clusters of elements ([below](#complex))
3.  Metadata types: A set of types for use with metadata resources
4.  Special purpose data types - defined elsewhere in the specification for specific usages

This page describes the general-purpose data types (categories 1 and 2).

**Data Types Summary**.

Legend: see [Standards Status Colors](versions.html#std-process)

**Primitive Types**
\[%diagram datatypes/allprimitivetypes.diagram 1dt%\]

**General-Purpose Data types**
\[%diagram datatypes/alltypes.diagram 2dt%\]

**Metadata Types**
\[%diagram datatypes/metadatatypes.diagram 3dt%\]

**Special Purpose Data types**
\[%diagram datatypes/specialtypes.diagram 4dt%\]

<span id="modifiers"></span>
A [limited set](extensibility.html#list) of these data types may appear in extensions. All data types (including primitives) may have extensions, but only the following data types may include [Modifier Extensions](extensibility.html#modifier):

-   [Timing](datatypes.html#timing)
-   [Dosage](dosage.html#Dosage)
-   [ElementDefinition](elementdefinition.html#ElementDefinition)

<span id="primitive"></span>
Primitive Types
---------------

\[%diagram datatypes/primitives.diagram 3dt%\] <span id="imports"></span>
The following table describes the primitive types that are used in this specification. Primitive types are those with only a value, and no additional elements as children (though, like all types, they have [extensions](extensibility.html)). See also the [Examples](datatypes-examples.html#primitives).

**Primitive Types**
FHIR Name
Value Domain
XML Representation
JSON representation
boolean<span id="boolean"></span>
true | false
xs:boolean, except that **0 and 1 are not valid values**
JSON boolean (true or false)
Regex: `true|false`
integer<span id="integer"></span>
A signed integer in the range −2,147,483,648..2,147,483,647 (32-bit; for larger values, use decimal)
xs:int, except that **leading 0 digits are not allowed**
JSON number (with no decimal point)
Regex: `[0]|[-+]?[1-9][0-9]*`
string<span id="string"></span>
A sequence of Unicode characters
xs:string
JSON String
Note that strings SHALL NOT exceed 1MB (1024\*1024 characters) in size. Strings SHOULD not contain Unicode character points below 32, except for u0009 (horizontal tab), u0010 (carriage return) and u0013 (line feed). Leading and Trailing whitespace is allowed, but SHOULD be [removed when using the XML format](xml.html#whitespace). Note: This means that a string that consists only of whitespace could be trimmed to nothing, which would be treated as an invalid element value. Therefore strings SHOULD always contain non-whitespace content
This data type can be [bound](terminologies.html#string) to a [ValueSet](valueset.html)
Regex: `[ \r\n\t\S]+` (see notes below)
decimal<span id="decimal"></span>
Rational numbers that have a decimal representation. See below about the precision of the number
union of xs:decimal and xs:double (see below for limitations)
A JSON number (see below for limitations)
Regex: `-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?`
uri<span id="uri"></span>
A Uniform Resource Identifier Reference ([RFC 3986](http://tools.ietf.org/html/rfc3986)). Note: URIs are case sensitive. For UUID (urn:uuid:53fefa32-fcbb-4ff8-8a92-55ee120877b7) use all lowercase
xs:anyURI
A JSON string - a URI
Regex: `\S*` (This regex is very permissive, but URIs must be valid. Implementers are welcome to use more specific regex statements for a URI in specific contexts)
URIs can be absolute or relative, and may have an optional fragment identifier
This data type can be [bound](terminologies.html#string) to a [ValueSet](valueset.html)
url<span id="url"></span>
A Uniform Resource Locator ([RFC 1738](http://tools.ietf.org/html/rfc1738)). Note URLs are accessed directly using the specified protocol. Common URL protocols are `http{s}:`, `ftp:`, `mailto:` and `mllp:`, though many others are defined
xs:anyURI
A JSON string - a URL
canonical<span id="canonical"></span>
A URI that refers to a [resource by its canonical URL](references.html#canonical) ([resources with a `url` property](references.html#canonical-list)). The `canonical` type differs from a `uri` in that it has special meaning in this specification, and in that it may have a version appended, separated by a vertical bar (|). Note that the type `canonical` is not used for the actual canonical URLs that are the target of these references, but for the URIs that refer to them, and may have the version suffix in them. Like other URIs, elements of type `canonical` may also have \#fragment references
xs:anyURI
A JSON string - a canonical URL
base64Binary<span id="base64Binary"></span><span id="base64binary"></span>
A stream of bytes, base64 encoded ([RFC 4648](http://tools.ietf.org/html/rfc4648))
xs:base64Binary
A JSON string - base64 content
Regex: `(\s*([0-9a-zA-Z\+\=]){4}\s*)+`
There is no specified upper limit to the size of a binary, but systems will have to impose some implementation based limit to the size they support. This should be clearly documented, though there is no computable for this at this time
instant<span id="instant"></span>
An instant in time in the format YYYY-MM-DDThh:mm:ss.sss+zz:zz (e.g. 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). The time SHALL specified at least to the second and SHALL include a time zone. Note: This is intended for when precisely observed times are required (typically system logs etc.), and not human-reported times - for those, use date or dateTime (which can be as precise as `instant`, but is not required to be). `instant` is a more constrained dateTime
xs:dateTime
A JSON string - an xs:dateTime
Note: This type is for system times, not human times (see date and dateTime below).
Regex: `([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))`
date<span id="date"></span>
A date, or partial date (e.g. just year or year + month) as used in human communication. The format is YYYY, YYYY-MM, or YYYY-MM-DD, e.g. 2018, 1973-06, or 1905-08-23. **There SHALL be no time zone**. Dates SHALL be valid dates
union of xs:date, xs:gYearMonth, xs:gYear
A JSON string - a union of xs:date, xs:gYearMonth, xs:gYear
Regex: `([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?`
dateTime<span id="dateTime"></span><span id="datetime"></span>
A date, date-time or partial date (e.g. just year or year + month) as used in human communication. The format is YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz, e.g. 2018, 1973-06, 1905-08-23, 2015-02-07T13:28:17-05:00 or 2017-01-01T00:00:00.000Z. If hours and minutes are specified, a time zone SHALL be populated. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored at receiver discretion. Dates SHALL be valid dates. **The time "24:00" is not allowed**. Leap Seconds are allowed - see below
union of xs:dateTime, xs:date, xs:gYearMonth, xs:gYear
A JSON string - a union of xs:dateTime, xs:date, xs:gYearMonth, xs:gYear
Regex: `([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?`
time<span id="time"></span>
A time during the day, in the format hh:mm:ss. There is no date specified. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored at receiver discretion. **The time "24:00" SHALL NOT be used. A time zone SHALL NOT be present**. Times can be converted to a [Duration](#Duration) since midnight.
xs:time
A JSON string - an xs:time
Regex: `([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?`
code<span id="code"></span>
Indicates that the value is taken from a set of controlled strings defined elsewhere (see [Using codes](terminologies.html) for further discussion). Technically, a code is restricted to a string which has at least one character and no leading or trailing whitespace, and where there is no whitespace other than single spaces in the contents
xs:token
JSON string
Regex: `[^\s]+(\s[^\s]+)*`
This data type can be [bound](terminologies.html#string) to a [ValueSet](valueset.html)
oid<span id="oid"></span>
An OID represented as a URI ([RFC 3001](http://www.ietf.org/rfc/rfc3001.txt)); e.g. urn:oid:1.2.3.4.5
xs:anyURI
JSON string - uri
Regex: `urn:oid:[0-2](\.(0|[1-9][0-9]*))+`
id<span id="id"></span>
Any combination of upper- or lower-case ASCII letters ('A'..'Z', and 'a'..'z', numerals ('0'..'9'), '-' and '.', with a length limit of 64 characters. (This might be an integer, an un-prefixed OID, UUID or any other identifier pattern that meets these constraints.)
xs:string
JSON string
Regex: `[%id_regex%]`
markdown<span id="markdown"></span>
A FHIR `string` (see above) that may contain markdown syntax for optional processing by a markdown presentation engine, in the GFM extension of CommonMark format (see below)
xs:string
JSON string
Regex: `\s*(\S|\s)*` (can't put size limit in the regex - too large)
unsignedInt<span id="unsignedInt"></span>
Any non-negative integer in the range 0..2,147,483,647
xs:nonNegativeInteger
JSON number
Regex: `[0]|([1-9][0-9]*)`
positiveInt<span id="positiveInt"></span>
Any positive integer in the range 1..2,147,483,647
xs:positiveInteger
JSON number
Regex: `+?[1-9][0-9]*`
uuid<span id="uuid"></span>
A UUID (aka GUID) represented as a URI ([RFC 4122](http://www.ietf.org/rfc/rfc4122.txt)); e.g. urn:uuid:c757873d-ec9a-4326-a141-556f43239520
xs:anyURI
JSON string - uri
Notes:

-   For all the types, the XML, JSON and Turtle representations of the primitive values are the same except for different escaping in XML and JSON
-   For decimal values, the XML special values `INF`, `-INF` and `NaN` are not allowed, and JSON is restricted to the [precision limits documented in XML schema for xs:double and xs:decimal](https://www.w3.org/TR/xmlschema-2/)
-   The precision of the decimal value has significance:<span id="precision"></span>
    -   e.g. 0.010 is regarded as different to 0.01, and the original precision should be preserved
    -   Implementations SHALL handle decimal values in ways that preserve and respect the precision of the value as represented for presentation purposes
    -   Implementations are not required to perform calculations with these numbers differently, though they may choose to do so (i.e. preserve significance)
    -   See implementation comments for [XML](xml.html#schema-gen), [JSON](json.html#decimal) and [RDF](rdf.html#decimal)
    -   In object code, implementations that might meet this constraint are GMP implementations or equivalents to Java BigDecimal that implement arbitrary precision, or a combination of a (64 bit) floating point value with a precision field
    -   Note that large and/or highly precise values are extremely rare in medicine. One element where highly precise decimals may be encountered is the [Location](location.html) coordinates. Irrespective of this, the limits documented in XML Schema apply
-   Boolean values can also be represented using coded values (such as [HL7 v2 Table 0136](v2/0136/index.html)). See [Observation](observation.html#valuex) for one such use
-   Issues with the specified regexes:
    -   The regexes are provided to assist with tooling, but are informative, **not normative**. There are several issues with the regexes
    -   The string regex has problems with unicode - specifically, it might or might not allow unicode whitespace to some degree depending on unicode support in the regex engine being used. The regexes `[\r\n\t\x{0020}-\x{FFFF}]*` or `[\r\n\t\u0020-\uFFFF]*` are better expressions of the constraints on string, but poorly supported (see [Regex Tutorial](https://www.regular-expressions.info/unicode.html) for details). The `string` regex also applies to `markdown` as well. The regex does not enforce the length limit
    -   The unicode issues also apply to the regex for `code`
    -   The regexes should be qualified with start of string and end of string anchors based on the regex implementation used (e.g. caret '^' and dollar-sign '$' for JavaScript, POSIX, XML and XPath; '\\A' and '\\Z' for .NET, Java, Python and others; please verify these definitions with the regex implementation used).
    -   The regexes may allow a broader set of values than are actually valid (e.g. leap years) so additional validation is always needed
-   Leap second are allowed in the datetime, instant and time types. Note, though, that many systems and libraries do not support leap seconds. Applications reading times SHOULD accept and handle leap seconds gracefully, and applications producing them MAY choose to avoid encoding leap seconds
-   About the id datatype:
    -   Ids are case sensitive. UUIDs SHALL be sent using lowercase letters
    -   The ID type includes identifiers consistent with [ISO 18232](http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=38610), but also includes other identifier formats as well, and is not case insensitive like ISO 18232.
    -   In a typical FHIR URL, like `http://example.com/fhir/Patient/1234`, the last part "1234" (highlighted in red) is the part that is an id datatype
    -   A full UUID is a `uri`, not an `id`. UUIDs in URIs SHALL also be represented in lowercase (urn:uuid:59bf0ef4-e89c-4628-9b51-12ae3fdbe22b)
-   About the `uri`, `url` and `canonical` datatypes:
    -   They all contain URIs, but differ in how applications resolve the reference
    -   Although the `url` and `canonical` are specializations of `uri`, they are never substituted for each other
    -   They are all case sensitive for comparison purposes. Applications SHOULD not create URIs that only differ by case
    -   A general URI may be either a URL or a canonical URL or some other kind of URI
-   About the markdown datatype:
    -   This specification requires and uses the [GFM (Github Flavored Markdown)](https://github.github.com/gfm/) extensions on [CommonMark](http://spec.commonmark.org/0.28/) format
    -   Note that GFM prohibits Raw HTML
    -   Systems are not required to have markdown support, so the content of a string should be readable without markdown processing, per markdown philosophy
    -   Markdown content SHALL NOT contain Unicode character points below 32, except for u0009 (horizontal tab), u0010 (carriage return) and u0013 (line feed)
    -   Markdown is a `string`, and subject to the same rules (e.g. length limit)
    -   Converting an element that has the type `string` to `markdown` in a later version of this FHIR specification is not considered a breaking change (neither is adding `markdown` as a choice to an optional element that already has a choice of data types)

<span id="representations"></span>
### Representations in XML, JSON, and Turtle

All elements using these primitive types may have one or more of a value as described above, an internal identity (e.g. xml:id), and extensions. For an example, take an element of name "count" and type "integer".

**XML**

The value is represented in XML as an attribute named "value":

``` xml
  <count value="2"/>
```

The full representation, with id, extensions and value:

``` xml
  <count id="a1" value="2">
    <extension url="...">
      <valueXX.../>
    </extension>
  </count>
```

**JSON**

In JSON, for convenience, the value is represented as the property itself:

``` json
  "count" : 2
```

The full representation, with id, extensions and value, showing the id and extensions in the sibling property:

``` json
  "count" : 2
  "_count" : {
    "id" : "a1",
    "extension" : [{
      "url" : "...",
      "valueXXX" : "...."
    }]
  }
```

**RDF**

The value is represented in RDF as a relationship with the URI "http://h;7.org/fhir/value". Using the normal prefix, this becomes:

``` rdf
  fhir:Type.count [ fhir:value "2"^^xsd:integer ]
```

For the types date and DateTime, the type must be specified explicitly. For all other types, it is optional. The full representation, with id, extensions and value:

``` rdf
  fhir:Type.count [
    Element.id "a1";
    fhir:value "2"^^xsd:integer;
    Element.extension [
      fhir:Extension.url "..";
      fhir:Extension.valueXX...
    ]
  ]
```

For additional details, see the [XML](xml.html), [JSON](json.html) and [Turtle](rdf.html) format definitions. When the value is missing, and there are no extensions, the element is not represented at all. This means that in xml, attributes are never present with a length of 0 (value=""), and properties are never a 0 length string or null in JSON ("name" : "" is not valid). (note: there is one specific [use of the null](json.html#null) in the JSON representation).

According to XML schema, leading and trailing whitespace in the value attribute is ignored for the types boolean, integer, decimal, base64Binary, instant, uri, date, dateTime, oid, and uri. Note that this means that the schema aware XML libraries give different attribute values to non-schema aware libraries when reading the XML instances. For this reason, the value attribute for these types SHOULD not have leading and trailing spaces. String values should only have leading and trailing spaces if they are part of the content of the value. In JSON and Turtle whitespace in string values is always significant. Primitive types other than string SHALL NOT have leading or trailing whitespace.

------------------------------------------------------------------------

<span id="Types"></span><span id="complex"></span>
Complex Types
-------------

In XML, these types are represented as XML Elements with child elements with the name of the defined elements of the type. The name of the element is defined where the type is used. In JSON, the data type is represented by an object with properties named the same as the XML elements. Since the JSON representation is almost exactly the same, only the first [example](datatypes-examples.html#Attachment) has an additional explicit JSON representation.

Complex data types may be "profiled". A [Structure Definition](structuredefinition.html) or type "constraint" makes a set of rules about which elements SHALL have values and what the possible values are.

**UML Diagrams of the Data types**

\[%diagram datatypes/types.diagram 4dt%\]

------------------------------------------------------------------------

\[%diagram datatypes/types2.diagram 5dt%\] <span id="Attachment"></span> <span id="attachment"></span>
Attachment
----------

See also [Examples](datatypes-examples.html#Attachment), [Detailed Descriptions](datatypes-definitions.html#Attachment), [Mappings](datatypes-mappings.html#Attachment), [Profiles & Extensions](datatypes-extras.html#Attachment) and [R2 Conversions](datatypes-version-maps.html#Attachment).

This type is for containing or referencing attachments - additional data content defined in other formats. The most common use of this type is to include images or reports in some report format such as PDF. However, it can be used for any data that has a MIME type.

\[%dt Attachment 1%\]
The actual content of an Attachment can be conveyed directly using the `data` element or a `URL` reference can be provided. If both are provided, the reference SHALL point to the same content as found in the data. The reference can never be reused to point to some different data (i.e. the reference is version specific). The `URL` reference SHALL point to a location that resolves to actual data; some URIs such as cid: meet this requirement. If the URL is a relative reference, it is interpreted in the same way as a [resource reference](references.html#references).

The `contentType` element SHALL always be populated when an Attachment contains `data`, and MAY be populated when there is a `url`. It can include charset information and other mime type extensions as appropriate. If there is no character set in the `contentType` then the correct course of action is undefined, though some media types may define a default character set and/or the correct character set may be able to be determined by inspection of the content.

The `hash` is included so that applications can verify that the content returned by the URL has not changed. The `hash` and `size` relate to the data before it is represented in base64 form. The hash is not intended to support digital signatures. Where protection against malicious threats a digital signature should be considered, see [Provenance.signature](provenance-definitions.html#Provenance.signature) for mechanism to protect a resource with a digital signature.

Attachment `data` are not constrained, and therefore can be of any content type and encoding. Therefore extra care needs to be taken to validate the content against malicious or malformed content. For more details see [Security of Narrative](security.html#narrative).

In many cases where Attachment is used, the cardinality is &gt;1. A valid use of repeats is to convey the same content in different mime types and languages. Guidance on the meaning of repeating elements SHALL be provided in the definition of the repeating resource element or extension that references this type. The language element describes the language of the attachment using the [codes defined in BCP 47](http://tools.ietf.org/html/bcp47).

**Constraints**

\[%dt.constraints Attachment%\]
If neither `data` nor a `URL` is provided, the value should be understood as an assertion that no content for the specified `mimeType` and/or `language` is available for the combination of `language` and `contentType`.

The context of use may frequently make rules about the kind of attachment (and therefore, the kind of mime types) that can be used.

\[%tx Attachment%\]

Attachment is used in the following places: \[%dtusage Attachment%\]

<span id="Coding"></span> <span id="coding"></span> <span id="codesystem"></span>
Coding
------

See also [Examples](datatypes-examples.html#Coding), [Detailed Descriptions](datatypes-definitions.html#Coding), [Mappings](datatypes-mappings.html#Coding), [Profiles & Extensions](datatypes-extras.html#Coding) and [R2 Conversions](datatypes-version-maps.html#Coding).

A Coding is a representation of a defined concept using a symbol from a defined "code system" - see [Using Codes in resources](terminologies.html) for more details.

This data type can be [bound](terminologies.html#Coding) to a [ValueSet](valueset.html).

\[%dt Coding 2%\]
The meaning of the Coding is defined by the code. The `system` provides the source of the definition of the code, along with an optional version reference. The display is a human display for the text defined by the system - it is not intended for computation.

The `system` is a URI that identifies the code system that defines the `code`. Choosing the correct system is important; for more information about the code system URI, read [Managing Terminology System URIs](terminologies.html#system). If the code is taken from a CodeSystem resource, `CodeSystem.url` is the correct value for the system element. Resolvable URLs are generally preferred by implementers over non-resolvable URNs, particularly opaque URNs such as OIDs (urn:oid:) or UUIDs (urn:uuid:). The system URI SHALL NOT contain a reference to a value set (e.g. `ValueSet.url`), since value sets just define the set of codes which are intended for use in a specific context, not the meaning of the codes themselves.

A code system version may also be supplied. If the meaning of codes within the code system is consistent across releases, this is not required. The version SHOULD be exchanged when the system does not maintain consistent definitions across versions. Note that the following systems SHOULD always have a version specified:

-   National releases of SNOMED CT (consistency of definitions varies amongst jurisdictions, and some jurisdictions may make their own rules on this)
-   Various versions of ICD (note: the major releases are labeled as different code systems altogether, but there is variation within versions)

More generally, any classification (e.g. a code system that includes concepts with relative definitions such as "not otherwise coded" will require a version. See the [discussion of code system versions in the Code System resource](codesystem.html#versioning) for further discussion on versioning.

If present, the `code` SHALL be a syntactically correct symbol as defined by the `system`. In some code systems such as SNOMED CT, the symbol may be an expression composed of other predefined symbol (e.g. post-coordination). Note that codes are case sensitive unless specified otherwise by the code system. The `display` is a text representation of the code defined by the `system` and is used to display the meaning of the code by an application that is not aware of the `system`.

If the 'display' element is populated, the string used in `display` SHALL be one of the display strings defined for that code by the code system (code systems may define multiple display strings for a single code). If one of the available display strings is labeled as preferred, it SHOULD be used. If the code system does not define a text representation for display (e.g. SNOMED CT Expressions) then the 'display' element cannot be populated, and the meaning of the code won't be accessible to systems that don't understand the code expression.

In some cases, the `system` might not be known - only the code is known. In this case, no useful processing of the code may be performed unless the system can be safely inferred by the context. This practice should be avoided where possible, as information sharing in a wider context is very likely to arise eventually, and codes cannot be used in the absence of a known system.

If the system is present, and there is no code, then this is understood to mean that there is no suitable code in the system in which to represent the code.

If two codings have the same `system`, `version` and `code` then they have the same meaning. If the version information is missing, or the `system`, `version` or the `code` elements differ, then how the codes are related can only be determined by consulting the definitions of the system(s) and any [mappings](conceptmap.html) available.

A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc.

**Constraints**

\[%dt.constraints Coding%\]
The context of use (as defined in the resource or applicable profile) usually makes rules about what codes and systems are allowed or required in a particular context by [binding](terminologies.html) the element to a value set.

Coding is used in the following places: \[%dtusage Coding%\]

\[%impl-note%\] This specification defines two types for representing coded values:
-   **Coding**: a simple direct reference to a code defined by a code system
-   **CodeableConcept**: a text description and/or a list of Codings (i.e. a list of references to codes defined by code systems)

The `Coding` data type corresponds to the simple case of selecting a single code from a code list. However, this type is rarely used in the FHIR specifications; long experience with exchanging coded values in HL7 shows that in the general case, systems need to able to exchange multiple translation codes, and/or an original text.

The `Coding` data type is used directly when there is certainty that the value must be selected directly from one of the available codes, and the list of possible codes is agreed to by all participants. This is not usually the case in the context of FHIR - general interoperability - so Coding is mostly used in extensions, which are usually intended to be defined for a well-controlled context of use. \[%end-note%\] <span id="CodeableConcept"></span> <span id="codeableconcept"></span>

CodeableConcept
---------------

See also [Examples](datatypes-examples.html#CodeableConcept), [Detailed Descriptions](datatypes-definitions.html#CodeableConcept), [Mappings](datatypes-mappings.html#CodeableConcept), [Profiles & Extensions](datatypes-extras.html#CodeableConcept) and [R2 Conversions](datatypes-version-maps.html#CodeableConcept).

A CodeableConcept represents a value that is usually supplied by providing a reference to one or more terminologies or ontologies but may also be defined by the provision of text. This is a common pattern in healthcare data.

This data type can be [bound](terminologies.html#CodeableConcept) to a [ValueSet](valueset.html).

\[%dt CodeableConcept 3%\]
**Additional Codes**

More than one code may be used in `CodeableConcept`. The concept may be coded multiple times in different code systems (or even multiple times in the same code systems, where multiple forms are possible, such as with SNOMED CT). Each `coding` (also referred to as a 'translation') is a representation of the concept as described above and may have slightly different granularity due to the differences in the definitions of the underlying codes. There is no meaning associated with the ordering of `coding` within a `CodeableConcept`. A typical use of `CodeableConcept` is to send the local code that the concept was coded with, and also one or more translations to publicly defined code systems such as LOINC or SNOMED CT. Sending local codes is useful and important for the purposes of debugging and integrity auditing.

For example, many qualitative laboratory test results values are typically represented with coded presence/absence concepts. Using the coded value for 'negative' with a standard SNOMED CT code translation, `valueCodeableConcept` would be:

``` json

    "valueCodeableConcept": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "260385009",
                "display": "Negative"
            }, {
                "system": "https://acme.lab/resultcodes",
                "code": "NEG",
                "display": "Negative"
            }
        ],
        "text": "Negative for Chlamydia Trachomatis rRNA"
    }

    
```

Note that these concepts may be cross mapped using the [ConceptMap](conceptmap.html) resource *instead of* or *in addition to* being represented as translations directly in the in `CodeableConcept`.

**Using Text in CodeableConcept**

The `text` is the representation of the concept as entered or chosen by the user, and which most closely represents the intended meaning of the user or concept. Very often the `text` is the same as a `display` of one of the codings. One or more of the codings may be flagged as the user selected code - the code or concept that the user actually selected directly. Note that in all but a few cases, only one of the codings may be flagged as the `coding.userSelected = true` - the code or concept that the user actually selected directly. If more than one code is marked as user selected, this means the user explicitly chose multiple codes. When none of the `coding` elements is marked as user selected, the text (if present) is the preferred source of meaning.

A free text only representation of the concept without any `coding` elements is permitted if there is no appropriate code and only free text is available (and not prohibited by the implementation). For example, using text only, the `Observation.valueCodeableConcept` element would be:

``` json

    "valueCodeableConcept": {
        "text": "uncoded free text result"
    }

            
```

**Constraints**

\[%dt.constraints CodeableConcept%\]
The context of use usually makes rules about what codes and systems are allowed or required in a particular context by [binding](terminologies.html) the element to a value set.

CodeableConcept is used in the following places: \[%dtusage CodeableConcept%\]

<span id="Quantity"></span> <span id="quantity"></span>
Quantity
--------

See also [Examples](datatypes-examples.html#Quantity), [Detailed Descriptions](datatypes-definitions.html#Quantity) and [Mappings](datatypes-mappings.html#Quantity), [Profiles & Extensions](datatypes-extras.html#Quantity) and [R2 Conversions](datatypes-version-maps.html#Quantity).

A measured amount (or an amount that can potentially be measured).

This data type can be [bound](terminologies.html#Quantity) to a [ValueSet](valueset.html).

\[%dt Quantity 4%\]
The `value` contains the numerical value of the quantity, including an implicit precision. If no comparator is specified, the value is a point value (i.e. '='). The `comparator` element can never be ignored.

The `unit` element contains a displayable unit that defines what is measured. The unit may additionally be coded in some formal way using the `code` and the `system` (see [Coding](#Coding) for further information about how to use the `system` element).

If the unit can be coded in UCUM and a code is provided, it SHOULD be a UCUM code. If a UCUM unit is provided in the `code`, then a canonical value can be generated for purposes of comparison between quantities. Note that the `unit` element will often contain text that is a valid UCUM unit, but it cannot be assumed that the unit actually contains a valid UCUM unit.

**Constraints**

\[%dt.constraints Quantity%\]
The context of use may frequently define what kind of measured quantity this is and therefore what kind of unit can be used. The context of use may additionally require a `code` from a particular `system`, or a `value set` - see [Using Terminologies](terminologies.html) for information about binding a Quantity to a [value set](valueset.html) to constrain the unit codes. The context of use may also restrict the values for the `value` or `comparator`.

\[%tx Quantity%\]

Quantity is used in the following places: \[%dtusage Quantity%\]

<span id="QuantityVariations"></span>
### Defined Variations on Quantity

There are several additional data types that are specializations of Quantity that only introduce new restrictions on the existing elements defined as part of the Quantity data type.

The types Age, Distance and Count are marked as Trial Use because they are not used in this specification (though they may be used in extensions). These types may be converted back to a profile (see [R2 definitions](http://hl7.org/fhir/DSTU2/datatypes.html#quantity)).

**Type Name**
**Rules**
**Formal Definitions**
Distance<span id="Distance"></span>
\[%dt.constraints Distance%\]\[%tx Distance%\]
[XML](distance.profile.xml.html), [JSON](distance.profile.json.html)
Usage: \[%dtusage Distance%\]
\[%impl-note%\] If the duration value is specified as a whole number (e.g. 1 month), then when the duration is added or subtracted to a given date(time), the outcome should be rounded to the nearest natural calendar division - e.g. Feb. 1 + 1 mo = March 1, not March 2 or 3 (since 1 month in is defined in UCUM as 30 days). \[%end-note%\]
Age<span id="Age"></span>
\[%dt.constraints Age%\] \[%tx Age%\]
[XML](age.profile.xml.html), [JSON](age.profile.json.html)
Usage: \[%dtusage Age%\]
Count<span id="Count"></span>
\[%dt.constraints Count%\]
[XML](count.profile.xml.html), [JSON](count.profile.json.html)
Usage: \[%dtusage Count%\]
Duration<span id="Duration"></span>
\[%dt.constraints Duration%\] \[%tx Duration%\]
[XML](duration.profile.xml.html), [JSON](duration.profile.json.html)
Usage: \[%dtusage Duration%\]

------------------------------------------------------------------------

In addition to the specializations, there is one constraint on Quantity used in several resources:
**Profile Name**
**Rules**
**Formal Definitions**
Simple Quantity<span id="SimpleQuantity"></span>
\[%dt.constraints SimpleQuantity%\]
[XML](simplequantity.profile.xml.html), [JSON](simplequantity.profile.json.html)
Usage: \[%dtusage SimpleQuantity%\]
Note that the constraint is different from the other specializations of Quantity because it is not a type, just rules applied where the Quantity type is used. There's another constraint - see Money immediately below.

<span id="Money"></span> <span id="Money"></span>
Money
-----

See also [Examples](datatypes-examples.html#Money), [Detailed Descriptions](datatypes-definitions.html#Money) and [Mappings](datatypes-mappings.html#Money), [Profiles & Extensions](datatypes-extras.html#Money) and [R2 Conversions](datatypes-version-maps.html#Money).

An amount of currency.

\[%dt Money 4%\]
The `value` contains the amount of the currency, including an implicit precision. Precision is always important for financial amounts. The `currency` element contains an ISO 4217 code for the currency.

Money is used in the following places: \[%dtusage Money%\]

<span id="MoneyVariations"></span>
### Alternate Representation

There are also circumstances where a financial amount must be represented as the numerator or denominator in a Ratio, where the type is currency. In this context, the Money amount is represented as a [Quantity](#Quantity), using the `MoneyQuantity` constraint:

**Profile Name**
**Rules**
**Formal Definitions**
Money Quantity<span id="MoneyQuantity"></span>
\[%dt.constraints MoneyQuantity%\]
[XML](moneyquantity.profile.xml.html), [JSON](moneyquantity.profile.json.html)
Usage: \[%dtusage MoneyQuantity%\]
Note that the profile is different from the other specializations because it is not a type, just rules applied where the Quantity type is used to represent Money amounts.

<span id="Range"></span> <span id="range"></span>
Range
-----

See also [Examples](datatypes-examples.html#Range), [Detailed Descriptions](datatypes-definitions.html#Range), [Mappings](datatypes-mappings.html#Range), [Profiles & Extensions](datatypes-extras.html#Range) and [R2 Conversions](datatypes-version-maps.html#Range).

A set of ordered Quantity values defined by a low and high limit.

A Range specifies a set of possible values; usually, one value from the range applies (e.g. "give the patient between 2 and 4 tablets"). Ranges are typically used in instructions.

\[%dt Range 5%\]
The `unit` and `code`/`system` elements of the `low` or `high` elements SHALL match. If the `low` or `high` elements are missing, the meaning is that the low or high boundaries are not known and therefore neither is the complete range.

The `comparator` flag on the `low` or `high` elements cannot be present. Note that the Range type should not be used to represent out of range measurements: A quantity type with the comparator element should be used instead.

The low and the high values are inclusive and are assumed to have arbitrarily high precision; e.g. the range 1.5 to 2.5 includes 1.50, and 2.50 but not 1.49 or 2.51.

**Constraints**

\[%dt.constraints Range%\]

Range is used in the following places: \[%dtusage Range%\]

<span id="Ratio"></span> <span id="ratio"></span>
Ratio
-----

See also [Examples](datatypes-examples.html#Ratio), [Detailed Descriptions](datatypes-definitions.html#Ratio), [Mappings](datatypes-mappings.html#Ratio), [Profiles & Extensions](datatypes-extras.html#Ratio) and [R2 Conversions](datatypes-version-maps.html#Ratio).

A relationship between two Quantity values expressed as a numerator and a denominator.

The Ratio datatype should only be used to express a relationship of two numbers if the relationship cannot be suitably expressed using a Quantity and a common unit. Where the denominator value is known to be fixed to "1", Quantity should be used instead of Ratio.

\[%dt Ratio 6%\]
Examples where a Quantity is typically used are rates, densities, concentrations. Examples where a Ratio is used are: titers (e.g. 1:128); concentration ratios where the denominator is significant (e.g. 5mg/10mL); observed frequencies (e.g. 2 repetitions/8 hr), and where the numerator or denominator is an amount of a currency (no UCUM code for $ etc.).

Common factors in the numerator and denominator are not automatically cancelled out. Ratios are not simply "structured numbers" - for example, blood pressure measurements (e.g. "120/60") are not ratios.

A proper ratio has both a numerator and a denominator; however, these are not mandatory in order to allow an invalid ratio with an extension with further information.

**Constraints**

\[%dt.constraints Ratio%\]
The context of use may require particular types of Quantity for the numerator or denominator.

Ratio is used in the following places: \[%dtusage Ratio%\]

<span id="Period"></span> <span id="period"></span>
Period
------

See also [Examples](datatypes-examples.html#Period), [Detailed Descriptions](datatypes-definitions.html#Period), [Mappings](datatypes-mappings.html#Period), [Profiles & Extensions](datatypes-extras.html#Period) and [R2 Conversions](datatypes-version-maps.html#Period).

A time period defined by a start and end date/time.

A period specifies a range of times. The context of use will specify whether the entire range applies (e.g. "the patient was an inpatient of the hospital for this time range") or one value from the period applies (e.g. "give to the patient between 2 and 4 pm on 24-Jun 2013").

\[%dt Period 7%\]
If the `start` element is missing, the start of the period is not known. If the `end` element is missing, it means that the period is ongoing, or the start may be in the past, and the end date in the future, which means that period is expected/planned to end at the specified time

The end value includes any matching date/time. For example, the period 2011-05-23 to 2011-05-27 includes all the times from the start of the 23rd May through to the end of the 27th of May.

Period is used in the following places: \[%dtusage Period%\]

<span id="SampledData"></span> <span id="sampleddata"></span>
SampledData
-----------

\[%StandardsStatus trial-use DataType n/a%\]
See also [Examples](datatypes-examples.html#SampledData), [Detailed Descriptions](datatypes-definitions.html#SampledData), [Mappings](datatypes-mappings.html#SampledData), [Profiles & Extensions](datatypes-extras.html#SampledData) and [R2 Conversions](datatypes-version-maps.html#SampledData).

Data that comes from a series of measurements taken by a device, which may have upper and lower limits. The data type also supports more than one dimension in the data.

A SampledData provides a concise way to handle the data produced by devices that sample a particular physical state at a high frequency. A typical use for this is for the output of an ECG or EKG device. The data type includes a series of raw decimal values (which are mostly simple integers), along with adjustments for scale and factor. These are interpreted such that

    original measured value[i] = SampledData.data[i] * SampledData.scaleFactor + SampledData.origin.value

\[%dt SampledData 8%\]
The digits are a set of decimal values separated by a single space (Unicode character u20). In addition to decimal values, the special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used. If there is more than one dimension, the different dimensions are interlaced - all the data points for a particular time are represented together.

SampledData is used in the following places: \[%dtusage SampledData%\]

<span id="Identifier"></span> <span id="identifier"></span>
Identifier
----------

See also [Examples](datatypes-examples.html#Identifier), [Detailed Descriptions](datatypes-definitions.html#Identifier), [Mappings](datatypes-mappings.html#Identifier), [Profiles & Extensions](datatypes-extras.html#Identifier) and [R2 Conversions](datatypes-version-maps.html#Identifier).

A numeric or alphanumeric string that is associated with a single object or entity within a given system. Typically, identifiers are used to connect content in resources to external content available in other frameworks or protocols. Identifiers are associated with objects and may be changed or retired due to human or system process and errors.

\[%dt Identifier 9%\]
The `value` SHALL be unique within the defined `system` and have a consistent meaning wherever it appears. Identifier.system is always case sensitive. `Identifier.value` is to be treated as case sensitive unless knowledge of the `Identifier.system` allows the processer to be confident that non-case-sensitive processing is safe.

The `system` is a URI that defines a set of identifiers (i.e. how the `value` is made unique). It might be a specific application or a recognized standard/specification for a set of identifiers or a way of making identifiers unique. FHIR defines [some useful or important system URIs directly](identifier-registry.html). Here are some example identifier namespaces:

-   `http://hl7.org/fhir/sid/us-ssn` for United States Social Security Number (SSN) values
-   `http://ns.electronichealth.net.au/id/hi/ihi/1.0` for Australian Individual Healthcare Identifier (IHI) numbers
-   `urn:ietf:rfc:3986` for when the value of the identifier is itself a globally unique URI

If the system is a URL, it SHOULD resolve. Resolution might be to a web page that describes the identifier system and/or supports look-up of identifiers. Alternatively, it could be to a [NamingSystem](namingsystem.html) resource instance. Resolvable URLs are generally preferred by implementers over non-resolvable URNs, particularly opaque URNs such as OIDs (urn:oid:) or UUIDs (urn:uuid:). If used, OIDs and UUIDs may be registered in the [HL7 OID registry](http://hl7.org/oid) and SHOULD be registered if the content is shared or exchanged across institutional boundaries.

It is up to the implementer organization to determine an appropriate URL or URN structure that will avoid collisions and to manage that space (and the resolvability of URLs) over time.

Note that the scope of a given identifier system may extend beyond identifiers that might be captured by a single resource. For example, some systems might draw all "order" identifiers from a single namespace, though some might be used on [MedicationRequest](medicationrequest.html) while others would appear on [ServiceRequest](servicerequest.html).

If the identifier value itself is naturally a globally unique URI (e.g. an OID, a UUID, or a URI with no trailing local part), then the `system` SHALL be "`urn:ietf:rfc:3986`", and the URI is in the `value` (OIDs and UUIDs using urn:oid: and urn:uuid: - see [note on the V3 mapping](datatypes-mappings.html#ii) and the [examples](datatypes-examples.html#Identifier)). Naturally globally unique identifiers are those for which no [system has been assigned](identifier-registry.html) and where the value of the identifier is reasonably expected to not be re-used. Typically, these are absolute URIs of some kind.

In some cases, the system might not be known - only the value is known (e.g. a simple device that scans a barcode), or the system is known implicitly (simple exchange in a limited context, often driven by barcode readers). In this case, no useful matching may be performed using the value unless the system can be safely inferred by the context. Applications should provide a `system` wherever possible, as information sharing in a wider context is very likely to arise eventually, and values without a system are inherently limited in use.

In addition to the `system` (which provides a uniqueness scope) and the `value`, identifiers may also have a `type`, which may be useful when a system encounters identifiers with unknown system values. Note, however, that the type of an identifier is not a well-controlled vocabulary with wide variations in practice. The `type` deals only with general categories of identifiers and SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to variations in common usage.

The `assigner` is used to indicate what registry/state/facility/etc. assigned the identifier. As a [Reference](references.html), the assigner can include just a text description in the `display`.

**Constraints**

\[%tx Identifier%\]

Identifier is used in the following places: \[%dtusage Identifier%\]

<span id="HumanName"></span> <span id="humanname"></span>
HumanName
---------

See also [Examples](datatypes-examples.html#HumanName), [Detailed Descriptions](datatypes-definitions.html#HumanName), [Mappings](datatypes-mappings.html#HumanName), [Profiles & Extensions](datatypes-extras.html#HumanName) and [R2 Conversions](datatypes-version-maps.html#HumanName).

A name of a human with text, parts and usage information.

Names may be changed or repudiated. People may have different names in different contexts. Names may be divided into parts of different type that have variable significance depending on context, though the division into parts is not always significant. With personal names, the different parts might or might not be imbued with some implicit meaning; various cultures associate different importance with the name parts and the degree to which systems SHALL care about name parts around the world varies widely.

\[%dt HumanName 10%\]
This table summarizes where common parts of a person's name are found.

|                        |                  |                                                                |
|------------------------|------------------|----------------------------------------------------------------|
| **Name**               | **Example**      | **Destination / Comments**                                     |
| Surname                | Smith            | Family Name                                                    |
| First name             | John             | Given Name                                                     |
| Title                  | Mr.              | Prefix                                                         |
| Middle Name            | Samuel           | Subsequent Given Names                                         |
| Patronymic             | bin Osman        | Family Name                                                    |
| Multiple family names  | Carreño Quiñones | Family Name. See note below about decomposition of family name |
| Initials               | Q.               | Given Name as initial ("." recommended)                        |
| Nick Name              | Jock             | Given name, with Use = common                                  |
| Qualifications         | PhD              | Suffix                                                         |
| Honorifics             | Senior           | Suffix                                                         |
| Voorvoegsel / Nobility | van Beethoven    | Family Name. See note below about decomposition of family name |

For further information, including all [W3C International Examples](http://www.w3.org/International/questions/qa-personal-names), consult the [examples](datatypes-examples.html#HumanName). **Note: Implementers should read the name examples for a full understanding of how name works.**

The multiple given parts and family name combine to form a single name. Where a person has alternate names that may be used in place of each other (e.g. Nicknames, Aliases), these are different instances of `HumanName`.

The text element specifies the entire name as it should be displayed e.g. in an application UI. This may be provided instead of or as well as the specific parts. Applications updating a name SHALL ensure that when both text and parts are present, no content is included in the text that isn't found in a part. The correct order of assembly of the parts is culture dependent: the order of the parts within a given part type has significance and SHALL be observed. The appropriate order between family name and given names depends on culture and context of use. Note that there is an [extension](extension-humanname-assembly-order.html) for the few times name assembly order is not fixed by the culture.

The given name parts may contain whitespace, though generally they don't. Initials may be used in place of the full name if that is all that is recorded. Systems that operate across cultures should generally rely on the text form for presentation and use the parts for index/search functionality. For this reason, applications SHOULD populate the text element for future robustness.

In some cultures (e.g. German, Dutch, Spanish, Portuguese), family names are complex and composed of various parts that may need to be managed separately, e.g. they have differing significance for searching. In these cases, the full family name is populated in `family`, and a decomposition of the name can be provided using the `family` extensions [own-name](extension-humanname-own-name.html), [own-prefix](extension-humanname-own-prefix.html), [partner-name](extension-humanname-partner-name.html), [partner-prefix](extension-humanname-partner-prefix.html), [fathers-family](extension-humanname-fathers-family.html) and [mothers-family](extension-humanname-mothers-family.html).

For robust search, servers should search the parts of a family name independently. E.g. Searching either Carreno or Quinones should match a family name of "Carreno Quinones". HL7 affiliates, and others producing implementation guides, may make more specific recommendations about how search should work in specific cultures or environments.

**Constraints**

\[%tx HumanName%\]

HumanName is used in the following places: \[%dtusage HumanName%\]

<span id="Address"></span> <span id="address"></span>
Address
-------

See also [Examples](datatypes-examples.html#Address), [Detailed Descriptions](datatypes-definitions.html#Address), [Mappings](datatypes-mappings.html#Address), [Profiles & Extensions](datatypes-extras.html#Address) and [R2 Conversions](datatypes-version-maps.html#Address).

An address expressed using postal conventions (as opposed to GPS or other location definition formats). This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery. There are a variety of postal address formats defined around the world.

\[%dt Address 11%\]
The text element specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts. Applications updating an address SHALL ensure that when both text and parts are present, no content is included in the text that isn't found in a part.

**Constraints**

\[%dt.constraints Address%\] \[%tx Address%\]

Address is used in the following places: \[%dtusage Address%\]

<span id="ContactPoint"></span> <span id="contactpoint"></span>
ContactPoint
------------

See also [Examples](datatypes-examples.html#ContactPoint), [Detailed Descriptions](datatypes-definitions.html#ContactPoint), [Mappings](datatypes-mappings.html#ContactPoint), [Profiles & Extensions](datatypes-extras.html#ContactPoint) and [R2 Conversions](datatypes-version-maps.html#ContactPoint).

Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc.

\[%dt ContactPoint 12%\]
If capturing a phone, fax or similar contact point, the value should be a properly formatted telephone number according to [ITU-T E.123](http://www.itu.int/rec/T-REC-E.123-200102-I/e). However, this is frequently not possible due to legacy data and/or clerical practices when recording contact details. For this reason, phone, fax, pager, and email addresses are not handled as formal URLs. For other kinds of contact points, the `system` is "other" and the `value` SHOULD be a URL so that its use can be determined automatically. Typical URL schemes used in the value are http{s}: for web addresses, and URL schemes for various kinds of messaging systems. If the value is not a URL, then human interpretation will be required.

The `rank` element can be used to specify a preference for the order in which a set of contacts is used. ContactPoints with lower rank values are more preferred than those with higher rank values. Note that `rank` does not necessarily follow the order in which the contacts are represented in the instance.

**Constraints**

\[%dt.constraints ContactPoint%\] \[%tx ContactPoint%\]

ContactPoint is used in the following places: \[%dtusage ContactPoint%\]

<span id="Timing"></span> <span id="timing"></span>
Timing
------

See also [Examples](datatypes-examples.html#Timing), [Detailed Descriptions](datatypes-definitions.html#Timing), [Mappings](datatypes-mappings.html#Timing), [Profiles & Extensions](datatypes-extras.html#Timing) and [R2 Conversions](datatypes-version-maps.html#Timing).

Describes the occurrence of an event that may occur multiple times. Timing schedules are used for specifying when events are expected or requested to occur and may also be used to represent the summary of a past or ongoing event. For simplicity, the definitions of Timing components are expressed as 'future' events, but such components can also be used to describe historic or ongoing events.

A Timing schedule can be a list of events and/or criteria for when the event happens, which can be expressed in a structured form and/or as a code. When both event and a repeating specification are provided, the list of events should be understood as an interpretation of the information in the repeat structure.

Note: The Timing data type allows [modifier extensions](extensibility.html#modifier).

\[%dt Timing 13%\]
If the timing schedule has repeating criteria, the repeat can occur a given number of times per the specified duration or in relation to some repeating real-world event. If no end condition is specified, the schedule will terminate on some criteria that are expressed elsewhere.

This table summarizes some common uses of the Timing Data Type criteria.

|                                                                 |              |                  |               |                  |            |                |               |                 |                 |          |            |                                    |           |
|-----------------------------------------------------------------|--------------|------------------|---------------|------------------|------------|----------------|---------------|-----------------|-----------------|----------|------------|------------------------------------|-----------|
| **description**                                                 | **duration** | **durationUnit** | **frequency** | **frequencyMax** | **period** | **periodUnit** | **periodMax** | **Day of Week** | **Time Of Day** | **when** | **offset** | **bounds\[x\]**                    | **count** |
| Every 8 hours                                                   |              |                  | 1             |                  | 8          | h              |               |                 |                 |          |            |                                    |           |
| Every 7 days                                                    |              |                  | 1             |                  | 7          | d              |               |                 |                 |          |            |                                    |           |
| 3 times a day                                                   |              |                  | 3             |                  | 1          | d              |               |                 |                 |          |            |                                    |           |
| 3-4 times a day                                                 |              |                  | 3             | 4                | 1          | d              |               |                 |                 |          |            |                                    |           |
| Every 4-6 hours                                                 |              |                  | 1             |                  | 4          | h              | 6             |                 |                 |          |            |                                    |           |
| Every 21 days for 1 hour                                        | 1            | hr               | 1             |                  | 21         | d              |               |                 |                 |          |            |                                    |           |
| Three times a week for ½ hour                                   | 0.5          | hr               | 3             |                  | 1          | wk             |               |                 |                 |          |            |                                    |           |
| With breakfast                                                  |              |                  |               |                  |            |                |               |                 |                 | CM       |            |                                    |           |
| For 5 minutes, 10 minutes before meals                          | 5            | min              |               |                  |            |                |               |                 |                 | AC       | 10         |                                    |           |
| 1 tablet 3 times daily, 30 minutes before meals                 |              |                  | 3             |                  | 1          | d              |               |                 |                 | AC       | 30         |                                    |           |
| BID, 30 mins before meal, for next 10 days                      |              |                  | 2             |                  | 1          | d              |               |                 |                 | AC       | 30         | Duration = 10 days                 |           |
| TID, for 14 days                                                |              |                  | 3             |                  | 1          | d              |               |                 |                 |          |            | Duration = 14 days                 |           |
| BID, start on 7/1/2015 at 1:00 PM                               |              |                  | 2             |                  | 1          | d              |               |                 |                 |          |            | Period.start = 2015-07-01T13:00:00 |           |
| Mon, Wed, Fri Morning                                           |              |                  | 1             |                  | 1          | d              |               | mon | wed | fri |                 | MORN     |            |                                    |           |
| Every day at 10am                                               |              |                  | 1             |                  | 1          | d              |               |                 | 10:00           |          |            |                                    |           |
| Take once, at any time                                          |              |                  |               |                  |            |                |               |                 |                 |          |            |                                    | 1         |
| Take every second day, in the morning, until 20 have been taken |              |                  | 1             |                  | 2          | d              |               |                 |                 | MORN     |            |                                    | 20        |

Many systems avoid the complexity of the Timing structure by using a text field for timing instructions. This maps to `Timing.code.text`. For example, the text instruction "take medication in the morning on weekends and days off work' would be represented as:

``` json
  "timing": {
    "code" : {
      "text" : "Take medication in the morning on weekends and days off work"
    }    
  }
```

Note, though, that some systems include timing details in something like 'Dosage instructions' which is wider than just Timing; those systems do not use the Timing data type. Other systems use a set of 'common' codes - including, but usually not limited to, widely understood acronyms such as "BID". If a `Timing.code` is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data (except for `Timing.repeat.bounds`, which applies to the code), and either the code or the data may be used to interpret the `Timing`. A structured timing specification SHOULD be provided whenever possible, unless the code is BID, TID, QID, AM or PM, which have a ubiquitous meaning.

This table shows the relationship between the [codes provided as part of the base specification](valueset-timing-abbreviation.html), and the structured data portions of the Timing type:

|                 |              |                  |               |                  |            |                |               |            |                 |
|-----------------|--------------|------------------|---------------|------------------|------------|----------------|---------------|------------|-----------------|
| **description** | **duration** | **durationUnit** | **frequency** | **frequencyMax** | **period** | **periodUnit** | **periodMax** | **when**   | **bounds\[x\]** |
| QOD             |              |                  | 1             |                  | 2          | d              |               |            |                 |
| QD              |              |                  | 1             |                  | 1          | d              |               |            |                 |
| BID             |              |                  | 2             |                  | 1          | d              |               |            |                 |
| TID             |              |                  | 3             |                  | 1          | d              |               |            |                 |
| QID             |              |                  | 4             |                  | 1          | d              |               |            |                 |
| Q4H             |              |                  | 1             |                  | 4          | h              |               |            |                 |
| Q6H             |              |                  | 1             |                  | 6          | h              |               |            |                 |
| AM              |              |                  | 1             |                  | 1          | d              |               | MORN       |                 |
| PM              |              |                  | 1             |                  | 1          | d              |               | AFT or EVE |                 |

These codes SHALL be understood as having the formal meanings documented in this table. Note that BID, etc. are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always at 7am and 6pm". If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or a structured representation should be used (in this case, `timeOfDay`).

**Constraints**

\[%dt.constraints Timing%\]
Note that these constraints still allow for nonsensical timing specifications such as "Once per day at 2:00 and 4:00" or "every 3 days on Friday". Implementers must take care to ensure that their configuration and data collection designs do not lead to these non-interpretable timing specifications. The elements `dayOfWeek`, `timeOfDay`, and `when` are particularly likely to be at issue here.

\[%tx Timing%\]

Timing is used in the following places: \[%dtusage Timing%\]

<span id="Signature"></span> <span id="signature"></span>
Signature
---------

\[%StandardsStatus trial-use DataType n/a%\]
See also [Examples](datatypes-examples.html#Signature), [Detailed Descriptions](datatypes-definitions.html#Signature), [Mappings](datatypes-mappings.html#Signature), [Profiles & Extensions](datatypes-extras.html#Signature) and [R2 Conversions](datatypes-version-maps.html#Signature).

A Signature holds an electronic representation of a signature and its supporting context in a FHIR accessible form. The signature may either be a cryptographic type (XML DigSig or a JWS), which is able to provide non-repudiation proof, or it may be a graphical image that represents a signature or a signature process.

\[%dt Signature 14%\]
**Constraints**

\[%dt.constraints Signature%\]

Note: One consequence of signing the document is that URLs, identifiers and internal references are frozen and cannot be changed. This might be a desired feature, but it may also cripple interoperability between closed ecosystems where [re-identification](managing.html) frequently occurs. For this reason, it is recommended that systems consider carefully the impact of any signature processes. The impact of signatures on [Document bundles](documents.html) and their related processes is the most well understood use of digital signatures.

 

<span id="XML"></span>
### XML Signature rules

When the signature is an XML Digital Signature (contentType = application/signature+xml), the following rules apply:

-   The Signature.data is base64 encoded XML-Signature
-   The XML-Signature is a [Detached](http://www.w3.org/TR/2002/REC-xmldsig-core-20020212/#def-SignatureDetached) Signature (where the content that is signed is separate from the signature itself)
-   The Signature SHOULD conform to XAdES-X-L for support of Long Term signatures. The XAdES-X-L specification adds the timestamp of the signing, inclusion of the signing certificate, and statement of revocation
-   When FHIR Resources are signed, the signature is across the [Canonical XML form](xml.html#canonical) of the resource(s)
-   The Signature SHOULD use the hashing algorithm SHA-256. Signature validation policy will apply to the signature and determine acceptability
-   The Signature SHALL include a "CommitmentTypeIndication" element for the Purpose(s) of Signature. The Purpose can be the action being attested to, or the role associated with the signature. The value shall come from ASTM E1762-95(2013). The `Signature.type` shall contain the same values as the CommitmentTypeIndication element.

There are three levels of signature verification:

1.  Verifying that the Digital Signature block itself has integrity through verifying the signature across the XML-Signature.
2.  Confirming that the signer was authentic, not revoked, and appropriate to the signature purpose.
3.  Confirming that the signed content of interest is unmodified using the hash algorithm.

Deviations from these guidelines would need to be expressed in site policy and would be enumerated in the XML-Signature block. For example, some environments may choose a different XAdES profile, hashing algorithm, policy identifier, or signature purpose vocabulary.

<span id="JSON"></span>
### JSON Signature rules

When the signature is an JSON Digital Signature (contentType = application/jose), the following rules apply:

-   The Signature.data is base64 encoded JWS-Signature [RFC 7515: JSON Web Signature (JWS)](https://tools.ietf.org/html/rfc7515)
-   The signature is a [Detached](https://tools.ietf.org/html/rfc7515#appendix-F) Signature (where the content that is signed is separate from the signature itself)
-   When FHIR Resources are signed, the signature is across the [Canonical JSON form](json.html#canonical) of the resource(s)
-   The Signature SHOULD use the hashing algorithm SHA256. Signature validation policy will apply to the signature and determine acceptability
-   The Signature SHALL include a "CommitmentTypeIndication" element for the Purpose(s) of Signature. The Purpose can be the action being attested to, or the role associated with the signature. The value shall come from ASTM E1762-95(2013). The `Signature.type` shall contain the same values as the CommitmentTypeIndication element.

There are three levels of signature verification:

1.  Verifying that the Digital Signature block itself has integrity through verifying the signature across the JWS-Signature.
2.  Confirming that the signer was authentic, not revoked, and appropriate to the signature purpose.
3.  Confirming that the signed content of interest is unmodified using the hash algorithm.

Deviations from these guidelines would need to be expressed in site policy and would be enumerated in the JWS-Signature block. For example, some environments may choose a different hashing algorithm, policy identifier, or signature purpose vocabulary.

Signature is used in the following places: \[%dtusage Signature%\]

<span id="Annotation"></span> <span id="annotation"></span>
Annotation
----------

See also [Examples](datatypes-examples.html#Annotation), [Detailed Descriptions](datatypes-definitions.html#Annotation), [Mappings](datatypes-mappings.html#Annotation), [Profiles & Extensions](datatypes-extras.html#Annotation) and [R2 Conversions](datatypes-version-maps.html#Annotation).

A text note which also contains information about who made the statement and when.

\[%dt Annotation 15%\]
Systems that do not have structured annotations simply communicate a single annotation with no author or time.

This element may need to be included in narrative because of the potential for modifying information.

Annotations **SHOULD NOT** be used to communicate "modifying" information that could be computable (this is a SHOULD because enforcing user behavior is nearly impossible).

Annotation is used in the following places: \[%dtusage Annotation%\]

<span id="open"></span>
Open Type Element
-----------------

Some elements do not have a specified type. The type is represented by the wildcard symbol "\*". In these cases, the element type may be one of the following:

\[%wildcard-type-list%\]
The element name ends with "\[x\]", and this is replaced with the Title cased name of the data type.

Open references are used in the following places: \[%dtusage \*%\]

<span id="other"></span>
Other Types
-----------

The following types are defined as part of the data types, but are documented elsewhere in the specification:

\[%diagram datatypes/types3.diagram 6dt%\]
-   **[Resource](resource.html#metadata)** - the conceptual base class for all resources
-   **[Reference](references.html#Reference)** - for references from one resource to another
-   **[Extension](extensibility.html)** - used to convey additional data in a resource
-   **[Narrative](narrative.html#Narrative)** - conveys a human-readable representation of the content of a resource

\[%file newfooter%\]
