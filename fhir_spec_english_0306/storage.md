\[%settitle Managing Resource Identity%\]
\[%file newnavbar%\]
<span id="identity"></span>
Using FHIR in persistent stores
-------------------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): n/a | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

Applications can use the resources defined by FHIR by storing them natively in a database or persistent store, where different applications or modules write and read the resources as part of their implementation. This page describes implementation issues encountered when storing resources natively in persistent stores.

Note that almost all applications store the information found in resources in some persistent store - usually a database. Most applications store the information found in the resources in some internal format, and only use resources natively when exchanging with other applications. This page concerns applications that store the FHIR resources natively.

<span id="choice"></span>
### Applicability of storing resources natively

In principle, resources are designed for exchange between systems, rather than as a database storage format. One practical consequence of this is that in some way, resources are highly denormalised, so that granular exchanges are fairly stand alone. (Note that in some ways, resources are also highly normalised; e.g. Patient demographic details are only found in the Patient resource).

To illustrate this, consider using an RxNorm code as a medication code. In a prescription resource (MedicationRequest), that will look like this:

``` xml
<MedicationRequest xmlns="http://hl7.org/fhir">
  <medicationCodeableConcept>
   <coding>
     <system value="http://www.nlm.nih.gov/research/umls/rxnorm"/>
     <code value=""/>
   </coding>
  </medicationCodeableConcept>
</MedicationRequest>
```

If the resource was designed to prioritize storage efficiency, it would be normalized so that the code was just some primary key reference:

``` xml
<MedicationRequest xmlns="http://hl7.org/fhir">
  <code key="123431232"/>
</MedicationRequest>
```

or something similar. Note: Whether to normalise or not is an engineering design question that has multiple different considerations, and very often product designers change their decision about this for engineering reasons with no associated change in functionality or requirements.

Resources, on the other hand, are designed for robustness and stability over efficiency. Using a key reference like the second example would require all the participants in an exchange to synchronize the key for the code, which is often not possible, and rarely stable.

In spite of this design criteria, it can still be useful and appropriate to store resources directly in a persistent store or database. Whether to do so depends on an application's requirements.

If an application's information requirements are nailed down - that is, well understood, clearly expressed, and not subject to uncontrolled change - then it is easy to design a data storage schema that is completely fit for purpose and highly efficient compared to storing FHIR resources. Classic Enterprise Information Systems (EHRs) tend to behave like this.

If, on the other hand, the application's information requirements are not at all nailed down, and implementers have to deal with whatever data comes in an ongoing basis, then resources are actually a very sound way to store an application's data. The [extensibility approach](extensibility.html) makes FHIR a particularly robust choice as the primary data store. Clinical Data Repositories tend to behave like this.

Most information systems fall somewhere between these 2 extremes, and determining whether to store resources directly is not straight forward. Some applications take a hybrid approach - storing FHIR resources natively, and storing a well-controlled subset of information in some expressly designed persistent scheme. The balance between these is driven by the stability of information requirements for different parts of the system.

<span id="versions"></span>
### Dealing with Multiple FHIR Versions

Very often, applications storing FHIR resources natively must deal with multiple different FHIR versions, since they are receiving information from different systems with different timelines for adopting ongoing FHIR releases.

Typically, such systems have functional requirements that include some variation of these:

-   The system must be able to make resources available in their original form for integrity/audit reasons
-   The system must present some unified view/analysis/process based on a coherent view of the information from resources with different FHIR versions

There is no single pattern to resolve these somewhat inconsistent requirements, but application designers can consider several different techniques for dealing with these kinds of requirements:

-   When storing resources, store the version of the resource alongside the resource
-   Maintain forward (and possibly backwards) conversions for the parts of resources that matter to the application (and see the [FHIR maintained version transforms](r3maps.html))
-   Store resources in both received and transformed state
-   Host multiple different end-points for different purposes

<span id="choice"></span>
### Technology Choices

A wide variety of technologies exist for storing resources natively, including:

-   Classic SQL servers with JSON support (built in, or added on top by the application)
-   NoSQL servers (e.g. [Mongodb](https://github.com/mongodb/mongo), [Couch](http://couchdb.apache.org/), [Hadoop](http://hadoop.apache.org/), or [Big Query](https://cloud.google.com/bigquery/))
-   Some [RDF](rdf.html) based store using the RDF in the turtle format, or in some native triple story (e.g. [Jena](https://jena.apache.org/))

This specification does not recommend any particular approach. The rest of this page describes general information management considerations that apply across all technologies.

<span id="joins"></span>
### Managing Joins

Most applications that store resources natively find the way references work in FHIR deserves particular focus. [References](references.html) can be absolute or relative URLs, they can be version specific or not, they might or might not follow FHIR's well-defined RESTful interface pattern, and they might or might not resolve in the local system. In addition, given the requirements consideration above, it's not always possible to enforce referential integrity when storing resources directly.

All the flexibility is required in various exchange scenarios, but it can present challenges for application design when building a coherent data store with resources.

Applications that store resources natively may want to extend the storage format with an element to capture the `resolved link` in addition to the existing reference/identifier in the [Reference](references.html) and [canonical](datatypes.html#canonical) data types.

The [RDF format](rdf.html) does this explicitly for references and codings ([fhir:reference](rdf.html#reference) and [fhir:concept](rdf.html#concept)).

Applications that store JSON, will have to remove the extension for exchange, unless a native FHIR extension is used, which might not be the most efficient way to store the resolved link.

> <span id="cfc"></span>
>
> **Note to balloters:** Is there enough interest to standardize an extension? Ballot comments are welcome.

\[%file newfooter%\]
