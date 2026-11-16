import {test , expect} from '@playwright/test';
test('Handling Multiple checkboxes', async ({page})=>{

await page.goto('https://www.bing.com/account/general?ru');
const checkboxes = await page.getByRole('checkbox');

for(const checkbox of await checkboxes.all())
{
await checkbox.uncheck();
await expect(checkbox).not.toBeChecked();
}
});