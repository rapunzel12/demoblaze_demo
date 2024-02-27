exports.PurchasePage=class PurchasePage{

    constructor(page){
        this.page=page;
        this.placeorder_button=page.getByRole('button', { name: 'Place Order' });
        this.name_input= page.getByLabel('Total:');
        this.country_input= page.getByLabel('Country:');
        this.city_input=page.getByLabel('City:');
        this.card_number=page.getByLabel('Credit card:');
        this.month_input=page.getByLabel('Month:');
        this.year_input=page.getByLabel('Year:');
        this.purchase_button=page.getByRole('button', { name: 'Purchase' });
        this.ok_button= page.getByRole('button', { name: 'OK' });
    }

    async gotoMyCartPage(){
        await this.page.goto('https://www.demoblaze.com/cart.html');
        await this.placeorder_button.click();
    }

    async placingOrderForm(name, country, city, credit, month, year){
        await this.name_input.fill(name);
        await this.country_input.fill(country);
        await this.city_input.fill(city);
        await this.card_number.fill(credit);
        await this.month_input.fill(month);
        await this.year_input.fill(year);
        await this.purchase_button.click();
        await this.ok_button.click();
    }

}