\[%settitle Validating Resources%\]
\[%file newnavbar%\]
Validating Resources
--------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

This page provides an overview of how the FHIR specification supports validation of resources.

Validating a resource means, checking that the following aspects of the resource are valid:

-   **Structure**: Check that all the content in the resource is described by the specification, and nothing extra is present
-   **Cardinality**: Check that the cardinality of all properties is correct (min & max)
-   **Value Domains**: Check that the values of all properties conform to the rules for the specified types (including checking that enumerated codes are valid)
-   **Coding/CodeableConcept bindings**: Check that codes/displays provided in the [Coding](datatypes.html#Coding)/[CodeableConcept](datatypes.html#CodeableConcept) types are valid
-   **Invariants**: Check that the [invariants](conformance-rules.html#constraints) (co-occurrence rules, etc.) have been followed correctly
-   **Profiles**: Check that any rules in [profiles have been followed](profiling.html) (including those listed in the [Resource.meta.profile](resource.html#Meta), or in [CapabilityStatement](profiling.html#profile-uses), or in an [ImplementationGuide](implementationguide.html), or otherwise required by context)
-   **Questionnaires**: Check that a [QuestionnaireResponse](questionnaireresponse.html) is valid against its matching [Questionnaire](questionnaire.html)
-   **Business Rules**: Business rules are made outside the specification, such as checking for duplicates, checking that references resolve, checking that a user is authorized to do what they want to do, etc.

There are multiple ways to validate resources. This table summarizes the options described in this specification, and which of the aspects above they can validate:

**Method**
**XML**
**JSON**
**RDF**
**Structure**
**Cardinality**
**Values**
**Bindings**
**Invariants**
**Profiles**
**Questionnaires**
**Business Rules**
[XML Schema](#schema)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
[XML Schema + Schematron](#schema)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)<sup>**1**</sup>
[JSON Schema](#json-schema)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)<sup>**2**</sup>
[ShEx](rdf.html#schema)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)<sup>**3**</sup>
[Validator](#jar)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
[Validation Operation](#op)<sup>**4**</sup>
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
![](assets/images/tick.png)
Notes:

1.  Schematron generated for a profile can test cardinality and invariants, but not bindings, and slicing is not really supported well
2.  JSON schema generated for a profile can test cardinality, and slicing is partially supported
3.  ShEx can enforce some bindings for well understood terminologies, but this is an ongoing area of development
4.  It is at the discretion of the server how much validation to perform, but most servers use the validation jar, or code derived from it, and offer the same services. Some servers also offer [a web interface](#web)

Note that all these validation methods are incomplete; they can only validate the computable aspects of conformance. There are always additional rules made in narrative that they are not able to check (e.g. a rule such as "All the clinically important content in the data SHALL be in the narrative", which might be made in an implementation guide, but could never be checked by a conformance tool).

In case of disagreement between these conformance methods, note that:

-   The schema/schematron is the least capable - mainly because it is not connected to a terminology server
-   The java validator is only as good as the underlying definitions, and depends on whether the underlying terminology server supports all the relevant terminologies
-   In general, the server validation operations use or derive from the java validation code, so have the same caveats
-   The final arbiter is human inspection of the content of the resources, and the relevant implementation guides and base specification

Also, note that static testing of resource content is not enough to prove conformance to the specification. For further information, see [FHIR Conformance Testing](http://fhir.org/conformance-testing).

<span id="correct-use"></span>
### Correct Use of Validation

Servers and clients may be configured to validate content when it is received (e.g. some of the public testing services validate resources on create/update). This can be done both during development and in production use of applications in healthcare processes. While use during the development cycle is highly recommended, use during production might not always be a good idea:

-   Validation - particularly full validation including terminology - can be quite computationally demanding. This can impose unacceptable time delays in a production system
-   In production, validation can cause the loss of critical health care data (e.g. one field has an unexpected value due to poor data entry, so all data associated with the resource is lost)
-   Validation may fail poor historical data that cannot be fixed - and this is usually difficult to test (and poorly tested)

On the other hand, validation during production use may be very important:

-   Validation may be required for security reasons. In particular, validation of narrative may be required to prevent active content or external references.
-   Validating resources at specific control points in the data flow can allow for better detection and recovery as opposed to specific application logic failing on bad data

Generally, following [Postel's law](https://tools.ietf.org/html/rfc760) is recommended:

> An implementation should be conservative in its sending behavior, and liberal in its receiving behavior.

Applications should consider carefully how much validation beyond the security related issues to perform at run-time, and how errors will be handled.

<span id="schema"></span>
### Using the XML schema

The XML schema can be used to validate XML representations of the resources. When validating a resource, you can nominate one of the following schema:

-   fhir-all.xsd: links in all the individual modular schemas
-   fhir-single.xsd: a single large file, mainly provided for schema processors that can't support circular references

In addition, the validation schema includes schematron that can be initiated with transform "iso\_svrl\_for\_xslt2.xsl" included in the [XML Tools](downloads.html#refimpl) download. Note that XSLT2 is required to run the schematrons.

When running the schematron, use the file "fhir-invariants.sch". This includes all the schematrons. The individual schematron files for each resource are provided to allow implementers to build their own smaller combined file that covers the relevant resource types for them.

<span id="json-schema"></span>
### Using the JSON schema

The JSON schema can be used with JSON schema validation software. Links:

-   [JSON Schema](fhir.schema.json.zip)
-   [JSON Validation Software](http://json-schema.org/implementations)

<span id="jar"></span>
### Using the FHIR Validator

The FHIR Validator is a Java jar that is provided as part of the specification, and that is used during the publication process to validate all the published examples. To execute the FHIR validator, follow the following steps:

-   [Download](downloads.html) the FHIR Validator
-   Execute the validator, specifying the version, and a reference to the resource to validate

Here is an example windows batch file that demonstrates the process (using the common utilities [wget](http://gnuwin32.sourceforge.net/packages/wget.htm) and [7z](http://www.7-zip.org/)):

    @ECHO OFF

     ECHO get the validator and unzip it 
     wget https://oss.sonatype.org/service/local/artifact/maven/redirect?r=snapshots&g=ca.uhn.hapi.fhir&a=org.hl7.fhir.validation.cli&v=LATEST&e=jar
     rename *.jar validator.jar

     ECHO 1. First example shows how to validate against the base spec:
     ECHO   a. get an example to validate
     wget <%baseURLn%>patient-example.xml -O pat-ex.xml

     ECHO   b. validate it against FHIR R3 
     java -jar org.hl7.fhir.validator.jar pat-ex.xml -version 3.0

     ECHO 2. Second example shows how to validate against a profile in the spec:
     ECHO   a. get an example to validate
     wget <%baseURLn%>observation-example-heart-rate.xml -O obs-ex.xml

     ECHO   b. validate it
     java -jar org.hl7.fhir.validator.jar obs-ex.xml -version <%version%> -profile http://hl7.org/fhir/StructureDefinition/heartrate

     ECHO 3. Third example shows how to validate against a profile in an implementation guide:
     ECHO   a. get an example to validate
     wget <%baseURLn%>observation-example-heart-rate.xml -O obs-ex.xml

     ECHO   b. validate it. note that you have to tell the validator where to get the implementation guide information
     java -jar org.hl7.fhir.validator.jar obs-ex.xml -version 3.0 -ig http://hl7.org/fhir/us/core -profile http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient

     ECHO Press Any Key to Close
     pause

Note that it is not necessary to download the resource first; the http address can be supplied directly:

     java -jar org.hl7.fhir.validator.jar <%baseURLn%>/patient-example.html -profile http://hl7.org/fhir/StructureDefinition/Patient

The validator requires an underlying terminology server. By default, this is http://fhir3.healthintersections.com.au. For further details of the parameters supported by the validator, see [Using the FHIR Validator](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator)

<span id="op"></span>
### Asking a FHIR Server

The [operation](operations.html) [validate](resource-operation-validate.html) can be used to check whether a resource conforms to a profile. The simplest way to execute this operation is to post the resource to a server:

     POST [base]/Observation/$validate?profile=http://hl7.org/fhir/StructureDefinition/heartrate
     [other HTTP headers]
     
     <Observation>... resource to check as the body

The server will return an [OperationOutcome](operationoutcome.html) resource listing issues found in the resource.

There are several things to consider when using this operation:

-   Not all servers support the $validate operation, though some of the public test servers do
-   Servers support the $validate operation generally will only validate against profiles already registered with the server
-   Servers may choose to support either XML, JSON, or both

<span id="web"></span>
### Via a web interface

Some servers expose the $validate functionality through a web page. For known public implementations, see the [FHIR Confluence page](https://confluence.hl7.org/display/FHIR/Public+FHIR+Validation+Services)

\[%file newfooter%\]
