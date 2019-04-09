\[%settitle Terminology Service%\]
\[%file newnavbar%\]
Terminology Service
-------------------

|                                                |                                             |                                                                                      |
|------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 4 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

This specification includes support for the provision of a terminology service - that is, a service that lets healthcare applications make use of codes and value sets without having to become experts in the fine details of code system, value set and concept map resources, and the underlying code systems and terminological principles. A server that supports all the functionality described here can be described as a "FHIR Terminology Service", and SHALL conform to the [Terminology Service Capability Statement](capabilitystatement-terminology-server.html). Note that servers can declare that they provide terminology services in their capability statement:

``` xml
<CapabilityStatement xmlns="http://hl7.org/fhir">
  <!-- snip -->
  <instantiates value="http://hl7.org/fhir/CapabilityStatement/terminology-server"/>
  <!-- snip -->
</CapabilityStatement>
```

<span id="security"></span>
### Security

Generally, SSL SHOULD be used for all production health care data exchange. Even though terminology servers do not generally handle patient information directly, observers may still be able to infer information about patients by observing the codes and concepts used in terminology service operations, so encryption is still recommended.

A terminology server may choose not to authenticate the clients/users in any fashion, but might need to do so in order to limit or account for usage, or enforce agreement to licensing terms. For a value set maintenance server that allows terminologies to be edited, some form of [authorization and/or authentication would be appropriate](security.html). This specification does not require any particular approach to security.

<span id="concepts"></span>
### Basic Concepts

A FHIR terminology service is simply a set of functions built on the definitions provided by a collection of [CodeSystem](codesystem.html), [ValueSet](valueset.html) and [ConceptMap](conceptmap.html) resources, with additional inherently known terminologies providing support.

The terminology service builds on the basic principles for using terminologies in FHIR. Implementers should be familiar with:

-   [Using codes in FHIR](terminologies.html)
-   The [CodeSystem](codesystem.html) resource
-   The [ValueSet](valueset.html) resource
-   The [ConceptMap](conceptmap.html) resource

In addition, implementers should be familiar with the [operations framework](operations.html). Further useful information about terminologies may be found in:

-   Underlying Principles: [HL7 v3 Core Principles](http://www.hl7.org/documentcenter/public/standards/V3/core_principles/infrastructure/coreprinciples/v3modelcoreprinciples.html)
-   SNOMED CT [technical documentation](http://ihtsdo.org/fileadmin/user_upload/doc/). Note: "namespace" is used differently here from the way it is used by IHTSDO (see [discussion here](terminologies.html))

<span id="externals"></span>
#### External Code Systems

In order to be used with a value set, code systems and their content must be defined somewhere. They can be defined explicitly using the [code system resource](codesystem.html), or they can be defined elsewhere, and then used in a value set by referencing the correct system url. The FHIR specification defines a [set of namespaces](terminologies-systems.html) for commonly encountered code systems, and defines how some work with FHIR (e.g. [SNOMED CT](snomedct.html), [LOINC](loinc.html), [RxNorm](rxnorm.html)). These code systems are often large and have many internally defined properties that are part of their formal definitions. The CodeSystem resource is not an appropriate way to distribute the contents of these code systems; the standard FHIR code system resource simply represents the properties of the code system. Instead, these terminologies provide their own distribution formats, and it is assumed that the content of these code systems are externally known to the terminology server.

Most useful terminology servers will make one or more of these external code systems available for use within the value sets that they manage. The list of additional terminologies that a terminology server supports beyond those defined in its value sets is published to clients by referencing code system resources in the server's [Capability Statement](capabilitystatement.html).

``` json
{
 "resourceType" : "CapabilityStatement",
 "extension" : [
   {
     "url" : "http://hl7.org/fhir/StructureDefinition/capabilitystatement-supported-system",
     "valueUri" : "http://loinc.org"
   }]
}
```

This extension is added to the root [Capability Statement](capabilitystatement.html).

<span id="impl1"></span>
#### Implementation Note

When a terminology server exposes an external code system, it makes a set of services available internally that serve the operational interfaces below. The internal server depends on the following logical information for a terminology:

-   its URL (namespace, and how versioning works)
-   what codes are valid
-   what properties can be used to select codes
-   what implicit value sets exist

The FHIR specification itself defines these things for common terminologies (including [SNOMED CT](snomedct.html), [LOINC](loinc.html), [RxNorm](rxnorm.html)), and provides the [CodeSystem](codesystem.html) infrastructure for supporting typical relatively simple small code systems.

\[%impl-note%\] *Implementers interested in working with existing published terminologies for which the CodeSystem infrastructure is not suitable should discuss their needs with HL7 to get the list above extended.* \[%end-note%\]
Note: A terminology service may choose to expose additional external code system specific related functionality such as summation, or structured search, but these services are outside the scope of the FHIR terminology service.

<span id="all"></span>
#### Operations across all value sets

For some of the operations below, it can be useful to perform them across all value sets known to the system. For example, $expand using a text filter, and searching all value sets at once. A special value set is defined that means "all value sets known to the server":

    http://hl7.org/fhir/ValueSet/@all

Technically, this value set automatically imports all the existing value sets on the server. Note that this URL has no fixed meaning - its interpretation is server specific (e.g. whether it includes all versions of all value sets). This URL can only be used as a parameter to the operations described on this page.

<span id="maint"></span>
#### Terminology Maintenance

The terminology service uses the code systems and value set resources defined on the system - both the implicit ones associated with the external code systems and those explicitly available at the /CodeSystem and /ValueSet endpoints - to serve the operational interface defined below. As code systems and value sets are created, updated or deleted, the outcomes of the operational services change. A terminology server should validate incoming resources and ensure integrity of the terminology services. Typically, servers provide a test and production environment, but there is no explicit notion of this in the interface itself.

<span id="expand"></span>
### Value Set Expansion

A value set describes a set of rules for what codes or concepts are considered to be in the value set. These rules might be simple (e.g. a direct list of codes from a specified version of a code system), or they might be quite complex (e.g. all codes with a particular property from an unspecified version of a code system).

A FHIR-enabled application can simply ask a terminology server to figure out all the details and return a list of the current codes in the value set. This is known as ["expanding" the valueset](valueset-operation-expand.html). As a summary, the client passes the server the following information:

-   the value set (either by its URL on the RESTful interface, by its logical identifier [(ValueSet.url)](valueset-definitions.html#ValueSet.url), or directly as a parameter to the call)
-   (Optionally) a text filter to use to restrict the codes that are returned (e.g. user input text). It is left to server discretion to choose how to apply the text filter
-   (Optionally) a date at which the expansion should be evaluated (usually, this is the current date/time, but there are circumstances where that is not appropriate)
-   (Optionally) which page to retrieve - asking the server to break the expansion into a set of chunks
-   (Optionally) other parameters that supply additional information about how to perform the expansion

The server returns a value set that contains the current list of codes that meet the filter criteria (or an [OperationOutcome](operationoutcome.html) with an error if the expansion fails). Note that some value sets expand to many thousands of codes, or even an infinite number, and for these, the server SHOULD return an [error code *too-costly*](valueset-issue-type.html#too-costly). In these cases, the client can try again with a more specific text filter to reduce the number of codes returned - this may result in a valid expansion.

For further information, consult the [definition of the operation](valueset-operation-expand.html).

The $expand operation has support for paging - for a client to retrieve a big expansion in a set of partial views, in order to present the most optimal user experience. The client specifies both an offset and a count - how many codes per page, and where in the sequence to start. The return expansion specifies the number of concepts in the expansion, and the offset at which this partial view starts. Note that all expansions SHOULD include the total code count, but the offset element SHALL only exist when paging is being used. Expansions that are hierarchical trees of concepts are not subject to paging and the server simply returns the entire expansion.

Some example uses for the expansion operation:

-   get a list of codes to display in a User interface (e.g. a drop-down interface)
-   a variation on this is to offer the user a text box to type in. As the user types, call the expand operation to provide the user with a list of matching codes/concepts (like a browser search)
-   fetch a list of codes to use when generating software programming instructions
-   get a list of codes so that software can check whether a code is valid or not in a specific context

**Examples**

Expanding a value set that is already registered on the server as "23", with a text filter of "abdo":

``` http
GET [base]/ValueSet/23/$expand?filter=abdo
```

Expanding a value set that is specified by the client (using JSON):

``` http
POST [base]/ValueSet/$expand
[other headers]

{
  "resourceType" : "Parameters",
  "parameter" : [
     {
     "name" : "valueSet",
     "resource" : {
       "resourceType" : "ValueSet",
     [value set details]
     }
   }
  ]
}
```

The server responds with a value set (this example in XML):

``` http
HTTP/1.1 200 OK
[other headers]

<ValueSet xmlns="http://hl7.org/fhir">
  <!-- the server SHOULD populate the id with a newly created UUID
    so clients can easily track a particular expansion  -->
  <id value="43770626-f685-4ba8-8d66-fb63e674c467"/>
  <!-- no need for meta, though it is allowed for security labels, profiles -->

  <!-- other value set details -->
  <expansion>
    <!-- when expanded -->
    <timestamp value="20141203T08:50:00+11:00"/>
  <contains>
    <!-- expansion contents -->
  </contains>
  </expansion>
</ValueSet>
```

<span id="lookup"></span>
### Concept Lookup / Decomposition

A system can ask a terminology server to return a set of information about a particular system/code combination using [the lookup operation](codesystem-operation-lookup.html). The server returns information for both display and processing purposes. The client passes the server the following information:

-   the code value (either a code, or a Coding data type)
-   (Optionally) the id or the url of the code system in which the code is being checked
-   (Optionally) a date at which the code information should be returned (usually, this is the current date/time, but there are circumstances where that is not appropriate)
-   (Optionally) a set of properties to return about the code

The server returns some or all of the following information:

-   a human description of the system
-   a recommended display for the code
-   properties of the code (e.g. status)
-   other designations for the code (a value, optionally with language and/or a use code)
-   relationships between this code and other codes (parent/child properties, etc.)
-   Component properties of the specified code (e.g. to support reasoning) (e.g. decomposition)

The recommended display for the code is a text representation of the code that the terminology server recommends as the default choice to show to the user, though a client may choose out of the other designations if it has reason to.

If the client does not ask for any particular properties to be returned, it is at the discretion of the server to decide which properties to return (though note that the "version" property is always returned if the code system has a version).

**Examples**

Looking up a code in a code system:

``` http
GET [base]/CodeSystem/loinc/$lookup?code=1963-8
```

Note that the logical id "loinc" is not a reliable identifier across systems; each server assigns logical ids to code system resources however it sees fit. A more reliable query is this:

``` http
GET [base]/CodeSystem/$lookup?system=http://loinc.org&code=1963-8&property=code&property=display&property=designations
```

Lookup the code system using a Coding (this example in XML):

``` http
POST [base]/CodeSystem/$lookup
[other headers]

<Parameters xmlns="http://hl7.org/fhir">
  <parameter>
    <name value="coding"/>
    <valueCoding>
      <system value="http://loinc.org"/>
      <code value="1963-8"/>
    </valueCoding>
  </parameter>
</Parameters>
```

The server responds with a set of information (JSON this time):

``` http
HTTP/1.1 200 OK
[other headers]

{
  "resourceType" : "Parameters",
  "parameter" : [
    {
    "name" : "name",
    "valueString" : "LOINC"
  },
  {
    "name" : "version",
    "valueString" : "2.56"
  },
  {
    "name" : "display",
    "valueString" : "Bicarbonate [Moles/volume] in Serum"
  },
  {
    "name" : "abstract",
    "valueString" : "false"
  }
  ]
}
```

<span id="standard-props"></span>
#### Standard Properties

The following properties are defined for all code systems:

|             |                                                                                                              |
|-------------|--------------------------------------------------------------------------------------------------------------|
| **Name**    | **Usage**                                                                                                    |
| system      | The name of the code system                                                                                  |
| version     | The version of the code system used for the look up operation                                                |
| display     | The recommended display for the code, if one is known                                                        |
| definition  | The definition for the code                                                                                  |
| designation | Other designations for the code                                                                              |
| lang.X      | Designations in language X (where X is an IETF Language code, see [BCP-47](http://tools.ietf.org/html/bcp47) |
| parent      | Parent codes for this code (for code systems with a defined hierarchy)                                       |
| child       | child codes of this code (for code systems with a defined hierarchy)                                         |

In addition, any property codes defined by the code system (CodeSysem.property.code) can be used (and see the definitions for [SNOMED CT](snomedct.html#props), [LOINC](loinc.html#props), and [RxNorm](rxnorm.html#props)).

<span id="validation"></span>
### Value Set Validation

One way to determine whether a code is in a value set is to expand the value set (as described above), and then look at the returned codes to see if the code is in the expansion. However, this is not an efficient way to test whether a code is valid, and for some value sets (e.g. with infinite number of members), it cannot work. Instead, a FHIR terminology server provides [a "validate-code" operation](valueset-operation-validate-code.html). The client passes the server the following information:

-   the value set (either by its URL on the RESTful interface, by its logical identifier [(ValueSet.url)](valueset-definitions.html#ValueSet.url), or directly as a parameter to the call)
-   the code value (either a code + system, a Coding data type, or a CodeableConcept)
-   (Optionally) a date at which the expansion should be evaluated (usually, and by default, this is the current date/time, but there are circumstances where that is not appropriate)

The server returns a true/false indicating whether the code/concept is valid, and a list of errors and warnings associated with it. The server should also return an appropriate display for the concept for use in a UI context.

Note that if the server is passed a CodeableConcept, the server is able to check whether any of the codes are valid against the value set, and also check whether multiple codings are allowed and/or the codings provided are consistent with each other.

Every code system has an implicit value set that is "all the concepts defined in the code system" (CodeSystem.valueSet). For some code systems, these value set URIs are defined in advance (e.g. for [LOINC](loinc.html), it is `http://loinc.org/vs`). However, for some code systems, they are not known. Clients can refer to these implicit value sets by providing the URI for the code system itself.

**Examples**

Simple validation of a code/system against a known value set:

``` http
GET [base]/ValueSet/23/$validate-code?system=http://loinc.org&code=1963-8&display=test
```

Validate a CodeableConcept against a client specified value set (this example in JSON):

``` http
POST [base]/ValueSet/$validate-code
[other headers]

{
  "ResourceType" : "Parameters",
  "parameter" : [
    {
    "name" : "coding",
    "valueCodeableConcept" : {
      "coding" : {
        "system" : "http://loinc.org",
          "code" : "1963-8",
      "display" : "test"
      }
    }
  },
  {
    "name" : "valueSet",
    "resource": {
      "resourceType" : "ValueSet",
    [etc.]
    }
  }
  ]
}
```

The server responds with validation information (JSON this time):

``` http
HTTP/1.1 200 OK
[other headers]

{
  "resourceType" : "Parameters",
  "parameter" : [
    {
    "name" : "result",
    "valueBoolean" : false
  },
  {
    "name" : "message",
    "valueString" : "The display \"test\" is incorrect"
  },
  {
    "name" : "display",
    "valueString" : "Bicarbonate [Moles/volume] in Serum"
  }
  ]
}
```

<span id="subsumes"></span>
### Subsumption testing

To test the subsumption relationship between *code/Coding A* and *code/Coding B*, perform a $subsumes operation. Subsumption testing is based on [the CodeSystem definition of subsumption](codesystem.html#subsumption). The client passes the server the following information:

-   the system that identifies the code system in which subsumption testing is to be performed (either by invoking the operation on the code system directly, or referring to it by its canonical URL)
-   Concepts A and B - either as codes, or Codings
-   (Optionally) the version of the code system to use (mostly, this should not matter)

If the client passes Codings, it is allowed to use code system values that are different from the code system in which subsumption testing is to be performed. In this case, the server SHALL return an error unless the relationships between the various code systems is well defined.

If the concepts can be compared, then the server returns an outcome code:

|              |                                                                  |
|--------------|------------------------------------------------------------------|
| equivalent   | Concepts A and B are equivalent                                  |
| subsumes     | Concept A subsumes Concept B                                     |
| subsumed-by  | Concept A is subsumed by Concept B                               |
| not-subsumed | Concepts A and B are not related by any subsumption relationship |

**Examples**

Test whether a SNOMED CT Concept 'Disorder of liver' (235856003) subsumes 'Viral hepatitis' (3738000):

``` http
GET [base]/CodeSystem/$subsumes?system=http://snomed.info/sct&codeA=235856003&codeB=3738000
```

Or using Codings:

``` http

POST [base]/CodeSystem/$subsumes
[other headers]

<Parameters xmlns="http://hl7.org/fhir">
  <!-- Subsumption testing - use SNOMED CT rules -->
  <parameter>
    <name value="system"/>
    <valueUri value="http://snomed.info/sct"/>
  </parameter>
  <!-- Australian distribution -->
  <parameter>
    <name value="version"/>
    <valueString value="http://snomed.info/sct/32506021000036107/version/20160430"/>
  </parameter>
  <parameter>
    <name value="codingA"/>
    <valueCoding>
      <system value="http://snomed.info/sct"/>
      <code value="235856003"/>
    </valueCoding>
  </parameter>
  <parameter>
    <name value="codingB"/>
    <valueCoding>
      <system value="http://snomed.info/sct"/>
      <code value="3738000"/>
    </valueCoding>
  </parameter>
</Parameters>
```

Server response:

``` http
HTTP/1.1 200 OK
[other headers]

{
  "resourceType" : "Parameters",
  "parameter" : [
    {
    "name" : "outcome",
    "valueCode" : "subsumes"
  },
  ]
}
```

<span id="batch"></span>
### Batch Validation

It is also possible to validate a set of concepts against their relevant value sets by using the `$validate-code` operation in a [Batch](http.html#batch) interaction.

**Example**

A request to validate 2 concepts from a [CDA](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) document, with OIDs for value set identifiers:

``` http
POST [base]
[other headers]

{
  "ResourceType": "Bundle",
  "type": "batch",
  "entry": [{
    "request": {
      "method": "Get",
      "url": "ValueSet/$validate-code?system=http://loinc.org&code=2324-4&uri=urn:oid:1.2.3.4.6"
    }
  },
  {
    "request": {
      "method": "GET",
      "url": "ValueSet/$validate-code?system=http://snomed.info/sct&codes=22298006&uri=urn:oid:1.2.3.4.7"
    }
  }]
}
```

The server responds with a series of validation outcomes (JSON this time):

``` http
HTTP/1.1 200 OK
[other headers]

{
  "ResourceType": "Bundle",
  "type": "batch-response",
  "entry": [{
    "resource": {
      "resourceType": "Parameters",
      "parameter": [{
        "name": "result",
        "valueBoolean": false
      },
      {
        "name": "message",
        "valueString": "'2324-4' is not a valid LOINC code"
      }]
    }
  },
  {
    "resource": {
      "resourceType": "Parameters",
      "parameter": [{
        "name": "result",
        "valueBoolean": false
      },
      {
        "name": "message",
        "valueString": "The concept is not in the specified value set (\"Organisms\")"
      },
      {
        "name": "display",
        "valueString": "Myocardial infarction"
      }]
    }]
  }
```

<span id="translate"></span>
### Translations

A client can ask a server to translate a concept from one value set to another. Typically, this is used to translate between code systems (e.g. from LOINC to SNOMED CT, or from a [HL7 V3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) code to a [HL7 V2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) code). The client calls [the translate operation](conceptmap-operation-translate.html) and passes the following parameters:

-   a code + system, Coding, or CodeableConcept
-   a Concept Map to use for the translation
-   the value set for the context of the source
-   the value set for the destination

The client passes either a concept map, or the value sets for the source and destination context. If there is no concept map, then the server may determine the appropriate map to use from context provided in the value sets. If there is no particular context, the appropriate value sets would be the value sets for the entire coding system at question (e.g. from http://snomed.info/sct to http://loinc.org/vs). The server performs the translation as it is able based on the concept maps that it knows about. If no single mapping can be determined, then the server returns an error. Some servers may require a concept map to use for the translation.

**Example**

Translate from FHIR Composition status to [HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) Act Status (based on [this defined concept map](cm-composition-status-v3.html)):

``` http
GET [base]/ConceptMap/$translate?system=http://hl7.org/fhir/composition-status
  &code=preliminary&source=http://hl7.org/fhir/ValueSet/composition-status
  &target=http://terminology.hl7.org/ValueSet/v3-ActStatus
```

The server responds with validation information:

``` http
HTTP/1.1 200 OK
[other headers]

{
  "resourceType" : "Parameters",
  "parameter" : [
    {
    "name" : "result",
    "valueBoolean" : true
    },
    {
      "name" : "outcome",
      "valueCoding" : {
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActStatus",
        "code" : "active",
      }
    }
  ]
}
```

<span id="batch2"></span>
### Batch Translation

It is also possible to translate a set of concepts against their relevant value sets by using the `$translate` operation in a [Batch](http.html#batch) interaction.

**Example**

A request to translate 2 concepts from a [CDA](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) document, with OIDs for value set identifiers:

``` http
POST [base]
[other headers]

{
  "ResourceType": "Bundle",
  "type": "batch",
  "entry": [{
    "resource": {
      "ResourceType": "Parameters",
      "parameter": [{
        "name": "concept",
        "valueCodeableConcept": {
          "system": "http://loinc.org",
          "code": "2324-4"
        }
      },
      {
        "name": "target",
        "valueUri": "urn:oid:1.2.3.4.6"
      }]
    },
    "request": {
      "method": "POST",
      "url": "ConceptMap/$translate"
    }
  },
  {
    "resource": {
      "ResourceType": "Parameters",
      "parameter": [{
        "name": "concept",
        "valueCodeableConcept": {
          "system": "http://snomed.info/sct",
          "code": "22298006"
        }
      },
      {
        "name": "target",
        "valueUri": "urn:oid:1.2.3.4.7"
      }]
    },
    {
      "request": {
        "method": "POST",
        "url": "ConceptMap/$translate"
      }
    }]
  }
```

The server responds with a series of translation outcomes:

``` http
HTTP/1.1 200 OK
[other headers]

{
  "ResourceType": "Bundle",
  "type": "batch-response",
  "entry": [{
    "resource": {
      "resourceType": "Parameters",
      "parameter": [{
        "name": "result",
        "valueBoolean": false
      },
      {
        "name": "message",
        "valueString": "'2324-4' is not a valid LOINC code"
      }]
    }
  },
  {
    "resource": {
      "resourceType": "Parameters",
      "parameter": [{
        "name": "result",
        "valueBoolean": true
      },
      {
        "name": "outcome",
        "valueCodeableConcept": {
          "coding": {
            "system": "http://example.com/codesystems/example",
            "code": "xxxx"
          }
        }
      }]
    }
  }]
}
```

<span id="closure"></span>
### Maintaining a Closure Table

The 5 operations Expand, Lookup, Validate, Subsumes, and Translate account for most operational requirements associated with terminology use. However, there is one difficult but important use case that they do not address, which is integrating terminologically based logic into application searches.

A typical example of this is a user that wants to find any observations for male patients over the age of 50 who attended a particular clinic within a particular 2-week period, with a diagnosis of gout, and who had an elevated serum creatinine.

In this case, both "diagnosis of gout" and "serum creatinine" involve value set and/or subsumption queries (e.g. against SNOMED CT and LOINC respectively). This search has to be executed by some logical processing engine that knows how to find patient related data in a given persistence store. Often, this is some kind of SQL query, though many other technological choices are available. However, this is done, the challenge with an operation like this is to integrate the terminological knowledge into a search execution that also covers other relationships expressed in the search criteria.

One approach to this problem would be to use the expand operation above, so that the system executing the search could generate expansions, and then search for these expansions. This has a couple of problems:

-   the list of subsumed codes could be very long, and the search operation becomes correspondingly inefficient
-   the expansion of the subsumption might not be closed, and so the search operation cannot be correct

An alternative approach is to generate a [transitive closure table](https://en.wikipedia.org/wiki/Transitive_closure#In_graph_theory) which lists all the possible transitive subsumption relationships, and [allows for rapid execution of these kind of queries](http://karwin.blogspot.com.au/2010/03/rendering-trees-with-closure-tables.html) . However, this has other problems:

-   the subsumption table can be very large (&gt;500000 records for SNOMED CT), even though very few of the codes are used
-   subsumption tables are generally built up front, and do not deal with new codes as they are encountered very well
-   they still do not offer a solution for non-closed expansions

This is the main reason why most systems do not support post-coordination or other forms of coded expressions.

In FHIR, this problem is solved by building a closure table on the fly as new codes are seen. This technique leaves the FHIR terminology server responsible for the terminological reasoning and the client responsible for the closure table maintenance. To the client, it doesn't matter whether the concept is post-coordinated or not. Here's a description of how the process works:

1.  the client defines a name associated with a particular context in which it wishes to maintain a subsumption based closure table
2.  the client registers this name with the FHIR Terminology server using the $closure operation (described below), with only one parameter, the name of the context
3.  any time the client system encounters a new Coding that is not entered in the closure table, it calls the $closure operation with the context name, and the Coding value it has encountered
4.  the server returns a ConceptMap resource with a list of new entries (code : system -&gt; code : system) that the client should add to its closure table
    -   the server can indicate that entries should be removed from the table by providing a (code : system -&gt; code : system) with equivalence "unmatched" (though it's not known why that would be needed)
5.  the client copies these entries into its closure table
6.  to facilitate the initialization process, a client can call $closure with multiple Coding values

The [$closure operation](conceptmap-operation-closure.html) takes 2 parameters:

-   closure table context name
-   concepts to enter into the table (0 or more - 0 codings is a request to (re-)initialize the table)

The operation returns a concept map which has a list of mappings that represent new entries to make in the closure table. The subsumption testing performed when building a closure table is the same as for the `$subsumes` operation, and is based on [the CodeSystem definition of subsumption](codesystem.html#subsumption).

The closure table can be resynchronized by passing an additional "version" parameter, which is a value taken from the version in one of the delta responses. This is a request to replay all the mapping changes since that delta was sent.

<span id="closure-init"></span>
#### Initializing a Closure Table

Before it can be used, a closure table has to be initialized. To initialize a closure table, POST the following to \[base\]/ConceptMap/$closure:

``` json
{
  "resourceType" : "Parameters",
   "parameter" : [{
     "name" : "name",
     "valueString" : "[name]"
  }]
}
```

A successful response is a 200 OK from the server, with an associated ConceptMap:

``` json
{
    "resourceType": "ConceptMap",
    "id": "[name]",
    "version": "0",
    "name": "Closure Table [name] Creation",
    "status": "active",
    "experimental": true,
    "date": "2015-12-20T23:10:55Z"
}
```

If there is an error (usually involving the closure name) the server returns a HTTP status 400 with an operation outcome:

``` json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>invalid closure name \"invalid-id!\":</p></div>"
  },
  "issue": [
    {
      "severity": "error",
      "details": {
        "text" : "invalid closure name \"invalid-id!\""
      }
    }
  ]
}
```

What closure names are valid is at the discretion of the server.

<span id="closure-add"></span>
#### Adding to a Closure Table

When the consumer (client) encounters a new code, it POSTs the following to \[base\]/ConceptMap/$closure:

``` json
{
  "resourceType" : "Parameters",
  "parameter" : [{
    "name" : "name",
    "valueString" : "[name]"
  }, {
    "name" : "concept",
    "valueCoding" : {
       "system" : "http://snomed.info/sct",
       "code" : "22298006",
       "display" : "Myocardial infarction"
    }
  }]
}
```

Note that this example only includes one concept, but more than one is allowed:

``` json
{
  "resourceType" : "Parameters",
  "parameter" : [{
    "name" : "name",
    "valueString" : "[name]"
  }, {
    "name" : "concept",
    "valueCoding" : {
       "system" : "http://snomed.info/sct",
       "code" : "22298006",
       "display" : "Myocardial infarction"
    }
  }, {
    "name" : "concept",
    "valueCoding" : {
       "system" : "http://snomed.info/sct",
       "code" : "128599005",
       "display" : "Structural disorder of heart"
    }
  }]
}
```

The response varies depending on the conditions on the server. Possible responses: If the closure table has not been initialized: Return a 404 Not Found with

``` json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>invalid closure name \"[name]\":</p></div>"
  },
  "issue": [
    {
      "severity": "error",
      "details": {
        "text" : "invalid closure name \"[name]\""
      }
    }
  ]
}
```

If the closure table needs to be reinitialized: Return a 422 Unprocessable Entity with

``` json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>closure \"[name\" must be reinitialized</p></div>"
   },
   "issue": [{
       "severity": "error",
       "details": {
         "text" : "closure \"[name]\" must be reinitialized"
       }
     }
   ]
}
```

The server should only send this when its underlying terminology conditions have been changed (e.g. a new version of SNOMED CT has been loaded). When a client gets this, it's only choice is to initialize the closure table, and process all the codes in the closure table again (the assumption here is that the system has some external source of 'all the codes' so it can rebuild the table again). If the concept(s) submitted are processed ok, but there's no new concepts, or no new entries in the table, return a 200 OK with :

``` json
{
    "resourceType": "ConceptMap",
    "id": "[name]",
    "version": "[version]",
    "name": "Updates for Closure Table [name]",
    "status": "active",
    "experimental": true,
    "date": "2015-12-20T23:12:55Z"
}
```

If there's new entries in the closure table, the server returns a 200 OK with:

``` json
{
  "resourceType": "ConceptMap",
  "id": "b87db127-9996-4d0c-bda9-a278d7a24a69",
  "version": "[version]",
  "name": "Updates for Closure Table [name]",
  "status": "active",
  "experimental": true,
  "date": "2015-12-20T23:16:24Z",
  "group": [{
    "source": "http://snomed.info/sct",
    "target": "http://snomed.info/sct",
    "element" : {
      "code": "22298006",
      "target": [{
        "code": "128599005",
        "equivalence": "subsumes"
      }]
    }
  }]
}
```

Notes

-   The server can return multiple elements, each with 1 or more targets
-   servers may return the relationship represented in either direction
-   it's important to understand the relationship the right way around. From the spec: The equivalence is read from target to source (e.g. the target is 'wider' than the source). So in this case, 128599005 (Structural disorder of heart) subsumes 22298006 (Myocardial infarction)
-   In the $closure operation, the response never explicitly states that a code is subsumed by itself. Clients should assume that this is implicit
-   The version is important. Each new invocation of the $closure operation returns a new version of the concept map. The server must keep track of the versions is has issued for replay (see below)
-   As well as entering codes that are actually used, the client also enters search terms into the closure table
-   The combination of the system and code is the key to the closure table; if the server encounters two different codes that have the same meaning (e.g. syntactical variation), it should create an "equals" relationship between them

<span id="closure-rerun"></span>
#### Re-running Closure operation

Given the way that the closure operation functions, it's possible for a client to lose a response from the server before it is committed to safe storage (or the client might not have particularly safe storage). For this reason, when a client is starting up, it should check that there have been no missing operations. It can do this by passing the last version (from the Concept Map response) it is sure it processed in the request:

``` json
{
  "resourceType" : "Parameters",
   "parameter" : [{
     "name" : "name",
     "valueString" : "[name]"
  }, {
     "name" : "version",
     "valueString" : "3"
  }]
 }
```

That's a request to return all the additions to the closure table since version 3. The server returns its latest version in the concept map, along with anything added to the closure table since version 3 (not including version 3)

Notes:

-   The client can pass a concept or version, but not both
-   These examples use a serially incrementing sequential integer, but this is not required, and clients should not assume that there is any meaning or order in the version. Just recall the last version and treat it as a magic fixed value only meaningful to the server. There is, however, one special value: '0'. Passing a last version of 0 should be understood as resyncing the entire closure table

<span id="closure-use"></span>
#### Making use of the Closure Table

The client uses the result of the closure operation to maintain a closure table. Simplistically, it might look like this:

|                  |                                 |                                  |     |
|------------------|---------------------------------|----------------------------------|-----|
| **Scope**        | **Source**                      | **Target**                       |     |
| patient-problems | http://snomed.info/sct|22298006 | http://snomed.info/sct|128599005 |     |
| patient-problems | http://snomed.info/sct|24595009 | http://snomed.info/sct|90560007  |     |
| obs-code         | http://loinc.org|14682-9        | http://loinc.org|LP41281-4       |     |

The client can then use a table like this as part of its general search conditions. Using the example from above: "Find any observations for male patients over the age of 50 who attended a particular clinic within a particular 2-week period, with a diagnosis of gout, and who had an elevated serum creatinine." This query could be done, for instance, with an SQL query like this:

     Select * from Observations, Patients, Encounters, Conditions, Observations as Obs2 where
       Observations.patient = Patients.Key and Patients.Age > 50 and
       Observations.encounter = Encounters.Key and Encounter.clinic = [key]
         and encounter.date >= [date] and encounter.date <= [date] and
       Conditions.patient = Patients.Key and Conditions.code
         in (select Source From ClosureTable
           where Scope = "patient-problems" and Target = "http://snomed.info/sct|90560007") and
       Obs2.patient = Patients.Key and Obs2.value > 0.19 and Obs2.code
         in (select Source From ClosureTable
           where Scope = "obs-code" and Target = "http://loinc.org|LP41281-4")

Note that in real clinical systems, tables are usually far more structured than this example implies, and the query is correspondingly more complex. The closure table would usually be normalised - this example is kept simple to demonstrate the concept.

\[%file newfooter%\]
