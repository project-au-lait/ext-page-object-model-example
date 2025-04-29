import BasePageElement from '@arch/BasePageElement';

export default class ProjectPageElement extends BasePageElement {
  get pageNameKey() {
    return 'project';
  }

  async clickWorkPackages() {
    await this.click('#main-menu-work-packages');
  }

  async clickCreateButton() {
    await this.click('div.wp-create-button > button');
  }

  async clickTask() {
    await this.click('a[aria-label="Task"]');
  }
}
