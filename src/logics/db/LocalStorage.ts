import JSONUtil from '@/utils/JSONUtil';

export default class LocalStorage {
    protected static save(name: string, data: any) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    protected static load(name: string): any {
        return JSONUtil.tryParse(localStorage.getItem(name)!);
    }

    protected constructor() {}
}
