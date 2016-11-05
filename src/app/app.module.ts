import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { ChatComponent } from './chat/chat.component';
import { FactorsComponent } from './factors/factors.component';
import { ScrollFixDirective } from './scroll-fix.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    ChatComponent,
    FactorsComponent,
    ScrollFixDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
