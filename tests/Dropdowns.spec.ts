import {test, expect} from '@playwright/test';
test('Handling dropdowns' , async ({page})=>{

await page.goto('https://the-internet.herokuapp.com/dropdown');
await page.pause();
await page.locator('#dropdown').selectOption('1');

//await expect(page.locator('#dropdown')).toHaveValue('1');

//await page.locator('#dropdown').selectOption('2');

});  