\[%settitle FHIRPath Patch%\]
\[%file newnavbar%\]
FHIRPath Patch
--------------

|                                                |                                             |                                                                                      |
|------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

This page documents how the [Parameters](parameters.html) resource is used to define a set of [FHIRPath](fhirpath.html) based patch operations.

<span id="concept"></span>
### Conceptual FHIRPath Operations

This table documents the FHIRPath operations that may be used to specify changes to a resource:

|          |                                                       |                             |                                             |                          |                         |                       |                                                                                                                                                                                                                                             |
|----------|-------------------------------------------------------|-----------------------------|---------------------------------------------|--------------------------|-------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Type** | **Path**                                              | **Name**                    | **Value**                                   | **Index**                | **source**              | **destination**       | **Details**                                                                                                                                                                                                                                 |
| add      | Path at which to add the content                      | Name of the property to add | Data type to add at nominated place         |                          |                         |                       | The content will be appended to the element identified in the path, using the name specified. Add can used for non-repeating elements as long as they do not already exist                                                                  |
| insert   | Path of the collection in which to insert the content |                             | value (Data type) to add at nominated place | index at which to insert |                         |                       | The content will be inserted into the nominated list at the index specified (0 based). The index is mandatory and must be equal or less than the number of elements in the list. Note: `add` is easier than `insert` at the end of the list |
| delete   | Path of the element to delete (if found)              |                             |                                             |                          |                         |                       | Only a single element can be deleted                                                                                                                                                                                                        |
| replace  | Path of the element to replace                        |                             | value (Data type) to replace it with        |                          |                         |                       |                                                                                                                                                                                                                                             |
| move     | Path of the collection in which to move the content   |                             |                                             |                          | list index to move from | list index to move to | Move an element within a single list                                                                                                                                                                                                        |

There are a few base rules that apply for all operations:

-   The FHIRPath statement must return a single element
-   The FHIRPath statement SHALL NOT cross resources using the `resolve()` function (e.g. like `Observation.subject.resolve().identifier`). `resolve()` SHALL only be used to refer to contained resource within the resource being patched. Servers SHALL NOT allow patch operations to alter other resources than the nominated target, and SHOULD return an error if the patch operation tries
-   The type of the value must be correct for the place at which it will be added/inserted. Servers SHALL return an error if the type is wrong
-   Servers SHALL return an error if the outcome of the patch operation is a not a valid resource
-   Except for the delete operation, it is an error if no element matches the specified path
-   Operations are applied in order, with each operation applied to the result of the previous patch operation

<span id="format"></span>
### Parameters Format

The FHIRPath patch operations are encoded in a [Parameters](parameters.html) resource as follows:

-   Each operation is a Parameter named "operation"
-   Each operation has a series of parts, using the following parameter names from the table above with these types:

|             |                           |
|-------------|---------------------------|
| Parameter   | Type                      |
| type        | code                      |
| path        | string                    |
| name        | string                    |
| value       | [\*](datatypes.html#open) |
| index       | integer                   |
| source      | integer                   |
| destination | integer                   |

Here is an example of adding an element:

``` xml
<Parameters xmlns="http://hl7.org/fhir">
  <parameter>
    <name value="operation"/>
    <part>
      <name value="type"/>
      <valueCode value="add"/>
    </part>
    <part>
      <name value="path"/>
      <valueString value="Patient"/>
    </part>
    <part>
      <name value="name"/>
      <valueString value="birthDate"/>
    </part>
    <part>
      <name value="value"/>
      <valueDate value="1930-01-01"/>
    </part>
  </parameter>
</Parameters>
```

<span id="anonymous"></span>
#### Anonymous Types

Only some named data types (see [the list](datatypes.html#open)) are allowed to be used directly in parameters. In order to add or insert other kinds of types - including anonymous elements (e.g. Observation.component, Timing.repeat), the content is defined by defining the name as described above, and instead of providing a value, a set of parts that are values are provided. Here is an example:

``` xml
<Parameters xmlns="http://hl7.org/fhir">
  <parameter>
    <name value="operation"/>
    <part>
      <name value="type"/>
      <valueCode value="add"/>
    </part>
    <part>
      <name value="path"/>
      <valueString value="Patient"/>
    </part>
    <part>
      <name value="name"/>
      <valueString value="contact"/>
    </part>
    <part>
      <name value="value"/>
      <part>
        <name value="name"/>
        <valueHumanName>
          <text value="a name"/>
        </valueHumanName>
      </part>
    </part>
  </parameter>
</Parameters>
```

This pattern repeats as deep as necessary.

There is a set of test cases for implementers as part of the [Test Case Downloads](downloads.html).

\[%file newfooter%\]
