\[%settitle RDF Representation%\]
\[%file newnavbar%\]
&lt;%fmtheader rdf%&gt; <span id="root"></span>
Resource Description Framework (RDF) Representation
---------------------------------------------------

|                                                |                                             |                                                                                      |
|------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td><img src="http://w3c-domains.com/img/w3c-96.png" /></td>
<td><p>This page and the RDF forms are jointly maintained by the HL7 FHIR project and the <a href="https://www.w3.org/blog/hcls/">W3C Semantic Web Health Care and Life Sciences Interest Group</a>.</p></td>
</tr>
</tbody>
</table>

FHIR resources can be represented as an [RDF graph](http://www.w3.org/RDF/) serialized in the [Turtle format](https://www.w3.org/TR/turtle/). The RDF format is defined to assist the process of bridging between operational data exchange and formal knowledge processing systems. While the RDF form offers a fully functional representation of FHIR resources, it has different operational characteristics from the [JSON](json.html) and [XML](xml.html) representations, and would be implemented for different reasons. Systems focused on operational exchange of data would not generally choose to use RDF.

This page describes:

-   [The relationship between the RDF, FHIR, and ontologies](#ontologies)
-   [Representing FHIR resources in Turtle](#instance)
-   [The FHIR definitions as Turtle](#class)
-   [How to exchange RDF using the RESTful API](#api)
-   [Implementation Advice for using RDF](#using)

<span id="todo"></span>
Most of the major pieces of FHIR/RDF are now available in a complete enough form for developers to start trying them and providing feedback. Work still needed includes:

-   Improved documentation on using the RDF format
-   Reconciliation with the [FHIR Ontology draft on W3C github](http://w3c.github.io/hcls-fhir-rdf/spec/ontology.html)
-   Tutorial materials on using FHIR/RDF with other ontologies and [ShExMap](http://shex.io/extensions/Map/) to translate other RDF data (non-FHIR) to/from FHIR/RDF

<span id="ontologies"></span>
### Relationship between the RDF, FHIR, and ontologies

This page documents an RDF format that can be used to exchange FHIR data, on the basis that RDF is a universal information representation. Using RDF enables FHIR data to be used with RDF-aware applications to support inference, shared semantics across multiple standards and data formats, data integration, semantic data validation, compliance enforcement, SPARQL queries and other uses. Implementers using FHIR in this fashion should be aware of the relationship between the RDF format the wider use of ontologies.

The RDF format is based on the same abstract information model as the [XML](xml.html) and [JSON](json.html) formats and carries the same information content. Resources are losslessly round-trippable between XML, JSON and RDF formats and data expressed in the RDF format corresponds closely to the XML and JSON formats in its look and feel. However, there are a few additional terms that may appear in the RDF format, which are explained below: `fhir:nodeRole`, `fhir:treeRoot`, `fhir:value`, `fhir:index` and `fhir:concept`. [ShEx](downloads.html) schemas are available that describe the RDF format.

In addition to defining the RDF format, this specification [provides an associated ontology](downloads.html) that provides formal definitions for the relationships that appear in the RDF format. Ontologies that were designed independently almost always have some impedance mismatch when attempting to use them together. Many of the ontologies in the medical and life sciences domain are designed to capture facts about the world for research, such as the fact that the mitral valve is a kind of heart valve. But FHIR was designed to support the day-to-day operations of healthcare providers exchanging electronic health records (EHRs), and in this context, the orientation has historically been different. When using FHIR/RDF with other ontologies, impedance differences are likely to show up in two main ways:

-   **Records versus facts.** FHIR is oriented toward recording who did what ("Dr. Jones diagnosed patient x with viral pneumonia") rather than stating absolute medical facts ("patient x has viral pneumonia").
-   **Non-monotonicity.** RDF was designed to be monotonic, whereas FHIR has a few design aspects that would be non-monotonic if they were interpreted directly in RDF. (Monotonicity means that new data cannot invalidate previous conclusions; non-monotonicity means that previous conclusions can be invalidated by new data.) For example, a modifier extension indicates that the surrounding element's meaning will likely be misunderstood if the modifier extension is not understood.

For both of these reasons, to maintain monotonicity in RDF, FHIR/RDF should not be directly interpreted as stating facts; transformations are required to remove or isolate non-monotonic elements and reconcile the records across time and perspective.

Application developers should also be aware that some FHIR data attributes have a major impact on the interpretation of the enclosing data element: the meaning of the enclosing element cannot be determined in isolation. For example, a status of 'entered-in-error' means that the resource was created accidentally and should be ignored for most purposes.

<span id="instance"></span>
### Turtle Format for Resources

A FHIR resource is represented by a series of RDF triples. The Turtle representation for a resource is described using this format:

``` spec
Turtle Template

[ a fhir:Observation; fhir:nodeRole fhir:treeRoot;
  # from Resource: id; meta; implicitRules; and language
  # from DomainResource: text; contained; extension; and modifierExtension
  fhir:Obervation.identifier [ Identifier ]; # 0..* Unique Id for this particular observation
  fhir:Obervation.status [ fhir:value "<code>" ]; # R!  registered | preliminary | final | amended +
  fhir:Obervation.code [ CodeableConcept ]; # 1..1 R!  Type of observation (code / type)
  fhir:Obervation.subject [ fhir:reference [ Patient|Group|Device|Location ] ]; # 0..1 Who and/or what this is about
  fhir:Obervation.encounter [ fhir:reference [ Encounter ] ]; # 0..1 Healthcare event during which this observation is made
  # effective[x]: 0..1 Clinically relevant time/time-period for observation. One of these 2:
    fhir:Obervation.effectiveDateTime [ fhir:value "<dateTime>" ];
    fhir:Obervation.effectivePeriod [ Period ];
]
```

Using this format:

-   To build a valid Turtle instance of a resource, replace the contents of the property values with valid content as described by the type rules and content description found in the property value for each element
-   Relationship names are case-sensitive (though duplicates that differ only in case are never defined)
-   Relationships can appear in any order
-   Content within a resource is always represented with anonymous nodes - only resources can be identified
-   Nodes are never empty. If an element is present in the resource, it SHALL have properties as defined for its type, or 1 or more [extensions](extensibility.html)
-   The <span style="color: brown">**R!**</span> denotes that a relationship is mandatory - it must be present (or in an array, at least one item must be present)
-   Note that this specification produces Turtle that is nicely formatted and well laid out, but this is not required or expected
-   The MIME-type for this format is `application/fhir+turtle`. Other MIME types: `text/shex` for the SHEX (RDF schemas)

<span id="resource"></span>
#### Representing resources

Each resource is represented as a set of RDF triples represented using the Turtle syntax. When a resource has a persistent identity (e.g. it can be found at a particular URL - usually a FHIR RESTful server), then that URL is its identity. Resources with no persistent identity (e.g. bundles from search results) have the identity of the root document - "&lt;&gt;" in Turtle syntax.

Some resources can contain other resources. Given that the relationships can appear in any order, it cannot be assumed that the first encountered element represents the resource of interest that is being represented by the set of Turtle statements. The focal resource - where to start when parsing - is the resource with the relationship `fhir:nodeRole` to `fhir:treeRoot`. If there is more than one node labeled as a 'treeRoot' in a set of Turtle statements, it cannot be determined how to parse them as a single resource.

<span id="index"></span>
#### Representing Repeating Elements

Elements that can repeat are represented with a relationship

``` rdf
  fhir:index [n]
```

where \[n\] is a zero-based integer offset (i.e. the first element has an index of 0). Lists are never sparse; it is an error if there are missing items in the repeat sequence.

Note: this means that the rdf:list structure is not used.

<span id="primitive"></span>
#### Representing Primitive Elements

Primitive elements - elements with a primitive type - are represented as regular nodes so that the elements extensions can be represented. The actual value of the primitive type is represented using the fhir:value predicate:

``` rdf
  fhir:value "[value]"^^xs:type
```

The value has two parts: a literal string that contains the value, and, if applicable, one of the following schema types:

-   boolean
-   integer
-   decimal
-   base64Binary
-   dateTime
-   date
-   gYear
-   gYearMonth
-   time

The choice is made based on the types as specified for the [primitive type](datatypes.html#primitive). Note that the correct schema type for a date/dateTime must be determined by inspecting the value of the date for precision.

The fhir:value property can never be empty. Either the relationship is absent, or it is present with at least one character of content. XHTML is represented as an escaped xs:string.

<span id="reference"></span>
#### Representing References

A [Reference](references.html#Reference) element is represented using the same rules as above:

``` rdf
 fhir:Observation.subjectReference [
     fhir:Reference.reference [ fhir:value "Patient/example" ];
     fhir:Reference.display [ fhir:value "Example Patient" ];
  ];
```

This allows faithful round tripping of the resource between the Turtle format and the JSON and XML formats. However, it's very useful for an RDF processor if the RDF graph links to the target of the reference directly. This can be represented using the fhir:link property:

``` rdf
 fhir:Observation.subjectReference [
     fhir:link <http://hl7.org/fhir/Patient/example>;
     fhir:Reference.reference [ fhir:value "Patient/example" ]
  ];
```

The correct value for the fhir:link relationship must be determined by resolving the [rules for resolving references](references.html) for the various reference types to a literal URL that refers to the correct content in the local RDF context.

The fhir:link relationship can be added automatically as part of generating the resource representation, or it can be injected by a post-processor that knows how to convert the raw references into RDF-suitable references.

<span id="contained"></span>
#### Representing Inline Resources

Inline resources - when a resource is contained directly in another element occur in the following places:

-   [Bundle.entry.resource](bundle-definitions.html#Bundle.entry.resource)
-   [DomainResource.contained](domainresource-definitions.html#DomainResource.contained)
-   [Parameters.parameter.resource](parameters-definitions.html#Parameters.parameter.resource)

Inline resources are represented directly as anonymous nodes. This is an example for a contained Medication resource:

``` ttl
  fhir:DomainResource.contained [
     a fhir:Medication;
     fhir:index 0;
     # triples for the Medication
  ]
```

Note that DomainResource.contained has a cardinality of 0..\*, so [fhir:index](#index) is used to order the array.

<span id="concept"></span>
#### Representing Concepts

The same logic applies to the [Coding](datatypes.html#Coding) data type. These are represented directly in Turtle by serializing their properties as specified above:

``` rdf
  fhir:Observation.code [
     fhir:CodeableConcept.coding [
       fhir:index 0;
       fhir:Coding.system [ fhir:value "http://loinc.org" ];
       fhir:Coding.code [ fhir:value "29463-7" ];
       fhir:Coding.display [ fhir:value "Body Weight" ]
    ];
    fhir:CodeableConcept.coding [
       fhir:index 1;
       fhir:Coding.system [ fhir:value "http://snomed.info/sct" ];
       fhir:Coding.code [ fhir:value "27113001" ];
       fhir:Coding.display [ fhir:value "Body weight" ]
    ]
  ];
```

For reasoners using the RDF graph, it's very useful to make the implicit concept references in these Codings explicit using a rdf:type assertion ("a" in Turtle):

``` rdf
  fhir:Observation.code [
     fhir:CodeableConcept.coding [
       fhir:index 0;
       a loinc:29463-7;
       fhir:Coding.system [ fhir:value "http://loinc.org" ];
       fhir:Coding.code [ fhir:value "29463-7" ];
       fhir:Coding.display [ fhir:value "Body Weight" ]
     ];
     fhir:CodeableConcept.coding [
       fhir:index 2;
       a sct:27113001;
       fhir:Coding.system [ fhir:value "http://snomed.info/sct" ];
       fhir:Coding.code [ fhir:value "27113001" ];
       fhir:Coding.display [ fhir:value "Body weight" ]
    ]
  ];
```

These rdf:type assertions can be made by any agent that knows how to convert from the code system to the correct ontological representation on the RDF context. Note that a few code systems have standard ontological representations, but many don't. Again, these assertions can be made by the serializer, or injected by a post-processor.

<span id="schema"></span>
#### Schema

FHIR uses ShEx for representing the Turtle schema. See [fhir.shex](fhir.shex) for definitions.

<span id="class"></span>
### RDF Representation of FHIR

In addition to the basic representation of FHIR resources in Turtle format, a Turtle representation of the FHIR infrastructure and definitions is also published, for the following purposes:

-   Providing the class definitions to support RDF based representation of resource instances
-   Supporting knowledge-based analysis of the FHIR specification itself
-   Providing knowledge of use at run-time for converting between FHIR and other content models
-   Supporting reasoning across the information/terminology model boundary

The RDF definitions are published as a series of Turtle files: [HL7 v3 RIM](rim.ttl) (Reference Information Model) and [FHIR](fhir.ttl).

<span id="api"></span>
### Using RDF with the REST API

TODO

<span id="using"></span>
### Using FHIR/RDF

Application developers wishing to use FHIR/RDF will often need to perform the following rough steps, though exact steps will depend on your application:

1.  Convert FHIR/XML or FHIR/JSON data to/from FHIR/RDF. Open source implementations that can perform this conversion include:
    -   [HAPI java Reference library](https://hapifhir.io/) (Same code as used in the build)
    -   [Reference Server](http://fhir3.healthintersections.com.au/open) (based on [Delphi reference implementation](http://github.com/grahamegrieve/fhirserver))
    -   [fhir-net-api](https://github.com/mvdzel/fhir-net-api), a .NET implementation. (should work on [Mono](http://www.mono-project.com/))
    -   Check the [HL7 Open Source FHIR Implementations page,](https://confluence.hl7.org/display/FHIR/Open+Source+Implementations) in case new implementations have become available
2.  [Download](downloads.html) the FHIR ontology.
3.  Download other ontologies that you wish to use with your application, such as the SNOMED-CT ontology. (Because of license restrictions, the process of obtaining the SNOMED-CT ontology is more complex than a simple download. Some [guidance is provided here](http://owl.cs.manchester.ac.uk/research/snomed/).)
4.  Create or obtain a bridge ontology that relates terms in the FHIR ontology to terms in your other ontologies.
5.  Load your FHIR/RDF instance data and your ontologies into a reasoner and/or a triplestore, and perform SPARQL queries and/or reasoning.
6.  If you are creating FHIR/RDF then you might also wish to validate it, using [ShEx](http://shex.io/). If so, you can [download the ShEx schema](fhir.shex) for FHIR/RDF

[Slides by Eric Prud'hommeaux](https://www.w3.org/2016/Talks/1205-swat4ls-egp/reasoning) illustrate how inference can be used on FHIR/RDF data to perform a query for FHIR Observations of rheumatoid arthritis, using the [SNOMED-CT ontology](https://www.nlm.nih.gov/healthit/snomedct/international.html). *Caveat: those slides show some terms in the fhir: namespace that do not actually exist in the fhir: namespace, such as fhir:Observation-of-Rheumatoid\_arthritis-disorder and fhir:Coding-of-Rheumatoid\_arthritis-disorder. A different namespace should have been used in the example.*

\[%file newfooter%\]
