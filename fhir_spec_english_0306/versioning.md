\[%settitle Managing Multiple FHIR Versions%\]
\[%file newnavbar%\]
Managing Multiple FHIR Versions
-------------------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

This FHIR specification is one in a [series of publications of the FHIR specification](http://hl7.org/fhir/directory.html). There have been previous releases, and there will be subsequent releases. Each release (or "version") introduces new features, and changes from the previous releases.

Implementers should be familiar with the kind of changes that can be made, and the change processes that apply - see the FHIR [Version Management Policy](versions.html) for further information

Ongoing change to the specification means that implementers must be able to determine which version is in use in their context and implement accordingly.

There are 3 ways to determine the version of FHIR in use:

-   The [fhirVersion](capabilitystatement-definitions.html#CapabilityStatement.fhirVersion) element in the applicable [CapabilityStatement](capabilitystatement-definitions.html)
-   The [fhirVersion parameter](http.html#version-parameter) on the MIME-type that applies to the resource
-   Specifying a version specific profile on the resource itself

<span id="cs-version"></span>
### CapabilityStatement.fhirVersion

Whenever resources are exchanged, the applicable FHIR version applies to the entire interaction, not just the resources. The semantics of the mime types, the RESTful URLs, the search parameters, and the overall interaction are bound to a particular FHIR version. The resource versions must be consistent with the overall interaction. It's not possible for client/server (or, for messaging, sender/receiver) to have a coherent conversation without first agreeing on the version. The version of the interaction is specified in the CapabilityStatement resource. The sequence works this way:

-   The server decides what version it is implementing, and states this in it's CapabilityStatement
-   The client knows what FHIR version it uses
-   The first time the client connects to the server, it [retrieves that CapabilityStatement](http.html#capabilities) and checks that the server version is the same
-   All interactions between the client and server use the same version

Clients are advised to check the server's capability statement before first using the server, but how often is at the discretion of the implementer, and this varies wildly. Some implementers only check the statement during the development cycle, while others check on the first connection for each process. Which is appropriate depends on a variety of circumstances, but implementers should note that the CapabilityStatement can change over time - even changing FHIR versions as the system is subject to ongoing development.

Note that there are related places where the FHIR version in use can also be stated, and these may be consulted at different points in the development cycle in place (or as well as) CapabilityStatement.fhirVersion:

-   [ImplementationGuide.fhirVersion](implementationguide.html#versions): specifies which FHIR versions(s) apply for a particular solution. This may imply a particular version for a server, or an exchange
-   [StructureDefinition.fhirVersion](structuredefinition-definitions.html#StructureDefinition.fhirVersion): may specify which version a resource conforms to - or, at least, what version it should be expected to conform to

<span id="mt-version"></span>
### Mime Type Parameter

The most common strategy for handling change between versions of FHIR is to use different end-points for different versions. e.g. http://acme.com/fhir/r2 and http://acme.com/fhir/r3. However, this can be problematic because it means that the same record has a different identity depending on the version of FHIR in use - though this can also be useful; it depends on the context.

A server can support multiple versions on the same end-point, if the client specifies which version to support using the [fhirVersion mime type parameter](http.html#version-parameter):

    GET [base]/metadata
    Accept: application/fhir+json; fhirVersion=3.0

This is a request to return the CapabilityStatement for the server's support of FHIR Release 3. The client will know that the server doesn't support R3 if it gets an error in return, or if the capability statement that comes back has a different fhirVersion (which would mean that the server does not support the fhirVersion parameter).

Notes:

-   The client must include the fhirVersion parameter on all following interactions.
-   The same parameter can be used anywhere Mime type is used to describe that a content contains a FHIR resource - such as in an Email attachment:

           --MIME_boundary
           Content-Type: application/fhir+xml; fhirVersion=1.0
           

Clients can determine what versions a server supports by using the [$versions](capabilitystatement-operation-versions.html) operation.

**Storage**

The same technique can be used in a database, or any other kind of storage - just store the mime type (or just the version) alongside the resource. This means that when reading resources, the application knows what version the resource has, and therefore what parser to use, before reading the resource.

<span id="mp-version"></span>
### Version Specific Profile

There are some circumstances where applications handle 'naked' resources - that is, resources where there is no wrapping envelope to carry a mimetype version parameter, nor any suitable parallel location to store the version. The most obvious circumstance is when resources are stored in files, though this may arise in other circumstances due to (legacy) application or protocol design.

When there's no other alternative, the version has to be in the resources itself, and applications reading the resource have to scan the resource to determine the version and then read the resource as the correct version.

In these cases where the version must be placed in the resource itself, this is done by indicating that the resource conforms to specific version in [meta.profile](resource-definitions.html#Meta.profile):

``` json
{
  "resourceType" : "Patient",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/3.0/StructureDefinition/Patient"]
  }
}
```

This technique can be used with all versions of FHIR, including R2 and R3:

|                                                        |                      |
|--------------------------------------------------------|----------------------|
| [FHIR R1](http://hl7.org/fhir/DSTU1) (DSTU 1)          | 0.0                  |
| [FHIR R2](http://hl7.org/fhir/DSTU2) (DSTU 2)          | 1.0                  |
| [FHIR R3](http://hl7.org/fhir/STU3) (STU3, or just R3) | 3.0                  |
| [FHIR R4](http://hl7.org/fhir/r4) (this version)       | 4.0 (once published) |

<span id="managing"></span>
### Managing Version Identification

This means that there are 3 different methods for determining version, all of which may be applicable when exchanging data. Implementers are advised to adopt their use in the order documented:

1.  All exchange of FHIR resources will have a known version from the metadata - this always applies, and implementers are encouraged to prefer this method whenever possible.
2.  When this is not enough, or when resources are not exchanged under the rules of a `CapabilityStatement`, a version parameter should be stored alongside the resource, preferably using the mime type parameter documented above
3.  When there's no other choice, use the meta.profile to indicate which version(s) a resource conforms to

When determining the version, there's no order of preference between these methods: if the version of a resource or interaction is specified more than one way, the version statements must all agree with each other, or it is an error, and applications can process a request/resource how they wish - usually, with some kind of error.

<span id="changes"></span>
### Strategies for handling Changes Between Versions

All parts of the FHIR specification are subject to ongoing change. The types of changes allowed, and the change control process vary, as detailed in the [Version Management Policy](versions.html#changecontrol). Implementers need to be aware of what kind of changes are made and have a strategy for dealing with them. Where possible, implementers should design their solutions to be able to manage changes to the specification and, where necessary, to manage interoperability with systems that may be using different versions of the specification.

A key aspect of the FHIR specification development process is gaining feedback from implementers making use of the specification. As well, the process is conditional on real world implementation in order to move through the maturity cycle. For this reason, all FHIR implementers are encouraged to register their usage [here](http://fhir.org/implementations/usage), which captures contact and other information that will allow HL7 to perform appropriate monitoring of FHIR usage. Survey information is confidential and reported in aggregate only. (Note that implementers can advertise their use of FHIR [here](http://fhir.org/implementations/usage).

\[%file newfooter%\]
