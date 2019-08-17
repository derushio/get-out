import JSONUtil from '@/utils/JSONUtil';

export default class LocalStorage {
    public static save(name: string, data: any) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    public static load(name: string): any {
        return JSONUtil.tryParse(localStorage.getItem(name)!);
    }

    protected constructor() {}
}
