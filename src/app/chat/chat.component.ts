import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {ChatService, Question, Message} from "./chat.service";

interface ChatMessage {
  message: string,
  isMine: boolean
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  chatMessages: Array<ChatMessage>;
  question: Question;
  answer: string;
  choices: Array<string>;
  private showAnswer = false;
  writing = false;

  greeting = {
    message: 'Hey there!'
  };

  constructor(private chatService: ChatService) {
    this.chatMessages = [];
    this.chatService = chatService;
  }

  ngOnInit() {
    /*this.chatService.messageStream
     .zip(Observable.interval(1500), message => message)
     .startWith(this.greeting)
     .filter(message => message != null)
     .subscribe(m => {
     this.chatMessages.push({
     message: m.message,
     isMine: false
     });

     this.showAnswer = this.checkNeedAnswer();
     });*/

    let delayed = this.chatService.messageStream
      .startWith(this.greeting)
      .map(m => {
        return Observable.of(m).delay(1500);
      }).concatAll();
/*
    let delayed = this.chatService.messageStream
      .zip(Observable.interval(2500), message => message)
      .startWith(this.greeting);*/

    delayed
      .filter(message => message != null)
      .subscribe(m => {
        this.chatMessages.push({
          message: m.message,
          isMine: false
        });

      this.showAnswer = this.checkNeedAnswer();
    });

    this.chatService.questionStream.subscribe(q => {
      this.question = q;
      this.choices = q.choices;
      this.showAnswer = this.checkNeedAnswer();
    })
  }

  public submitAnswer() {
    this.submit(this.answer, false)
    this.answer = null
  }

  public submitChoice(choice) {
    this.submit(choice, true);
    this.answer = null
  }

  private submit(message, isChoice) {
    this.showAnswer = false;
    this.chatMessages.push({
      message: message,
      isMine: true
    });

    this.chatService.send(message, isChoice);
  }

  private checkNeedAnswer() {
    if (this.chatMessages.length == 0) return false;
    let last = this.chatMessages[this.chatMessages.length - 1];
    let needAnswer = this.question && last.message == this.question.message;
    this.writing = !needAnswer;
    return needAnswer;
  }


}
