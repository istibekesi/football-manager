import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ListPlayersComponent } from './players/list-players/list-players.component';
import { ListTeamsComponent } from './teams/list-teams/list-teams.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'teams', component: ListTeamsComponent },
  { path: 'team/:id', component: TeamDetailsComponent },
  { path: 'players', component: ListPlayersComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class FmRoutingModule {}