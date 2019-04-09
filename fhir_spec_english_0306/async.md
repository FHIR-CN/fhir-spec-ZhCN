\[%settitle Asynchronous pattern%\]
\[%file newnavbar%\]
Asynchronous Request Pattern
----------------------------

|                                                |                                             |                                                                                  |
|------------------------------------------------|---------------------------------------------|----------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Draft](versions.html#std-process) |

\[%impl-note%\] the FHIR Asynchronous API and the $export Operation are under active development:
-   Visit the [Draft FHIR Bulk Data Repository](https://github.com/smart-on-fhir/fhir-bulk-data-docs) for the most recent draft documentation and open issues
-   Participate in design discussions at [chat.fhir.org](https://chat.fhir.org/#narrow/stream/bulk.20data)

\[%end-note-np%\]
### Use Case

All of the interactions defined in the [RESTful API](http.html) are described as synchronous operations - that is, the client makes a query and waits for the server to respond with the outcome in the HTTP response. This pattern is not suitable once significant server side processing becomes necessary or when substantial amounts of data must be returned.

A good example of this is the [$export operation](https://github.com/smart-on-fhir/fhir-bulk-data-docs/blob/master/export.md), where simple searches may result in large amounts of data.

The asynchronous request pattern, based on [rfc 7240](https://tools.ietf.org/html/rfc7240#section-4.1), caters to this use case and is applicable for all the [Defined Interactions](http.html) and for [Operations](operations.html), although for many of these uses it brings no benefit. Servers may choose which interactions the pattern should be supported on (if at all), and servers may choose to only support some of the operations using the asynchronous pattern.

------------------------------------------------------------------------

### Kick Off Request

The request will have whatever URL and other parameters would normally apply, but must include the headers described below.

`GET [FHIR API Request]`

##### Headers

-   `Prefer` (required)

    Specifies whether the response is immediate or asynchronous. Setting this to `respond-async` triggers the async pattern.

-   `Accept` (required)

    Specifies the format of the optional OperationOutcome response to the kick-off request. Any of the [Serialization Format Representations](formats.html#wire) are supported.

##### Query String Parameters

-   `_outputFormat` (string, optional, defaults to `application/fhir+ndjson`)

    The format for the generated bulk data files. Currently, [ndjson](http://ndjson.org/) must be supported, though servers may choose to also support other output formats. Servers should support the full content type of `application/fhir+ndjson` as well as abbreviated representations including `application/ndjson` and `ndjson`.

##### Response - Success

-   HTTP Status Code of `202 Accepted`
-   `Content-Location` header with a url for subsequent status requests
-   Optionally a FHIR OperationOutcome in the body

##### Response - Error (e.g. unsupported search parameter)

-   HTTP Status Code of `4XX` or `5XX`
-   Optionally a FHIR OperationOutcome in the body

------------------------------------------------------------------------

### Bulk Data Delete Request:

After a bulk data request has been kicked-off, clients can send a delete request to the url provided in the `Content-Location` header to cancel the request.

##### Endpoint

`DELETE [polling content location]`

##### Response - Success

-   HTTP Status Code of `202 Accepted`
-   Optionally a FHIR OperationOutcome in the body

##### Response - Error Status

-   HTTP status code of `4XX` or `5XX`
-   Optionally a FHIR OperationOutcome in the body

------------------------------------------------------------------------

### Bulk Data Status Request:

After a bulk data request has been kicked-off, clients can poll the url provided in the `Content-Location` header to obtain the status of the request.

Note: Clients should follow an [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) approach when polling for status. Servers may supply a [Retry-After header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) with a http date or a delay time in seconds. When provided, clients should use this information to inform the timing of future polling requests.

Note: The `Accept` header for this request should be `application/json`. In the case that errors prevent the export from completing, the response will contain a JSON-encoded FHIR OperationOutcome resource.

##### Endpoint

`GET [polling content location]`

##### Response - In-Progress Status

-   HTTP Status Code of `202 Accepted`
-   Optionally an `X-Progress` header with a text description of the status of the request that's less than 100 characters. The format of this description is at the server's discretion and may be a percentage complete value or a more general status such as "in progress". Clients can try to parse this value, display it to the user, or log it.

##### Response - Error Status

-   HTTP status code of `5XX`
-   Optionally a JSON FHIR OperationOutcome in the body
-   Even if some resources cannot successfully be exported, the overall export operation may still succeed. In this case, the `Response.error` array of the completion Response must be populated (see below) with one or more files in ndjson format containing `OperationOutcome` resources to indicate what went wrong.

##### Response - Complete Status

-   HTTP status of `200 OK`

-   `Content-Type header` of `application/json`

-   Optionally an `Expires` header indicating when the files listed will no longer be available.

-   A body containing a json object providing metadata and links to the generated bulk data files.

    Required Fields:

-   `transactionTime` - a FHIR instant type that indicates the server's time when the query is run. No resources that have a modified data after this instant should be in the response.

-   `request` - the full url of the original bulk data kick-off request

-   `requiresAccessToken` - boolean value indicating whether downloading the generated files will require an authentication token. Note: This may be false in the case of signed S3 urls or an internal file server within an organization's firewall.

-   `output` - array of bulk data file items with one entry for each generated file. Note: If no data is returned from the kick-off request, the server should return an empty array.

-   `error` - array of error file items following the same structure as the `output` array. Note: If no errors occurred, the server should return an empty array. Note: Only the `OperationOutcome` resource type is currently supported, so a server will generate ndjson files where each row is an `OperationOutcome` resource.

    Each file item should contain the following fields:

-   `type` - the FHIR resource type that is contained in the file. Note: Each file may only contain resources of one type, but a server may create more than one file for each resources type returned. The number of resources contained in a file is may vary between servers. If no data is found for a resource, the server should not return an output item for it in the response.

-   `url` - the path to the file. The format of the file should reflect that requested in the `_outputFormat` parameter of the initial kick-off request.

    Each file item may optionally contain the following field:

-   `count` - the number of resources in the file, represented as a JSON number.

    Example response body:

        {
          "transactionTime": "[instant]",
          "request" : "[base]/Patient/$export?_type=Patient,Observation", 
          "requiresAccessToken" : true,
          "output" : [{
            "type" : "Patient",
            "url" : "http://serverpath2/patient_file_1.ndjson"
          },{
            "type" : "Patient",
            "url" : "http://serverpath2/patient_file_2.ndjson"
          },{
            "type" : "Observation",
            "url" : "http://serverpath2/observation_file_1.ndjson"
          }],
          "error" : [{
            "type" : "OperationOutcome",
            "url" : "http://serverpath2/err_file_1.ndjson"
          }]
        }

------------------------------------------------------------------------

### File Requests:

Using the urls supplied in the completed status request body, clients can download the generated bulk data files (one or more per resource type). Note: These files may be served by a file server rather than a FHIR specific server. Also, if the `requiresAccessToken` field in the status body is set to `true` the request must include a valid access token in the `Authorization` header in these requests (i.e., `Authorization: Bearer {{token}}`).

##### Endpoint

`GET [url from status request output field]`

##### Headers

-   `Accept` (optional, defaults to `application/fhir+ndjson`)

Specifies the format of the file being returned. Optional, but currently only application/fhir+ndjson is supported.

##### Response - Success

-   HTTP status of `200 OK`
-   `Content-Type` header of `application/fhir+ndjson`
-   Body of FHIR resources in newline delimited json - [ndjson](http://ndjson.org/) format

##### Response - Error

-   HTTP Status Code of `4XX` or `5XX`

\[%file newfooter%\]
