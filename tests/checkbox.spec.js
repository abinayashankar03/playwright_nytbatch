// import {test,expect} from '@playwright/test'
const {test,expect} = require ('@playwright/test')

test("radio button",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="male"]').check()
    await expect(page.locator('//input[@id="male"]')).toBeChecked()

    await expect(page.locator('//input[@id="female"]')).not.toBeChecked()

})

test("single checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="sunday"]').check()
    await expect(page.locator('//input[@id="sunday"]')).toBeChecked()

    await page.locator('//input[@id="sunday"]').uncheck()


})

test.only("multiple checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    let checkboxLocat=['//input[@id="sunday"]','//input[@id="tuesday"]','//input[@id="thursday"]','//input[@id="saturday"]']

    for(let locat of checkboxLocat){
        await page.locator(locat).check()
    }
    
})