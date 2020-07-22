import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../model/message.model';
import { InboxMessage } from 'src/app/model/inbox-message.model';
import { OutboxMessage } from 'src/app/model/outbox-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss'],
})
export class MessageViewComponent implements OnInit {

  @Input() message: Message;
  @Output() onKeywordClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public isInbox() {
    return this.message instanceof InboxMessage;
  }

  onChipClicked(option: string) {
    this.onKeywordClicked.emit(option);
  }

  isMessageSending() {
    return this.message instanceof OutboxMessage && (this.message as OutboxMessage).sent == false;
  }
}
