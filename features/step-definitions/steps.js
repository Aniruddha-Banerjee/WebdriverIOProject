const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const Reusable  = require("../pageobjects/reusable");

const pages = {
    login: LoginPage
}

Given(/^I am on the login page$/, async () => {
    await expect(LoginPage.inputUsername).toBeDisplayed();
  });
  
  Given(/^I inserts username (\w+)$/, async (username) => {
    // allureReporter.addFeature("Feature");
    await LoginPage.inputUsername.setValue(username);
  });
  
  Then(/^I inserts password (\w+)$/, async (password) => {
    await LoginPage.inputPassword.setValue(password);
  });
  
  When(/^I tap on the (\w+) button$/, async (buttonName) => {
    await LoginPage.btnLogin.click();
    await driver.pause(4000);
    await LoginPage.btnLogin.click();
  });
  
  When(/^Set pin code (\w+) if asked$/, async (pincode) => {
    let arrPin = await [...pincode];
    for (const digit of arrPin) {
      let button = await $("//android.widget.TextView[@text='" + digit + "']");
      button.click();
      await driver.pause(1000);
    }
    await driver.pause(5000);
    for (const digit of arrPin) {
      await $("//android.widget.TextView[@text='" + digit + "']").click();
      await driver.pause(1000);
    }
  });
  
  Then(/^I am on the (\w+) page$/, async (page) => {
    switch (page) {
      case "Login":
        Reusable.subCheckDisplayed("Brugernavn");
        break;
      case "Header":
        Reusable.subCheckDisplayed("HomeScreen");
        break;
    }
  });

  When('I tap on the link {string}', async (LinkName) => {
    await driver.pause(2000);
    let obj = await $("//android.widget.TextView[@text='"+LinkName+"']");
    await obj.click();
    await driver.pause(2000);
  });
  
  Then(/^I switch back to the app$/, async () => {
    await browser.back();
  });

  Given(/^I am on the Login page$/, async () => {
    await expect(LoginPage.inputUsername).toBeDisplayed();
  });

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

