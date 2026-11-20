import {test , expect} from '@playwright/test';

test('Handling checkboxes', async ({page})=>{

 //Single checkbox operations
await page.goto('https://www.bing.com/account/general?ru=https%3a%2f%2fwww.bing.com%2f&FORM=O2HV65&id=region_section#region-section');

// pause chesi one by one excute cheydaniki 
//await page.pause();

await page.locator('#enAS').uncheck();
await page.getByLabel('See search suggestions as you type').check();
await page.getByRole('checkbox', {name :'See search suggestions as you type'}).uncheck();

//browser session ni  automatic gah close cheydaniki 
await page.close();








});