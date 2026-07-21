import {test,expect} from '@playwright/test'

test("simple alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        console.log(dialog.message());
        expect(dialog.message("I am an alert box!"))

        await dialog.accept()
    })

    
    await page.locator('//button[@id="alertBtn"]').click()


})

test("confirmation alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on("dialog",async confirm=>{

        console.log(confirm.type());
        console.log(confirm.message());
        expect(confirm.message("Press a button!"))

        // await confirm.accept()
        await confirm.dismiss()
         
    })

    await page.locator('//button[@id="confirmBtn"]').click()

    // await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed OK!")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")




})

test("prompt alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on("dialog",async prompt=>{

        console.log(prompt.type());
        console.log(prompt.message());
        expect(prompt.message("Please enter your name:"))

        // await prompt.accept("playwright")
        await prompt.dismiss("playwright")
         
    })

    await page.locator('//button[@id="promptBtn"]').click()

    // await expect(page.locator('//p[@id="demo"]')).toHaveText("Hello playwright! How are you today?")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("User cancelled the prompt.")


})

