/* eslint-disable array-bracket-newline */
/* eslint-disable quotes */
/* eslint-disable indent */
// const { expect } = require('chai');

const { default: $ } = require("webdriverio/build/commands/browser/$");

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

  // eslint-disable-next-line no-unused-vars
  static async scrollToView(locator) {
    await this.pause(4);
    const mobilePage= await $('//android.webkit.WebView');
    await browser.swipeDown(mobilePage,1661, 100);



    // await browser.execute('mobile: scroll', {direction: 'down'})
    // await this.pause(2);
    // await browser.execute("mobile: scroll", {direction: 'down'})
    // await this.pause(2);
    // await browser.execute(function(elocator){
    //   // eslint-disable-next-line no-undef
    //   document.querySelector(elocator).scrollIntoView();
    // },locator)
    // let obj = await $(locator);
    // await obj.scrollIntoView();
  }

  static async isVisible(locator) {
    let obj = await $(locator);
    return await obj.isDisplayed() ? true : false;
  }

  static async click(locator) {
    let obj = await $(locator);
    await obj.click();
  }

  static async getLocation(locator){
    let obj = await $(locator);
    let loc = await obj.getLocation();
    console.log('loc->'+loc);
    console.log('x->'+await obj.getLocation('x'));
    console.log('y->'+await obj.getLocation('y'));
  }

  

  static async waitForElement(locator, waitTimeInSeconds) {
    await $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
  }

  static async clearText(locator) {
    await $(locator).clearValue();
  }

  static async sendText(locator, inputText) {
    let obj = await $(locator);
    await obj.addValue(inputText);
  }

  static async getText(locator) {
    return $(locator).getText();
  }

  static async setPin(pincode) {
    let arrPin = [...pincode];
    for (const digit of arrPin) {
      let arrPinDigit = await $("//android.widget.TextView[@text=" + digit + "]")
      await arrPinDigit.click();
      // this.pause(.5);
    }
    await this.pause(2);
  }
}

module.exports = ActionHelper;
