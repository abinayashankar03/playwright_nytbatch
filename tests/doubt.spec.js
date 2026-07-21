import { test, expect } from '@playwright/test';

test('Date Pickers', async ({ page }) => {
    //fill method
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="datepicker"]').click()
    await page.locator('//input[@id="datepicker"]').fill('06/22/2026')
    await expect(page.locator('//input[@id="datepicker"]')).toHaveValue('06/22/2026')
    
    //dropdown method
    await page.locator('//input[@id="txtDate"]').click()
    await page.locator('//select[@aria-label="Select month"]').selectOption("May")
    await page.locator('//select[@aria-label="Select year"]').selectOption("2022")
    await page.locator('//a[@class="ui-state-default" and text()="10"]').click()
    await expect(page.locator('//input[@id="txtDate"]')).toHaveValue('10/05/2022')


})