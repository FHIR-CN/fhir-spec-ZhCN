\[%settitle Using GraphQL with FHIR%\]
\[%file newnavbar%\]
<span id="root"></span>
Using GraphQL with FHIR
-----------------------

|                                                |                                             |                                                                                      |
|------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 0 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. This page describes how to use GraphQL with FHIR. The GraphQL interface may be implemented by any server, and may be provided as a facade service in front of a conformant RESTful API. For GraphQL documentation, see <http://graphql.org>.

\[%impl-note%\] This page is a draft. For ongoing discussion, see [chat.fhir.org](https://chat.fhir.org/#narrow/stream/implementers/subject/GraphQL). \[%end-note%\] <span id="status"></span>
### Status of GraphQL

Implementers should note that GraphQL is not a formal standard, and no standards path has been dscribed for it. At present, [GraphQL](http://facebook.github.io/graphql/) is copyright by [Facebook](http://facebook.com), and licensed under a standard BSD-3 license. The GraphQL language is still under development.

<span id="invoking"></span>
### Invoking GraphQL

The standard end points for graphQL are as defined on the [$graphql operation](resource-operation-graphql.html):

    [base]/$graphql

A System level query. The query must start by selecting a resource type and some search criteria, as defined [below](#search).

    [base]/[Type]/[id]/$graphql

A Resource Instance level the query assumes a single resource is in scope, and just queries on the data available in the given resource.

GraphQL can be invoked by get with a query parameter, or a POST with the graphQL as the body, or a JSON body. (see [the GraphQL documentation](http://graphql.org/learn/serving-over-http/)).

The mime type of the response is application/json. Other formats are not described by the specification. The mimetype is \*not\* application/fhir+json - the response is not a FHIR resource, though it may look like one closely.

<span id="conformance"></span>
### Conformance

Servers that conform to FHIR/GraphQL specification:

-   SHALL use types, queries and mutations that conform to those provided in the GraphQL definitions in the specification
-   SHOULD support the @skip and @include directives. The data re-organization directives defined at the end of this page SHOULD be considered too
-   SHALL indicate in their conformance statement that they support graphQL queries (todo: how)
-   SHOULD provide the same functionality as that defined in their conformance statement for read/search/create/update/delete/patch operations
-   SHALL provide introspection services that correctly describe the services they offer
-   MAY provide additional queries and mutations beyond those defined listed here

Note that most servers only provide a subset of the full functionality described by the FHIR interface. Where servers support FHIR features, and implement GraphQL, they must make them available as defined by this page, but these rules do not require that servers implement all (or even any) of the functionality defined here. Also, these rules do not prevent servers providing additional end-points, queries or mutations that provide additional functionality.

<span id="errors"></span>
#### Error Handling

With regard to handling errors, FHIR GraphQL servers:

-   SHALL return a 200 ok with a "data" field, or a 3xx, 4xx or 5xx response with a graphQL error as described below
-   SHALL return an error when fields that are not valid or not supported are used, or when queries, mutations, arguments, types, and directives that are not recognized or supported are encountered
-   MAY include an operation outcome in a mutation response in the "extensions" property along with a "data" element, if the mutation succeeded. The OperationOutcome SHALL only include information and warning messages

A graphQL error response with an [OperationOutcome](operationoutcome.html) looks like this:

``` json
{
  "data": null,
  "errors": [
    {
      "extensions": {
        "resource" : {
          "resourceType": "OperationOutcome",
          "issue": [
            {
              "severity": "error",
              "code": "exception",
              "diagnostics": "500: Internal server error"
            }
          ]
        },
      },  
      "message": "500: Internal server error"
    }
  ]
}
```

The error response SHALL include at least one error. Each error SHALL include a `message`, and MAY include the graphQL `locations` and `path` properties. Each error SHOULD include an OperationOutcome in the `resource` property in the graphQL `extensions` element. Note that in this usage, there MAY be multiple OperationOutcome, one for each `errors` item, with one issue matching the message.

<span id="fields"></span>
### Field Selection

Any FHIR defined field can be used directly e.g. this graphql against the Patient resource (r3)

``` graphql
 { 
  name { text given family } 
 }
```

Example: <http://test.fhir.org/r3/Patient/example/$graphql?query=%7Bname%7Btext,given,family%7D%7D> (note: examples are only informative).

Polymorphic fields are represented by their JSON property name E.g. for Observation.value\[x\]:

``` graphql
 { 
  valueQuantity { value unit } 
 }
```

Example: <http://test.fhir.org/r3/Observation/example/$graphql?query=%7BvalueQuantity%7Bvalue,unit%7D%7D> (note: examples are only informative).

Note: This is because the leaf names have to correspond to scalar types, so there is no use selecting all the variants at once

Extensions on primitives: the JSON convention for primitives is observed. e.g. use \_\[name\] for accessing extensions on primitives. So

``` graphql
 {
  birthDate _birthDate { extension {valueDateTime} } 
 }
```

results in

``` json
 {
  "birthDate":"2016-05-18",
  "_birthDate":{
    "extension":[{
      "valueDateTime":"2016-05-18T10:28:45Z"
     }]
  }
 }
```

Example: <http://test.fhir.org/r3/Patient/example/$graphql?query=%7BbirthDate,_birthDate%7Bextension%7BvalueDateTime%7D%7D%7D> (note: examples are only informative).

<span id="arguments"></span> <span id="list"></span>
#### Field Arguments: List Navigation

Primitive fields SHALL NOT have any arguments at all. Complex fields may have one of more of the following parameters, all of which help select a subset of a repeating element:

-   `fhirpath` - a [FHIRPath](fhirpath.html) statement selecting which of the subnodes is to be included
-   `[field]` - the name of a sub-property with a specified value that must be matched for the field to be included
-   `_offset` - specify the offset to start at for a repeating element (see below)
-   `_count` - specify how many to elements to return from a repeating list

**FHIRPath:**

Use a [FHIRPath](fhirpath.html) statement selecting which of the set of notes in a list is to be included:

``` graphql
 { 
  name(fhirpath: "family.exists()") { text given family } 
 }
```

Example: <http://test.fhir.org/r3/Patient/example/$graphql?query=%7Bname(fhirpath:%22family.exists()%22)%7Btext,given,family%7D%7D> (as compared to <http://test.fhir.org/r3/Patient/example/$graphql?query=%7Bname%7Btext,given,family%7D%7D>) (note: examples are only informative).

**Field Filter:**

Not all systems support FHIRPath, so a simpler syntax is provided, where the client specifies a single sub-element by name, and a specified value that must be matched for the field to be included:

``` graphql
 { 
  name(use: official) { text given family } 
 }
```

Example: <http://test.fhir.org/r3/Patient/example/$graphql?query=%7Bname(use:official)%7Btext,given,family%7D%7D> (note: examples are only informative).

One way this can be used is to select particular extensions:

``` graphql
 { 
  myext: extension(url: "http://myextension.url/details") { value : valueString } 
 }
```

will result in

``` json
 {
  "myext" : {
    "value" : "some value"
   }
 }
```

**List offsets: \_offset and \_count**

For some large resources, it may be desired to select only a subset of a long list of elements, and to make repeated requests reading further into the list as long as required. This can be done with the `_count` and `offset` filters:

``` graphql
 { 
  entry(_count: 5, _offset: 5) { deleted item { reference } } 
 }
```

Example: [http://test.fhir.org/r4/List/long/$graphql?query={entry(\_count:5,\_offset:5){deleted item{reference}}}](http://test.fhir.org/r4/List/long/$graphql?query=%7Bentry(_count:5,_offset:5)%7Bdeleted%20item%7Breference%7D%7D%7D) (note: examples are only informative).

This will select the second set of 5 entries in the nominated List resource. Clients can use this approach to iterate through a list. If a filter is applied to this (as documented above), the offset and count apply to the filtered list. Clients would iterate the list until there are no more entries returned.

<span id="additional"></span>
#### Additional Selectors

<span id="references"></span>
##### Resource references

An object of type [Reference](references.html#Reference) can have an additional selection `resource`. This is an instruction to the server to resolve the reference, and then include the contents of the resource as specified by sub-selections in the property name "resource" (can be aliased). e.g. On Observation:

``` graphql
 { 
   subject { reference, resource {active} } 
 }
```

The resource selector has two arguments:

-   `optional` : true | false. (default is false). If the server cannot resolve the reference (e.g. resource does not exist, or user security rights or choices do not permit resource to be seen), and optional is not true, the server returns an error instead of the graph output
-   type : \[Resource\] - only selects resources of a particular type, or ignores them if are they not of the right type. Note that this is similar in effect to

    ``` graphql
     { 
      id
      subject { 
       reference
       resource {
          ...on Patient {
              birthDate
        }
        ...on Group {
            name
        }
       }
      }  
      code {coding {system code} }
     }
    ```

Example: <http://test.fhir.org/r4/Observation/example/$graphql?query=%7Bid,subject%7Breference,resource%7B...on%20Patient%7BbirthDate%7D...on%20Practioner%7BpractitionerRole%7Bspeciality%7D%7D%7D%7Dcode%7Bcoding%7Bsystem,code%7D%7D%7D> (note: examples are only informative).

but slightly denser:

``` graphql
 { 
  id
  subject { 
   reference
    resource(type : Patient) { birthDate }
    resource(type : Practioner) { practitionerRole {  speciality } }
  }  
  code {coding {system code} }
 }
 
```

Example: <http://test.fhir.org/r4/Observation/example/$graphql?query=%7Bid,subject%7Breference,resource(type:Patient)%7BbirthDate%7Dresource(type:Practioner)%7BpractitionerRole%7Bspeciality%7D%7D%7Dcode%7Bcoding%7Bsystem,code%7D%7D%7D> (note: examples are only informative).

Clients can use either approach - type selection as a parameter, of using a fragment type condition - the first is shorter while the second aligns with the GraphQL schema more explicitly.

<span id="searching"></span>
### Searching resources

When a GraphQL statement is run at the system level, rather than against a particular resource, the first thing the query must do is select the resource(s) of interest. The logic of this follows the FHIR search API, but reimplements in a GraphQL centric way.

There are 3 ways to query, for a single resource, for a simple list of resources, and a full API. For a single resource, the client names the type of the resource, and provides an id:

``` graphql
 { 
   Patient(id: example) { id, active } 
 }
```

This returns a single Patient with the name id. The output from this is a single resource:

``` json
 {
   "data" : {
     "Patient" { 
       "id" : "example",
       "active" : "true",
     }
   }
 }
```

Example: <http://test.fhir.org/r4/$graphql?query=%7BPatient(id:example)%7Bid,name%7Bgiven,family%7D%7D%7D> (note: examples are only informative).

Alternatively, the client can ask for a list of resources. Here, the client simply asks for a list of resources:

``` graphql
 { 
   ConditionList(clinical_status: relapse, patient: example) { id, clinicalStatus } 
 }
```

This is a request to list all the Condition resources that have a status if 'relapsed' for the patient with id = example. The arguments are most of the search parameters defined on or for the specified resource. Notes:

-   the parameter's names are changed by replacing '-' in the name with '\_' (for graphql syntax requirements) (FHIR defines parameters starting with \_ but will never define search parameters starting with '-')
-   The search parameters \_include, \_revinclude, \_contained, \_containedType are not supported
-   Unlike the RESTful search API, the composite syntax (multiple arguments separated by comma) is not used. Instead, supply an array of parameters (\_id: \[1,2,example\]). Values in an array or ORed
-   For And functionality, or to use chain searches or modifiers, use the \_filter parameter
-   There is one additional possible argument, "fhirpath" which the server evaluates on all the possible matches

The output of this is a list:

``` json
 {
   "data" : {
     "ConditionList" : [{ 
       "id" : "100",
       "clinicalStatus" : "relapse"
     },{ 
       "id" : "100",
       "clinicalStatus" : "relapse"
     }]
   }
 }
```

Example: <http://test.fhir.org/r4/$graphql?query=%7BPatientList(name:%22pet%22)%7Bname%7Bfamily,given%7D%7D%7D> (note: examples are only informative).

Servers may reject the request if there are too many matches to return in a single request. If they do so, they SHALL return an error indicating that the query could not be fulfilled. (rather than silently filtering the list).

The simple list approach does not allow for the management of long lists. To do this, clients are able to request a Connection based approach (based on <http://graphql.org/learn/pagination/>, but adapted to the existing FHIR Search API).

``` graphql
 { 
   ConditionConnection (clinical_status: active, patient: example) { 
     count offset pagesize
     edges {
       mode, score, resource { id, active }
     }
     first previous next last
   } 
 }
```

The arguments are the same as for the simple List case, with the addition of the special argument 'cursor' (see below). The server returns a connection object that contains information about the search, along with a list of 'edges', one for each match. Each edge has 3 properties: mode, score (match the same properties on Bundle.entry.search) and "resource" which is the actual matches.

``` json
 {
  "data" : {
    "ConditionConnection" : {
      "count": 50,
      "offset" : 0,
      "pageSize" : 25,
      "next" : "45f9ada8-db37-4498-ba7d-75a044668387:3"
      "edges" : [{
         "resource" : { 
           "id" : "100",
           "clinicalStatus" : "relapse",
         }
     },{ 
       "resource" : {
         "id" : "100",
         "clinicalStatus" : "relapse",
        }
     }]
   }
  }
 }
```

Example 1: <http://test.fhir.org/r4/$graphql?query=%7BPatientConnection(name:%22pet%22)%7Bcount,offset,pagesize,first,previous,next,last,edges%7Bmode,score,resource%7Bname%7Bfamily,given%7D%7D%7D%7D%7D> (note: examples are only informative).

Example 2 (cursor): <http://test.fhir.org/r4/$graphql?query=%7BPatientConnection()%7Bcount,offset,pagesize,first,previous,next,last,edges%7Bmode,score,resource%7BresourceType,id,name%7Bfamily,given%7D%7D%7D%7D%7D%7D%7D%7D> (note: examples are only informative).

Notes:

-   When using the fhirpath argument with Connection based searches, the server may choose to apply the fhirpath filter after the search paging is performed, so that individual pages may be shorter (or empty)

The client can follow up on the first/previous/next/last links using the argument 'cursor':

``` graphql
 { 
   ConditionConnection (_cursor : "45f9ada8-db37-4498-ba7d-75a044668387") { 
     count offset pagesize
     edges {
       id, clinicalStatus
     }
     first previous next last
   } 
 }
```

Example: <http://test.fhir.org/r4/$graphql?query=%7BPatientConnection(cursor:%225b0719b5-0f01-442e-9576-5b0514c19a:50%22)%7Bcount,offset,pagesize,first,previous,next,last,edges%7Bmode,score,resource%7BresourceType,id,name%7Bfamily,given%7D%7D%7D%7D%7D%7D%7D%7D> (note: examples are only informative). (note, though, that to make this one work, you have to replace the cursor token with one that you got from the link above).

Notes:

-   The client cannot change the parameters for the search (and should not specify them) when providing a cursor. The value of the token is opaque to the client, and only understood by the server

<span id="list"></span>
##### List vs Connection Searches

The specification defines the 2 forms of searches to meet differing requirements. For the List search:

-   the returned graph is simpler to iterate
-   in particular, the returned graph doesn't need to be considered with logic asking 'is there more pages to get' (the server returns everything, or an error)
-   servers can fulfill the simpler search with much less resources, because they do not need to remember state about the searches in order to correctly construct follow up pages

In general, clients should use the simple search, for efficiency purposes, where appropriate (e.g. where the user is not going see a 'next' button). This particularly applies when doing reverse reference resolution.

<span id="reverse"></span>
##### Reverse References

It's also possible to use search is a special mode, doing reverse lookups - e.g. list all the resources that refer to this resource. An example of this use is to look up a patient, and also retrieve all the Condition resources for the patient.

This is a special case of search, above, but with an additional mandatory parameter `_reference`. For example:

``` graphql
 {
   name { [some fields] }
   ConditionList(_reference: patient) {
    [some fields from Condition]
   }
 }
```

There must be at least the argument "\_reference" which identifies which of the search parameters for the target resource is used to match the resource that has focus. In addition, there may be other arguments as defined above in search (except that the "id" argument is prohibited here as nonsensical)

The response for the query above would be

``` json
{
  "name: [ [some fields] ],
  "ConditionList" : [
    { [some fields from matching Condition resource] }
  ]
}
```

Example: <http://test.fhir.org/r4/Patient/example/$graphql?query=%7Bname%7Bfamily,given%7DConditionList(_reference:patient)%7Bid,clinicalStatus%7D%7D> (note: examples are only informative).

The "connection" based search option is also supported, as described above, with the addition of \_reference. If the client wishes to pursue any of the cursor based links in the graphQL results it asks for back, then it initiates this a new separate query as defined above, rather than repeating the nested query. I.e. the 'cursor' argument is prohibited, except at the root of query.

Example: <http://test.fhir.org/r4/Patient/example/$graphql?query=%7Bname%7Bfamily,given%7DConditionConnection(_reference:patient)%7Bcount,offset,pagesize,first,previous,next,last,edges%7Bmode,score,resource%7B...onCondition%7BresourceType,id,clinicalStatus%7D%7D%7D%7D%7D> (note: examples are only informative).

<span id="operations"></span>
### Operations

It's also possible to apply graphql to the results of other operations. This is done by adding the parameter "\_graphql" when invoking the operation. e.g.

      GET [base]/ValueSet/doc-typecodes/$validate-code?system=http://loinc.org&code=1963-8&display=test&_graphql={result:parameter(name:"result"){value:valueBoolean}}

Example: <http://test.fhir.org/r4/ValueSet/doc-typecodes/$validate-code?system=http://loinc.org&code=1963-8&display=test&_graphql=%7Bresult:parameter(name:%22result%22)%7Bvalue:valueBoolean%7D%7D> (note: examples are only informative).

The graphQL is executed on the output of the operation. If the operation fails, and returns an operation outcome, then the graphQL is not executed.

<span id="flattening"></span>
### Data Flattening Directives

GraphQL is a very effective language for navigating a graph and selecting subset of information from it. However for some uses, the physical structure of the result set is important. This is most relevant when extracting data for statistical analysis in languages such as [R](https://www.r-project.org/). In order to facilitate these kind of uses, FHIR servers should consider supporting the following directives that allow implementers to flatten the return graph for easier analysis

#### Flattening a node

    @flatten

This directive indicates that the field to which it is attached is not actually produced in the output graph. Instead, its children will be processed and added to the output graph as specified in its place.

Notes:

-   If @flatten is used on an element with repeating cardinality, then by default, all the children will become lists
-   When using @flatten, all the collated children must have the same FHIR type. The server SHALL return an error if they don't

For an example, take this graphQL, and apply it to the patient example:

``` graphql
{
  identifier { system value }
  active 
  name { text given family } 
}
```

This will give the output:

``` json
{
  "identifier": [{
      "system": "urn:oid:1.2.36.146.595.217.0.1",
      "value": "12345"
  }],
  "active": true,
  "name": [{
    "given": ["Peter","James"],
    "family": "Chalmers"
  },{
    "given": ["Jim"]
  },{
    "given": ["Peter","James"],
    "family": "Windsor"
  }]
}
```

Adding the `@flatten` directive changes the output:

``` graphql
{
  identifier @flatten { system value }
  active 
  name @flatten { text given family } 
}
```

This has the output:

``` json
{
  "system":["urn:oid:1.2.36.146.595.217.0.1"],
  "value":["12345"],
  "active":true,
  "given":["Peter","James","Jim","Peter","James"],
  "family":["Chalmers","Windsor"]
}
```

#### Short cut for selecting only the first element

    @first

This is a shortcut for a FHIR path filter \[$index = 0\] and indicates to only take the first match of the elements. Note that the selection of the first element only applies to the immediate context of the field in the source graph, not to the output graph

Example:

``` graphql
{
  identifier @flatten { system value }
  active 
  name @flatten { text given @first family } 
}
```

Gives the output:

``` json
{
  "system":["urn:oid:1.2.36.146.595.217.0.1"],
  "value":["12345"],
  "active":true,
  "given":["Peter","Jim","Peter"],
  "family":["Chalmers","Windsor"]
}
```

#### Managing output cardinality

    @singleton

This directive indicates that an field collates to a single node, not a list. It is only used in association with fields on which a parent has `@flatten`, and overrides the impact of flattening the parent in making it a list. The server SHALL return an error if there is more than one value when flattening

Extending the previous example, adding `@singleton`:

``` graphql
{
  identifier @flatten { system @singleton value @singleton }
  active 
  name @flatten @first { text given family @singleton } 
}
```

Gives the output:

``` json
{
  "system":"urn:oid:1.2.36.146.595.217.0.1",
  "value":"12345",
  "active":true,
  "given":["Peter","James"],
  "family":"Chalmers"
}
```

#### Converting Lists to singletons

    @slice(fhirpath)

This indicates that in the output graph, each element in the source will have "." and the result of the FHIRPath as a string appended to the specified name. This slices a list up into multiple single values. For example

``` graphql
{ name @slice(path: "$index") @flatten {given @first @singleton family}}
```

For a resource that has 2 names will result in the output

``` json
{
"Given.0" : "first name, first given",
"Family.0" : ["first name family name"],
"Given.1" : "second name, first given",
"Family.1" : ["second name family name"]
}
```

Other uses might be e.g. Telecom @slice(use) to generate telecom.home for instance.

Notes:

-   In general, the intent of @slice is to break a list into multiple singletons. However servers SHALL NOT treat the outputs as singletons unless this is explicitly specified using `@singleton`
-   The suffixes added by this method are cumulative when nesting e.g. .suffix1.suffix2
-   The same general outcome can be achieved by a set of fields, each with an alias and a filter, if the possible values are known in advance

Examples:

``` graphql
{
  identifier @flatten { system value }
  active 
  name @flatten @slice(path: "use") { given family @singleton } 
}
```

produces

``` json
{
  "system":["urn:oid:1.2.36.146.595.217.0.1"],
  "value":["12345"],
  "active":true,
  "given.official":["Peter","James"],
  "family.official":"Chalmers",
  "given.usual":["Jim"],
  "given.maiden":["Peter","James"],
  "family.maiden":"Windsor"
}
```

and

``` graphql
{
  identifier @flatten { system value }
  active 
  name @flatten @slice(path: "$index") { given family @singleton } 
}
```

produces

``` json
{
  "system":["urn:oid:1.2.36.146.595.217.0.1"],
  "value":["12345"],
  "active":true,
  "given.0":["Peter","James"],
  "family.0":"Chalmers",
  "given.1":["Jim"],
  "given.2":["Peter","James"],
  "family.2":"Windsor"
}
```

<span id="mutations"></span>
### Mutations

Mutations are defined for the operations Create, Update, and Delete.

Create:

``` graphql
 PatientCreate(res : Patient) {
   returns a Patient 
 }
```

Like the API, the Patient resource might or might not have an ID; if it is present, the value is overwritten by the server.

Update:

``` graphql
 PatientUpdate(id : ID, res : Patient) {
   returns a Patient 
 }
```

Delete:

``` graphql
 PatientDelete(id : ID) {
   [no return]
 }
```

The parameters are input types that are resources that exactly match the output types. If these operations fail, an http error is returned.

Todo: mutations for patch, batch, transaction?

\[%file newfooter%\]
