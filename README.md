# Jobsity Test

<p align="center">
  <a href="https://www.cypress.io/">
    <img src="https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg" alt="npm"/>
  </a>
  <a href="https://percy.io/cc02c788/Jobsity-test">
    <img src="https://percy.io/static/images/percy-badge.svg" alt="percy"/>
  </a>
</p>

## Installing Dependencies

You'll need to install all dependencies into the project and to do that you just will need to use one of this commands:

```bash
npm install
```
or
```bash
yarn install
```

This command will install all dependencies needed as:

 - [Cypress](https://github.com/cypress-io/cypress)
 - [Cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
 - [Percy-cypress](https://github.com/percy/percy-cypress)

***Note:*** At the moment when you installed Percy, it must downloaded the Chrome driver from BrowserStack, nevertheless if you don't see it or it cause any issue in runtime over the missing driver, you'll could use this command to solved it:

```
exports PERCY_POSTINSTALL_BROWSER=true
```

Now you could re-install the dependencies and the Chrome driver will be downloaded.

## Configurating Percy


You'll need to create a percy account [here](https://percy.io/login) in order to get a `PERCY_TOKEN`, but don't worries, you can get access to Percy's core features which include unlimited users and 5000 screenshots/month FREE.

When you already got your `PERCY_TOKEN`, you'll can successfully run Percy, the PERCY_TOKEN environment variable must be set:

```
# Windows
$ set PERCY_TOKEN=<your token here>

# Unix
$ export PERCY_TOKEN=<your token here>
```

When running with `npm run ppt` (Pixel-Perfect Test), and your project's `PERCY_TOKEN`, a new Percy build will be created and snapshots will be uploaded to your project.

```sh-session
$ export PERCY_TOKEN=[your-project-token]
$ npm run ppt
[percy] Percy has started!
[percy] Created build #1: https://percy.io/[your-project]
[percy] Running "cypress run"
...
[percy] Snapshot taken "My app should look good"
[percy] Snapshot taken "Clicked button"
...
[percy] Stopping percy...
[percy] Finalized build #1: https://percy.io/[your-project]
[percy] Done!
```

Amazing!, You'll have run the base line from the master branch and now you'll be able to see them on your Percy dashboard. After that you'll need make some changes and seeing the snapshots and visual diffs in Percy.

Super fun! You've already ran a picel-perfect test on Percy

## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).