class BillsScreen{
    constructor(){
        this.lblFirstBill='//android.view.View[contains(@text,"rste regning fra YouSee")]';
        this.lblUnderstandBill='//android.view.View[contains(@text,"din regning")]';
        this.lblPayBill='//android.view.View[contains(@text,"Betal regningen i Mit YouSee")]';
    }
}
module.exports=new BillsScreen();