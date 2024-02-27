exports.MyCartPage=class MyCartPage{

    constructor(page){

        this.page=page;
        this.my_cart=page.getByRole('link', { name: 'Cart' });
    }

    async gotoMyCartPage(){
        await this.page.goto('https://www.demoblaze.com/cart.html#');
    }
}