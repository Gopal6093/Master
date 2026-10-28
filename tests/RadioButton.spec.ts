import {test, expect} from '@playwright/test'

test.beforeEach('Radio' , async ({page})=>{
await page.goto ('https://practice.expandtesting.com/radio-buttons');

await page.evaluate (()=>{
    window.scrollBy(0,500);

});

await expect(page).toHaveTitle(/Radio Buttons page for Automation Testing Practice/);

});

test ('SelectRadioButton' , async ({page})=>{
const Radio1= await page.getByLabel ('Red');
await Radio1.check ();
await expect (Radio1).toBeChecked ();
} );



