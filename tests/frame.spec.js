import {test,expect} from '@playwright/test'

test("handling frames",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const frame=await page.frames();

    console.log("frame count :",frame.length);

    for(let i of frame){
        console.log("frame url :",i.url());
    }

    //frame   => name , src
    //framelocator  =>  css | xpath | built-in locator

    // const iFrame=await page.frame({name:"iframe-name"})
    // const iFrame=await page.frame({url:"https://legacy.rahulshettyacademy.com/"})
    const iFrame=await page.frameLocator('//iframe[@id="courses-iframe"]')

    await iFrame.locator('(//a[text()="Learning paths"])[1]').click()


    
})

test("nested frame",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    await page.click('//a[text()="Iframe with in an Iframe"]')

    // const frame=await page.frame({url:"https://demo.automationtesting.in/MultipleFrames.html"})
    const frame=await page.frameLocator('//div[@id="Multiple"]/child::iframe')

    // const childFrame=await frame.childFrames()[0]
    const childFrame=frame.frameLocator('//h5[text()="Nested iFrames"]/following-sibling::iframe')

    await childFrame.locator('//input[@type="text"]').fill("playwright")


})