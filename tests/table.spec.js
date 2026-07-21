import {test,expect} from '@playwright/test'

test("webtable",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const column=page.locator('//table[@id="productTable"]/thead/tr/th')
    const rows=page.locator('//table[@id="productTable"]/tbody/tr')

    console.log("column count :",await column.count()); // 4
    console.log("rows count :",await rows.count());  // 5

    //single

    //await page.locator('//table[@id="productTable"]/tbody/tr/td[text()="Tablet "]/following-sibling::td/child::input[@type="checkbox"]').check()

    // const locat=await rows.filter({
    //     has:page.locator("td"),
    //     hasText:"Tablet"
    // })

    // await locat.locator('//input[@type="checkbox"]').check()

    // await page.pause()
    
    //multiple

    // let name=["Laptop","Tablet ","Smartwatch"]

    // for(let i of name){
    //     await page.locator(`//table[@id="productTable"]/tbody/tr/td[text()="${i}"]/following-sibling::td/child::input[@type="checkbox"]`).check()
    // }

    const locat=await rows.filter({
        has:page.locator("td"),
    })

    const checkLocat=await locat.all()

    for(let i of checkLocat){
        await i.locator('//input[@type="checkbox"]').check()
    }


    
})