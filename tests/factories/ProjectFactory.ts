import ProjectModel from '@models/ProjectModel';

export default class ProjectFactory {
  static createDemoProject() {
    return {
      id: 1,
      name: 'Demo Project'
    } as ProjectModel;
  }
}
