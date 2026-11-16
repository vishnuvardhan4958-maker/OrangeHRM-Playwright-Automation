import {test , expect} from '@playwright/test';

test('Handling radiobuttons', async ({page})=>{

await page.goto('https://www.bing.com/account/general?ru');
await page.pause();
await page.locator('#adlt_set_strict').check();

//asseration
await expect(page.locator('#adlt_set_strict')).toBeChecked();

await page.getByLabel('off').first().check();
await page.getByRole('radio', {name:'Moderate'}).check();





await page.close();

})
