/* eslint-disable quotes */
/* eslint-disable indent */
const { Given, Then } = require("@cucumber/cucumber");

const SettingsPage = require("./../pages/settings.page");

const settingsPage = new SettingsPage();

Given(/^I launch the settings app of iphone$/, async () => {
  await settingsPage.launchApp();
});

Then(/^I should see the general label$/, async () => {
  await settingsPage.verifyGeneralLabel();
});
