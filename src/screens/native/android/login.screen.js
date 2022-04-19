class LoginScreen{
    constructor(){
        this.txtbxUserName='//android.widget.EditText[@resource-id="Username"]';
        this.txtbxPassword='(//android.widget.EditText)[2]';
        this.btnLogin='//android.widget.TextView[@text="Login"]';
        this.linkNewMusicLoginExtraSubscription='//android.widget.Button[contains(@text,"YouSee Musik")]';
        this.linkLoginLimitedAccess='//android.widget.Button[contains(@text,"sms-kode")]';
    }
}
module.exports=new LoginScreen();