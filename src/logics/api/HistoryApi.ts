import LocalStorage from '@/logics/db/LocalStorage';
import Quest from '@/models/entities/Quest';
import moment from 'moment';
import { DateRange } from 'moment-range';

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
        history.sort((a, b) => {
            if (a.clearTime < b.clearTime) {
                return 1;
            } else if (a.clearTime > b.clearTime) {
                return -1;
            }
            return 0;
        });
        LocalStorage.save(this.indexName, history);
    }

    public static async statisticsWeeklyScore() {
        const history = await this.getHistory();
        const weekly = [0, 0, 0, 0, 0, 0, 0];
        const range = new DateRange(moment().subtract('day', 8), moment().subtract('day', 1));
        for (const quest of history) {
            const day = moment(quest.clearTime);
            if (!range.contains(day)) {
                continue;
            }
            weekly[day.weekday()]++;
        }

        return weekly;
    }
}
