
import {test , expect } from '@playwright/test'

test.beforeEach('checkbox' , async ({page})=>{
    await page.goto ('https://practice.expandtesting.com/checkboxes');
      await page.evaluate(() => {
    window.scrollBy(0, 500);
  });

   await expect (page).toHaveTitle (/Check Boxes page for Automation Testing Practice/);

});

test ('cheekbox1', async({page})=>{
const checkbox1 =await page.getByLabel('Checkbox 1');
await checkbox1.check ();
await expect (checkbox1).toBeChecked ();

});
test ('checkbox2', async ({page})=>{
const checkbox2 =await page.getByLabel('Checkbox 2');
await checkbox2.check ();
await expect (checkbox2).toBeChecked();
});
