# screen-recording

This is a required library for screen recording. It provides a component that requests user permission for screen capture and starts it until the end of the study. When `recordWebcam` is also enabled, the component starts webcam capture and shows a webcam preview. For webcam-only studies, use the `webcam-recording` library and its `webcamRecordingPermission` component.

## Available Components

- screenRecordingPermission

The `screenRecordingPermission` component is required before any screen recording begins. It also handles webcam permission for combined screen and webcam studies, and includes a microphone check when audio recording is enabled.

## Available Sequences

None

<!-- Importing Links -->
import StructuredLinks from '@site/src/components/StructuredLinks/StructuredLinks.tsx';

  <StructuredLinks
      demoLinks={[
        {name: "screen-recording Demo", url: "https://revisit.dev/study/library-screen-recording"}
      ]}
      codeLinks={[
        {name: "screen-recording Demo Code", url: "https://github.com/revisit-studies/study/tree/main/public/library-screen-recording"},
        {name: "screen-recording Library Code", url: "https://github.com/revisit-studies/study/tree/main/public/libraries/screen-recording"}
      ]}
      
  />
