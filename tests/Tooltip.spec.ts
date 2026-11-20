import {test} from '@playwright/test';
test ('Handling tooltip messages', async ({page})=>{

    await page.goto('https://jqueryui.com/tooltip/');

    await page.pause();

    const frame1 = await page.frameLocator('.demo-frame');
    const value = await frame1.locator('#age').getAttribute('title');

   console.log(value);

   await page.close();
 

});