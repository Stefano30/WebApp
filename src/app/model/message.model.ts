export abstract class Message {
    constructor(
        public session: string,
        public text: string,
        public options: string[]) {
    }
}
