// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry"
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: "chromium",
    //   use: {
    //     browserName: "chromium",
    //     headless: true,
    //     screenshot: "only-on-failure",
    //     video: "retain-on-failure",
    //     trace: "retain-on-failure",
    //     ignoreHTTPSErrors: true,
    //     permissions: ["geolocation"],
    //     ...devices["Desktop Chrome"],
    //     fullyParallel: true
    //   }
    // },

    // {
    //   name: "safari",
    //   use: {
    //     browserName: "webkit",
    //     headless: false,
    //     screenshot: "only-on-failure",
    //     video: "retain-on-failure",
    //     trace: "retain-on-failure",
    //     ignoreHTTPSErrors: true,
    //     permissions: ["geolocation"],
    //     ...devices["Desktop Safari"],
    //     fullyParallel: true
    //   }
    // },

    // {
    //   name: "firefox",
    //   use: {
    //     browserName: "firefox",
    //     headless: true,
    //     screenshot: "only-on-failure",
    //     video: "retain-on-failure",
    //     trace: "retain-on-failure",
    //     ignoreHTTPSErrors: true,
    //     permissions: ["geolocation"],
    //     ...devices["Desktop Firefox"],
    //     fullyParallel: true
    //   }
    // },

    // {
    //   name: "Mobile Safari",
    //   use: {
    //     browserName: "webkit",
    //     headless: false,
    //     screenshot: "only-on-failure",
    //     video: "retain-on-failure",
    //     trace: "retain-on-failure",
    //     ignoreHTTPSErrors: true,
    //     permissions: ["geolocation"],
    //     ...devices["iPhone 12"],
    //     fullyParallel: true
    //   }
    // },
    // {
    //   name: "Mobile chrome",
    //   use: {
    //     headless: false,
    //     screenshot: "only-on-failure",
    //     video: "retain-on-failure",
    //     trace: "retain-on-failure",
    //     ignoreHTTPSErrors: true,
    //     permissions: ["geolocation"],
    //     ...devices["Pixel 5"],
    //     fullyParallel: true
    //   }
    // }

    /* Test against mobile viewports. */
    {
      name: "Mobile Chrome",
      use: { headless: false, ...devices["Pixel 5"] }
    },
    {
      name: "Mobile Safari",
      use: { headless: false, ...devices["iPhone 12"] }
    }

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
