import {test,expect} from '@playwright/test'

test("screenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.screenshot({path:"tests/SS/"+"automation.png"})
    // await page.screenshot({path:"tests/SS/"+"fullPage.png",fullPage:true})
    // await page.locator('//td[@class="first columns-cell"]').screenshot({path:"tests/SS/"+"form.png"})

    await page.screenshot({path:"tests/SS/"+"automationFullpage.png",fullPage:true})
})