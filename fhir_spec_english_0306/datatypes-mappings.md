\[%settitle Data Type Mappings%\]
\[%file newnavbar%\]
&lt;%dtheader mappings%&gt;
Data Type Mappings
------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

This page provides mappings for the data types. There are mappings to [HL7 v2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185), [HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186), and (where appropriate) vCard (see [Mappings to Other Standards](mappings.html) for further information & status).

**Table of Contents**

<table>
<tbody>
<tr class="odd">
<td><strong>Primitive Types</strong><br />
[%diagram datatypes/allprimitivetypes.diagram 1%]</td>
<td><strong>Complex Types</strong><br />
[%diagram datatypes/alltypes.diagram 2%]</td>
</tr>
</tbody>
</table>

<span id="primitive"></span> <span id="primitives"></span>
### Primitive Types

See also [Base Definition](datatypes.html#primitive), [Examples](datatypes-examples.html#primitive), [Profiles & Extensions](datatypes-extras.html#primitive), [Detailed Descriptions](datatypes-definitions.html#primitive) and [R2 Conversions](datatypes-version-maps.html#primitive).

<span id="boolean"></span> <span id="integer"></span> <span id="string"></span> <span id="decimal"></span> <span id="uri"></span> <span id="base64Binary"></span> <span id="base64binary"></span> <span id="instant"></span> <span id="date"></span> <span id="dateTime"></span> <span id="datetime"></span> <span id="time"></span> <span id="patterns"></span> <span id="code"></span> <span id="oid"></span> <span id="uuid"></span> <span id="id"></span> &lt;%dtmappings primitives%&gt; <span id="Attachment"></span> <span id="attachment"></span>
### Attachment

See also [Base Definition](datatypes.html#Attachment), [Examples](datatypes-examples.html#Attachment), [Profiles & Extensions](datatypes-extras.html#Attachment), [Detailed Descriptions](datatypes-definitions.html#Attachment) and [R2 Conversions](datatypes-version-maps.html#Attachment).

&lt;%dtmappings Attachment%&gt; <span id="Identifier"></span> <span id="identifier"></span>
### Identifier

See also [Base Definition](datatypes.html#identifier), [Examples](datatypes-examples.html#identifier), [Profiles & Extensions](datatypes-extras.html#identifier), [Detailed Descriptions](datatypes-definitions.html#identifier) and [R2 Conversions](datatypes-version-maps.html#identifier).

&lt;%dtmappings Identifier%&gt; <span id="ii"></span>
#### V3 Mapping Issues for Identifier

When mapping an HL7 v3 II data type to a FHIR Identifier, there are two possibilities:

-   If the II has only a root and no extension, the FHIR Identifier will have a system of 'urn:ietf:rfc:3986' and the II.root will appear in Identifier.value
-   If the II has both a root and an extension, the II.root will be mapped to a URI - either a human-friendly URL or URN or (less preferred) an OID expressed as a urn, and the II.extension will be sent in Identifier.value

To search on a CDA `II.root` - which may appear in either `Identifier.system` or `Identifier.value`, use the syntax `identifier=|[root],[root]`.

See [v3 Mapping examples](datatypes-examples.html#ii)

<span id="Coding"></span> <span id="coding"></span>
### Coding

See also [Base Definition](datatypes.html#Coding), [Examples](datatypes-examples.html#Coding), [Profiles & Extensions](datatypes-extras.html#Coding), [Detailed Descriptions](datatypes-definitions.html#Coding) and [R2 Conversions](datatypes-version-maps.html#Coding).

&lt;%dtmappings Coding%&gt; <span id="CodeableConcept"></span> <span id="codeableconcept"></span>
### CodeableConcept

See also [Base Definition](datatypes.html#CodeableConcept), [Examples](datatypes-examples.html#CodeableConcept), [Profiles & Extensions](datatypes-extras.html#CodeableConcept), [Detailed Descriptions](datatypes-definitions.html#CodeableConcept) and [R2 Conversions](datatypes-version-maps.html#CodeableConcept).

&lt;%dtmappings CodeableConcept%&gt; <span id="Quantity"></span> <span id="quantity"></span> <span id="SimpleQuantity"></span> <span id="simplequantity"></span> <span id="age"></span> <span id="distance"></span> <span id="duration"></span> <span id="count"></span> <span id="Age"></span> <span id="Distance"></span> <span id="Duration"></span> <span id="Count"></span>
### Quantity

See also [Base Definition](datatypes.html#Quantity), [Examples](datatypes-examples.html#Quantity), [Profiles & Extensions](datatypes-extras.html#Quantity), [Detailed Descriptions](datatypes-definitions.html#Quantity) and [R2 Conversions](datatypes-version-maps.html#Quantity).

&lt;%dtmappings Quantity%&gt; <span id="Money"></span> <span id="Money"></span>
### Money

See also [Base Definition](datatypes.html#Money), [Examples](datatypes-examples.html#Money), [Profiles & Extensions](datatypes-extras.html#Money), [Detailed Descriptions](datatypes-definitions.html#Money) and [R2 Conversions](datatypes-version-maps.html#Money).

&lt;%dtmappings Money%&gt; <span id="Range"></span> <span id="range"></span>
### Range

See also [Base Definition](datatypes.html#Range), [Examples](datatypes-examples.html#Range), [Profiles & Extensions](datatypes-extras.html#Range), [Detailed Descriptions](datatypes-definitions.html#Range) and [R2 Conversions](datatypes-version-maps.html#Range).

&lt;%dtmappings Range%&gt; <span id="Ratio"></span> <span id="ratio"></span>
### Ratio

See also [Base Definition](datatypes.html#Ratio), [Examples](datatypes-examples.html#Ratio), [Profiles & Extensions](datatypes-extras.html#Ratio), [Detailed Descriptions](datatypes-definitions.html#Ratio) and [R2 Conversions](datatypes-version-maps.html#Ratio).

&lt;%dtmappings Ratio%&gt; <span id="Period"></span> <span id="period"></span>
### Period

See also [Base Definition](datatypes.html#Period), [Examples](datatypes-examples.html#Period), [Profiles & Extensions](datatypes-extras.html#Period), [Detailed Descriptions](datatypes-definitions.html#Period) and [R2 Conversions](datatypes-version-maps.html#Period).

&lt;%dtmappings Period%&gt; <span id="SampledData"></span> <span id="sampleddata"></span>
### SampledData

See also [Base Definition](datatypes.html#SampledData), [Examples](datatypes-examples.html#SampledData), [Profiles & Extensions](datatypes-extras.html#SampledData), [Detailed Descriptions](datatypes-definitions.html#SampledData) and [R2 Conversions](datatypes-version-maps.html#SampledData).

&lt;%dtmappings SampledData%&gt; <span id="HumanName"></span> <span id="humanname"></span>
### HumanName

See also [Base Definition](datatypes.html#HumanName), [Examples](datatypes-examples.html#HumanName), [Profiles & Extensions](datatypes-extras.html#HumanName), [Detailed Descriptions](datatypes-definitions.html#HumanName) and [R2 Conversions](datatypes-version-maps.html#HumanName).

&lt;%dtmappings HumanName%&gt;
**[vCard](http://tools.ietf.org/html/rfc6350) Mappings**

-   HumanName.text = vCard "FN" field
-   HumanName.use = use of the vCard "TYPE" parameter
-   HumanName.family, .given, .prefix, .suffix = parts of vCard "N" field. Note that there is no FHIR equivalent for the poorly defined "additional" name field. In FHIR, given names go in "middle" names
-   The vCard nickname corresponds to a name with the use "nickname"

<span id="Address"></span> <span id="address"></span>
### Address

See also [Base Definition](datatypes.html#Address), [Examples](datatypes-examples.html#Address), [Profiles & Extensions](datatypes-extras.html#Address), [Detailed Descriptions](datatypes-definitions.html#Address) and [R2 Conversions](datatypes-version-maps.html#Address).

&lt;%dtmappings Address%&gt; <span id="ContactPoint"></span> <span id="contactpoint"></span>
### ContactPoint

See also [Base Definition](datatypes.html#ContactPoint), [Examples](datatypes-examples.html#ContactPoint), [Profiles & Extensions](datatypes-extras.html#ContactPoint), [Detailed Descriptions](datatypes-definitions.html#ContactPoint) and [R2 Conversions](datatypes-version-maps.html#ContactPoint).

&lt;%dtmappings ContactPoint%&gt; <span id="Timing"></span> <span id="timing"></span>
### Timing

See also [Base Definition](datatypes.html#Timing), [Examples](datatypes-examples.html#Timing), [Profiles & Extensions](datatypes-extras.html#Timing), [Detailed Descriptions](datatypes-definitions.html#Timing) and [R2 Conversions](datatypes-version-maps.html#Timing).

&lt;%dtmappings Timing%&gt; <span id="Signature"></span> <span id="signature"></span>
### Signature

See also [Base Definition](datatypes.html#Signature), [Examples](datatypes-examples.html#Signature), [Profiles & Extensions](datatypes-extras.html#Signature), [Detailed Descriptions](datatypes-definitions.html#Signature) and [R2 Conversions](datatypes-version-maps.html#Signature).

&lt;%dtmappings Signature%&gt; <span id="Annotation"></span> <span id="annotation"></span>
### Annotation

See also [Base Definition](datatypes.html#Annotation), [Examples](datatypes-examples.html#Annotation), [Profiles & Extensions](datatypes-extras.html#Annotation), [Detailed Descriptions](datatypes-definitions.html#Annotation) and [R2 Conversions](datatypes-version-maps.html#Annotation).

&lt;%dtmappings Annotation%&gt;

\[%file newfooter%\]
