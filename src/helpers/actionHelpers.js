// const { expect } = require('chai');

class ActionHelper {

    static launchBrowserUrl(urlToLaunch) {
        browser.url(urlToLaunch)
    }

    static getTitle() {
        return browser.getTitle();
    }

    static launchApp() {
        driver.launchApp();
    }

    static closeApp() {
        driver.closeApp();
    }

    static back() {
        browser.pressKeyCode(4);
    }

    static switchToNativeContext() {
        browser.switchContext('NATIVE_APP');
    }

    static pause(seconds) {
        browser.pause(seconds * 1000);
    }

    static isVisible(locator) {
        return $(locator).isDisplayed() ? true : false;
    }

    static click(locator) {
        $(locator).click();
    }

    static waitForElement(locator, waitTimeInSeconds) {
        $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
    }

    static clearText(locator) {
        $(locator).clearValue();
    }

    static sendText(locator, inputText) {
        $(locator).addValue(inputText);
    }

    static getText(locator) {
        return $(locator).getText();
    }

    static setPin(pincode) {
        let arrPin = [
            ...pincode
        ];
        for (const digit of arrPin) {
            $('//android.widget.TextView[@text=' + digit + ']').click();
            // this.pause(.5);
        }
        this.pause(2);
    }
}

module.exports = ActionHelper;
