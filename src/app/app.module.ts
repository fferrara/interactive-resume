import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { ChatComponent } from './chat/chat.component';
import { FactorsComponent } from './factors/factors.component';
import { ScrollFixDirective } from './scroll-fix.directive';
import { Circle } from './factors/circle.component';
import { StoryComponent } from './story/story.component';
import { ProblemsComponent } from './problems/problems.component';
import { ScrollEnterDirective } from './scroll-enter.directive';
import { SkillsComponent } from './skills/skills.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    StoryComponent,
    ChatComponent,
    FactorsComponent,
    ScrollFixDirective,
    Circle,
    StoryComponent,
    ProblemsComponent,
    ScrollEnterDirective,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
