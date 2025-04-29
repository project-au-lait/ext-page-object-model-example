import BasePageElement from '@arch/BasePageElement';

export default class ChangePasswordPageElement extends BasePageElement {
  get pageNameKey(): string {
    return 'changePassword';
  }

  async inputCurrentPassword(currentPassword: string) {
    await this.inputText('#password', currentPassword);
  }

  async inputNewPassword(newPassword: string) {
    await this.inputText('#new_password', newPassword);
  }

  async inputConfirmPassword(confirmPassword: string) {
    await this.inputText('#new_password_confirmation', confirmPassword);
  }

  async clickSaveButton() {
    await this.click('button[name="button"]');
  }

  async expectSuccessfullyChanged() {
    await this.expectFlashMessage(
      'Password was successfully updated. All other sessions tied to your account have been invalidated.'
    );
  }
}
