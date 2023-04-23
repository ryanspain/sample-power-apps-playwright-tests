import { test, expect } from '@playwright/test';
import config from '../powerapps.config';

test.beforeEach(async ({ page }) => {
    // Open the sign in URL
    await page.goto(config.signInUrl);

    // Complete sign in flow
    await page.fill('input[name="loginfmt"]', config.username);
    await page.click('input[value=Next]');

    await page.fill('input[name="passwd"]', config.password);
    await page.click('input[value="Sign in"]');
    await page.waitForNavigation();
});
    
test('open app', async ({ page }) => {
    // Open the app
    await page.goto(config.appUrl);
    await page.waitForNavigation();

    // Look for the app name
    await expect(page.locator(`text=${config.appName}`).first()).toBeVisible();
});

test('create a contact', async ({ page }) => {
    // Open the contacts area from the sitemap
    await page.goto(config.appUrl);
    await page.waitForNavigation(),
    await page.click('text=Contacts');
    await page.waitForNavigation(),
    
    // Click on the New button in the command bar
    await page.click('[aria-label="New"]')
    await page.waitForNavigation(),

    // Complete some details on the contact form
    await page.fill('[aria-label="First Name"]', 'Test');
    await page.fill('[aria-label="Last Name"]', `Contact (${Date.now()})`);

    // set a lookup value
    const lookupFieldLabel = 'Account Name';
    const lookupFieldTextValue = 'Northwind traders';
    const clientLookup = page.locator(`[aria-label="${lookupFieldLabel}, Lookup"]`);

    await clientLookup.hover();
    await clientLookup.click();
    await clientLookup.fill('');
    await clientLookup.type(lookupFieldTextValue);

    await page.click('[aria-label="Lookup results"]>li');

    // Click on the Save button in the command bar
    await page.click('[aria-label="Save (CTRL+S)"]');
    await page.waitForNavigation();
    
    // Check if the next form contains the contacts ID
    await page.waitForFunction('Xrm.Utility.getPageContext().input.entityId !== null');
});