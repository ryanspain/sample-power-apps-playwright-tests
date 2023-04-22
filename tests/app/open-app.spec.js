import { test, expect } from '@playwright/test';
import config from '../../powerapps.config';

test.use({ storageState: 'playwright/.auth/user1.json' });

test('open app as test user 1', async ({ page }) => {
    // Open the app
    await page.goto(config.appUrl);
    await page.waitForNavigation();
    
    // Look for the app name
    await expect(page.locator(`text=${config.appName}`).first()).toBeVisible();
});

test.use({ storageState: 'playwright/.auth/user2.json' });

test('open app as test user 2', async ({ page }) => {
    // Open the app
    await page.goto(config.appUrl);
    await page.waitForNavigation();

    // Look for the app name
    await expect(page.locator(`text=${config.appName}`).first()).toBeVisible();
});