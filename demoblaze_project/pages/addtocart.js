exports.AddToCartPage=class AddToCartPage{

    constructor(page){
        this.page = page;
        this.addtocart_link = page.getByRole('link', { name: 'Add to cart' });
    }

    async gotoProductsPage(){
        await this.page.goto('https://www.demoblaze.com/prod.html?idp_=1');
    }

    async addToCart(){
        await this.addtocart_link.click();
    }
}