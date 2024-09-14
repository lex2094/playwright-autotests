const { test, expect } = require('@playwright/test');

test('test example.com', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});