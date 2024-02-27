import {test, expect} from '@playwright/test';
import { MenuPage } from '../../pages/menu';
import { ContactPage } from '../../pages/contactForm';


test('Search menu test', async ({ page }) => {

    const Menu = new MenuPage(page);
    await Menu.gotoHomePage();
    await Menu.gotoSearhResultes();
    
});

test('Send a message via Contact form', async({page})=>{

    const Contact= new ContactPage(page);
    await Contact.gotoHomePage();
    await Contact.fillContactForm(
        'mejl@gmail.com', 
        'Milica',
        'This is a message for demoblaze support.');
})