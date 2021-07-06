# Lingokids React Native Build test

## Getting started

 Welcome to the take-home test for the Mobile Build Engineer position. First of all, thanks for taking your time doing this at all, we really appreciate it.

## Instructions

 Taking the provided app codebase contained in this repository, you'll need to write a Github Actions .yml file that properly generates a build of the app.

There is no time limit so take as much as you want, but we estimate that this should take you at most around a few hours to get right.

## Requirements

- The yml script must generate a standalone iOS or Android build (whichever you prefer).
- The generated build must be a standalone build (js bundle NOT served by Metro).
- The generated build must be set to release configuration:

<img src="/res/instructions/release_mode.png">

## Optional requirements

- Make it so that the script generates both versions of the app instead of just the one you originally chose.
- Make it so that the app has a different app icon depending on the type of build being generated (debug or release)