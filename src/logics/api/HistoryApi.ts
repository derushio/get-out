import LocalStorage from '@/logics/db/LocalStorage';
import Quest from '@/models/entities/Quest';

export default class HistoryApi {
    public static indexName = 'histrory';

    public static async getHistory() {
        const history = LocalStorage.load(this.indexName) as Quest[];
        return history;
    }

    public static async addQuest(quest: Quest) {
        const history = await this.getHistory();
        history.push(quest);
        // TODO: ソートしたい

        LocalStorage.save(this.indexName, history);
    }

    protected constructor() {}
}
