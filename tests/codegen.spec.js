import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await expect(page.locator('path').first()).toBeVisible();
  await expect(page.locator('img')).toBeVisible();
  await expect(page.locator('#mount_0_0_2Q')).toContainText('Explore the things you love.');
  await expect(page.locator('#mount_0_0_2Q')).toContainText('Log in to Facebook');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('example@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Meta logo' })).toBeVisible();
});