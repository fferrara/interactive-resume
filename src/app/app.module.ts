import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { ChatComponent } from './chat/chat.component';
import { ScrollFixDirective } from './directives/scroll-fix.directive';
import { ScrollEnterDirective } from './directives/scroll-enter.directive';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {WebSocketService} from "./services/web-socket.service";

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    ChatComponent,
    ScrollFixDirective,
    ScrollEnterDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
