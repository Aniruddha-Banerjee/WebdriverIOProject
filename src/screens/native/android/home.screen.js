class HomeScreen{
    constructor(){
        this.lblHomeScreen='//android.view.View[@text="HomeScreen"]';
        this.btnHelp='//android.widget.TextView[contains(@text,"Hj")]';
        this.btnBills='//android.widget.TextView[contains(@text,"Regninger")]';
        this.btnOverview='//android.widget.TextView[contains(@text,"Overblik")]';
        this.btnSettings='//android.widget.TextView[contains(@text,"Indstillinger")]';
    }
}
module.exports=new HomeScreen();