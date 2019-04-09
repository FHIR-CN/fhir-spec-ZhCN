\[%settitle Managing Resource Identity%\]
\[%file newnavbar%\]
<span id="identity"></span>
Managing Resource Identity
--------------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): n/a | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

The content on this page builds on the Normative [documentation about managing resource identification](resource.html#id).

Each resource has a known identity, which is a URI. All resources accessed through the RESTful API have a URL for their identity. The identity is not stored inside the resource, but must be tracked by systems handling resources. For RESTful systems, the resource identity is the same as the URL by which it is found. When a resource is packaged in a [bundle](bundle.html) (e.g. for [messages](messaging.html), [documents](documents.html), or [exchanged in a service](services.html)), the id is included along with the resource. When systems using FHIR resources are deployed in an implementation context where there are more than two systems exchanging resources, the way that resources are identified with URLs needs to be managed carefully.

Note that many resources also have an `identifier` element, and usually there can be multiple identifiers. This identifier is a logical identifier for the concept that the resource describes and is different from the identity discussed in this section, which is the literal identity of the resource. Note that there are often multiple resource instances that describe the same concept across multiple systems, e.g. each application keeps its own copy of the patient information in a [Patient](patient.html) resource. This can even exist within a single system, such as in the case of [patient duplicates](patient.html#links).

Some resources have a special identifier, which is constrained to be a proper URI, and which is known as the 'canonical URL' for the resource. These resources are referred to by this URI, which is encouraged to be an actual URL that resolves to a web page (or web service) that describes the content (hence 'canonical URL' not 'canonical URI', though this is also for legacy purposes).

<span id="using"></span>
### Using Resources

Resources are used in a variety of circumstances. Generally, these can be categorized into 3 different scenarios:

1.  **Closed Trading System**: the resources are only ever exchanged between fixed systems in a tightly controlled community, such as a single EHR system with multiple modules. There is only one master server for each resource type, and resources are managed by that server. In this context, the [logical id](resource.html#id) of a resource is sufficient to fully identify the resource
2.  **Open system**: there are many peer servers, each managing a set of resources of different types. In order to identify resources, a full URL reference to the origin server is required. The grand example of an open system is the World Wide Web
3.  **Partially closed, inter-linked systems**: a mixture of both closed and open systems - trading communities that are tightly managed, but have managed interactions with other closed trading systems, or with the world-wide web, or both. In fact, this combination appears to be the most likely scenario for current real-world healthcare business solutions

These combinations are why either relative (logical) or absolute references are allowed, and why a logical id is always required, in order to enable seamless exchange amongst partially closed trading systems.

<span id="distributed"></span>
### Copying Resources and Assigning new Ids

When resources are exchanged between systems, they may need to have new logical resource ids assigned. When a resource has a new logical id assigned, nothing in the resource changes other than the [Resource.id](resource-definitions.html#Resource.id), but any references that point to the resource need to be updated. Whether new ids are required or not depends on the context, as does how resource references are updated.

The normal case is that a client/receiving system accepts the server/sender's identification of a resource at face value, whether it is a relative or absolute reference. When the client/receiver wants to follow resource references, they are done using the server id (typically either by http calls or locating them in a [bundle](bundle.html)), but other arrangements are possible. In such cases, there is no need for new ids.

Another scenario is for a client to retrieve a resource from a server and make its own local persistent copy. If the local resource has a life-cycle of its own (i.e. it is not just a cached resource), then it needs to have its own identity; i.e. the resource must get new ids. The simplest case is that the client is only keeping local copies of resources from a single server. In these cases, the client can simply replace the Base URL and keep the logical id of the resource the same. In fact, if the server is using relative references, then this change doesn't involve any actual changes to the resources, it only means a re-interpretation of the references.

In some cases, however, the client may deal with multiple servers. In this case, the logical id of the resource is not guaranteed to be unique (unless all resources have a UUID for the logical id, which is allowed but not required). When the client cannot be sure that the resource identities are unique, it will have assign new ids to the resources. In practice this means that the client needs to keep some kind of identity translation table and update references to the resources it has copied locally when other resources are received.

The case of a gateway system that migrates resources from one ecosystem to another is very similar. In some limited cases, it can leave the logical id of the resources unchanged as resources are copied from one closed system to another. However, in more complicated cases, it will have to modify the resource references as resources pass across the gateway.

\[%impl-note%\] In its current form, FHIR allows various convenient implementer practices around resource identification that make integration across eco-system boundaries more difficult. In particular, either only allowing UUIDs for logical IDs or only allowing absolute references would make the boundary management problem easier but remove useful and convenient flexibility for other uses of FHIR. Implementers should design their systems accordingly. \[%end-note%\] <span id="multi-server"></span>
### Working with multiple servers

FHIR supports managing healthcare data in a distributed environment where different records reside on different servers - and reference data on remote servers. Implementers working in such a multi-server environment should be aware of several considerations:

<span id="discovery"></span>
#### Discovering relevant systems

In an environment where relevant information may be distributed across multiple servers, client systems in the space will need a mechanism to determine where data is located. There are three primary mechanisms for discovery:

-   Manual configuration: Systems are manually configured to point to other (relevant) servers with guidance around what types of data reside in which server, the address of the server, any necessary authentication information, etc. either hard-coded in the software or managed through system configuration files
-   Traversal: Client systems are expected to start queries from a single server that manages the "primary" resources (e.g. [encounters](encounter.html), [diagnostic reports](diagnosticreport.html), [episodes](episodeofcare.html), etc.) Other relevant information such as diagnoses, observations, conditions, procedures, etc. is found by navigating references from those primary resources to other resource - on whatever servers that information happens to reside on
-   System registry: Client systems discover the 'current' set of relevant servers by querying a central location for the [Endpoints](endpoint.html) for servers that carry relevant data for a particular community. As servers join or leave the community, the list of potential endpoints would change. Clients would discover relevant servers by querying for endpoints of particular types and then retrieve more information by looking up the [CapabilityStatements](capabilitystatement.html) for each server

<span id="registries"></span>
#### Managing shared entities

A typical multi-server environment is one where each server is responsible for different "types" of information. For example, one server handles lab information, one handles medication information, one handles imaging information, etc. In this scenario, it's not uncommon for each of the servers to also hold their own records for certain types of resources such as [Patient](patient.html), [Practitioner](practitioner.html), [Location](location.html), etc. When exploring linking the systems together, consideration needs to be given for how to manage such shared entities. Possibilities include:

-   Shared registry: A single system acts as a source of truth for a particular resource type and all other systems cease maintaining local information and instead merely reference resources on the central server.
-   Source-of-truth registry: A single system acts as source of truth for a particular resource type and pushes a read-only view of the information to other servers. Records are created or updated only in the source of truth system.
-   Linked resources: Each system maintains their own 'version' of information for a given individual, but linkages are maintained allowing determination which instances from different servers represent the same individual. This can be done using the [Person](person.html) resource for patients, practitioners and [RelatedPerson](relatedperson.html)s. The [Linkage](linkage.html) resource can be used for other shared resources. Linkages can also be managed just by sharing `identifier` values (e.g. shared medical record numbers, license numbers, etc.)
-   Independent resources: Each system manages their resources independently and no linkage is maintained. Determination of what resources are appropriate to link to must be managed by human-based searching and matching on the patients/providers/etc. in each system separately

Choice of architecture will be driven by the capabilities of the systems involved, needs of organizational workflow, ability to integrate legacy data, etc. Other architectures are possible, and mixtures of architectures are possible too. For example, a shared registry for patients while using linked resources for practitioners; shared registry for "licensed" practitioners while independent resources for administrative staff; etc.

Where synchronization is required, this can be done by polling, by having the "master" system pushing updates to other systems, by using FHIR's [Subscription](subscription.html) mechanism, through database synchronization technologies or other means. Design decisions will also be necessary around synchronization frequency, managing merges in a distributed environment, etc.

<span id="queries"></span>
#### Querying shared data

FHIR defines several mechanisms for retrieving resources that are referenced by other resources: [\_include](search.html#include) and [\_revinclude](search.html#revinclude), [compartments](compartmentdefinition.html) and special operations such as [Patient/$everything](patient-operation-everything.html). Query behavior becomes more complex when references span servers. Servers returning \_include and \_revinclude capabilities **can** but need not return data stored from other servers. Similarly, the definition of compartments doesn't strictly limit data to that found on a single server, but servers are certainly not expected to include data found elsewhere when performing compartment-based queries or operations. As a result, query behavior may be different if data is stored on the same server as the referencing resource vs. stored on a different server.

For servers that support cross-server search, there are multiple considerations:

-   Querying across servers will impose constraints on query response time. This is particularly true in situations where subsequent sub-queries may need to be executed based on returned data (e.g. includes based on other included data)
-   The remote server might not always be available, or might not respond in a sufficiently timely manner and the user may need to be made aware (via a 'warning' [OperationOutcome](operationoutcome.html) that some results are not available
-   When a query is executed, the general presumption is that the result set is "frozen" such that paging operations behave consistently. This becomes more complex when querying across servers. To truly 'freeze' the result set, a great deal of data may need to be queried from the remote server, even if the client only retrieves first page or two. This has ramifications for performance, for accuracy of logs indicating what clients have accessed what data and possibly for changes of access permission when data has been cached on a different server.
-   Systems will need to manage propagating user authentication across servers such that access permissions are appropriately enforced by each server
-   Where data is being aggregated from multiple servers (e.g. Observations returned from multiple repositories), there may be difference in search filtering behavior by different servers. There may also be a need to identify (and possibly suppress duplicates) when the same record appears in more than one repository

<span id="storage"></span>
#### Storage location

In some multi-server environments, there may be multiple servers that support storing a particular resource type. For example, one server might store lab-related observations, another might store vital sign observations and yet another could store clinician assessment observations. Alternatively, both the ordering system and the pharmacy system might have records of patient allergies. Clients will need rules to determine which server (or servers) a given record should be created on. Ideally, servers should also have logic that allows them to detect if a record has been submitted to them inappropriately. Such rules could be based on originating client, associated encounter, record type or other considerations.

\[%file newfooter%\]
