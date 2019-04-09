\[%settitle Differences from DSTU Release 3%\]
\[%file newnavbar%\]
|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

Transforms between DSTU 3 and STU 4
-----------------------------------

In addition to a [list of all differences between DSTU 3 and STU 4](diff.html), this specification also provides transforms between R3 and R4 for most resources that were in R3. These transforms are expressed using the [FHIR Mapping Language](mapping-language.html), and both serve as formal documentation of the relationship between the resource structures in R3 and R4, and can also be used to convert between the formats automatically.

The following table summarizes the state of the R3:R4 maps for each resource type.

Note the following:

-   Transforms are tested using the following method:
    1.  For each example resource in the R3 release of the FHIR specification that has a transform to R4
    2.  apply the transform to R4
    3.  validate against the R4 specification
    4.  apply the reverse transform back to R3
    5.  compare the outcome with the original resource - ideally, it should be identical
-   All transforms should execute - that is, they should be able to take any R3 resource, represent the content in R4, and then generate an R3 representation for the same content. Note, though, that in a few cases, the differences between R3 and R4 designs are so significant that not all examples can be successfully transformed at all.
-   For some resources, the differences in design between R3 and R4 are sufficiently great that the R3 examples cannot reproduce the same output after conversion to R4 and then back to R3. For example, the R4 resource may have a different set of status codes with imperfect maps
-   For some resources, the information available in the R3 examples is not enough to generate valid R4 resources, and so the resources generate R4 validation errors. (e.g. R3 resources missing an element that is required in R4)
-   The transform scripts are only tested to the degree that R3 provided example data
-   For all these reasons, the maps provided in the specification are not authoritative; they are provided to help implementers who need to convert between the R2 and R3 format, but additional revision may be required in an implementation specific context
-   The maps are subject to ongoing maintenance using the [FHIR NPM Package](https://confluence.hl7.org/display/FHIR/NPM+Package+Specification) "`fhir.versions.r3r4`" which is maintained on [GitHub](https://github.com/FHIR/r3r4). See also [FHIR Wiki](https://confluence.hl7.org/display/FHIR/R3-R4+Transformations) for other ongoing work to support R3/R4 transformations

**Resource**
**\# Tests**
**% Execute OK**
**% RoundTrip Ok**
**% R4 Valid**
**R4 Error Count**
\[%r3maps-summary%\]

\[%file newfooter%\]
