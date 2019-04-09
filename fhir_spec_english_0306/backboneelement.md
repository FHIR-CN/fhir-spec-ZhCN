\[%settitle BackboneElement%\]
\[%file newnavbar%\]
&lt;%belheader base%&gt;
BackboneElement
===============

|                                                |                                                     |                                                                                      |
|------------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): Normative | [Standards Status](versions.html#std-process):[Normative](versions.html#std-process) |

\[%normative page%\]
The base definition for complex elements defined as part of a resource definition - that is, elements that have children that are defined in the resource. [Data Type](datatypes.html) elements do not use this type, though a few data types specialize it ([Timing](datatypes.html#Timing), [Dosage](dosage.html), [ElementDefinition](elementdefinition.html)). For instance, [Patient.contact](patient.html#resource) is an element that is defined as part of the patient resource, so it automatically has the type `BackboneElement`.

Note that the descendant types of `BackboneElement` are all declared implicitly as part of the definitions of the resources.

<span id="definition"></span>
Content
-------

\[%dt BackboneElement 1%\]

\[%file newfooter%\]
