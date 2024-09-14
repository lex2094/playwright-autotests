import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    browserName: 'chromium', // or 'firefox', 'webkit'
    headless: false, // to see the browser actions
  },
});
