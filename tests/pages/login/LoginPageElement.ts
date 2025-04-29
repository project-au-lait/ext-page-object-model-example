import BasePageElement from '@arch/BasePageElement';

export default class LoginPagePageElement extends BasePageElement {
  get pageNameKey() {
    return 'login';
  }

  async inputUserName(userName: string) {
    await this.inputText('#username', userName);
  }

  async inputPassword(password: string) {
    await this.inputText('#password', password);
  }

  async clickLoginButton() {
    await this.click('#login-form input[name="login"]');
  }
}
