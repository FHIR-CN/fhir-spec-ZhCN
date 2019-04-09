\[%settitle Defining Extensions%\]
\[%file newnavbar%\]
&lt;%extheader defining%&gt; <span id="root"></span>
Defining Extensions
-------------------

|                                                |                                             |                                                                                      |
|------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 3 | [Standards Status](versions.html#std-process):[Normative](versions.html#std-process) |

\[%normative page%\]
All extensions used in resources require a formal published definition that can be used by application developers or the applications themselves, to help integrate extensions into the healthcare process they support.

Every extension in a resource refers directly to its definition, which is made available as a [StructureDefinition](structuredefinition.html). A resource can be [profiled](profiling.html) to specify where particular extensions are required or expected.

Whenever resources containing extensions are exchanged, the definitions of the extensions SHALL be available to all the parties that share the resources. Each extension contains a URI that references the source of the definitions as a [StructureDefinition](structuredefinition.html). The source SHOULD be a literal reference, such as an http: URL that refers to an end-point that responds with the contents of the definitions - preferably a [FHIR RESTful server](http.html) supporting the `StructureDefinition`, or a logical reference (e.g. using a urn:) - for instance, to a national published standard. Extensions may be defined by any project or jurisdiction, up to and including international standards organizations such as HL7 itself.

Before defining a new extension, attempt to reuse existing extensions defined in one of the [shared registries described below](#registration). Also consider that some concepts may be appropriate to add as part of the core specification.

See also [Best Practice Guidance for defining extensions](https://confluence.hl7.org/pages/viewpage.action?pageId=35718826#GuidetoDesigningResources-ExtensionGuidance).

<span id="core"></span>
### Core Elements

Elements are included as part of FHIR resources and data types principally on the basis of current world-wide usage patterns. Policy is that if a significant majority of systems throughout the world that would use a resource or data type would use an element, then that element will be included as part of the resource/data type. If not, it will be left to an extension. This holds even if the element is very common or even mandatory in one or two specific jurisdictions.

[Proposals](http://hl7.org/fhir-issues) suggesting a new core element can be raised by anyone. (Free registration is required.) However, given the [timelines](versions.html) for new FHIR releases as well as the uncertainties associated with vetting the specification through a ballot process, it may still be necessary to define extensions even for elements that are likely to be supported as part of the core specification in a future release.

<span id="context"></span>
### Context

Extensions are always defined against some particular context - which elements they can extend. There are three different ways to specify which elements an extension can be found on:

<table>
<thead>
<tr class="header">
<th>Code</th>
<th>Context type</th>
<th>Context format</th>
<th>Examples</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>fhirpath</td>
<td>A <a href="fhirpath.html">FHIRPath</a> expression that selects the set of elements on which the extension can appear</td>
<td>The FHIRPath statement always starts from the root of the resource that might contain the element</td>
<td>Condition<br />
(Condition | Observation).code</td>
</tr>
<tr class="even">
<td>element</td>
<td>Formal <a href="elementdefinition.html#id">Element Id</a> for the element</td>
<td>Element Ids are unique within the base specification, and within a structure definition. The full path for the element is [url]#[elementid]. If there is no #, the Element id is one defined in the base specification</td>
<td>Address.part.value<br />
http://hl7.org/fhir/StructureDefinition/resprate#Observation.category:vscat.coding</td>
</tr>
<tr class="odd">
<td>extension</td>
<td>Another extension</td>
<td>The canonical URL of the extension, optionally followed by #code for extension that appear within a complex extension</td>
<td>http://hl7.org/fhir/StructureDefinition/device-din</td>
</tr>
</tbody>
</table>

Extensions SHALL only be used on a target that appears in their context list.

<span id="cardinality"></span>
### Cardinality

The cardinality constraints asserted by the extension definition itself apply to any contexts where the extension is used.

**Minimum Cardinality**

If the Extension minimum cardinality is 0, then the extension is, by default, optional anywhere it appears. A [profile](profiling.html#resource) that defines the use of an extension may make the minimum cardinality any number up to the maximum cardinality of the extension itself. Example: [Patient birthplace](extension-patient-birthplace.html).

If the Extension minimum cardinality is &gt; 1, then the extension must have a minimum cardinality of at least the minimum cardinality in any [profile](profiling.html#resource) that defines the use of the extension. The minimum cardinality may be any number up to the maximum cardinality of the extension. Even with a minimum cardinality &gt; 0, the extension is only required to be present in instances if the instances explicitly or implicitly conform to a profile that defines the use of the extension. Example: [CapabilityStatement Expectation](extension-capabilitystatement-expectation.html).

**Maximum Cardinality**

If the Extension maximum cardinality is 1, then the extension is only allowed once on any element on which it appears. A [profile](profiling.html#resource) that defines the use of an extension can only make the maximum cardinality 1 (or zero if the minimum cardinality is 0, and the profile constrains another profile that allows the extension). Example: [Mother's Maiden Name](extension-patient-mothersmaidenname.html).

If the Extension maximum cardinality is &gt;1, then the extension is allowed up to the specified number of times on any element on which it appears. A [profile](profiling.html#resource) that defines the use of an extension may make the maximum cardinality any value up to the specified maximum. Example: [Patient Disability](extension-patient-disability.html).

**Context Invariants**

Extensions are also able to define context invariants, which is a rule that is executed on the element that contains the extension when it is present to check that local requirements around cardinality and other business rules are met.

For example, if you use [the extension for house number](extension-iso21090-adxp-housenumber.html), the Address.line needs to be filled as well:

      <contextInvariant value="line.exists()"/>

Note that since the context invariant is only evaluated when the extension is present, there is an implicit `"line.extension('http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName').exists() implies"` at the start of the expression. A context invariant that enforces that the extension is present under certain circumstances cannot be defined in the extension itself - it must be defined in a profile that makes use of the extension.

<span id="ed"></span>
### Use of ElementDefinition in Extension Definitions

An extension is a wrapper for an identifying url and either a value or other extensions. As such, some of the properties of the extension are defined on the extension itself, while others are defined on the `Extension.value`. This list provides guidance for the correct usage:

-   Extension root element:
    -   Cardinality
    -   Short, Definition, Comments
    -   IsModifier
    -   MustSupport (is used on invocation of the extension)
    -   Conditions & Constraints. These SHOULD never be on url/value\[x\]
    -   Mappings. these SHALL never be on url/value\[x\]
-   Extension.url:
    -   Cardinality = 1...1 (fixed)
    -   value = canonical URL (fixed)
-   Extension.value\[x\]:
    -   Type
    -   Cardinality for Simple extensions (not nested): 1..1. Use 0..0 if nested. Note that the actual extension cardinality is defined by the root element
    -   Binding
    -   MaxLength, DefaultValue, Pattern, Example, MinValue, MaxValue
-   Extension.extension:
    -   Cardinality for Complex extensions (nested): 0..\*, though at least one nested extension must be present. Use 0..0 if a simple (non-nested extension)
    -   .extension is automatically sliced by `url`
    -   nested extensions can be defined in-line (as children elements of Extension.extension), or by reference (using .type.profile)

Note: Extensions are always sliced by their `url` property. Re-slicing extensions by additional properties is allowed (see [Profiling/Slicing](profiling.html#slicing)).

<span id="registration"></span>
### Publishing Extension Definitions

As well as defining the base element structure for resources, HL7 also publishes extensions, including as [part of this specification](extensibility-registry.html). HL7 publishes such data definitions as extensions rather than as part of the base resource structure to keep the base resource structure simple and concise, and to allow implementers freedom from needing to engage with an entire world's worth of functionality up front.

Before extensions can be used in instances, their definition SHALL be published. HL7 maintains two extension registries:

1.  HL7 approved extensions, approved by an appropriate part of the HL7 community following a review process, and that have formal standing
2.  Provided as a service to the community, where anyone can register an extension

Users are encouraged to register their extensions in the second registry, though this is not required. All that is required is that the extension is published in a context that is available for users of the extension. So, for example, if a particular extension is only used within a single institution, the definition of the extension can be placed on the institution's intranet. However since, by their nature, resources tend to travel well, it's always better to publish it on a public facing web site. Using the [FHIR registry](http://registry.fhir.org) or other publicly accessible extension registries not only publishes the extension, but also makes it easy to find and encourages reuse and therefore consistency across implementations.

The HL7 FHIR registry can be found at <http://hl7.org/fhir/registry>.

HL7 extension definitions may be balloted alongside resource content as part of the FHIR specification or may be published as part of separate specifications. When HL7 publishes extension definitions as part of the FHIR specification, these extensions SHALL be used for this data whenever the data is represented in instances. Applications SHOULD use other HL7-defined extensions published to represent equivalent data in the interest of maximum interoperability.

To minimize complexity for implementers, HL7 will not elevate widely adopted extensions (defined by HL7 or other organizations) to be content defined in a core resource in future versions of the resource unless there is widespread endorsement of such a migration from the implementer community. This policy ensures that widespread adoption of an extension does not result in a forced migration to a core element. Extensions labeled as draft may be moved in either direction, but after extensions are finalized as normative they won't be moved.

In some cases, an HL7 work group or other body may publish a profile whose sole purpose is to define extensions expected to be needed by implementers in a particular context; e.g. extensions needed to map a particular set of [HL7 v2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) segments or a [HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) model.

Implementations are encouraged to share their extensions with HL7 and register them with the HL7 extension registry. The domain committees will work to elevate the extensions into HL7 published extensions or, if adopted by a broad enough portion of the implementer community, into the base resource structure itself.

To avoid interoperability issues, extensions SHALL NOT change their definition once published. (Small clarifications to descriptions that do not affect interoperability are permitted.) Rather than modifying an existing extension, a new extension should be introduced. Revisions to an extension may extend the set of contexts in which the extension apply but SHALL NOT remove or constrain any context previously listed

\[%file newfooter%\]
