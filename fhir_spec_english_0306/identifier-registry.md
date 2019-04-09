\[%settitle Defined Systems%\]
\[%file newnavbar%\]
&lt;%txheader idsystems%&gt;
Known Identifier Systems
------------------------

|                                                |                                             |                                                                                      |
|------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 3 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

The following names (URIs) may be used in the *system* element of the [Identifier](datatypes.html#Identifier) data type. If a URI is defined here, it SHALL be used in preference to any other identifying mechanism. If an identifier system is not listed here, the correct URI may be determined by working through the following list, in order:

-   the HL7 OID Registry
-   the documentation associated with the identifier
-   consulting the owner of the identifier
-   asking on the HL7 vocabulary mailing list

See also the [list of known coding systems](terminologies-systems.html) that can be used in the *system* element of the [Coding](datatypes.html#Coding) data type. Additional identifier systems may be registered on the HL7 FHIR registry at <http://hl7.org/fhir/registry>.

\[%impl-note%\] This list of URIs is incomplete and subject to change. Some values may be dropped and others will likely be added in the coming months as HL7 institutes formal processes around URIs in vocabulary. \[%end-note%\]
The URI column indicates the correct value to use in the [Identifier](datatypes.html#Identifier).`system`. The OID is provided for compatibility with [HL7 v2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185)/[CDA](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) based systems. Note that any URL in `http://example.org` is reserved for testing and documentation purposes.

identifier
URI
OID (for non-FHIR systems)
Type
Comment
URIs ([W3C](http://www.w3.org)): when the identifier is a URI
urn:ietf:rfc:3986 <span id="rn:ietf:rfc:3986"></span>
2.16.840.1.113883.4.873
As defined by [RFC 3986](http://www.ietf.org/rfc/rfc3986.txt) (with many schemes defined in many RFCs). For OIDs and UUIDs, use the URN form ([urn:oid:](http://www.ietf.org/rfc/rfc3001.txt) (note: lowercase) and [urn:uuid:](http://www.ietf.org/rfc/rfc4122.txt)
&lt;%identifierlist%&gt;

\[%file newfooter%\]
