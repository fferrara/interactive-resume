import {Injectable} from '@angular/core';
import {WebSocketService} from "../services/web-socket.service";
import {Observable, Subject} from "rxjs";

interface Data {
  type: string,
  text: string,
  choices?: Array<string>
}
export interface Message {
  message: string,
}
export interface Question extends Message {
  choices?: Array<string>
}

@Injectable()
export class ChatService {


  public messageStream: Observable<Message>;
  public questionStream: Observable<Question>;
  public dataStream: Subject<Data>;

  constructor(ws: WebSocketService) {
    this.dataStream = ws.connect()
      .map((msg: MessageEvent) => JSON.parse(msg.data));

    // see https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/share.md
    let published = this.dataStream.share();

    this.messageStream = published
      .map((data:Data): Message => {
          return {
            message: data.text
          }
        }
      );

    this.questionStream = published
      .filter(data => data.type == 'QUESTION')
      .map((data:Data): Question => {
          return {
            message: data.text,
            choices: data.choices
          }
        }
      )

  }

  public send(message: string, isChoice: boolean) {
    this.dataStream.next({
      type: isChoice && 'CHOICE' || 'MESSAGE',
      text: message
    });
  }

  public sendChoice(message: string) {
    this.dataStream.next({
      type: 'CHOICE',
      text: message
    });
  }

}
