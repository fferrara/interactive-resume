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
  message: string;

  constructor(private chatService: ChatService) {
    this.messages = [];
    this.chatService = chatService;
  }

  ngOnInit() {
    this.chatService.messageStream
      .zip(Observable.interval(2500), message => message)
      .startWith('Hey there!')
      .map(message => Observable
        .from(message)
        .scan((acc, curr) => acc + curr)
        .zip(Observable.interval(25), x => x)
      ).subscribe(m => {
        this.messages.push(m);
    })
  }

  public submit(){
    this.chatService.send(this.message)
  }


}
