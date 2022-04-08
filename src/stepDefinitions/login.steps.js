/* eslint-disable max-len */
const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('./../pages/login.page');
const ActionHelper = require('./../helpers/actionHelpers');
const LoginScreen = require('./../screens/native/android/login.screen');
const HomeScreen = require('./../screens/native/android/home.screen');
const SettingsScreen = require('./../screens/native/android/setting.screen');
const ForbrugScreen = require('./../screens/native/android/forbrug.screen');
const d = new Date();

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

Then(/^I click back (\w+) times$/, async (num) => {
    for(var i=1;i<=num;i++){
        await ActionHelper.back();
        await ActionHelper.pause(1);
    }    
});

Then(/^I inserts username (\w+)$/, async (username) => {
    await ActionHelper.sendText(LoginScreen.txtbxUserName, username);
});
Then(/^I inserts password (\w+)$/, async (password) => {
    await ActionHelper.sendText(LoginScreen.txtbxPassword, password);
});

When(/^I tap on the (\w+) button$/, async(buttonName) => {
    switch(buttonName.toLowerCase()){
    case 'login': await ActionHelper.click(LoginScreen.btnLogin); 
        await ActionHelper.pause(2);
        if(await ActionHelper.isVisible(LoginScreen.btnLogin)){
            await ActionHelper.click(LoginScreen.btnLogin);
            await ActionHelper.pause(2);
        }
        break;
    case 'help': await ActionHelper.click(HomeScreen.btnHelp); 
        break;
    case 'overview': await ActionHelper.click(HomeScreen.btnOverview); 
        break;
    case 'bills': await ActionHelper.click(HomeScreen.btnBills); 
        break;
    case 'settings': await ActionHelper.click(HomeScreen.btnSettings); 
        break;
    case 'shortcutspending': await ActionHelper.click(SettingsScreen.btnShortcutSpending);
        break;
    case 'logoff': await ActionHelper.click(SettingsScreen.btnLogOf);
        break;
    // eslint-disable-next-line no-case-declarations
    case 'calender': let name = await loginpage.getMonth(d.getMonth());
        // eslint-disable-next-line quotes
        await ActionHelper.click("//*[contains(@text,'" + name + "')]");
        break;
    }    
});

Then(/^I am on the (\w+) page$/, async (pageName) => {
    switch (pageName.toLowerCase()) {
    case 'overview':
        await loginpage.subCheckDisplayed('Overblik');
        break;
    case 'login':
        await loginpage.subCheckDisplayed('Brugernavn');
        break;
    case 'help':
        await loginpage.subCheckDisplayed('velkommen til at kontakte os');
        break;
    case 'bills':
        await loginpage.subCheckDisplayed('Regninger');
        break;
    case 'settings':
        await loginpage.subCheckDisplayed('Indstillinger');
        break;
    case 'spending':
        await loginpage.subCheckDisplayed('Forbrug');
        break;
    }
});

Then(/^Set pin code (\w+) if asked$/, async (pinCode) => {
    await ActionHelper.setPin(pinCode);
    await ActionHelper.setPin(pinCode);
});

Then(/^I see a button with calender name$/, async () => {
    let name = await loginpage.getMonth(d.getMonth());
    await loginpage.subCheckDisplayed(name);
});

Then(/^I see a Consumption period popup$/, async () => {
    await ActionHelper.isVisible(ForbrugScreen.popupForbrug);
});

Then(/^I see the current Month and Year$/, async () => {
    let month = await loginpage.getMonth(d.getMonth());
    let year = await loginpage.getYear();
    await ActionHelper.isVisible('//*[@text=\'' + month + ' ' + year + '\']');
});

Then(/^I see the remaing days and next month$/, async () => {
    const date2 = new Date('1/'+d.getMonth()+1+'/'+d.getYear());
    const diffTime = Math.abs(date2 - d);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    await ActionHelper.isVisible('//*[@text="Ny forbrugsperiode starter om '+diffDays+' dage (1. '+loginpage.getMonth(+d.getMonth()+1)+')"]');
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

Then('Step Test', async () => {
    let name = await loginpage.getMonth(d.getMonth());
    console.log(name);
});