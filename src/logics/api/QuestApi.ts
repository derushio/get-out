import LocalStorage from '@/logics/db/LocalStorage';
import Quest from '@/models/entities/Quest';

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
            exp: 1000,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 2,
            title: 'マスクを外してコンビニに行こう',
            desc: 'マスクを外してコンビニに行ってみよう！',
            exp: 2000,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1564933031273-7ed87369d6f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 3,
            title: 'サングラスを外してコンビニに行こう',
            desc: '4',
            exp: 4000,
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
            src: 'https://images.unsplash.com/photo-1484813047368-3a2883981427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 5,
            title: 'イヤホンを外して図書館に行こう',
            desc: 'イヤホンを外して近くの図書館に行ってみよう！',
            exp: 1000,
            level: 2,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 6,
            title: 'マスクを外して図書館に行こう',
            desc: 'マスクを外して図書館に行ってみよう！',
            exp: 2000,
            level: 3,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 7,
            title: 'サングラスを外して図書館に行こう',
            desc: 'サングラスを外して図書館に行ってみよう！',
            exp: 4000,
            level: 4,
            clearTime: 5423543532,
            // tslint:disable-next-line: max-line-length
            src: 'https://images.unsplash.com/photo-1505554898845-050c97a90ad6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        // TODO:
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
        const doneQuests = LocalStorage.load(this.indexName) as Quest[];
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

    public static async transferQuestsToHistory(questId: number) {
        const doneQuests = LocalStorage.load(this.indexName) as Quest[];
        const allQuests = this.questData;

        const deletingQuest = allQuests.filter((e) => {
            return e.id === questId;
        })[0];

        doneQuests.push(deletingQuest);
        LocalStorage.save(this.indexName, doneQuests);
    }

    protected constructor() {}
}
