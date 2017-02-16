import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../team';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {

  constructor(private _teamService: TeamService) { }

  newTeam : Team = {name: "new", country: "new", founded: new Date()};
  teams; 


  addTeam() {
    this._teamService.addTeam(this.newTeam);
    this.teams = this._teamService.getTeams();
  }

  deleteTeam(idToDelete) {
    this._teamService.deleteTeam(idToDelete);
    this.teams = this._teamService.getTeams();
  }

  ngOnInit() {
    this.teams = this._teamService.getTeams();
    let team1 : Team = {name: "Real Madrid", country: "Spain", founded: new Date()};
  }

}
