import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OutboxMessage } from './model/outbox-message.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackendMessage } from './model/backend-message.model';
import { InboxMessage } from './model/inbox-message.model';
import { SERVER_URL } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getSessionID() : Observable<InboxMessage> {
    return this.http.get<BackendMessage>(SERVER_URL + "start").pipe(
      map(data => new InboxMessage(data.sessionID, data.text, data.options)));
  }

  sendMessage(message: OutboxMessage) : Observable<InboxMessage> {
    return this.http.post<BackendMessage>(SERVER_URL + "request", message.toBackendMessage()).pipe(
      map(data => new InboxMessage(data.sessionID, data.text, data.options)));
  }

  destroySession(sessionID: string) {
    let xhr = new XMLHttpRequest()
    xhr.open("DELETE",
      SERVER_URL + "close/" + sessionID,
      false);
    xhr.send();
  }

}
