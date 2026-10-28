//select by value 
    //select by lable 
    //select by index
    //select by visable tsxt 
    import { test, expect } from '@playwright/test'


    test('dropdownvalidateing', async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/locators');
        //#countrySelect
        const selectblock = page.locator('#countrySelect');
        await selectblock.selectOption({ label: 'France' });
        await expect(selectblock).toHaveValue('France');
        await selectblock.screenshot({path:'drodown.png'});
        await page.screenshot ({path:'drop2.png', fullPage:true});


    });