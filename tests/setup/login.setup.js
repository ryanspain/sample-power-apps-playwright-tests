// auth.setup.ts
import { test as setup } from '@playwright/test';
import config from '../../powerapps.config'

const testUser1AuthFile = './playwright/.auth/user1.json';

setup('sign in as test user 1', async ({ page }) => {

  // Open the sign in URL
  await page.goto(config.signInUrl);

  // Complete sign in flow
  await page.fill('input[name="loginfmt"]', config.username);
  await page.click('input[value=Next]');

  await page.fill('input[name="passwd"]', config.password);
  await page.click('input[value="Sign in"]');

  // Wait for successful sign in
  await page.waitForURL("https://www.microsoft365.com/**");

  // Save the authentication state
  await page.context().storageState({ path: testUser1AuthFile });
});

const testUser2AuthFile = './playwright/.auth/user2.json';

setup('sign in as test user 2', async ({ page }) => {

  // Open the sign in URL
  await page.goto(config.signInUrl);

  // Complete sign in flow
  await page.fill('input[name="loginfmt"]', config.username);
  await page.click('input[value=Next]');

  await page.fill('input[name="passwd"]', config.password);
  await page.click('input[value="Sign in"]');

  // Wait for successful sign in
  await page.waitForURL("https://www.microsoft365.com/**");

  // Save the authentication state
  await page.context().storageState({ path: testUser2AuthFile });
});