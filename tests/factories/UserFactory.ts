import { UserModel } from '@models/UserModel';

export default class UserFactory {
  static createDefaultAdmin() {
    return {
      username: 'admin',
      password: 'admin'
    } as UserModel;
  }

  static createAdmin() {
    return {
      username: 'admin',
      password: 'newadminpass'
    } as UserModel;
  }
}
