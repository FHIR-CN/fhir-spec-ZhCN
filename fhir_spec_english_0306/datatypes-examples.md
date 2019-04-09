\[%settitle Data Type Examples%\]
\[%file newnavbar%\]
&lt;%dtheader examples%&gt;
Data Type Examples
------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

This page includes additional examples of the data types, based on common usages and questions

**Table of Contents**

**Primitive Types**
\[%diagram datatypes/allprimitivetypes.diagram 1%\]

**Complex Types**
\[%diagram datatypes/alltypes.diagram 2%\]

<span id="primitive"></span>
### Primitive Types

<span id="boolean"></span> <span id="integer"></span> <span id="string"></span> <span id="decimal"></span> <span id="uri"></span> <span id="base64Binary"></span> <span id="base64binary"></span> <span id="instant"></span> <span id="date"></span> <span id="dateTime"></span> <span id="datetime"></span> <span id="time"></span> <span id="patterns"></span> <span id="code"></span> <span id="oid"></span> <span id="uuid"></span> <span id="id"></span>
A boolean true value:

``` xml
<active value="true" />
```

A negative integer value:

``` xml
<score value="-14" />
```

A high-precision decimal value:

``` xml
<pi value="3.14159265358979323846264338327950288419716939937510" />
```

A stream of bytes, base64 encoded:

``` xml
<data value="/9j/4...KAP//Z" /> <!-- covers many lines -->
```

A Unicode string:

``` xml
<caption value="Noodles are called ?? in Chinese" />
```

A URI that points to a website:

``` xml
<reference value="http://hl7.org/fhir" />
```

A URI that is a urn:

``` xml
<id value="urn:isbn:0451450523" />
```

A date of birth:

``` xml
<date value="1951-06-04" />
```

An approximate date of birth:

``` xml
<date value="1951-06" />
```

The instant a document was created, including time zone:

``` xml
<instant value="2013-06-08T10:57:34+01:00" />
```

The instant a document was created, expressed in UTC, with milliseconds:

``` xml
<instant value="2013-06-08T09:57:34.2112Z" />
```

2:35pm in the afternoon:

``` xml
<time value="14:35" />
```

<span id="strings"></span>
### String Patterns

A URI that is the root oid of HL7:

``` xml
<root value="urn:oid:2.16.840.1.113883" />
```

A URI that is a uuid:

``` xml
<id value="urn:uuid:a5afddf4-e880-459b-876e-e4591b0acc11" />
```

A code:

``` xml
<code value="acq4+acq5" />
```

A code with single internal space:

``` xml
<code value="Question 4b" />
```

A numeric id:

``` xml
<id value="314" />
```

An alphanumeric id:

``` xml
<id value="alpha-gamma-14" />
```

<span id="Attachment"></span> <span id="attachment"></span>
### Attachment

See also [Base Definition](datatypes.html#Attachment), [Detailed Descriptions](datatypes-definitions.html#Attachment), [Mappings](datatypes-mappings.html#Attachment), [Profiles & Extensions](datatypes-extras.html#Attachment) and [R2 Conversions](datatypes-version-maps.html#Attachment).

A PDF document:

``` xml
  <document>
    <contentType value="application/pdf" />
    <language value="en" />
    <data value="/9j/4...KAP//Z" /> <!-- covers many lines -->
    <title value="Definition of Procedure" />
  </document>
```

``` json
  document : {
    contentType :  { value : "application/pdf" },
    language : { value : "en" },
    data :  { value : "/9j/4...KAP//Z"},
    title :  { value : "Definition of Procedure" }
  }
```

Since the JSON examples have the same structure as the XML, only XML is shown for the rest of the examples.

A reference to a DICOM image via WADO:

``` xml
  <image>
    <contentType value="application/dicom" />
    <url value="http://10.1.2.3:1000/wado?requestType=WADO&amp;wado_details..." />
    <hash value="EQH/..AgME" />
  </image>
```

<span id="Identifier"></span> <span id="identifier"></span>
### Identifier

See also [Base Definition](datatypes.html#Identifier), [Detailed Descriptions](datatypes-definitions.html#Identifier), [Mappings](datatypes-mappings.html#Identifier), [Profiles & Extensions](datatypes-extras.html#Identifier) and [R2 Conversions](datatypes-version-maps.html#Identifier).

**Examples**

A primary key from an application table (an OID in the space allocated by HL7 to some organization to further sub-allocate):

``` xml
  <identifier>
    <use value="official" />
    <system value="urn:oid:2.16.840.1.113883.16.4.3.2.5" />
    <value value="123" />
  </identifier>
```

A patient identifier defined by a hospital:

``` xml
  <identifier>
    <use value="official" />
    <system value="http://www.acmehosp.com/patients" />
    <value value="44552" />
    <period>
      <start value="2003-05-03" />
    </period>
  </identifier>
```

In this case, the period is used to track when the identifier was first assigned to the patient.

An identifier that refers to a patient FHIR resource on a particular system:

``` xml
  <identifier>
   <system value="urn:ietf:rfc:3986" />
   <value value="http://pas-server/xxx/Patient/443556" />
  </identifier>
```

This is not a resource reference - it's a logical reference by the patient identifier.

A UUID:

``` xml
  <identifier>
    <use value="temp" />
    <system value="urn:ietf:rfc:3986" />
    <value value="urn:uuid:a76d9bbf-f293-4fb7-ad4c-2851cac77162" />
  </identifier>
```

UUIDs are often used for temporary identifiers, though this is not necessary.

A DICOM OID:

``` xml
  <identifier>
    <system value="urn:dicom:uid" />
    <value value="urn:oid:2.16.124.113543.6003.189642796.63084.16748.2599092901" />
  </identifier>
```

The system value `urn:dicom:uid` can be used for any OID issued under the DICOM arrangements for OIDs. Such OIDs are typically found in DICOM messages, but this is not a requirement for using `urn:dicom:uid`

A US SSN:

``` xml
  <identifier>
    <use value="usual" />
    <type>
      <coding>
        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"/>
        <code value="SSN"/>
      </coding>
    </type>
    <system value="http://hl7.org/fhir/sid/us-ssn" />
    <value value="000111111" />
  </identifier>
```

Notes:

-   US SSNs are often presented like this: 000-11-1111, the dashes are for presentation and should be removed, as specified in the [definition of ssn-us](terminologies-systems.html#identifiersystems)
-   The use of "usual" means that this institution prefers to use SSN when identifying the patient

A medical record number assigned on 5-July 2009:

``` xml
  <identifier>
    <use value="usual" />
    <type>
      <coding>
        <system value="http://terminology.hl7.org/CodeSystem/v2-0203"/>
        <code value="MRN"/>
      </coding>
    </type>
    <system value="urn:oid:0.1.2.3.4.5.6.7" />
    <value value="2356" />
    <period>
      <start value="2009-07-05" />
    </period>
  </identifier>
```

<span id="ii"></span>
#### V3 Mapping Examples for Identifier

A root only:

      <v3:id root="0.1.2.3.4.5"/>

becomes:

``` xml
  <identifier>
    <system value="urn:ietf:rfc:3986" />
    <value value="urn:oid:0.1.2.3.4.5" />
  </identifier>
```

A root with an extension:

      <v3:id root="0.1.2.3.4.5" extension="13412"/>

becomes:

``` xml
  <identifier>
    <system value="urn:oid:0.1.2.3.4.5" />
    <value value="13412" />
  </identifier>
```

See [v3 Mapping Notes](datatypes-mappings.html#ii)

<span id="Coding"></span> <span id="coding"></span>
### Coding

See also [Base Definition](datatypes.html#Coding), [Detailed Descriptions](datatypes-definitions.html#Coding), [Mappings](datatypes-mappings.html#Coding), [Profiles & Extensions](datatypes-extras.html#Coding) and [R2 Conversions](datatypes-version-maps.html#Coding).

**Examples**

A simple code for headache, in ICD-10:

``` xml
  <code>
    <system value="http://hl7.org/fhir/sid/icd-10" />
    <code value="G44.1" />
  </code>
```

A SNOMED CT expression:

``` xml
  <problem>
    <system value="http://snomed.info/sct" />
    <code value="128045006:{363698007=56459004}" />
  </problem>
```

<span id="CodeableConcept"></span> <span id="codeableconcept"></span>
### CodeableConcept

See also [Base Definition](datatypes.html#CodeableConcept), [Detailed Descriptions](datatypes-definitions.html#CodeableConcept), [Mappings](datatypes-mappings.html#CodeableConcept), [Profiles & Extensions](datatypes-extras.html#CodeableConcept) and [R2 Conversions](datatypes-version-maps.html#CodeableConcept).

**Examples**

A simple code for headache initially coded in SNOMED CT (by picking the SNOMED CT code from a pick-list), and then translated to ICD-10:

``` xml
  <concept>
    <coding>
      <system value="http://hl7.org/fhir/sid/icd-10" />
      <code value="R51" />
    </coding>
    <coding>
      <system value="http://snomed.info/sct" />
      <code value="25064002" />
      <display value="Headache" />
      <userSelected value="true" />
    </coding>
    <text value="general headache" />
  </concept>
```

A concept represented in an institution's local coding systems for unit for which no UCUM equivalent exists:

``` xml
  <unit>
    <coding>
      <system value="urn:oid:2.16.840.1.113883.19.5.2" />
      <code value="tab" />
      <display value="Tablet" />
    </coding>
    <coding>
      <system value="http://unitsofmeasure.org" />
    </coding>
  </unit>
```

A SNOMED CT expression:

``` xml
  <diagnosis>
    <coding>
      <system value="http://snomed.info/sct" />
      <code value="128045006:{363698007=56459004}" />
    </coding>
    <text value="Cellulitis of the foot" />
  </diagnosis>
```

In this case, there is no display element, because no display is defined for SNOMED CT expressions.

Using the value set:

The results on a urinalysis strip:

``` xml
  <valueCoding>
    <system value="http://example.org/codes/simple-grades" />
    <code value="+" />
  </valueCoding>
```

And where the value set would be something like this:

``` xml
  <ValueSet xmlns="http://hl7.org/fhir">
    <text>
      <status value="generated"/>
      <div xmlns="http://www.w3.org/1999/xhtml">
        <p>Possible Clinistix codes: neg, trace, +, ++, and +++</p>
      </div>
    </text>
    <url value="http://hl7.org/fhir/ValueSet/clinistix"/>
    <name value="Codes for Clinistix"/>
    <publisher value="HL7"/>
    <contact>
        <name value="FHIR project team"/>
        <telecom>
          <system value="url"/>
          <value value="http://hl7.org/fhir"/>
        </telecom>
    </contact>
    <description value="Clinistix Codes"/>
    <status value="draft"/>
    <experimental value="true"/>
    <date value="2013-10-01"/>
    <compose>
      <include>
        <system value="http://example.org/codes/simple-grades"/>
        <concept>
          <code value="neg"/>
        </concept>
        <concept>
          <code value="trace"/>
        </concept>
        <concept>
          <code value="+"/>
        </concept>
        <concept>
          <code value="+"/>
        </concept>
        <concept>
          <code value="++"/>
        </concept>
        <concept>
          <code value="+++"/>
        </concept>
      </include>
    </compose>
  </ValueSet>
```

<span id="Quantity"></span> <span id="Quantity"></span> <span id="SimpleQuantity"></span> <span id="simpleQuantity"></span> <span id="Age"></span> <span id="Distance"></span> <span id="Duration"></span> <span id="Count"></span> <span id="age"></span> <span id="distance"></span> <span id="duration"></span> <span id="count"></span>
### Quantity

See also [Base Definition](datatypes.html#Quantity), [Detailed Descriptions](datatypes-definitions.html#Quantity), [Mappings](datatypes-mappings.html#Quantity), [Profiles & Extensions](datatypes-extras.html#Quantity) and [R2 Conversions](datatypes-version-maps.html#Quantity).

**Examples**

A duration:

``` xml
  <time>
    <value value="25" />
    <unit value="sec" />
    <system value="http://unitsofmeasure.org" />
    <code value="s" />
  </time>
```

A concentration where the value was out of range:

``` xml
  <result>
    <value value="40000" />
    <comparator value="&gt;" />
    <unit value="mcg/L" />
    <system value="http://unitsofmeasure.org" />
    <code value="ug" />
  </result>
```

An amount of prescribed medication:

``` xml
  <dose>
    <value value="3" />
    <unit value="capsules" />
    <system value="http://snomed.info/sct" />
    <code value="385049006" />
  </dose>
```

<span id="money"></span> <span id="Money"></span>
### Money

See also [Base Definition](datatypes.html#Money), [Detailed Descriptions](datatypes-definitions.html#Money), [Mappings](datatypes-mappings.html#Money), [Profiles & Extensions](datatypes-extras.html#Money) and [R2 Conversions](datatypes-version-maps.html#Money).

**Examples**

US Dollars:

``` xml
  <time>
    <value value="25.00" />
    <currency value="USD" />
  </time>
```

Vietnamese Dong:

``` xml
  <result>
    <value value="410000" />
    <currency value="VND" />
  </result>
```

A quantity that represents a currency amount - used in Ratio where Money is not used:

``` xml
  <numerator>
    <value value="25.45" />
    <unit value="US$" />
    <system value="urn:iso:std:iso:4217" />
    <code value="USD" />
  </numerator>
```

(See full example on [Ratio](#Ratio))

<span id="Range"></span> <span id="range"></span>
### Range

See also [Base Definition](datatypes.html#Range), [Detailed Descriptions](datatypes-definitions.html#Range), [Mappings](datatypes-mappings.html#Range), [Profiles & Extensions](datatypes-extras.html#Range) and [R2 Conversions](datatypes-version-maps.html#Range).

**Examples**

Range of Quantity (distance):

``` xml
  <estimate>
   <low>
     <value value="1.6" />
     <unit value="m" />
   </low>
   <high>
     <value value="1.9" />
     <unit value="m" />
   </high>
  </estimate>
```

<span id="Ratio"></span> <span id="ratio"></span>
### Ratio

See also [Base Definition](datatypes.html#Ratio), [Detailed Descriptions](datatypes-definitions.html#Ratio), [Mappings](datatypes-mappings.html#Ratio), [Profiles & Extensions](datatypes-extras.html#Ratio) and [R2 Conversions](datatypes-version-maps.html#Ratio).

**Examples**

Titer (Ratio of integer:integer)

``` xml
  <result>
   <numerator>
     <value value="1" />
   </numerator>
   <denominator>
     <value value="128" />
   </denominator>
  </result>
```

Unit cost (Ratio of Money(as Quantity):Quantity):

``` xml
  <charge>
   <numerator>
     <value value="103.50" />
     <unit value="US$" />
     <code value="USD" />
     <system value="urn:iso:std:iso:4217" />
   </numerator>
   <denominator>
     <value value="1" />
     <unit value="day" />
     <code value="day" />
     <system value="http://unitsofmeasure.org" />
   </denominator>
  </charge>
```

<span id="Period"></span> <span id="period"></span>
### Period

See also [Base Definition](datatypes.html#Period), [Detailed Descriptions](datatypes-definitions.html#Period), [Mappings](datatypes-mappings.html#Period), [Profiles & Extensions](datatypes-extras.html#Period) and [R2 Conversions](datatypes-version-maps.html#Period).

**Examples**

23rd May 2011 to 27th May, including 27th May:

``` xml
  <coverage>
   <start value="2011-05-23" />
   <end value="2011-05-27" />
  </coverage>
```

<span id="SampledData"></span> <span id="sampleddata"></span>
### SampledData

See also [Base Definition](datatypes.html#SampledData), [Detailed Descriptions](datatypes-definitions.html#SampledData), [Mappings](datatypes-mappings.html#SampledData), [Profiles & Extensions](datatypes-extras.html#SampledData) and [R2 Conversions](datatypes-version-maps.html#SampledData).

**Example**

The output from an EKG device:

``` xml
 <sampledData>
  <origin>
   <value value="0"/>
   <unit value="μV"/>
   <system value="http://unitsofmeasure.org"/>
   <code value="uV"/>
  </origin>
  <period value="2"/>
  <factor value="2.5"/>
  <dimensions value="1"/>
  <data value="-4 -13 -18 -18 -18 -17 -16 -16 -16 -16 -16 -17 -18 -18 -18 ...."/>
 </sampledData>
```

<span id="HumanName"></span> <span id="humanname"></span>
### HumanName

See also [Base Definition](datatypes.html#HumanName), [Detailed Descriptions](datatypes-definitions.html#HumanName), [Mappings](datatypes-mappings.html#HumanName), [Profiles & Extensions](datatypes-extras.html#HumanName) and [R2 Conversions](datatypes-version-maps.html#HumanName).

A Simple example

``` xml
<name>
  <family value="Everyman" />
  <given value="Adam" />
  <given value="A." />
</name>
```

Composite names

``` xml
<name>
  <family value="Contrata" />
  <given value="Mary Jane" />
</name>
```

These cases can be quite ambiguous - is "Mary Jane" one name, or two? Different systems, and data enterers may treat this differently, and the person themselves might not know. Parts are allowed to contain spaces, but systems should consider how to treat these cases. Composite names separated by "-" should be treated as a single name part.

A common pattern: a person is called by a name other than that expected from their official name (first given name in most cultures).

``` xml
<name>
  <use value="official" />
  <family value="Chalmers" />
  <given value="Peter" />
  <given value="James" />
</name>
<name>
  <use value="usual" />
  <given value="Jim" />
</name>
```

This same pattern is often encountered with immigrants, who retain their real name for official use, but adopt a localized name for everyday use:

``` xml
<name>
  <use value="official" />
  <family value="Sczypinski" />
  <given value="Piotr" />
  <given value="Andre" />
</name>
<name>
  <use value="usual" />
  <family value="Skipper" />
  <given value="Jim" />
</name>
```

Some people may also have a nickname that needs to be recorded:

``` xml
<name>
  <use value="official" />
  <family value="Brown" />
  <given value="Steven" />
</name>
<name>
  <use value="nickname" />
  <given value="Junior" />
</name>
```

Note that there is some ambiguity in real life as to whether a non-official name is the patient's `usual` name, or whether it's their `nickname`. In principle, nick names are used occasionally and informally, whereas the usual name is used consistently, and in formal contexts. However, there is no formal criteria for the differentiating these usages, and even within a culture, people may vary in their cases.

Karen van Hentenryck is of Dutch origin, and the "van" is a voorvoegsel.

``` xml
<name>
  <use value="official" />
  <family value="van Hentenryck" >
    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-own-prefix" >
       <valueString value="van" />
    </extension>
    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-own-name">
      <valueString value="Hentenryck" />
    </extension>
  </family>
  <given value="Karen" />
</name>
```

See [the Extensibility Example for more information](extensibility-examples.html) about the use of extensions.

Complex example from Germany: Dr.phil. Regina Johanna Maria von Hochheim-Weilenfels, NCFSA. This example shows extensive use of multiple given names, prefixes, suffixes, for academic degrees, nobility titles, and professional designations.

``` xml
<name>
  <use value="official" />
  <family value="von Hochheim-Weilenfels">
    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-own-prefix" >
      <valueString value="von" />
    </extension>
    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-own-name">
      <valueString value="Hochheim-Weilenfels" />
    </extension>    
  </family>
  <given value="Regina" />
  <given value="Johanna" />
  <given value="Maria" />
  <prefix value="Dr. phil.">
    <extension url="http://hl7.org/fhir/StructureDefinition/iso21090-EN-qualifier" >
      <valueCode value="AC" />
    </extension>
  </prefix>
  <suffix value="NCFSA" />
</name>
<name>
  <use value="maiden" />
  <family value="Hochheim" />
</name>
```

This example makes use of the ISO 21090 extensions to carry the rarely used ISO 21090 qualifier attribute "AC".

Japanese example in the three forms: ideographic (Kanji), syllabic (Hiragana) and alphabetic (Romaji).

``` xml
<name>
  <extension url="http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation">
      <valueCode value="IDE" />
  </extension>
  <family value="木村" />
  <given value="通男" />
  </name>
<name>
  <extension url="http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation">
      <valueCode value="SYL" />
  </extension>
 <family value="きむら" />
 <given value="みちお" />
</name>
<name>
  <extension url="http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation">
      <valueCode value="ABC" />
  </extension>
  <family value="KIMURA" />
  <given value="MICHIO" />
</name>
```

The three forms may be differentiated by the character subset each contains, but some systems require the differentiation to be made manually, which can be done using the ED representation extension.

Russian example in the two forms: Cyrillic and Latin:

``` xml
<name>
  <family value="ЕМЕЛИН" />
  <given value="ИВАН" />
  <given value="ВЛАДИМИРОВИЧ" />
</name>
<name>
  <family value="EMELIN" />
  <given value="IVAN" />
  <given value="VLADIMIROVICH" />
</name>
```

In Russian usage, these names are known as the domestic and foreign names respectively. The two forms are differentiated by the character subset each contains.

Scandinavian example: Erikson is the family name. Jan Erik are the given names, and Östlund the family name of the mother, which is taken as a Mellannamn.

``` xml
<name>
  <use value="official" />
  <family value="Erikson" />
  <given value="Jan" />
  <given value="Erik" />
  <given value="Östlund">
    <extension url="http://hl7.org/fhir/StructureDefinitioniso-20190#name-qualifier" >
      <valueCoding>
         <code value="MID" />
         <system value="http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifier2" />
      </valueCoding>
    </extension>
  </given>
</name>
```

This example makes use of the ISO 21090 extension to carry the culture specific ISO 21090 qualifier attribute "MID" for the Mellannamn.

Then Jan Erikson has a daughter, Karin, with his wife Margrete Hansen. The first communication of the new born name is "Margrete Jente" (Margrete's Girl) and the mother's family name, not the given name (Karin). The father's Family name is not used at all. This is a known temporary name assigned directly after the birth of the child.

``` xml
<name>
  <use value="temp" />
  <!-- use could be OR+OLD, depends how record keeping is done -->
  <family value="Hansen" />
  <given value="Margrete Jente" />
</name>
```

The baby's name is subsequently changed to the fathers' family name, and to use the mother's name as mellomnamn.

``` xml
<name>
  <use value="official" />
  <family value="Erikson" />
  <given value="Karin" />
  <given value="Hansen">
    <extension url="http://hl7.org/fhir/StructureDefinitioniso-20190#name-qualifier" >
      <valueCoding>
         <code value="MID" />
         <system value="http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifier2" />
      </valueCoding>
    </extension>
  </given>
</name>
```

Later, Karin gets married to Per Berg, and decides to adopt Berg as her family name, and also decides to use Erikson as the mellom navn. (Note: Karin could have chosen to use another mellom navn, e.g. the family name of her mother, her father or other family names as specified by naming laws of the country in question).

``` xml
<name>
  <use value="old" />
  <family value="Erikson" />
  <given value="Karin" />
  <given value="Hansen">
    <extension url="http://hl7.org/fhir/StructureDefinitioniso-20190#name-qualifier" >
      <valueCoding>
        <code value="MID" />
        <system value="http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifier2" />
      </valueCoding>
    </extension>
  </given>
</name>
<name>
  <use value="official" />
  <family value="Berg" />
  <given value="Karin" />
  <given value="Erikson">
    <extension url="http://hl7.org/fhir/StructureDefinitioniso-20190#name-qualifier" >
      <valueCoding>
        <code value="MID" />
        <system value="http://terminology.hl7.org/CodeSystem/v3-EntityNamePartQualifier2" />
      </valueCoding>
    </extension>
  </given>
</name>
<name>
  <use value="usual" />
  <family value="Berg" />
  <given value="Karin" />
</name>
```

#### W3C International Examples

These examples are taken from the [W3C International Examples](http://www.w3.org/International/questions/qa-personal-names), which should be consulted for further information.

A patronymic is "The part of a name that links to the genealogy":

``` xml
<name>
  <text value="Björk Guðmundsdóttir"/>
  <family value="Guðmundsdóttir"/>
  <given value="Björk"/>
</name>
```

A patronymic with a "son/daughter of" appellation:

``` xml
<name>
  <text value="Isa bin Osman"/>
  <family value="bin Osman"/>
  <given value="Isa"/>
</name>
```

A Chinese name with a generational name:

``` xml
<name>
  <text value="毛泽东"/> <!-- left to right -->
  <family value="毛"/>
  <given value="泽东"/>
</name>
<name>
  <text value="Mao Ze Dong"/> <!-- left to right -->
  <family value="Mao"/>
  <given value="Ze Dong"/>
</name>
```

Note that many systems in China do not store family and given names separately, and just use `text`.

Additional Western name (see also example above):

``` xml
<name>
  <use value="official" />
  <family value="Yao" />
  <given value="Ming" />
</name>
<name>
  <use value="usual" />
  <given value="Fred" />
</name>
```

Composite Family name:

``` xml
<name>
  <family value="Carreño Quiñones" >
    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-fathers">
        <valueString value="Carreño" />
    </extension>
    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-mothers">
        <valueString value="Quiñones" />
    </extension>
  </family>
  <given value="María-Jose" />
</name>
```

Note that it is optional whether to break down the family name to mother's and father's parts, and not always of value, as in this Brazilian Example:

``` xml
<name>
  <family value="Santos Tavares Melo Silva" />
  <given value="José" />
  <given value="Eduardo" />
</name>
```

Note that this naming pattern can become quite extreme ("Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga"). A more practical example is

``` xml
<name>
  <family value="Costa Teixeira" >
    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-fathers">
        <valueString value="Costa" />
    </extension>
    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-mothers">
        <valueString value="Teixeira" />
    </extension>
  </family>
  <given value="Manuel" />
</name>
```

After marriage, this may change to

``` xml
<name>
  <family value="Costa Teixeira Sanches" >
    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-fathers">
        <valueString value="Costa" />
    </extension>
    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-mothers">
        <valueString value="Teixeira" />
    </extension>
    <extension url="http://hl7.org/fhir/StructureDefinition/humanname-partners-name">
        <valueString value="Sanches" />
    </extension>
  </family>
  <given value="Manuel" />
</name>
```

Russian Examples (using Cyrillic):

``` xml
<name>
  <family value="Ельцин" />
  <given value="Борис" />
  <given value="Николаевич" />
</name>

<name>
  <family value="Ельцина" />
  <given value="Наина" />
  <given value="Иосифовна" />
</name>
```

Example with Initial:

``` xml
<name>
  <family value="Public" />
  <given value="John" />
  <given value="Q." />
</name>
```

Other Examples:

``` xml
<name>
  <text value="Velikkakathu Sankaran Achuthanandan"/>
  <family value="Velikkakathu" />
  <given value="Sankaran" />
  <given value="Achuthanandan" />
</name>
<name>
  <text value="Kogaddu Birappa Timappa Nair"/>
  <family value="Nair" />
  <given value="Birappa" />
  <given value="Timappa" />
  <prefix value="Kogaddu" />
</name>
<name>
  <text value="Aditya Pratap Singh Chauhan"/>
  <family value="Singh" />
  <given value="Aditya" />
  <given value="Pratap" />
  <suffix value="Chauhan" />
</name>
<name>
  <text value="Madurai Mani Iyer"/>
  <given value="Mani" />
  <prefix value="Madurai" />
  <suffix value="Iyer" />
</name>
<name>
  <text value="Abu Karim Muhammad al-Jamil ibn Nidal ibn Abdulaziz al-Filistini"/>
  <family value="ibn Nidal ibn Abdulaziz" />
  <given value="Muhammad" />
  <given value="al-Jamil" />
  <prefix value="Abu Karim" />
  <suffix value="al-Filistini" />
</name>
```

*Todo: need to discuss this with Indian / Arabic implementers*. Note that collecting and storing the *text* element makes the primary purpose of the structured parts for index/searching, and fidelity of the name parts is not critical.

<span id="Address"></span> <span id="address"></span>
### Address

See also [Base Definition](datatypes.html#Address), [Detailed Descriptions](datatypes-definitions.html#Address), [Mappings](datatypes-mappings.html#Address), [Profiles & Extensions](datatypes-extras.html#Address) and [R2 Conversions](datatypes-version-maps.html#Address).

Note about these examples: the most important element in an address is the 'text' element - this defines what is printed on the envelope, the actual postal address. The other data elements are provided to support either data analysis based on a patient's address, or for the many systems that exchange fully structured addresses specific to a particular culture. For this reason, these examples focus on the structured data elements of the address.

**Example**

HL7 office's address.

``` xml
  <address>
   <use value="work" />
   <text value="1050 W Wishard Blvd
RG
         5th floor
Indianapolis, IN 46240" />
   <line value="1050 W Wishard Blvd" />
   <line value="RG 5th floor" />
   <city value="Indianapolis" />
   <state value="IN" />
   <postalCode value="46240" />
  </address>
```

A UK example address, with the county 'HUDDERSFIELD'.

``` xml
  <address>
    <text value="1 Back Lane&#13;&#10;Holmfirth&#13;&#10;HUDDERSFIELD&#13;&#10;HD7 1HQ"/>
    <line value="1 Back Lane"/>
    <city value="Holmfirth"/>
    <district value="HUDDERSFIELD"/>
    <postalCode value="HD7 1HQ"/>
  </address>
```

A temporary postal address - i.e. an address that it doesn't make sense to try and visit.

``` xml
  <address>
    <use value="temp"/> 
    <type value="postal"/>
    <line value="PO Box 31445"/>
    <city value="Erewhon"/>
    <postalCode value="0001"/>
  </address>
```

The next set of examples are taken from the official [international postal union](http://www.upu.int) examples.

|                           |                                               |
|---------------------------|-----------------------------------------------|
| Rue Lougoraïa 12, app. 10 | thoroughfare type, name and number, apartment |
| Korolevo                  | locality                                      |
| 223016 NOVY DVOR          | postcode + post office name                   |
| Minsk                     | District name of district                     |
| Minsk                     | Region name of region                         |
| BELARUS                   | Country                                       |

``` xml
  <address>
    <line value="Rue Lougoraïa 12, app. 10"/>
    <city value="Korolevo"/>
    <district value="Minsk"/>
    <state value="Minsk" />
    <country value="BELARUS" />
  </address>
```

|                       |                     |
|-----------------------|---------------------|
| Protea Apt 12         | apartment number    |
| 22 Ally Hassan Mwinyi | premise + street    |
| 14111 MSASANI         | postcode + locality |
| DAR ES SALAM          | province            |
| TANZANIA              | country             |

``` xml
  <address>
    <line value="Protea Apt 12"/>
    <line value="22 Ally Hassan Mwinyi"/>
    <city value="MSASANI"/>
    <state value="DAR ES SALAM" />
    <postalCode value="14111"/>
    <country value="TANZANIA" />
  </address>
```

|                      |                          |
|----------------------|--------------------------|
| 15 Shiri             | premise + sub-locality 2 |
| Kimashuku Village    | sub-locality             |
| 25204 MACHAME KUSINI | postcode + locality      |
| HAI                  | sub-province             |
| KILIMANJARO          | province                 |
| TANZANIA             | country                  |

``` xml
  <address>
    <extension url="http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-precinct">
      <valueCode value="Kimashuku Village"/>
    </extension>
    <line value="15 Shiri"/>
    <city value="MACHAME KUSINI"/>
    <district value="HAI"/>
    <state value="KILIMANJARO" />
    <postalCode value="25204"/>
    <country value="TANZANIA" />
  </address>
```

|                                             |                        |
|---------------------------------------------|------------------------|
| 705-1104                                    | building number + door |
| 56, Dalgubeol-daero 323beon-gil, Suseong-gu | street                 |
| Daegu                                       | city                   |
| Rep. OF KOREA                               | country                |
| 706-907                                     | postcode               |

``` xml
  <address>
    <line value="705-1104"/>
    <line value="56, Dalgubeol-daero 323beon-gil, Suseong-gu"/>
    <city value="Daegu"/>
    <country value="Rep. OF KOREA" />
    <postalCode value="706-907"/>
  </address>
```

|                          |                |
|--------------------------|----------------|
| 3F                       | building floor |
| 42, Toegye-ro 77beon-gil | street         |
| Chuncheon-si             | city           |
| Gangwon-do               | province       |
| Rep. OF KOREA            | country        |
| 200-066                  | postcode       |

``` xml
  <address>
    <line value="3F"/>
    <line value="42, Toegye-ro 77beon-gil"/>
    <city value="Chuncheon-si"/>
    <state value="Gangwon-do" />
    <country value="Rep. OF KOREA" />
    <postalCode value="200-066"/>
  </address>
```

|               |                        |
|---------------|------------------------|
| Ga-B101       | building number + door |
| 136, Sesil-ro | street                 |
| Busan         | city                   |
| Rep. OF KOREA | country                |
| 612-837       | postcode               |

``` xml
  <address>
    <line value="Ga-B101"/>
    <line value="136, Sesil-ro"/>
    <city value="Busan"/>
    <country value="Rep. OF KOREA" />
    <postalCode value="612-837"/>
  </address>
```

<span id="ContactPoint"></span> <span id="contactpoint"></span>
### ContactPoint

See also [Base Definition](datatypes.html#ContactPoint), [Detailed Descriptions](datatypes-definitions.html#ContactPoint), [Mappings](datatypes-mappings.html#ContactPoint), [Profiles & Extensions](datatypes-extras.html#ContactPoint) and [R2 Conversions](datatypes-version-maps.html#ContactPoint).

**Example**

Home phone number:

``` xml
  <telecom>
   <system value="phone" />
   <value value="(555) 675 5745" />
   <use value="home" />
  </telecom>
```

In ISO 21090, [CDA](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) and other [HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) specifications, the TEL data type requires that the telephone number be represented as a formal URI in [RFC 3166](http://www.ietf.org/rfc/rfc3966.txt) syntax. Many CDA documents violate this rule, since the telephone numbers are not collected from the user in conformance with the underlying rules (particularly around extensions, notes about use, etc.), so the base FHIR type does not require the phone number to be conformant. An ISO 21090 extension can be used to convey this if desired:

**Example**

Formally correct URI:

``` xml
  <telecom>
    <extension url="http://hl7.org/fhir/StructureDefinition/iso21090-TEL-address" >
      <valueUri value="tel:+15556755745" />
    </extension>
    <system value="phone" />
    <value value="(555) 675 5745" />
    <use value="home" />
  </telecom>
```

<span id="Timing"></span> <span id="timing"></span>
### Timing

See also [Base Definition](datatypes.html#Timing), [Detailed Descriptions](datatypes-definitions.html#Timing), [Mappings](datatypes-mappings.html#Timing), [Profiles & Extensions](datatypes-extras.html#Timing) and [R2 Conversions](datatypes-version-maps.html#Timing).

**Example**

A series of appointments for radiotherapy:

``` xml
  <schedule>
    <event value="2012-01-07T09:00:00+10:00" />
    <event value="2012-01-14T09:00:00+10:00" />
    <event value="2012-01-22T11:00:00+10:00" />
  </schedule>
```

BID (twice a day) (no start or end specified):

``` xml
  <schedule>
   <repeat>
     <frequency value="2" />
     <period value="1" />
     <periodUnit value="d" />
   </repeat>
  </schedule>
```

1/2 an hour before breakfast for 10 days from 23-Dec 2011:

``` xml
  <schedule>
    <repeat>
      <boundsPeriod>
        <start value="2011-12-23" />
        <end value="2012-01-02" />
      </boundsPeriod>
      <when value="ACM" />
      <offset value="30" />
    </repeat>
  </schedule>
```

Note that the end date is inclusive like the end date of a Period.

TID, for 14 days:

``` xml
  <schedule>
    <repeat>
      <boundsDuration>
        <value value="14" />
        <unit value="d" />
        <system value="http://unitsofmeasure.org" />
        <code value="d" />
      </boundsDuration>
      <frequency value="3" />
      <period value="1" />
      <periodUnit value="d" />
    </repeat>
  </schedule>
```

BID, start on 7/1/2015 at 1:00 PM:

``` xml
  <schedule>
    <repeat>
      <boundsPeriod>
        <start value="2015-07-01T13:00:00" />
      </boundsPeriod>
      <frequency value="2" />
      <period value="1" />
      <periodUnit value="d" />
    </repeat>
  </schedule>
```

Take just once, with no specified time

``` xml
  <schedule>
    <repeat>
      <count value="1" />
    </repeat>
  </schedule>
```

<span id="Signature"></span> <span id="signature"></span>
### Signature

See also [Base Definition](datatypes.html#Signature), [Detailed Descriptions](datatypes-definitions.html#Signature), [Mappings](datatypes-mappings.html#Signature), [Profiles & Extensions](datatypes-extras.html#Signature) and [R2 Conversions](datatypes-version-maps.html#Signature).

**Example**

todo

``` xml
  <signature>
    <!-- todo -->
  </signature>
```

<span id="Annotation"></span> <span id="annotation"></span>
### Annotation

See also [Base Definition](datatypes.html#Annotation), [Detailed Descriptions](datatypes-definitions.html#Annotation), [Mappings](datatypes-mappings.html#Annotation), [Profiles & Extensions](datatypes-extras.html#Annotation) and [R2 Conversions](datatypes-version-maps.html#Annotation).

**Example**

todo

``` xml
  <Annotation>
    <!-- todo -->
  </Annotation>
```

\[%file newfooter%\]
