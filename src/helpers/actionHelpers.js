// const { expect } = require('chai');

class ActionHelper {
  static async launchBrowserUrl(urlToLaunch) {
    await browser.url(urlToLaunch);
  }

  static async getTitle() {
    return await browser.getTitle();
  }

  static async launchApp() {
    await driver.launchApp();
  }

  static async closeApp() {
    await driver.closeApp();
  }

  static async back() {
    await browser.pressKeyCode(4);
  }

  static async switchToNativeContext() {
    await browser.switchContext("NATIVE_APP");
  }

  static async pause(seconds) {
    await browser.pause(seconds * 1000);
  }

  static async isVisible(locator) {
    return $(locator).isDisplayed() ? true : false;
  }

  static async click(locator) {
    await $(locator).click();
  }

  static async waitForElement(locator, waitTimeInSeconds) {
    await $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
  }

  static async clearText(locator) {
    await $(locator).clearValue();
  }

  static async sendText(locator, inputText) {
    await $(locator).addValue(inputText);
  }

  static async getText(locator) {
    return $(locator).getText();
  }

  static async setPin(pincode) {
    let arrPin = [...pincode];
    for (const digit of arrPin) {
      await $("//android.widget.TextView[@text=" + digit + "]").click();
      // this.pause(.5);
    }
    await this.pause(2);
  }
}

module.exports = ActionHelper;
