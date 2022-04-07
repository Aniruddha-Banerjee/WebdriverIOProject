class SettingsScreen{
    constructor(){
        this.btnShortcutSpending='//android.widget.TextView[@text="Genvej: Forbrug"]';
        this.btnShortcutStorybook='//android.widget.TextView[@text="Genvej: Storybook"]';
        this.btnShortcutSimkort='//android.widget.TextView[@text="Genvej: Simkort"]';
        this.btnLogOf='//android.widget.TextView[@text="Log af "]';
    }
}
module.exports=new SettingsScreen();