const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Reusable extends Page {
  /**
   * define selectors using getter methods
   */
  
  // Reusable Methods
  async subCheckDisplayed(name){
    await driver.pause(1000);
    await expect("//*[@text='"+name+"']").toBeDisplayed();
  }
}

module.exports = new Reusable();
