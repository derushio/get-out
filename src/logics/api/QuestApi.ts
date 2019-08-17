import LocalStorage from '@/logics/db/LocalStorage';
import Quest from '@/models/entities/Quest';

export default class QuestApi {

    private static questData: Quest[] = [
        {
            title: 'コンビニに行こう',
            desc: '変装して、近くのコンビニに行ってみよう！',
            exp: 300,
            satisfyLevel: 1,
            clearTime: 5423543532,
            src: '',
        },
    ];

    public static async getAllQuests() {
        const quests = LocalStorage.load('quests') as Quest[];
        return quests;
    }

    public static async getQuest(id: number) {
        const quests = await this.getAllQuests();
        // TODO: idで取得する
        const quest = quests[0];
        return quest;
    }

    public static async putQuest(quest: Quest) {
        const quests = await this.getAllQuests();
        quests.push(quest);
        LocalStorage.save('quests', quests);
    }

    protected constructor() {}
}
