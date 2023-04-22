import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    // headless: false,
    screenshot: 'on',
    video: 'on'
  },
  timeout: 15000,
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.[js|ts]/g
    },
    {
      name: 'Google Chrome',
      use: {
        // Full list: https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/deviceDescriptorsSource.json
        ...devices['Desktop Chrome']
      },
      dependencies: ['setup'],
    }
  ],
});