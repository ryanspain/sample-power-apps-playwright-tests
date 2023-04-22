import { test as setup } from '@playwright/test';
import config from '../../powerapps.config';

// Multiple signed in roles: https://playwright.dev/docs/auth#multiple-signed-in-roles
// todo: Testing multiple roles together: https://playwright.dev/docs/auth#testing-multiple-roles-together

setup('sign in as test user 1', async ({ page }) => {

  const { 
    tenant,
    app,
    users: { "Test user 1" : user }, 
  } = config;

  // Open the sign in URL
  await page.goto(tenant.signInUrl);

  // Complete sign in flow
  await page.fill('input[name="loginfmt"]', user.email);
  await page.click('input[value=Next]');

  await page.fill('input[name="passwd"]', user.password);
  await page.click('input[value="Sign in"]');

  // Wait for successful sign in
  await page.waitForURL;
  await page.waitForURL(url => url.href.includes(tenant.signedInUrl));

  // Save the authentication state
  await page.context().storageState({ path: user.storageStatePath });
});

setup('sign in as test user 2', async ({ page }) => {

  const { 
    tenant,
    app,
    users: { "Test user 2" : user },
  } = config;

  // Open the sign in URL
  await page.goto(tenant.signInUrl);

  // Complete sign in flow
  await page.fill('input[name="loginfmt"]', user.email);
  await page.click('input[value=Next]');

  await page.fill('input[name="passwd"]', user.password);
  await page.click('input[value="Sign in"]');

  // Wait for successful sign in
  await page.waitForURL(url => url.href.includes(tenant.signedInUrl));

  // Save the authentication state
  await page.context().storageState({ path: user.storageStatePath });
});