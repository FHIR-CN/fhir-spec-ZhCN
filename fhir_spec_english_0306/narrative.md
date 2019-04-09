\[%settitle Narrative%\]
\[%file newnavbar%\]
&lt;%narrheader base%&gt; <span id="root"></span> <span id="Narrative"></span> <span id="narrative"></span> <span id="xhtml"></span>
Narrative
---------

|                                                |                                                     |                                                                                      |
|------------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): Normative | [Standards Status](versions.html#std-process):[Normative](versions.html#std-process) |

\[%normative page%\]
Any resource that is a [DomainResource](domainresource.html) (all resources except [Bundle](bundle.html), [Parameters](parameters.html) and [Binary](binary.html)) may include a human-readable narrative that contains a summary of the resource and may be used to represent the content of the resource to a human.

If narrative is present with a status other than 'empty', it SHALL reflect all content needed for a human to understand the essential clinical and business information for the resource. It SHALL be safe to render only the narrative of the resource without displaying any of the resource's discrete/encoded information. Resource definitions and/or profiles on resources MAY define what content should be represented in the narrative to ensure clinical safety.

The narrative for a resource MAY contain additional information that is not in the structured data, including human-edited content. Such additional information SHALL be in the scope of the definition of the resource, though it is common for the narrative to include additional descriptive information extracted from other referenced resources when describing references. Narrative for a resource SHOULD include summary information about any referenced resources that would be required for a consumer of the resource to be able to understand the key, essential information about a resource without retrieving any additional resources. If the `Narrative.status` = extensions, the narrative SHALL reflect the impact of all modifier extensions that extend elements that are themselves described by the narrative. Narrative MAY [include generated content](references.html#rendering) from other resources and still be considered generated.

For example, the narrative for a MedicationRequest might include brief summary information about the referenced patient, prescriber and medication. Some resources (e.g. List) can provide specific rules about what content must (or must not) be included in the resource narrative. Consideration would be given to the fact that referenced resources may be updated without updating referencing resources, so the proportion of content of a referenced resource included in a referencing resource should be limited.

Systems MAY choose how narrative is generated, including how much de-referencing to perform, but SHALL NOT assume that the resource is rendered in any particular context when generating narrative, since resources will be used in multiple contexts.

Resource instances that permit narrative SHOULD always contain narrative to support human-consumption as a fallback. Structured data SHOULD NOT generally contain information of importance to human readers that is omitted from the narrative. Creators of FHIR resources should not assume that systems will render (or that humans will see) data that is not in the narrative. However, in strictly managed trading systems where all systems share a common data model and additional text is unnecessary or even a clinical safety risk, the narrative may be omitted. Implementers should give careful consideration before doing this, as it will mean that such resources can only be understood in the limited trading environment. Closed trading partner environments are very likely to open up during the lifetime of the resources they define. Also, many workflow steps involving finding and aggregating resources are much more difficult or tedious if the resources involved do not have their own text.

A resource MAY only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied). This can be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded information is added later.

The narrative is an XHTML fragment with a flag to indicate its relationship to the data:

\[%dt Narrative 1%\] <span id="security"></span><span id="rules"></span>
The contents of the *div* element are an XHTML fragment that SHALL contain only the basic HTML formatting elements described in chapters 7-11 (except section 4 of chapter 9) and 15 of the HTML 4.0 standard, &lt;a&gt; elements (either name or href), images and internally contained style attributes. The XHTML content SHALL NOT contain a `head`, a `body` element, external stylesheet references, deprecated elements, scripts, forms, base/link/xlink, frames, iframes, objects or event related attributes (e.g. `onClick`). This is to ensure that the content of the narrative is contained within the resource and that there is no active content. Such content would introduce security issues and potentially safety issues with regard to extracting text from the XHTML. Note that even with these restrictions, there are still several important [security risks](security.html#narrative) associated with displaying the narrative.

The div element SHALL have some non-whitespace content (text or an image).

``` xml
  <narrative>
    <status value="additional"/>
    <div xmlns="http://www.w3.org/1999/xhtml">This is a simple
          example with only plain text</div>
  </narrative>

  <narrative>
    <status value="additional"/>
   <div xmlns="http://www.w3.org/1999/xhtml">
     <p>
       This is an <i>example</i> with some <b>xhtml</b> formatting.
     </p>
   </div>
  </narrative>
```

The inner portion of the `div` content is often used for the *innerHTML* property in a browser. In order to simplify this kind of processing, when the narrative is represented in JSON, it SHALL be encoded so that the characters between the first '&gt;' and the last '&lt;' delimiters is the content of the `<div>` element; e.g.

``` json
  "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">text</div>"
```

is legal, but this is not:

``` json
  "div": "<?xml ...><div>text</div>"
```

Note that the XHTML is contained in general XML so there is no support for HTML entities like `&nbsp;` or `&copy;` etc. Unicode characters SHALL be used instead. Unicode `&#160;` substitutes for `&nbsp;`.

The narrative content SHOULD be in the [language of the resource](resource.html#language), but there is no reason to expect that HTML enabled tooling would understand the resource [language](resource-definitions.html#Resource.language) element. For this reason, a `lang` attribute on the `<div>` SHOULD also be used if language is declared on the resource (see [the note in the HTML 5 specification about use of language](http://www.w3.org/html/wg/drafts/html/master/dom.html#the-lang-and-xml:lang-attributes)).

<span id="lang"></span>
### Multi-language support for Narratives

A narrative may contain content from multiple languages. This is always possible in that the narrative may contain ad-hoc content in any language, often with inline translation provided - this is not unusual in clinical systems when dealing with patients/care providers speaking multiple languages. Some resources - specially standing documentation such as preparation notes - will contain the same documentation in several different languages.

Resources containing the same information in multiple different languages should use a `div` element with an XHTML lang attribute in the root div. By default, all languages will be displayed to a user, but multi-language aware applications can filter the content by language and only display the language that ia relevant to or chosend by the patient.

See the W3C documentation on [Language declarations](https://www.w3.org/TR/i18n-html-tech-lang/) for further information.

<span id="id"></span>
### Image References

Image source data (the `src` attribute) may refer to an image found in the resource (as a contained [Media](media.html) or [Binary](binary.html) resource) by its *id*:

``` xml
<Patient xmlns="http://hl7.org/fhir">
  <text>
    <status value="generated"/>
    <div xmlns="http://www.w3.org/1999/xhtml">
      <p>... <img src="#pic1"/>. ....</p>
    </div>
  </text>
  <contained>
    <Binary><id value="pic1"/><contentType value="image/gif"/><data value="MEKH....SD/Z"/></Binary>
  </contained>
</Patient>
```

<span id="internal"></span>
### Internal Id References

References between the narrative and the resource data (in either direction) are mediated by the XML `id`/`idref` attributes. in JSON, the property "id" is used which is equivalent to the XML attribute "id".

The `id` attribute SHALL have a unique value *within the resource* with regard to any other id attributes: the uniqueness and resolution scope of these id references is within the resource that contains them. Contained resources are included in the id uniqueness scope of the resource that contains them.

If multiple resources are combined into a single combined document, such as a [Bundle](bundle.html), duplicate values of the `id` attribute may occur between resources. This SHALL be managed by applications reading the resources.

Since images that are not contained in the resource cannot be guaranteed to be available when the resource is presented to a user, the source for any images that are an essential part of the narrative SHOULD always be embedded as a [data: url](https://tools.ietf.org/html/rfc2397), in an attachment or a contained resource

<span id="css"></span>
### Styling the XHTML

The XHTML fragment in the narrative may be styled using cascading stylesheets with either external or internal styles. External styles are applied using the *class* and *id* attributes on the XHTML elements and internal styles are applied using a *style* attribute on the XHTML elements directly.

In order to minimize manageability and security issues, authoring systems cannot specify the CSS stylesheet to use directly, unless the stylesheet is included in a FHIR Document. Instead, the application that displays the resource provides the stylesheets. This means that the rendering system chooses what styles can be used, but the authoring system must use them in advance. Authoring systems can use these classes, which SHALL be supported by all rendering systems:

|               |                                                         |                                   |
|---------------|---------------------------------------------------------|-----------------------------------|
| bold          | Bold Text                                               | { font-weight: bold }             |
| italics       | Italics Text                                            | { font-style: italic }            |
| underline     | Underlined Text                                         | { text-decoration: underline }    |
| strikethrough | Strikethrough Text                                      | { text-decoration: line-through } |
| left          | Left Aligned                                            | { text-align : left }             |
| right         | Right Aligned                                           | { text-align : right }            |
| center        | Center Aligned                                          | { text-align : center }           |
| justify       | Justified                                               | { text-align : justify }          |
| border-left   | Border on the left                                      | { border-left: 1px solid grey }   |
| border-right  | Border on the right                                     | { border-right: 1px solid grey }  |
| border-top    | Border on the top                                       | { border-top: 1px solid grey }    |
| border-bottom | Border on the bottom                                    | { border-bottom: 1px solid grey } |
| arabic        | List is ordered using Arabic numerals: 1, 2, 3          | { list-style-type: decimal }      |
| little-roman  | List is ordered using little Roman numerals: i, ii, iii | { list-style-type: lower-roman }  |
| big-roman     | List is ordered using big Roman numerals: I, II, III    | { list-style-type: upper-roman }  |
| little-alpha  | List is ordered using little alpha characters: a, b, c  | { list-style-type: lower-alpha }  |
| big-alpha     | List is ordered using big alpha characters: A, B, C     | { list-style-type: upper-alpha }  |
| disc          | List bullets are simple solid discs                     | { list-style-type: disc }         |
| circle        | List bullets are hollow discs                           | { list-style-type : circle }      |
| square        | List bullets are solid squares                          | { list-style-type: square }       |
| unlist        | List with no bullets                                    | { list-style-type: none }         |

Note: for testing purposes, there is an [example resource](basic-example-narrative.html) that includes all of these styles. It is also available [as XHTML](narrative-example.html) and a [standard stylesheet](fhir-runtime.css) that includes all of these styles. Use of styles not on this list will require an arrangement between producing and consuming systems.

Authoring systems may refer to additional classes, but cannot rely on the fact that they will be supported. If the additional classes are critical for safe rendering, trading partner agreements will be required.

Authoring systems may also use internal styles using the *style* attribute. This has the advantage of not depending on external interpretation, but also has the side effect of making content more difficult to manage when rendering, so applications should use this approach with care.

Authoring systems may fix the following styling aspects of the content:

-   bold, italic, underline, strikethrough
-   font color, family and size
-   background color, text alignment
-   whitespace interpretation
-   ordered list number format (since it may be referred to in text)

These style properties are specified in-line using the `style` attribute. Rendering systems SHOULD respect any of these rendering styles when they are specified in the `style` attribute, although appropriate interpretation is allowed in certain contexts (e.g. a low-contrast display for dark rooms or a high-contrast display for the visually impaired may adjust colors accordingly).

Note that rendering systems can ignore or override any of the internal or external styles described above, but SHOULD be careful to ensure that this is only done in the context of well-maintained trading partner agreements, as altering the presentation of the text may create clinical safety issues.

Authors MAY specify additional styles and style properties as specified in the CSS specification, but these are extensions to this specification and renderers are not required to heed them. It SHOULD be safe to view the narrative without these additional styling features available.

Note that there are additional rules around styling for [documents](documents.html#css) presentation.

<span id="linking"></span>
### Linking between Data and Narrative

In some contexts, it is useful to link between the two representations of the same content: structured data, and human readable narrative. This can be used to assert that the text is a representation of the data, or specifically that the data is derived from some particular text. This specification defines the extensions [narrativeLink](extension-narrativelink.html) and [originalText](extension-originaltext.html) to establish these links. Here's an example of using originalText:

``` json
{
  "resourceType" : "Condition",
  "text" : {
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">There is a history of <span id=\"a1\">Asthma</span></div>" 
  },
  "code" : {
    "coding" : {
      "system" : "http://snomed.info/sct",
      "code" : "195967001",
      "display" : "Asthma (disorder)"
    },
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/originalText",
      "valueUrl" : "#a1"
    }]
  }
}
```

This indicates that the word "Asthma" in the narrative is the original text from which the SNOMED CT code "asthma" was derived by some text processing method. Typically, this method is associated with resources built from CDA documents. The same method can be used to reference across resource boundaries, e.g. between a resource and the composition that represents it:

``` xml
<Bundle xmlns="http://hl7.org/fhir">
  <entry>
    <fullUrl value="http://example.org/fhir/Composition/abcdefghij"/>
    <Composition>
      <id value="c1"/>
      <text>
        <div xmlns="http://www.w3.org/1999/xhtml">
          ...
          <p>There is a history of <span id="a1">Asthma</span></p>
          ...
        </div>
      </text>
    </Composition>
  </entry>
  <entry>
    <Condition>
      <code>
        <extension url="http://hl7.org/fhir/StructureDefinition/originalText">
          <valueUrl value="http://example.org/fhir/Composition/abcdefghij#a1"/>
        </extension>
        <coding>
          <system value="http://snomed.info/sct"/>
          <code value="195967001"/>
          <display value="Asthma (disorder)"/>
        </coding>
      </code>
    </Condition>
  </entry>
</Bundle>
```

<span id="safety"></span>
### Clinical Safety Concerns

Health care records are often associated with legislative and business requirements for very long retention times (up to a century) and extreme risk aversion with regards to inconsistent display across a variety of devices, rendering engines, and display constraints. Although the narrative is allowed to use the standard XHTML and CSS features as described above, implementations are encouraged to show restraint when using the features available. Even when trading partner arrangements limit the current requirements made on a system, experience shows that these trading arrangements will likely broaden over time.

In particular:

-   complex layered layouts requiring careful testing of the match between the XHTML `div` and `span` elements and styles, and those that include nested tables (possibly with images) as well, make rendering consistency difficult, and implementations SHOULD avoid these
-   The use of styles e.g. bolding, italics and color; SHOULD NOT be used as the sole way to convey meaning or semantics, but should be used in conjunction with other data elements to ensure consistent, long term interoperability.

\[%file newfooter%\]
