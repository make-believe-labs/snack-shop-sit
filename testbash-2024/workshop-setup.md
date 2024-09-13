# TestBash 2024 Workshop Setup Guide

## Clone the the Snack Shop SIT

If you haven't already, clone the snack-shop git repository.

 In a terminal, run:

`git clone https://github.com/make-believe-labs/snack-shop-sit.git`

Then open the `snack-shop-sit` folder in VSCode, or your choice of IDE.

### Start the stack

The System under test is hosted at:

<https://lab.fullsnacktester.com/>

## Run System Integration Tests (SIT)

### Node Version Manager [Optional]

If you want an easier way to manage having multiple versions of node on your system, use NVM:

```bash
# On Linux or Mac

<https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating>

# Windows equivalent

<https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows#install-nvm-windows-nodejs-and-npm>
```

Then you can run `nvm install` to install the version of node that is in the .nvmrc file, currently v20.14.0.

If you already have another version of node installed, it will probably still work without this step.

### Install node modules for the SIT

Open a new terminal window and run, one at a time:

``` bash
npm ci
npm run
```

Expected output after `npm run`:

```bash
test:api
    jest
  test:ui
    playwright test --ui
  report
    playwright show-report
  update
    playwright install --with-deps
  record
    playwright codegen localhost:9090
```

You run these scripts using the keywords, for example:

`npm run update`

This should install the needed dependencies for running Playwright tests, such as the browsers. Run this first.

Nope, if installing playwright fails or takes too long, put your hand up and let me know. You might need to focus only on the API tests.

### Stackblitz

If you cant get things installed locally, you can run on Stackblitz, but this won't work with Playwright, only the API tests.

<https://stackblitz.com/~/github.com/make-believe-labs/snack-shop-sit>