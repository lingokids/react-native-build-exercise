# Lingokids React Native Build test

## Getting started

 Welcome to the take-home test for the Mobile Build Engineer position. First of all, thanks for taking your time doing this at all, we really appreciate it. 

 The goal of this exercise is for us to evaluate how well would you face a simple but real problem that a mobile build engineer could encounter. This is, we want to set up an automated build pipeline for a React Native app via Github Actions.

## Instructions

 Taking the provided app codebase contained in this repository, you'll need to write a [Github Actions](https://docs.github.com/en/actions) .yml file that properly generates a build of the app. You can find more info on Action Metadata files [here](https://docs.github.com/en/actions/creating-actions/creating-a-composite-run-steps-action#creating-an-action-metadata-file).
 
 As it is, the app displays a simple screen that indicates if it is running in debug (Mode: Development) or release mode (Mode: Production):

<img width=200 src="/res/instructions/dev.png"/> <img width=200 src="/res/instructions/prod.png"/>

From here, you should keep the following in mind:

- First of all, fork this repository on your own Github account and make it public. Then start working from there.
- In case you need to set up specific environment variables use Github Secrets to do so and don't worry, you don't need to share them with us.
- We are not going to run this pipeline ourselves, we will review it with you over the exercise review interview, so you will be able to show it and explain it.
- You should be able to set this up with a free Github account as long as the repository is public. Github Actions provides [their own runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners) so we advise you to use them.
- There is no time limit so take as much as you want, but we estimate that this should take you a few hours to get right.
- The deliverable for this exercise should be a link to that public fork, so we can check out what have you changed and more importantly, the .yml script that generates the final build.
- If you don't get it to work we still encourage you to deliver something. We can talk about what happened during the interview. Don't stress too much about it :)

## Requirements

- The yml script must generate a standalone iOS or Android build (whichever you prefer).
- The generated build must be a standalone build (js bundle NOT served by Metro).
- The generated build must be set to release configuration:

<img src="/res/instructions/release_mode.png"/>

## Optional requirements

If you have the time and/or want to go the extra mile you can do any improvement to the build script that you want, here are some ideas:

- Make it so that the script generates both versions of the app instead of just the one you originally chose.
- Make it so that the app has a different app icon depending on the type of build being generated (debug or release)
- Make it so that the app's text strings come from a separate .json file that gets bundled along with the release and that is different for debug and release builds.

## Legal notes

All the results obtained from this exercise will be used for recruitment purposes. The company is not authorised to use it, and you own the copyright of this code. Please, remember that this document and its information are confidential and won’t be reproduced or circulated.
