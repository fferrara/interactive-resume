import { Injectable } from '@angular/core';
import {WebSocketService} from "../services/web-socket.service";
import {Observable, Subject} from "rxjs";

@Injectable()
export class ChatService {

  data = [
    'How are you doing? Tired of classic boring résumés too?',
    'Well, welcome to the only résumé in town that answers to your questions!',
    'What are you interested in?'
  ];
  public messageStream: Subject<string>;

  constructor(ws : WebSocketService) {
    this.messageStream = <Subject<string>> ws.connect()
      .map((msg:MessageEvent) =>
        JSON.stringify(msg.data)
      )

  }

  public send(message:string){
    this.messageStream.next(message);
  }

}
