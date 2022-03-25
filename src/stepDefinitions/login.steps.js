const {Given, When, Then} = require('@cucumber/cucumber');

const LoginPage = require('./../pages/login.page')
const ActionHelper = require('./../helpers/actionHelpers');
const LoginScreen = require('./../screens/native/android/login.screen')
// const HomeScreen = require('./../screens/native/android/home.screen')

const loginpage = new LoginPage();

Given(/^I open the App$/, () => {
    loginpage.launchApp();
});

Then(/^I close the App$/, () => {
    loginpage.closeApp();
});

Then(/^I switch back to the app$/, () => {
    ActionHelper.back();
    ActionHelper.pause(3);
});

When(/^I tap on the (\w+) button$/, (buttonName) => {
    switch(buttonName.toLowerCase()){
    case 'login': ActionHelper.click(LoginScreen.btnLogin); 
        ActionHelper.pause(2);
        ActionHelper.click(LoginScreen.btnLogin);
        ActionHelper.pause(2);
        break;
    }    
});

Then(/^I inserts username (\w+)$/, (username) => {
    ActionHelper.sendText(LoginScreen.txtbxUserName,username);
});
Then(/^I inserts password (\w+)$/, (password) => {
    ActionHelper.sendText(LoginScreen.txtbxPassword,password);
});

Then(/^I am on the (\w+) page$/, async (pageName) => {
    switch(pageName.toLowerCase()){
    case 'home': await loginpage.subCheckDisplayed('HomeScreen');
    // loginpage.verifyDisplay(HomeScreen.lblHomeScreen);
        break;
    case 'login': await loginpage.subCheckDisplayed('Brugernavn');
    // loginpage.verifyDisplay(LoginScreen.txtbxUserName);
        break;
    }    
});

Then(/^Set pin code (\w+) if asked$/, (pinCode) => {
    ActionHelper.setPin(pinCode);
    ActionHelper.setPin(pinCode);  
});   

When('I tap on the link {string}', (LinkName) => {
    ActionHelper.click('//android.widget.TextView[@text=\'' + LinkName + '\']');
    ActionHelper.pause(3);   
});

Then('An Error massage is shown where the text says {string}',(errorText) => {
    loginpage.subCheckDisplayed(errorText);
});

Then(/^I am on the create pin code screen$/, async () => {
    await loginpage.subCheckDisplayed('Opret pinkode');
});

When(/^I inserts 4 digits pin (\w+)$/, (pincode) => {
    ActionHelper.setPin(pincode);
});
  
When(/^inserts the same 4 digits pin (\w+) again$/, (pincode) => {
    ActionHelper.setPin(pincode);
});