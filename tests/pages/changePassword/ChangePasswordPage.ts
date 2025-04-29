import BasePageElement from '@arch/BasePageElement';
import ChangePasswordPageElement from './ChangePasswordPageElement';

export default class ChangePasswordPage {
  private readonly changePasswordPageEl: ChangePasswordPageElement;

  constructor(page: BasePageElement) {
    this.changePasswordPageEl = new ChangePasswordPageElement(page);
  }

  async changePassword(currentPassword: string, newPassword: string, confirmPassword: string) {
    await this.changePasswordPageEl.inputCurrentPassword(currentPassword);
    await this.changePasswordPageEl.inputNewPassword(newPassword);
    await this.changePasswordPageEl.inputConfirmPassword(confirmPassword);
    await this.changePasswordPageEl.clickSaveButton();
  }

  async expectSuccessfullyChanged() {
    await this.changePasswordPageEl.expectSuccessfullyChanged();
  }
}
