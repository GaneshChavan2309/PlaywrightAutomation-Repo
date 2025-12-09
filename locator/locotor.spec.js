/**
 * Locators for Login Page
 * Centralized repository for all selectors used in login tests
 */

const Locators = {
  // Login Form Elements
  login: {
    usernameInput: '#username',
    passwordInput: '#password',
    signInButton: '#signInBtn',
    errorMessage: '.alert-danger',
  },

  // Dashboard/Shop Elements (after successful login)
  shop: {
    shopHeading: 'text=Shop',
    productCards: '.productName',
    addToCartButtons: 'button:has-text("Add to cart")',
    cartBadge: '.badge',
  },

  // Navigation Elements
  navigation: {
    homeLink: 'a[routerlink=""]',
    shopLink: 'a[routerlink="shop"]',
    checkoutLink: 'a[routerlink="checkout"]',
    ordersLink: 'a[routerlink="orders"]',
  },

  // Checkout Elements
  checkout: {
    productList: '.product-list',
    quantityInputs: 'input[name="quantity"]',
    checkoutButton: 'button:has-text("Checkout")',
    totalAmount: '.total-amount',
  },

  // Form Validation Elements
  validation: {
    requiredFields: '[required]',
    emailField: 'input[type="email"]',
    passwordField: 'input[type="password"]',
  },

  // Error/Success Messages
  messages: {
    errorAlert: '.alert-danger',
    successAlert: '.alert-success',
    warningAlert: '.alert-warning',
    toastMessage: '.toast-message',
  },

  // Common Elements
  common: {
    pageTitle: 'h1',
    pageSubtitle: 'h2',
    buttons: 'button',
    links: 'a',
    inputs: 'input',
    forms: 'form',
  },
};

module.exports = { Locators };
