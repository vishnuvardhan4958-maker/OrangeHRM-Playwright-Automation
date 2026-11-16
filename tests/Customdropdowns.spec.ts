import {test, expect} from '@playwright/test';

test('customdropdowns', async ({page})=> {
await page.goto('https://getbootstrap.com/docs/5.3/components/dropdowns/');

await page.pause();

//await page.locator('.btn btn-secondary dropdown-toggle show').first().click();
 //await page.getByRole('button', { name: 'Dropdown button' }).click();
//await page.locator('.dropdown-item').first().click();
//await page.getByRole('link', { name: 'Another action' }).click();

await page.locator('//button[@class="btn btn-secondary dropdown-toggle show"]').first().click();

await page.locator('//a[text()="Another action"]').first().click();

await page.close();

})
