const ActionHelper = require("./../helpers/actionHelpers");
require("chai").should();

class LoginPage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/login.screen.js`);
  }

  async launchApp() {
    await ActionHelper.launchApp();
    await ActionHelper.pause(6);
  }

  async closeApp() {
    await driver.pause(2000);
    await ActionHelper.closeApp();
  }

  async login(username, password) {
    await ActionHelper.sendText(
      this.getObjectLocator().txtbxUserName,
      username
    );
    await ActionHelper.sendText(
      this.getObjectLocator().txtbxPassword,
      password
    );
    await ActionHelper.click(this.getObjectLocator().btnLogin);
  }

  async verifyDisplay(locator) {
    await ActionHelper.isVisible(locator).should.equal(true);
  }

  // subCheckDisplayed(name) {
  //     this.verifyDisplay('//*[@text=\'' + name + '\']');
  // }

  async subCheckDisplayed(name) {
    await driver.pause(4000);
    let obj = await $("//*[@text='" + name + "']");
    // eslint-disable-next-line no-undef
    await expect(obj).toBeDisplayed();
  }
}

module.exports = LoginPage;
