import{test,expect} from '@playwright/test'

test("test one @smoke",async()=>{
    console.log("test one executed successfully");
})

test("test two @smoke @sanity",async()=>{
    console.log("test two executed successfully");
})

test("test three @reg @smoke",async()=>{
    console.log("test three executed successfully");
})

test("test four @reg",async()=>{
    console.log("test four executed successfully");
})

test("test five @reg",async()=>{
    console.log("test five executed successfully");
})

