

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  // Discover all Playwright TypeScript test files
  testMatch: '**/*.spec.ts',

  timeout: 60000,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',

    // Visible locally, headless in CI
    headless: !!process.env.CI,

    // Slow locally, normal speed in CI
    launchOptions: {
      slowMo: process.env.CI ? 0 : 1000,
    },

    actionTimeout: 60000,

    navigationTimeout: 60000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
