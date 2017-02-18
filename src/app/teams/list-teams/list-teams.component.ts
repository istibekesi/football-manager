import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Team } from '../team';
import { Router } from '@angular/router';




@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {
  
  private newTeam : Team = {id : null, name: "new", country: "new", founded: new Date()};
  private teams : Array<Team>; 

  constructor(private _dataService: DataService, private router : Router) { }

  addTeam() {
    this._dataService.addTeam(this.newTeam);
  }

  deleteTeam(teamId) {
    this._dataService.deleteTeamById(teamId);
  }

  selectTeam(teamId) {
    this.router.navigate(['/team', teamId]);
  }

  ngOnInit() {
    this.teams = this._dataService.getTeams();
  }

}
