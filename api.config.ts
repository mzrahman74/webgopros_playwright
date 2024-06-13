import { PlaywrightTestConfig } from "playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 6000,
  retries: 0,
  testDir: "tests/api",
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    ignoreHTTPSErrors: true,
    permissions: ["geolocation"]
  },
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" }
    },
    {
      name: "Firefox",
      use: { browserName: "firefox" }
    },
    {
      name: "Webkit",
      use: { browserName: "webkit" }
    }
  ]
};

export default config;
