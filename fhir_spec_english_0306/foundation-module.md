\[%settitle Foundation Module%\]
\[%file newnavbar%\]
|                                                |                                                                                        |
|------------------------------------------------|----------------------------------------------------------------------------------------|
| Work Group [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

<span id="root"></span>
Foundation Module
-----------------

<span id="intro"></span>
The Foundation Module is responsible for the overall infrastructure of the FHIR specification. Every implementer works with the content in the foundation module whichever way they use FHIR.

<span id="index"></span>
The Foundation Module maintains most of the basic [documentation](documentation.html) for the FHIR specification. In addition, the Foundation Module includes the following resources:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p><strong>Foundation Framework</strong></p>
<ul>
<li><a href="resource.html">Resource</a></li>
<li><a href="domainresource.html">DomainResource</a></li>
<li><a href="basic.html">Basic</a></li>
<li><a href="binary.html">Binary</a></li>
<li><a href="bundle.html">Bundle</a></li>
</ul></td>
<td><p>Content Management Resources.</p>
<ul>
<li><a href="questionnaire.html">Questionnaire</a></li>
<li><a href="questionnaireresponse.html">QuestionnaireResponse</a></li>
<li><a href="list.html">List</a></li>
<li><a href="composition.html">Composition</a></li>
<li><a href="documentreference.html">DocumentReference</a></li>
<li><a href="documentmanifest.html">DocumentManifest</a></li>
</ul></td>
<td><p>Data Exchange Resources.</p>
<ul>
<li><a href="operationoutcome.html">OperationOutcome</a></li>
<li><a href="parameters.html">Parameters</a></li>
<li><a href="subscription.html">Subscription</a></li>
<li><a href="messageheader.html">MessageHeader</a></li>
<li><a href="messagedefinition.html">MessageDefinition</a></li>
</ul></td>
</tr>
</tbody>
</table>

<span id="secpriv"></span>
### Relationships with other modules

-   All the other modules depend on the foundation module
-   The [Exchange module](exchange-module.html) builds on the foundation model by defining the recognized methods for exchange of resources
-   The [Terminology module](terminology-module.html) provides the formal basis for using Concepts defined in Code Systems in the definitions
-   The [Conformance module](conformance-module.html) provides the basis for extending the foundation for national and local use
-   The [Security & Privacy](secpriv-module.html) provides the linking framework to external standards for security and privacy
-   The [Implementation Support module](implsupport-module.html) builds on the foundation to provide testing and reference implementations

<span id="roadmap"></span>
### Developmental Roadmap

Several components of the foundation module have now reached normative status. The focus over the next 18-24 months as the 5th release of FHIR is prepared is to focus on some of the non-normative elements and move them towards normative status, such as Questionnaire, List, DocumentReference and Subscription. Exactly which resources will be candidates for normative release will be driven, in part, by the degree of implementation - and whether that implementation is communicated back to HL7.

\[%file newfooter%\]
