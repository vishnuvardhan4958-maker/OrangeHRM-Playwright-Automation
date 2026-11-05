import {test , expect} from '@playwright/test'
test('verify Login Page', async({page})=> {

  //login page
  await  page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByRole('textbox',{name:'password'}).fill('admin123');
  await page.getByRole('button',{name:'login'}).click();

  //search
  await page.getByPlaceholder('Search').click();

  //Admin 
  //await page.getByText('Admin',{exact:true}).click();
  await page.getByRole('link', { name: 'Admin' }).click();

  await expect(page).toHaveURL(/admin\/viewAdminModule/);

  //username
  await page.locator('.oxd-input').first().fill('vishnu');
 // await page .getByRole('textbox',{name:'username'}).fill('vishnu');

  //user role
  await page.locator('oxd-input oxd-input--active').click();
  await page.getByText('Admin',{exact:true}).click();
  await page.getByText('ESS',{exact:true}).click();

  //Employee name
  await page.getByPlaceholder('Employee Name').fill('vardhan doppa');

  //status
  await page.locator('oxd-select-text-input').click();
  await page.getByText('Enabled',{exact:true}).click();
  await page.getByText('Disabled',{exact:true}).click();

  
// Select Job Titles
await page.getByText('Job', { exact: true }).click();
await page.getByText('Job Titles', { exact: true }).click();

//  Select Pay Grades
await page.getByText('Job', { exact: true }).click();
await page.getByText('Pay Grades', { exact: true }).click();

// Select Employment Status
await page.getByText('Job', { exact: true }).click();
await page.getByText('Employment Status', { exact: true }).click();

// Select Job Categories
await page.getByText('Job', { exact: true }).click();
await page.getByText('Job Categories', { exact: true }).click();

// Select Work Shifts
await page.getByText('Job', { exact: true }).click();
await page.getByText('Work Shifts', { exact: true }).click();

}); 
