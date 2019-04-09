\[%settitle Using CPT with FHIR%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Using CPT with FHIR
-------------------

|                                                  |                                             |                                                                                      |
|--------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt vocab%\]](%5B%wg%20vocab%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

### Summary

|                   |                                                                                        |
|-------------------|----------------------------------------------------------------------------------------|
| Source            | CPT is made managed by the [American Medical Association](http://www.ama-assn.org/ama) |
| System            | The URI <http://www.ama-assn.org/go/cpt> identifies the CPT code system                |
| Version           | Where a version is appropriate, use the year of release e.g. 2014                      |
| Code              | "Code" in the CPT tables (a 5-character code)                                          |
| Display           | "Description" in the CPT tables                                                        |
| Inactive          | Todo: Describe how it is determined which concepts are inactive                        |
| Subsumption       | No Subsumption relationships are defined by CPT                                        |
| Filter Properties | None defined                                                                           |

### Version Issues

CPT is released each October. CPT versions are identified simply by the year of their release.

### Example Usage

``` xml
  <coding>
    <system value="http://www.ama-assn.org/go/cpt"/>
    <version value="2014"/>
    <code value="31502"/>
    <display value="Tracheotomy tube change prior to establishment of fistula tract"/>
  </coding>
```

### Copyright/License Issues

CPT is a registered trademark of the American Medical Association. The AMA holds the copyright for the CPT coding system.

When Value Sets include CPT codes, the copyright element should include the text "CPT copyright 2014 American Medical Association. All rights reserved.".

### CPT Filter Properties

No filter properties have been defined at this time.

### Implicit Value Sets

The value set URL http://hl7.org/fhir/ValueSet/cpt-all is a value set that includes all CPT codes.

\[%file newfooter%\]
