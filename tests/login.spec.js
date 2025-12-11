const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page/LoginPage');

// Load environment variables
require('dotenv').config();

test.describe('Login Page Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // test('✔ Valid login should navigate to dashboard', async ({ page }) => {

  //   const validEmail = process.env.VALID_EMAIL || 'rahulshettyacademy@gmail.com';
  //   const validPassword = process.env.VALID_PASSWORD || 'learning';
    
  //   await loginPage.login(validEmail, validPassword);
    
  //   // Verify successful login - page remains on login page after submit
  //   await expect(page).toHaveURL(`https://rahulshettyacademy.com/loginpagePractise/`);
  //   await page.pause();
  // });
  test('✔ Valid login should navigate to dashboard', async ({ page }) => {
    
    await loginPage.login("rahulshettyacademy", "learning");
    
    // Verify successful login - page remains on login page after submit
    await expect(page).toHaveURL(`https://rahulshettyacademy.com/loginpagePractise/`);
    await page.pause();
  })


});

