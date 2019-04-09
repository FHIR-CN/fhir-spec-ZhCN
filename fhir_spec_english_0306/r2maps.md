\[%settitle Differences from DSTU Release 2%\]
\[%file newnavbar%\]
|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

Transforms between DSTU 2 and STU 3
-----------------------------------

In addition to a [list of all differences between DSTU 2 and STU 3](diff.html), this specification also provides transforms between DSTU and STU 3 for most resources that were in DSTU 2. These transforms are expressed using the [FHIR Mapping Language](mapping-language.html), and both serve as formal documentation of the relationship between the resource structures in R2 and R3, and can also be used to convert between the formats automatically.

The following table summarizes the state of the R2:R3 maps for each resource type.

Note the following:

-   Transforms are tested using the following method:
    1.  For each example resource in the R2 release of the FHIR specification that has a transform to R3
    2.  apply the transform to R3
    3.  validate against the R3 specification
    4.  apply the reverse transform back to R2
    5.  compare the outcome with the original resource - ideally, it should be identical
-   All transforms should execute - that is, they should be able to take any R2 resource, represent the content in R3, and then generate an R2 representation for the same content. Note, though, that in a few cases, the differences between R2 and R3 designs are so significant that not all examples can be successfully transformed at all.
-   For some resources, the differences in design between R2 and R3 are sufficiently great that the R2 examples cannot reproduce the same output after conversion to R3 and then back to R2. For example, the R3 resource may have a different set of status codes with imperfect maps
-   For some resources, the information available in the R2 examples is not enough to generate valid R3 resources, and so the resources generate R3 validation errors. (e.g. R2 resources missing an element that is required in R3)
-   The transform scripts are only tested to the degree that R2 provided example data
-   The Bundle tests include the large distribution files (all valuesets, structure definitions, etc.) and so generate large numbers of validation errors
-   For all these reasons, the maps provided in the specification are not authoritative; they are provided to help implementers who need to convert between the R2 and R3 format, but additional revision may be required in an implementation specific context. The [FHIR Wiki](https://confluence.hl7.org/display/FHIR/R2-R3+Transformations) tracks ongoing work to provide improved transforms, and other transformation options

**Resource**
**\# Tests**
**% Execute OK**
**% RoundTrip Ok**
**% R3 Valid**
**R3 Error Count**
\[%r2maps-summary%\]

\[%file newfooter%\]
