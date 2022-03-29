const ActionHelper = require('./../helpers/actionHelpers');
require('chai').should();

class LoginPage{
    getObjectLocator(){
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/login.screen.js`);
    }

    launchApp(){
        ActionHelper.launchApp();
        ActionHelper.pause(2);
    }

    closeApp(){
        ActionHelper.closeApp();
    }

    login(username,password){
        ActionHelper.sendText(this.getObjectLocator().txtbxUserName,username);
        ActionHelper.sendText(this.getObjectLocator().txtbxPassword,password);
        ActionHelper.click(this.getObjectLocator().btnLogin);
    }

    verifyDisplay(locator){
        ActionHelper.isVisible(locator).should.equal(true);
    }

    // subCheckDisplayed(name) {
    //     this.verifyDisplay('//*[@text=\'' + name + '\']');
    // }

    async subCheckDisplayed(name) {
        await driver.pause(1000);
        let obj = await $('//*[@text=\'' + name + '\']');
        // eslint-disable-next-line no-undef
        await expect(obj).toBeDisplayed();
    }
}

module.exports= LoginPage;