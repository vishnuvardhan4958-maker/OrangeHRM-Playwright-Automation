import {test} from '@playwright/test';

test('Handling frames', async ({page})=>{

await page.goto('https://playwrightlab.github.io/');

await page.pause();

const frame1= await page.frameLocator('#practiceFrame');
await frame1.locator('#iframeName').fill('vishnu vardhan');

await frame1.locator('#iframeMessage').fill('vishnu vardhan is a decent fellow as well as rude fellow whenever it comes to respect and status');

await frame1.locator('#iframePriority').selectOption('High');

await frame1.locator('.urgent-checkbox').click();

await frame1.locator('#iframeSubmitBtn').click();

await page.close(); 

});
 