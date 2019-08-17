import LocalStorage from '@/logics/db/LocalStorage';
import Quest from '@/models/entities/Quest';
import moment from 'moment';
import { DateRange } from 'moment-range';
import RandomUtil from '@/utils/RandomUtil';

export default class HistoryApi {
    public static indexName = 'history';

    public static async generateRandomData(num: number) {
        const history = [] as Quest[];
        for (const n of [ ...Array(num).keys() ]) {
            history.push({
                id: n,
                title: `ランダムクエスト${n}番`,
                desc: `randomly generated quest No.${n}`,
                exp: 10 + Math.floor(Math.random() * 20),
                level: 3,
                // TODO: これはダミーデータ
                clearTime: RandomUtil.rand(moment().add(-12, 'day').unix(), moment().unix()) * 1000,
                // tslint:disable-next-line: max-line-length
                src: 'https://images.unsplash.com/photo-1484813047368-3a2883981427?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                // TODO: これはダミーデータ
            });
        }
        this.sort(history);
        LocalStorage.save(this.indexName, history);
    }

    public static async getHistory() {
        const history = LocalStorage.load(this.indexName) as Quest[];
        return history;
    }

    public static async addFinishedQuestToDatabase(quest: Quest) {
        const history = await this.getHistory();
        history.push(quest);
        this.sort(history);
        LocalStorage.save(this.indexName, history);
    }

    public static async statisticsWeeklyScore() {
        const history = await this.getHistory();
        const weekly = [0, 0, 0, 0, 0, 0, 0];
        const range = new DateRange(moment().add(-8, 'day'), moment().add(-1, 'day'));
        for (const quest of history) {
            const day = moment(quest.clearTime);
            if (!range.contains(day)) {
                continue;
            }
            weekly[day.weekday()]++;
        }

        return weekly;
    }

    protected static sort(data: Quest[]){
        data.sort((a, b) => {
            if (a.clearTime < b.clearTime) {
                return 1;
            } else if (a.clearTime > b.clearTime) {
                return -1;
            }
            return 0;
        });
    }
}
