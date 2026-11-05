import {test , expect} from '@playwright/test';


test.beforeEach(async({page}) =>{
await  page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});

//TC-01
test('verify Login with valid username and password', async ({page})=> {
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByRole('textbox',{name:'password'}).fill('admin123');
  await  page.getByRole('button',{name:'login'}).click();
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

//TC-02
test('verify login with valid username and invalid password', async ({ page })=> {
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByRole('textbox',{name:'password'}).fill('admin123qw');
  await  page.getByRole('button',{name:'login'}).click();
await expect(page.getByText('Invalid credentials')).toBeVisible();
});

//TC-03
test('verify login with invalid username and valid password', async ({ page })=> {
  await page.getByPlaceholder('Username').fill('Admin12');
  await page.getByRole('textbox',{name:'password'}).fill('admin123');
  await  page.getByRole('button',{name:'login'}).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
}); 

//TC-04
test('verify with invalid username and password', async ({ page })=> {
await page.getByPlaceholder('Username').fill('Admin12');
  await page.getByRole('textbox',{name:'password'}).fill('admin12345');
  await  page.getByRole('button',{name:'login'}).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

//TC-05
test('verify login with empty username and password', async ({ page }) => {
 await page.getByPlaceholder('Username').fill(' ');
  await page.getByRole('textbox',{name:'password'}).fill(' ');
  await  page.getByRole('button',{name:'login'}).click(); 
  await expect(page.getByText('Required').first()).toBeVisible();  
});

//TC-06
test('verify login with special charcaters in username ', async ({ page })=> {
   await page.getByPlaceholder('Username').fill('Admin@#@#');
  await page.getByRole('textbox',{name:'password'}).fill('admin123');
  await  page.getByRole('button',{name:'login'}).click();  
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

//TC-07
test ('verify login with special charcaters in password ', async ({ page })=> {
   await page.getByPlaceholder('Username').fill('Admin');
  await page.getByRole('textbox',{name:'password'}).fill('admin123@#@#');
  await  page.getByRole('button',{name:'login'}).click();   
  await expect(page.getByText('Invalid credentials')).toBeVisible();  
});

//TC=08
test ('verify username with maximum permitted length ', async ({ page })=> {
  await page.getByPlaceholder('Username').fill('A                                     dmin');
  await page.getByRole('textbox',{name:'password'}).fill('admin123');
  await  page.getByRole('button',{name:'login'}).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

//TC-09
test ('verify login with empty username and valid password', async ({page})=> {
 await page.getByPlaceholder('Username').fill('');
  await page.getByRole('textbox',{name:'password'}).fill('admin123');
  await  page.getByRole('button',{name:'login'}).click(); 
  await expect(page.getByText('Required').first()).toBeVisible();
});

//TC-10
test('verify valid username with empty password', async ({ page })=> {
 await page.getByPlaceholder('Username').fill('Admin');
  await page.getByRole('textbox',{name:'password'}).fill('');
  await  page.getByRole('button',{name:'login'}).click();
  await expect(page.getByText('Required').first()).toBeVisible();
});