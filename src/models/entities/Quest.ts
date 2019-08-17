export default interface Quest {
    id: number;
    title: string;
    desc: string;
    exp: number;
    level: number;
    src: string;
    /** DATE TIME */
    clearTime: number;
}
