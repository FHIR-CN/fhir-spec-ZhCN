\[%settitle \_filter Parameter%\]
\[%file newnavbar%\]
<span id="base"></span>
### \_filter Parameter

|                                                |                                             |                                                                                      |
|------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

<span id="intro"></span>
#### Introduction

`_filter` is a parameter that can be used with the [Search Operation](search.html). It uses the same set of standard parameters defined for the resources, and provides a syntax for expressing a set of query expressions on the underlying resources.

Examples of filters:

-   `Patient: name co "pet"` - all patients with the characters "pet" in a given or family name
-   `Patient: given eq "peter" and birthdate ge 2014-10-10` - all patients with a given name of peter, born on or after 10-Oct 2014
-   `Observation: code eq http://loinc.org|1234-5` - all observations with the LOINC code "1234-5"
-   `Observation: subject.name co "pet"` - all observations on a patient with the characters "pet" in a given or family name
-   `Observation: related[type eq "has-component"].target pr true` - all observations that have component observations (note: this uses one of the search parameters defined for this mechanism, see below)
-   `Observation: related[type eq has-component].target re Observation/4` - all observations that have Observation/v as a component

The \_filter syntax has the following features:

-   A filter can be a logical one (x or x, or x and x, or not x).
-   A filter can contain other filters in a set of parentheses: "()".
-   A filter can be a test - path operation value, where operation is taken from the table below, and value is either a "true", "false", a JSON string, or a token (any sequence of non-whitespace characters, excluding ")" and "\]". Values are never case sensitive.
-   A 'path' is a name, with chained searches done by name.name etc.as per existing source. There can also be a filter: name\[filter\].name.
-   The name is one of the defined search parameters that are used with the other search mechanism, with some special exemptions defined below.

Note: The only difference between a "string" value and a "token" value is that a string can contain spaces and ')' and '\]'. There is otherwise no significant difference between them.

Formal grammar for the syntax:

    filter        = paramExp / logExp / ("not") "(" filter ")"
    logExp        = filter ("and" / "or" filter)+
    paramExp      = paramPath SP compareOp SP compValue
    compareOp     = (see table below)
    compValue     = string / numberOrDate / token
    string        = json string
    token         = any sequence of non-whitespace characters (by Unicode rules) except "]" and ")"
    paramPath     = paramName (("[" filter "]") "." paramPath)
    paramName     = nameCharStart (nameChar)*
    nameCharStart = "_" / ALPHA
    nameChar      = "_" / "-" / DIGIT / ALPHA
    numberOrDate  = DIGIT (DateChar)*
    dateChar      = DIGIT / "T" / "-" / "." / "+"

Notes about using the syntax:

-   Logical expressions are evaluated left to right, with no precedence between "and" and "or". If there is ambiguity, use parentheses to be explicit.
-   Rhe compareOp is always evaluated against the set of values produced by evaluating the param path.
-   Rhe parameter names are those defined by the specification for search parameters, except for those defined below.
-   Rhe date format is a standard XML (i.e. XSD) dateTime (including time zone).

<span id="ops"></span>
#### Operators

This table summarizes the comparison operations available:

<table>
<tbody>
<tr class="odd">
<td>Operation</td>
<td>Definition</td>
</tr>
<tr class="even">
<td>eq</td>
<td>an item in the set has an equal value</td>
</tr>
<tr class="odd">
<td>ne</td>
<td>An item in the set has an unequal value</td>
</tr>
<tr class="even">
<td>co</td>
<td>An item in the set contains this value</td>
</tr>
<tr class="odd">
<td>sw</td>
<td>An item in the set starts with this value</td>
</tr>
<tr class="even">
<td>ew</td>
<td>An item in the set ends with this value</td>
</tr>
<tr class="odd">
<td>gt / lt / ge / le</td>
<td>A value in the set is (greater than, less than, greater or equal, less or equal) the given value</td>
</tr>
<tr class="even">
<td>ap</td>
<td>A value in the set is approximately the same as this value.<br />
Note that the recommended value for the approximation is 10% of the stated value (or for a date, 10% of the gap between now and the date), but systems may choose other values where appropriate</td>
</tr>
<tr class="odd">
<td>sa</td>
<td>The value starts after the specified value</td>
</tr>
<tr class="even">
<td>eb</td>
<td>The value ends before the specified value</td>
</tr>
<tr class="odd">
<td>pr</td>
<td>The set is empty or not (value is false or true)</td>
</tr>
<tr class="even">
<td>po</td>
<td>True if a (implied) date period in the set overlaps with the implied period in the value</td>
</tr>
<tr class="odd">
<td>ss</td>
<td>True if the value subsumes a concept in the set</td>
</tr>
<tr class="even">
<td>sb</td>
<td>True if the value is subsumed by a concept in the set</td>
</tr>
<tr class="odd">
<td>in</td>
<td>True if one of the concepts is in the nominated value set by URI, either a relative, literal or logical vs</td>
</tr>
<tr class="even">
<td>ni</td>
<td>True if none of the concepts are in the nominated value set by URI, either a relative, literal or logical vs</td>
</tr>
<tr class="odd">
<td>re</td>
<td>True if one of the references in set points to the given URL</td>
</tr>
</tbody>
</table>

For detailed rules about the operators eq, ne, le, ge, lt, gt, sa, and eb see [Search Prefixes](search.html#prefix).

The interpretation of the operation depends on the type of the search parameter it is being evaluated against. This table contains those details:

Operation
String
Number
Date
Token
Reference
Quantity
eq
Character sequence is the same (case insensitive)
Number is the same incl same precision
Date is the same including same precision and time zone if provided
Token is the same, including namespace if specified (case insensitive)
n/a
Unit and value are the same
ne
(same)
Co
Character sequence matches somewhere (case insensitive)
An item in the set's implicit imprecision includes the stated value
An item in the set's implicit period includes the stated value
n/a
n/a
n/a?
sw
Character sequence matches from first digit (left most, when L-&gt;R) (case insensitive)
n/a
n/a
n/a
n/a
n/a
ew
Character sequence matches up to last digit (right most, when L-&gt;R) (case insensitive)
n/a
n/a
n/a
n/a
n/a
gt / lt / ge / le
Based on Integer comparison of Unicode code points of starting character (trimmed) (case insensitive)
Based on numerical comparison
Based on date period comparison per 2.2.2.3
n/a
n/a
Based on numerical comparison if units are the same (or are canonicalized)
pr
po
n/a
n/a
Based on date period comparison per 2.2.2.3
n/a
n/a
ss
n/a
n/a
n/a
Based on logical subsumption; potentially catering for mapping between tx
n/a
n/a
sb
n/a
n/a
n/a
Based on logical subsumption; potentially catering for mapping between tx
n/a
n/a
in
n/a
n/a
n/a
Based on logical subsumption; potentially catering for mapping between tx
n/a
n/a
re
n/a
n/a
n/a
n/a
Relative or absolute url
n/a
Note:

-   For token, the format is the same as the existing search parameter.
-   For convenience, the codes "loinc", "snomed", "rxnorm" and "ucum" are predefined and can be used in place of their associated full namespace.

<span id="params"></span>
#### Additional Parameters

Some additional parameters are defined for the filter parameter (*to do: move these into the standard parameters*):

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Resource Type</td>
<td>Parameter Name</td>
<td>Children</td>
</tr>
<tr class="even">
<td>Observation</td>
<td>related</td>
<td><p>target = related-target</p>
<p>Type = related-type</p></td>
</tr>
<tr class="odd">
<td>Group</td>
<td>characteristic</td>
<td><p>value = value</p>
<p>code = characteristic</p></td>
</tr>
<tr class="even">
<td>DocumentReference</td>
<td>relatesTo</td>
<td><p>code = relation</p>
<p>target = relatesTo</p></td>
</tr>
<tr class="odd">
<td>ServiceRequest</td>
<td>event</td>
<td><p>status = event-status<br />
date = event-date</p></td>
</tr>
<tr class="even">
<td>ServiceRequest</td>
<td>item</td>
<td><p>status = item-status</p>
<p>code = item-code</p>
<p>site = bodysite</p>
<p>event = item-event</p></td>
</tr>
<tr class="odd">
<td>ServiceRequest</td>
<td>item-event</td>
<td><p>status = item-past-status<br />
date = item-date<br />
actor = actor</p></td>
</tr>
</tbody>
</table>

Note:

-   Any time these names are used in a parameter, they must have a filter and a chained name under them.
-   The first column is the resource type against which this name can be used.
-   The second column is the parameter name that is used.
-   The third column defines the names that can be used in the chained parameter, and in the filter, and shows which existing search parameters they equate to.
-   For example, you could search on Observation for '\_filter=related\[type eq has-component\].target re url'. "type" refers to the search parameter "related-type", and "target" to the search parameter "related-target".

\[%file newfooter%\]
