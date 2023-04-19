# Power Apps Playwright tests sample

A basic example of writing UI tests for model-driven Power Apps using Playwright. This sample project performs 2 tests:

1. Opens a model-driven app and confirms the app name is present
2. Creates and new contact and checks that an ID is assigned

## Run the tests

1. First install dependencies including Playwright browsers.

    ```bash
    npm run setup
    ```

2. Next, set the required environment variables on the system that will be running the tests, e.g. your local machine or the continuous integration server.

    | Key           | Value                      |
    | ------------- | -------------------------- |
    | APP_URL       | _Your app URL_             |
    | APP_NAME      | _Your app name_            |
    | SIGN_IN_URL   | https://portal.office.com/ |
    | USER_EMAIL    | _Your test users email_    |
    | USER_PASSWORD | _Your test users password_ |

3. Finally, run tests.

    ```bash
    npm run test
    ```
