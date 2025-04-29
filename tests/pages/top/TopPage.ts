import { Page } from '@playwright/test';
import TopPageElement from './TopPageElement';
import { DryRun } from '@arch/DryRun';
import LoginPage from '@pages/login/LoginPage';
import BasePageElement from '@arch/BasePageElement';
import ProjectPage from '@pages/project/ProjectPage';
import ProjectModel from '@models/ProjectModel';

export default class TopPage {
  private readonly topPageEl: TopPageElement;

  constructor(page: BasePageElement | { page: Page; dryRun: DryRun }) {
    this.topPageEl = new TopPageElement(page);
  }

  async open() {
    await this.topPageEl.open();
    return new LoginPage(this.topPageEl);
  }

  async selectProject(project: ProjectModel) {
    await this.topPageEl.clickProjectMenu();
    await this.topPageEl.clickProject(project.id);
    return new ProjectPage(this.topPageEl);
  }
}
