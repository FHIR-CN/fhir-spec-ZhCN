\[%settitle Implementation Support Module%\]
\[%file newnavbar%\]
|                                                                                    |                                                                                        |
|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| Work Group [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) & [\[%wgt aid%\]](%5B%wg%20aid%%5D) | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

<span id="root"></span>
Implementation Support Module
-----------------------------

<span id="intro"></span>
### Introduction

This section provides information which will be useful for FHIR implementers, including information about available libraries, tools, and other similar resources, as well as where to seek help.

<span id="index"></span>
### Index

In addition to the content below, a number of implementation resources can be found on the [Downloads Page](./downloads.html).

This module also contains some specific documentation that relates to issues commonly encountered by developers:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><ul>
<li><a href="testing.html">Testing FHIR</a> + <a href="testscript.html">TestScript</a> + <a href="testreport.html">TestReport</a></li>
<li><a href="validation.html">Validating Resources</a></li>
<li><a href="mapping-language.html">Mapping Language</a> (<a href="mapping-tutorial.html">Tutorial</a> &amp; <a href="structuremap.html">StructureMap</a>)</li>
<li><a href="fhirpath.html">FHIRPath</a></li>
<li><a href="usecases.html">Common Usages</a></li>
<li><a href="versions.html">Version Management Policy</a></li>
</ul></td>
<td><ul>
<li><a href="safety.html">Clinical Safety Considerations</a></li>
<li><a href="ehr-fm.html">How FHIR fits into an EHR</a></li>
<li><a href="managing.html">Managing Resource Identity</a></li>
<li><a href="pushpull.html">Interaction Patterns</a></li>
<li><a href="updates.html">Update Rules</a></li>
<li><a href="integrated-examples.html">Clinical Examples</a></li>
</ul></td>
<td><a href="comparison.html">Comparisons:</a>
<ul>
<li><a href="comparison-v2.html">v2</a> &amp;</li>
<li><a href="comparison-v3.html">v3 Messaging</a></li>
<li><a href="comparison-cda.html">CDA</a> + <a href="cda-intro.html">CDA on FHIR</a></li>
<li><a href="comparison-other.html">Other Specifications</a></li>
</ul></td>
</tr>
</tbody>
</table>

<span id="secpriv"></span>
### Security and Privacy

For more general considerations, see [the Security and Privacy module](secpriv-module.html).

<span id="uses"></span>
### Common Use Cases

#### For Client Developers and Testers: Reference Servers

The following reference servers have been created by the FHIR team and made available to help implementers test their code. While the reference servers are not considered to be a normative part of the FHIR specification, the maintainers make every effort to ensure that they are fully compliant.

Note that there are a large number of servers available for testing that are not listed here. A full list is available on the HL7 Confluence system [here](https://confluence.hl7.org/display/FHIR/Public+Test+Servers).

| Server Name         | Maintainer                              | Link                                           |
|---------------------|-----------------------------------------|------------------------------------------------|
| Healthintersections | Grahame Grieve                          | <http://fhir3.healthintersections.com.au/>     |
| Spark               | Furore Informatica                      | <http://spark.furore.com/>                     |
| HAPI                | University Health Network / James Agnew | <http://fhirtest.uhn.ca/>                      |
| sqlonfhir           | Telstra Health / Brian Postlethwaite    | <http://sqlonfhir-stu3.azurewebsites.net/fhir> |

#### For Developers: Reference Implementations (Libraries)

The following reference implementations are made available under an open-source license. These libraries may be used by developers to quickly add FHIR capabilities to their applications.

| Language   | Library       | Link                                          | License    |
|------------|---------------|-----------------------------------------------|------------|
| .NET / C\# | FHIR .NET API | <https://github.com/ewoutkramer/fhir-net-api> | BSD-3      |
| Java       | HAPI FHIR     | <http://hapifhir.io>                          | Apache 2.0 |
| Swift      | Swift FHIR    | <https://github.com/smart-on-fhir/Swift-FHIR> | Apache 2.0 |
| JavaScript | fhir.js       | <https://github.com/smart-on-fhir/fhir.js>    | MIT        |
| Python     | Client Py     | <https://github.com/smart-on-fhir/client-py>  | Apache 2.0 |
| Pascal     | FHIR Pascal   | <http://hl7.org/fhir/downloads.html>          | BSD-3      |

<span id="for_profilers"></span>
#### For Profilers

A number of tools are available to profilers wishing to create profiles for use in their implementations. A current list of tools can be found [here](https://confluence.hl7.org/pages/viewpage.action?pageId=35718864#ProfileTooling-Editing&AuthoringProfiles) on HL7 Confluence. (See the [conformance module](./conformance-module.html) for information on profiling.)

<span id="for_testers"></span>
#### For Testers

A number of tools are available to solution testers who want to test FHIR implementations for conformance to the FHIR specification. A current list of such tools can be found [here](https://confluence.hl7.org/display/FHIR/Testing+Platforms).

<span id="help"></span>
### Getting Help

The following are a few ways that implementers can seek help as they work with FHIR:

-   [FHIR Chat Channel / Zulip](http://chat.fhir.org/) (maintained by fhir.org)
-   [FHIR Community Forum](http://community.fhir.org/) (maintained by fhir.org)
-   [StackOverflow](http://stackoverflow.com/questions/tagged/hl7_fhir) (General tech community, use the tag `hl7_fhir`)

<span id="roadmap"></span>
### Developmental Roadmap

The reference servers and reference implementations generally try to keep up to date with recent changes to the FHIR specification. Each server may have multiple endpoints which are held to a specific version of the specification, but generally there will also be endpoints available for testing which conform to a very recent build.

Efforts are now underway to create a curated collection of quality test data which can be used by FHIR implementers to help test their applications. This collection will be made available when it is ready.

\[%file newfooter%\]
