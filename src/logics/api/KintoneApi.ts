import axios from 'axios';

export default class KintoneApi {
    public static async postMessage(date: string, message: string) {
        await axios.post('http://localhost:8080/message', {
            date,
            message,
        });
    }
}
