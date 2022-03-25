const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");
const Reusable = require("../pageobjects/reusable");
const { ANDROID_CONFIG } = require("@wdio/cli/build/constants");
const reusable = require("../pageobjects/reusable");

const pages = {
  login: LoginPage,
};

Given(/^I am on the login page$/, async () => {
  await expect(LoginPage.inputUsername).toBeDisplayed();
});

Given(/^I inserts username (\w+)$/, async (username) => {
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
  await reusable.setPin(pincode);
  await driver.pause(5000);
  await reusable.setPin(pincode);
});

Then(/^I am on the (\w+) page$/, async (page) => {
  switch (page) {
    case "Login":
      await Reusable.subCheckDisplayed("Brugernavn");
      break;
    case "Header":
      await Reusable.subCheckDisplayed("HomeScreen");
      break;
  }
});

When("I tap on the link {string}", async (LinkName) => {
  await driver.pause(2000);
  let obj = await $("//android.widget.TextView[@text='" + LinkName + "']");
  await obj.click();
  await driver.pause(4000);
});

Then(/^I switch back to the app$/, async () => {
  await browser.pressKeyCode(4);
  await driver.pause(8000);
});

Then(/^Close the App$/, async () => {
  await browser.closeApp();
});

Then(/^I open the App$/, async () => {
  await browser.launchApp();
});

Then(/^I am on the create pin code screen$/, async () => {
  await reusable.subCheckDisplayed("Opret pinkode");
});

Given(
  /^I am on the Login page and able to put values in Username field$/,
  async () => {
    await LoginPage.inputUsername.setValue("Tester");
  }
);

When(/^I inserts 4 digits pin (\w+)$/, async (pincode) => {
  await reusable.setPin(pincode);
});

When(/^inserts the same 4 digits pin (\w+) again$/, async (pincode) => {
  await reusable.setPin(pincode);
});

Then(
  "An Error massage is shown where the text says {string}",
  async (errorText) => {
    await reusable.subCheckDisplayed(errorText);
    // let errorMsg = await $("//android.widget.TextView[@text='"+errorText+"']");
    // await expect(errorMsg).toBeDisplayed();
  }
);

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
