import { DryRun } from '@arch/DryRun';
import UserFactory from '@factories/UserFactory';
import TopPage from '@pages/top/TopPage';
import { test, expect } from '@playwright/test';

test('First Login', async ({ page }) => {
  const dryRun = DryRun.build();
  const topPage = new TopPage({ page, dryRun });
  const defaultAdmin = UserFactory.createDefaultAdmin();

  const loginPage = await topPage.open();
  const changePasswordPage = await loginPage.firstLogin(defaultAdmin);

  const admin = UserFactory.createAdmin();

  await changePasswordPage.changePassword(defaultAdmin.password, admin.password, admin.password);
  await changePasswordPage.expectSuccessfullyChanged();
});
