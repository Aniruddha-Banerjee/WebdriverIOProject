const {config} = require('./wdio.conf');
const AndroidInfo = require('./android.info');
const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        noReset: false,
        fullReset: true,
        maxInstances: 1,
        automationName: 'uiautomator1',
        deviceName: AndroidInfo.deviceName(),
        platformVersion: AndroidInfo.platFormVersion(),
        app: path.resolve(`./apps/${AndroidInfo.appName()}`)
    }
];

config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;
