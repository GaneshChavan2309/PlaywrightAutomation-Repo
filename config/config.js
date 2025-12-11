import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

/**
 * Configuration class to manage environment variables and default settings
 * Provides centralized access to all test configuration values
 */
class Config {
  /**
   * Base URL for the application
   * @returns {string} The base URL from .env or default
   */
  static get BASE_URL() {
    return process.env.BASE_URL || 'https://rahulshettyacademy.com/loginpagePractise/';
  }

  /**
   * Valid email for testing
   * @returns {string} Valid email credentials from .env
   */
  static get VALID_EMAIL() {
    return process.env.VALID_EMAIL || 'rahulshettyacademy';
  }

  /**
   * Valid password for testing
   * @returns {string} Valid password credentials from .env
   */
  static get VALID_PASSWORD() {
    return process.env.VALID_PASSWORD || 'learning';
  }

  /**
   * Invalid email for negative testing
   * @returns {string} Invalid email from .env
   */
  static get INVALID_EMAIL() {
    return process.env.INVALID_EMAIL || 'invalid@test.com';
  }

  /**
   * Invalid password for negative testing
   * @returns {string} Invalid password from .env
   */
  static get INVALID_PASSWORD() {
    return process.env.INVALID_PASSWORD || 'wrongpassword';
  }

  /**
   * Checkout URL
   * @returns {string} Checkout URL from .env
   */
  static get CHECKOUT_URL() {
    return process.env.CHECKOUT_URL || 'https://rahulshettyacademy.com/angularpractice/shop';
  }

  /**
   * Global timeout for tests (in milliseconds)
   * @returns {number} Global timeout value
   */
  static get TIMEOUT() {
    return parseInt(process.env.TIMEOUT || '30000', 10);
  }

  /**
   * Timeout for individual actions (in milliseconds)
   * @returns {number} Action timeout value
   */
  static get ACTION_TIMEOUT() {
    return parseInt(process.env.ACTION_TIMEOUT || '10000', 10);
  }

  /**
   * Headless mode setting
   * @returns {boolean} Whether to run in headless mode
   */
  static get HEADLESS() {
    return process.env.HEADLESS === 'false' ? false : true;
  }

  /**
   * Trace collection setting
   * @returns {string} Trace setting (on-first-retry, on, off)
   */
  static get TRACE() {
    return process.env.TRACE || 'on-first-retry';
  }

  /**
   * Screenshot capture setting
   * @returns {string} Screenshot setting (only-on-failure, on, off)
   */
  static get SCREENSHOT() {
    return process.env.SCREENSHOT || 'only-on-failure';
  }

  /**
   * Video recording setting
   * @returns {string} Video setting (retain-on-failure, on, off)
   */
  static get VIDEO() {
    return process.env.VIDEO || 'retain-on-failure';
  }
}

export default Config;
