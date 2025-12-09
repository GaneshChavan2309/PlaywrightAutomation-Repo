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
  //   // Use credentials from environment variables
  //   const validEmail = process.env.VALID_EMAIL || 'rahulshettyacademy@gmail.com';
  //   const validPassword = process.env.VALID_PASSWORD || 'learning';
    
  //   await loginPage.login(validEmail, validPassword);
    
  //   // Verify successful login - page remains on login page after submit
  //   await expect(page).toHaveURL(`https://rahulshettyacademy.com/loginpagePractise/`);
  // });

  test('❌ Invalid login should show error message', async ({ page }) => {
    const invalidEmail = process.env.INVALID_EMAIL || 'invalid@example.com';
    const invalidPassword = process.env.INVALID_PASSWORD || 'wrongpass';
    
    await loginPage.login(invalidEmail, invalidPassword);

    // Verify error message is displayed
    await expect(loginPage.errorMsg).toBeVisible();
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Incorrect');
  });

  test('⚠ Empty username should prevent login', async ({ page }) => {
    // Try to login with empty username
    await page.locator('#password').fill('somepassword');
    await page.locator('#signInBtn').click();
    
    // Should remain on login page (invalid attempt)
    await expect(page).toHaveURL(/.*loginpage/);
  });
});

