---
layout: page_toc
title: Documentation | reVISit
weight: 2
tag: documentation
permalink: /documentation/
---

# Documentation

{% capture path %}{{ site.baseurl }}/assets/images/{% endcapture %}

| [Controllers](#iframe-controller) |
| ---------------------- | --------------------- | --------------------------- | 
| [iframe Controller](#iframe-controller)        | [Image Controller](#image-controller)       | [React Controller](#react-controller) | 
| [Stimulus Controller](#stimulus-controller)    | [Survey Controller](#survey-controller)     | [Trial Controller](#trial-controller) | 
| [Utils Controller](#utils-controller)|


| [Interface Components](#side-bar) |
| ---------------------- | --------------------- | --------------------------- | 
| [Side Bar](#side-bar)        | [Header](#header)       | [Navigation Bar](#navigation-bar) | 
| [Help Modal](#help-modal)    | [Steps Panel](#steps-panel) |


| [Response Components](#check-box) |
| ---------------------- | --------------------- | --------------------------- | 
| [Check Box](#check-box)        | [Drop Down Input](#drop-down-input)       | [iFrame Input](#iframe-input) | 
| [Likert Input](#likert-input)    | [Numeric Input](#numeric-input)     | [Radio Input](#radio-input) | 
| [Response Block](#response-block)    | [Response Switcher](#response-switcher)     | [Slider Input](#slider-input) | 
| [String Input](#string-input)    | [Text Area Input](#text-area-input)     | [Utils](#utils) | 


| [Stimuli Components](#config-switcher) |
| ---------------------- | --------------------- | --------------------------- | 
| [Config Switcher](#config-switcher)    | [Consent](#consent) | [Next Button](#next-button) | 
| [Shell](#shell)    | [Status](#status) | [Study End](#study-end) | 
| **Chart Components** | 
| [Bars](#bars)        | [Bubbles](#bubbles)       | [Dot Marks](#dot-marks) | 
| [Numerical Axis H](#numerical-axis-h)    | [Numerical Axis V](#numerical-axis-v) | [Ordinal Axis](#ordinal-axis) | 
| [Slices](#slices)    | [Slices Dot Marks](#slices-dot-marks) | [Stacked Bars](#stacked-bars) | 
| **Hooks**| 
| [Chart Dimensions](#chart-dimensions) | [Hover Interaction](#hover-interactions) |
| **Input Components** | 
| [Utils](#input-components-utils) |


| [Parser](#parser) |
| ---------------------- | --------------------- | 
| [Parser](#parser)        | [Types](#parser-types)       | 

| [Routes](#routes-index) |
| ---------------------- |
| [Index](#routes-index)        | 

| [Store](#store-index) |
| ---------------------- | --------------------- | --------------------------- |
| [Index](#store-index)    | [Flags](#store-flags)     | [Trial Provenance](#trial-provenance) | 
| [Types](#store-types)    | 
| **Hooks** |
| [Completed Trial Metrics](#completed-trials-metrics)        | [Current Trial](#current-trials)       | [Identifiers](#identifiers) | 
| [Next Step](#next-step)    | [Study Config](#study-config)     | [Survey](#survey) | 
| [Trial Status](#trial-status) 


| [Utils](#utils)                                                                  |
| ---------------------- | --------------------- | --------------------------- | 
| [Deep Copy](#deep-copy)        | [Study Identifiers](#study-identifiers)       | [Navigate With Parameters](#navigate-with-parameters) | 
| [Sanitize String](#sanitize-string)    | [Use Navigation With Parameters](#use-navigate-with-parameters)|


| [Firebase](#firebase-init) |                                                                 
| ---------------------- | --------------------- |  
| [Firebase Init](#firebase-init)    | [Firebase Queries](#firebase-queries)  |

## Iframe Controller

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| None                   |

**Exports** iFrameController <br/>
**Defined in** [src/controllers/iframeController.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/controllers/IframeController.tsx)

## Image Controller

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for image to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| None                   |

**Exports** ImageController <br/>
**Defined in** [src/controller/ImageController.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/controllers/ImageController.tsx).

## React Controller

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| stimulusID             | string                |                       |                       |
| stimulus               | Stimulus              |                       |                       | 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| None                   |

**Exports** ReactComponetController
**Defined in** [src/controller/ReactController.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/controllers/ReactController.tsx).

## Stimulus Controller

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| trialId                | string                |                       |                       |
| stimulus               | Trial                 |                       |                       | 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| None                   |

**Exports** Stimulus Controller
Defined in [src/controller/StimulusController.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/controllers/StimulusController.tsx).

## Survey Controller

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| None

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| None                   |

**Exports** SurveryController
**Defined in** [src/controller/SurveyController.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/controllers/SurveyController.tsx).

## Trial Controller

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| None                   |

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| None                   |

**Exports** TrialPracticeController
**Defined in** [src/controller/TrialPracticeController.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/controllers/TrialPracticeController.tsx).

## Utils Controller

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| None                   |

| Methods                |
| ---------------------- | --------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Parameters            | Descritpion           |
| usePracticeConfig      | PracticeComponent     |                       |                       |
| useTrialsConfig        | TrialsComponent       |                       |                       | 
| useSurveyConfig        | SurveryComponent      |                       |                       |
| useNextTrialId         | nextTrialId: number\|null | currentTrial: string\|null, type: StudyComponent|                |

**Exports** usePracticeConfig, useTrialsConfig, useSurveyConfig, useNextTrialId <br/>
**Defined in** [src/controller/utils.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/controllers/utils.tsx).


## Side Bar

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| None                   |

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| None                   |

**Exports** AppAside <br/>
**Defined in** [src/components/interface/AppAside.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/interface/AppAside.tsx).

## Header

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| None                   |

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| None                   |

**Exports** AppHeader <br/>
**Defined in** [src/components/interface/AppHeader.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/interface/AppHeader.tsx).

## Navigation Bar

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| None                   |

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| None                   |

**Exports** AppNavBar <br/>
**Defined in** [src/components/interface/AppNavBar.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/interface/AppNavBar.tsx).

## Help Modal

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| None                   |
 
| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| None                   |

**Exports** HelpModal <br/>
**Defined in** [src/components/interface/HelpModal.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/interface/HelpModal.tsx).

## Steps Panel

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| None                   |

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| None                   |

**Exports** StepsPanel <br/>
**Defined in** [src/components/interface/StepsPanel.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/interface/StepsPanel.tsx).


## Check Box

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/components/response/CheckBoxInput.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/CheckBoxInput.tsx).

## Drop Down Input

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/response/DropdownInput.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/DropdownInput.tsx).

## iFrame Input

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/components/response/IframeInput.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/IframeInput.tsx).

## Likert Input

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/response/LikertInput.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/LikertInput.tsx).

## Numeric Input 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/response/NumericInput.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/NumericInput.tsx).

## Radio Input 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/response/RadioInput.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/RadioInput.tsx).

## Response Block

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/response/ResponseBlock.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/ResponseBlock.tsx).

## Response Switcher

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/response/ResponseSwitcher.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/ResponseSwitcher.tsx).

## Slider Input

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/response/SliderInput.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/SliderInput.tsx).

## String Input 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/response/StringInput.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/StringInput.tsx).

## Text Area Input

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/response/TextAreaInput.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/TextAreaInput.tsx).

## Utils 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/response/utils.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/response/utils.tsx).

## Config Switcher

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/ConfigSwitcher.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/ConfigSwitcher.tsx).

## Consent

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/Consent.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/Consent.tsx).

## Next Button

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/NextButton.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/NextButton.tsx).

## Shell

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/Shell.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/Shell.tsx).

## Status

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/Status.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/Status.tsx).

## Study End

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/StudyEnd.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/StudyEnd.tsx).

## Bars

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/chartcomponents/Bars.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/chartcomponents/Bars.tsx).

## Bubbles

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/chartcomponents/Bubbles.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/chartcomponents/Bubbles.tsx).

## Dot Marks

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/chartcomponents/DotMarks.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/chartcomponents/DotMarks.tsx).

## Numerical Axis H

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/chartcomponents/NumericAxisH.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/chartcomponents/NumericAxisH.tsx).

## Numerical Axis V

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/chartcomponents/NumericAxisV.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/chartcomponents/NumericAxisV.tsx).


## Ordinal Axis

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/chartcomponents/OrdinalAxisHWithDotMarks.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/chartcomponents/OrdinalAxisHWithDotMarks.tsx).

## Slices

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/chartcomponents/Slices.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/chartcomponents/Slices.tsx).

## Slices Dot Marks 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/chartcomponents/SlicesDotMarks.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/chartcomponents/SlicesDotMarks.tsx).

## Stacked Bars

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/chartcomponents/StackedBars.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/chartcomponents/StackedBars.tsx).

## Chart Dimensions

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/hooks/useChartDimensions.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/hooks/useChartDimensions.tsx).


## Hover Interactions

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/hooks/useHoverInteraction.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/hooks/useHoverInteraction.tsx).

## Input Components Utils

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/components/stimuli/inputcomponents/utils.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/components/stimuli/inputcomponents/utils.ts).


## Parser

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/parser/parser.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/parser/parser.ts).

## Parser Types

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/parser/types.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/parser/types.ts).

## Routes Index

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/routes/index.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/routes/index.tsx).

## Store Index

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |


Defined in [src/store/index.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/store/index.ts).

## Store Flags 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/store/flags.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/store/flags.ts).

## Trial Provenance 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/store/trialProvenance.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/store/trialProvenance.ts).

## Store Types

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/store/types.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/store/types.ts).

## Completed Trials Metrics

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/store/hooks/useCompletedTrialMetric.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/store/hooks/useCompletedTrialMetric.ts).

## Current Trials

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/store/hooks/useCurrentTrial.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/store/hooks/useCurrentTrial.ts).


## Identifiers 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/store/hooks/useIdentifiers.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/store/hooks/useIdentifiers.ts).


## Next Step 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/store/hooks/useNextStep.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/store/hooks/useNextStep.ts).


## Study Config 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/store/hooks/useStudyConfig.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/store/hooks/useStudyConfig.ts).

## Survey

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/store/hooks/useSurvey.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/store/hooks/useSurvey.ts).

## Trial Status

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/store/hooks/useTrialStatus.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/store/hooks/useTrialStatus.ts).


## Deep Copy 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/utils/deepCopy.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/utils/deepCopy.ts).

## Study Identifiers 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/utils/getOrSetStudyIdentifiers.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/utils/getOrSetStudyIdentifiers.ts).

## Navigate With Parameters

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/utils/NavigateWithParams.tsx](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/utils/NavigateWithParams.tsx).


## Use Navigate With Parameters

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/utils/useNavigateWithParams.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/utils/useNavigateWithParams.ts).

## Sanitize String 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/utils/sanitizeStringForUrl.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/utils/sanitizeStringForUrl.ts).

## Firebase Init

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/firebase/init.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/firebase/init.ts).

## Firebase Queries 

| Props                  | 
| ---------------------- | --------------------- | --------------------- | --------------------- |
| Prop Name              | Type                  | Default               | Description           |
| path                   | string                |                       | Specifies URL for iFrame to load|
| style                  | object                |                       | Specifies CSS style properties for iFrame| 

| Methods                |
| ---------------------- | --------------------- | --------------------- | 
| Name                   | Return Type           | Descritpion           |

Defined in [src/firebase/queries.ts](https://github.com/revisit-studies/revisit-study-frontend/blob/main/src/firebase/queries.ts).

