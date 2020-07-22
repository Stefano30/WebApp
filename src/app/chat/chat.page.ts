import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Message } from '../model/message.model';
import { OutboxMessage } from '../model/outbox-message.model';
import { BackendService } from '../backend.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild('mainContent') private mainContent: any;

  messages: Message[] = [];
  newMessage: string = "";
  private sessionID: string = "";
  

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.initChat();
  }

  onNewMessage(): Subscription {
    const msg = this.newMessage;
    this.newMessage = "";
    return this.sendMessage(msg);
  }

  sendMessage(message: string): Subscription {
    const msg = new OutboxMessage(this.sessionID, message, null);
    this.messages.push(msg);
    this.mainContent.scrollToBottom(300);

    return this.backend.sendMessage(msg).subscribe(response => {
      msg.sent = true;
      this.messages.push(response);
      this.mainContent.scrollToBottom(300);
    });
  }

  onKeyPressed(keyCode) {
    if(keyCode === 13)
      this.onNewMessage();
  }

  private initChat(): Subscription {
    return this.backend.getSessionID().subscribe(message => {
      this.messages.push(message);
      this.mainContent.scrollToBottom(300);
      this.sessionID = message.session;
    });
  }

  onKeywordClicked(option) {
    this.sendMessage(option);
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.backend.destroySession(this.sessionID);
    this.sessionID = null;
}

}
