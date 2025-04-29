import { DryRun } from '@arch/DryRun';
import LoginFacade from '@facades/LoginFacade';
import ProjectFactory from '@factories/ProjectFactory';
import TaskFactroy from '@factories/TaskFactory';
import UserFactory from '@factories/UserFactory';
import TopPage from '@pages/top/TopPage';
import { test, expect } from '@playwright/test';

test('Register a task', async ({ page }) => {
  const dryRun = DryRun.build();
  // Generate objects used in the scenario
  const topPage = new TopPage({ page, dryRun });
  const loginFacade = new LoginFacade();

  // Generate models used in the scenario
  const admin = UserFactory.createAdmin();
  const demoProject = ProjectFactory.createDemoProject();

  // Log in as an admin user and select the demo project
  const projectPage = await loginFacade.loginToProject(topPage, admin, demoProject);

  const taskInputPage = await projectPage.gotoTaskInputPage();

  const task = TaskFactroy.createRandomTask();
  await taskInputPage.input(task);
});
