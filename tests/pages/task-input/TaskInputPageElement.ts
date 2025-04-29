import BasePageElement from '@arch/BasePageElement';

export default class TaskInputPageElement extends BasePageElement {
  get pageNameKey() {
    return 'task-input';
  }

  async inputSubject(subject: string) {
    await this.inputText('#wp-new-inline-edit--field-subject', subject);
  }

  async selectPriority(priority: string) {
    await this.select('#wp-new-inline-edit--field-priority', priority);
  }

  async clickSaveButton() {
    await this.click('#work-packages--edit-actions-save');
  }
}
