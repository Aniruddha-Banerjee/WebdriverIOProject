const ActionHelper = require("./../helpers/actionHelpers");
require("chai").should();

class SettingsPage {
  getObjectLocator() {
    const platform = browser.capabilities.platformName.toLowerCase();
    return require(`./../screens/native/${platform}/settings.screen.js`);
  }

  async launchApp() {
    await ActionHelper.launchApp();
    await ActionHelper.switchToNativeContext();
    await ActionHelper.pause(2);
  }

  async verifyGeneralLabel() {
    await ActionHelper.getText(this.getObjectLocator().general).should.equal(
      "General"
    );
  }
}

module.exports = SettingsPage;
