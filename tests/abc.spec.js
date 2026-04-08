const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/LoginPage');

// Load environment variables
require('dotenv').config();

test.describe('Login Page Tests', () => {
  let loginPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    const email = process.env.VALID_EMAIL;
    const password = process.env.VALID_PASSWORD;
    console.log(`Logging in with email: ${email}`);
    console.log(`Logging in with password: ${password}`);
    await loginPage.login(email, password);
  });

  test('✔ Valid login should navigate to dashboard', async ({ page }) => {
   await page.locator('//app-card[@class="col-lg-3 col-md-6 mb-3"]//div//a[text()="iphone X"]//../../../div[@class="card-footer"]/button').click();
  });

});

