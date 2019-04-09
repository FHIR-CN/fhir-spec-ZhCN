\[%settitle FHIR Documents%\]
\[%file newnavbar%\]
Digital Signatures
==================

|                                                |                                               |                                                                                      |
|------------------------------------------------|-----------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

This specification recommends the use of [W3C Digital Signatures](http://www.w3.org/TR/xmldsig-core/) or [JSON Digital Signatures](https://tools.ietf.org/html/rfc7515) for digital signatures. Resources can be signed using the [Provenance](provenance.html) resource to carry a [detached digital signature](http://www.w3.org/TR/xmldsig-core/#def-SignatureDetached). The [Signature datatype](datatypes.html#signature) is available to support various signature types including non-repudiation purposes. Further details on creation and validation of [Signatures are defined.](datatypes.html#signature)

In addition, [documents may be signed](documents.html#signatures) using an [enveloped](http://www.w3.org/TR/xmldsig-core/#def-SignatureEnveloped) signature. A specification for enveloped signature is profiled in the [IHE DSG profile](http://wiki.ihe.net/index.php?title=Document_Digital_Signature).

Neither of these definitions prohibits policies that accept the use of other ways of using digital signatures or scanned wet signatures.

\[%stu-note%\] <span id="dstu"></span> The use of signatures with RESTful interfaces is a poorly understood area, and we would welcome reports of implementation experience. See [discussion on use of Digital Signature in FHIR](https://confluence.hl7.org/display/FHIR/Digital+Signatures)
Feedback is welcome [here](http://hl7.org/fhir-issues). \[%end-note%\]

\[%file newfooter%\]
