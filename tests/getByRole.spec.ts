import {test, expect} from '@playwright/test'

test ('geetbyrole ' , async ({page})=>{
    await page.goto ('https://practice.expandtesting.com/locators');
//await expect (page).toHaveTitle(/Locators Test page for Automation Testing/);
await page.screenshot({path:'pagesceeshot.png' , fullPage:true});
const role =page.getByRole ('button', {name:'Add item'});
await expect (role).toBeVisible ();
await expect (role).toBeEnabled ();
await role.click();



const role2= page.getByRole ('link' , {name:'Contact'});
await expect (role2).toBeVisible ();
await expect (role2).toBeEnabled ();
await role2.click ();
await expect (page).toHaveURL (/contact/);
await page.screenshot ({path:'conatctpage.png',fullPage:true});

});

