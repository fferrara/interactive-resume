import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ChatService} from "./chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  messages: Array<Observable<string>>;

  constructor(private chatService: ChatService) {
    this.messages = [];
    this.chatService = chatService;
  }

  ngOnInit() {
    let writing = false;
    this.chatService.messageStream
      .map(
        message => Observable
          .from(message)
          .scan((acc, curr) => acc + curr)
          .zip(Observable.interval(25), x => x)
      ).subscribe(m => {
        this.messages.push(m)
    });
  }


}
