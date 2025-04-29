import BasePageElement from '@arch/BasePageElement';
import TaskInputPageElement from './TaskInputPageElement';
import { TaskModel } from '@models/TaskModel';

export default class TaskInputPage {
  private readonly taskInputPageEl: TaskInputPageElement;

  constructor(page: BasePageElement) {
    this.taskInputPageEl = new TaskInputPageElement(page);
  }

  async input(task: TaskModel) {
    await this.taskInputPageEl.inputSubject(task.subject);
    await this.taskInputPageEl.selectPriority(task.priority);

    // :

    await this.taskInputPageEl.clickSaveButton();
  }
}
