\[%settitle Extended Operations on the RESTful API%\]
\[%file newnavbar%\]
<span id="base"></span>
Defined RESTful API Operations
------------------------------

|                                                                                        |                                               |                                                                                         |
|----------------------------------------------------------------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------|
| [FHIR Infrastructure](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process): [Informative](versions.html#std-process) |

The [RESTful API](http.html) defines a set of common interactions (read, update, search, etc.) performed on a repository of typed resources. For further information concerning how operations are defined and invoked, see [Extended Operations on the RESTful API](operations.html).

This is a full list of the operations defined by this specification:

&lt;%operationslist%&gt;
Notes:

-   The special operations on the `meta` element also operate on previous versions of a resource (/\_history/). They are the only operations that can manipulate versions other than the "current" version.
-   Implementation Guides can define additional operations

### Services Defined by the FHIR specification

This specification defines a set of services, which are business level aggregations of [Resources](resourcelist.html) and Operations that provide a defined package of functionality that correspond to an identified business need.

Note that in addition to the services defined in this specification, many [implementation guides](http://fhir.org/implementation_guides) define business level services.

This table lists the services currently defined:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Name</strong></td>
<td><strong>Description</strong></td>
<td><strong>Links</strong></td>
</tr>
<tr class="even">
<td><a href="terminology-service.html">Terminology Service</a></td>
<td><p>A service that lets healthcare applications make use of codes, code systems, and value sets without having to become experts in the fine details of the code system, value set and concept map resources, and the underlying code systems and terminological principles. The service provides the following functionality:</p>
<ul>
<li>Defining and managing code systems, value sets, and concept maps</li>
<li>Code lookup &amp; Validation</li>
<li>Value Set Expansion (including for UI data entry support)</li>
<li>Value Set Validation</li>
<li>Translations between code systems</li>
<li>Subsumption testing and other logical analyses</li>
<li>Maintaining a closure table</li>
</ul></td>
<td><a href="capabilitystatement-terminology-server.html">Capability statement</a><br />
<a href="terminology-module.html">module</a></td>
</tr>
<tr class="odd">
<td>Conformance Service</td>
<td><p>A service that provides the underlying services needed to test whether resources conform to the rules defined by the FHIR specification and applicable implementation guides, and to help author implementation guides. The service provides the following functionality:</p>
<ul>
<li>Defining and managing structure definitions, data elements, Capability statements, search parameters, and operation &amp; compartment definitions</li>
<li>Resource Validation</li>
<li>Comparing and subsetting Capability statements</li>
</ul></td>
<td>To be developed</td>
</tr>
<tr class="even">
<td>Knowledge Repository</td>
<td><p>A service that provides basic retrieval and maintenance functionality for clinical knowledge artifacts. The service provides the following functionality:</p>
<ul>
<li>Defining and managing plan and activity definitions (e.g. order sets, protocols, decision support rules, documentation templates, etc.), libraries, and measures</li>
<li>Search and retrieval of knowledge artifacts</li>
<li>Data requirements analysis of knowledge artifacts</li>
</ul></td>
<td><a href="capabilitystatement-knowledge-repository.html">Capability statement</a><br />
<a href="clinicalreasoning-module.html">module</a></td>
</tr>
<tr class="odd">
<td>Measure Processor</td>
<td><p>A service that provides measure evaluation functionality. The service provides the following functionality:</p>
<ul>
<li>Searching and retrieval of measure definitions</li>
<li>Evaluation of measures for patients and populations</li>
<li>Data requirements analysis of measure definitions</li>
</ul></td>
<td><a href="capabilitystatement-measure-processor.html">Capability statement</a><br />
<a href="clinicalreasoning-module.html">module</a></td>
</tr>
</tbody>
</table>

Possible candidate Business Services for future versions:

-   Conversion Service (using mapping language, and also iso-semantic transforms in a resource)
-   Questionnaire related functionality (though see SDC)
-   Patient Registration & Reconciliation service (per IXS)
-   Medication Management service (home specific variant?)
-   Clinical Data Repository
-   Clinical Task Manager
-   Communications Manager
-   ...?

Note that there is already past & current work on some of these in HL7 (though not necessarily FHIR specific).

\[%file newfooter%\]
