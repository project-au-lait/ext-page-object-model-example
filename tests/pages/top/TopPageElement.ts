import BasePageElement from '@arch/BasePageElement';

export default class TopPageElement extends BasePageElement {
  get pageNameKey() {
    return 'top';
  }

  async open() {
    await super.open('/');
  }

  async clickProjectMenu() {
    await this.click('#projects-menu');
  }

  async clickProject(projectId: number) {
    await this.click(`a[data-project-id="${projectId}"]`);
  }
}
