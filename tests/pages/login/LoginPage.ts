import ChangePasswordPage from '@pages/changePassword/ChangePasswordPage';
import LoginPageElement from './LoginPageElement';
import BasePageElement from '@arch/BasePageElement';
import TopPage from '@pages/top/TopPage';
import { UserModel } from '@models/UserModel';

export default class LoginPage {
  private readonly loginPageEl: LoginPageElement;

  constructor(page: BasePageElement) {
    this.loginPageEl = new LoginPageElement(page);
  }

  async login(user: UserModel) {
    await this.loginPageEl.inputUserName(user.username);
    await this.loginPageEl.inputPassword(user.password);
    await this.loginPageEl.clickLoginButton();
    return new TopPage(this.loginPageEl);
  }

  async firstLogin(user: UserModel) {
    await this.login(user);
    return new ChangePasswordPage(this.loginPageEl);
  }
}
