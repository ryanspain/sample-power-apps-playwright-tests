let config = {
    appUrl: process.env.APP_URL,
    appName: process.env.APP_NAME,
    signInUrl: process.env.SIGN_IN_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD
};

if(process.env.TEST_MODE === 'local')
    config = require('./local.powerapps.config');

module.exports = config;