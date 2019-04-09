\[%settitle Using Codes and Terminologies%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Using Codes in Resources
========================

|                                                |                                                     |                                                                                      |
|------------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): Normative | [Standards Status](versions.html#std-process):[Normative](versions.html#std-process) |

\[%normative page%\] <span id="bindings"></span>
Many elements in the FHIR resources have a **coded value**: some fixed string (a sequence of characters) assigned elsewhere that identifies some defined "concept". The sequence of characters and its meaning may be defined in one of several places:

-   As one of a set of fixed values defined in this specification
-   In an internet RFC (e.g. mime type, language)
-   An HL7 specification ([HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) code system, or [HL7 v2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) table)
-   Some external terminology or ontology such as [LOINC](http://loinc.org), or [SNOMED CT](http://www.snomed.org)
-   A locally maintained dictionary, look up table or enumeration in an application (for further discussion of locally defined value sets, see ["Profiling FHIR"](profiling.html)

These methods of defining codes are collectively called "code systems". This list is far from complete; there are many ways to define code systems, and they vary widely in sophistication and size.

Throughout this specification, coded values are always treated as a pair composed of "system" and "code", where the system is a URL that identifies the code system that defines the codes. Note that `system` values are always case sensitive. Different code systems make their own rules as to whether the codes they define are case sensitive or not. Note that all the codes defined by FHIR itself are case sensitive and SHALL be used in the provided case (usually, but not always, lowercase).

The FHIR framework for using coded values is based on the fundamental framework defined in section 5 of the [HL7 v3 Core Principles](http://www.hl7.org/documentcenter/public/standards/V3/core_principles/infrastructure/coreprinciples/v3modelcoreprinciples.html) document, including the separation between code systems and value sets.

The general pattern for representing coded elements is using the following four elements:

|         |                                                                                                 |
|---------|-------------------------------------------------------------------------------------------------|
| system  | A URI that identifies the system (see [below](#system))                                         |
| version | Identifies the version of the system (see [Code System Versioning](codesystem.html#versioning)) |
| code    | A string pattern that identifies a concept as defined by the code system                        |
| display | A description of the concept as defined by the code system                                      |

The [Coding](datatypes.html#Coding) data type represents this pattern. This example shows a LOINC code with the LOINC system, the version of LOINC used for the definition, and the display assigned by LOINC:

``` json
  
{ 
  "system" : "http://loinc.org",
  "version" : "2.62",
  "code" : "55423-8",
  "display" : "Number of steps in unspecified time Pedometer"
}
```

When codes are carried in resources, one of several different data types is used:
[code](datatypes.html#code)<span id="code"></span>
The instance represents the *code* only. The *system* is implicit - it is defined as part of the definition of the element, and not carried in the instance.
[Coding](datatypes.html#Coding)<span id="Coding"></span>
A data type that has a *code* and a *system* element that identifies where the definition of the code comes from
[CodeableConcept](datatypes.html#CodeableConcept)<span id="CodeableConcept"></span>
A type that represents a concept by plain text and/or one or more `coding` elements (See the [datatype notes](datatypes.html#CodeableConcept) for a discussion of code translations and using text in CodeableConcept)
In addition, the following data types also carry coded values, or content that can be treated as a code and bound to a valueset:
[Quantity](datatypes.html#Quantity)<span id="Quantity"></span>
The instance has *system* and *code* elements for carrying a code for the type of unit, and these can be bound to a value set
[string](datatypes.html#string)<span id="string"></span>
The instance carries a string. In some cases, applications may wish to control the set of valid strings for a particular element, so the string value can be treated as a coded element (like `code`)
[uri](datatypes.html#uri)<span id="uri"></span>
Like `string`, URIs can be treated as a coded element
Notes:

-   Generally, the choice of data type is dictated by the resource itself. When choosing a data type for an [extension](extensibility.html), see the FHIR Confluence pages for [advice about data type choice](https://confluence.hl7.org/display/FHIR/Guide+to+Designing+Resources#Choice+of+coding+data+type).
-   [See below](#strings) for more information about binding the types [string](datatypes.html#string) and [uri](datatypes.html#uri) to a value set.

<span id="valuesets"></span>
Coded Values, Code Systems, and Value Sets
------------------------------------------

The set of coded values that is allowed in an element is known as a ["value set"](valueset.html). Anywhere these data types are used, the specification "binds" a value set to the element, and for the types code, Coding, and CodeableConcept, always does.

-   **[Code Systems](codesystem.html)** define concepts and give them meaning through formal definitions, and assign codes that represent the concepts
-   **[Value Sets](valueset.html)** specifies a set of codes defined by code systems that can be used in a specific context

The difference between a code system and a value set is an important distinction that is easily missed by implementers, since the difference is often overlooked in system design. For instance, it's not unusual to see an application table that is a mixed list of codes, containing some LOINC codes and also some additional in-house codes. Quite often, there is no explicit differentiation between them; only the fact that a code happens to look like a LOINC code betrays its origin.

For data exchange, on the other hand, explicitly tracking the source of the code is both important and necessary. In order to do this, each code system that defines codes is assigned a URL that identifies it, and all the codes it defines are actually a pair ("Code Pair": a name with a namespace). So in the case of this mixed list example from the previous paragraph, there are two code systems: [LOINC](loinc.html) (http://loinc.org) and a local one (let's say it has been given the URL: http://example.com/codesystems/additional-test-codes). The application table is a single value set (a set of Code Pairs) that includes codes from each of those two namespaces. The value set itself is given its own URL as an identifier (e.g. "http://example.com/fhir/ValueSet/test-codes"). This identifies the set of Code Pairs, but is never used as the namespace in an actual code pair, or in an instance. In FHIR, Code Pairs are always represented as "code" and "system", except for the simple data type [code](datatypes.html#code) where the namespace (e.g. the system element/property) is fixed in the schema and not represented explicitly.

Note that for some code systems, there is a single correct mechanism by which to represent codes defined by the system as a single URL. These single URLs are used in the context of the [RDF](rdf.html#concept) format to enable ontological reasoning. The URL is often a direct reference to a web source that can provide additional definitional material about the concept. Where the mechanism is known, and defined by the code system, it is described in this specification.

<span id="system"></span>
Choosing a system
-----------------

The URL in a `system` is always a reference to a code system, not to a value set. The `system` ensures that codes can be unambiguously traced back to their original definition, and that logical comparisons, matching and inferences can be performed consistently by different systems. For this reason, choice of the correct URI for the system attribute is critical.

The correct value to use in the *system* for a given code system can be determined by working through the following list, in order:

-   The specification [Code System Registry](terminologies-systems.html) - if a code system is listed here, it SHALL be used
-   A system URI or OID defined as the correct value to use in FHIR by the publisher of the code system
-   The FHIR [community code system registry](https://registry.fhir.org/search?q=resourcetype:codesystem) - if a code system is listed here with [status = active](namingsystem-definitions.html#NamingSystem.status), it SHALL be used
-   An OID registered in the [HL7 OID registry](http://hl7.org/oid) - if a code system is registered here, the OID SHOULD be used (using the syntax urn:oid:\[oid\])

If a code system is not resolved by this list, and there is no publisher to consult, implementers must choose a URI to use. The priority should be to choose a unique value that won't accidentally be used by another implementer for a different purpose - or a very similar purpose with a different scope. See [Registering Code Systems](https://confluence.hl7.org/display/FHIR/Registering+Code+Systems) for further advice.

For publishers of code systems, the following considerations should be kept in mind when defining the correct URI to use:

-   Once defined, the URI will require agreement from all implementers to change, and some might not be able to change (stored resources). If the set of users is not closed, it will usually not be possible to change the URI
-   Implementers strongly prefer a human readable URI. http://acme.com/patients/mrn is a great deal easier to work with than urn:oid:1.2.3.4.5.6.7
-   An http: address SHOULD resolve to some useful description of the code system. Ideally, if a user makes a request of the address with the media type set to a FHIR media type, the server will respond with a [CodeSystem resource](codesystem.html), but some other human or computable definition is allowed
-   HTTP addresses should be permalinks which may re-direct to the current correct content
-   A scope of the code system URI and the correct usage of codes and displays in its namespace SHOULD be clearly defined. See examples for [SNOMED CT](snomedct.html), [RxNorm](rxnorm.html), [LOINC](loinc.html), [NDC](ndc.html)
-   Generally, allocation of URLs is hierarchical, and most care is required in choosing the Base URL. Once sub-URL policies are clearly defined, URIs can often be automatically assigned

Note: if the code system is made available packaged inside a [ValueSet](valueset.html) resource, the correct URL for the `system` value is *ValueSet.codeSystem.system*, not *ValueSet.uri*.

<span id="grammar"></span>
Complex Code Systems
--------------------

All code systems define a set of concepts, assign specific codes to them, and provide definitional material to guide implementers in the correct use and understanding of the codes. Many code systems define relationships between the different concepts - is-a, part-of, classifies-with, and many other relationships. These features are represented in the [CodeSystem](codesystem.html) resource, and exchanged using one of the code data types described above.

Some code systems define rules for how complex expressions can be built using the basic concepts defined by the code system. This is sometimes referred to as "post-coordination". Some of the more notable code systems that define grammars for expressions are:

-   [SNOMED CT](snomedct.html)
-   [UCUM](ucum.html)
-   [Mime Types](http://tools.ietf.org/html/bcp13)
-   [Language](http://tools.ietf.org/html/bcp47)
-   [ICD-\[X\]](icd.html)

There are many others. Any expression defined by the code system is still regarded as a 'code' and represented as such.

This example shows a SNOMED CT expression:

``` json
  
{ 
  "system" : "http://snomed.info/sct",
  "code" : "128045006:{363698007=56459004}"
}
```

Note that there is no display defined for SNOMED CT expressions.

<span id="binding"></span>
Controlling the use of Coded Values
-----------------------------------

When an element is bound to a value set, the binding has these properties:

|             |                                                                                                                                                                                                                      |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name        | A descriptive name used when presenting information about the binding                                                                                                                                                |
| Strength    | How the binding should be understood - see below                                                                                                                                                                     |
| Reference   | A URL that defines the value set. Usually, this is a direct reference to a [ValueSet](valueset.html) resource, but can be a more indirect reference, where the value set is inferred                                 |
| Description | A text description of the use of the codes. If there is no reference, this must be populated. When there is a reference, this can be used to make additional notes about the use and implementation of the value set |

A binding is always represented using an [ElementDefinition.binding](elementdefinition-definitions.html#ElementDefinition.binding).

<span id="references"></span>
### Value Set References

There are a number of places in the specification where value sets are referenced in order to bind a coded value to a value set:

|                                                                            |                                                                                              |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| [ElementDefinition](elementdefinition.html).binding.valueSet               | Used to bind a defined element to a value set                                                |
| [ConceptMap](conceptmap.html).source\[x\] and .target\[x\]                 | Used to indicate the scope of the mapping in the Concept Map - from one value set to another |
| [Questionnaire](questionnaire.html).item.answerValueSet                    | Indicates that answers to a set of questions come from a value set                           |
| [ValueSet](valueset.html).compose.include.valueSet                         | The content of a value set includes the content in the imported value set too                |
| [OperationDefinition](operationdefinition.html).parameter.binding.valueSet | Used to bind a defined parameter to a value set                                              |
| [ValueSet Reference Extension](extension-valueset-reference.html)          | Indicates that a coded value was chosen from the specified value set                         |

When referencing value sets, the reference is usually made to the [definition of a value set](valueset.html#compositions) - that is, a value set that defines what codes are in the value set. A [terminology server](terminology-service.html) is required to convert this definition to the [actual expansion that specifies what codes are in the value set](valueset.html#expansion) in the context of operation.

There are two types of value set references in this list, direct and logical.

<span id="direct"></span>
#### Direct Value Set references

A direct value set reference has the type [Reference](references.html#Reference), and refers directly to a ValueSet based on a URL, usually to a terminology server running a [FHIR RESTful API](http.html). When accessing a value set based on this kind of reference, a system should access the URL directly (after converting a relative reference to an absolute reference according to the local context). If this process fails, the system is unable to resolve the value set and must handle the error appropriately.

Example:

    GET fhir/Questionnaire/234

    <Questionnaire>
      ...
      <question>
        <options>
          <reference value="ValueSet/234234"/>
        </options>
      </question>
      ....
    </Questionnaire>

This specifies that the values for a questionnaire come from the ValueSet with id 234234 on the same FHIR end-point. To resolve this, the system would GET fhir/ValueSet/234234

Typically, a direct reference like this is good for in-process references, in closed or carefully managed eco-systems. In a more general context, these references tend to be fragile over time because web URLs - including RESTful API URLS - are easily reassigned. For this reason, systems are encouraged to use logical value set references.

<span id="logical"></span>
#### Logical Value Set references

A logical value set reference has the type [uri](datatypes.html#uri), where an absolute URI is provided that matches the one in ValueSet.url. The value set URL can - and is preferred to be - a web address that resolves directly to a fixed web address that serves as the authoritative source for that value set. Alternatively, the system can query its terminology server(s) to resolve a value set with that URL as its identity.

Example:

    <StructureDefinition>
      ...
      <element>
        ...
        <binding>
          ...
          <valueSet value="http://hl7.org/fhir/ValueSet/clinical-findings"/>
        </binding>
        ...
      </element>
      ....
    </StructureDefinition>

This specifies that the element is bound to the value set with a ValueSet.url of <http://hl7.org/fhir/ValueSet/clinical-findings>. One way to access this value set is to try GET http://hl7.org/fhir/ValueSet/clinical-findings - which works, for this value set - http://hl7.org/fhir/ValueSet/clinical-findings returns the authoritative value set for this URL.

Alternatively, the value set could be resolved using a local terminology server. If that's running a [FHIR Terminology Server](terminology-service.html), then this would work like this:

    GET fhir/ValueSet?url=http://hl7.org/fhir/ValueSet/clinical-findings

if the terminology server knows the value set, then it will return the value set. If the URL doesn't resolve to an authoritative value set, and the terminology server(s) don't know the value set, the system is unable to resolve the value set and must handle the error appropriately.

The value set URL is allowed to be a URI such as a UUID (e.g. urn:uuid:c0e0d027-1250-4278-8f44-33a49dc67916). These value sets can never be accessed directly, and must come from a terminology server. Note that this specification defines many value sets that have a logical URL that is not resolvable (examples for [SNOMED CT](snomedct.html#implicit), [RxNorm](rxnorm.html#implicit), [LOINC](loinc.html#implicit))

Using a logical reference which is a direct reference to the authoritative value set is the easiest and most reliable approach. However, this requires suitable hosting arrangements, and cannot always be guaranteed, so it is not required.

**Version specific Logical References**

A value set has a two-part identifier: a url, and a version. Some value sets only ever have a single 'version'; a revision of the value set contents will cause a new url to be assigned. Others, however, maintain the same URL, and change the version. A terminology server may have multiple value sets for the same ValueSet.url with different versions.

To be precise about which version of a value set is being referred to in a value set reference, append the version to the canonical URL with a '|' like this:

    <valueSet value="http://hl7.org/fhir/ValueSet/clinical-findings|0.8"/>

This is a version specific reference to a value set. Searching for this on a terminology server would look like this:

    GET fhir/ValueSet?url=http://hl7.org/fhir/ValueSet/clinical-findings&version=0.8

Note that if a value set reference does not have a version, and the server finds multiple versions for the value set, the system using the value set should pick the latest version of the value set and use that. Note that this applies to all [conformance resources](references.html#canonical).

<span id="unbound"></span>
#### Unbound

Note that as a matter of ongoing development, a few elements that have coded data types are not bound to any value set at all. Bindings are to be provided for these elements.

<span id="strength"></span>
Binding Strengths
-----------------

Almost all the elements that have a coded data type are bound to a value set. The bindings are associated with various degrees of flexibility as to how closely the value set should be followed:

&lt;%linkcodelist http://hl7.org/fhir/binding-strength%&gt;
The precise conformance criteria for 'required' and 'extensible' binding strengths vary by the data type to which they are applied, as described in the paragraphs below.

Irrespective of the binding strength, when a [StructureDefinition](structuredefinition.html) is used to describe local usage, it can bind the element to a different value set in order to be much more precise about exactly which coded values can be used for these elements, and/or increase the strength of the binding. There are different rules for this, depending on the binding strength, as discussed below. Generally it is expected that jurisdictions, projects and vendors will work together to choose actual working value sets.

<span id="simple"></span> <span id="code"></span> <span id="required"></span>
### Required

*To be conformant, codes in this element SHALL be from the specified value set.*

In the standard, this is generally used for elements where the value needs to be strictly controlled so that everyone can interpret it with confidence. Generally, this is used for elements with type [code](datatypes.html#code):

-   the element is bound to a value set that contains a list of distinct codes with a specified system (and version, where required)
-   the element is bound to some external standard that defines the set of valid codes that can be used (typical examples are [Mime Types](http://www.rfc-editor.org/bcp/bcp13.txt), [Language Codes](http://tools.ietf.org/html/bcp47), [UCUM](http://unitsofmeasure.org), etc.)

The other place where this is used is when [profiling resources](profiling.html), and there is agreement within a context of use that a specified set of codes are the only ones that can be used. In these cases, the data type SHALL contain one of the values in the value set.

The following rules apply when required bindings are used with the [CodeableConcept](datatypes.html#CodeableConcept) data type:

-   at least one Coding element SHALL be present
-   one of the Coding values SHALL be from the specified value set
-   `text` can be provided as well, and is always recommended, but is not an acceptable substitute for the required code

If a required binding is applied to an element with maximum cardinality &gt; 1, the binding applies to all the elements.

The following rules apply when required bindings are used with the [code](datatypes.html#code) data type:

-   Where the value set is defined by FHIR, the list of allowed codes will be fixed in the XML schema
-   Comparison between codes is always case sensitive unless the codes are selected by reference (e.g. ValueSet.compose), and the referenced specification clearly states otherwise
-   The list of codes that can be used can only be extended in subsequent releases of the FHIR specification

When an element is bound to a required value set, [derived profiles](profiling.html) may state rules on which codes can be used, including removing codes from allowed use, but cannot specify new or additional codes for these elements.

<span id="extensible"></span>
### Extensible

*To be conformant, codes in this element SHALL be from the specified value set if any of the codes within the value set can apply to the concept being communicated.*

Note that it is the value set **binding** that is extensible, not the value set itself.

If **there is no applicable concept** in value set (based on human review), an alternate concept (either `system`/`code` pair, or `text`) may be used instead. The alternate concept can have any level of specificity in an `is-a` hierarchy (see [Condition instance \#2](terminologies-binding-examples.html#extensible.c2)).

If **there is at least one applicable concept** in the extensibly-bound value set with a meaning which includes but is more general than the meaning that is intended to be represented by the element in the resource instance, then the code that is used in the instance SHALL be taken from the value set and should be the closest available match for the intended element instance meaning (i.e. neither more general or more specific). However, a more specific code that more completely represents the intended meaning **may also** be included in the instance as an additional Coding if the data type is CodeableConcept, but it cannot be used **instead of** the code from the value set. This helps ensure that systems know which codes they should expect to receive and build logic for and it facilitates interoperability.

When a code for an applicable concept in the extensibly-bound value set is used it should always be the closest available match for the intended element instance meaning, regardless of hierarchical (i.e. "is-a") relationships in the underlying code system(s) or hierarchical "level" of the concept. However, as noted above, a code for a concept that is **outside** of the extensibly-bound value set with a meaning which is "covered by" (i.e. is more specific than or has an "is-a" relationship to) a concept that is included in the value set **cannot** be used. In that case a code for a concept that is in the extensibly-bound value set SHALL be used in the element instance and it should be the code for the concept that most closely matches the intended element instance meaning.

If the data type is [CodeableConcept](datatypes.html#CodeableConcept), then, as noted above, one of the Coding values SHALL be from the specified extensibly-bound value set if a code in that value set applies, but if no applicable code exists in the value set alternate code(s) from outside the value set may be used instead. If no codes, including local codes, are available, then text alone (in CodeableConcept.text) may be used.

If the data type is [Coding](datatypes.html#Coding), then the code/system SHALL be from the specified value set if a code applies, but if no suitable code exists in the value set, an alternate code may be provided in its place.

If an extensible binding is applied to an element with maximum cardinality &gt; 1, the binding applies to all the elements.

Identified gaps in value sets should be submitted to the organization administering the value set in order to improve interoperability in the future.

Extensible bindings are used when there is consensus at the specification or profiling level about the coded values that should be used, but it is impossible to create a bounded list of codes that are known to cover all use cases, including ones that are yet to arise.

When an element is extensibly-bound to a value set, [derived profiles](profiling.html) may state rules on which codes can be used, but cannot select new or additional codes for these elements unless no codes with appropriate meanings are found in the base value set.

Note that if the valueset-reference extension is being used and the code in the element instance is from outside the extensibly-bound value set, the extension must reference a different value set that the code was chosen from (or if no other value set reference is available the extension cannot be used in that instance).

#### Examples for Extensible Bindings

See [examples](terminologies-binding-examples.html#extensible) to help explain the difficult but important subject of Extensible bindings.

<span id="preferred"></span>
### Preferred

*Instances are encouraged to draw from the specified codes for interoperability purposes but are not required to do so to be considered conformant.*

If the data type is [CodeableConcept](datatypes.html#CodeableConcept), then one of the Coding values SHOULD be from the specified value set, but another code and/or text can be used in its place.

Preferred bindings are used when there is consensus at the specification level about the coded values that are the best to be used, but there is recognition that some implementation contexts are unable to use the recommended codes for a variety of reasons. Applications should consider adopting the preferred value set wherever possible, as these preferred value sets are the most likely to serve interoperability purposes in the future.

When an element is bound to a preferred value set, [derived profiles](profiling.html) may bind the element to any value set they choose.

#### Examples for Preferred Bindings

See [examples](terminologies-binding-examples.html#preferred) of how Preferred bindings work.

<span id="example"></span>
#### Example Bindings

*Instances are not expected or even encouraged to draw from the specified value set. The value set merely provides examples of the types of concepts intended to be included.*

Example bindings are used when an element has a very broad meaning (such as [List](list.html).code), or there is no consensus over the correct codes to be used. For these bindings:

-   **Coding**: the *system*/*code* values MAY be one of the codes in the value set.
-   **CodeableConcept**: one of the *coding* elements MAY contain a *system*/*code* that is in the value set.

Some other coded value MAY be used, or (for a CodeableConcept), a text alternative MAY be provided. Example value sets are provided to assist implementers to understand the correct use of an element. Value sets based on code systems such as SNOMED CT that have restrictive license terms will only be used as example bindings in the base FHIR specification, though implementation guides for particular jurisdictions may adopt value sets that require licenses. In addition, well-specified realm-specific ValueSets may also be used as example bindings in the base specification.

When an element is bound to an example value set, [derived profiles](profiling.html) may bind the element to any value set they choose.

<span id="other"></span>
Other notes
-----------

-   Subsequent versions of FHIR may replace example value sets with preferred bindings if enough consensus emerges in the relevant sphere.
-   Bindings to value sets provided as part of the specification are always specific to the version of the value set published with the specification. The value set may be sealed by defining a simple list of enumerated codes, or it may include codes by their properties, along with a non-version specific reference to an underlying code system, in which case the list of valid concepts may change over time.

<span id="strings"></span>
### Binding String Values

In a few special cases, humans customarily use codes directly for elements that have type "string". A typical case is codes for states, and there are several places where a URI must come from a set of controlled values. An element of type [string](datatypes.html#string) or [uri](datatypes.html#uri) can also be bound to a value set. When a string or URI is bound to a value set, the value property SHALL contain the code specified by the value set, and the system and display values are ignored.

<span id="Terminology-Service"></span>
### Terminology Service

FHIR has defined a [Terminology Service](terminology-service.html) specification which sets requirements for systems that support the use of codes, value sets and code systems.

\[%file newfooter%\]
