\[%settitle Using RxNorm with FHIR%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Using RxNorm with FHIR
----------------------

|                                                  |                                             |                                                                                      |
|--------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt vocab%\]](%5B%wg%20vocab%%5D) Work Group | [Maturity Level](versions.html#maturity): 3 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

### Summary

|                   |                                                                                                                                             |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Source            | RxNorm is made available by the [US National Library of Medicine](http://www.nlm.nih.gov/) at <http://www.nlm.nih.gov/research/umls/rxnorm> |
| System            | The URI <http://www.nlm.nih.gov/research/umls/rxnorm> identifies the RxNorm code system                                                     |
| Version           | Where a version is used, it should be the date of release, encoded as in the download files, e.g. "07092014"                                |
| Code              | The code value for an RxNorm code is a Concept Identifier (CUI), and only CUIs for which there is an SAB=RXNORM                             |
| Display           | The string description for the CUI that is associated with the source RXNORM. For further information, [see below](#display)                |
| Inactive          | Todo: Describe how it is determined which concepts are inactive                                                                             |
| Subsumption       | No Subsumption relationships are defined by RxNorm                                                                                          |
| Filter Properties | Several properties are defined as described below                                                                                           |

### RxNorm MySQL Database

The RxNorm scripts are able to populate a MySQL database that contains the data from RxNorm. This page provides SQL statements that describe how to implement the features of the RxNorm terminology correctly against this database. These are provided for implementer convenience, and do not imply that any particular approach is required to be used in implementations.

### Correct RxNorm Display

The correct display for a CUI is the string description for it associated with the source RXNORM. Given the RxNorm MySQL database, the correct display for a CUI can generally be determined by the SQL:

     Select STR from rxnconso where RXCUI = :code and SAB = 'RXNORM' and TTY in ('SCD', 'SBD')

Display values are not case sensitive, though case SHOULD be preserved.

### Copyright/License Issues

Using RxNorm codes of type SAB=RXNORM as this specification describes [does not require](https://www.nlm.nih.gov/research/umls/rxnorm/docs/prescribe.html) a UMLS license. Access to the full set of RxNorm definitions, and/or additional use of other RxNorm structures and information requires a UMLS license. The use of RxNorm in this specification is pursuant to HL7's status as a licensee of the NLM UMLS. HL7's license does not convey the right to use RxNorm to any users of this specification; implementers must acquire a license to use RxNorm in their own right.

<span id="filters"></span>
### RxNorm Filter Properties

This section documents the property filters that can be used with the RxNorm code system in value set composition statements.

The base SQL statement for returning a list of CUIs that conform to these filters is:

      Select RXCUI from rxnconso where SAB = 'RXNORM' and TTY <> 'SY' 

#### Semantic Type

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Allows for the selection of a set of CUIs based on their Semantic Type</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>STY</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>= / in</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>[column:]value</td>
</tr>
<tr class="odd">
<td>Comments</td>
<td>If no column is specified, the default column is TUI</td>
</tr>
<tr class="even">
<td>SQL</td>
<td><pre><code>and RXCUI in (select RXCUI from rxnsty where [:column] = :value)</code></pre></td>
</tr>
</tbody>
</table>

#### Source

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Allows for the selection of a set of concepts that have mappings to a particular RxNorm concept</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>SAB</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>= / in</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>Values from RxNorm SAB table (e.g. select RSAB from rxnsab)</td>
</tr>
<tr class="odd">
<td>SQL</td>
<td><pre><code>and RXCUI in (select RXCUI from rxnconso where SAB = :value)</code></pre></td>
</tr>
</tbody>
</table>

#### Term Type

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Allows for the selection of a concept based on its designated type</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>TTY</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>= / in</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>TTY values from the RxNorm Concept table (e.g. select distinct TTY from rxnconso)</td>
</tr>
<tr class="odd">
<td>SQL</td>
<td><pre><code>and TTY = :value</code></pre></td>
</tr>
</tbody>
</table>

#### Relationship

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Allows for the selection of a concept based on its relationships</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>[REL]</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>= / in</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>CUI:[RXCUI] or AUI:[RXAUI] must be a valid CUI or AUI. Note that a CUI does not need to have an SAB=RXNORM entry to be used here</td>
</tr>
<tr class="odd">
<td>Comments</td>
<td>[REL] (:rel) is one of SY, SIB, RN, PAR, CHD, RB or RO</td>
</tr>
<tr class="even">
<td>SQL</td>
<td>for CUI:
<pre><code>and (RXCUI in (select RXCUI from rxnconso where RXCUI in (select RXCUI1 from rxnrel where REL = :rel and RXCUI2 = :value))</code></pre>
for AUI:
<pre><code>and (RXCUI in (select RXCUI from rxnconso where RXAUI in (select RXAUI1 from rxnrel where REL = :rel and RXAUI2 = :value))</code></pre></td>
</tr>
</tbody>
</table>

#### Relationship Type

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td>Description</td>
<td>Allows for the selection of a concept based on the type of its relationships</td>
</tr>
<tr class="even">
<td>Property Name</td>
<td>[RELA]</td>
</tr>
<tr class="odd">
<td>Operations Allowed</td>
<td>= / in</td>
</tr>
<tr class="even">
<td>Values Allowed</td>
<td>CUI:[RXCUI] or AUI:[RXAUI] must be a valid CUI or AUI. Note that a CUI does not need to have an SAB=RXNORM entry to be used here</td>
</tr>
<tr class="odd">
<td>Comments</td>
<td>[RELA] (:rela) is one of the relationship types defined in <a href="https://www.nlm.nih.gov/research/umls/rxnorm/docs/2016/appendix1.html">RxNorm Appendix 1</a> (the &quot;RELA&quot; column)</td>
</tr>
<tr class="even">
<td>SQL</td>
<td>for CUI:
<pre><code>and (RXCUI in (select RXCUI from rxnconso where RXCUI in (select RXCUI1 from rxnrel where RELA = :rel and RXCUI2 = :value))</code></pre>
for AUI:
<pre><code>and (RXCUI in (select RXCUI from rxnconso where RXAUI in (select RXAUI1 from rxnrel where RELA = :rel and RXAUI2 = :value))</code></pre></td>
</tr>
</tbody>
</table>

<span id="props"></span>
### RxNorm Properties

In addition to the [standard properties](terminology-service.html#standard-props), the following properties are defined for RxNorm:

(Yet to be done).

<span id="implicit"></span>
### Implicit Value Sets

Implicit value sets are those whose specification can be predicted based on the grammar of the underlying code system, and the known structure of the URL that refers to them. At the time of this publication, RxNorm does not define implicit value sets.

The identifier http://www.nlm.nih.gov/research/umls/rxnorm/vs represents a value set that contains all RxNorm CUIs.

\[%file newfooter%\]
