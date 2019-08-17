import LocalStorage from '@/logics/db/LocalStorage';
import User from '@/models/entities/User';

export default class UserApi {
    public static async getUser() {
        const user = LocalStorage.load('user');
        return user as User;
    }

    public static async putUser(user: User) {
        LocalStorage.save('user', user);
    }

    protected constructor() {}
}
