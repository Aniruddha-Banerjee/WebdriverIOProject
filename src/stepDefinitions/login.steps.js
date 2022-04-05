const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('./../pages/login.page');
const ActionHelper = require('./../helpers/actionHelpers');
const LoginScreen = require('./../screens/native/android/login.screen');
// const HomeScreen = require('./../screens/native/android/home.screen')

const loginpage = new LoginPage();

Given(/^I open the App$/, async () => {
    await loginpage.launchApp();
});

Then(/^I close the App$/, async () => {
    await loginpage.closeApp();
});

Then(/^I click back$/, async () => {
    await ActionHelper.back();
    await ActionHelper.pause(3);
});


When(/^I tap on the (\w+) button$/, (buttonName) => {
    switch(buttonName.toLowerCase()){
    case 'login': ActionHelper.click(LoginScreen.btnLogin); 
        ActionHelper.pause(2);
        if(ActionHelper.isVisible(LoginScreen.btnLogin)==true){
            ActionHelper.click(LoginScreen.btnLogin);
            ActionHelper.pause(2);
        }
        break;
    }    
});

Then(/^I inserts username (\w+)$/, async (username) => {
    await ActionHelper.sendText(LoginScreen.txtbxUserName, username);
});
Then(/^I inserts password (\w+)$/, async (password) => {
    await ActionHelper.sendText(LoginScreen.txtbxPassword, password);
});

Then(/^I am on the (\w+) page$/, async (pageName) => {
    switch (pageName.toLowerCase()) {
    case 'overview':
        await loginpage.subCheckDisplayed('Overblik');
        break;
    case 'login':
        await loginpage.subCheckDisplayed('Brugernavn');
        break;
    }
});

Then(/^Set pin code (\w+) if asked$/, async (pinCode) => {
    await ActionHelper.setPin(pinCode);
    await ActionHelper.setPin(pinCode);
});

When('I tap on the link {string}', async (LinkName) => {
    switch (LinkName) {
    case 'Create YouSee Music Login for Extra Login':
        await ActionHelper.click(LoginScreen.linkNewMusicLoginExtraSubscription);
        break;
    case 'Limited Access Login using sms code':
        await ActionHelper.click(LoginScreen.linkLoginLimitedAccess);
        break;
    default:
        await ActionHelper.click('//*[@text=\'' + LinkName + '\']');
        break;
    }
    await ActionHelper.pause(3);
});

Then('I am on the page label {string}', async (LabelName) => {
    await loginpage.subCheckDisplayed(LabelName);
});

Then(
    'An Error massage is shown where the text says {string}',
    async (errorText) => {
        await loginpage.subCheckDisplayed(errorText);
    }
);

Then(/^I am on the create pin code screen$/, async () => {
    await loginpage.subCheckDisplayed('Opret pinkode');
});

When(/^I inserts 4 digits pin (\w+)$/, async (pincode) => {
    await ActionHelper.setPin(pincode);
});

When(/^inserts the same 4 digits pin (\w+) again$/, async (pincode) => {
    await ActionHelper.setPin(pincode);
});

Then('Test {string}', async (sampleText) => {
    let TextXpath = '//*[@text=\'' + sampleText + '\']';
    // eslint-disable-next-line no-console
    console.log(TextXpath);
    // eslint-disable-next-line no-console
    console.log(await ActionHelper.isVisible(TextXpath));
});
