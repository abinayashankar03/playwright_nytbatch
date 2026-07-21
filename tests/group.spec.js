import {test,expect} from '@playwright/test'

test.describe("form",async()=>{
 
    test("personal",async()=>{
        console.log("personal details");
    })

    test("education",async()=>{
        console.log("educational details");
    })

    test("experience",async()=>{
        console.log("experience details");
    })

})

test.describe("groupOne",async()=>{

    test("radio button",async()=>{
        console.log("radio button validation");
    })

    test("checkbox",async()=>{
        console.log("checkbox validation");
    })

})


