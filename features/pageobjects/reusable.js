const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Reusable extends Page {
  /**
   * define selectors using getter methods
   */

  // Reusable Methods
  async subCheckDisplayed(name) {
    await driver.pause(1000);
    let obj = await $("//*[@text='" + name + "']");
    await expect(obj).toBeDisplayed();
  }

  async setPin(pincode) {
    let arrPin = await [...pincode];
    for (const digit of arrPin) {
      let button = await $("//android.widget.TextView[@text='" + digit + "']");
      button.click();
      await driver.pause(1000);
    }
  }
}

module.exports = new Reusable();
