import LocalStorage from '@/logics/db/LocalStorage';
import Quest from '@/models/entities/Quest';
import UserApi from '@/logics/api/UserApi';

export default class QuestApi {
    public static indexName = 'history';

    public static questData: Quest[] = [
        {
            id: 0,
            title: 'コンビニに行こう',
            desc: '変装して、近くのコンビニに行ってみよう！',
            exp: 300,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://dol.ismcdn.jp/mwimgs/c/f/670m/img_cf4ca8958b42d0d89dd6946891527290145614.jpg',
        },
        {
            id: 1,
            title: 'イヤホンを外してコンビニに行こう',
            desc: 'イヤホンを外してコンビニに行ってみよう！',
            exp: 300,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://dol.ismcdn.jp/mwimgs/c/f/670m/img_cf4ca8958b42d0d89dd6946891527290145614.jpg',
        },
        {
            id: 2,
            title: 'マスクを外してコンビニに行こう',
            desc: 'マスクを外してコンビニに行ってみよう！',
            exp: 300,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://dol.ismcdn.jp/mwimgs/c/f/670m/img_cf4ca8958b42d0d89dd6946891527290145614.jpg',
        },
        {
            id: 3,
            title: 'サングラスを外してコンビニに行こう',
            desc: '4',
            exp: 300,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://dol.ismcdn.jp/mwimgs/c/f/670m/img_cf4ca8958b42d0d89dd6946891527290145614.jpg',
        },
        // TODO: SRCは最後にまとめてやる
        {
            id: 4,
            title: '図書館に行こう',
            desc: '変装して、近くの図書館に行ってみよう！',
            exp: 300,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://tk.ismcdn.jp/mwimgs/4/2/1140/img_4290c3dbc2b3bca5794438f2a3504431658251.jpg',
        },
        {
            id: 5,
            title: 'イヤホンを外して図書館に行こう',
            desc: 'イヤホンを外して近くの図書館に行ってみよう！',
            exp: 200,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://tk.ismcdn.jp/mwimgs/4/2/1140/img_4290c3dbc2b3bca5794438f2a3504431658251.jpg',
        },
        {
            id: 6,
            title: 'マスクを外して図書館に行こう',
            desc: 'マスクを外して図書館に行ってみよう！',
            exp: 300,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://tk.ismcdn.jp/mwimgs/4/2/1140/img_4290c3dbc2b3bca5794438f2a3504431658251.jpg',
        },
        {
            id: 7,
            title: 'サングラスを外して図書館に行こう',
            desc: 'サングラスを外して図書館に行ってみよう！',
            exp: 300,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://tk.ismcdn.jp/mwimgs/4/2/1140/img_4290c3dbc2b3bca5794438f2a3504431658251.jpg',
        },
        {
            id: 8,
            title: 'ドン・キホーテに行こう',
            desc: '変装して、近くのドン・キホーテに行ってみよう！',
            exp: 200,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://www.donki.com/shared/img/store/st_store/462/2017112715117501000.jpg',
        },
        {
            id: 9,
            title: 'イヤホンを外してドン・キホーテに行こう',
            desc: 'イヤホンを外して近くのドン・キホーテに行ってみよう！',
            exp: 1000,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://www.donki.com/shared/img/store/st_store/462/2017112715117501000.jpg',
        },
        {
            id: 10,
            title: 'マスクを外してドン・キホーテに行こう',
            desc: 'マスクを外してドン・キホーテに行ってみよう！',
            exp: 200,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://www.donki.com/shared/img/store/st_store/462/2017112715117501000.jpg',
        },
        {
            id: 11,
            title: 'サングラスを外してドン・キホーテに行こう',
            desc: 'サングラスを外してドン・キホーテに行ってみよう！',
            exp: 400,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://www.donki.com/shared/img/store/st_store/462/2017112715117501000.jpg',
        },
        {
            id: 12,
            title: 'マクドナルドに行こう',
            desc: '変装して、近くのマクドナルドに行ってみよう！',
            exp: 300,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://www.mag2.com/p/news/wp-content/uploads/2018/05/29178827_1594807010617948_7061752788195213312_o-650x401.jpg',
        },
        {
            id: 13,
            title: 'イヤホンを外してマクドナルドに行こう',
            desc: 'イヤホンを外して近くのマクドナルドに行ってみよう！',
            exp: 100,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://www.mag2.com/p/news/wp-content/uploads/2018/05/29178827_1594807010617948_7061752788195213312_o-650x401.jpg',
        },
        {
            id: 14,
            title: 'マスクを外してマクドナルドに行こう',
            desc: 'マスクを外してマクドナルドに行ってみよう！',
            exp: 500,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://www.mag2.com/p/news/wp-content/uploads/2018/05/29178827_1594807010617948_7061752788195213312_o-650x401.jpg',
        },
        {
            id: 15,
            title: 'サングラスを外してマクドナルドに行こう',
            desc: 'サングラスを外してマクドナルドに行ってみよう！',
            exp: 300,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://www.mag2.com/p/news/wp-content/uploads/2018/05/29178827_1594807010617948_7061752788195213312_o-650x401.jpg',
        },
        {
            id: 16,
            title: 'サーティワンに行こう',
            desc: '変装して、近くのサーティワンに行ってみよう！',
            exp: 300,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'http://aeon-nagahama-sc.com/uploads/Store/img_06.jpg',
        },
        {
            id: 17,
            title: 'イヤホンを外してサーティワンに行こう',
            desc: 'イヤホンを外して近くのサーティワンに行ってみよう！',
            exp: 300,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'http://aeon-nagahama-sc.com/uploads/Store/img_06.jpg',
        },
        {
            id: 18,
            title: 'マスクを外してサーティワンに行こう',
            desc: 'マスクを外してサーティワンに行ってみよう！',
            exp: 270,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'http://aeon-nagahama-sc.com/uploads/Store/img_06.jpg',
        },
        {
            id: 19,
            title: 'サングラスを外してサーティワンに行こう',
            desc: 'サングラスを外してサーティワンに行ってみよう！',
            exp: 400,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'http://aeon-nagahama-sc.com/uploads/Store/img_06.jpg',
        },
        {
            id: 20,
            title: '本屋に行こう',
            desc: '変装して、近くの本屋に行ってみよう！',
            exp: 300,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2Flocal-experts-mexico-city-best-bookstores.jpg%3Fitok%3DUzpnVkXM&w=400&c=sc&poi=face&q=85https://dol.ismcdn.jp/mwimgs/5/2/670m/img_527ad27acbb52cd02f27121160d5ee7d766308.jpg',
        },
        {
            id: 21,
            title: 'イヤホンを外して本屋に行こう',
            desc: 'イヤホンを外して近くの本屋に行ってみよう！',
            exp: 600,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2Flocal-experts-mexico-city-best-bookstores.jpg%3Fitok%3DUzpnVkXM&w=400&c=sc&poi=face&q=85https://dol.ismcdn.jp/mwimgs/5/2/670m/img_527ad27acbb52cd02f27121160d5ee7d766308.jpg',
        },
        {
            id: 22,
            title: 'マスクを外して本屋に行こう',
            desc: 'マスクを外して本屋に行ってみよう！',
            exp: 200,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2Flocal-experts-mexico-city-best-bookstores.jpg%3Fitok%3DUzpnVkXM&w=400&c=sc&poi=face&q=85https://dol.ismcdn.jp/mwimgs/5/2/670m/img_527ad27acbb52cd02f27121160d5ee7d766308.jpg',
        },
        {
            id: 23,
            title: 'サングラスを外して本屋に行こう',
            desc: 'サングラスを外して本屋に行ってみよう！',
            exp: 400,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2Flocal-experts-mexico-city-best-bookstores.jpg%3Fitok%3DUzpnVkXM&w=400&c=sc&poi=face&q=85https://dol.ismcdn.jp/mwimgs/5/2/670m/img_527ad27acbb52cd02f27121160d5ee7d766308.jpg',
        },
        {
            id: 24,
            title: '学校に行こう',
            desc: '変装して、近くの学校に行ってみよう！',
            exp: 300,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://dol.ismcdn.jp/mwimgs/5/2/670m/img_527ad27acbb52cd02f27121160d5ee7d766308.jpg',
        },
        {
            id: 25,
            title: 'イヤホンを外して学校に行こう',
            desc: 'イヤホンを外して近くの学校に行ってみよう！',
            exp: 500,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://dol.ismcdn.jp/mwimgs/5/2/670m/img_527ad27acbb52cd02f27121160d5ee7d766308.jpg',
        },
        {
            id: 26,
            title: 'マスクを外して学校に行こう',
            desc: 'マスクを外して学校に行ってみよう！',
            exp: 500,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://dol.ismcdn.jp/mwimgs/5/2/670m/img_527ad27acbb52cd02f27121160d5ee7d766308.jpg',
        },
        {
            id: 27,
            title: 'サングラスを外して学校に行こう',
            desc: 'サングラスを外して学校に行ってみよう！',
            exp: 500,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://dol.ismcdn.jp/mwimgs/5/2/670m/img_527ad27acbb52cd02f27121160d5ee7d766308.jpg',
        },
    ];
    // deprecated
    public static async getAllQuests() {
        const quests = LocalStorage.load(this.indexName) as Quest[];
        return quests;
    }

    // deprecated
    public static async getQuest(id: number) {
        const quests = await this.getAllQuests();
        // TODO: idで取得する
        const quest = quests[0];
        return quest;
    }

    // deprecated
    public static async putQuest(quest: Quest) {
        const quests = await this.getAllQuests();
        quests.push(quest);
        LocalStorage.save(this.indexName, quests);
    }

    public static getAvailableQuests() {
        const doneQuests = LocalStorage.load(this.indexName) as Quest[] || [];
        const allQuests = this.questData;

        const diffQuest = allQuests.filter((doneQuest) => {
            return doneQuests.every((allQuest) => {
                return doneQuest.id !== allQuest.id;
            });
        });
        return diffQuest;
    }

    public static getAllAvailableQuests() {
        const quests = this.getAvailableQuests();
        return quests;
    }

    public static getAvailableQuestsByLevel(level: number) {
        const quests = this.getAvailableQuests();

        const result = quests.filter((e) => {
            return e.level === level;
        });
        return result;
    }

    public static async giveExpToUser(exp: number) {
        const user = await UserApi.getUser();
        if (!user) {
            throw new Error('No User Found');
        }
        user.exp += exp;
        await UserApi.putUser(user);
    }

    public static async transferQuestsToHistory(questId: number) {
        const doneQuests = LocalStorage.load(this.indexName) as Quest[] || [];
        const allQuests = this.questData;

        const deletingQuest = allQuests.filter((e) => {
            return e.id === questId;
        })[0];

        this.giveExpToUser(deletingQuest.exp);
        doneQuests.push(deletingQuest);
        LocalStorage.save(this.indexName, doneQuests);
    }

    protected constructor() {}
}
