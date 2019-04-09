\[%settitle FHIRPath%\]
\[%file newnavbar%\]
FHIRPath
--------

|                                                |                                                     |                                                                                      |
|------------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): Normative | [Standards Status](versions.html#std-process):[Normative](versions.html#std-process) |

The FHIR Specification uses [FHIRPath (release 2)](http://hl7.org/fhirpath/r2) for path-based navigation and extraction. FHIRPath is a separate specification published at [http://hl7.org/fhirpath](http://hl7.org/fhirpath/r2) in order to support wider re-use across multiple specifications.

FHIRPath is used in several places in the FHIR and related specifications:

-   [invariants in ElementDefinition](elementdefinition-definitions.html#ElementDefinition.constraint.expression) - used to apply co-occurrence and other rules to the contents (e.g. value.empty() or code!=component.code)
-   [slicing discriminator](elementdefinition-definitions.html#ElementDefinition.slicing.discriminator.path) - used to indicate what element(s) define uniqueness (e.g. Observation.category)
-   [search parameter paths](searchparameter-definitions.html#SearchParameter.expression) - used to define what contents the parameter refers to (e.g. Observation.dataAbsentReason)
-   [error message locations in OperationOutcome](operationoutcome-definitions.html#OperationOutcome.issue.expression)
-   [FHIRPath-based Patch](fhirpatch.html)
-   [Invariants in the TestScript resource](testscript-definitions.html#TestScript.setup.action.assert.expression)

In addition, FHIRPath is used in [pre-fetch templates in Smart on FHIR's CDS-Hooks](http://cds-hooks.hl7.org/ballots/2018May/specification/1.0/#prefetch-template).

<span id="rules"></span>
### Using FHIRPath with Resources

In FHIRPath, like XPath, operations are expressed in terms of the logical content of hierarchical data models, and support traversal, selection and filtering of data.

FHIRPath uses a tree model that abstracts away the actual underlying data model of the data being queried. For FHIR, this means that the contents of the resources and data types as described in the Logical views (or the UML diagrams) are used as the model, rather than the JSON and XML formats, so specific xml or json features are not visible to the FHIRPath language (such as comments and the split representation of primitives).

More specifically:

-   A FHIRPath may optionally start with a full resource name
-   Elements of datatypes and resources are used as the name of the nodes which can be navigated over, except for choice elements (ending with '\[x\]'), see below.
-   The `contained` element node does not have the name of the Resource as its first and only child (instead it directly contains the contained resource’s children)
-   There is no difference between an attribute and an element
-   Repeating elements turn into multiple nodes with the same name

<span id="polymorphism"></span>
#### Polymorphism in FHIR

For [choice elements](formats.html#choice), where elements can be one of multiple types, e.g. `Patient.deceased[x]`. In actual instances these will be present as either `Patient.deceasedBoolean` or `Patient.deceasedDateTime`. In FHIRPath, choice elements are labeled according to the name without the '\[x\]' suffix, and children can be explicitly treated as a specific type using the `as` operation:

``` fhirpath
(Observation.value as Quantity).unit
```

FHIRPath statements can start with a full resource name:

    Patient.name.given

The name can also include super types such as DomainResource:

    DomainResource.contained(id = 23).exists()

These statements apply to any resource that specializes [DomainResource](domainresource.html).

<span id="types"></span>
#### Using FHIR types in expressions

The namespace for the types defined in FHIR (primitive data types, data types, resources) is FHIR. So, for example:

    Patient.is(FHIR.Patient)

The first element - the type name - is not namespaced, but the parameter to the is() operation is.

Understanding the primitive types is critical: FHIR.string is a different type to System.String. The FHIR.string type specializes FHIR.Element, and has the properties id, extension, and also the implicit value property that is actually of type of System.String.

The evaluation engine will automatically convert the value of FHIR types representing primitives to FHIRPath types when they are used in expressions according to the following mapping:

| FHIR primitive type                                                                                        | FHIRPath type   |
|------------------------------------------------------------------------------------------------------------|-----------------|
| FHIR.boolean                                                                                               | System.Boolean  |
| FHIR.string, FHIR.uri, FHIR.code, FHIR.oid, FHIR.id, FHIR.uuid, FHIR.sid, FHIR.markdown, FHIR.base64Binary | System.String   |
| FHIR.integer, FHIR.unsignedInt, FHIR.positiveInt                                                           | System.Integer  |
| FHIR.decimal                                                                                               | System.Decimal  |
| FHIR.date, FHIR.dateTime, FHIR.instant                                                                     | System.DateTime |
| FHIR.time                                                                                                  | System.Time     |

Since FHIR primitives may contain extensions, so that the following expressions are *not* mutually exclusive:

``` fhirpath
Patient.name.given = 'Ewout'         // value of Patient.name.given as a string
Patient.name.given.extension.first().value = true   // extension of the primitive value
```

The automatic conversion means that in most respects, a FHIR primitive can generally be treated as if it was the equivalent FHIRPath system type. The primary exception is the is() operation, where the difference is explicit:

``` fhirpath
Patient.name.given.is(FHIR.string);
Patient.name.given.is(System.string).not();
Patient.name.given.getValue().is(System.string);
```

As shown, all FHIR primitives have the operation `getValue()` defined (see below) for the few edge cases where the automatic conversion isn't appropriate. Note that as() does not have such restrictions - both of the following are valid:

``` fhirpath
Patient.name.given.as(FHIR.string);
Patient.name.given.as(System.string);
```

<span id="variables"></span>
#### FHIR Specific Variables

FHIR defines a specific variable that is always in scope when FHIRPath is used in any of the contexts above:

    %resource // the resource that contains the original node that is in %context

The resource is very often the context, such that %resource = %context.

<span id="functions"></span>
#### Additional functions

FHIR adds (compatible) functionality to the common set of functions:

**extension(url : string) : collection**

Will filter the input collection for items named "extension" with the given url. This is a syntactical shortcut for `.extension.where(url = string)`, but is simpler to write. Will return an empty collection if the input collection is empty or the url is empty.

**hasValue() : Boolean**

Returns true if the input collection contains a single value which is a FHIR primitive, and it has a primitive value (e.g. as opposed to not having a value and just having extensions).

> **Note to implementers**: The FHIR conceptual model talks about "primitives" as subclasses of the type Element that also have id and extensions. What this actually means is that a FHIR primitive is not a primitive in an implementation language. The introduction (section 2 above) describes the navigation tree as if the FHIR model applies - primitives are both primitives and elements with children.
>
> In FHIRPath, this means that FHIR primitives have a `value` child, but, as described above, they are automatically cast to FHIRPath primitives when comparisons are made, and that the primitive value will be included in the set returned by `children()` or `descendants()`.

**getValue() : System.\[type\]**

Return the underlying system value for the FHIR primitive (see discussion above).

**trace(name : string; selector : expression) : collection**

When FHIRPath statements are used in an invariant, the log contents should be added to the error message constructed when the invariant is violated. For example:

``` fhirpath
"SHALL have a local reference if the resource is provided inline (url: height; ids: length,weight)"

  from

"reference.startsWith('#').not() or 
  (%context.reference.substring(1).trace('url') in %resource.contained.id.trace('ids'))"
```

The FHIRPath specification adds an additional parameter to the trace() function, a selection expression that can be used to shape what is logged for the collection that is traced. E.g.

``` fhirpath
  contained.where(criteria).trace('ids', type().name+"/"+id).process...
```

This will log the type/name for each contained resource that meets the criteria.

Note: the selector parameter is planned to be added to a future version of the base FHIRPath specification.

**resolve() : collection**

For each item in the collection, if it is a string that is a [uri](datatypes.html#uri) (or [canonical](datatypes.html#canonical) or [url](datatypes.html#url)), locate the target of the reference, and add it to the resulting collection. If the item does not resolve to a resource, the item is ignored and nothing is added to the output collection.

The items in the collection may also represent a Reference, in which case the `Reference.reference` is resolved.

**ofType(type : identifier) : collection**

In FHIR, only concrete core types are allowed as an argument. All primitives are considered to be independent types (so `markdown` is **not** a subclass of `string`). Profiled types are not allowed, so to select `SimpleQuantity` one would pass `Quantity` as an argument.

**elementDefinition() : collection**

Returns the FHIR element definition information for each element in the input collection.

**slice(structure : string, name : string) : collection**

Returns the given slice as defined in the given structure definition. The structure argument is a uri that resolves to the structure definition, and the name must be the name of a slice within that structure definition. If the structure cannot be resolved, or the name of the slice within the resolved structure is not present, an error is thrown.

For every element in the input collection, if the resolved slice is present on the element, it will be returned. If the slice does not match any element in the input collection, or if the input collection is empty, the result is an empty collection (`{ }`).

**checkModifiers(\[{modifier : string}\]) : collection**

For each element in the input collection, verifies that there are no modifying extensions defined other than the ones given by the `modifier` argument. If the check passes, the input collection is returned. Otherwise, an error is thrown.

**conformsTo(structure : string) : Boolean**

Returns `true` if the single input element conforms to the profile specified by the `structure` argument, and false otherwise. If the structure cannot be resolved to a valid profile, an error is thrown. If the input contains more than one element, an error is thrown. If the input is empty, the result is empty.

**memberOf(valueset : string) : Boolean**

When invoked on a code-valued element, returns true if the code is a member of the given valueset. When invoked on a concept-valued element, returns true if any code in the concept is a member of the given valueset. When invoked on a string, returns true if the string is equal to a code in the valueset, so long as the valueset only contains one codesystem. If the valueset in this case contains more than one codesystem, an error is thrown.

If the valueset cannot be resolved as a uri to a value set, an error is thrown.

Note that implementations are encouraged to make use of a terminology service to provide this functionality.

For example:

``` fhirpath
Observation.component.where(code.memberOf('http://hl7.org/fhir/ValueSet/observation-vitalsignresult'))
```

This expression returns components that have a code that is a member of the observation-vitalsignresult valueset.

**subsumes(code : Coding | CodeableConcept) : Boolean**

When invoked on a Coding-valued element and the given code is Coding-valued, returns true if the source code is equivalent to the given code, or if the source code subsumes the given code (i.e. the source code is an ancestor of the given code in a subsumption hierarchy), and false otherwise.

If the Codings are from different code systems, the relationships between the code systems must be well-defined or a run-time error is thrown.

When the source or given elements are CodeableConcepts, returns true if any Coding in the source or given elements is equivalent to or subsumes the given code.

Note that implementations are encouraged to make use of a terminology service to provide this functionality.

**subsumedBy(code: Coding | CodeableConcept) : Boolean**

When invoked on a Coding-valued element and the given code is Coding-valued, returns true if the source code is equivalent to the given code, or if the source code is subsumed by the given code (i.e. the given code is an ancestor of the source code in a subsumption hierarchy), and false otherwise.

If the Codings are from different code systems, the relationships between the code systems must be well-defined or a run-time error is thrown.

When the source or given elements are CodeableConcepts, returns true if any Coding in the source or given elements is equivalent to or subsumed by the given code.

Note that implementations are encouraged to make use of a terminology service to provide this functionality.

**htmlChecks : Boolean**

When invoked on an [xhtml](narrative.html#xhtml) element returns true if the [rules around HTML usage](narrative.html#rules) are met, and false if they are not. The return value is undefined (`null`) on any other kind of element.

<span id="changes"></span>
#### Changes to operators

**~ (Equivalence)**

Equivalence works in exactly the same manner, but with the addition that for complex types, equality requires all child properties to be equal, **except for "id" elements**.

In addition, for Coding values, equivalence is defined based on the code and system elements only. The version, display, and userSelected elements are ignored for the purposes of determining Coding equivalence.

For CodeableConcept values, equivalence is defined as a non-empty intersection of Coding elements, using equivalence. In other words, two CodeableConcepts are considered equivalent if any Coding in one is equivalent to any Coding in the other.

<span id="vars"></span>
#### Environment variables

The FHIR specification adds support for additional environment variables:

The following environmental values are set for all contexts:

``` fhirpath
%sct        // (string) url for snomed ct
%loinc      // (string) url for loinc
%"vs-[name]" // (string) full url for the provided HL7 value set with id [name]
%"ext-[name]" // (string) full url for the provided HL7 extension with id [name]
%resource   // The original resource current context is part of. When evaluating a datatype, this would be the resource the element is part of. Do not go past a root resource into a bundle, if it is contained in a bundle.

// Note that the names of the `vs-` and `ext-` constants are quoted (just like paths) to allow "-" in the name.
```

For example:

``` fhirpath
Observation.component.where(code.memberOf(%"vs-observation-vitalsignresult"))
```

This expression returns components that have a code that is a member of the observation-vitalsignresult valueset.

\[%impl-note%\] Implementation Guides are allowed to define their own externals, and implementers should provide some appropriate configuration framework to allow these constants to be provided to the evaluation engine at run-time. E.g.:
``` fhirpath
%"us-zip" = '[0-9]{5}(-[0-9]{4}){0,1}'
```

\[%end-note-np%\]
Authors of Implementation Guides should be aware that adding specific environment variables restricts the use of the FHIRPath to their particular context.

Note that these tokens are not restricted to simple types, and they may have fixed values that are not known before evaluation at run-time, though there is no way to define these kinds of values in implementation guides.

<span id="simple"></span>
### Restricted Subset ("Simple")

This page documents a restricted subset of the [FHIRPath language](http://hl7.org/fhirpath) that is used in a few contexts in this specification. When the restricted FHIRPath language subset is in use, the following rules apply:

-   All statements SHALL start with the name of the context element (e.g. on a Patient resource, Patient.contact.name.), or SHALL be simply "$this" to refer to the element that has focus
-   Operators SHALL NOT be used
-   Only the following functions may be used:
    -   .resolve()
    -   .extension("url")
    -   .ofType(type)

    All other functions SHALL NOT be used

These rules exist to keep processing the path simple to support use of the path by processors that are not backed by a full FHIRPath implementation.

The following locations use this restricted FHIRPath language:

-   [ElementDefinition.slicing.discriminator.path](elementdefinition-definitions.html#ElementDefinition.slicing.discriminator.path)
-   [DataRequirement.dateFilter.path](metadatatypes-definitions.html#DataRequirement.dateFilter.path)
-   [OperationOutcome.issue.expression](operationoutcome-definitions.html#OperationOutcome.issue.expression)

<span id="txapi"></span>
### Terminology Service API

Unlike this rest of this page, the FHIR Terminology service API is only draft (Maturity = 0). It will be advanced to a more mature status following the usual [Maturity Model](versions.html#maturity) for FHIR.

In order to support terminological reasoning in FHIRPath statements, FHIR defines a general %terminologies object that FHIRPath implementations should make available. Calls to this object are passed through a [standard FHIR terminology service](terminology-service.html).

Summary:

``` fhirpath
%terminologes.expand(valueSet, params) : ValueSet
%terminologies.lookup(coded, params) : Parameters
%terminologies.validateVS(valueSet, coded, params) : Parameters
%terminologies.validateCS(codeSystem, coded, params) : Parameters
%terminologies.subsumes(system, coded1, coded2, params) : code
%terminologies.translate(conceptMap, code, params) : Parameters
```

**expand**

``` fhirpath
%terminologes.expand(valueSet, params) : ValueSet
```

This calls the [Terminology Service $expand](terminology-service.html#expand) operation ([formal definition](valueset-operation-expand.html)).

Parameters:

-   **valueSet**: either an actual [ValueSet](valueset.html), or a [canonical URL](references.html#canonical) reference to a value set.
-   **params**: a URL encoded string with other parameters for the expand operation (e.g. 'displayLanguage=en&activeOnly=true')

**Return Value:** a [ValueSet](valueset.html) with an expansion, or null if an error occurs.

**lookup**

``` fhirpath
%terminologies.lookup(coded, params) : Parameters
```

This calls the [Terminology Service $lookup](terminology-service.html#lookup) operation ([formal definition](codesystem-operation-lookup.html)).

Parameters:

-   **coded**: either a [Coding](datatypes.html#coding), a [CodeableConcept](datatypes.html#CodeableConcept), or a resource element that is a [code](datatypes.html#code)
-   **params**: a URL encoded string with other parameters for the lookup operation (e.g. 'date=2011-03-04&displayLanguage=en')

**Return Value:**

**validateVS**

``` fhirpath
%terminologies.validateVS(valueSet, coded, params) : Parameters
```

This calls the [Terminology Service $validate-code](terminology-service.html#expand) operation on a value set ([formal definition](valueset-operation-validate-code.html)).

Parameters:

-   **valueSet**: either an actual [ValueSet](valueset.html), or a [canonical URL](references.html#canonical) reference to a value set.
-   **coded**: either a [Coding](datatypes.html#coding), a [CodeableConcept](datatypes.html#CodeableConcept), or a resource element that is a [code](datatypes.html#code)
-   **params**: a URL encoded string with other parameters for the validate-code operation (e.g. 'date=2011-03-04&displayLanguage=en')

**Return Value:** A [Parameters](parameters.html) resource with the results of the validation operation.

**validateCS**

``` fhirpath
%terminologies.validateCS(codeSystem, coded, params) : Parameters
```

This calls the [Terminology Service $validate-code](terminology-service.html#expand) operation on a code system ([formal definition](codesystem-operation-validate-code.html)).

Parameters:

-   **codeSystem**: either an actual [CodeSystem](codesystem.html), or a [canonical URL](references.html#canonical) reference to a code system.
-   **coded**: either a [Coding](datatypes.html#coding), a [CodeableConcept](datatypes.html#CodeableConcept), or a resource element that is a [code](datatypes.html#code)
-   **params**: a URL encoded string with other parameters for the validate-code operation (e.g. 'date=2011-03-04&displayLanguage=en')

**Return Value:** A [Parameters](parameters.html) resource with the results of the validation operation.

**subsumes**

``` fhirpath
%terminologies.subsumes(system, coded1, coded2, params) : code
```

This calls the [Terminology Service $subsumes](terminology-service.html#subsumes) operation ([formal definition](codesystem-operation-subsumes.html)).

Parameters:

-   **system**: the URI of a code system within which the subsumption testing occurs
-   **coded1**: A [Coding](datatypes.html#coding) or a resource element that is a [code](datatypes.html#code)
-   **coded2**: A [Coding](datatypes.html#coding) or a resource element that is a [code](datatypes.html#code)
-   **params**: a URL encoded string with other parameters for the validate-code operation (e.g. 'version=2014-05-06')

**Return Value:** a code as specified for the subsumes operation.

**translate**

``` fhirpath
%terminologies.translate(conceptMap, coded, params) : Parameters
```

This calls the [Terminology Service $translate](terminology-service.html#translate) operation ([formal definition](conceptmap-operation-translate.html)).

Parameters:

-   **conceptMap**: either an actual [ConceptMap](conceptmap.html), or a [canonical URL](references.html#canonical) reference to a value set.
-   **coded**: The source to translate: a [Coding](datatypes.html#coding) or a resource element that is a [code](datatypes.html#code)
-   **params**: a URL encoded string with other parameters for the validate-code operation (e.g. 'source=http://acme.org/valueset/23&target=http://acme.org/valueset/23')

**Return Value:** A [Parameters](parameters.html) resource with the results of the translation operation.

\[%file newfooter%\]
