import StringUtils from '@arch/StringUtils';
import { TaskModel } from '@models/TaskModel';

export default class TaskFactroy {
  static createRandomTask() {
    return {
      id: 1,
      subject: `Test Subject ${StringUtils.generateRandomString()}`,
      priority: 'High'
    } as TaskModel;
  }
}
