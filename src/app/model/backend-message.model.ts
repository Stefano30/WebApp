import { InboxMessage } from './inbox-message.model';

export class BackendMessage {
    constructor(
        public sessionID: string,
        public text: string,
        public options: string[]) {
    }

    toInboxMessage(): InboxMessage {
        return new InboxMessage(this.sessionID, this.text, this.options);
    }
}
