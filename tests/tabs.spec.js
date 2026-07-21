import {test,expect, chromium} from '@playwright/test'

test("handling tabs",async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()
    const newPage=await context.newPage()

    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log(await page.title());

    await page.waitForTimeout(3000)

    await newPage.goto("https://www.facebook.com/");
    console.log(await newPage.title());
    
    await page.waitForTimeout(3000)
  
})

test("multiple tabs",async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page.title());

    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('//a[text()="OrangeHRM, Inc"]').click()
    ])

    await newPage.waitForLoadState()

    console.log(await newPage.title());

    await newPage.locator('(//a[text()="Pricing"])[1]').click()


    
})

test("page navigation",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)

    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(2000)

    await page.goBack()
    await page.waitForTimeout(2000)

    await page.goForward()
    await page.waitForTimeout(2000)
})