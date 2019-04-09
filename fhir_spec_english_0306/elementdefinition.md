\[%settitle Element Definition%\]
\[%file newnavbar%\]
&lt;%edheader base%&gt;
Element Definition
==================

|                                                |                                                     |                                                                                       |
|------------------------------------------------|-----------------------------------------------------|---------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): Normative | [Standards Status](versions.html#std-process): [Normative](versions.html#std-process) |

\[%normative page%\]
The definition of an element in a resource or an extension. The definition includes:

-   Path (name), Cardinality, and data type
-   Definitions, usage notes, and requirements
-   Default or fixed values
-   Constraints, Length limits, and other usage rules
-   Terminology Binding
-   Mappings to other specifications
-   Structural Usage Information such as [Slicing](profiling.html#slicing)

The ElementDefinition type is the core of the FHIR metadata layer, and is closely (conceptually) aligned to [ISO 11179](elementdefinition-mappings.html#iso11179). All the data elements defined in this specification are published as a collection of data elements ([XML](dataelements.xml) or [JSON](dataelements.json)).

ElementDefinition is used in \[%dtusage ElementDefinition%\]

<span id="definition"></span>
Content
-------

\[%dt ElementDefinition 1%\]
**Constraints**

\[%dt.constraints ElementDefinition%\]

 

<span id="path"></span>
Use of ElementDefinition.path
-----------------------------

The `path` element is the most important property of the element definition. It both names the element, and locates the element within a hierarchy defined within a particular context. Within the FHIR specification, there is only one original definition for each path. This is the master definition to which all the other definitions with the same path must conform.

All elements defined within the FHIR specification itself are defined within a [StructureDefinition](structuredefinition.html) that defines a resource, or a datatype. This defines the identity of the element and provides the context in which the meaning of the element is understood. When Elements are defined, the following rules apply:

-   Element names (the parts of a path delineated by the '.' character) SHALL NOT contain whitespace (i.e. Unicode characters marked as whitespace)
-   Element names SHALL NOT contain the characters ,:;'"/|?!@\#$%^&\*()\[\]{}
-   Element names SHOULD not contain non-ASCII characters
-   Element names SHALL NOT exceed 64 characters in length
-   Element paths cannot imply elements that are not explicitly defined i.e. a.b.c.d cannot be defined unless a.b.c is explicitly defined
-   By convention, each path starts with an uppercase letter (type) but all the element names that follow this are lowercase (not type names). All resources and data types (except for Primitive data types) follow this convention, but logical models are not required to do so

Elements may be defined in:

-   StructureDefinitions of [kind](structuredefinition-definitions.html#StructureDefinition.kind) = `resource`, `complex-type` or `primitive-type`, where [derivation](structuredefinition-definitions.html#StructureDefinition.derivation) = `specialization`. These are either Resources or Data Types defined in the specification
-   StructureDefinitions of [kind](structuredefinition-definitions.html#StructureDefinition.kind) = `logical`
-   Data Elements

StructureDefinitions with [derivation](structuredefinition-definitions.html#StructureDefinition.derivation) = `constraint` (i.e. Resource and Data Type profiles) are not allowed to define or include ElementDefinitions with a path not defined within the base type definition from which they derive (e.g. in the FHIR specification).

<span id="id"></span>
ElementDefinition.id
--------------------

In addition to the path, every ElementDefinition SHALL have a populated [id](element.html#table), and the `id` SHALL have a unique value populated by following this algorithm:

-   The id will be constructed as a dot separated string, each part corresponding to a token in the path
-   For each token in the path, use the syntax `pathpart:slicename/reslicename`
-   For type choice elements, the id reflects the type slice. e.g. For path = Patient.deceasedBoolean, the id is Patient.deceased\[x\]:deceasedBoolean

Note that in a profile with no slices, this id will match the path exactly and entirely. `id` values constructed in this fashion are unique, and persistent, and may be used as the target of external references into the definition, where necessary.

<span id="interpretation"></span>
Interpretation of ElementDefinition in different contexts
---------------------------------------------------------

The data type `ElementDefinition` is used in [StructureDefinition](structuredefinition.html). The way its elements are to be used and interpreted depends on the context:

<table>
<tbody>
<tr class="odd">
<td><strong>ElementDefinition field</strong></td>
<td><strong>Type definition, first element</strong></td>
<td><strong>Type definition, following elements</strong></td>
<td><strong>Constraint Definition, first element</strong></td>
<td><strong>Constraint Definition, following elements</strong></td>
</tr>
<tr class="even">
<td>sliceName</td>
<td>prohibited</td>
<td>prohibited</td>
<td>prohibited</td>
<td>required for slices, else prohibited</td>
</tr>
<tr class="odd">
<td>label</td>
<td>optional</td>
<td>optional</td>
<td>recommended</td>
<td>recommended</td>
</tr>
<tr class="even">
<td>code</td>
<td>optional</td>
<td>optional</td>
<td>optional</td>
<td>optional</td>
</tr>
<tr class="odd">
<td>slicing</td>
<td>prohibited</td>
<td>prohibited</td>
<td>prohibited</td>
<td>optional</td>
</tr>
<tr class="even">
<td>short/definition</td>
<td>required</td>
<td>required</td>
<td>required<sup>‡</sup></td>
<td>required<sup>‡</sup></td>
</tr>
<tr class="odd">
<td>requirements/<br />
comments/alias</td>
<td>prohibited</td>
<td>optional</td>
<td>prohibited<sup>‡</sup></td>
<td>optional<sup>‡</sup></td>
</tr>
<tr class="even">
<td>base</td>
<td>snapshot: required<br />
differential: optional</td>
<td>snapshot: required<br />
differential: optional</td>
<td>required</td>
<td>required</td>
</tr>
<tr class="odd">
<td>type</td>
<td>required</td>
<td>required</td>
<td>optional</td>
<td>optional</td>
</tr>
<tr class="even">
<td>nameReference</td>
<td>prohibited</td>
<td>optional</td>
<td>prohibited</td>
<td>optional</td>
</tr>
<tr class="odd">
<td>min/max</td>
<td>optional (irrelevant)</td>
<td>required</td>
<td>optional</td>
<td>optional<sup>†</sup></td>
</tr>
<tr class="even">
<td>defaultValue[x]</td>
<td>prohibited</td>
<td>optional</td>
<td>prohibited</td>
<td>optional<sup>†</sup></td>
</tr>
<tr class="odd">
<td>meaningWhenMissing</td>
<td>prohibited</td>
<td>optional</td>
<td>prohibited</td>
<td>optional<sup>†</sup></td>
</tr>
<tr class="even">
<td>fixed[x]</td>
<td>prohibited</td>
<td>prohibited</td>
<td>prohibited</td>
<td>optional</td>
</tr>
<tr class="odd">
<td>pattern[x]</td>
<td>prohibited</td>
<td>prohibited</td>
<td>prohibited</td>
<td>optional</td>
</tr>
<tr class="even">
<td>example[x]</td>
<td>prohibited</td>
<td>optional</td>
<td>prohibited</td>
<td>optional</td>
</tr>
<tr class="odd">
<td>minValue[x]</td>
<td>prohibited</td>
<td>prohibited</td>
<td>prohibited</td>
<td>optional</td>
</tr>
<tr class="even">
<td>maxValue[x]</td>
<td>prohibited</td>
<td>prohibited</td>
<td>prohibited</td>
<td>optional</td>
</tr>
<tr class="odd">
<td>maxLength</td>
<td>prohibited</td>
<td>prohibited</td>
<td>prohibited</td>
<td>optional</td>
</tr>
<tr class="even">
<td>mustSupport</td>
<td>prohibited</td>
<td>prohibited</td>
<td>optional</td>
<td>optional</td>
</tr>
<tr class="odd">
<td>isModifier</td>
<td>prohibited</td>
<td>optional</td>
<td>prohibited</td>
<td>optional<sup>†</sup></td>
</tr>
<tr class="even">
<td>isSummary</td>
<td>prohibited</td>
<td>optional</td>
<td>prohibited</td>
<td>optional<sup>†</sup></td>
</tr>
<tr class="odd">
<td>binding</td>
<td>prohibited</td>
<td>optional</td>
<td>prohibited</td>
<td>optional</td>
</tr>
<tr class="even">
<td>constraint</td>
<td>optional</td>
<td>optional</td>
<td>optional<sup>∆</sup></td>
<td>optional<sup>∆</sup></td>
</tr>
<tr class="odd">
<td>condition</td>
<td>prohibited</td>
<td>optional</td>
<td>prohibited</td>
<td>optional<sup>∆</sup></td>
</tr>
<tr class="even">
<td>mapping</td>
<td>optional</td>
<td>optional</td>
<td>optional<sup>∆</sup></td>
<td>optional<sup>∆</sup></td>
</tr>
</tbody>
</table>

Notes:

-   Type definition: A StructureDefinition without a `baseDefinition` element, or where the derivation type is 'specialization'
-   Constraint definition: A StructureDefinition with a `baseDefinition` element and a derivation of 'constraint' - e.g. a definition of a structure that constrains another base structure, referring to the differential portion
-   <sup>†</sup>: The element's presence, and value, must match the definition in the base definition
-   <sup>‡</sup>: The element content must be consistent with that matching element in the base definition
-   <sup>∆</sup>: Additional constraints and mappings can be defined, but they do not replace the ones in the base definition

The use of Path and type depends more deeply on the context where the ElementDefinition is used:

<table>
<tbody>
<tr class="odd">
<td><strong>Context</strong></td>
<td><strong>path (1st element)</strong></td>
<td><strong>path (following elements)</strong></td>
<td><strong>type (1st element)</strong></td>
</tr>
<tr class="even">
<td>Base definition of a data type<br />
(example: <a href="datatypes.html#Quantity">Quantity</a> - <a href="quantity.profile.xml.html">XML</a>, <a href="quantity.profile.json.html">JSON</a>)</td>
<td>Name of the type</td>
<td>Path inside the datatype</td>
<td><code>Element</code></td>
</tr>
<tr class="odd">
<td>A constrained data type<br />
(example: <a href="datatypes.html#Money">Money</a> - <a href="money.profile.xml.html">XML</a>, <a href="money.profile.json.html">JSON</a>)</td>
<td>Name of the base type</td>
<td>Path inside the datatype</td>
<td>Name of the base type</td>
</tr>
<tr class="even">
<td>Base definition of a resource<br />
(example: <a href="patient.html">Patient</a> - <a href="patient.profile.xml.html">XML</a>, <a href="patient.profile.json.html">JSON</a>)</td>
<td>The name of the resource</td>
<td>Path inside the resource</td>
<td><code>DomainResource</code> or sometimes <code>Resource</code></td>
</tr>
<tr class="odd">
<td>Constraint on a resource<br />
(example: <a href="vitalsigns.html">DAF Patient</a> - <a href="vitalsigns.profile.xml.html">XML</a>, <a href="vitalsigns.profile.json.html">JSON</a>)</td>
<td>The name of the resource</td>
<td>Path inside the resource<br />
(including into the data types)</td>
<td>The name of the resource</td>
</tr>
<tr class="even">
<td>Base Extension (which is a standard data type)<br />
(example: <a href="extensibility.html#Extension">Extension</a> - <a href="extension.profile.xml.html">XML</a>, <a href="extension.profile.json.html">JSON</a>)</td>
<td><code>Extension</code></td>
<td><code>Extension.value[x]</code> or <code>Extension.extension</code></td>
<td><code>Extension</code></td>
</tr>
<tr class="odd">
<td>A defined Extension<br />
(example: <a href="extension-geolocation.html">Extension</a> - <a href="extension-geolocation.xml.html">XML</a>, <a href="extension-geolocation.json.html">JSON</a>)</td>
<td><code>Extension</code></td>
<td><code>Extension.value[x]</code> or <code>Extension.extension</code> (for complex extensions)</td>
<td><code>Extension</code></td>
</tr>
</tbody>
</table>

There are additional notes about the use of `ElementDefinition` when defining Extensions on the [Defining Extensions](defining-extensions.html#ed) page.

<span id="slicing"></span>
### Rules about Slicing

For a description of slicing, see [Slicing](profiling.html#slicing)

-   Slicing is only allowed when constraining an existing structure
-   `slicing` can only be used on the first repetition of an element. This first element that declares `slicing` is considered to be the slicing entry
-   All elements following the first repeat that containing a slicing SHALL have a `sliceName`
-   The special slice name `@default` applies to all entries that are not in any other slice
-   The first entry (the one having the `slicing` information) is understood to be the set of constraints that apply to all slices and entries, whether they have a defined slice or not It's use follows the "normal case", except:
    -   `slicing` must be present
    -   `min` governs the number of total occurrences of the sliced element including the number of occurrences in the open portion of the slice (individual slices may have a different `min` value).

<span id="typesx"></span>
### Constraining elements with a choice of Type

Elements that allow a choice of multiple types can be constrained. In principle, there are two different types of constraints to apply:

-   A constraint that applies to the element as a whole - e.g. as restricting the cardinality, or limiting the choice of types
-   A constraint that applies to the use of a particular type - e.g. value set binding

When constraining elements with multiple types, the following rules apply:

-   Constraints limiting the acceptable list of types must be applied to the original "\[x\]" element as this is where the list of acceptable types is defined
-   The inclusion of a type specific path (such as "Patient.deceasedBoolean") SHALL NOT be interpreted as constraining allowed types, but instead, it constrains the use of a particular type
-   the original element SHALL always be represented in a snapshot; the type specific variants are only represented when needed

<span id="min-max"></span>
### Rules about min and max

-   **If there is no `StructureDefinition.baseDefinition`**: min and max are always required
-   Otherwise, in `StructureDefinition.differential`: min and max are always optional; if they are not present, they default to the min and max from the base definition
-   In `StructureDefinition.snapshot`: min and max are always required

<span id="aggregation"></span>
### Rules about Aggregation

-   If an aggregationMode is present in the definition, the 'reference' element SHALL be present and have a value and the target of the reference SHALL be aggregated as defined
-   If type.versioning is present in the definition, the 'reference' element SHALL be present and have a value and the reference SHALL be populated as the versioning constraint dictates.

<span id="missing"></span>
### Missing Elements

Most elements have a minimum cardinality of 0, which means that they may be missing from a resource when it is exchanged between systems. Generally, when an element is missing, all that an application processing the resource can say about the element is that the value is unknown - it may have a correct value, but it has not been provided for security or workflow reasons. On the other hand, it might not have a value at all. All the application can say is that the value is unknown.

This also applies when the element is present, but has no value or child elements, and only has extensions instead.

However, for some elements, this specification makes specific rules about what it means if the element is missing. Constraints on other structures cannot change the missing meaning of an element. Here is a list of all elements with a default value or a missing meaning:

This specification does not define any default values for resources or data types because:

-   The value must be known by all implementations
-   When an element has a default value, it can never be unknown - e.g. it is implicitly mandatory
-   The default value can never be changed
-   The presence of a default value interacts with minimum cardinality and the [:missing search token](search.html#modifiers) in ways that create confusion for implementations

Note that default values can be defined in [Logical Models](structuredefinition.html#logical).

\[%file newfooter%\]
