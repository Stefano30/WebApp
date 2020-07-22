import { Message } from './message.model';
import { BackendMessage } from './backend-message.model';

export class OutboxMessage extends Message {

    public sent: boolean = false;

    constructor(
        session: string,
        text: string,
        options: string[]) {
            super(session, text, options);
            this.sent = false;
    }

    toBackendMessage(): BackendMessage {
        return new BackendMessage(this.session, this.text, this.options);
    }
}
