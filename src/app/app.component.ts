import { Component } from '@angular/core';
import { NavigationHeaderComponent } from "./navigation-header/navigation-header.component";
import { PlayerService }  from "./players/player.service";
import { TeamService }  from "./teams/team.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService, TeamService]
})
export class AppComponent {
  title = 'app works!';
}
