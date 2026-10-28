import {test} from "@playwright/test";

test ('alert handling ', async ({ page })=>{

page.goto ('https://practice.expandtesting.com/cookie-alert');
    page.on ('dialog', async dialog =>{
     console.log(dialog.message ());
     await dialog.accept ();
    });
    page.locator('button' {})

});

