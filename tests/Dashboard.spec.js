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
    const ValidateLogo = await page.getByRole('link', { name: 'ProtoCommerce', exact: true }).textContent();
    console.log(`Logo text: ${ValidateLogo}`);
    expect(ValidateLogo).toBe('ProtoCommerce');
  });

  test('✔ Dashboard should display home link', async ({ page }) => {
    const homeLinkText = await page.getByRole('link', { name: 'Home', exact: true }).textContent();
    console.log(`Home link text: ${homeLinkText}`);
    expect(homeLinkText).toBe('Home');
  });

});

