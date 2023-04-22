import { test, expect } from '@playwright/test';
import config from '../../powerapps.config';

test.describe('As test user 1', () => {

    // Get user and app config
    const {
        app,
        users: { "Test user 1": user },
    } = config;

    // Load the user's profile (Existing cookies, etc.)
    test.use({ storageState: user.storageStatePath });

    test('open app as test user 1', async ({ page }) => {

        // Open the app
        await page.goto(app.url);
        await page.waitForURL(app.url);

        // Look for the app name
        await expect(page.getByText(app.displayName)).toBeVisible();
    });
});

test.describe('As test user 2', () => {

    // Get user and app config
    const {
        app,
        users: { "Test user 2": user }
    } = config;

    // Load the user's profile (Existing cookies, etc.)
    test.use({ storageState: user.storageStatePath });

    test('open app as test user 2', async ({ page }) => {

        // Open the app
        await page.goto(app.url);
        await page.waitForURL(app.url);

        // Look for the app name
        await expect(page.getByText(app.displayName)).toBeVisible();
    });
});