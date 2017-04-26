import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OpaqueToken} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { ChatComponent } from './chat/chat.component';
import { ScrollFixDirective } from './directives/scroll-fix.directive';
import { ScrollEnterDirective } from './directives/scroll-enter.directive';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {WebSocketService} from "./services/web-socket.service";
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { SkillComponent } from './skill/skill.component';
import { PersonalityComponent } from './personality/personality.component';

import { WritingComponent } from './chat/writing/writing.component';
import {EmojiModule} from "angular-emojione";


@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    ChatComponent,
    ScrollFixDirective,
    ScrollEnterDirective,
    EducationComponent,
    WorkComponent,
    SkillComponent,
    PersonalityComponent,
    WritingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    EmojiModule,
    NgbModule.forRoot(),
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
