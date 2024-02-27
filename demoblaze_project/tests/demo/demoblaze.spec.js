import { test, expect } from '@playwright/test';
import { SignupPage } from '../../pages/signup';
import { LoginPage } from '../../pages/login';
import { AddToCartPage } from '../../pages/addtocart';
import { AddToCartPage2 } from '../../pages/addtocart2';
import { MyCartPage } from '../../pages/mycart';
import { PurchasePage } from '../../pages/purchase';

test('Sign Up Test', async ({ page }) => {

    const Signup = new SignupPage(page);
    await Signup.gotoSignupPage();
    await Signup.signup('Petrovic', 'petrovic1234');

});

test('Login test', async ({ page }) => {

    const Login = new LoginPage(page);
    await Login.gotoLoginPage();
    await Login.login('Petrovic','petrovic1234');

});

test('Add to cart 1 product', async({page})=>{
    
    const Addtocart = new AddToCartPage(page);
    await Addtocart.gotoProductsPage();
    await Addtocart.addToCart();
})

test('Add to cart 2 products', async({page})=>{

    const Addtocart2 = new AddToCartPage2(page);
    await Addtocart2.gotoProductsPage();
    await Addtocart2.addToCart();

})

test('My Cart', async({page})=>{

    const MyCart = new MyCartPage(page);
    await MyCart.gotoMyCartPage();
})


test('Placing order inside My Cart', async({page})=>{
    const Purchase = new PurchasePage(page);
    await Purchase.gotoMyCartPage();
    await Purchase.placingOrderForm(
        'Milica',
        'Serbia',
        'Belgrade',
        '1234567890',
        'February',
        '2024'
    );
})