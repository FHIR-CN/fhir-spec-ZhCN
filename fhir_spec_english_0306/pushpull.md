\[%settitle Managing Push and Pull%\]
\[%file newnavbar%\]
|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

Managing Push and Pull
----------------------

The primary focus of FHIR is the exchange of healthcare data between systems. Whenever one system has information that another needs or wants, one question that automatically arises is whether the source system will push the data, or whether the destination system will pull the data.

|      |                                                                                                                                                                                                                                                                                                                      |
|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Push | As new information becomes available, or whenever is deemed appropriate, the source system sends the information to the destination. It expects the destination system to maintain and index the information on receipt. The source system must trust the destination system to manage access/security appropriately |
| Pull | The source system maintains and indexes data. When the destination system wants or needs the information, it must retrieve it from the source system. Either the source or the destination (or both) manages access/security                                                                                         |

Note that it is possible to mix these modes by adding an interface repository into the mix. For example, to connect a push-based source with a pull-based destination, simply have the source push information to the repository, and the destination can pull data from it as required. If the source is pull-based, the interface repository can query it for new data on a regular basis, and when it finds any, it can pull it into the repository and/or push it to the destination.

Which combination of push, pull and interface repositories is appropriate for any given context depends on a host of factors around deployment architecture, network and business topology, security policies, etc. However, it is often constrained by the capabilities of the various systems and the standards used in the exchange.

The FHIR specification supports and enables both push and pull:

-   **REST**: The REST API can be used in either fashion - this is discussed in more depth below
-   **Messages**: FHIR defines message events for both push and pull
-   **Services**: Services may be defined to support either model
-   **Documents**: This question doesn't apply, because documents are bundles that are exchanged using either REST, messages, or services

### Push and Pull on a RESTful interface

-   Push: The source is a client, and when new data is available, it uses [create](http.html#create), [update](http.html#update), and [transaction](http.html#transaction) to push data to the destination, which is a server
-   Pull: The source is a server, and the destination is a client. When the client wants to use the data, it uses a combination of [search](http.html#search) and [read](http.html#read) so the users can find the data they need
-   Push/Pull: The source is a server, and the destination is a client. On a regular basis, the destination queries the server for its [history](http.html#history), and replicates the changes in its own copy of the database

\[%file newfooter%\]
