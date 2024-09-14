const { test, expect } = require('@playwright/test');

test('test example.com', async ({ page }) => {
  await page.goto('https://google.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});


test('test-1', async ({ page }) => {
  await page.goto("https://selectel.ru/blog/tutorials/what-is-git-push-and-how-to-use-it/");
  let element = await page.locator('//h2[contains(@class, "wp-block-heading") and contains(@id, "Pushing-changes")]').textContent();
  expect(element).toBe("Отправка изменений в чистый репозиторий");
  });