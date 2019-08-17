import LocalStorage from '@/logics/db/LocalStorage';
import Quest from '@/models/entities/Quest';
import moment from 'moment';
import { DateRange } from 'moment-range';
import RandomUtil from '@/utils/RandomUtil';

export default class HistoryApi {
    public static indexName = 'history';

    public static async generateRandomData(num: number) {
        const history = [] as Quest[];
        for (const n of Array(num)) {
            history.push({
                title: `ran_quest_${n}`,
                desc: `randomly generated quest No.${n}`,
                exp: 10 + Math.floor(Math.random() * 20),
                clearTime: RandomUtil.rand(moment().subtract('day', 12).unix(), moment().unix()) * 1000,
            });
        }
        console.log(history);
        LocalStorage.save(this.indexName, history);
    }

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
