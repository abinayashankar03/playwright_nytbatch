import {test,expect} from '@playwright/test'
import login from './test-data/login.json'

test("login orangehrm",async({page})=>{

    await page.setViewportSize({ width: 375, height: 667})

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page.getByAltText('company-branding')).toBeVisible()
    await page.getByPlaceholder('Username').fill(login.username)
    await page.getByPlaceholder('Password').fill(login.password)

    await page.getByRole("button",{name:" Login "}).click()



})


//npx playwright codegen

//npx playwright codegen URL --output=folder/file.spec.js

//npx playwright codegen --viewport-size "375,667"


