const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');

setDefaultTimeout(60000);

let browser, page, loginPage, inventoryPage, cartPage;

Given('I navigate to the SauceDemo website', async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    await loginPage.goto();
});

When('I log in with {string} and {string}', async (username, password) => {
    await loginPage.login(username, password);
});

When('I select the highest price item', async () => {
    await inventoryPage.selectHighestPriceItem();
});

Then('I should see the item added to the cart', async () => {
    await cartPage.verifyCartNotEmpty();
    await browser.close();
});
