import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject} from "rxjs";

@Injectable()
export class ChatService {

  data = [
    'Hey there! How are you doing? Tired of classic boring résumés too?',
    'Well, welcome to the only résumé in town that answers to your questions!',
    'What are you interested in?'
  ];
  private webSocket: Subject<string> = new Subject<string>();
  public messageStream = this.webSocket.asObservable();

  constructor() {
    this.data.forEach((m, i) => setTimeout(() => {
      this.webSocket.next(m);
    }, 1000*i));
  }

}
