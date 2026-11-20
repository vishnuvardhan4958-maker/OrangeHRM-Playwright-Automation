import {test} from '@playwright/test';
//Mouse Hover event

test('Mouse Hover', async ({page})=>{

    await page.goto('https://www.emirates.com/in/english/book/');
    await page.pause();

    //click on accept button on popup
    await page.locator('#onetrust-accept-btn-handler').click();

    await page.locator('//*[@id="__next"]/header/div[1]/div[2]/div/nav/div/div/div[1]/div/div/div/div/ul/li[2]/span').hover();

    await page.close();

});