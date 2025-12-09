const { Locators } = require('../locator/locotor.spec');
require('dotenv').config();

class LoginPage {
  constructor(page) {
    this.page = page;
    // Use locators from centralized locators file
    this.emailInput = page.locator(Locators.login.usernameInput);
    this.passwordInput = page.locator(Locators.login.passwordInput);
    this.loginBtn = page.locator(Locators.login.signInButton);
    this.errorMsg = page.locator(Locators.login.errorMessage);
  }

  async goto() {
    // Get URL from .env file or use default
    const loginUrl = process.env.BASE_URL || 'https://rahulshettyacademy.com/loginpagePractise/';
    console.log(`Navigating to: ${loginUrl}`);
    await this.page.goto(loginUrl);
    // Wait for login form to be visible
    await this.emailInput.waitFor({ state: 'visible', timeout: 5000 });
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
    // Wait for navigation or error message
    await this.page.waitForLoadState('networkidle');
  }

  async getErrorMessage() {
    await this.errorMsg.waitFor({ state: 'visible', timeout: 3000 });
    return await this.errorMsg.textContent();
  }
}

module.exports = { LoginPage };
