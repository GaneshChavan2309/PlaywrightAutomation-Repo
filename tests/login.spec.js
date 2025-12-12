const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/LoginPage');

// Load environment variables
require('dotenv').config();

test.describe('Login Page Tests', () => {
  let loginPage;
  var ValidateUrl="https://rahulshettyacademy.com/loginpagePractise/";
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('✔ Valid login should navigate to dashboard', async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.login("rahulshettyacademy", "learning");
    
    await expect(page).toHaveURL(`${ValidateUrl}`);
    await page.pause();
    const ValidateLogo=await page.getByRole('link', { name: 'ProtoCommerce', exact: true }).textContent();
    console.log(`Logo text: ${ValidateLogo}`);
    expect(ValidateLogo).toBe('ProtoCommerce'); 
    
    const homeLinkText = await page.getByRole('link', { name: 'Home', exact: true }).textContent();
    console.log(`Home link text: ${homeLinkText}`);
    expect(homeLinkText).toBe('Home');
    await page.pause();
  })
});

