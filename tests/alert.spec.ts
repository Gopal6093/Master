import {test , expect }from "@playwright/test";

test('alert handling ', async({page})=>{
await page.goto ('https://practice.expandtesting.com/cookie-alert');
page.once ("dialog" ,async dialog =>{
    console.log('Dilogmessage :$diloag.message ()');
    await dialog.accept ();
});
   await page.click ('#js-cookie-button'); 
    
});

//page.once ('dialog' , async dialog =>{
console.log ('dialogmessage': $dilogmessage()'')
});