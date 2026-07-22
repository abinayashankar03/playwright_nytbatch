import {test,expect} from '@playwright/test'

test("single file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/HP/Downloads/img_one.webp")

    await page.locator('//button[contains(text(),"Single File")]').click()

    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: img_one.webp")

})

test("multiple file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["C:/Users/HP/Downloads/img_one.webp","C:/Users/HP/Downloads/img_two.jpg"])

    await page.locator('//button[text()="Upload Multiple Files"]').click()

    await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText("Multiple files selected:")

})


test("file download",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download")

    const[download]=await Promise.all([
        page.waitForEvent('download'),
        page.locator('//a[text()="sample_file.pdf"]').click()
    ])

    const filePath="C:/Users/HP/Downloads/sample_file.pdf"
    await download.saveAs(filePath)
    
    
})

test("Download file",async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/download')

        const [download]=await Promise.all([
            page.waitForEvent('download'),
            page.locator('//a[text()="sample_file.pdf"]').click()
        ])
            const filepath="C:/Users/HP/Downloads/sample_file.pdf"
            await download.saveAs(filepath)
    })