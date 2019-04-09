\[%settitle Using UCUM with FHIR%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Using UCUM with FHIR
--------------------

|                                                  |                                             |                                                                                      |
|--------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt vocab%\]](%5B%wg%20vocab%%5D) Work Group | [Maturity Level](versions.html#maturity): 5 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

The [Units of Measure](http://unitsofmeasure.org) Coding System (UCUM) is recommended for use with the [Quantity](datatypes.html#Quantity) data type.

### Summary

|                   |                                                                                                                                                                                                                     |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Source            | UCUM is made available by the [Regenstrief Institute, Inc](https://www.regenstrief.org/) and The UCUM Organization at <http://unitsofmeasure.org>                                                                   |
| System            | The URI <http://unitsofmeasure.org> identifies UCUM codes                                                                                                                                                           |
| Version           | Where a version is used, it should be the standard UCUM version e.g. 1.9. There is no need to use version in the [Coding](datatypes.html#Coding) data type, only in [Value sets](valueset.html) that use UCUM codes |
| Code              | Valid expressions using the case sensitive symbols                                                                                                                                                                  |
| Display           | There is no defined display; the UCUM code is used directly for the display                                                                                                                                         |
| Inactive          | A few codes in UCUM are marked as deprecated (e.g. ppb, pptr)                                                                                                                                                       |
| Subsumption       | No Subsumption relationships are defined by UCUM                                                                                                                                                                    |
| Filter Properties | Two filter properties are defined as described below                                                                                                                                                                |

### Copyright

UCUM is Copyright © 1999-2013 Regenstrief Institute, Inc. and The UCUM Organization, Indianapolis, IN. All rights reserved. See <a href="http://unitsofmeasure.org/trac//wiki/TermsOfUse" class="wiki">TermsOfUse</a> for details.

### UCUM Expressions

UCUM is inherently a compositional code system; almost all UCUM codes are expressions composed using the UCUM expression syntax. Many servers, however, do not implement full support for the syntax, and rely on a large library of pre-built valid UCUM codes (FHIR includes a [common UCUM codes value set](valueset-ucum-common.html) for this purpose).

UCUM us always documented as a compositional code system. If a server does not support the full grammar, it should document that in its [Terminology Capabilities Statement](terminologycapabilities-definitions.html#TerminologyCapabilities.codeSystem.version.compositional).

<span id="filters"></span>
### UCUM Filter Properties

This section documents the property filters that can be used with the UCUM code system in value set composition statements.

#### Property filter

|                    |                                                                                                                                                                            |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Description        | Restricts the expression to a describe a particular UCUM base property                                                                                                     |
| Property Name      | property                                                                                                                                                                   |
| Operations Allowed | =                                                                                                                                                                          |
| Values Allowed     | \[string name of property\]                                                                                                                                                |
| Comments           | Restricts expressions to any expression that is comparable to a base unit with a matching property value. Note: this does not match the property on units, only base units |

#### Canonical Filter

|                    |                                                                    |
|--------------------|--------------------------------------------------------------------|
| Description        | Allows for any expression that is comparable to the named unit     |
| Property Name      | canonical                                                          |
| Operations Allowed | = / in                                                             |
| Values Allowed     | UCUM expression                                                    |
| Comments           | This allows any expression that is comparable to the given unit(s) |

### Implicit Value Sets

Implicit value sets are those whose specification can be predicted based on the grammar of the underlying code system, and the known structure of the URL that refers to them. There is one set of implicit value sets defined for UCUM: By Canonical Value.

If any value set resources exist with an identifier that conforms to the URL patterns specified below, the content of the resource must conform to the template provided. Profiles and other value set references are allowed to reference these value sets directly.

The value set identifier http://unitsofmeasure.org/vs is a value set that contains all UCUM codes.

#### UCUM Comparable Value Set

A value set with an identifier of "http://unitsofmeasure.org/vs/\[expression\]" must conform to this template, where \[expression\] is a valid UCUM expression:

    <ValueSet xmlns="http://hl7.org/fhir">
      <text>
        <status value="generated"/>
        <div xmlns="http://www.w3.org/1999/xhtml">
          [some html that identifies that this value set 
          includes all UCUM expressions that are comparable to the provided expression]
        </div>
      </text>
      <identifier value="http://unitsofmeasure.org/vs/[expression]"/>
      <version value="[optional - but recommended - UCUM version]"/>
      <name value="Ucum Expressions comparable to [expression]"/>
      <description value="Ucum Expressions comparable to [expression]"/>
      <status value="active"/>
      <date value="[optional date of UCUM release]"/>
      <compose>
        <include>
          <system value="http://unitsofmeasure.org"/>
          <filter>
            <property value="comparable"/>
            <op value="="/>
            <value value="[expression]"/>
          </filter>
        </include>
      </compose>
    </ValueSet>

\[%file newfooter%\]
