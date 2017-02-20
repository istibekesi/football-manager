import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListPlayersComponent } from './players/list-players/list-players.component';
import { ListTeamsComponent } from './teams/list-teams/list-teams.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { FmRoutingModule }   from 'app/fm-routing.module';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    ListTeamsComponent,
    NavigationHeaderComponent,
    WelcomeComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FmRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
