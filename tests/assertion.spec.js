import {test,expect} from '@playwright/test'

test("assertion",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")  //expect
    await expect(page).toHaveTitle('Automation Testing Practice')

    await expect(page.locator('//p[@class="description"]/child::span')).toBeVisible()
    const textLocator='//p[@class="description"]/child::span'
    await expect(page.locator(textLocator)).toHaveText("For Selenium, Cypress & Playwright")
    await expect(page.locator(textLocator)).toContainText('Playwright')

    const inputLocator='//input[@id="name"]'
    await expect(page.locator(inputLocator)).toBeEmpty()
    await page.locator(inputLocator).fill("playwright")
    await expect(page.locator(inputLocator)).toHaveValue("playwright")
    // await expect(page.locator(inputLocator)).toBeEmpty()

})