import { test, expect } from '@playwright/test'

test('placeho', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/locators');
    //   await expect (page).toHaveTitle(/Locators Test page for Automation Testing/);
    const txt = await page.getByText('Add Item');
    const plce = page.getByPlaceholder('Search the site');
    await expect(plce).toBeVisible();
    await plce.click();
    await plce.fill('The Star Explorer');
    await expect(plce).toHaveValue('The Star Explorer');
await page.screenshot ({path : 'placeholder.png', fullPage:true});



});