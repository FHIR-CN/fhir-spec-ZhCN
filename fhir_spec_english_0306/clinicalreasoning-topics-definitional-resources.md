\[%settitle Clinical Reasoning%\]
\[%file newnavbar%\]
|                                              |                                             |                                                                                       |
|----------------------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------|
| Work Group [\[%wgt cds%\]](%5B%wg%20cds%%5D) | [Maturity Level](versions.html#maturity): 2 | [Standards Status](versions.html#std-process): [Trial Use](versions.html#std-process) |

<span id="definitional-resources"></span>
### Definitional Resources

Part of defining knowledge artifacts such as order sets, protocols, and decision support rules is describing in a patient- or context-independent way the activities to be performed. For example, when defining an order set, the orderable items must be described with enough detail to enable the creation of the items when the order set is applied. These descriptions can be thought of as *templates* for the creation of patient- or context-specific resources and are often referred to as *definitional* resources, to distinguish them from *intent* resources (that signal an intention to take some action for a specific patient), as well as *event* resources (that signal that some action has actually been taken for a patient).

In the most general case, these definitional resources only need to describe the most basic aspects of the activity to be performed, such as:

-   Who - Which person should perform the activity, often specified as a participant role such as a provider specialty.
-   What - What type of activity should be performed, often specified simply as a category or a concept.
-   When - When the activity should be performed, often specified relative to the time the plan is applied.
-   Where - Where the activity should take place, often specified as a facility role.
-   Why - Why the activity should be performed

However, this level of conceptual description often does not carry enough information to enable computable description of activities. For example, medication activities will often involve specific drug and dosage information that must be captured as part of the definition. Further, it is often the case that the values for the elements of resources to be created cannot be specified exactly as part of the definition, but must be specified using a formula that allows for the calculation to be based on patient- or context-specific information.

The [ActivityDefinition](activitydefinition.html) resource supports the description of definitional resources within FHIR:

|       |                       |                                                                     |
|-------|-----------------------|---------------------------------------------------------------------|
| Who   | participantType       | Specifies the type of participant that should perform the activity. |
| What  | kind and code         | Specifies the type of activity to be performed.                     |
| When  | timing                | Specifies when the activity should be performed.                    |
| Where | location              | Specifies where the activity should be performed.                   |
| Why   | reason, documentation | Specifies why the activity should be performed.                     |

For example, the following fragment illustrates a definition to create a referral request:

<span id="referral-request-activity-definition"></span>
    <ActivityDefinition>
      <description value="refer to primary care mental-health integrated care program for evaluation and treatment
       of mental health conditions now"/>
      <kind value="ServiceRequest"/>
      <code>
        <coding>
          <system value="http://snomed.info/sct"/>
          <code value="306206005"/>
        </coding>
      </code>
      <timingTiming>
        <event>
          <extension url="http://hl7.org/fhir/StructureDefinition/cqf-expression">
            <valueExpression>
              <language value="text/cql"/>
              <expression value="Now()"/>
            </valueExpression>
          </extension>
        </event>
      </timingTiming>
      <participantType value="practitioner"/>
    </ActivityDefinition>

Note the use of an expression to represent the value of the timing element as `Now()`.

For medication activities, the [ActivityDefinition](activitydefinition.html) resource has some basic elements such as the `product` and `quantity`, and `dosageInstruction` but there are cases where elements that need to be set on the resulting MedicationRequest are not present on the ActivityDefinition (such as `dispenseRequest`). In those cases, the `dynamicValue` expression elements can be used to describe the values for elements that are present on the target resource, but not in the definitional resource. For example:

<span id="medication-activity-definition"></span>
    <ActivityDefinition>
      <id value="citalopramPrescription"/>
      <status value="draft"/>
      <category value="drug"/>
      <productReference>
        <reference value="#citalopramMedication"/>
      </productReference>
      <dynamicValue>
        <path value="dispenseRequest.numberOfRepeatsAllowed"/>
        <expression>
          <language value="text/cql"/>
          <expression value="3"/>
        </expression>
      </dynamicValue>
      <dynamicValue>
        <path value="dispenseRequest.quantity"/>
        <expression>
          <language value="text/cql"/>
          <expression value="30 '{tbl}'"/>
        </expression>
      </dynamicValue>
    </ActivityDefinition>

Note to implementers: Although there is currently only one *definitional* resource defined (ActivityDefinition), the concept is general, and this was a deliberate design decision to avoid the overhead of defining and maintaining a different definitional resource for every category of request. We anticipate that as the use cases of ActivityDefinition require more specialized elements to be added, the resource may be split.

\[%file newfooter%\]
