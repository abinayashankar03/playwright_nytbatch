//playwright - test runner  {framework}

import {test,expect} from '@playwright/test'

test("login for facebook for css",async({page})=>{
    await page.goto("https://www.facebook.com/")

    await page.locator('#_R_1h6kqsqppb6amH1_').fill("example@gmail.com")

    await page.locator('[type="password"]').fill("password")

    await page.locator('[aria-label="Log in"]').click()

    await page.waitForTimeout(5000)

})

test("login for facebook using xpath",async({page})=>{
    await page.goto("https://www.facebook.com/")

    await page.locator('//input[@name="email"]').fill("example@gmail.com")

    await page.locator('//input[@type="password"]').fill("password")

    await page.locator('//div[@aria-label="Log in"]').click()

    await page.waitForTimeout(5000)

})

test("login using built-in-locators",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page.getByAltText('company-branding')).toBeVisible()
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")

    await page.getByRole("button",{name:" Login "}).click()



})