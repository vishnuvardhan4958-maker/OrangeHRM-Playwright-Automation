
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Test timeout: 1 minute
  timeout: 60000,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',

    // Show the browser
    headless: false,

    // Slow down browser actions by 1 second
    launchOptions: {
      slowMo: 1000,
    },

    // Action timeout: 1 minute
    actionTimeout: 60000,

    // Navigation timeout: 1 minute
    navigationTimeout: 60000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
