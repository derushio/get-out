import LocalStorage from '@/logics/db/LocalStorage';
import User from '@/models/entities/User';

export default class UserApi {
    public static indexName = 'user';

    public static async getUser(id: number) {
        const user = LocalStorage.load(this.indexName) as User;
        return user;
    }

    public static async putUser(user: User) {
        LocalStorage.save(this.indexName, user);
    }

    protected constructor() {}
}
