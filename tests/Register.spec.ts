import {test, expect} from '@playwright/test'

test ('regi', async ({page})=>{

await page.goto ("https://practice.expandtesting.com/register");
await expect (page).toHaveURL (/.*register/);
await page.screenshot({path:"register1.png" })

});
