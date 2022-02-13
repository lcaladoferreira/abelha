import { Injectable } from '@angular/core';
import { connect, map, Observable, Subject, Subscriber } from 'rxjs';
import { WebsocketService } from './websocket.service'
import { environment } from 'src/environments/environment';


export interface Message {

  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public messages: Subject<Message> | undefined

  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<Message> <unknown>wsService;
connect(environment.CHAT_URL)
      map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message
        }
      })



  }
}
