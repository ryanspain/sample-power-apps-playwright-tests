const { test, expect } = require('@playwright/test');
const config = require('../powerapps.config')

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

    // Click on the Save button in the command bar
    await page.click('[aria-label="Save (CTRL+S)"]')
    await page.waitForNavigation(),
    
    // Check if the next form contains the contacts ID
    await page.waitForFunction('Xrm.Utility.getPageContext().input.entityId !== null');
});