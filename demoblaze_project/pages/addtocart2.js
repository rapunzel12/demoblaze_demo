exports.AddToCartPage2=class AddToCartPage2{

    constructor(page){

        this.page = page;
        this.product1_link = page.getByRole('link', { name: 'Nokia lumia' });
        this.product2_link = page.getByRole('link', { name: 'Nexus' });
        this.addtocart_link = page.getByRole('link', { name: 'Add to cart' });
    }

    async gotoProductsPage(){
        await this.page.goto('https://www.demoblaze.com/prod.html?idp_=2');
        await this.addtocart_link.click();
        await this.page.getByRole('link', { name: 'Home (current)' }).click();
        await this.page.goto('https://www.demoblaze.com/prod.html?idp_=3');
        await this.addtocart_link.click();
    }

    async addToCart(){
        await this.addtocart_link.click();
    }
}