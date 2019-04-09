\[%settitle Codes defined in {txurl}%\]
\[%file newnavbar%\]
&lt;%txheader vs%&gt; <span id="tx"></span>
Value Set for codes in &lt;%txurl%&gt;
======================================

This template should not be used any more &lt;%abort%&gt;

**Summary**

|                  |                   |
|------------------|-------------------|
| Code System URL: | &lt;%txurl%&gt;   |
| Value Set URL:   | &lt;%vstxurl%&gt; |
| Definition:      | &lt;%txdef%&gt;   |

Formal value Set definition : [XML](%3C%txname%%3E.xml.html) or [JSON](%3C%txname%%3E.json.html).

&lt;%conceptmaplistvs l0%&gt;
&lt;%txdesc%&gt;

&lt;%txsummary%&gt; &lt;%txusage%&gt;
**OIDs**

Code System OID:
&lt;%txoid%&gt;
Value Set OID:
&lt;%vsoid%&gt;
Note: these OIDs are not used in FHIR, but may be used in [HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186), or OID based terminology systems
See [the full registry of value sets](terminologies-valuesets.html) defined as part of FHIR.

------------------------------------------------------------------------

Explanation of the columns that may appear on this page:

|            |                                                                                                                                                                                                       |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Lvl        | A few code lists that FHIR defines are hierarchical - each code is assigned a level. See [Code System](codesystem.html#hierarchy) for further information.                                            |
| Source     | The source of the definition of the code (when the value set draws in codes defined elsewhere)                                                                                                        |
| Code       | The code (used as the code in the resource instance). If the code is in italics, this indicates that the code is not selectable ('Abstract')                                                          |
| Display    | The display (used in the *display* element of a [Coding](datatypes.html#Coding)). If there is no display, implementers should not simply display the code, but map the concept into their application |
| Definition | An explanation of the meaning of the concept                                                                                                                                                          |
| Comments   | Additional notes about how to use the code                                                                                                                                                            |

In addition, this page will include mappings to [HL7 v2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) or [HL7 v3](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=186) code where these have been defined.

\[%file newfooter%\]
