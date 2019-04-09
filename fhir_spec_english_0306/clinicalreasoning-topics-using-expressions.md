\[%settitle Clinical Reasoning%\]
\[%file newnavbar%\]
|                                              |                                             |                                                                                       |
|----------------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------|
| Work Group [\[%wgt cds%\]](%5B%wg%20cds%%5D) | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process): [Trial Use](versions.html#std-process) |

<span id="using-expressions"></span>
### Using Expressions

This topic discusses the use of expression logic within FHIR resources using expression languages such as [FHIRPath](fhirpath.html) and [Clinical Quality Language (CQL)](http://cql.hl7.org/). The clinical reasoning module resources use the [Expression](metadatatypes.html#expression) data type to represent logic that enables dynamic functionality to be utilized directly within the Clinical Reasoning resources, as well as within FHIR resources more generally using extensions.

<span id="expression elements"></span>
#### Expression Elements

In general, the use of expressions involves the following elements:

-   Description - A natural language description of the logic.
-   Language - The expression language used to represent the logic.
-   Expression - The expression itself in the identified language.

This general pattern is used to represent expression logic throughout the resources in the Clinical Reasoning module and allows expression logic to be represented at different levels:

-   Unstructured - The logic in this case can be communicated using natural language without the expectation that it is computable. This information is useful for communicating the intended dynamic semantics to environments that do not support computable evaluation.
-   Structured - The logic is specified as a computable expression in a formal language. This information is useful for communicating the logic to environments that are expected to support the computation.
-   Mixed - The logic in this case is communicated using both a natural language description, as well as a computable expression in a formal language. This information is useful for communicating to environments that may support the computation as well as to environments that do not, or to environments that support the computation but desire human-readable information to more easily understand the logic.

For example, the `dynamicValue` element of the ActivityDefinition and PlanDefinition resources contains an `expression` element directly. However, for resources that do not define these elements, the [cqf-expression](extension-cqf-expression.html) extension can be used to enable expression information to be associated with any FHIR resource.

<span id="expression-description"></span>
##### Description

The *description* element can be used either alone, to communicate unstructured logic, or together with the other elements to provide a natural language narrative for the formal representation. The element is typically optional to enable usage in both contexts. Note that if both an expression and a description are provided, the expression is considered to override the description element, although the description should reflect the semantics of the expression as accurately as possible.

    <dynamicValue>
      <path value="timing.event"/>
      <expression>
        <description value="Now"/>
      </expression>
    </dynamicValue>

<span id="expression-language"></span>
##### Expression Language

The *language* element identifies the expression language used to represent the logic. The [ExpressionLanguage](codesystem-expression-language.html) code system defines support for FHIRPath, Clinical Quality Language, and FHIR Query (FHIR's RESTful query syntax), but support for other languages can also be provided.

The language element is specified using the Media Type of the language. For inline expressions using FHIRPath and Clinical Quality Language, the media type SHALL be specified as follows:

-   FHIRPath - `text/fhirpath`
-   Clinical Quality Language - `text/cql`

For example, the following fragment illustrates the use of CQL to define a dynamicValue as part of an activity definition:

    <dynamicValue>
      <path value="timing.event"/>
      <expression>
        <language value="text/cql"/>
        <expression value="Now()"/>
      </expression>
    </dynamicValue>

Note that when extensions are used, the same Expression structure is used for the extension. For example:

<span id="dynamic-value-for-a-resource-element"></span>
    <event>
      <extension url="http://hl7.org/fhir/StructureDefinition/cqf-expression">
        <valueExpression>
          <language value="text/cql"/>
          <expression value="Now()"/>
        >/valueExpression>
      </extension>
    </event>

<span id="expression"></span>
##### Expression

The *expression* element specifes the formal representation of the expression logic in the identified expression language. The expression may be inline, as in the above examples, or it may be a reference to a named expression defined in a logic library. For example, the following fragment illustrates the use of a named expression to define a dynamicValue as part of an activity definition:

    <dynamicValue>
      <path value="reasonCode"/>
      <expression>
        <language value="text/cql"/>
        <expression value="RiskAssessmentScore"/>
      </expression>
    </dynamicValue>

The example specifies that the `reasonCode` element should be set to the result of evaluating the `RiskAssessmentScore` expression. This expression is expected to be present in a Library referenced by the containing resource:

    <library value="Library/mmi-suiciderisk-orderset-logic"/>

If the containing resource has a `library` element (such as ActivityDefinition and PlanDefinition), and only specifies a single library, the expression is evaluated as though it is in scope in that library. However, if the resource references multiple libraries, the referenced expression must be qualified with the name of the library in order to ensure unambiguous resolution. For example, the following fragment illustrates multiple libraries being referenced by the containing resource:

    <library value="Library/mmi-suiciderisk-orderset-logic"/>
    <library value="Library/another-orderset-logic"/>

The following fragment illustrates how an expression reference (reasonCode) would be qualified in the case of multiple library references:

    <dynamicValue>
      <path value="reasonCode"/>
      <expression>
        <language value="text/cql"/>
        <expression value="&quot;mmi-suiciderisk-orderset-logic&quot;.RiskAssessmentScore"/>
      </expression>
    </dynamicValue>

Note the use of the `&quot;` escape sequence on the library scope. This escape sequence is needed for XML attributes delimited with double quotes to avoid premature closure of the attribute, which would result in malformed XML. The following is an example of how to escape double quotes in JSON:

    "dynamicValue": [
      "path": "reasonCode",
      "expression": {
        "language": "text/cql",
        "expression": "\"mmi-suiciderisk-orderset-logic\".RiskAssessmentScore"
      }
    ]

For resources that do not have a `library` element, the [library](extension-cqf-library.html) [extension](extensibility.html#Extension) can be used to reference a library from any resource. The library extension enables a resource to add a reference to a library when it could not otherwise.

For simplicity, resources that use logic libraries SHOULD reference at most one library to avoid the need to qualify expression references. Take, for example, the case of updating a library reference in a resource. If the resource has multiple library references, then every expression qualifier that referred to the previous library must be updated. However, if the libraries were combined into a single reference, then only the reference would need to be updated.

<span id="evaluation-context"></span>
#### Evaluation Context

In general, when an expression is evaluated, it is evaluated in the context of the containing resource. This means that the resource is available within the expression so that the current values of the resource can be accessed.

Note that this is the general case for establishing the evaluation context for expressions. Many of the clinical reasoning resources, such as the Measure, will define specific behavior for the evaluation context that overrides this general behavior.

For FHIRPath expressions, the expression is evaluated with the containing resource using the `%context` environment variable. For example, when evaluated against a Patient resource, the following expression will return all `given` elements of all `name` elements for the patient:

    %context.name.given

And because FHIRPath expressions can be used within CQL, the same approach works for accessing the context in a CQL expression.

<span id="parameters"></span>
##### Parameters

In addition to the evaluation context, the expression may access parameters defined by referenced libraries. As with expression identifier resolution, the name of a parameter can be used directly so long as there is only one library referenced by the resource. Otherwise, the name of the library must be used to qualify the parameter name to avoid ambiguity.

If the expression uses parameters, a Library SHALL be used to define the required parameters.

Note that the way that parameters are bound to the expression from the evaluation context varies based on where the evaluation is taking place, but in general, the parameters are bound by name to the parameters defined in the evaluation operation. For example, in the `$apply` operation, parameters defined by libraries can be provided as named parameters in the operation invocation. For more details on how parameter binding occurs within each context, refer to the specific documentation for the `$apply`, `$evaluate`, and `$evaluate-measure` operations.

<span id="data-requirements"></span>
##### Data Requirements

The data requirements for a given expression describe the minimum data required in order to achieve a successful evaluation of the expression. More data may in general be provided, but not less. For example, an expression may reference laboratory test results for hemoglobin A1c tests over the past two years. If a system provides data for the last three years, the expression can still be successfully evaluated, but if a system provides data for only the last year, the expression may produce incorrect results based on the absence of the expected data.

In the scenario that an evaluation service is not colocated with the clinical information, the service has no general way of knowing whether or not a request has fulfilled the stated data requirements for an expression. As such, this is a critical aspect of implementation. The service assumes the stated data requirements will be provided as part of a request, and requesters shall provide at least the data specified by the data requirements when requesting evaluation for an expression.

Within CQL, data requirements can be inferred based on the *retrieve* expressions used. This process is described in detail in the Clinical Quality Language Specification, but in general, the set of data requirements is represented by elements of the [DataRequirement](metadatatypes.html#DataRequirement) type. This type is similar to a parameter definition, with the following differences:

-   No name element - Because there is no need for a name to inference on the data, there is no need to specify a name for the data required.
-   Code and date filters - Filtering by terminology and date range are widely used mechanisms for searching within clinical data, but profiling to achieve this is less dynamic and potentially a significant amount of overhead. The DataRequirement type provides a lightweight mechanism to represent these filters via the `codeFilter` and `dateFilter` elements.
-   Referenced elements - It is often important to communicate not only the type of data required, but which specific elements within that type will be referenced by a particular knowledge artifact or service module. This is accomplished in the DataRequirement type using the `mustSupport` element.

For CQL expressions that contain retrieves, a Library SHOULD be used to describe the data requirements. However, the [$data-requirements](operation-library-data-requirements.html) operation can also be used to infer the data requirements based on usage within the expression.

<span id="fhirpath"></span>
#### FHIRPath

[FHIRPath](fhirpath.html) is a lightweight path-based navigation language intended to provide simple but flexible access to graph-structured data. It is defined as a general purpose specification available [here](http://hl7.org/fhirpath).

FHIRPath is used throughout the FHIR specification whenever path selection is needed, such as in the definition of search parameters, or when describing invariants as part of the definition of resources and profiles. FHIRPath expressions generally provide a simple and effective means of navigating and accessing the elements of FHIR resources to retrieve data.

<span id="clinical-quality-language"></span>
#### Clinical Quality Language

[Clinical Quality Language (CQL)](http://cql.hl7.org/) defines a high-level clinically-oriented syntax to enable formal representation of clinical logic. It is defined as a general purpose specification available here:

[HL7 Standard: Clinical Quality Language Specification, Release 1.3](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=400).

CQL is used to describe the logic used by knowledge artifacts such as clinical decision support rules, quality measure logic, and conditions and actions within order sets and protocols. CQL expressions generally provide a means of computing new information from existing data.

\[%file newfooter%\]
