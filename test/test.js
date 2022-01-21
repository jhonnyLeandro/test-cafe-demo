

fixture`sauceDemo`
    .page`https://www.saucedemo.com/`;

import loginPage  from './pages/Login';
import inventoryPage from './pages/inventory';

test('Login to saucedemo page', async t => {
    await loginPage.loginToApplication('standard_user', 'secret_sauce');
    await inventoryPage.productTitleShouldbeVisible();
});