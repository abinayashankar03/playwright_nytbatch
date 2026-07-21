import {test,expect} from '@playwright/test'

test.beforeAll("test initialization",async()=>{
    console.log("test started succesfully");
})

test.beforeEach("page navigation",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
})

test("login one",async({page})=>{
    await page.locator('//input[@id="user-name"]').fill("standard_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
})

test("login two",async({page})=>{
    await page.locator('//input[@id="user-name"]').fill("problem_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
})

test("login three",async({page})=>{
    await page.locator('//input[@id="user-name"]').fill("performance_glitch_user")
    await page.locator('//input[@id="password"]').fill("secret_sauce")
    await page.locator('//input[@id="login-button"]').click()
})

test.afterEach("logout",async({page})=>{
    await page.locator('//button[@id="react-burger-menu-btn"]').click()
    await page.locator('//a[@id="logout_sidebar_link"]').click()
})

test.afterAll("test completion",async()=>{
    console.log("test executed successfully");
})