import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'google chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // Optionally, configure the base URL of your application
  // For example, if your app is running on localhost:3000
  // use: { baseURL: 'http://localhost:3000' },
});
