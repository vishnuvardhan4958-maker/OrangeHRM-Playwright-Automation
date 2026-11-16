import {test, expect} from '@playwright/test';

test('customdropdowns', async ({page})=> {
  await page.goto('https://getbootstrap.com/docs/5.3/components/dropdowns/');

  await page.getByRole('button', { name: 'Dropdown button' }).click();
  await page.getByRole('link', { name: 'Another action' }).click();

  await expect(page).toHaveURL(/.*dropdowns/);
  await page.close();
});
