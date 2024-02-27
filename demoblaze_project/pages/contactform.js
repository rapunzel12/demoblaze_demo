exports.ContactPage=class ContactPage{

    constructor(page){
        this.page=page;
        this.contact_link=page.getByRole('link', { name: 'Contact' });
        this.email_input=page.locator('#recipient-email');
        this.name_input=page.getByLabel('Contact Email:');
        this.message=page.getByLabel('Message:');
        this.button=page.getByRole('button', { name: 'Send message' });
    }

    async gotoHomePage(){
        await this.page.goto('https://www.demoblaze.com/index.html#');
    }

    async fillContactForm(email, name, message){
        await this.contact_link.click();
        await this.email_input.fill(email);
        await this.name_input.fill(name);
        await this.message.fill(message);
        await this.button.click();
    }
}