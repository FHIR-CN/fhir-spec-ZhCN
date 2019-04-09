\[%settitle ND-JSON Format%\]
\[%file newnavbar%\]
&lt;%fmtheader ndjson%&gt; <span id="json"></span>
ND-JSON Representation of Resources
-----------------------------------

|                                              |                                             |                                                                                  |
|----------------------------------------------|---------------------------------------------|----------------------------------------------------------------------------------|
| [\[%wgt its%\]](%5B%wg%20its%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Draft](versions.html#std-process) |

ns-json (New line delimited JSON) is a variant of the JSON format that is supported for bulk data transfer. In principle, nd-json is a simple variation on [the JSON format](json.html), but where resources are serialized with no whitespace, and separated by a newline pair (characters 13 and 10).

``` spec
{
  { "resourceType" : "[type]", .... }
  { "resourceType" : "[type]", .... }
}
```

The MIME-type for this format is `application/fhir+ndjson`.

In order to simplify nd-json processing, each nd-json document contains only resources of a single type - every line contains a resource of a particular type. (though note that resources may still contain [contained resources](domainresource-definitions.html#DomainResource.contained) of various types).

On the [RESTful API](http.html), the nd-json format can only be retrieved using the [Asynchronous Pattern](async.html).

\[%file newfooter%\]
