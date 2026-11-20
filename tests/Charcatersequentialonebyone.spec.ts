import {test} from '@playwright/test';

// Entering charcaters one by one event 

test('press charcaters sequentially', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.pause();

    await page.getByPlaceholder('Username').pressSequentially('standard_user', {delay: 400});

    await page.locator('#password').pressSequentially('secret_sauce', {delay : 400});

    await page.locator('#login-button').click();

    await page.close();

});