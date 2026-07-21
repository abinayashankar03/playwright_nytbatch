import {test,expect} from '@playwright/test'
import Orange from './pages/hrm'

test("login using orangeHrm",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    let loginHrm=new Orange(page);

    loginHrm.login("Admin","admin123");

 
})