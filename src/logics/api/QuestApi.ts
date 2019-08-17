import LocalStorage from '@/logics/db/LocalStorage';
import Quest from '@/models/entities/Quest';

export default class QuestApi {
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
