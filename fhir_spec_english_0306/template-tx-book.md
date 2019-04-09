\[%settitle Codes defined in {txurl}%\]
\[%file newnavbar%\]
&lt;%pageheader%&gt;
Codes defined in &lt;%txurl%&gt;
================================

&lt;%txdef%&gt;

Formal value Set definition (identifier **&lt;%vstxurl%&gt;**): [XML](%3C%txname%%3E.xml.html) or [JSON](%3C%txname%%3E.json.html).

&lt;%txdesc%&gt;

&lt;%txsummary%&gt; &lt;%txusage%&gt;
See [the full registry of codes](terminologies-codes.html) defined as part of FHIR.

The OID for the value set is &lt;%vsoid%&gt; &lt;%txoid%&gt; (OIDs are not used in FHIR, but may be used in [HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186), or OID based terminology systems).

------------------------------------------------------------------------

Explanation of the columns that may appear on this page:

|            |                                                                                                                                                                                                       |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Id         | The internal identifier for the concept (when the value set defines its own codes)                                                                                                                    |
| Level      | A few code systems that FHIR defines are hierarchical - each code is assigned a level. See [Code System](codesystem.html#hierarchy) for further information.                                          |
| Source     | The source of the definition of the code (when the value set draws in codes defined elsewhere)                                                                                                        |
| Code       | The code (used as the code in the resource instance). If the code is in italics, this indicates that the code is not selectable ('Abstract')                                                          |
| Display    | The display (used in the *display* element of a [Coding](datatypes.html#Coding)). If there is no display, implementers should not simply display the code, but map the concept into their application |
| Definition | An explanation of the meaning of the concept                                                                                                                                                          |
| Comments   | Additional notes about how to use the code                                                                                                                                                            |

\[%file newfooter%\]
