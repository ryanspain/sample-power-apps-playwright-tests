# Power Apps Playwright tests sample

A basic example of writing UI tests for model-driven Power Apps using Playwright. This sample project performs 2 tests:

1. Opens a model-driven app and confirms the app name is present
2. Creates and new contact and checks that an ID is assigned

## Run locally

First install dependencies including Playwright browsers.

```cmd
npm run setup
```

Next, create a file named `local.powerapps.config.js` in the root directory with the below content, replacing parameters as needed.

```js
let config = {
    appUrl: 'YOUR_APP_URL',
    appName: 'YOUR_APP_NAME',
    signInUrl: 'https://portal.office.com/',
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
};

module.exports = config;
```

Finally, run the tests.

```cmd
npm run test-local
```

## Run on a build server

First install dependencies including Playwright browsers.

```cmd
npm run setup
```

Next, set the required environment variables using the command line. For example, using Command Prompt on Windows:

```cmd
set APP_URL = "YOUR_APP_URL"
set APP_NAME = "YOUR_APP_NAME"
set USERNAME = "YOUR_USERNAME"
set SIGN_IN_URL: 'https://portal.office.com/',
set PASSWORD = "YOUR_PASSWORD"
```

Finally, run tests.

```cmd
npm run test
```
