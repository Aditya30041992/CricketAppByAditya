import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AdminComponent } from './admin/admin.component';
import { NewmatchComponent } from './admin/newmatch/newmatch.component';
import { MatchComponent } from './match/match.component';
import { CommentryComponent } from './match/commentry/commentry.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';
import { DefinedteamsComponent } from './admin/definedteams/definedteams.component';
import { InningsComponent } from './admin/innings/innings.component';
import { PlayerComponent } from './admin/definedteams/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    NewmatchComponent,
    MatchComponent,
    CommentryComponent,
    ScorecardComponent,
    DefinedteamsComponent,
    InningsComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
