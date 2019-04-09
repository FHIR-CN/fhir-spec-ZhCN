\[%settitle Multi-Language support in FHIR%\]
\[%file newnavbar%\]
<span id="identity"></span>
Multi-Language support in FHIR (Localization/Internationalization)
------------------------------------------------------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): n/a | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

In general, with regard to human language, the content in resources falls into one of three categories

1.  The content is language neutral
2.  The content has a specified language
3.  There are multiple representations of the same content in different languages

The vast majority of clinical content is language neutral - the language is either unknown or unspecified, and assumed to be in the natural language predominant in the implementation environment. Note that this doesn't mean that the content is all in the same language - often, snippets of other language content will creep in where patients or providers themselves are multi-lingual, but there is no formal tracking for such content, and it will often be translated in situ for the benefit of all users.

While most applications are entirely language neutral, many healthcare applications must deal with multi-lingual content. This page provides a roadmap to the facilities in the FHIR specification for supporting multiple languages.

FHIR offers the following facilities for dealing with languages:

-   [Language tag on Resource and Narrative](#lang)
-   [Translation Extension](#ext)
-   [Translations on CodeSystem and ValueSet](#term)
-   [Translatable extension on element definition](#translatable)
-   [Language Tags on HTTP requests](#http)
-   [Languages in Names and Addresses](#names)

At this time, there is no way to provide multiple translations for the resource narrative itself. See [the open issue](narrative.html#cfc) for further details.

<span id="#spec"></span>
### Specification

The specification itself is published and balloted in English (US). There are projects to translate this to other languages (e.g. [Russian](http://fhir-ru.github.io/index.html) and [Japanese](https://sites.google.com/site/fhirjp/)), but these are generally not well maintained.

One consequence of the way the specification works is that the element names (in either JSON or XML) are in English. These should be considered as references into the specification; they’re never meant to be meaningful to any one other than a user of the specification itself, and are never intended to be displayed to end-users of any healthcare application.

What may be displayed to users are the display terms for codes and elements, which can be managed as described below. This has been done for some codes/elements and languages (e.g. see [Common Languages](valueset-languages.html#definition)), and further contributions from affiliates or implementers is welcome.

<span id="#lang"></span>
### Language tag on Resource and Narrative

Every resource has an optional [`language`](resource-definitions.html#Resource.language) element that is the base language for the content of the resource. Note that this does not require that all the content of the resource be in the specified language; just that unless otherwise specified, this is the default language of the content.

In addition, an `xml:lang` attribute can be specified on the `html:div` element (or any element in the HTML). This can be used to specify a language in addition to the resource language. Note that it doesn't really make sense to specify a different language on the narrative than on the resource itself; the xml:lang attribute is allowed to support natural language processing of the narrative.

Where resources contain the same documentation in several different languages, each different languages should use a `div` element with an XHTML lang attribute in the root div. By default, all languages will be displayed to a user, but multi-language aware applications can filter the content by language and only display the language that ia relevant to or chosend by the patient.

See the W3C documentation on [Language declarations](https://www.w3.org/TR/i18n-html-tech-lang/) for further information.

<span id="#ext"></span>
### Translation Extension

All human readable character content (any elements of type [string](datatypes.html#string) and [markdown](datatypes.html#markdown)) has the same language as that specified by the resource language element. Whether or not a language is specified, translations may be provided for any human readable character content. Translations are provided using the [translation extension](extension-translation.html):

``` json
{ 
  "url" : "http://hl7.org/fhir/StructureDefinition/translation",
  "extension" : [{
    "url" : "lang", 
    "valueCode" : "de"
  },{
    "url" : "content",
    "valueString" : "einige übersetzte Wörter"
  }]
}
```

Multiple translations can be provided if more than one language is required.

<span id="#term"></span>
### Translations on CodeSystem and ValueSet

Concepts defined in [CodeSystem](codesystem.html) resources can have one or more designations that provide additional representations for the concept ([CodeSystem.concept.designation](codesystem-definitions.html#CodeSystem.concept.designation)):

``` json
{
  "code": "de",
  "display": "German",
  "designation": [{
      "language": "nl",
      "value": "Duits"
    },{
      "language": "ru",
      "value": "Немецкий"
    },
    {
      "language": "zh",
      "use": {
        "system": "http://terminology.hl7.org/CodeSystem/designation-usage",
        "code": "display"
      },
      "value": "德语"
    }
  ]
}
```

The base display ("German" in this case) is in the language specified on the resource. Applications using the code system can pick the appropriate language based on the context and/or relevant parameters when using the code system. Alternate designations can also be specified when concepts are include in value sets ([ValueSet.compose.include.concept.designation](valueset-definitions.html#ValueSet.compose.include.concept.designation)).

<span id="#translatable"></span>
### Translatable extension on element definition

All elements in FHIR resources or data types are defined by an [ElementDefinition](elementdefinition.html). Element Definitions provide several different descriptions for each element, the most important of which are [label](elementdefinition-definitions.html#ElementDefinition.label) and [definition](elementdefinition-definitions.html#ElementDefinition.definition). These (and other [string](datatypes.html#string) and [markdown](datatypes.html#markdown) properties on the element definition can have translations using the extension shown above.

In addition to this, elements can be marked with the [translatable extension](extension-elementdefinition-translatable.html):

``` json
{ 
  "url" : "http://hl7.org/fhir/StructureDefinition/elementdefinition-translatable", 
  "valueBoolean" : true
}
```

This indicates that applications should consider supporting translations when reading/writing this element.

<span id="#http"></span>
### Language Tags on HTTP requests

HTTP Requests can include a header to indicate which language is requested:

    Accept-Language: de-DE

The header can contain multiple languages, with weighted preferences. Servers can use the header to return the correct language if they are able. If the request is a search, the server may choose to limit matches to those that contain the correct language, though this might be unsafe.

HTTP Responses can include a header to indicate which language is in the resource:

    Content-Language: en-US

If present, the content language header must match the language of the resource (if specified).

[Languages in Names and Addresses](#names)
<span id="#names"></span>
### Languages in Names and Addresses

Names and addresses are one area of special difficulty with regard to multiple languages. Inherently, names and addresses only have one language, but they may have approximations in other languages, or people may choose to take entirely different names for different cultures. Some of the [name examples](datatypes-examples.html#HumanName) illustrate how this is handled.

One common practice in some cultures is the represent the same name twice, in local and western scripts. These can be differentiated by the script portion of the [language extension](extension-language.html):

``` xml
  <name>
    <extension url="http://hl7.org/fhir/StructureDefinition/language">
      <valueCode value="ru-RU-Cyrl"/>
    </extension>
    <family value="ЕМЕЛИН" />
    <given value="ИВАН" />
    <given value="ВЛАДИМИРОВИЧ" />
  </name>
  <name>
    <extension url="http://hl7.org/fhir/StructureDefinition/language">
      <valueCode value="ru-RU-Latn"/>
    </extension>
    <family value="EMELIN" />
    <given value="IVAN" />
    <given value="VLADIMIROVICH" />
  </name>
```

The different scripts can also be differentiated by the Unicode subsets that they contain, but this is not always convenient.

\[%file newfooter%\]
