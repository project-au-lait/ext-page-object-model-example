import ProjectModel from '@models/ProjectModel';
import { UserModel } from '@models/UserModel';
import TopPage from '@pages/top/TopPage';

export default class LoginFacade {
  async loginToProject(topPage: TopPage, user: UserModel, project: ProjectModel) {
    const loginPage = await topPage.open();
    await loginPage.login(user);

    const projectPage = await topPage.selectProject(project);
    projectPage.gotoWorkPackages();

    return projectPage;
  }
}
