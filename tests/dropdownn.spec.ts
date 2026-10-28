import { test, expect } from "@playwright/test";

test('dropdownn', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dropdown');
    await page.evaluate(() => {
        window.scrollBy(0, 500);
    });
    const selectlist = await page.locator('#country');
    await selectlist.selectOption({ label: 'France' });
    await expect(selectlist).toBeVisible();
    // await selectList.selectOption({ label: 'France' });
    // await selectList.selectOption({ value: 'FR' });
    // await selectList.selectOption({ index: 1 });

});