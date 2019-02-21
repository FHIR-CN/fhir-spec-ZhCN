---
title: 扩展注册表
type: extension
order: 100
FHIR_version: r4

---

## 扩展目录


1.4 FHIR Core-defined Extension Registry[](extensibility-registry.html#1.4 "link to here")
------------------------------------------------------------------------------------------

[FHIR Infrastructure ![](external.png)](http://www.hl7.org/Special/committees/fiwg/index.cfm) Work Group

[Maturity Level](versions.html#maturity): N/A

[Standards Status](versions.html#std-process): [Informative](versions.html#std-process)

All extensions in this list are defined in this specification and have a base URI of `http://hl7.org/fhir/StructureDefinition/`. Additional extensions can be registered on the HL7 FHIR registry at [http://hl7.org/fhir/registry ![](external.png)](http://hl7.org/fhir/registry) .

**Identity**

**[Conf.](defining-extensions.html#cardinality)**

**Type**

**[Context](defining-extensions.html#context)**

**[FMM](versions.html#maturity)**

[capabilities](extension-capabilities.html "A set of codes that defines what the server is capable of.")

0..\*

[code](datatypes.html#code)

[CapabilityStatement.rest.security](capabilitystatement.html#CapabilityStatement)

1

[oauth-uris](extension-oauth-uris.html "Supports automated discovery of OAuth2 endpoints.")

0..1

(complex)

[CapabilityStatement.rest.security](capabilitystatement.html#CapabilityStatement)

1

[11179-objectClass](extension-11179-objectclass.html "A concept that represents a set of ideas, abstractions, or things in the real world that can be identified with explicit boundaries and meaning and whose properties and behavior follow the same rules. It may be either a single concept or a group of associated concepts, abstractions, or things.")

0..1

[Coding](datatypes.html#Coding)

[ElementDefinition.mapping](elementdefinition.html#ElementDefinition)

1

[11179-objectClassProperty](extension-11179-objectclassproperty.html "A quality common to all members of an object class. A property may be any feature that humans naturally use to distinguish one individual object from another. It is the human perception of a single quality of an object class in the real world.  It is conceptual and thus has no particular associated means of representation by which the property can be communicated.")

0..1

[Coding](datatypes.html#Coding)

[ElementDefinition.mapping](elementdefinition.html#ElementDefinition)

1

[11179-permitted-value-conceptmap](extension-11179-permitted-value-conceptmap.html "Expresses the linkage between the internal codes used for storage and the codes used for exchange.")

0..1

[canonical](datatypes.html#canonical)

[StructureDefinition.snapshot.element.binding.valueSet](structuredefinition.html#StructureDefinition),  
[StructureDefinition.differential.element.binding.valueSet](structuredefinition.html#StructureDefinition),  
[Questionnaire.item.answerValueSet](questionnaire.html#Questionnaire)

1

[11179-permitted-value-valueset](extension-11179-permitted-value-valueset.html "Allows expressing the value set that must be stored internally by the system (as distinct from the base value set which defines values for exchange).")

0..1

[canonical](datatypes.html#canonical)

[StructureDefinition.snapshot.element.binding.valueSet](structuredefinition.html#StructureDefinition),  
[StructureDefinition.differential.element.binding.valueSet](structuredefinition.html#StructureDefinition),  
[Questionnaire.item.answerValueSet](questionnaire.html#Questionnaire)

1

[DiagnosticReport-geneticsAnalysis](extension-diagnosticreport-geneticsanalysis.html "Knowledge-based comments on the effect of the sequence on patient's condition/medication reaction.")

0..\*

(complex)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[DiagnosticReport-geneticsAssessedCondition](extension-diagnosticreport-geneticsassessedcondition.html "Used to denote condition context for genetic testing, which may influence reported variants and interpretation for large genomic testing panels e.g. lung cancer or familial breast cancer.")

0..\*

[Reference](references.html#Reference)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[DiagnosticReport-geneticsFamilyMemberHistory](extension-diagnosticreport-geneticsfamilymemberhistory.html "Significant health events and conditions for a person related to the patient relevant in the context of care for the patient.")

0..\*

[Reference](references.html#Reference)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[DiagnosticReport-geneticsReferences](extension-diagnosticreport-geneticsreferences.html "Additional bibliographic reference information about genetics, medications, clinical trials, etc. associated with knowledge-based information on genetics/genetic condition.")

0..\*

(complex)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[allergyintolerance-assertedDate](extension-allergyintolerance-asserteddate.html "The date on which the existence of the AllergyIntolerance was first asserted or acknowledged.")

0..1

[dateTime](datatypes.html#dateTime)

[AllergyIntolerance](allergyintolerance.html#AllergyIntolerance)

1

[allergyintolerance-certainty](extension-allergyintolerance-certainty.html "Statement about the degree of clinical certainty that the specific substance was the cause of the manifestation in this reaction event.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[AllergyIntolerance.reaction](allergyintolerance.html#AllergyIntolerance)

1

[allergyintolerance-duration](extension-allergyintolerance-duration.html "The amount of time that the Adverse Reaction persisted.")

0..1

[Duration](datatypes.html#Duration)

[AllergyIntolerance.reaction](allergyintolerance.html#AllergyIntolerance)

1

[allergyintolerance-reasonRefuted](extension-allergyintolerance-reasonrefuted.html "A code capturing the explanation of why the allergy or intolerance has been refuted. Should be specified only if the status is refuted.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[AllergyIntolerance](allergyintolerance.html#AllergyIntolerance)

1

[allergyintolerance-resolutionAge](extension-allergyintolerance-resolutionage.html "The estimated patient age at which the allergy or intolerance resolved. Should be specified only if the status is resolved.")

0..1

[Age](datatypes.html#Age)

[AllergyIntolerance](allergyintolerance.html#AllergyIntolerance)

1

[allergyintolerance-substanceExposureRisk](extension-allergyintolerance-substanceexposurerisk.html "A complex extension allowing structured capture of the exposure risk of the patient for an adverse reaction (allergy or intolerance) to the specified substance/product.")

0..1

(complex)

[AllergyIntolerance](allergyintolerance.html#AllergyIntolerance)

1

[auditevent-Accession](extension-auditevent-accession.html "An Accession Number associated with this participant object.")

0..\*

[Identifier](datatypes.html#Identifier)

[AuditEvent.entity](auditevent.html#AuditEvent)

1

[auditevent-Anonymized](extension-auditevent-anonymized.html "True or False indicating whether all patient identifying information was removed from the data.")

0..1

[boolean](datatypes.html#boolean)

[AuditEvent.entity](auditevent.html#AuditEvent)

1

[auditevent-Encrypted](extension-auditevent-encrypted.html "True or False indicating whether the data was encrypted.")

0..1

[boolean](datatypes.html#boolean)

[AuditEvent.entity](auditevent.html#AuditEvent)

1

[auditevent-Instance](extension-auditevent-instance.html "Th SOP Instance UID values.")

0..\*

[Identifier](datatypes.html#Identifier)

[AuditEvent.entity](auditevent.html#AuditEvent)

1

[auditevent-MPPS](extension-auditevent-mpps.html "An MPPS Instance UID associated with this entity.")

0..\*

[Identifier](datatypes.html#Identifier)

[AuditEvent.entity](auditevent.html#AuditEvent)

1

[auditevent-NumberOfInstances](extension-auditevent-numberofinstances.html "The Number of SOP Instances referred to by this entity.")

0..1

[integer](datatypes.html#integer)

[AuditEvent.entity](auditevent.html#AuditEvent)

1

[auditevent-ParticipantObjectContainsStudy](extension-auditevent-participantobjectcontainsstudy.html "A Study Instance ID, which may be used when the Entity type is not (110180, DCM, "Study Instance UID").")

0..1

[Identifier](datatypes.html#Identifier)

[AuditEvent.entity](auditevent.html#AuditEvent)

1

[auditevent-SOPClass](extension-auditevent-sopclass.html "Required if ParticipantObjectIDTypeCode is (110180, DCM, "Study Instance UID") and any of the optional fields (AccessionNumber, ContainsMPPS, NumberOfInstances, ContainsSOPInstances,Encrypted,Anonymized) are present in this Participant Object. May be present if ParticipantObjectIDTypeCode is (110180, DCM, "Study Instance UID") even though none of the optional fields are present.")

0..\*

[Reference](references.html#Reference)

[AuditEvent.entity](auditevent.html#AuditEvent)

1

[bodySite](extension-bodysite.html "Record details about the anatomical location of a specimen or body part. This resource may be used when a coded concept does not provide the necessary detail needed for the use case.")

0..1

[Reference](references.html#Reference)

[Element](element.html#Element)

1

[capabilitystatement-expectation](extension-capabilitystatement-expectation.html "Defines the level of expectation associated with a given system capability.")

0..1

[code](datatypes.html#code)

[CapabilityStatement.rest.resource.interaction](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.rest.resource.searchParam](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.rest.searchParam](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.rest.operation](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.document](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.rest.interaction](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.rest.resource.searchInclude](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.rest.resource.searchRevInclude](capabilitystatement.html#CapabilityStatement)

1

[capabilitystatement-prohibited](extension-capabilitystatement-prohibited.html "If set to true, indicates that support for the specified behavior would make a system non-conformant with the specification.")

0..1 **M**

[boolean](datatypes.html#boolean)

[CapabilityStatement.rest.resource.interaction](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.rest.resource.searchParam](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.rest.searchParam](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.rest.operation](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.document](capabilitystatement.html#CapabilityStatement),  
[CapabilityStatement.rest.interaction](capabilitystatement.html#CapabilityStatement)

1

[capabilitystatement-search-parameter-combination](extension-capabilitystatement-search-parameter-combination.html "This extension defines a possible search parameter combination,  by listing a set of search parameters and indicating whether they are required or optional. If a search combination is specified, clients should expect that they must submit a search that meets one of the required combinations or the search will be unsuccessful. If multiple search parameter combinations are specified, a client may pick between them, and supply the minimal required parameters for any of the combinations.")

0..\*

(complex)

[CapabilityStatement.rest.resource](capabilitystatement.html#CapabilityStatement)

1

[capabilitystatement-supported-system](extension-capabilitystatement-supported-system.html "A code system that is supported by the system that is not defined in a value set resource.")

0..\*

[uri](datatypes.html#uri)

[CapabilityStatement](capabilitystatement.html#CapabilityStatement)

1

[capabilitystatement-websocket](extension-capabilitystatement-websocket.html "Where the server provides its web socket end-point.")

0..1

[uri](datatypes.html#uri)

[CapabilityStatement.rest](capabilitystatement.html#CapabilityStatement)

1

[careplan-activity-title](extension-careplan-activity-title.html "Human-friendly name for the activity.")

0..1

[string](datatypes.html#string)

[CarePlan.activity](careplan.html#CarePlan)

1

[codesystem-alternate](extension-codesystem-alternate.html "An additional code that may be used to represent the concept.")

0..\*

(complex)

[CodeSystem.concept](codesystem.html#CodeSystem)

1

[codesystem-author](extension-codesystem-author.html "User or Org actually involved in creating the value set content.")

0..\*

[string](datatypes.html#string)

[CodeSystem](codesystem.html#CodeSystem)

1

[codesystem-concept-comments](extension-codesystem-concept-comments.html "A comment that explains how this code is used in this context (where the value set is expected to be used).")

0..1

[string](datatypes.html#string)

[CodeSystem.concept](codesystem.html#CodeSystem)

1

[codesystem-conceptOrder](extension-codesystem-conceptorder.html "Identifies the relative order in which concepts within the value set should be presented to a user.")

0..1

[integer](datatypes.html#integer)

[CodeSystem.concept](codesystem.html#CodeSystem)

1

[codesystem-effectiveDate](extension-codesystem-effectivedate.html "This is the first date-time when the value set version becomes active, so this value is present on Inactive value set versions as well. The start Date_time is expected to be as of 0001 UTC of the Effective Date.")

0..1

[date](datatypes.html#date)

[CodeSystem](codesystem.html#CodeSystem)

1

[codesystem-expirationDate](extension-codesystem-expirationdate.html "The date when the value set version is no longer expected to be used to create new content. This is the first date-time when the value set version becomes Inactive, so this value MUST present on all Inactive value set versions. The start Date_time is expected to be as of 0001 UTC of the Expiration Date.")

0..1

[date](datatypes.html#date)

[CodeSystem](codesystem.html#CodeSystem)

1

[codesystem-history](extension-codesystem-history.html "Information on changes made to the Value Set Definition over time, and also has a contained audit trail of all such changes.")

0..\*

(complex)

[CodeSystem](codesystem.html#CodeSystem)

1

[codesystem-keyWord](extension-codesystem-keyword.html "Word or words used in an information retrieval system to indicate the content of the value set.")

0..\*

[string](datatypes.html#string)

[CodeSystem](codesystem.html#CodeSystem)

1

[codesystem-label](extension-codesystem-label.html "The label to list in front of a code when presenting a list of possible values in a questionnaire-like fashion.")

0..1

[string](datatypes.html#string)

[CodeSystem.concept](codesystem.html#CodeSystem)

1

[codesystem-map](extension-codesystem-map.html "A reference to a concept map that is relevant for the interpretation of this value set.")

0..1

[canonical](datatypes.html#canonical)

[CodeSystem](codesystem.html#CodeSystem)

1

[codesystem-otherName](extension-codesystem-othername.html "Human readable names for the codesystem.")

0..\*

(complex)

[CodeSystem](codesystem.html#CodeSystem)

1

[codesystem-replacedby](extension-codesystem-replacedby.html "A code that replaces this - use this code instead.")

0..1

[Coding](datatypes.html#Coding)

[CodeSystem.concept](codesystem.html#CodeSystem)

1

[codesystem-sourceReference](extension-codesystem-sourcereference.html "This text is intended to act as a citation to work done elsewhere that is not part of the current stewarding process where the referenced source is in some way a basis of the current value set definition.")

0..1

[uri](datatypes.html#uri)

[CodeSystem](codesystem.html#CodeSystem)

1

[codesystem-trusted-expansion](extension-codesystem-trusted-expansion.html "Indicates an authoritative source for performing value set expansions.")

0..\*

[uri](datatypes.html#uri)

[CodeSystem](codesystem.html#CodeSystem)

1

[codesystem-usage](extension-codesystem-usage.html "Consumers of the value set and the implementations, projects or standards that the author has utilized the value set in.")

0..\*

(complex)

[CodeSystem](codesystem.html#CodeSystem)

1

[codesystem-warning](extension-codesystem-warning.html "An extra warning about the correct use of the value set.")

0..1

[markdown](datatypes.html#markdown)

[CodeSystem](codesystem.html#CodeSystem)

1

[codesystem-workflowStatus](extension-codesystem-workflowstatus.html "Workflow Status is used to represent details of the value set development process while the value set has an Activity Status of Preliminary. The development of a value set often follows a formal workflow process from initiation to completion, and this element carries the state variable for this state machine. The assumption is that when first created a value set would have a workflow state of Draft. Additional workflow states may be used.")

0..1

[string](datatypes.html#string)

[CodeSystem](codesystem.html#CodeSystem)

1

[coding-sctdescid](extension-coding-sctdescid.html "The SNOMED CT Description ID for the display.")

0..1

[id](datatypes.html#id)

[Coding](datatypes.html#Coding)

1

[communication-media](extension-communication-media.html "It contains enriched media representation of the alert message, such as a voice recording.  This may be used, for example for compliance with jurisdictional accessibility requirements, literacy issues, or translations of the unstructured text content in other languages.")

0..\*

[Attachment](datatypes.html#Attachment)

[Communication](communication.html#Communication)

1

[communicationrequest-initiatingLocation](extension-communicationrequest-initiatinglocation.html "Location where the information being requested to be communicated happened.")

0..1

[Reference](references.html#Reference)

[CommunicationRequest](communicationrequest.html#CommunicationRequest)

1

[composition-clinicaldocument-otherConfidentiality](extension-composition-clinicaldocument-otherconfidentiality.html "Carries additional confidentiality codes beyond the base fixed code specified in the CDA document.")

0..\*

[Coding](datatypes.html#Coding)

[Composition](composition.html#Composition)

1

[composition-clinicaldocument-versionNumber](extension-composition-clinicaldocument-versionnumber.html "Version specific identifier for the composition, assigned when each version is created/updated.")

0..1

[string](datatypes.html#string)

[Composition](composition.html#Composition)

1

[composition-section-subject](extension-composition-section-subject.html "Specifies that the section has a different subject that the Composition, or it's container section.")

0..1

[string](datatypes.html#string)

[Composition.section](composition.html#Composition)

1

[concept-bidirectional](extension-concept-bidirectional.html "Set to true if the concept map can be safely intepreted in reversse.")

0..1

[boolean](datatypes.html#boolean)

[ConceptMap](conceptmap.html#ConceptMap)

1

[condition-assertedDate](extension-condition-asserteddate.html "The date on which the existence of the Condition was first asserted or acknowledged.")

0..1

[dateTime](datatypes.html#dateTime)

[Condition](condition.html#Condition)

1

[condition-dueTo](extension-condition-dueto.html "Further conditions, problems, diagnoses, procedures or events or the substance that caused/triggered this Condition.")

0..\*

(Choice)

[Condition](condition.html#Condition)

1

[condition-occurredFollowing](extension-condition-occurredfollowing.html "Further conditions, problems, diagnoses, procedures or events or the substance that preceded this Condition.")

0..\*

(Choice)

[Condition](condition.html#Condition)

1

[condition-outcome](extension-condition-outcome.html "A result of the condition. The "Cause of death" for a patient is typically captured as an Observation.  The "outcome" doesn't imply causality.  Some outcomes might not be assessable until the condition.clinicalStatus is no longer active.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Condition](condition.html#Condition)

1

[condition-related](extension-condition-related.html "This condition has an unspecified relationship with another condition.")

0..\*

[Reference](references.html#Reference)

[Condition](condition.html#Condition)

1

[condition-ruledOut](extension-condition-ruledout.html "Identifies what potential diagnoses have been ruled out for this condition.")

0..\*

[Reference](references.html#Reference)

[Condition](condition.html#Condition)

1

[consent-NotificationEndpoint](extension-consent-notificationendpoint.html "Endpoint for sending Disclosure notifications in the form of FHIR AuditEvent records.")

0..1

[uri](datatypes.html#uri)

[Consent](consent.html#Consent)

1

[consent-Transcriber](extension-consent-transcriber.html "Any person/thing who transcribed the consent into the system.")

0..1

[Reference](references.html#Reference)

[Consent](consent.html#Consent)

1

[consent-Witness](extension-consent-witness.html "Any witness to the consent.")

0..1

[Reference](references.html#Reference)

[Consent](consent.html#Consent)

1

[consent-location](extension-consent-location.html "Restricts this exception to only apply a specific location as defined.")

0..\*

[Reference](references.html#Reference)

[Consent.provision](consent.html#Consent)

1

[contactpoint-area](extension-contactpoint-area.html "The area/zone/city code that, in some areas, may be omitted when dialing locally within the zone. This extension is used when a system wishes to designate specific parts of a phone number (and potentially place constraints on which components must be present and how they're filled in).")

0..1

[string](datatypes.html#string)

[ContactPoint](datatypes.html#ContactPoint)

1

[contactpoint-country](extension-contactpoint-country.html "The country code as defined by the ITU. This extension is used when a system wishes to designate specific parts of a phone number (and potentially place constraints on which components must be present and how they're filled in).")

0..1

[string](datatypes.html#string)

[ContactPoint](datatypes.html#ContactPoint)

1

[contactpoint-extension](extension-contactpoint-extension.html "The number that may be dialed within a private phone network or after successfully connecting to a private phone network. This extension is used when a system wishes to designate specific parts of a phone number (and potentially place constraints on which components must be present and how they're filled in).")

0..1

[string](datatypes.html#string)

[ContactPoint](datatypes.html#ContactPoint)

1

[contactpoint-local](extension-contactpoint-local.html "The local number that must be dialed to connect within the area/city/zone. This extension is used when a system wishes to designate specific parts of a phone number (and potentially place constraints on which components must be present and how they're filled in).")

0..1

[string](datatypes.html#string)

[ContactPoint](datatypes.html#ContactPoint)

1

[cqf-calculatedValue](extension-cqf-calculatedvalue.html "The name of an expression in a referenced library that determines a calculated value.")

0..\*

[string](datatypes.html#string)

[Element](element.html#Element)

1

[cqf-cdsHooksEndpoint](extension-cqf-cdshooksendpoint.html "Specifies the URI of a CDS Hooks service that uses this PlanDefinition as its implementation.")

0..1

[uri](datatypes.html#uri)

[PlanDefinition](plandefinition.html#PlanDefinition)

1

[cqf-citation](extension-cqf-citation.html "A bibliographic citation for the related resource. This text SHOULD be formatted according to an accepted citation format.")

0..1

[string](datatypes.html#string)

[Attachment](datatypes.html#Attachment)

1

[cqf-encounterClass](extension-cqf-encounterclass.html "The class of encounter (inpatient, outpatient, etc.).")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Basic](basic.html#Basic)

1

[cqf-encounterType](extension-cqf-encountertype.html "The type of the encounter.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Basic](basic.html#Basic)

1

[cqf-expression](extension-cqf-expression.html "An expression that, when evaluated, provides the value for the element on which it appears.")

0..\*

[Expression](metadatatypes.html#Expression)

[Element](element.html#Element)

1

[cqf-initialValue](extension-cqf-initialvalue.html "The name of an expression in a referenced library that determines an initial value.")

0..\*

[string](datatypes.html#string)

[Element](element.html#Element)

1

[cqf-initiatingOrganization](extension-cqf-initiatingorganization.html "The organization initiating the request.")

0..1

[Reference](references.html#Reference)

[Basic](basic.html#Basic)

1

[cqf-initiatingPerson](extension-cqf-initiatingperson.html "The person initiating the request.")

0..1

[Reference](references.html#Reference)

[Basic](basic.html#Basic)

1

[cqf-library](extension-cqf-library.html "A reference to a Library containing the formal logic used by the artifact.")

0..\*

[canonical](datatypes.html#canonical)

[Element](element.html#Element)

1

[cqf-measureInfo](extension-cqf-measureinfo.html "The measure criteria that resulted in the resource being included in a particular evaluatedResources bundle.")

0..\*

(complex)

[Element](element.html#Element)

1

[cqf-qualityOfEvidence](extension-cqf-qualityofevidence.html "The quality of the evidence described. The code system used specifies the quality scale used to grade this evidence source while the code specifies the actual quality score (represented as a coded value) associated with the evidence.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Attachment](datatypes.html#Attachment)

1

[cqf-receivingOrganization](extension-cqf-receivingorganization.html "The organization that will receive the response.")

0..1

[Reference](references.html#Reference)

[Basic](basic.html#Basic)

1

[cqf-receivingPerson](extension-cqf-receivingperson.html "The person in the receiving organization that will receive the response.")

0..1

[Reference](references.html#Reference)

[Basic](basic.html#Basic)

1

[cqf-recipientLanguage](extension-cqf-recipientlanguage.html "Preferred language of the person that will consume the content.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Basic](basic.html#Basic)

1

[cqf-recipientType](extension-cqf-recipienttype.html "The type of individual that will consume the response content. This may be different from the requesting user type (e.g. if a clinician is getting disease management guidance for provision to a patient). E.g. patient, healthcare provider or specific type of healthcare provider (physician, nurse, etc.).")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Basic](basic.html#Basic)

1

[cqf-relativeDateTime](extension-cqf-relativedatetime.html "A date/time value that is determined based on a duration offset from a target event.")

0..1

(complex)

[Element](element.html#Element)

1

[cqf-strengthOfRecommendation](extension-cqf-strengthofrecommendation.html "The strength of the recommendation assigned to this reference. The code system used specifies the rating scale used to rate this recommendation while the code specifies the actual recommendation rating (represented as a coded value) associated with this recommendation.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Attachment](datatypes.html#Attachment)

1

[cqf-systemUserLanguage](extension-cqf-systemuserlanguage.html "Preferred language of the person using the system.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Basic](basic.html#Basic)

1

[cqf-systemUserTaskContext](extension-cqf-systemusertaskcontext.html "The task the system user is performing, e.g. laboratory results review, medication list review, etc. This information can be used to tailor decision support outputs, such as recommended information resources.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Basic](basic.html#Basic)

1

[cqf-systemUserType](extension-cqf-systemusertype.html "The type of user initiating the request, e.g. patient, healthcare provider, or specific type of healthcare provider (physician, nurse, etc.).")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Basic](basic.html#Basic)

1

[cqm-ValidityPeriod](extension-cqm-validityperiod.html "The period in which the catalog is valid.")

1..1

[dateTime](datatypes.html#dateTime)

[Composition](composition.html#Composition)

1

[data-absent-reason](extension-data-absent-reason.html "Provides a reason why the expected value or elements in the element that is extended are missing.")

0..1

[code](datatypes.html#code)

[Element](element.html#Element)

1

[designNote](extension-designnote.html "Information captured by the author/maintainer of the questionnaire for development purposes, not intended to be seen by users.")

0..1

[markdown](datatypes.html#markdown)

[Questionnaire](questionnaire.html#Questionnaire),  
[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire),  
[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[device-implantStatus](extension-device-implantstatus.html "Codes to represent the functional status of a device implanted in a patient.  Both overall device status and an implant status need to be considered. The implant status should only be used when the [device status](device-definitions.html#Device.status) is `active `.")

0..1

[code](datatypes.html#code)

[Device](device.html#Device)

1

[devicerequest-patientInstruction](extension-devicerequest-patientinstruction.html "Simple concise instructions to be read by the patient.  For example  “twice a day” rather than “BID.”.")

0..\*

(complex)

[DeviceRequest](devicerequest.html#DeviceRequest)

1

[diagnosticReport-addendumOf](extension-diagnosticreport-addendumof.html "The supplements or provides additional information for the target report.")

0..1

[Reference](references.html#Reference)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[diagnosticReport-extends](extension-diagnosticreport-extends.html "The report references related ("sibling") reports.")

0..1

[Reference](references.html#Reference)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[diagnosticReport-locationPerformed](extension-diagnosticreport-locationperformed.html "Facility location where this report was prepared.")

0..1

[Reference](references.html#Reference)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[diagnosticReport-replaces](extension-diagnosticreport-replaces.html "The report replaces the target resource.  For example, when a final anatomic pathology report replaces a preliminary anatomic pathology report replaces  where the subsequent observation of case and report  may be on more or different material (specimen).  Note that  this is not same concept as` DiagnosticReport.status`  = preliminary of final, but industry definition of preliminary and final.")

0..1

[Reference](references.html#Reference)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[diagnosticReport-risk](extension-diagnosticreport-risk.html "Provides a link to an assessment of prognosis or risk as informed by the diagnostic results (For example, genetic results and possibly by patient genetic family history information).  This extension is used when need RiskAssessment as an alternate choice  for `Observation.hasMember` or `DiagnosticReport.result`.")

0..\*

[Reference](references.html#Reference)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Observation](observation.html#Observation)

1

[diagnosticReport-summaryOf](extension-diagnosticreport-summaryof.html "A summary report that points to subordinate target reports.")

0..1

[Reference](references.html#Reference)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[display](extension-display.html "The title or other name to display when referencing a resource by canonical URL.")

0..1

[string](datatypes.html#string)

canonical

1

[elementdefinition-allowedUnits](extension-elementdefinition-allowedunits.html "Identifies the units of measure in which the element should be captured or expressed.")

0..1

(Choice)

[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[elementdefinition-bestpractice](extension-elementdefinition-bestpractice.html "Mark that an invariant represents 'best practice' rule - a rule that implementers may choose to enforce at error level in some or all circumstances.")

0..1

(Choice)

[ElementDefinition.constraint](elementdefinition.html#ElementDefinition)

1

[elementdefinition-bestpractice-explanation](extension-elementdefinition-bestpractice-explanation.html "Explains why an invariant is labelled as a best practice invariant.")

0..1

[markdown](datatypes.html#markdown)

[ElementDefinition.constraint](elementdefinition.html#ElementDefinition)

1

[elementdefinition-bindingName](extension-elementdefinition-bindingname.html "A name that can be used for code generation when generating named enumerations for the binding.")

0..1

[string](datatypes.html#string)

[ElementDefinition.binding](elementdefinition.html#ElementDefinition)

1

[elementdefinition-equivalence](extension-elementdefinition-equivalence.html "The level of equivalence between the element containing the mapping and the element mapped to.")

0..1

[code](datatypes.html#code)

[ElementDefinition.mapping](elementdefinition.html#ElementDefinition)

1

[elementdefinition-identifier](extension-elementdefinition-identifier.html "External Identifiers associated with this element - these are identifiers that are associated with the concept this element represents.")

0..\*

[Identifier](datatypes.html#Identifier)

[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[elementdefinition-inheritedExtensibleValueSet](extension-elementdefinition-inheritedextensiblevalueset.html "A reference to an extensible value set specified in a parent profie in order to allow a conformance checking tool to validate that a code not in the extensible value set of the profile is not violating rules defined by parent profile bindings.")

0..\*

(Choice)

[ElementDefinition.binding](elementdefinition.html#ElementDefinition)

1

[elementdefinition-isCommonBinding](extension-elementdefinition-iscommonbinding.html "Whether the binding is used on multiple resources, or only on this resource.")

0..1

[boolean](datatypes.html#boolean)

[ElementDefinition.binding](elementdefinition.html#ElementDefinition)

1

[elementdefinition-maxValueSet](extension-elementdefinition-maxvalueset.html "The maximum allowable value set, for use when the binding strength is 'extensible' or 'preferred'. This value set is the value set from which additional codes can be taken from. This defines a 'required' binding over the top of the extensible binding.")

0..1

(Choice)

[ElementDefinition.binding](elementdefinition.html#ElementDefinition)

1

[elementdefinition-minValueSet](extension-elementdefinition-minvalueset.html "The minimum allowable value set, for use when the binding strength is 'required' or 'extensible'. This value set is the minimum value set that any conformant system SHALL support.")

0..1

(Choice)

[ElementDefinition.binding](elementdefinition.html#ElementDefinition)

1

[elementdefinition-namespace](extension-elementdefinition-namespace.html "Use this extension to indicate tha the element has an XML namespace different to http://hl7.org/fhir.")

0..1

[uri](datatypes.html#uri)

[ElementDefinition](elementdefinition.html#ElementDefinition),  
[StructureDefinition](structuredefinition.html#StructureDefinition)

1

[elementdefinition-profile-element](extension-elementdefinition-profile-element.html "The specific element to use in the referenced profile. This is used when a backbone element is being profiled, rather than an established type.")

0..1

[string](datatypes.html#string)

[ElementDefinition.type.profile](elementdefinition.html#ElementDefinition)

1

[elementdefinition-question](extension-elementdefinition-question.html "The default/suggested phrasing to use when prompting a human to capture the data element in question form (e.g. In a survey).")

0..\*

[string](datatypes.html#string)

[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[elementdefinition-selector](extension-elementdefinition-selector.html "A FHIRPath statement that defines whether an element is in the slice.")

0..1

[string](datatypes.html#string)

[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[elementdefinition-translatable](extension-elementdefinition-translatable.html "Whether translations might be expected for this element in resource instances.")

0..1

[boolean](datatypes.html#boolean)

[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[encounter-associatedEncounter](extension-encounter-associatedencounter.html "This encounter occurs within the scope of the referenced encounter.")

0..1

[Reference](references.html#Reference)

[Encounter](encounter.html#Encounter)

1

[encounter-modeOfArrival](extension-encounter-modeofarrival.html "Identifies whether a patient arrives at the reporting facility via ambulance and the type of ambulance that was used.")

0..1

[Coding](datatypes.html#Coding)

[Encounter](encounter.html#Encounter)

1

[encounter-reasonCancelled](extension-encounter-reasoncancelled.html "If the encountered was cancelled after it was planned, why? Applies only if the status is cancelled.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Encounter](encounter.html#Encounter)

1

[entryFormat](extension-entryformat.html "Additional instructions for the user to guide their input (i.e. a human readable version of a regular expression like "nnn-nnn-nnn"). In most UIs this is the placeholder (or 'ghost') text placed directly inside the edit controls and that disappear when the control gets the focus.")

0..1

[string](datatypes.html#string)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[event-basedOn](extension-event-basedon.html "A plan, proposal or order that is fulfilled in whole or in part by this event.")

0..\*

[Reference](references.html#Reference)

[Condition](condition.html#Condition)

1

[event-eventHistory](extension-event-eventhistory.html "Links to *Provenance* records for past versions of this resource that document  key state transitions or updates that are deemed “relevant” or important to a user looking at the current version of the resource. E.g, when an observation was verified or corrected.  This extension does not point to the Provenance associated with the current version of the resource - as it would be created after this version existed. The *Provenance* for the current version can be retrieved with a [` _revinclude`](search.html#revinclude).")

0..\*

[Reference](references.html#Reference)

[Observation](observation.html#Observation),  
[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Task](task.html#Task),  
[SupplyDelivery](supplydelivery.html#SupplyDelivery),  
[DeviceUseStatement](deviceusestatement.html#DeviceUseStatement)

1

[event-location](extension-event-location.html "The principal physical location where the {{title}} was performed.")

0..1

[Reference](references.html#Reference)

[Observation](observation.html#Observation),  
[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Media](media.html#Media),  
[SupplyDelivery](supplydelivery.html#SupplyDelivery)

1

[event-partOf](extension-event-partof.html "A larger event of which this particular event is a component or step.")

0..\*

[Reference](references.html#Reference)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Condition](condition.html#Condition)

1

[event-performerFunction](extension-event-performerfunction.html "Distinguishes the type of involvement of the performer in the event. For example, 'author',  'verifier' or 'responsible party'.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation.performer](observation.html#Observation),  
[DiagnosticReport.performer](diagnosticreport.html#DiagnosticReport),  
[Media.operator](media.html#Media)

1

[event-statusReason](extension-event-statusreason.html "Captures the reason for the current state of the resource.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation](observation.html#Observation),  
[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Media](media.html#Media),  
[SupplyDelivery](supplydelivery.html#SupplyDelivery),  
[DeviceUseStatement](deviceusestatement.html#DeviceUseStatement)

1

[family-member-history-genetics-observation](extension-family-member-history-genetics-observation.html "Allows capturing risk-relevant observations about the relative that aren't themselves a specific health condition; e.g. Certain ethnic ancestries that are disease-relevant, presence of particular genetic markers, etc.")

0..\*

[Reference](references.html#Reference)

[FamilyMemberHistory](familymemberhistory.html#FamilyMemberHistory)

1

[family-member-history-genetics-parent](extension-family-member-history-genetics-parent.html "Identifies a parent of the relative.")

0..\*

(complex)

[FamilyMemberHistory](familymemberhistory.html#FamilyMemberHistory)

1

[family-member-history-genetics-sibling](extension-family-member-history-genetics-sibling.html "Identifies a sibling of the relative.")

0..\*

(complex)

[FamilyMemberHistory](familymemberhistory.html#FamilyMemberHistory)

1

[familymemberhistory-abatement](extension-familymemberhistory-abatement.html "The approximate date, age, or flag indicating that the condition of the family member resolved. The abatement should only be specified if the condition is stated in the positive sense, i.e., the didNotHave flag is false.")

0..1

(Choice)

[FamilyMemberHistory.condition](familymemberhistory.html#FamilyMemberHistory)

1

[familymemberhistory-patient-record](extension-familymemberhistory-patient-record.html "A link to one to more patient records for the relation.")

0..\*

[Reference](references.html#Reference)

[FamilyMemberHistory](familymemberhistory.html#FamilyMemberHistory)

1

[familymemberhistory-severity](extension-familymemberhistory-severity.html "A qualification of the seriousness or impact on health of the family member condition.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[FamilyMemberHistory.condition](familymemberhistory.html#FamilyMemberHistory)

1

[familymemberhistory-type](extension-familymemberhistory-type.html "Purpose of the family member history or why it was created, such as when family member history is targeted for cardiovascular health, mental health, or genetic counseling.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[FamilyMemberHistory](familymemberhistory.html#FamilyMemberHistory)

1

[flag-detail](extension-flag-detail.html "Points to the Observation, AllergyIntolerance or other record that provides additional supporting information about this flag.")

0..\*

[Reference](references.html#Reference)

[Flag](flag.html#Flag)

1

[flag-priority](extension-flag-priority.html "A code that identifies the priority of the alert, for example the Alert Priority flags column in IHE PCD TF 2 Table B.8-4.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Flag](flag.html#Flag)

1

[geolocation](extension-geolocation.html "The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).")

0..1

(complex)

[Address](datatypes.html#Address)

1

[goal-acceptance](extension-goal-acceptance.html "Information about the acceptance and relative priority assigned to the goal by the patient, practitioners and other stake-holders.")

0..\*

(complex)

[Goal](goal.html#Goal)

1

[goal-reasonRejected](extension-goal-reasonrejected.html "The reason the goal was not accepted. Applies only if the status of the goal is rejected.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Goal](goal.html#Goal)

1

[goal-relationship](extension-goal-relationship.html "Establishes a relationship between this goal and other goals.")

0..\*

(complex)

[Goal](goal.html#Goal)

1

[hla-genotyping-results-allele-database](extension-hla-genotyping-results-allele-database.html "Allele Database.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[hla-genotyping-results-glstring](extension-hla-genotyping-results-glstring.html "glstring.")

0..1

(complex)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[hla-genotyping-results-haploid](extension-hla-genotyping-results-haploid.html "haploid.")

0..\*

(complex)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[hla-genotyping-results-method](extension-hla-genotyping-results-method.html "The platform, methodology and software applied at the time of the
genotyping.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[http-response-header](extension-http-response-header.html "In a transaction, every single interaction can have multiple HTTP response headers returned as a result of the interaction.")

0..\*

[string](datatypes.html#string)

[Bundle.entry.response](bundle.html#Bundle)

1

[humanname-assembly-order](extension-humanname-assembly-order.html "A code that represents the preferred display order of the components of this human name.")

0..1

[code](datatypes.html#code)

[HumanName](datatypes.html#HumanName)

1

[humanname-fathers-family](extension-humanname-fathers-family.html "The portion of the family name that is derived from the person's father.")

0..\*

[string](datatypes.html#string)

[HumanName.family](datatypes.html#HumanName)

1

[humanname-mothers-family](extension-humanname-mothers-family.html "The portion of the family name that is derived from the person's mother.")

0..\*

[string](datatypes.html#string)

[HumanName.family](datatypes.html#HumanName)

1

[humanname-own-name](extension-humanname-own-name.html "The portion of the family name that is derived from the person's own surname, as distinguished from any portion that is derived from the surname of the person's partner or spouse.")

0..1

[string](datatypes.html#string)

[HumanName.family](datatypes.html#HumanName)

1

[humanname-own-prefix](extension-humanname-own-prefix.html "The prefix portion (e.g. voorvoegsel) of the family name that is derived from the person's own surname, as distinguished from any portion that is derived from the surname of the person's partner or spouse.")

0..1

[string](datatypes.html#string)

[HumanName.family](datatypes.html#HumanName)

1

[humanname-partner-name](extension-humanname-partner-name.html "The portion of the family name that is derived from the person's partner's surname, as distinguished from any portion that is derived from the surname of the person's own name.")

0..1

[string](datatypes.html#string)

[HumanName.family](datatypes.html#HumanName)

1

[humanname-partner-prefix](extension-humanname-partner-prefix.html "The prefix portion (e.g. voorvoegsel) of the family name that is derived from the person's partner's surname, as distinguished from any portion that is derived from the surname of the person's own.")

0..1

[string](datatypes.html#string)

[HumanName.family](datatypes.html#HumanName)

1

[identifier-validDate](extension-identifier-validdate.html "Indicates a date on which this identifier value was deemed to apply to this instance.")

0..\*

[dateTime](datatypes.html#dateTime)

[Identifier](datatypes.html#Identifier)

1

[iso21090-AD-use](extension-iso21090-ad-use.html "Uses of Addresses - codes not defined as part of Address.use.")

0..1

[code](datatypes.html#code)

[Address](datatypes.html#Address)

1

[iso21090-ADXP-additionalLocator](extension-iso21090-adxp-additionallocator.html "This can be a unit designator, such as apartment number, suite number, or floor. There may be several unit designators in an address (e.g., "3rd floor, Appt. 342"). This can also be a designator pointing away from the location, rather than specifying a smaller location within some larger one (e.g., Dutch "t.o." means "opposite to" for house boats located across the street facing houses).")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-buildingNumberSuffix](extension-iso21090-adxp-buildingnumbersuffix.html "Any alphabetic character, fraction or other text that may appear after the numeric portion of a building number.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-careOf](extension-iso21090-adxp-careof.html "The name of the party who will take receipt at the specified address, and will take on responsibility for ensuring delivery to the target recipient.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-censusTract](extension-iso21090-adxp-censustract.html "A geographic sub-unit delineated for demographic purposes.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-delimiter](extension-iso21090-adxp-delimiter.html "Delimiters are printed without framing white space. If no value component is provided, the delimiter appears as a line break.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-deliveryAddressLine](extension-iso21090-adxp-deliveryaddressline.html "A delivery address line is frequently used instead of breaking out delivery mode, delivery installation, etc. An address generally has only a delivery address line or a street address line, but not both.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-deliveryInstallationArea](extension-iso21090-adxp-deliveryinstallationarea.html "The location of the delivery installation, usually a town or city, and is only required if the area is different from the municipality. Area to which mail delivery service is provided from any postal facility or service such as an individual letter carrier, rural route, or postal route.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-deliveryInstallationQualifier](extension-iso21090-adxp-deliveryinstallationqualifier.html "A number, letter or name identifying a delivery installation. For example, for Station A, the delivery installation qualifier would be 'A'.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-deliveryInstallationType](extension-iso21090-adxp-deliveryinstallationtype.html "Indicates the type of delivery installation (the facility to which the mail will be delivered prior to final shipping via the delivery mode.) Example: post office, letter carrier depot, community mail center, station, etc.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-deliveryMode](extension-iso21090-adxp-deliverymode.html "Indicates the type of service offered, method of delivery. For example: post office box, rural route, general delivery, etc.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-deliveryModeIdentifier](extension-iso21090-adxp-deliverymodeidentifier.html "Represents the routing information such as a letter carrier route number. It is the identifying number of the designator (the box number or rural route number).")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-direction](extension-iso21090-adxp-direction.html "Direction (e.g., N, S, W, E).")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-houseNumber](extension-iso21090-adxp-housenumber.html "The number of a building, house or lot alongside the street. Also known as "primary street number". This does not number the street but rather the building.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-houseNumberNumeric](extension-iso21090-adxp-housenumbernumeric.html "The numeric portion of a building number.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-postBox](extension-iso21090-adxp-postbox.html "A numbered box located in a post station.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-precinct](extension-iso21090-adxp-precinct.html "A subsection of a municipality.")

0..\*

[string](datatypes.html#string)

[Address](datatypes.html#Address)

1

[iso21090-ADXP-streetAddressLine](extension-iso21090-adxp-streetaddressline.html "A street address line is frequently used instead of breaking out building number, street name, street type, etc. An address generally has only a delivery address line or a street address line, but not both.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-streetName](extension-iso21090-adxp-streetname.html "streetName.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-streetNameBase](extension-iso21090-adxp-streetnamebase.html "The base name of a roadway or artery recognized by a municipality (excluding street type and direction).")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-streetNameType](extension-iso21090-adxp-streetnametype.html "The designation given to the street. (e.g. Street, Avenue, Crescent, etc.).")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-unitID](extension-iso21090-adxp-unitid.html "The number or name of a specific unit contained within a building or complex, as assigned by that building or complex.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-ADXP-unitType](extension-iso21090-adxp-unittype.html "Indicates the type of specific unit contained within a building or complex. E.g. Appartment, Floor.")

0..\*

[string](datatypes.html#string)

[Address.line](datatypes.html#Address)

1

[iso21090-EN-qualifier](extension-iso21090-en-qualifier.html "A set of codes each of which specifies a certain subcategory of the name part in addition to the main name part type.")

0..\*

[code](datatypes.html#code)

[HumanName.family](datatypes.html#HumanName),  
[HumanName.given](datatypes.html#HumanName),  
[HumanName.prefix](datatypes.html#HumanName),  
[HumanName.suffix](datatypes.html#HumanName)

1

[iso21090-EN-representation](extension-iso21090-en-representation.html "Name Representation.")

0..1

[code](datatypes.html#code)

[HumanName](datatypes.html#HumanName)

1

[iso21090-EN-use](extension-iso21090-en-use.html "A set of codes advising a system or user which name in a set of names to select for a given purpose.")

0..1

[code](datatypes.html#code)

[HumanName](datatypes.html#HumanName)

1

[iso21090-PQ-translation](extension-iso21090-pq-translation.html "An alternative representation of the same physical quantity expressed in a different unit from a different unit code system and possibly with a different value.")

0..\*

[Quantity](datatypes.html#Quantity)

[Quantity](datatypes.html#Quantity)

1

[iso21090-SC-coding](extension-iso21090-sc-coding.html "Provides a coded expression for the content represented in a string.")

0..\*

[Coding](datatypes.html#Coding)

string

1

[iso21090-TEL-address](extension-iso21090-tel-address.html "A V3 compliant, RFC 3966 conformant URI version of the telephone or fax number.")

0..1

[url](datatypes.html#url)

[ContactPoint](datatypes.html#ContactPoint)

1

[iso21090-nullFlavor](extension-iso21090-nullflavor.html "If the value is not a proper value, indicates the reason.")

0..1

[code](datatypes.html#code)

[Resource](resource.html#Resource)

1

[iso21090-preferred](extension-iso21090-preferred.html "Flag denoting whether parent item is preferred - e.g., a preferred address or telephone number.")

0..1

[boolean](datatypes.html#boolean)

[Resource](resource.html#Resource)

1

[iso21090-uncertainty](extension-iso21090-uncertainty.html "The primary measure of variance/uncertainty of the value (the square root of the sum of the squares of the differences between all data points and the mean).")

0..1

[decimal](datatypes.html#decimal)

[Quantity](datatypes.html#Quantity)

1

[iso21090-uncertaintyType](extension-iso21090-uncertaintytype.html "A code specifying the type of probability distribution for the uncertainty.")

0..1

[code](datatypes.html#code)

[Quantity](datatypes.html#Quantity)

1

[language](extension-language.html "The Human Language of the item.")

1..1

[code](datatypes.html#code)

[HumanName](datatypes.html#HumanName),  
[Address](datatypes.html#Address),  
[Annotation](datatypes.html#Annotation)

1

[list-changeBase](extension-list-changebase.html "Reference to the List that a "change" list is asserting changes with respect to.")

0..1

[Reference](references.html#Reference)

[List](list.html#List)

1

[location-boundary-geojson](extension-location-boundary-geojson.html "A boundary shape that represents the outside edge of the location (in GeoJSON format) This shape may have holes, and disconnected shapes.")

0..1

[Attachment](datatypes.html#Attachment)

[Location](location.html#Location)

1

[location-distance](extension-location-distance.html "A calculated distance between the resource and a provided location.")

0..1

[Distance](datatypes.html#Distance)

[Bundle.entry.search](bundle.html#Bundle)

1

[match-grade](extension-match-grade.html "Assessment of resource match outcome - how likely this resource is to be a match.")

0..1

[code](datatypes.html#code)

[Bundle.entry.search](bundle.html#Bundle)

1

[maxDecimalPlaces](extension-maxdecimalplaces.html "Identifies the maximum number of decimal places that may be specified for the data element.")

0..1

[integer](datatypes.html#integer)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[maxSize](extension-maxsize.html "For attachment answers, indicates the maximum size an attachment can be.")

0..1

[decimal](datatypes.html#decimal)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[maxValue](extension-maxvalue.html "The inclusive upper bound on the range of allowed values for the data element.")

0..1

(Choice)

[Questionnaire.item](questionnaire.html#Questionnaire)

1

[messageheader-response-request](extension-messageheader-response-request.html "This extension enables the capability currently available through MSH-16 (Application Level acknowledgement) in HL7 Version 2 to declare at a message instance level whether a response is required or only upon error or success, or never.")

1..1

[code](datatypes.html#code)

[MessageHeader](messageheader.html#MessageHeader)

1

[mimeType](extension-mimetype.html "Identifies the kind(s) of attachment allowed to be sent for an element.")

0..\*

[code](datatypes.html#code)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[minLength](extension-minlength.html "The minimum number of characters that must be present in the simple data type to be considered a "valid" instance.")

0..1

[integer](datatypes.html#integer)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[minValue](extension-minvalue.html "The inclusive lower bound on the range of allowed values for the data element.")

0..1

(Choice)

[Questionnaire.item](questionnaire.html#Questionnaire)

1

[narrativeLink](extension-narrativelink.html "A human language representation of the concept (resource/element), as a url that is a reference to a portion of the narrative of a resource ([DomainResource.text](narrative.html)).")

0..1

[url](datatypes.html#url)

[Element](element.html#Element)

1

[nutritionorder-adaptiveFeedingDevice](extension-nutritionorder-adaptivefeedingdevice.html "Materials used or needed to feed the patient.")

0..\*

[CodeableConcept](datatypes.html#CodeableConcept)

[NutritionOrder.oralDiet](nutritionorder.html#NutritionOrder)

1

[observation-bodyPosition](extension-observation-bodyposition.html "The position of the body when the observation was done, e.g. standing, sitting. To be used only when the body position in not precoordinated in the observation code.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation](observation.html#Observation),  
[Specimen.collection](specimen.html#Specimen)

1

[observation-delta](extension-observation-delta.html "The qualitative change in the value relative to the previous measurement. Usually only recorded if the change is clinically significant.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation](observation.html#Observation)

1

[observation-deviceCode](extension-observation-devicecode.html "A code representing the the type of device used for this observation.  Should only be used if not implicit in the code found in `Observation.code`.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation](observation.html#Observation)

1

[observation-focusCode](extension-observation-focuscode.html "A code representing the  focus of an observation when the focus is not the patient of record.  In other words, the focus of the observation is different from `Observation.subject`.   An example use case would be using the *Observation* resource to capture whether the mother is trained to change her child's tracheostomy tube.  In this example, the child is the patient of record and the mother is focal subject referenced using this extension.  Other example focal subjects include spouses, related persons, feti, or  donors.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation](observation.html#Observation)

1

[observation-gatewayDevice](extension-observation-gatewaydevice.html "The Provenance/AuditEvent resources can represent the same information.  Note that the Provenance/AuditEvent resources can represent the same information.")

0..1

[Reference](references.html#Reference)

[Observation](observation.html#Observation)

1

[observation-geneticsAllele](extension-observation-geneticsallele.html "Allele information.")

0..1

(complex)

[Observation](observation.html#Observation)

1

[observation-geneticsAminoAcidChange](extension-observation-geneticsaminoacidchange.html "AminoAcidChange information.")

0..1

(complex)

[Observation](observation.html#Observation)

1

[observation-geneticsAncestry](extension-observation-geneticsancestry.html "Ancestry information.")

0..1

(complex)

[Observation](observation.html#Observation)

1

[observation-geneticsCopyNumberEvent](extension-observation-geneticscopynumberevent.html "A variation that increases or decreases the copy number of a given region ([SO:0001019](http://www.sequenceontology.org/browser/current_svn/term/SO:0001019)). Values: amplification/deletion/LOH.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation](observation.html#Observation)

1

[observation-geneticsDNARegionName](extension-observation-geneticsdnaregionname.html "A human readable name for the region of interest. Typically Exon #, Intron # or other. NOTE: This is not standardized and is mainly for convenience and display purposes.  LOINC Code: ([47999-8](http://loinc.org/47999-8)).")

0..1

[string](datatypes.html#string)

[Observation](observation.html#Observation)

1

[observation-geneticsGene](extension-observation-geneticsgene.html "A region (or regions) that includes all of the sequence elements necessary to encode a functional transcript. A gene may include regulatory regions, transcribed regions and/or other functional sequence regions ([SO:0000704](http://www.sequenceontology.org/browser/current_svn/term/SO:0000704)). This element is the official gene symbol approved by the HGNC, which is a short abbreviated form of the gene name ([HGNC](http://www.genenames.org)). LOINC Code: ([48018-6](http://loinc.org/48018-6)).")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation](observation.html#Observation)

1

[observation-geneticsGenomicSourceClass](extension-observation-geneticsgenomicsourceclass.html "Source of sample used to determine the sequence in sequencing lab -- germline, somatic, prenatal. LOINC Code: ([48002-0](http://loinc.org/48002-0)).")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation](observation.html#Observation)

1

[observation-geneticsInterpretation](extension-observation-geneticsinterpretation.html "Clinical Interpretations for variant. It's a reference to an Observation resource.")

0..1

[Reference](references.html#Reference)

[Observation](observation.html#Observation)

1

[observation-geneticsPhaseSet](extension-observation-geneticsphaseset.html "Phase set information.")

0..\*

(complex)

[Observation](observation.html#Observation)

1

[observation-geneticsVariant](extension-observation-geneticsvariant.html "Variant information.")

0..1

(complex)

[Observation](observation.html#Observation)

1

[observation-precondition](extension-observation-precondition.html "Other preceding or concurrent observations that must be known to correctly interpret the the observation.  For example an fiO2 measure taken alongside of a SpO2 measurement.  See the [Observation notes](observation.html#notes) section for additional guidance.")

0..\*

[Reference](references.html#Reference)

[Observation](observation.html#Observation)

1

[observation-reagent](extension-observation-reagent.html "Reference to reagents used to generate this observation.  This is intended for this for in-lab transactions between instruments and Laboratory Information Systems (LIS).")

0..\*

[Reference](references.html#Reference)

[Observation](observation.html#Observation)

1

[observation-replaces](extension-observation-replaces.html "This observation replaces a previous observation (i.e. a revised value).")

0..\*

[Reference](references.html#Reference)

[Observation](observation.html#Observation)

1

[observation-secondaryFinding](extension-observation-secondaryfinding.html "Secondary findings are genetic test results that provide information about variants in a gene unrelated to the primary purpose for the testing, most often discovered when [Whole Exome Sequencing (WES)](https://en.wikipedia.org/wiki/Exome_sequencing) or [Whole Genome Sequencing (WGS)](https://en.wikipedia.org/wiki/Whole_genome_sequencing) is performed. This extension should be used to denote when a genetic finding is being shared as a secondary finding, and ideally refer to a corresponding guideline or policy statement.

For more detail, please see:
https://ghr.nlm.nih.gov/primer/testing/secondaryfindings.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation](observation.html#Observation)

1

[observation-sequelTo](extension-observation-sequelto.html "This observation follows the target observation (e.g. timed tests such as Glucose Tolerance Test).")

0..\*

[Reference](references.html#Reference)

[Observation](observation.html#Observation)

1

[observation-specimenCode](extension-observation-specimencode.html "A code representing the the type of specimen used for this observation.  Should only be used if not implicit in the code found in `Observation.code`.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation](observation.html#Observation)

1

[observation-timeOffset](extension-observation-timeoffset.html "A specific offset time in milliseconds from the stated time in the Observation.appliesDateTime to allow for representation of sequential recording  of sampled data from the same lead or data stream.  For example, an ECG recorder may record sequentially 3 leads four time to receive 12-lead ECG, see [ISO 22077](https://www.iso.org/obp/ui/#iso:std:61871:en).")

0..\*

[integer](datatypes.html#integer)

[Observation.component](observation.html#Observation)

1

[operationdefinition-profile](extension-operationdefinition-profile.html "Identifies a profile structure or implementation Guide that applies to the datatype this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the type SHALL conform to at least one profile defined in the implementation guide.")

0..\*

[uri](datatypes.html#uri)

[OperationDefinition.parameter](operationdefinition.html#OperationDefinition)

1

[operationoutcome-authority](extension-operationoutcome-authority.html "A reference to where the rule is defined (based on the authoritative URLs in the applicable conformance resources).")

0..1

[uri](datatypes.html#uri)

[OperationOutcome.issue](operationoutcome.html#OperationOutcome)

1

[operationoutcome-detectedIssue](extension-operationoutcome-detectedissue.html "A reference to a stored contraindication that is the basis for this issue. A recipient can expect that the item referenced in this extension is being retained for record keeping purposes.")

0..1

[Reference](references.html#Reference)

[OperationOutcome.issue](operationoutcome.html#OperationOutcome)

1

[operationoutcome-issue-source](extension-operationoutcome-issue-source.html "Helps a user track down the source of the problem.")

0..1

[string](datatypes.html#string)

[OperationOutcome.issue](operationoutcome.html#OperationOutcome)

1

[ordinalValue](extension-ordinalvalue.html "A numeric value that allows the comparison (less than, greater than) or other numerical 
manipulation of a concept (e.g. Adding up components of a score). Scores are usually a whole number, but occasionally decimals are encountered in scores.")

0..1

[decimal](datatypes.html#decimal)

[Coding](datatypes.html#Coding),  
[Questionnaire.item.answerOption](questionnaire.html#Questionnaire),  
[CodeSystem.concept](codesystem.html#CodeSystem),  
[ValueSet.compose.include.concept](valueset.html#ValueSet)

1

[organization-period](extension-organization-period.html "The date range that this organization should be considered available.")

0..1

[Period](datatypes.html#Period)

[Organization](organization.html#Organization)

1

[organization-preferredContact](extension-organization-preferredcontact.html "This Contact is the preferred contact at this organization for the purpose of the contact

There can be multiple contacts on an Organizations record with this value set to true, but these should all have different purpose values.")

0..1

[boolean](datatypes.html#boolean)

[Organization.contact](organization.html#Organization)

1

[organizationaffiliation-primaryInd](extension-organizationaffiliation-primaryind.html "Flag indicating if the specialty is the primary specialty of the provider. Normally, a practitioner will have one primary specialty, but in some cases more than one can be primary.")

0..1

[boolean](datatypes.html#boolean)

[OrganizationAffiliation.specialty](organizationaffiliation.html#OrganizationAffiliation)

1

[originalText](extension-originaltext.html "A human language representation of the concept (resource/element) as seen/selected/uttered by the user who entered the data and/or which represents the full intended meaning of the user. This can be provided either directly as text, or as a url that is a reference to a portion of the narrative of a resource ([DomainResource.text](narrative.html)).")

0..1

[string](datatypes.html#string)

[Element](element.html#Element)

1

[parameters-fullUrl](extension-parameters-fullurl.html "This specifies the fullUrl for the resource in parameters.resource, if there is one. When fullUrl is provided, ithe [resource resolution method described for Bundle](bundle.html#references).")

0..1

[uri](datatypes.html#uri)

[Parameters.parameter](parameters.html#Parameters)

1

[patient-adoptionInfo](extension-patient-adoptioninfo.html "Code indication the adoption status of the patient.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Patient](patient.html#Patient)

1

[patient-animal](extension-patient-animal.html "This patient is known to be an animal.")

0..1

(complex)

[Patient](patient.html#Patient)

1

[patient-birthPlace](extension-patient-birthplace.html "The registered place of birth of the patient. A sytem may use the address.text if they don't store the birthPlace address in discrete elements.")

0..1

[Address](datatypes.html#Address)

[Patient](patient.html#Patient)

1

[patient-birthTime](extension-patient-birthtime.html "The time of day that the Patient was born. This includes the date to ensure that the timezone information can be communicated effectively.")

0..1

[dateTime](datatypes.html#dateTime)

[Patient.birthDate](patient.html#Patient)

1

[patient-cadavericDonor](extension-patient-cadavericdonor.html "Flag indicating whether the patient authorized the donation of body parts after death.")

0..1

[boolean](datatypes.html#boolean)

[Patient](patient.html#Patient)

1

[patient-citizenship](extension-patient-citizenship.html "The patient's legal status as citizen of a country.")

0..\*

(complex)

[Patient](patient.html#Patient)

1

[patient-congregation](extension-patient-congregation.html "A group or place of religious practice that may provide services to the patient.")

0..1

[string](datatypes.html#string)

[Patient](patient.html#Patient)

1

[patient-disability](extension-patient-disability.html "Value(s) identifying physical or mental condition(s) that limits a person's movements, senses, or activities.")

0..\*

[CodeableConcept](datatypes.html#CodeableConcept)

[Patient](patient.html#Patient)

1

[patient-genderIdentity](extension-patient-genderidentity.html "The gender the patient identifies with. The Patient's gender identity is used as guidance (e.g. for staff) about how to interact with the patient.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Patient](patient.html#Patient)

1

[patient-importance](extension-patient-importance.html "The importance of the patient (e.g. VIP).")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Patient](patient.html#Patient)

1

[patient-interpreterRequired](extension-patient-interpreterrequired.html "This Patient requires an interpreter to communicate healthcare information to the practitioner.")

0..1

[boolean](datatypes.html#boolean)

[Patient](patient.html#Patient)

1

[patient-mothersMaidenName](extension-patient-mothersmaidenname.html "Mother's maiden (unmarried) name, commonly collected to help verify patient identity.")

0..1

[string](datatypes.html#string)

[Patient](patient.html#Patient)

1

[patient-nationality](extension-patient-nationality.html "The nationality of the patient.")

0..\*

(complex)

[Patient](patient.html#Patient)

1

[patient-preferenceType](extension-patient-preferencetype.html "Indicates what mode of communication the patient prefers to use for the indicated language.")

0..\*

[Coding](datatypes.html#Coding)

[Patient.communication.preferred](patient.html#Patient)

1

[patient-proficiency](extension-patient-proficiency.html "Proficiency level of the communication.")

0..\*

(complex)

[Patient.communication](patient.html#Patient)

1

[patient-relatedPerson](extension-patient-relatedperson.html "In some cases a Patient.contact will also be populated as a RelatedPerson resource. This linkage permits the linkage between the 2 resources to be able to accurately indicate a representation of the same individual, and updating details between could be appropriate.")

0..\*

[Reference](references.html#Reference)

[Patient.contact](patient.html#Patient)

1

[patient-religion](extension-patient-religion.html "The patient's professed religious affiliations.")

0..\*

[CodeableConcept](datatypes.html#CodeableConcept)

[Patient](patient.html#Patient)

1

[practitioner-animalSpecies](extension-practitioner-animalspecies.html "This extension should be used to specifiy that a practioner or RelatedPerson resource is a service animal.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Practitioner](practitioner.html#Practitioner),  
[RelatedPerson](relatedperson.html#RelatedPerson)

1

[practitionerrole-primaryInd](extension-practitionerrole-primaryind.html "Flag indicating if the specialty is the primary specialty of the provider. Normally, a practitioner will have one primary specialty, but in some cases more than one can be primary.")

0..1

[boolean](datatypes.html#boolean)

[PractitionerRole.specialty](practitionerrole.html#PractitionerRole)

1

[procedure-approachBodyStructure](extension-procedure-approachbodystructure.html "The approach body site used for this procedure.  Multiple locations are allowed.")

0..\*

[Reference](references.html#Reference)

[Procedure](procedure.html#Procedure),  
[ServiceRequest](servicerequest.html#ServiceRequest),  
[DeviceRequest](devicerequest.html#DeviceRequest),  
[DeviceUseStatement](deviceusestatement.html#DeviceUseStatement)

1

[procedure-causedBy](extension-procedure-causedby.html "This procedure is because of the related item.")

0..\*

[Reference](references.html#Reference)

[Procedure](procedure.html#Procedure)

1

[procedure-directedBy](extension-procedure-directedby.html "The target of the extension is a distinct actor from the requester and has decision-making authority over the service and takes direct responsibility to manage the service.")

0..1

(Choice)

[Procedure](procedure.html#Procedure),  
[ServiceRequest](servicerequest.html#ServiceRequest)

1

[procedure-incisionDateTime](extension-procedure-incisiondatetime.html "The time of the first incision.")

0..1

[dateTime](datatypes.html#dateTime)

[Procedure](procedure.html#Procedure)

1

[procedure-method](extension-procedure-method.html "The method used to perform this procedure.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Procedure](procedure.html#Procedure)

1

[procedure-progressStatus](extension-procedure-progressstatus.html "A code to track a detailed progress of  a procedure (e.g. In Recovery, Prepared for Surgery).")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Procedure](procedure.html#Procedure)

1

[procedure-schedule](extension-procedure-schedule.html "The schedule that was followed.")

0..1

[Timing](datatypes.html#Timing)

[Procedure](procedure.html#Procedure)

1

[procedure-targetBodyStructure](extension-procedure-targetbodystructure.html "The target body site used for this procedure.  Multiple locations are allowed.")

0..\*

[Reference](references.html#Reference)

[Procedure](procedure.html#Procedure),  
[ServiceRequest](servicerequest.html#ServiceRequest)

1

[quantity-precision](extension-quantity-precision.html "Explicit precision of the number. This is the number of significant decimal places after the decimal point, irrespective of how many are actually present in the explicitly represented decimal.")

0..1

[integer](datatypes.html#integer)

decimal

1

[questionnaire-baseType](extension-questionnaire-basetype.html "This identifies the underlying type in a profile, when a questionnaire is generated from a profile.")

0..1

[code](datatypes.html#code)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-choiceOrientation](extension-questionnaire-choiceorientation.html "Identifies the desired orientation when rendering a list of choices (typically radio-box or check-box lists).")

0..1

[code](datatypes.html#code)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-constraint](extension-questionnaire-constraint.html "An invariant that must be satisfied before responses to the questionnaire can be considered "complete".")

0..\*

(complex)

[Questionnaire](questionnaire.html#Questionnaire),  
[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-displayCategory](extension-questionnaire-displaycategory.html "Describes the intended purpose of the rendered text.  For example - instructions, guidance on access control, maintenance information, etc.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-fhirType](extension-questionnaire-fhirtype.html "For questionnaires generated from FHIR profiles, indicates the FHIR data type or resource type that corresponds to this node.")

0..1

[string](datatypes.html#string)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-hidden](extension-questionnaire-hidden.html "If true, indicates that the extended item should not be displayed to the user.")

0..1

[boolean](datatypes.html#boolean)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-itemControl](extension-questionnaire-itemcontrol.html "The type of data entry control or structure that should be used to render the item.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-maxOccurs](extension-questionnaire-maxoccurs.html "The maximum number of times the group must appear, or the maximum number of answers for a question - when greater than 1 and not unlimited.")

0..1

[integer](datatypes.html#integer)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-minOccurs](extension-questionnaire-minoccurs.html "The minimum number of times the group must appear, or the minimum number of answers for a question - when greater than 1.")

0..1

[integer](datatypes.html#integer)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-optionExclusive](extension-questionnaire-optionexclusive.html "If true, indicates that if this answerOption is selected, no other possible answers may be selected, even if the item is a repeating question.")

0..1

[boolean](datatypes.html#boolean)

[Questionnaire.item.answerOption](questionnaire.html#Questionnaire)

1

[questionnaire-optionPrefix](extension-questionnaire-optionprefix.html "The label to list in front of a code when presenting a list of possible values in a questionnaire-like fashion.")

0..1

[string](datatypes.html#string)

[Questionnaire.item.answerOption](questionnaire.html#Questionnaire)

1

[questionnaire-referenceFilter](extension-questionnaire-referencefilter.html "Identifies a filter to apply when looking up candidate answers for the question.")

0..1

[string](datatypes.html#string)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-referenceProfile](extension-questionnaire-referenceprofile.html "Where the type for a question is "Reference", indicates a profile that the resource instances pointed to in answers to this question must be valid against.")

0..\*

[canonical](datatypes.html#canonical)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-referenceResource](extension-questionnaire-referenceresource.html "Where the type for a question is "Reference", indicates a type of resource that is permitted.")

0..\*

[code](datatypes.html#code)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-signatureRequired](extension-questionnaire-signaturerequired.html "Indicates that a signature (of the specified type) is needed when completing the QuestionnaireResponse.")

0..\*

[CodeableConcept](datatypes.html#CodeableConcept)

[Questionnaire](questionnaire.html#Questionnaire),  
[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-sliderStepValue](extension-questionnaire-sliderstepvalue.html "For slider-based controls, indicates the step size to use when toggling the control up or down.")

0..1

[integer](datatypes.html#integer)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-supportLink](extension-questionnaire-supportlink.html "A URL that resolves to additional supporting information or guidance related to the question.")

0..\*

[uri](datatypes.html#uri)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-unit](extension-questionnaire-unit.html "Provides a computable unit of measure associated with numeric questions to support subsequent computation on responses. This is for use on items of type integer and decimal, and it's purpose is to support converting the integer or decimal answer into a Quantity when extracting the data into a resource.")

0..1

[Coding](datatypes.html#Coding)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-unitOption](extension-questionnaire-unitoption.html "A unit that the user may choose when providing a quantity value.")

0..\*

[Coding](datatypes.html#Coding)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-unitValueSet](extension-questionnaire-unitvalueset.html "A set of units that the user may choose when providing a quantity value.")

0..1

[canonical](datatypes.html#canonical)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaire-usageMode](extension-questionnaire-usagemode.html "Identifies that the specified element should only appear in certain "modes" of operation.")

0..1

[code](datatypes.html#code)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[questionnaireresponse-author](extension-questionnaireresponse-author.html "Allows capturing, on a specific question or group of questions, exactly who was responsible for providing the answer(s).")

0..1

[Reference](references.html#Reference)

[QuestionnaireResponse.item](questionnaireresponse.html#QuestionnaireResponse),  
[QuestionnaireResponse.item.item](questionnaireresponse.html#QuestionnaireResponse)

1

[questionnaireresponse-completionMode](extension-questionnaireresponse-completionmode.html "Indicates how the individual completing the QuestionnaireResponse provided their responses.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[QuestionnaireResponse](questionnaireresponse.html#QuestionnaireResponse)

1

[questionnaireresponse-reason](extension-questionnaireresponse-reason.html "The factor(s) that caused the questionnaire to be answered.")

0..\*

[CodeableConcept](datatypes.html#CodeableConcept)

[QuestionnaireResponse](questionnaireresponse.html#QuestionnaireResponse)

1

[questionnaireresponse-reviewer](extension-questionnaireresponse-reviewer.html "Individual responsible for ensuring that the questionnaire response have been completed appropriately and signs off on the content.")

0..1

[Reference](references.html#Reference)

[QuestionnaireResponse](questionnaireresponse.html#QuestionnaireResponse)

1

[questionnaireresponse-signature](extension-questionnaireresponse-signature.html "Represents a wet or electronic signature for either the form overall or for the question or item it's associated with.")

0..\*

[Signature](datatypes.html#Signature)

[QuestionnaireResponse](questionnaireresponse.html#QuestionnaireResponse),  
[QuestionnaireResponse.item](questionnaireresponse.html#QuestionnaireResponse),  
[QuestionnaireResponse.item.item](questionnaireresponse.html#QuestionnaireResponse)

1

[regex](extension-regex.html "A regular expression that defines the syntax for the data element to be considered valid.")

0..1

[string](datatypes.html#string)

[Questionnaire.item](questionnaire.html#Questionnaire),  
[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[relative-date](extension-relative-date.html "Specifies that a date is relative to some event. The event happens [Duration] after [Event].")

0..1

(complex)

date,  
dateTime

1

[rendered-value](extension-rendered-value.html "Provides a rendered version of the value intended for human display.  For example, a sensitive identifier (e.g. social security number) partially obscured by asterisks; a drivers licence number with dashes inserted; a date formatted as MMM dd, yyyy; etc.")

0..1

[string](datatypes.html#string)

[Identifier.value](datatypes.html#Identifier),  
date,  
dateTime,  
time,  
instant,  
integer,  
decimal,  
string,  
code,  
canonical

1

[rendering-markdown](extension-rendering-markdown.html "This is an equivalent of the string on which the extension is sent, but includes additional markdown (see documentation about [markdown](datatypes.html#markdown). Note that using HTML  [xhtml](extension-rendering-xhtml.html) can allow for greater precision of display.")

0..1

[markdown](datatypes.html#markdown)

string

1

[rendering-style](extension-rendering-style.html "Identifies how the specified element should be rendered when displayed.")

0..1

[string](datatypes.html#string)

[Element](element.html#Element)

1

[rendering-styleSensitive](extension-rendering-stylesensitive.html "Indicates that the style extensions (style, markdown and xhtml) in this resource instance are essential to the interpretation of the instance and that systems that are not capable of rendering using those extensions should not be used to render the resource.")

0..1

[boolean](datatypes.html#boolean)

[Element](element.html#Element)

1

[rendering-xhtml](extension-rendering-xhtml.html "This is an equivalent of the string on which the extension is sent, but includes additional XHTML markup, such as bold, italics, styles, tables, etc. Existing [restrictions on XHTML content](narrative.html#security) apply. Note that using [markdown](extension-rendering-markdown.html) allows for greater flexibility of display.")

0..1

[string](datatypes.html#string)

string

1

[replaces](extension-replaces.html "Indicates a resource that this resource is replacing.")

0..\*

[canonical](datatypes.html#canonical)

[ActivityDefinition](activitydefinition.html#ActivityDefinition),  
[CapabilityStatement](capabilitystatement.html#CapabilityStatement),  
[ChargeItemDefinition](chargeitemdefinition.html#ChargeItemDefinition),  
[CodeSystem](codesystem.html#CodeSystem),  
[CompartmentDefinition](compartmentdefinition.html#CompartmentDefinition),  
[ConceptMap](conceptmap.html#ConceptMap),  
[EffectEvidenceSynthesis](effectevidencesynthesis.html#EffectEvidenceSynthesis),  
[EventDefinition](eventdefinition.html#EventDefinition),  
[Evidence](evidence.html#Evidence),  
[EvidenceVariable](evidencevariable.html#EvidenceVariable),  
[ExampleScenario](examplescenario.html#ExampleScenario),  
[GraphDefinition](graphdefinition.html#GraphDefinition),  
[ImplementationGuide](implementationguide.html#ImplementationGuide),  
[Library](library.html#Library),  
[Measure](measure.html#Measure),  
[MessageDefinition](messagedefinition.html#MessageDefinition),  
[NamingSystem](namingsystem.html#NamingSystem),  
[OperationDefinition](operationdefinition.html#OperationDefinition),  
[PlanDefinition](plandefinition.html#PlanDefinition),  
[Questionnaire](questionnaire.html#Questionnaire),  
[ResearchDefinition](researchdefinition.html#ResearchDefinition),  
[ResearchElementDefinition](researchelementdefinition.html#ResearchElementDefinition),  
[RiskEvidenceSynthesis](riskevidencesynthesis.html#RiskEvidenceSynthesis),  
[SearchParameter](searchparameter.html#SearchParameter),  
[StructureDefinition](structuredefinition.html#StructureDefinition),  
[StructureMap](structuremap.html#StructureMap),  
[TerminologyCapabilities](terminologycapabilities.html#TerminologyCapabilities),  
[TestScript](testscript.html#TestScript),  
[ValueSet](valueset.html#ValueSet)

1

[request-doNotPerform](extension-request-donotperform.html "If true indicates that the request is asking for the specified action to not occur.")

0..1 **M**

[boolean](datatypes.html#boolean)

[NutritionOrder](nutritionorder.html#NutritionOrder)

1

[request-insurance](extension-request-insurance.html "Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant in delivering the requested service.")

0..\*

[Reference](references.html#Reference)

[NutritionOrder](nutritionorder.html#NutritionOrder)

1

[request-performerOrder](extension-request-performerorder.html "Identifies the relative preference of alternative performers when the request lists multiple performers.")

0..1

[integer](datatypes.html#integer)

[ServiceRequest.performer](servicerequest.html#ServiceRequest)

1

[request-relevantHistory](extension-request-relevanthistory.html "Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource.")

0..\*

[Reference](references.html#Reference)

[NutritionOrder](nutritionorder.html#NutritionOrder),  
[CommunicationRequest](communicationrequest.html#CommunicationRequest)

1

[request-replaces](extension-request-replaces.html "Completed or terminated request(s) whose function is taken by this new request.")

0..\*

[Reference](references.html#Reference)

[NutritionOrder](nutritionorder.html#NutritionOrder)

1

[request-statusReason](extension-request-statusreason.html "Captures the reason for the current state of the resource.")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[DeviceRequest](devicerequest.html#DeviceRequest),  
[ServiceRequest](servicerequest.html#ServiceRequest),  
[NutritionOrder](nutritionorder.html#NutritionOrder),  
[SupplyRequest](supplyrequest.html#SupplyRequest)

1

[resource-approvalDate](extension-resource-approvaldate.html "The date on which the asset content was approved by the publisher. Approval happens once when the content is officially approved for usage.")

0..1

[date](datatypes.html#date)

[StructureDefinition](structuredefinition.html#StructureDefinition),  
[StructureMap](structuremap.html#StructureMap),  
[CapabilityStatement](capabilitystatement.html#CapabilityStatement),  
[OperationDefinition](operationdefinition.html#OperationDefinition),  
[SearchParameter](searchparameter.html#SearchParameter),  
[CompartmentDefinition](compartmentdefinition.html#CompartmentDefinition),  
[ImplementationGuide](implementationguide.html#ImplementationGuide),  
[CodeSystem](codesystem.html#CodeSystem),  
[ValueSet](valueset.html#ValueSet),  
[ConceptMap](conceptmap.html#ConceptMap),  
[NamingSystem](namingsystem.html#NamingSystem)

1

[resource-effectivePeriod](extension-resource-effectiveperiod.html "The period during which the resource content was or is planned to be effective.")

0..1

[Period](datatypes.html#Period)

[StructureDefinition](structuredefinition.html#StructureDefinition),  
[StructureMap](structuremap.html#StructureMap),  
[CapabilityStatement](capabilitystatement.html#CapabilityStatement),  
[OperationDefinition](operationdefinition.html#OperationDefinition),  
[SearchParameter](searchparameter.html#SearchParameter),  
[CompartmentDefinition](compartmentdefinition.html#CompartmentDefinition),  
[ImplementationGuide](implementationguide.html#ImplementationGuide),  
[CodeSystem](codesystem.html#CodeSystem),  
[ValueSet](valueset.html#ValueSet),  
[ConceptMap](conceptmap.html#ConceptMap),  
[NamingSystem](namingsystem.html#NamingSystem)

1

[resource-lastReviewDate](extension-resource-lastreviewdate.html "The date on which the asset content was last reviewed. Review happens periodically after that, but doesn't change the original approval date.")

0..1

[date](datatypes.html#date)

[StructureDefinition](structuredefinition.html#StructureDefinition),  
[StructureMap](structuremap.html#StructureMap),  
[CapabilityStatement](capabilitystatement.html#CapabilityStatement),  
[OperationDefinition](operationdefinition.html#OperationDefinition),  
[SearchParameter](searchparameter.html#SearchParameter),  
[CompartmentDefinition](compartmentdefinition.html#CompartmentDefinition),  
[ImplementationGuide](implementationguide.html#ImplementationGuide),  
[CodeSystem](codesystem.html#CodeSystem),  
[ValueSet](valueset.html#ValueSet),  
[ConceptMap](conceptmap.html#ConceptMap),  
[NamingSystem](namingsystem.html#NamingSystem)

1

[resource-pertainsToGoal](extension-resource-pertainstogoal.html "Indicates that the resource is related to either the measurement, achievement or progress towards the referenced goal.  For example, a Procedure to exercise pertainsToGoal of losing weight.")

0..\*

[Reference](references.html#Reference)

[Resource](resource.html#Resource)

1

[servicerequest-geneticsItem](extension-servicerequest-geneticsitem.html "The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.")

0..\*

(complex)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport)

1

[servicerequest-precondition](extension-servicerequest-precondition.html "The condition or state of the patient, prior or during the diagnostic procedure or test, for example, fasting, at-rest, or post-operative. This captures circumstances that may influence the measured value and have bearing on the interpretation of the result.")

0..\*

[CodeableConcept](datatypes.html#CodeableConcept)

[ServiceRequest](servicerequest.html#ServiceRequest)

1

[servicerequest-questionnaireRequest](extension-servicerequest-questionnairerequest.html "Reference to a specific Questionnaire Resource as an ordered item.  Allows for ordering a specific questionnaire to be completed.")

0..1

[Reference](references.html#Reference)

[ServiceRequest](servicerequest.html#ServiceRequest)

1

[specimen-collectionPriority](extension-specimen-collectionpriority.html "The urgency of sample collection, such as STAT, ASAP, ASAP-ED, ROUTINE, ROUTINE-AM, etc….")

0..1

[CodeableConcept](datatypes.html#CodeableConcept)

[Specimen.collection](specimen.html#Specimen)

1

[specimen-isDryWeight](extension-specimen-isdryweight.html "If the recorded quantity of the specimen is reported as a weight, if it is a dry weight.")

0..1

[boolean](datatypes.html#boolean)

[Specimen.collection.quantity](specimen.html#Specimen)

1

[specimen-processingTime](extension-specimen-processingtime.html "Period or duration of processing.")

0..1

(Choice)

[Specimen.processing](specimen.html#Specimen)

1

[specimen-sequenceNumber](extension-specimen-sequencenumber.html "An assigned number on the specimen denoting the order of collection.")

0..1

[integer](datatypes.html#integer)

[Specimen.container](specimen.html#Specimen)

1

[specimen-specialHandling](extension-specimen-specialhandling.html "Special handling during the collection, transport, or storage of the specimen.")

0..\*

[CodeableConcept](datatypes.html#CodeableConcept)

[Specimen.collection](specimen.html#Specimen)

1

[structuredefinition-ancestor](extension-structuredefinition-ancestor.html "A canonical reference to a StructureDefinition that this is derived from. This is a de-normalization of a chain of StructureDefinition.baseDefinition.")

0..\*

[uri](datatypes.html#uri)

[StructureDefinition](structuredefinition.html#StructureDefinition)

1

[structuredefinition-applicable-version](extension-structuredefinition-applicable-version.html "An additional version that this profile apples to, other than the version explicitly stated in StructureDefinition.fhirVersion.")

0..\*

[code](datatypes.html#code)

[StructureDefinition](structuredefinition.html#StructureDefinition)

1

[structuredefinition-category](extension-structuredefinition-category.html "The category under which the resource type is presented on the official resource list.")

0..1

[string](datatypes.html#string)

[StructureDefinition](structuredefinition.html#StructureDefinition)

1

[structuredefinition-codegen-super](extension-structuredefinition-codegen-super.html "A specific instruction to use an intermediate parent class when generating code for the classes.")

0..1

[string](datatypes.html#string)

[StructureDefinition.baseDefinition](structuredefinition.html#StructureDefinition)

1

[structuredefinition-dependencies](extension-structuredefinition-dependencies.html "Instances can only be valid against this StructureDefinition, if they also sucessfully validate against the dependent profile identified in this extension.")

0..\*

[canonical](datatypes.html#canonical)

[StructureDefinition](structuredefinition.html#StructureDefinition)

1

[structuredefinition-display-hint](extension-structuredefinition-display-hint.html "Hinting information for the narrative generator - a series of name: value; pairs.")

0..1

[string](datatypes.html#string)

[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[structuredefinition-explicit-type-name](extension-structuredefinition-explicit-type-name.html "A name to use for the type, in implementations. This is a suggestion; it's not a normative part of the FHIR specification, but it does appear in the UML diagrams, and is used in generated code, schemas, etc.to identify the type.")

0..1

[string](datatypes.html#string)

[ElementDefinition](elementdefinition.html#ElementDefinition)

1

[structuredefinition-fmm](extension-structuredefinition-fmm.html "The FMM level assigned to the artifact.")

0..1

[integer](datatypes.html#integer)

[Element](element.html#Element)

1

[structuredefinition-fmm-no-warnings](extension-structuredefinition-fmm-no-warnings.html "The FMM level that would be assigned to the artifact if it had no warnings.")

0..1

[integer](datatypes.html#integer)

[StructureDefinition](structuredefinition.html#StructureDefinition)

1

[structuredefinition-hierarchy](extension-structuredefinition-hierarchy.html "For circular references (references back to the same type of resource): whether they are allowed to transitively point back to the same instance (false), or whether the relationship must be a strict one-way hierarchy (true).")

0..1

[boolean](datatypes.html#boolean)

[ElementDefinition.type](elementdefinition.html#ElementDefinition)

1

[structuredefinition-json-type](extension-structuredefinition-json-type.html "The JSON type of a property - used for the value property of a primitive type (for which there is no type in the FHIR typing system).")

0..1

[string](datatypes.html#string)

[ElementDefinition.type.code](elementdefinition.html#ElementDefinition)

1

[structuredefinition-normative-version](extension-structuredefinition-normative-version.html "If this StructureDefinition is normative, which was the first normative version.")

0..1

[code](datatypes.html#code)

[StructureDefinition](structuredefinition.html#StructureDefinition)

1

[structuredefinition-rdf-type](extension-structuredefinition-rdf-type.html "The XML (schema) type of a property as used in RDF - used for the value attribute of a primitive type (for which there is no type in the FHIR typing system).")

0..1

[string](datatypes.html#string)

[ElementDefinition.type.code](elementdefinition.html#ElementDefinition)

1

[structuredefinition-security-category](extension-structuredefinition-security-category.html "Provides general guidance around the kind of access Control to Read, Search, Create, Update, or Delete the resource.")

0..1

[code](datatypes.html#code)

[StructureDefinition](structuredefinition.html#StructureDefinition)

1

[structuredefinition-standards-status](extension-structuredefinition-standards-status.html "The Current HL7 ballot/Standards status of this artifact.")

0..1

[code](datatypes.html#code)

[Element](element.html#Element)

1

[structuredefinition-summary](extension-structuredefinition-summary.html "Additional text for the summary presentation.")

0..1

[markdown](datatypes.html#markdown)

[StructureDefinition](structuredefinition.html#StructureDefinition)

1

[structuredefinition-table-name](extension-structuredefinition-table-name.html "A name to use to show mappings of this type in the generated summary tables.")

0..1

[string](datatypes.html#string)

[StructureDefinition.mapping](structuredefinition.html#StructureDefinition)

1

[structuredefinition-template-status](extension-structuredefinition-template-status.html "Status code taken from [HL7 template specification](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=377) - allows for alignment with the template DSTU, and has more authoring status codes.")

0..1

[code](datatypes.html#code)

[StructureDefinition](structuredefinition.html#StructureDefinition)

1

[structuredefinition-wg](extension-structuredefinition-wg.html "The work group that owns and maintains this resource.")

0..1

[code](datatypes.html#code)

[Element](element.html#Element)

1

[structuredefinition-xml-no-order](extension-structuredefinition-xml-no-order.html "Whether elements can come in any order in XML.")

0..1

[boolean](datatypes.html#boolean)

[StructureDefinition](structuredefinition.html#StructureDefinition)

1

[structuredefinition-xml-type](extension-structuredefinition-xml-type.html "The XML (schema) type of a property - used for the value attribute of a primitive type (for which there is no type in the FHIR typing system).")

0..1

[string](datatypes.html#string)

[ElementDefinition.type.code](elementdefinition.html#ElementDefinition)

1

[task-candidateList](extension-task-candidatelist.html "Identifies the individuals who are candidates for being the owner of the task.")

0..\*

[Reference](references.html#Reference)

[Task](task.html#Task)

1

[task-replaces](extension-task-replaces.html "Completed or terminated task(s) whose function is taken by this new task.")

0..\*

[Reference](references.html#Reference)

[Task](task.html#Task)

1

[timing-dayOfMonth](extension-timing-dayofmonth.html "When present, this extension indicate that the event actually only occurs on the specified days of the month, on the times as otherwise specified by the timing schedule.")

0..\*

[positiveInt](datatypes.html#positiveInt)

[Timing.repeat](datatypes.html#Timing)

1

[timing-daysOfCycle](extension-timing-daysofcycle.html "Days of a possibly repeating cycle on which the action is to be performed. The cycle is defined by the first action with a timing element that is a parent of the daysOfCycle.")

1..1

(complex)

[PlanDefinition.action](plandefinition.html#PlanDefinition),  
[RequestGroup.action](requestgroup.html#RequestGroup)

1

[timing-exact](extension-timing-exact.html "If true, indicates that the specified times, frequencies, periods are expected to be adhered to as precisely as possible.  If false, indicates that a typical degree of variability based on institutional and/or patient convenience is acceptable.")

0..1

[boolean](datatypes.html#boolean)

[Timing.repeat](datatypes.html#Timing)

1

[translation](extension-translation.html "Language translation from base language of resource to another language.")

0..\*

(complex)

string,  
code,  
markdown

1

[tz-code](extension-tz-code.html "An IANA timezone code for  the timezone offset per [BCP 175](https://www.iana.org/go/rfc6557). The offset is specified as part of a dateTime/instant (or using the tzOffset extension on a date if necessary). The timezone code may also be provided to allow for human display of the location associated with the offset.")

0..1

[code](datatypes.html#code)

date,  
dateTime,  
instant

1

[tz-offset](extension-tz-offset.html "Timezone offset, for dates where timezone is not allowed as part of the base date.")

0..1

[string](datatypes.html#string)

date

1

[usagecontext-group](extension-usagecontext-group.html "Defines the group in which this usage context is a member. Multiple groups are "OR'ed", contexts within a group are "AND'ed".")

0..1

[string](datatypes.html#string)

[UsageContext](metadatatypes.html#UsageContext)

1

[valueset-activityStatusDate](extension-valueset-activitystatusdate.html "The date when the associated Value Set Definition Version activity status is in effect.")

0..1

[date](datatypes.html#date)

[ValueSet](valueset.html#ValueSet)

1

[valueset-author](extension-valueset-author.html "The entity or set of entities that create and may modify the Value Set Definition content. The name of a group or an individual, along with contact details.")

0..\*

[ContactDetail](metadatatypes.html#ContactDetail)

[ValueSet](valueset.html#ValueSet)

1

[valueset-authoritativeSource](extension-valueset-authoritativesource.html "A reference to the authoritative accessible, persisted source of truth of the entire Value Set Definition, including textual information and available versions.")

0..1

[uri](datatypes.html#uri)

[ValueSet](valueset.html#ValueSet)

1

[valueset-caseSensitive](extension-valueset-casesensitive.html "If this a case sensitive code.")

0..1

[boolean](datatypes.html#boolean)

[ValueSet.expansion.contains](valueset.html#ValueSet)

1

[valueset-concept-comments](extension-valueset-concept-comments.html "A comment that explains how this code is used in this context (where the value set is expected to be used).")

0..1

[string](datatypes.html#string)

[ValueSet.compose.include.concept](valueset.html#ValueSet)

1

[valueset-concept-definition](extension-valueset-concept-definition.html "A definition that describes the meaning of this code when used as part of this value set.")

0..1

[string](datatypes.html#string)

[ValueSet.compose.include.concept](valueset.html#ValueSet),  
[ValueSet.expansion.contains](valueset.html#ValueSet)

1

[valueset-conceptOrder](extension-valueset-conceptorder.html "Identifies the relative order in which concepts within the value set should be presented to a user.")

0..1

[integer](datatypes.html#integer)

[ValueSet.compose.include.concept](valueset.html#ValueSet),  
[ValueSet.expansion.contains](valueset.html#ValueSet)

1

[valueset-deprecated](extension-valueset-deprecated.html "if ture, indicates that the concept is deprecated from the value set - that is, it should not be used, and is planned to be withdrawn.")

0..1

[boolean](datatypes.html#boolean)

[ValueSet.compose.include.concept](valueset.html#ValueSet)

1

[valueset-effectiveDate](extension-valueset-effectivedate.html "This is the first date-time when the value set version becomes active, so this value is present on Inactive value set versions as well. The start Date_time is expected to be as of 0001 UTC of the Effective Date.")

0..1

[dateTime](datatypes.html#dateTime)

[ValueSet](valueset.html#ValueSet)

1

[valueset-expand-group](extension-valueset-expand-group.html "This extension declares a group of concepts that is generated into the ValueSet.expansion.contains hierarchy when the expansion is generated for a UI. THere is no inherent assigned meaning to the hierarchy; it is used to help the user navigate the concepts. Each group has a display and/or a code, and a list of members, which are either concepts in the value set, or other groups (by code).")

0..\*

(complex)

[ValueSet.compose.include](valueset.html#ValueSet)

1

[valueset-expand-rules](extension-valueset-expand-rules.html "Defines how concepts are processed into the expansion when it's for UI presentation.")

0..1

[code](datatypes.html#code)

[ValueSet.compose.include](valueset.html#ValueSet)

1

[valueset-expansionSource](extension-valueset-expansionsource.html "The logical URL of the ValueSet definition that was used to generate this expansion.")

0..1

[uri](datatypes.html#uri)

[ValueSet.expansion](valueset.html#ValueSet)

1

[valueset-expirationDate](extension-valueset-expirationdate.html "The date when the value set version is no longer expected to be used to create new content. This is the first date-time when the value set version becomes Inactive, so this value SHALL present on all Inactive value set versions. The start Date_time is expected to be as of 0001 UTC of the Expiration Date.")

0..1

[date](datatypes.html#date)

[ValueSet](valueset.html#ValueSet)

1

[valueset-expression](extension-valueset-expression.html "An expression that provides an alternative definition of the content of the value set. There are two different ways to use this expression extension: If both an expression and a compose element is present, the compose is understood the make the same statement as the expression. If there is no compose, the expression is the only definition of the value set, and the value set can only be processed by a server that understands the expression syntax, it that is computable.")

0..1

[Expression](metadatatypes.html#Expression)

[ValueSet](valueset.html#ValueSet)

1

[valueset-extensible](extension-valueset-extensible.html "Whether this is intended to be used with an extensible binding or not.")

0..1

[boolean](datatypes.html#boolean)

[ValueSet](valueset.html#ValueSet)

1

[valueset-keyWord](extension-valueset-keyword.html "Word or words used in an information retrieval system to indicate the content of the value set.")

0..\*

[string](datatypes.html#string)

[ValueSet](valueset.html#ValueSet)

1

[valueset-label](extension-valueset-label.html "The label to list in front of a code when presenting a list of possible values in a questionnaire-like fashion.")

0..1

[string](datatypes.html#string)

[ValueSet.compose.include.concept](valueset.html#ValueSet),  
[ValueSet.expansion.contains](valueset.html#ValueSet)

1

[valueset-map](extension-valueset-map.html "A reference to a concept map that is relevant for the interpretation of this value set.")

0..1

[canonical](datatypes.html#canonical)

[ValueSet](valueset.html#ValueSet)

1

[valueset-otherName](extension-valueset-othername.html "Human readable names for the valueset.")

0..\*

(complex)

[ValueSet](valueset.html#ValueSet)

1

[valueset-parameterSource](extension-valueset-parametersource.html "Declares what the source of this parameter is.")

0..1

[code](datatypes.html#code)

[ValueSet.expansion.parameter](valueset.html#ValueSet)

1

[valueset-reference](extension-valueset-reference.html "A logical reference (e.g. a reference to ValueSet.url) that identifies the value set/version that identifies the set of possible coded values this coding was chosen from or constrained by.")

0..1

[uri](datatypes.html#uri)

[Coding](datatypes.html#Coding)

1

[valueset-rules-text](extension-valueset-rules-text.html "An expression that provides an alternative definition of the content of the value set in some form that is not computable - e.g instructions that could only be followed by a human.")

0..1

[markdown](datatypes.html#markdown)

[ValueSet](valueset.html#ValueSet)

1

[valueset-sourceReference](extension-valueset-sourcereference.html "This text is intended to act as a citation to work done elsewhere that is not part of the current stewarding process where the referenced source is in some way a basis of the current value set definition.")

0..1

[uri](datatypes.html#uri)

[ValueSet](valueset.html#ValueSet)

1

[valueset-special-status](extension-valueset-special-status.html "A special note for implementers about the status of the resource.")

0..1

[string](datatypes.html#string)

[ValueSet](valueset.html#ValueSet),  
[CodeSystem](codesystem.html#CodeSystem)

1

[valueset-steward](extension-valueset-steward.html "The entity that is responsible for the content of the Value Set Definition. This is a textual description of the organizational entity responsible for the content and maintenance.")

0..\*

[ContactDetail](metadatatypes.html#ContactDetail)

[ValueSet](valueset.html#ValueSet)

1

[valueset-supplement](extension-valueset-supplement.html "This extension declares that a value set depends on a particular supplement and should not be used in its absence.")

0..\*

[canonical](datatypes.html#canonical)

[ValueSet](valueset.html#ValueSet)

1

[valueset-system](extension-valueset-system.html "Allows a direct reference to the code system for FHIR query.")

0..1

[canonical](datatypes.html#canonical)

[ValueSet.compose.include.system](valueset.html#ValueSet)

1

[valueset-systemName](extension-valueset-systemname.html "The human-readable name for the code system.")

0..1

[string](datatypes.html#string)

[ValueSet.compose.include](valueset.html#ValueSet)

1

[valueset-systemRef](extension-valueset-systemref.html "The formal URI for the code system.  I.e. ValueSet.codeSystem.system (or its equivalent).")

0..1

[uri](datatypes.html#uri)

[ValueSet.compose.include](valueset.html#ValueSet)

1

[valueset-toocostly](extension-valueset-toocostly.html "Marks that the expansion is  incomplete, because the full value set is too large to represent, and the client asked for an incomplete fragment.")

0..1

[boolean](datatypes.html#boolean)

[ValueSet.expansion](valueset.html#ValueSet)

1

[valueset-trusted-expansion](extension-valueset-trusted-expansion.html "Indicates an authoritative source for performing value set expansions.")

0..\*

[uri](datatypes.html#uri)

[ValueSet](valueset.html#ValueSet)

1

[valueset-unclosed](extension-valueset-unclosed.html "Marks that the expansion is  incomplete, and values other than those listed may be valid. This may be used because post-coordinated codes are allowed, and no practical expansion can be produced.")

0..1

[boolean](datatypes.html#boolean)

[ValueSet.expansion](valueset.html#ValueSet)

1

[valueset-usage](extension-valueset-usage.html "Consumers of the value set and the implementations, projects or standards that the author has utilized the value set in.")

0..\*

(complex)

[ValueSet](valueset.html#ValueSet)

1

[valueset-warning](extension-valueset-warning.html "An extra warning about the correct use of the value set.")

0..1

[markdown](datatypes.html#markdown)

[ValueSet](valueset.html#ValueSet)

1

[valueset-workflowStatus](extension-valueset-workflowstatus.html "Workflow Status is used to represent details of the value set development process while in a single Activity Status.")

0..1

[string](datatypes.html#string)

[ValueSet](valueset.html#ValueSet)

1

[variable](extension-variable.html "Variable specifying a logic to generate a variable for use in subsequent logic.  The name of the variable will be added to FHIRPath's context when processing descendants of the element that contains this extension.")

0..\*

[Expression](metadatatypes.html#Expression)

[Questionnaire](questionnaire.html#Questionnaire),  
[Questionnaire.item](questionnaire.html#Questionnaire),  
[Questionnaire.item.item](questionnaire.html#Questionnaire)

1

[workflow-episodeOfCare](extension-workflow-episodeofcare.html "The episode(s) of care that establishes the context for this {{title}}.")

0..\*

[Reference](references.html#Reference)

[Observation](observation.html#Observation),  
[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Media](media.html#Media),  
[DeviceRequest](devicerequest.html#DeviceRequest),  
[ServiceRequest](servicerequest.html#ServiceRequest),  
[NutritionOrder](nutritionorder.html#NutritionOrder),  
[DeviceUseStatement](deviceusestatement.html#DeviceUseStatement),  
[AdverseEvent](adverseevent.html#AdverseEvent),  
[CarePlan](careplan.html#CarePlan),  
[CareTeam](careteam.html#CareTeam),  
[ClinicalImpression](clinicalimpression.html#ClinicalImpression),  
[Communication](communication.html#Communication),  
[CommunicationRequest](communicationrequest.html#CommunicationRequest),  
[Condition](condition.html#Condition),  
[Procedure](procedure.html#Procedure),  
[QuestionnaireResponse](questionnaireresponse.html#QuestionnaireResponse)

1

[workflow-instantiatesCanonical](extension-workflow-instantiatescanonical.html "The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by the event or request resource.")

0..\*

[canonical](datatypes.html#canonical)

[Observation](observation.html#Observation),  
[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Media](media.html#Media),  
[Condition](condition.html#Condition),  
[SupplyDelivery](supplydelivery.html#SupplyDelivery),  
[CommunicationRequest](communicationrequest.html#CommunicationRequest),  
[SupplyRequest](supplyrequest.html#SupplyRequest)

1

[workflow-instantiatesUri](extension-workflow-instantiatesuri.html "The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by the event or request resource.")

0..\*

[uri](datatypes.html#uri)

[Observation](observation.html#Observation),  
[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Media](media.html#Media),  
[Condition](condition.html#Condition),  
[SupplyDelivery](supplydelivery.html#SupplyDelivery),  
[CommunicationRequest](communicationrequest.html#CommunicationRequest),  
[SupplyRequest](supplyrequest.html#SupplyRequest)

1

[workflow-reasonCode](extension-workflow-reasoncode.html "Describes why the event occurred in coded or textual form.")

0..\*

[CodeableConcept](datatypes.html#CodeableConcept)

[Observation](observation.html#Observation),  
[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Media](media.html#Media),  
[NutritionOrder](nutritionorder.html#NutritionOrder)

1

[workflow-reasonReference](extension-workflow-reasonreference.html "Indicates another resource whose existence justifies this event.")

0..\*

[Reference](references.html#Reference)

[Observation](observation.html#Observation),  
[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Media](media.html#Media),  
[NutritionOrder](nutritionorder.html#NutritionOrder)

1

[workflow-relatedArtifact](extension-workflow-relatedartifact.html "Documentation  or 'knowledge artifacts' relevant to the base resource such as citations, supporting evidence, documentation of processes, caveats around testing methodology.")

0..\*

[RelatedArtifact](metadatatypes.html#RelatedArtifact)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Observation](observation.html#Observation)

1

[workflow-researchStudy](extension-workflow-researchstudy.html "Indicates that this event is relevant to the specified research study(ies).")

0..\*

[Reference](references.html#Reference)

[Composition](composition.html#Composition),  
[Consent](consent.html#Consent),  
[DeviceUseStatement](deviceusestatement.html#DeviceUseStatement),  
[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Encounter](encounter.html#Encounter),  
[FamilyMemberHistory](familymemberhistory.html#FamilyMemberHistory),  
[Immunization](immunization.html#Immunization),  
[Media](media.html#Media),  
[MedicationAdministration](medicationadministration.html#MedicationAdministration),  
[MedicationDispense](medicationdispense.html#MedicationDispense),  
[MedicationStatement](medicationstatement.html#MedicationStatement),  
[Observation](observation.html#Observation),  
[Procedure](procedure.html#Procedure),  
[QuestionnaireResponse](questionnaireresponse.html#QuestionnaireResponse),  
[RiskAssessment](riskassessment.html#RiskAssessment),  
[SupplyDelivery](supplydelivery.html#SupplyDelivery),  
[Task](task.html#Task)

1

[workflow-supportingInfo](extension-workflow-supportinginfo.html "Other resources *from the patient record* that may be relevant to the event.  The information from these resources was either used to create the instance or is provided to help with its interpretation.  This extension **should not** be used if more specific  inline elements  or extensions are available.  For example, use `Observation.hasMember`  instead of supportingInformation for  representing the members of an Observation panel.")

0..\*

[Reference](references.html#Reference)

[DiagnosticReport](diagnosticreport.html#DiagnosticReport),  
[Observation](observation.html#Observation),  
[CommunicationRequest](communicationrequest.html#CommunicationRequest)

1

®© HL7.org 2011+. FHIR Release 4 (v4.0.0) generated on Thu, Dec 27, 2018. [QA Page](qa.html)  
Links: [Search ![](external.png)](http://hl7.org/fhir/search.cfm) | [Version History](history.html) | [Table of Contents](toc.html) | [Credits](credits.html) | [Compare to R3 ![](external.png)](http://services.w3.org/htmldiff?doc1=http%3A%2F%2Fhl7.org%2Ffhir%2FSTU3%2Fextensibility-registry.html&doc2=http%3A%2F%2Fhl7.org%2Ffhir%2Fextensibility-registry.html) | [![CC0](cc0.png)](license.html) | [Propose a change ![](external.png)](http://hl7.org/fhir-issues)