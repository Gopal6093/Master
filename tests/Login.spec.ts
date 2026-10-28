import {test, expect} from '@playwright/test'

test.beforeEach ('Login' , async ({page})=>{
    await page.goto ('https://practice.expandtesting.com/login');
    await page .evaluate (()=>{
window.scrollBy(0, 400);

    });

});
test ('login1' , async ({page})=>{
   const log1 =await page.locator ('#username');
    await log1.screenshot({path:'username.png'});
    const log2 =await page.locator ('#password');
    await log2.screenshot({path:'password.png'})
    const lgbutton =await page.locator ('#submit-login');
   await lgbutton.screenshot ({path:'loginbutton.png'});
    await log1.fill ('practice');
    await log2.fill ('SuperSecretPassword!');
    await  lgbutton.click ();

    await expect (page).toHaveURL (/expandtesting/);
    await expect  (page).toHaveTitle (/Secure Page page for Automation Testing Practice/);
        await page.screenshot ({path: 'login-success.png' ,fullPage :true});

    });

