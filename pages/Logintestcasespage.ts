

import { Page, Locator } from '@playwright/test';

export class LoginPage {

  private username: Locator;
  private password: Locator;
  private loginButton: Locator;

  constructor(private page: Page) {

    this.username = this.page.getByPlaceholder('Username');

    this.password = this.page.getByRole('textbox', { name: 'password' });

    this.loginButton = this.page.getByRole('button', { name: 'login' });

  }

  async login(username: string, password: string) {

    await this.username.fill(username);

    await this.password.fill(password);

    await this.loginButton.click();

  }

}
