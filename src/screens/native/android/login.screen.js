class LoginScreen{
    constructor(){
        this.txtbxUserName='(//android.widget.EditText)[1]';
        this.txtbxPassword='(//android.widget.EditText)[2]';
        this.btnLogin='//android.widget.TextView[@text="Login"]';
    }
}
module.exports=new LoginScreen();