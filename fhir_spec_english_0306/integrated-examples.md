\[%settitle Integrated Examples%\]
\[%file newnavbar%\]
Integrated Examples
-------------------

|                                                |                                               |                                                                                        |
|------------------------------------------------|-----------------------------------------------|----------------------------------------------------------------------------------------|
| [\[%wgt fhir%\]](%5B%wg%20fhir%%5D) Work Group | [Maturity Level](versions.html#maturity): N/A | [Standards Status](versions.html#std-process):[Informative](versions.html#std-process) |

These integrated examples are the result of choosing several real world healthcare records from a Dutch healthcare institution and representing them using FHIR resources. They are published here for several reasons:

-   To test that the resources are fit for purpose using real cases
-   So that the available resource examples include real cases
-   So that applications have real world clinical cases to use in development and prototyping

### Patient case 1

The 69 year old Pieter van den Heuvel is diagnosed with several serious diseases over the last few years. In the spring and summer of 2011, Pieter had complaints of fatigue, dyspnea and even fainting. After visiting his physician, Pieter was referred to the cardiologist for further examination. At the hospital a malfunction of the heart valve was diagnosed and eventually replaced. Pieter recovered well in the next 2 months, but probably needs a life time prescription on blood pressure reducing medication. In the summer of 2012, Pieter again visited his physician for a chest injury after he fell from the stairs. By coincidence, the doctor noticed a suspicious stain on the X-thorax and performed some additional tests on Pieter. After the results, Pieter was diagnosed with early stage non-small cell lung cancer. Fortunately, the tumor didn't spread to other parts of the body. Tumor type and location made it possible to perform a partial lobectomy in the right lung. After his recovery, Pieter was submitted to a high risk control group for yearly screening.

In 2013, Pieter was charged with an increasing neck swelling, a stiff neck and difficulty swallowing. Because of breathing problems, Pieter was urgently admitted to the hospital. An upper respiratory infection caused a retropharyngeal abscess in the back of the throat. Surgery was needed to remove the abscess. The surgeons recommended a tracheotomy during the surgery, so there was less change of complications during the abscess removal. A tracheotomy was intubated before the surgery. After the removal of the retropharyngeal abscess, the tracheotomy was extubated as the swelling was reduced and normal breathing became reinstated.

#### Patient demographic information

    Patient name: Pieter van den Heuvel
    Patient number: 0108173
    Date of birth: 17-11-1944
    Gender: Male

#### Patient contact information

    Address: van Egmondkade 23
    Zip code: 1024 RJ
    City: Amsterdam
    Phone: +31648352638
    email: p.heuvel@gmail.com

| intake date | surgery date | practitioner                                                  | specializm                                                                      | diagnose                                                               | procedure                                                      | care plan                                    | surgery code | SNOMED CT code | related encounter                            |
|-------------|--------------|---------------------------------------------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------|--------------|----------------|----------------------------------------------|
| 26-6-2011   | 27-6-2011    | [P. Voigt](practitioner-example-f002-pv.html)                 | [CTC (Cardio-thoracale Chirurgie)](organization-example-f002-burgers-card.html) | [Heart valve disorder](condition-example-f001-heart.html)              | [Heart valve replacement](procedure-example-f001-heart.html)   | [CP2903](careplan-example-f001-heart.html)   | 1000263502   | 64915003       | [v1451](encounter-example-f001-heart.html)   |
| 6-7-2012    | 7-7-2012     | [M.I.M. Versteegh](practitioner-example-f003-mv.html)         | [CTC (Cardio-thoracale Chirurgie)](organization-example-f002-burgers-card.html) | [NSCLC - Non-small cell lung cancer](condition-example-f002-lung.html) | [partial lobectomy](procedure-example-f002-lung.html)          | [CP2934](careplan-example-f002-lung.html)    | 1000263813   | 173171007      | [v3251](encounter-example-f002-lung.html)    |
| 22-3-2013   | 22-3-2013    | [A.P.M. Langeveld](practitioner-example-f005-al.html)         | [ENT](organization-example-f003-burgers-ENT.html)                               | [Retropharyngeal abscess](condition-example-f003-abscess.html)         | [Trachea-tracheotomy](procedure-example-f003-abscess.html)     | CP2938                                       | 1000050465   | 48387007       | [v6751](encounter-example-f003-abscess.html) |
| 24-3-2013   | 24-3-2013    | [E.M.J.M. van den broek](practitioner-example-f001-evdb.html) | [ENT](organization-example-f003-burgers-ENT.html)                               | [Retropharyngeal abscess](condition-example-f003-abscess.html)         | [retropharyngeal abscess](procedure-example-f003-abscess.html) | [CP3953](careplan-example-f003-pharynx.html) | 1000049161   | 172960003      | [v6751](encounter-example-f003-abscess.html) |
| 27-3-2013   | 27-3-2013    | [R.J.P. Briet](practitioner-example-f004-rb.html)             | [ENT](organization-example-f003-burgers-ENT.html)                               | [Retropharyngeal abscess](condition-example-f003-abscess.html)         | Trachea-extubatie                                              | CP1283                                       | 1000050159   | 309812005      | [v6751](encounter-example-f003-abscess.html) |

| device                                               | hopital/home | dose | admission route | start date | presciber         | SNOMED CT code |
|------------------------------------------------------|--------------|------|-----------------|------------|-------------------|----------------|
| [Feeding tube](device-example-f001-feedingtube.html) | hopital      | N.A. | tube            | 10-4-2013  | R.A. van den Berk | 61420007       |

Lab results
diagnostic blood report
date
substance
value
status
2013-04-02
[glucose](observation-example-f001-glucose.html)
6,3 mmol/l
abnormal
2013-04-02
[base excess](observation-example-f001-glucose.html)
12,6 mmol/l
abnormal
2013-04-02
[carbon dioxide](observation-example-f001-glucose.html)
6,2 mm\[Hg\]
abnormal
2013-04-02
[erytrocyten](observation-example-f001-glucose.html)
18,7 g/dl
abnormal
2013-04-02
[Hemoglobin](observation-example-f001-glucose.html)
7,5 g/dl
abnormal
#### Anamnese

***date: 8-6-2012*** Bronchoscopy; several biopsy specimens were taken from pathological mucosa, right main bronchus specimen sent for pathologic analysis. Bronchoscopy because of atelectasis right. X-thorax; increase in atelectasis and pleural liquid. Bronchoscopy;
-fluids drained from right main bronchus
-pathologic mucous membrane right bronchus, easily bleeding
-left bronchial system open ***date: 18-3-2013*** Antiobiotic policy with retropharyngeal abscess with prolapse to the mediatinum. No surgical possibility to fully drain the mediatinum.
#### Physical investigation

***date: 18-3-2013*** Neck; swelling and redness pretracheal extending to chest. No fluctuation, however induration is present. Swelling back pharynx, also present in postcricoid area. Light stridor sound when breathing. Overall condition is good. Scoop; little supraglottic swelling, vocal chords not judgable.
#### Additional research

CT thorax: no mediastinal/retropharyngal coloring of the fluid collections. Diffuse edema retro/parapharyngeal and mediastinitis. Preoperative culture shows; S pyogenes, sensitivity for penicillin and E. cloacae, sensitivity for vancomycin.
#### Policy

Stop vancomycin prescription. Continue penicillin and start vancomycin supplementation. Total treatment time is approximately 6 weeks. In consultation with the IC/anesthesia; intubation. Analyze lower respiratory tract.
#### Conclusion

Extubation on OR. Normal voice, no stridor. However, hypoxic at low respiratory tract obstruction with 84% O2 and rapid breathing.
### Patient case 2

    Patient name: Roel Bor
    Patient number: 123456789
    Date of birth: 1960-03-13
    Gender: Male

#### Patient contact information

    Address: Bos en Lommerplein 280
    Zip code: 1055 RW
    City: Amsterdam
    Phone: +31612345678

Roel Bor is in his mid-fifties, works for an IT-company and has two healthy children and a wife. His uncle unfortunately was less healthy and died of cancer. At the end of 2012, Roel was also diagnosed with a tumor in the Erasmus Medical Center. His tumor is located in the head-neck area. The standard treatment for that is TPF-chemotherapy. The tumor is not fully curable due to its position, but it was optimally minimized with the therapy in the AUMC. Two severe complications followed the treatment, namely bacterial sepsis (streptococcus aureus) and renal failure. Both were stabilized within a short period through medication (see care plan). Roel thereafter had his ups and downs with the last known condition of a severe fever, for which he received among other treatment (paracetamol). On a side-note and as a final statement: the patient suffers from house dust allergy.
| practitioner                                    | organization                                                           | careplan                                        | start date | substance                                          | condition                                                 | other participant                                   | procedure                                       | encounter ID                                     | surgery code | SNOMED CT code |
|-------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------|------------|----------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------|-------------------------------------------------|--------------------------------------------------|--------------|----------------|
| [A. Bronsig](practitioner-example-f201-ab.html) | [Artis University Medical Center](organization-example-f201-aumc.html) | [CP3928](careplan-example-f201-renal.html)      | 2013-03-11 | [potassium](substance-example-f203-potassium.html) | [fever](condition-example-f201-fever.html)                | [Carla Espinosa](practitioner-example-f204-ce.html) |                                                 | [20130404](encounter-example-f201-20130404.html) | 100028475    | 64915003       |
| [A. Bronsig](practitioner-example-f201-ab.html) | [Artis University Medical Center](organization-example-f201-aumc.html) | [CP7364](careplan-example-f202-malignancy.html) |            |                                                    | [malignant tumor](condition-example-f202-malignancy.html) |                                                     | [chemotherapy](procedure-example-f201-tpf.html) | [20130128](encounter-example-f202-20130128.html) | 100028475    | 363346000      |
| [A. Bronsig](practitioner-example-f201-ab.html) | [Artis University Medical Center](organization-example-f201-aumc.html) | [CP8766](careplan-example-f203-sepsis.html)     | 2013-03-11 |                                                    | [Bacterial sepsis](condition-example-f203-sepsis.html)    | [Luigi Maas](practitioner-example-f202-lm.html)     | observation                                     | [20130311](encounter-example-f203-20130311.html) | 100028475    | 363346000      |

| practitioner                                    | date      | encounter                                        | reason       | condition                                                 | medication | medication prescription                     | procedure                                       | diagnostic report                           | issued by |
|-------------------------------------------------|-----------|--------------------------------------------------|--------------|-----------------------------------------------------------|------------|---------------------------------------------|-------------------------------------------------|---------------------------------------------|-----------|
| [A. Bronsig](practitioner-example-f201-ab.html) | 28-1-2013 | [20130128](encounter-example-f202-20130128.html) | chemotherapy | [malignant tumor](condition-example-f202-malignancy.html) |            |                                             | [chemotherapy](procedure-example-f201-tpf.html) | [BUMC](organization-example-f203-bumc.html) |           |
| [A. Bronsig](practitioner-example-f201-ab.html) | 4-3-2013  | [20130404](encounter-example-f201-20130404.html) | fever        | [fever](condition-example-f201-fever.html)                |            |                                             |                                                 |                                             |           |
| [A. Bronsig](practitioner-example-f201-ab.html) | 11-3-2013 | [20130311](encounter-example-f203-20130311.html) | sepsis       | [Bacterial sepsis](condition-example-f203-sepsis.html)    |            | [AUMC](organization-example-f201-aumc.html) |                                                 |                                             |           |
| [A. Bronsig](practitioner-example-f201-ab.html) | 11-3-2013 | [20130311](encounter-example-f203-20130311.html) | renal        | [Renal insufficiency](condition-example-f204-renal.html)  |            | [AUMC](organization-example-f201-aumc.html) |                                                 |                                             |           |

Observations
practitioner
date
observation
value
status
SNOMED CT code
[Luigi Maas](practitioner-example-f202-lm.html)
11-3-2013
[Blood culture for bacteria](observation-example-f206-staphylococcus.html)
Gram-positive bacteria
positive
8745002
[A. Bronsig](practitioner-example-f201-ab.html)
4-4-2013
[temperature taken](observation-example-f202-temperature.html)
39 degrees Celsius1
high
89003005
[A. Bronsig](practitioner-example-f201-ab.html)
4-4-2013
[Serum bicarbonate measurement](observation-example-f203-bicarbonate.html)
28mmol/L
normal
271239003
[Luigi Maas](practitioner-example-f202-lm.html)
4-4-2013
[Serum creatinine raised](observation-example-f204-creatinine.html)
122 umol/L
high
166717003
[Luigi Maas](practitioner-example-f202-lm.html)
4-4-2013
[Epidermal Growth Factor Receptor](observation-example-f205-egfr.html)
Negative for EGF receptor expression (Non-small cell lung cancer)
negative
427038005

\[%file newfooter%\]
