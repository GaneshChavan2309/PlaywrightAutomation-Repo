/**
 * Locators for Login Page
 * Centralized repository for all selectors used in login tests
 */

const Locators = {
  // Login Form Elements
  login: {
    usernameInput: '//input[@id="username"]',
    passwordInput: '#password',
    signInButton: '#signInBtn',
    errorMessage: '.alert-danger',
  },
};
module.exports = { Locators };
