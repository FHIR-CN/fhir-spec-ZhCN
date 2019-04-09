\[%settitle Documentation Index%\]
\[%file newnavbar%\]
Documentation Index
===================

|                                                                                        |                                               |                                                                                         |
|----------------------------------------------------------------------------------------|-----------------------------------------------|-----------------------------------------------------------------------------------------|
| [FHIR Infrastructure](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process): [Informative](versions.html#std-process) |

This page provides an index to the key commonly used documentation pages for FHIR.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Framework</strong></p>
<ul>
<li><a href="conformance-rules.html">Conformance Rules</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="lifecycle.html">Resource Life Cycles</a></li>
<li><a href="references.html">References between Resources</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="compartmentdefinition.html">Compartments</a></li>
<li><a href="narrative.html">Narrative</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="extensibility.html">Extensibility</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="formats.html">Formats:</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a> <a href="xml.html">XML</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a>, <a href="json.html">JSON</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a>, &amp; <a href="rdf.html">RDF</a></li>
<li><a href="terminologies.html">Terminologies</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a> (<a href="terminologies-systems.html">Code Systems</a>, <a href="terminologies-valuesets.html">Value Sets</a>)</li>
<li><a href="fhirpath.html">FHIRPath</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="mappings.html">Mappings</a> to other standards</li>
</ul>
<p><strong>Version Management</strong></p>
<ul>
<li><a href="versions.html">Change Management &amp; Versioning</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="versioning.html">Managing Multiple FHIR Versions</a></li>
<li><a href="history.html">Version History</a></li>
<li><a href="diff.html">Differences to Release 3</a></li>
<li><a href="r3maps.html">Transforms between Release 3 and Release 4</a></li>
</ul>
<p><strong>Background</strong></p>
<ul>
<li>Overviews: <a href="overview.html">General</a>, <a href="overview-dev.html">Developers</a>,<br />
<a href="overview-clinical.html">Clinical</a>, <a href="overview-arch.html">Architects</a></li>
<li><a href="summary.html">1 page Summary</a> (<a href="fhir-glossy.pdf">Glossy</a>)</li>
<li><a href="help.html">Glossary</a> (<a href="glossary.html">X-Language</a>)</li>
<li><a href="license.html">License and Legal Terms</a></li>
<li><a href="credits.html">Community &amp; Credits</a></li>
<li><a href="todo.html">Outstanding Issues</a></li>
<li><a href="change.html">Appendix: Coming Challenges for Healthcare</a></li>
</ul></td>
<td><p><strong><a href="exchange-module.html">Exchanging Resources</a></strong></p>
<ul>
<li><a href="http.html"><strong>RESTful API (HTTP)</strong></a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a>
<ul>
<li><a href="search.html">Search</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a> (<a href="searchparameter-registry.html">Search Param Registry</a>)</li>
<li><a href="operations.html">Operations</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="async.html">Asynchronous Use</a></li>
<li><a href="graphql.html">Using GraphQL</a></li>
</ul></li>
<li><a href="documents.html">Documents</a></li>
<li><a href="messaging.html">Messaging</a></li>
<li><a href="services.html">Services</a></li>
<li><a href="storage.html">Persistence/Data bases</a></li>
</ul>
<p><strong>Base Types</strong></p>
<ul>
<li><a href="datatypes.html">Data Types (Base)</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="metadatatypes.html">Metadata Types</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="resource.html">Resource</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="domainresource.html">DomainResource</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="element.html">Element</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="backboneelement.html">BackboneElement</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="elementdefinition.html">ElementDefinition</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li>+ <a href="dosage.html">Dosage</a> (for medications)</li>
</ul>
<p><strong>Design Patterns</strong></p>
<ul>
<li><a href="fivews.html">FiveWs (Attribution)</a></li>
<li><a href="event.html">Event</a></li>
<li><a href="request.html">Request</a></li>
<li><a href="definition.html">Definition</a></li>
</ul></td>
<td><p><strong>Adopting &amp; Using FHIR</strong></p>
<ul>
<li><a href="profiling.html">Profiling FHIR</a> <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a></li>
<li><a href="workflow.html">FHIR Workflow</a></li>
<li><a href="downloads.html">Downloads - Schemas, Code, Tools</a></li>
<li><a href="versioning.html">Managing Multiple FHIR Versions</a></li>
<li><a href="validation.html">Validating Resources</a></li>
<li><a href="best-practices.html">Best Practices for Implementers</a></li>
<li><a href="mapping-language.html">Mapping Language</a> (<a href="mapping-tutorial.html">tutorial</a>)</li>
<li><a href="testing.html">Testing Implementations</a></li>
</ul>
<hr />
<div style="background-color: #ffe6e6">
<p><strong>Safety &amp; Security</strong></p>
<ul>
<li><a href="security.html">Security</a>, <a href="security-labels.html">Security Labels</a> &amp; <a href="signatures.html">Signatures</a></li>
<li><a href="safety.html">Clinical Safety</a></li>
</ul>
</div>
<p><strong>Implementation Advice</strong></p>
<ul>
<li><a href="managing.html">Managing Resource Identity</a></li>
<li><a href="resourceguide.html">Guide to Resources</a></li>
<li><a href="languages.html">Multi-language support</a></li>
<li><a href="updates.html">Variations between Submitted data and Retrieved data</a></li>
<li><a href="pushpull.html">Push vs Pull</a></li>
<li><a href="integrated-examples.html">Integrated Examples</a></li>
<li><a href="usecases.html">Common Use Cases</a></li>
</ul>
<p><a href="comparison.html"><strong>Relationship to Other Standards</strong></a></p>
<ul>
<li><a href="comparison-v2.html">v2 Messaging</a></li>
<li><a href="comparison-v3.html">v3 Messaging</a></li>
<li><a href="comparison-cda.html">CDA</a> (see also <a href="cda-intro.html">CDA on FHIR</a>)</li>
<li><a href="comparison-other.html">Other Specifications</a></li>
</ul></td>
</tr>
</tbody>
</table>

Note: the <a href="versions.html#std-process" class="normative-flag" title="Normative Content">N</a> symbol indicates that the target of the link contains [Normative content](versions.html#std-process).

\[%file newfooter%\]
