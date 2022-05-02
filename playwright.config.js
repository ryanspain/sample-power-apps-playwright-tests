/** @type {import('@playwright/test').PlaywrightTestConfig} */
/** */
const config = {
  use: {
    headless: false,
    screenshot: 'on',
    video: 'on'
  },
};

module.exports = config;