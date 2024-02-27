exports.SignupPage = class SignupPage{

    constructor(page){
        this.page=page;
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByLabel('Password');
        this.signup_button = page.getByRole('button', { name: 'Sign up' });
    }

    async gotoSignupPage(){
        await this.page.goto('https://www.demoblaze.com/index.html');
        await this.page.getByRole('link', { name: 'Sign up' }).click();
    }

    async signup(username, password){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.signup_button.click();
    }
}