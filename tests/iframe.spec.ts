// import {test, expect } from '@playwright/test'
// test('ifrmae', async ({page})=>{
// await page.goto ("https://practice.expandtesting.com/iframe");

// const frame = page.frameLocator('iframe[title="YouTube video player"]');
// //await frame.getByTitle('Play video').click ();

// });

import { test, expect } from '@playwright/test';

test('iframe handling', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/iframe');

    const frame = page.frameLocator('#iframe-youtube');

   // await frame.getByTitle('Play video').click();
await frame.getByLabel('Play').click();
});