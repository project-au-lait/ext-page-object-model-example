import BasePageElement from '@arch/BasePageElement';
import ProjectPageElement from './ProjectPageElement';
import TaskInputPage from '@pages/task-input/TaskInputPage';

export default class ProjectPage {
  private readonly projectPageEl: ProjectPageElement;

  constructor(page: BasePageElement) {
    this.projectPageEl = new ProjectPageElement(page);
  }

  async gotoWorkPackages() {
    await this.projectPageEl.clickWorkPackages();
  }

  async gotoTaskInputPage() {
    await this.projectPageEl.clickCreateButton();
    await this.projectPageEl.clickTask();
    return new TaskInputPage(this.projectPageEl);
  }
}
