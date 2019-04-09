\[%settitle Testing FHIR%\]
\[%file newnavbar%\]
<span id="testing"></span>
Testing FHIR
------------

|                                                |                                             |                                                                                  |
|------------------------------------------------|---------------------------------------------|----------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process):[Draft](versions.html#std-process) |

The FHIR specification describes a set of [resources](resource.html), and several different frameworks for exchanging resources between different systems. Because of its general nature and wide applicability, the rules made in this specification are fairly loose. As a consequence, and in order to insure interoperability between applications claiming conformance to this specification, a testing framework has been established within the FHIR specification. To this end, the [TestScript](testscript.html) resource provides an implementation-agnostic description of tests that allows test execution engines to evaluate if a FHIR implementation conforms with the FHIR specification. Providing a clear and concise test methodology for the FHIR specification through the TestScript resource helps to enable interoperability among various FHIR server and client implementations.

Furthermore, the TestScript resource provides clear examples of the appropriate use of the FHIR specification through test-based documentation. The TestScript resource stands as a form of executable documentation allowing developers to examine the operations defined by the tests in order to understand how various RESTful API interactions and resources should be used in coordination. The tests can also be automatically executed against systems under development to determine how well the systems adhere to the specification.

The TestScript resource contains:

-   Name and description detailing the purpose of the test suite
-   Links describing how the test suite relates to the FHIR specification
-   A list of server interactions required to execute the test suite
-   A list of server interactions that the test suite validates the correctness of
-   The fixtures (required data or resources) the tests use during execution
-   A set of operations to set up the test suite environment
-   A list of tests each containing
    -   Name and description of the test
    -   Links describing how the test relates to the FHIR specification
    -   A list of server interactions required to execute the test
    -   A list of server interactions that the test validates the correctness of
    -   A list of operations that provide the execution logic of the test
    -   A list of assertions that provide the verification logic of the test
-   A set of operations to tear down the test environment

<span id="execution"></span>
### Execution

<span id="workflow"></span>
#### Workflow

**Pre-Processing**

The TestScript execution workflow begins by determining if the test suite is appropriate for the server under test. This can be determined by evaluating if the interactions listed in the TestScript metadata "capabilities" section are supported by the server's conformance resource. If the capabilities are supported by the server, then the TestScript can be executed. Otherwise, a test engine will provide a comparison of the system under test�s conformance capabilities and allow a TestScript as a whole to be skipped based on this comparison. See [How to specify metadata capabilities](#howToSpecifiyCapabilities).

If the server supports the requirements of the TestScript instance, any specified fixtures are loaded or retrieved. If the fixtures are marked as 'autocreate' then they are automatically created on the server(s) under test using 'create' operations. If any of the autocreate operations fail, then the tests in the TestScript are skipped.

**Setup Execution**

After the fixtures are loaded and autocreates are executed, the setup section is executed to establish the testing environment. The purpose of the setup section is typically to pre-load data (if it was not autocreated) or delete data required for the execution of the tests against the FHIR system(s) under test. The setup operations are executed once before all the tests are run (see [Operation Execution](#operation-execution)). All operations in a setup section (including assertions) must complete successfully for the subsequent tests to be executed. If an assertion operation in the setup section fails, then execution and evaluation of the tests in the TestScript should be skipped. Technically, any operation (see the [operations table](#operations-table) for a complete listing) can be included in the setup section, but typical operations will be create, update, read, and vread.

Due to the possibility that the setup actions are not required on the server under test, the TestScript execution workflow MAY provide the capability of skipping or ignoring the setup section of the TestScript.

**Test Execution**

Once setup is complete, each test is executed. Tests contain a set of operations, and executing a test involves the evaluation of each operation listed in the test in the order defined by the test (see [Operation Execution](#operation-execution) and the [list of operations](#operations-table)).

**Teardown Execution**

After all the tests have completed execution, the teardown section is executed. The purpose of the teardown section is to revert the FHIR server under test to a pre-test clean state. This requires removing any resources or artifacts generated as part of test suite setup or test execution. Technically, any operation (see the [operations table](#operations-table) for a complete listing) can be included in the teardown section, but the most often used operation will be delete. Assertions are not supported in the teardown section.

Due to the possibility that the teardown actions are not required on the server under test, the TestScript execution workflow MAY provide the capability of skipping or ignoring the teardown section of the TestScript.

**Post-Processing**

After the teardown section is executed, any fixtures that were marked 'autodelete' are removed from the server(s) under test. After this final stage, the execution of the TestScript is complete.

<span id="fixtures"></span>
#### Fixtures

The fixtures section of the TestScript defines a set of resource instances that will be used as part of the setup, test, and teardown sections during TestScript execution. All defined fixtures are expected to be required in order for the test script to execute. Each fixture defines a resource instance by URI, and must be identified by an ID. The URI can be local or remote (i.e. another server than the one the TestScript resource resides), absolute or relative. The ID on the fixture is considered the "source" identifier of the fixture -- it is not the same thing as the resource ID on the server where it was hosted. The "source" identifier is used to define the fixture instance within the context of the TestScript. Operations reference the ID of a fixture to uniquely identify the fixture instance the operation is using ("sourceId") or acting against ("targetId"). Once a fixture has been instantiated on a server (typically by the use of a create operation), the fixture ID is mapped to the ID of the corresponding resource instance on the server. TestScript execution engines must maintain this relationship between fixture IDs and server resource IDs. The TestScript execution engine is responsible for translating the fixture IDs (whether provided to the operation as "source" or "target") to the ID of the resource on the server during execution.

Using the optional "autocreate" and "autodelete" elements (missing values default to false), fixtures can be configured to automatically be created during TestScript setup and automatically deleted during TestScript teardown. This means that additional "create" and "delete" operations in the TestScript.setup and TestScript.teardown sections are unnecessary.

<span id="profiles"></span>
#### Profiles

The profiles section of the TestScript defines a set of FHIR profiles (see [StructureDefinition](structuredefinition.html) resource) that will be used as part of the setup or test sections during TestScript execution. Each profile defines a StructureDefinition instance by URI, and must be identified by an ID. The URI SHALL reference a known FHIR profile corresponding to the FHIR specification version being tested. As with Fixtures, the ID on the profile is considered the "source" identifier of the profile. Operations reference the ID of a profile to uniquely identify the profile instance the operation is using ("validateProfileId").

See [Use Profiles](#howToUseProfiles) for more information.

<span id="variables"></span>
#### Variables

The variables section of the TestScript defines a set of expressions whose evaluations will be used in substitutions. These substitutions are performed in operation request headers and URL paths as well as assertion values.

Without variables, search parameters and request headers (such as If-Modified-Since) would be specified in outgoing requests as literal values. Variables allow the values to be managed externally in fixtures or dynamically in server response fixtures. They would be defined to hold path expressions against the fixtures. The path expressions would not change from one server to another, but the fixture data could.

Using variables allows for the same test scripts to be executed against the same servers by different clients at the same time. Each client would change the fixture data (external to the test script) to make the data unique to that client. This ensures that the same delete/create/read operations executed concurrently by one client does not interfere with those of another client. That can be important within the context of a testing event such as a Connectathon. It can be very useful in year-round testing against public servers as well.

See [Use Variables](#howToUseVariables) for more information.

<span id="op"></span>
#### Operation Execution

The setup, test, and teardown sections of a TestScript can contain operation elements. Operations are intended to be executed in sequence and they represent the logic defined by the TestScript. Operations define a type, sourceId, targetId, destination, responseId, contentType, and other parameters. The type of the operation aligns with a corresponding RESTful API interaction. The sourceId and targetId of an operation define the context of the fixture data the operation is acting against (see [Fixtures](#fixtures)). The destination defines the server the operation is executed on and is only required for tests that include multiple servers. The responseId specifies a fixture ID to use to map to the server response. The contentType defines the format (XML or JSON) and the corresponding mime-type (application/fhir+xml and application/fhir+json) to use in the RESTful operation (defaulting to XML). The parameters of an operation allow providing additional data required for execution.

TestScript execution engines must load the operation details and execute the operation against the server(s) under test. Operations that are expected to result in an error or exception shall immediately be followed by one or more "assertion" operations (that test for those error conditions), otherwise the test fails. This allows for "negative" testing (for example, the test script may perform operations that should return a 4XX or 5XX HTTP response code). Test execution is halted as soon as an operation or assertion fails. If an operation or assertion fails, then the test ends in failure and the test script execution proceeds to the next test. Once all tests have completed execution, the teardown section is executed. Once teardown completes, the suite execution is complete. If any setup or test operation or assertion failed, the test script is marked in failure. Failures in teardown are ignored.

<span id="assert"></span>
#### Assertion Execution

The "assertion" evaluates the results of previous operations to determine if the server under test behaves appropriately. In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the TestScript execution engine.

The TestScript execution engine must implement the behavior of each assertion to determine if the response of the last operation meets the conditions of the assertion.

If the conditions of the assertion are met execution of the test continues. If the conditions of the assertion are not met, the test being executed fails and execution of the test is halted. Test execution will then continue with the next test.

**Conditional Asserts**

The ability to conditionally evaluate an assert is not defined as part of the native behavior within the TestScript resource or execution engine. This means that all subsequent test asserts are not evaluated when a prior assert within the same test evaluates to a failure. The current workaround is to set warningOnly=true for those asserts that require conditional evaluation.

Another optional workaround is to provide the TestScript execution engine with access to an external Rules engine. The TestScript execution engine author is encouraged to build and publish this functionality within an appropriate FHIR [ImplementationGuide](implementationguide.html).

<span id="howTos"></span>
### How Tos

<span id="mark"></span>
#### Mark a Resource as a Test

To mark a resource as a test resource, use the testing tag:

``` xml
<Patient xmlns="http://hl7.org/fhir">
  <meta>
    <security>
      <system value="http://hl7.org/fhir/v3/ActReason"/>
      <code value="HTEST"/>
      <display value="test health data"/>
    </security>
  </meta>
</Patient>
```

Not all testing resources need to explicitly marked as 'HTEST', but it may be necessary when performing testing on a production system, for instance. Note: This is a security label because different access control rules may apply to test resources.

<span id="create"></span>
#### Test create operation

To test if the [create](http.html#create) operation is properly supported on a server, run the operation as part of [TestScript.test](testscript-definitions.html#TestScript.test).

First, define the [fixture](testscript-definitions.html#TestScript.fixture) as a [reference](references.html) at the top of the test script. The fixture will hold the body of the POST request:

Note that it is illegal for the fixture to contain a resource id in a create operation.

Point the [sourceId](testscript-definitions.html#TestScript.setup.action.operation.sourceId) element of the create operation to the fixture id just defined:

There are two ways to verify that the create operation returned the right status code:

1.  Use [assert.response](testscript-definitions.html#TestScript.setup.action.assert.response):

    See [response codes](valueset-assert-response-code-types.html) for complete list.

2.  Use [assert.responseCode](testscript-definitions.html#TestScript.setup.action.assert.responseCode) explicitly:

------------------------------------------------------------------------

<span id="search"></span>
#### Test search operation

To test if [search](http.html#search) operation is properly supported on a server, run the operation as part of [TestScript.test](testscript-definitions.html#TestScript.test).

Use the [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) element to specify the resource type and the [params](testscript-definitions.html#TestScript.setup.action.operation.params) element to specify the search parameters:

The [contentType](testscript-definitions.html#TestScript.setup.action.operation.contentType) element is optional and will default to "xml" which will translate to HTTP request header "Content-Type" being set to "application/fhir+xml" by test engines. In this case, though, it was used to set it to "application/fhir+json".

The [responseId](testscript-definitions.html#TestScript.setup.action.operation.responseId) element was used to store the response in a reference called "R1". This reference will hold both the response headers and the response body.

Verify that the search operation returned the right status code:

See [response codes](valueset-assert-response-code-types.html) for complete list.

Verify that the search operation returned the right resource type:

There are many ways to verify that the search operation returned the right Patient:

1.  Explicitly compare the elements to known value:

    The [sourceId](testscript-definitions.html#TestScript.setup.action.assert.sourceId) element is pointed to the [responseId](testscript-definitions.html#TestScript.setup.action.operation.responseId) value of the search operation. If no [sourceId](testscript-definitions.html#TestScript.setup.action.assert.sourceId) is specified, then test engines will use the response of the last operation in the test script even if [responseId](testscript-definitions.html#TestScript.setup.action.operation.responseId) was not specified in the operation.

    The [path](testscript-definitions.html#TestScript.setup.action.assert.path) element holds an XPath or JSONPath expression against the response body contents.

2.  Compare the elements in response to elements in another fixture that is either dynamically set by [responseId](testscript-definitions.html#TestScript.setup.action.operation.responseId) or defined statically by the [fixture](testscript-definitions.html#TestScript.fixture) element at the top of the script:

    This time the birthDate value in the response is compared to the birthDate value in a fixture called 'F1'.

3.  Verify that the response contains all the element/content in another fixture pointed to by [minimumId](testscript-definitions.html#TestScript.setup.action.assert.minimumId).

    Test engines will parse the 'body' of the F1 fixture and verify that each element and its value matches the corresponding element in the R1 response body. In other words, R1 is verified to be a 'superset' of F1. The resource id element in the body will be ignored during comparison. The headers will also be ignored.

    F1 can be statically defined or it can be the [responseId](testscript-definitions.html#TestScript.setup.action.operation.responseId) for another operation. If [sourceId](testscript-definitions.html#TestScript.setup.action.assert.sourceId) is not specified, then test engines will use the response of the last operation. So the previous assertion could have been defined as:

------------------------------------------------------------------------

<span id="delete"></span>
#### Perform delete operation in teardown

Test scripts should clean up resources created as part of execution. The [TestScript.teardown](testscript-definitions.html#TestScript.teardown) operations will get executed once before the test script execution completes.

Here are a couple of ways to run delete operation in [TestScript.teardown](testscript-definitions.html#TestScript.teardown):

1.  Use [conditional delete](http.html#2.1.0.12.1) operation in [TestScript.teardown](testscript-definitions.html#TestScript.teardown):

2.  Use delete operation with targetId fixture.

    To do that, the resource must have been created during [TestScript.setup](testscript-definitions.html#TestScript.setup) or [TestScript.test](testscript-definitions.html#TestScript.test):

    As part of [TestScript.teardown](testscript-definitions.html#TestScript.teardown), run the delete operation with [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) value pointed to [sourceId](testscript-definitions.html#TestScript.setup.action.operation.sourceId) value of the create operation:

    Test engines will keep track of response headers and body of all operations.

    The delete operation's targetId value is expected to correspond to the responseId of a GET operation (such as search or read) or the sourceId of a POST/PUT operation (such as create).

    For targetId value corresponding to responseId of GET operations (such as search or read), test engines will use the resource type and id returned in the GET response body's resource to set the \[type\] and \[id\] in delete operation's URL, respectively.

    For targetId value corresponding to responseId of POST/PUT operations (such as create), test engines will use the resource type and id returned in the POST/PUT response "Location" header to set the \[type\] and \[id\] in delete operation's URL, respectively. This is the case in the example above.

    The targetId value cannot point to a statically defined fixture as the id in the fixture cannot be relied upon.

------------------------------------------------------------------------

<span id="deleted-setup"></span>
#### Perform delete operation in setup

Deletion of resources created during test script execution should be done using [delete](http.html#delete) operation in [TestScript.teardown](testscript-definitions.html#TestScript.teardown). See [Perform delete operation in teardown](#howToDeleteResourceInTeardown) for details.

There might be left-over resource instances though on the server from prior executions of the script that terminated prematurely through an error. Resources can be deleted in [TestScript.setup](http.html#setup) as well to ensure reliable test execution.

To delete a resource in setup, the server is required to support [Conditional Delete](http.html#2.1.0.12.1) operation.

Use the [params](testscript-definitions.html#TestScript.setup.action.operation.params) element to specify the search criteria for the delete operation:

Test engines will append the contents of the params element to url after \[type\]: "\[base\]/\[type\]<span style="color: green;font-weight: bold;">?\[search parameters\]"</span>. The [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) element value ("Patient") will be used to replace \[type\] in the url.

------------------------------------------------------------------------

<span id="delete-op"></span>
#### Test conditional delete operation

To test if a server supports [conditional delete](http.html#2.1.0.12.1) operation, run a create operation prior to the delete using a sourceId that points to a [fixture](testscript-definitions.html#TestScript.fixture) defined at the top of the script:

Then use the [params](testscript-definitions.html#TestScript.setup.action.operation.params) element to specify the search criteria for the delete operation:

Test engines will append the contents of the [params](testscript-definitions.html#TestScript.setup.action.operation.params) element to url after \[type\]: "\[base\]/\[type\]<span style="color: green;font-weight: bold;">?\[search parameters\]"</span>. The [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) element value ("Patient") will be used to replace \[type\] in the url.

To verify that the delete operation returned the right status code:

To verify that the resource was indeed deleted on the server, run a search using the same parameters and verify that the status code is 404 (not found):

------------------------------------------------------------------------

<span id="create-cond"></span>
#### Test conditional create operation

To test if a server supports [conditional create](http.html#2.1.0.13.1) operation, use the 'If-None-Exist' request header:

The response code of 200 verifies that the resource already exists and did not get created:

------------------------------------------------------------------------

<span id="update"></span>
#### Test update operation

[Update](http.html#update) operations require a resource id. The id must be present in the fixture (PUT body contents) as well as the URL. The values must match.

Because resource ids cannot be predicted on the server, it is best to retrieve the id on a resource freshly created as part of the script

There are many ways to do that. Below is a couple:

1.  Use update operation with [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) fixture pointing to create operation's [responseId](testscript-definitions.html#TestScript.setup.action.operation.responseId):

    Test engines will keep track of response headers and body of all operations.

    The update operation's targetId value is expected to correspond to the responseId of a GET operation (such as search or read) or the sourceId of a POST/PUT operation (such as create).

    For targetId value corresponding to responseId of GET operations (such as search or read), test engines will use the resource type and id returned in the GET response body's resource to set the \[type\] and \[id\] in update operation's URL, respectively. This is the case in the next example below.

    For targetId value corresponding to responseId of POST/PUT operations (such as create and update), test engines will use the resource type and id returned in the POST/PUT response "Location" header to set the \[type\] and \[id\] in update operation's URL, respectively. This is the case in the example above.

    The targetId value cannot point to a statically defined fixture as the id in the fixture cannot be relied upon.

2.  Use update operation with [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) fixture pointing to search operation's [responseId](testscript-definitions.html#TestScript.setup.action.operation.responseId):

After the update operation, test scripts would perform at least one more read/search operation to retrieve the contents of the updated resource and then perform assertions to verify that the data did indeed get updated on the server:

Verify that the birthdate got updated and is being returned properly:

------------------------------------------------------------------------

<span id="cond-update"></span>
#### Test conditional update operation

Unlike a regular [update](http.html#update) operation, a [conditional update](http.html#2.1.0.10.1) operation does not require a resource id in the URL (or the body of the PUT).

To test conditional update, use [params](testscript-definitions.html#TestScript.setup.action.operation.params) element in the operation instead of [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId). The [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) element will be required in this case.

Test engines will append the contents of the [params](testscript-definitions.html#TestScript.setup.action.operation.params) element to url after \[type\]: "PUT \[base\]/\[type\]<span style="color: green;font-weight: bold;">?\[search parameters\]"</span>. The [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) element value ("Patient") will be used to replace \[type\] in the URL.

Verify that the birthdate got updated and is being returned properly:

------------------------------------------------------------------------

<span id="read"></span>
#### Test read operation

The [read](http.html#read) operation requires the resource id in the URL. Since resource ids are unpredictable on servers, it's best to create the resource within the test script prior to executing the read operation:

One way to execute the read operation is to run the read operation with [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) value pointed to [responseId](testscript-definitions.html#TestScript.setup.action.operation.responseId) value of the create operation:

Test engines will keep track of response headers and body of all operations.

The read operation's targetId value is expected to correspond to the responseId of a GET operation (such as search or read) or the sourceId of a POST/PUT operation (such as create).

For targetId value corresponding to responseId of GET operations (such as search or read), test engines will use the resource type and id returned in the GET response body's resource to set the \[type\] and \[id\] in read operation's URL, respectively.

For targetId value corresponding to responseId of POST/PUT operations (such as create), test engines will use the resource type and id returned in the POST/PUT response "Location" header to set the \[type\] and \[id\] in read operation's URL, respectively. This is the case in the example above.

The targetId value cannot point to a statically defined fixture as the id in the fixture cannot be relied upon.

------------------------------------------------------------------------

<span id="vread"></span>
#### Test vread operation

The [vread](http.html#vread) operation requires the resource id as well as the resource version id in the URL. Since resource ids and version ids are unpredictable on servers, it's best to create the resource within the test script prior to executing the vread operation:

One way to execute the vread operation is to run the vread operation with [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) value pointed to [responseId](testscript-definitions.html#TestScript.setup.action.operation.responseId) value of the create operation:

Test engines will keep track of response headers and body of all operations.

The vread operation's targetId value is expected to correspond to the responseId of a GET operation (such as search or read) or the sourceId of a POST/PUT operation (such as create).

For targetId value corresponding to responseId of GET operations (such as search or read), test engines will use the resource type, id and version id returned in the GET response body's resource to set the \[type\], \[id\] and \[vid\] in vread operation's URL, respectively.

For targetId value corresponding to responseId of POST/PUT operations (such as create), test engines will use the resource type, id and version id returned in the POST/PUT response "Location" header to set the \[type\], \[id\] and \[vid\] in vread operation's URL, respectively. This is the case in the example above.

The targetId value cannot point to a statically defined fixture as the id in the fixture cannot be relied upon.

------------------------------------------------------------------------

<span id="history"></span>
#### Test history operation

The [history](http.html#history) operation can be executed in the following ways:

1.  GET \[base\]/\[type\]/\[id\]/\_history{?\[parameters\]&\_format=\[mime-type\]}

    Here the resource id is required in the URL. This is similar to read operation if targetId elemet is used. See [Test read operation](#howToTestReadOperation) for details.

2.  GET \[base\]/\[type\]/\_history{?\[parameters\]&\_format=\[mime-type\]}

    Here the resource id is not required in the URL.

    Instead of [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) element, the [params](testscript-definitions.html#TestScript.setup.action.operation.params) element can be used to specify the search criteria for the history operation.

    In the following example, all history entries for John Doe patient would be returned by server:

3.  GET \[base\]/\_history{?\[parameters\]&\_format=\[mime-type\]}

    Here neither the resource type nor the resource id is required in the URL. In the following example, no more than 50 history entries would be returned by server:

------------------------------------------------------------------------

<span id="accept"></span>
#### Specify Accept header in request

The default "Accept" header that will be set on all GET operations (such as read, vread, search, history, etc.) will be "application/fhir+xml".

There are two ways to change the default "Accept" header:

1.  Use the [accept](testscript-definitions.html#TestScript.setup.action.operation.accept) element:

    Test engines will set the Accept header to "application/fhir+json" if "json" is specified and will use "application/fhir+xml" if "xml" is specified.

2.  Use the [requestHeader](testscript-definitions.html#TestScript.setup.action.operation.requestHeader) element to set "Accept" <span style="font-weight:bold;">explicitly</span>:

    Test engines will take values specified for [requestHeader](testscript-definitions.html#TestScript.setup.action.operation.requestHeader) "as-is" and not transform them. This might be useful for negative testing, e.g. the value can be set explicitly to "application/xml" or an invalid value and verify server response.

------------------------------------------------------------------------

<span id="contenttype"></span>
#### Specify Content-Type header in request

The default "Content-Type" header that will be set on all POST/PUT operations (such as create, update, etc.) will be "application/fhir+xml".

There are two ways to change the default "Content-Type" header:

1.  Use the [contentType](testscript-definitions.html#TestScript.setup.action.operation.contentType) element:

    Test engines will set the Content-Type header to "application/fhir+json" if "json" is specified and will use "application/fhir+xml" if "xml" is specified.

2.  Use the [requestHeader](testscript-definitions.html#TestScript.setup.action.operation.requestHeader) element to set Content-Type <span style="font-weight:bold;">explicitly</span>:

    Test engines will take values specified for [requestHeader](testscript-definitions.html#TestScript.setup.action.operation.requestHeader) "as-is" and not transform them. This might be useful for negative testing e.g. the value can be set explicitly to "application/xml" or an invalid value and verify server response.

------------------------------------------------------------------------

<span id="ctverify"></span>
#### Verify Content-Type header in response

There are two ways to verify the "Content-Type" header in response:

1.  Use the [contentType](testscript-definitions.html#TestScript.setup.action.assert.contentType) element:

    Test engines will verify that "application/fhir+json" is present in Content-Type header if "json" is specified and will verify that "application/fhir+xml" is present if "xml" is specified.

2.  Use the [requestHeader](testscript-definitions.html#TestScript.setup.action.assert.requestHeader) element to verify Content-Type <span style="font-weight:bold;">explicitly</span>:

    Test engines will take values specified for [headerField](testscript-definitions.html#TestScript.setup.action.assert.headerField) "as-is" and not interpret them.

    Note that test engines will not verify contentType in response if assertions for contentType are missing.

------------------------------------------------------------------------

<span id="profiles"></span>
#### Use Profiles

[Profiles](#profiles) are defined against known FHIR profiles (see [StructureDefinition](structuredefinition.html) resource) corresponding to the FHIR specification version being tested. They are used in the "assert.validateProfileId" and, when present in an assert, will invoke validation of the FHIR resource payload in either the request or response message.

Profiles would be defined at the top of the script.

Below is a profile that is defined against the FHIR Patient resource type and referenced by "P1":

Test engines will not evaluate this at this point. They will store the profile reference in "P1" and will look for "P1" in an "assert.validateProfileId" element values during operation calls.

Here is a read operation for a Patient with a resource id of "example" followed by an assert that performs a FHIR validation using the base FHIR profile for the Patient resource type referenced by the "P1" profile. The validation will be performed against the response payload by default if the "assert.direction" is not present. If the validation returns any "fatal" or "error" messages, then this assert will be failed. Otherwise, if the validation returns any "warning" messages, then this assert will pass but with warnings. Finally, if the validation returns only "information" messages or no messages, then this assert will pass.

------------------------------------------------------------------------

<span id="variables"></span>
#### Use Variables

[Variables](#variables) can be defined against static fixtures and dynamic operation responses. They can be used in "operation.params", "operation.requestHeader.value", "operation.url", and "assert.value" element values. As such they allow for the data used in operations and assertions to be externally defined. The data could be unique to each client involved in interactions with a server or could be unique to a given server database instance. This allows for multiple clients to execute the same test scripts concurrently against the same server.

Variables would be defined at the top of the script.

Below is a variable that is defined as the Location header to the response referenced by "R1":

Test engines will not evaluate this at this point. They will store the expression in "V1" and will look for "${}" in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls.

Here is a read operation that will use the V1 variable. The variable expression was "Location against R1 response" (defined above). If a prior operation has not set R1 to be the responseId of the operation, then test engine will error out. Otherwise, V1 will be set to the Location header value of R1 response and that value will be substituted for ${V1} below. In other words, the read will be performed against the Location header value of R1 response.

Below are three variables defined as path expressions against the static fixture referenced by "F1". The expressions are against the given name, family name, and birthDate of a patient resource. The resource data will be managed external to the test script.

Again, test engines will not evaluate the path expression at this point. They will look for anything wrapped in '${}' in "operation.params", "operation.requestHeader.value", "operation.url", and "assert.value" element values and substitute the placeholders with the evaluated expressions.

Here is a conditional create operation that will set the requestHeader using the PatientGivenName, PatientFamilyName, and PatientDOB variables defined above. The variable expressions were path expressions against the statically defined F1 fixture. They will be evaluated against the fixture body (containing resource) and the corresponding values will be extracted from the fixtures and used to substitute the variables in the requestHeader value below.

Here is a search operation that will perform a search using the PatientGivenName, PatientFamilyName, and PatientDOB variables defined above. The variable expressions were path expressions against the statically defined F1 fixture. They will be evaluated against the fixture body (containing resource) and the corresponding values will be extracted from the fixtures and used to substitute the variables in the params value below.

Here are the assertions that verify that the search was successful:

------------------------------------------------------------------------

<span id="format"></span>
#### Test server support for '\_format'

Servers are required to support "\_format" in the request url to determine the response mime-type. See [Content Type and Encodings](#http.html#2.1.0.6)

Use the [params](testscript-definitions.html#TestScript.setup.action.operation.params) element to specify the \_format:

Use the [requestHeader](testscript-definitions.html#TestScript.setup.action.assert.requestHeader) element to verify Content-Type <span style="font-weight:bold;">explicitly</span>:

------------------------------------------------------------------------

<span id="metadata"></span>
#### How to specify metadata capabilities

If the capabilities are supported by the server, then the TestScript can be executed. Otherwise, a test engine will provide a comparison of the system under test�s conformance capabilities and allow a TestScript as a whole to be skipped based on this comparison..

Here's how to specify that the test script requires the server to support Patient create and delete operations:

The contents of PatientCreateDelete.xml would be a minimal capability statement to indicate what sections need to be present in server capability statement:

When the metadata capabilities section is defined at [TestScript.metadata](testscript-definitions.html#TestScript.metadata) and the server's capability statement does not contain the elements defined in the minimal capability statement, then all the tests in the TestScript are skipped.

The "metadata.capabilities.required" and "metadata.capabilities.validated" elements only indicate whether the capabilities are the primary focus of the test script or not. The do not impact the skipping logic. Capabilities whose "metadata.capabilities.validated" flag is true are the primary focus of the test script.

------------------------------------------------------------------------

<span id="ops"></span>
Operations
----------

This table presents a summary of the constraints applicable to TestScript.setup.action.operation, TestScript.test.action.operation, and TestScript.teardown.action.operation elements. The operation elements should be configured consistently with the [FHIR RESTful API summary](http.html).

read
vread
search
history
create
update
transaction
conformance
delete
resource
The [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) element is required to specify the resource (\[type\]) in the request URL when [params](testscript-definitions.html#TestScript.setup.action.operation.params) element is used. Will be ignored if [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) or [url](testscript-definitions.html#TestScript.setup.action.operation.url) are specified. In the case of [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId), the resource type will be extracted from the fixture.
If [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) is specified, then \[type\] for request URL will be determined from targetId's fixture and [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) element will be ignored. Otherwise, resource type will be extracted from [sourceId](testscript-definitions.html#TestScript.setup.action.operation.sourceId)'s fixture if specified. For [conditional updates](http.html#2.1.0.10.1), [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) is required.
N/A
N/A
If [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) is specified, then \[type\] for request URL will be determined from [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) and [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) element will be ignored. For [conditional deletes](http.html#2.1.0.12.1), [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) is required.
accept
The [accept](testscript-definitions.html#TestScript.setup.action.operation.accept) element can be used to specify the "Accept" header in the outgoing HTTP request. If "json" is specified, then "Accept" value of "application/fhir+json" will be set in the request header. If "xml" is specified, then "application/fhir+xml" will be used.
N/A
contentType
The [contentType](testscript-definitions.html#TestScript.setup.action.operation.contentType) element can be used to specify the "Content-Type" header in the outgoing HTTP request. If "json" is specified, then "Content-Type" value of "application/fhir+json" will be set in the request header. If "xml" is specified, then "application/fhir+xml" will be used.
N/A
destination
If the TestScript is testing more than one FHIR server simultaneously, the [destination](testscript-definitions.html#TestScript.setup.action.operation.destination) identifies which test system the operation will receive this request message using zero-based indexing. The destination value MUST be equal to a defined [TestScript.destination"](testscript-definitions.html#TestScript.destination).
encodeRequestUrl
The [encodeRequestUrl](testscript-definitions.html#TestScript.setup.action.operation.encodeRequestUrl) element, if "true", can be used to specify that the destination test system will receive this request message URL query parameters in HTML (Percent) encoded UTF-8 format.
origin
If the TestScript is testing more than one FHIR server simultaneously, the [origin](testscript-definitions.html#TestScript.setup.action.operation.origin) identifies which test system the operation will send this request message using zero-based indexing. The destination value MUST be equal to a defined [TestScript.origin"](testscript-definitions.html#TestScript.origin).
params
The [params](testscript-definitions.html#TestScript.setup.action.operation.params) element can be used to specify the \[id\] using variable substitutions and the rest of the highlighted portion in the request URL:
\[base\]/\[type\]<span style="font-weight:bold">/\[id\] {?\_format=\[mime-type\]}</span>
If used, then [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) is required and [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) and [url](testscript-definitions.html#TestScript.setup.action.operation.url) must not be specified.
The [params](testscript-definitions.html#TestScript.setup.action.operation.params) element can be used to specify the \[id\] and \[vid\] using variable substitutions and the rest of the highlighted portion in the request URL:
\[base\]/\[type\]<span style="font-weight:bold">/\[id\]/\_history/\[vid\] {?\_format=\[mime-type\]}</span>
If used, then [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) is required and [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) and [url](testscript-definitions.html#TestScript.setup.action.operation.url) must not be specified.
The [params](testscript-definitions.html#TestScript.setup.action.operation.params) element can be used to specify the highlighted portion in the request URL:
\[base\]/\[type\]<span style="font-weight:bold">{?\[parameters\]{&\_format=\[mime-type\]}}</span>
If used, then [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) is optional and [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) and [url](testscript-definitions.html#TestScript.setup.action.operation.url) must not be specified.
The [params](testscript-definitions.html#TestScript.setup.action.operation.params) element can be used to specify the \[id\] using variable substitutions and the rest of the highlighted portion in the following request URLs:
\[base\]/\[type\]<span style="font-weight:bold">/\[id\]/\_history{?\[parameters\]&\_format=\[mime-type\]}</span>
\[base\]/\[type\]<span style="font-weight:bold">/\_history{?\[parameters\]&\_format=\[mime-type\]}</span>
\[base\]<span style="font-weight:bold">/\_history{?\[parameters\]&\_format=\[mime-type\]}</span>
If used, then [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) is optional and [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) and [url](testscript-definitions.html#TestScript.setup.action.operation.url) must not be specified.
N/A
The [params](testscript-definitions.html#TestScript.setup.action.operation.params) element can be used in [conditional update](http.html#2.1.0.10.1) operation to specify the highlighted portion of the request URL:
\[base\]/\[type\]<span style="font-weight:bold">?\[search parameters\]</span>
If used, then [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) is required and [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) and [url](testscript-definitions.html#TestScript.setup.action.operation.url) must not be specified.
N/A
The [params](testscript-definitions.html#TestScript.setup.action.operation.params) element can be used to specify the highlighted portion in the request URL:
\[base\]<span style="font-weight:bold">/metadata {?\_format=\[mime-type\]}</span>
If used, then [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) is ignored and [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) and [url](testscript-definitions.html#TestScript.setup.action.operation.url) must not be specified.
The [params](testscript-definitions.html#TestScript.setup.action.operation.params) element can be used to specify the \[id\] using variable substitutions in the request URL:
\[base\]/\[type\]<span style="font-weight:bold">/\[id\]</span>
If used, then [resource](testscript-definitions.html#TestScript.setup.action.operation.resource) is required and [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) and [url](testscript-definitions.html#TestScript.setup.action.operation.url) must not be specified.
requestHeader
The [requestHeader](testscript-definitions.html#TestScript.setup.action.operation.requestHeader) element allows for request headers to be specified <span style="font-weight: bold;">explicitly</span>. Test engines will take values specified for [requestHeader](testscript-definitions.html#TestScript.setup.action.operation.requestHeader) "as-is" and not transform them. This allows for testing using:
-   "If-Modified-Since" and "If-None-Match" headers. See [Conditional read](http.html#2.1.0.5.1).
-   "If-Match" header. See [Managing resource contention](http.html#2.1.0.11).
-   Conditional Create using "If-None-Exist". See [Conditional Create](http.html#2.1.0.13.1).
-   Invalid "Content-Type" header for negative testing.
-   etc.

requestId
N/A
N/A
N/A
N/A
The [requestId](testscript-definitions.html#TestScript.setup.action.operation.requestId) element can be used to reference the operation request containing response body and headers. If specified, the value can later be used in assertion [sourceId](testscript-definitions.html#TestScript.setup.action.operation.sourceId) to evaluate [path](testscript-definitions.html#TestScript.setup.action.assert.path) (XPath/JSONPath) and [headerFields](testscript-definitions.html#TestScript.setup.action.assert.headerField) against the request sent for an operation.
N/A
N/A
responseId
The [responseId](testscript-definitions.html#TestScript.setup.action.operation.responseId) element can be used to reference the operation response containing response body and headers. If specified, the value can later be used in assertion [sourceId](testscript-definitions.html#TestScript.setup.action.operation.sourceId) to evaluate [path](testscript-definitions.html#TestScript.setup.action.assert.path) (XPath/JSONPath) and [headerFields](testscript-definitions.html#TestScript.setup.action.assert.headerField) against the response received for an operation.
N/A
sourceId
N/A
N/A
N/A
N/A
The [sourceId](testscript-definitions.html#TestScript.setup.action.operation.sourceId) element points to a fixture to be used for the created resource. The fixture cannot contain the id element.
The [sourceId](testscript-definitions.html#TestScript.setup.action.operation.sourceId) element points to a fixture to be used for the updated resource. Has to correspond to the [responseId](testscript-definitions.html#TestScript.setup.action.operation.responseId) of an operation executed upstream in the test script. The response body must contain a resource with a resource id. The sourceId fixture cannot be statically defined because the id cannot be relied upon.
Fixture to be used for the transaction. Has to be a [Bundle](#bundle.html).
N/A
N/A
targetId
The [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) element can be used to specify the \[type\] and \[id\] in the request URL.
If used, then [params](testscript-definitions.html#TestScript.setup.action.operation.params) and [url](testscript-definitions.html#TestScript.setup.action.operation.url) must not be specified.
The targetId value has to correspond to the responseId of an operation executed upstream in the test script. The response body must contain a resource with a resource id. The targetId fixture cannot be statically defined because the id cannot be relied upon.
The [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) element can be used to specify the \[type\], \[id\], and \[vid\] in the request URL.
If used, then [params](testscript-definitions.html#TestScript.setup.action.operation.params) and [url](testscript-definitions.html#TestScript.setup.action.operation.url) must not be specified.
The targetId value has to correspond to the responseId of an operation executed upstream in the test script. The response body must contain a resource with a resource id. The targetId fixture cannot be statically defined because the id and vid cannot be relied upon.
The [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) element cannot be used as it's not allowed with [params](testscript-definitions.html#TestScript.setup.action.operation.params) element
The [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) element can be used to specify the \[type\], \[id\], and \[vid\] in the request URL.
If used, then [params](testscript-definitions.html#TestScript.setup.action.operation.params) and [url](testscript-definitions.html#TestScript.setup.action.operation.url) must not be specified.
The targetId value has to correspond to the responseId of an operation executed upstream in the test script. The response body must contain a resource with a resource id. The targetId fixture cannot be statically defined because the id and vid cannot be relied upon.
N/A. The \[type\] for the request URL will be extracted from [sourceId](testscript-definitions.html#TestScript.setup.action.operation.sourceId).
N/A. The \[type\] for the request URL will be extracted from [sourceId](testscript-definitions.html#TestScript.setup.action.operation.sourceId).
N/A.
N/A.
The [targetId](testscript-definitions.html#TestScript.setup.action.operation.targetId) element can be used to specify the \[type\] and \[id\] in the request URL.
If used, then [params](testscript-definitions.html#TestScript.setup.action.operation.params) and [url](testscript-definitions.html#TestScript.setup.action.operation.url) must not be specified.
The targetId value has to correspond to the responseId of an operation executed upstream in the test script. The response body must contain a resource with a resource id. The targetId fixture cannot be statically defined because the id cannot be relied upon.
url
The [url](testscript-definitions.html#TestScript.setup.action.operation.url) element will contain the full HTTP URL for the operation. This should rarely be used in test scripts. One possible application would be to test if the Location header returned in a response is pointing to an expected resource. See [testscript-example-search example](testscript-example-search.xml.html).
<span id="assert"></span>
Assertions
----------

<table>
<thead>
<tr class="header">
<th>Assertion</th>
<th>Valid operator values</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>compareToSourcePath</td>
<td>equals | notEquals</td>
<td>Asserts that <a href="testscript-definitions.html#TestScript.setup.action.assert.compareToSourcePath">compareToSourcePath</a> against the response body of <a href="testscript-definitions.html#TestScript.setup.action.assert.compareToSourceId">compareToSourceId</a> fixture evaluates to a value that is equal or notEqual to the evaluated value of <a href="testscript-definitions.html#TestScript.setup.action.assert.path">path</a> which must be present also.</td>
</tr>
<tr class="even">
<td>contentType</td>
<td>equals | notEquals | contains | notContains</td>
<td>Asserts that the &quot;Content-Type&quot; in response header is or is not the specified value for <a href="testscript-definitions.html#TestScript.setup.action.assert.contentType">contentType</a> element depending on the operator used.</td>
</tr>
<tr class="odd">
<td>headerField</td>
<td>equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains</td>
<td>Asserts that the header specified for <a href="testscript-definitions.html#TestScript.setup.action.assert.headerField">headerField</a> element in the response contains, not contains, is equal, not equal, in, not in, greater than, or less than the value specified for <a href="testscript-definitions.html#TestScript.setup.action.assert.value">value</a> element if present.<br />
If the <a href="testscript-definitions.html#TestScript.setup.action.assert.operator">operator</a> is &quot;empty&quot; or &quot;notEmpty&quot; then <a href="testscript-definitions.html#TestScript.setup.action.assert.value">value</a> will be ignored.<br />
If <a href="testscript-definitions.html#TestScript.setup.action.assert.sourceId">sourceId</a> is not specified, then <a href="testscript-definitions.html#TestScript.setup.action.assert.headerField">headerField</a> will be evaluated against the last operation's response headers.</td>
</tr>
<tr class="even">
<td>minimumId</td>
<td>N/A</td>
<td>Asserts that the response contains all the element/content in another fixture pointed to by <a href="testscript-definitions.html#TestScript.setup.action.assert.minimumId">minimumId</a> element. This can be a statically defined <a href="testscript-definitions.html#TestScript.fixture">fixture</a> or one that is dynamically set via <a href="testscript-definitions.html#TestScript.setup.action.operation.responseId">responseId</a>.</td>
</tr>
<tr class="odd">
<td>navigationLinks</td>
<td>N/A</td>
<td>Asserts that the response Bundle contains or does NOT contain first, last, and next links depending on whether or not <a href="testscript-definitions.html#TestScript.setup.action.assert.navigationLinks">navigationLinks</a> element is set to true or false.</td>
</tr>
<tr class="even">
<td>path</td>
<td>equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains</td>
<td>Asserts that <a href="testscript-definitions.html#TestScript.setup.action.assert.path">path</a> against the response body evaluates to a value that contains, not contains, is equal, not equal, in, not in, greater than, or less than the value specified for <a href="testscript-definitions.html#TestScript.setup.action.assert.value">value</a> element if present.<br />
If the <a href="testscript-definitions.html#TestScript.setup.action.assert.operator">operator</a> is &quot;empty&quot; or &quot;notEmpty&quot; then <a href="testscript-definitions.html#TestScript.setup.action.assert.value">value</a> will be ignored.<br />
If <a href="testscript-definitions.html#TestScript.setup.action.assert.sourceId">sourceId</a> is not specified, then <a href="testscript-definitions.html#TestScript.setup.action.assert.path">path</a> will be evaluated against the last operation's response body.</td>
</tr>
<tr class="odd">
<td>resource</td>
<td>equals | notEquals</td>
<td>Asserts that the resource returned in the response body is or is not of the specified value for <a href="testscript-definitions.html#TestScript.setup.action.assert.resource">resource</a> element.</td>
</tr>
<tr class="even">
<td>response</td>
<td>equals | notEquals</td>
<td>Asserts that status code in the response is or is not one of the enumerated values in <a href="valueset-assert-response-code-types.html">response abbreviations</a>.</td>
</tr>
<tr class="odd">
<td>responseCode</td>
<td>equals | notEquals | in | notIn | greaterThan | lessThan</td>
<td>Asserts that status code in the response is equal, notEqual, in, not in, greater than, or less than the specified value(s) for <a href="testscript-definitions.html#TestScript.setup.action.assert.responseCode">responseCode</a> element</td>
</tr>
<tr class="even">
<td>validateProfileId</td>
<td>N/A</td>
<td>Asserts that the response is valid according to the profile specified by <a href="testscript-definitions.html#TestScript.setup.action.assert.validateProfileId">validateProfileId</a> element.</td>
</tr>
</tbody>
</table>

\[%file newfooter%\]
