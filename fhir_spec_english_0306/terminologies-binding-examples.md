\[%settitle Terminology Binding Examples%\]
\[%file newnavbar%\]
&lt;%txheader%&gt;
Terminology Binding Examples
============================

|                                                 |                                             |                                                                                      |
|-------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| [\[%wgt vocab%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): 0 | [Standards Status](versions.html#std-process):[Trial Use](versions.html#std-process) |

<span id="binding-examples"></span> <span id="extensible"></span>
Extensible binding examples
---------------------------

### Condition.code with Extensible binding

For example, we have a Condition.code and the applicable profile binds the code to the value set [http://hl7.org/fhir/ValueSet/condition-code](http://build.fhir.org/valueset-condition-code.html) with an Extensible binding:

``` json
{
  "path": "Condition.code",
  "definition" : "Identification of the condition, problem or diagnosis."
  "binding": {
    "strength": "extensible",
    "valueSetCanonical": "http://hl7.org/fhir/ValueSet/condition-code"
  }
}
```

This value set includes all SNOMED CT concepts that are clinical findings.

<span id="extensible.c1"></span>
### Condition instance \#1

``` json
{
  "resourceType": "Condition",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "39065001",
        "display": "Burn of ear"
      }
    ],
    "text": "Burnt Ear"
  },
  "subject": {
    "reference": "Patient/example"
  }
}
```

This concept (code = 39065001) is included in the value set so the instance is valid.

<span id="extensible.c2"></span>
### Condition instance \#2

``` json
{
  "resourceType": "Condition",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "312824007",
        "display": "Family history of cancer of colon"
      }
    ]
  },
  "subject": {
    "reference": "Patient/example"
  }
}
```

This SNOMED CT concept is not a clinical finding. So is it valid? With the extensible binding 2 questions must be answered:

-   Is there an applicable code in the bound value set (condition-code) for ‘family history of cancer of colon’? That doesn’t appear to be the case, so the instance is valid in that respect.
-   Does this code fit into the definition of the element in the profile: “Identification of the condition, problem or diagnosis.”? That also appears likely to be the case. But that isn’t entirely clear, which is the challenge of extensible bindings.

So this example is most likely valid (based on human review).

<span id="extensible.c3"></span>
### Condition instance \#3

``` json
{
  "resourceType": "Condition",
  "code": {
    "coding": [
      {
        "system": "http://my-local-organization.com",
        "code": "XYZ123",
        "display": "Severe pneumococcal pneumonia"
      }
    ]
  },
  "subject": {
    "reference": "Patient/example"
  }
}
```

This Condition instance contains a local code. Is it a valid instance? With the extensible binding, the same questions as before have to be answered:

-   Is there an applicable code in the bound value set (condition-code) for ‘Severe pneumococcal pneumonia’? In this case SNOMED CT **does** have the code 233607000 for ‘Pneumococcal pneumonia’. Since ‘Pneumococcal pneumonia’ is a more general meaning which "covers" (i.e. includes or subsumes) ‘Severe pneumococcal pneumonia’, this Condition instance is **not valid** and the SNOMED CT code 233607000 for ‘Pneumococcal pneumonia’ SHALL be used instead.
-   Does this code fit into the definition of the element in the profile: “Identification of the condition, problem or diagnosis.”? Yes, it does. But since it was already determined that there is an applicable code in the bound value set that should be used instead, this instance is not valid.

<span id="extensible.c4"></span>
### Condition instance \#4

What if we would like to send our local code for ‘Severe pneumococcal pneumonia’ in the instance along with the SNOMED CT code 233607000 for ‘Pneumococcal pneumonia’? Because the data type for Condition.code is CodeableConcept, we can do that using an additional Coding (as a translation):

``` json
{
  "resourceType": "Condition",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "233607000",
        "display": "Pneumococcal pneumonia"
      },
      {
        "system": "http://my-local-organization.com",
        "code": "XYZ123",
        "display": "Severe pneumococcal pneumonia"
      }
    ]
  },
  "subject": {
    "reference": "Patient/example"
  }
}
```

So this is a valid Condition instance which contains both the applicable SNOMED CT code from the extensibly bound condition-code value set for ‘Pneumococcal pneumonia’ as well as my organization's local code for ‘Severe pneumococcal pneumonia’.

<span id="preferred"></span>
Preferred binding examples
--------------------------

The choice of code with a Preferred binding is considerably simpler than for an Extensional binding, because the Preferred binding is a suggestion from the developers of the resource or profile about which codes they believe would be best to use to represent this data. However, in a particular instance you are free to choose to follow that suggestion or not, depending on your particular desires and needs, and there are no specific conformance expectations regarding that choice.

So in this case we have a Condition.code and the applicable profile binds the code to the value set [http://hl7.org/fhir/ValueSet/condition-code](http://build.fhir.org/valueset-condition-code.html) with a Preferred binding:

<span id="preferred.c1"></span>
### Condition.code with Preferred binding

``` json
{
  "path": "Condition.code",
  "definition" : "Identification of the condition, problem or diagnosis."
  "binding": {
    "strength": "preferred",
    "valueSetCanonical": "http://hl7.org/fhir/ValueSet/condition-code"
  }
}
```

With the Preferred binding all of the following instances (and many other possibilities) are valid instances of the Condition resource:

<span id="preferred.c2"></span>
### Condition instance \#5

``` json
{
  "resourceType": "Condition",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "39065001",
        "display": "Burn of ear"
      }
    ],
    "text": "Burnt Ear"
  },
  "subject": {
    "reference": "Patient/example"
  }
}
```

<span id="preferred.c4"></span>
### Condition instance \#6

``` json
{
  "resourceType": "Condition",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "312824007",
        "display": "Family history of cancer of colon"
      }
    ]
  },
  "subject": {
    "reference": "Patient/example"
  }
}
```

<span id="preferred.c5"></span>
### Condition instance \#7

``` json
{
  "resourceType": "Condition",
  "code": {
    "coding": [
      {
        "system": "http://my-local-organization.com",
        "code": "XYZ123",
        "display": "Severe pneumococcal pneumonia"
      }
    ]
  },
  "subject": {
    "reference": "Patient/example"
  }
}
```

<span id="preferred.c6"></span>
### Condition instance \#8

``` json
{
  "resourceType": "Condition",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "233607000",
        "display": "Pneumococcal pneumonia"
      },
      {
        "system": "http://my-local-organization.com",
        "code": "XYZ123",
        "display": "Severe pneumococcal pneumonia"
      }
    ]
  },
  "subject": {
    "reference": "Patient/example"
  }
}
```

\[%file newfooter%\]
