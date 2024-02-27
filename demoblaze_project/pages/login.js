exports.LoginPage = class LoginPage{
    constructor(page){
        this.page=page;
        this.username_textbox=page.locator('#loginusername');
        this.password_textbox=page.locator('#loginpassword');
        this.login_button=page.getByRole('button', { name: 'Log in' });
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
        await this.page.getByRole('link', { name: 'Log in' }).click();
    }

    async login(username, password){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
}
