exports.MenuPage = class MenuPage{

    constructor(page){
        this.page=page;
        this.search_option=page.getByRole('link', { name: 'Laptops' });
        this.next_button=page.locator('#next2');
    }

    async gotoHomePage(){
        await this.page.goto('https://www.demoblaze.com/index.html#');
    }

    async gotoSearhResultes(){
        await this.search_option.click();
        await this.next_button.click();
    }

}