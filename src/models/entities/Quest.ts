export default interface Quest {
    title: string;
    desc: string;
    exp: number;
    satisfyLevel: number;
    src: string;
    /** DATE TIME */
    clearTime: number;
}
