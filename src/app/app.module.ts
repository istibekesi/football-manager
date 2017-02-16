import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { TeamComponent } from './team/team.component';
import { ListTeamsComponent } from './list-teams/list-teams.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ListPlayersComponent,
    TeamComponent,
    ListTeamsComponent,
    NavigationHeaderComponent,
    WelcomeComponent
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
