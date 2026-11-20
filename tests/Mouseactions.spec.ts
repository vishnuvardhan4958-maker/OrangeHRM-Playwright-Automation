import {test , expect } from '@playwright/test';
test('perform mouse actions' , async ({page})=>{

await page.goto('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick');
await page.pause();

//dblclick event 
const frame1=await page.frameLocator('#iframeResult');
//await frame1.getByText('Double-click this paragraph to trigger a function.').dblclick();

//rightclick event
await frame1.getByText('Double-click this paragraph to trigger a function.').click({button: 'right'});
});





