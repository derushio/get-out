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
            src: 'https://images.unsplash.com/photo-1484813047368-3a2883981427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 1,
            title: 'イヤホンを外してコンビニに行こう',
            desc: 'イヤホンを外してコンビニに行ってみよう！',
            exp: 300,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 2,
            title: 'マスクを外してコンビニに行こう',
            desc: 'マスクを外してコンビニに行ってみよう！',
            exp: 300,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1564933031273-7ed87369d6f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 3,
            title: 'サングラスを外してコンビニに行こう',
            desc: '4',
            exp: 300,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
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
            src: 'https://images.unsplash.com/photo-1497470674350-dad852ead0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        },
        {
            id: 5,
            title: 'イヤホンを外して図書館に行こう',
            desc: 'イヤホンを外して近くの図書館に行ってみよう！',
            exp: 200,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 6,
            title: 'マスクを外して図書館に行こう',
            desc: 'マスクを外して図書館に行ってみよう！',
            exp: 300,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 7,
            title: 'サングラスを外して図書館に行こう',
            desc: 'サングラスを外して図書館に行ってみよう！',
            exp: 300,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1533483595632-c5f0e57a1936?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 8,
            title: 'ドン・キホーテに行こう',
            desc: '変装して、近くのドン・キホーテに行ってみよう！',
            exp: 200,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1484813047368-3a2883981427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 9,
            title: 'イヤホンを外してドン・キホーテに行こう',
            desc: 'イヤホンを外して近くのドン・キホーテに行ってみよう！',
            exp: 1000,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 10,
            title: 'マスクを外してドン・キホーテに行こう',
            desc: 'マスクを外してドン・キホーテに行ってみよう！',
            exp: 200,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 11,
            title: 'サングラスを外してドン・キホーテに行こう',
            desc: 'サングラスを外してドン・キホーテに行ってみよう！',
            exp: 400,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 12,
            title: 'マクドナルドに行こう',
            desc: '変装して、近くのマクドナルドに行ってみよう！',
            exp: 300,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1484813047368-3a2883981427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 13,
            title: 'イヤホンを外してマクドナルドに行こう',
            desc: 'イヤホンを外して近くのマクドナルドに行ってみよう！',
            exp: 100,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 14,
            title: 'マスクを外してマクドナルドに行こう',
            desc: 'マスクを外してマクドナルドに行ってみよう！',
            exp: 500,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 15,
            title: 'サングラスを外してマクドナルドに行こう',
            desc: 'サングラスを外してマクドナルドに行ってみよう！',
            exp: 300,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 16,
            title: 'サーティワンに行こう',
            desc: '変装して、近くのサーティワンに行ってみよう！',
            exp: 300,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1484813047368-3a2883981427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 17,
            title: 'イヤホンを外してサーティワンに行こう',
            desc: 'イヤホンを外して近くのサーティワンに行ってみよう！',
            exp: 300,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 18,
            title: 'マスクを外してサーティワンに行こう',
            desc: 'マスクを外してサーティワンに行ってみよう！',
            exp: 270,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 19,
            title: 'サングラスを外してサーティワンに行こう',
            desc: 'サングラスを外してサーティワンに行ってみよう！',
            exp: 400,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 20,
            title: '本屋に行こう',
            desc: '変装して、近くの本屋に行ってみよう！',
            exp: 300,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1484813047368-3a2883981427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 21,
            title: 'イヤホンを外して本屋に行こう',
            desc: 'イヤホンを外して近くの本屋に行ってみよう！',
            exp: 600,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 22,
            title: 'マスクを外して本屋に行こう',
            desc: 'マスクを外して本屋に行ってみよう！',
            exp: 200,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 23,
            title: 'サングラスを外して本屋に行こう',
            desc: 'サングラスを外して本屋に行ってみよう！',
            exp: 400,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 24,
            title: '学校に行こう',
            desc: '変装して、近くの学校に行ってみよう！',
            exp: 300,
            level: 1,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1484813047368-3a2883981427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 25,
            title: 'イヤホンを外して学校に行こう',
            desc: 'イヤホンを外して近くの学校に行ってみよう！',
            exp: 500,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 26,
            title: 'マスクを外して学校に行こう',
            desc: 'マスクを外して学校に行ってみよう！',
            exp: 500,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 27,
            title: 'サングラスを外して学校に行こう',
            desc: 'サングラスを外して学校に行ってみよう！',
            exp: 500,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
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
