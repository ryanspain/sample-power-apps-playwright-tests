/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: false,
    screenshot: 'on',
    video: 'on'
  },
  timeout: 10000
};

module.exports = config;