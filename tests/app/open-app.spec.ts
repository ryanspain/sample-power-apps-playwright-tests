import { test, expect } from '@playwright/test';
import config from '../../powerapps.config';

test.describe('Multiple signed in roles', () => {

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
});

test.describe('Testing multiple roles together', () => {
    
    // Get user contexts
    const {
        app,
        users: { 
            "Test user 1": user1, 
            "Test user 2": user2 
        }
    } = config;

    test('As test user 1 and 2', async ({ browser }) => {
        
        // User 1 context and page
        const user1Context = await browser.newContext({ storageState: user1.storageStatePath });
        const user1Page = await user1Context.newPage();
      
        // User 2 context and page
        const user2Context = await browser.newContext({ storageState: user2.storageStatePath });
        const user2Page = await user2Context.newPage();
      
        // Do stuff as user 1
        await user1Page.goto(app.url);
        await user1Page.waitForURL(app.url);
        
        // Do stuff as user 2
        await user2Page.goto(app.url);
        await user2Page.waitForURL(app.url);
        await expect(user2Page.getByText(app.displayName).first()).toBeVisible();
        
        // Do stuff as user 1
        await expect(user1Page.getByText(app.displayName).first()).toBeVisible();

        await user1Context.close();
        await user2Context.close();
    });
});

