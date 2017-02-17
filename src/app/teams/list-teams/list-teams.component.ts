import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Team } from '../team';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {
  
  private newTeam : Team = {name: "new", country: "new", founded: new Date()};
  private teams : Array<Team>; 

  constructor(private _dataService: DataService) { }

  addTeam() {
    this._dataService.addTeam(this.newTeam);
  }

  deleteTeam(indexToDelete) {
    this._dataService.deleteTeam(indexToDelete);
  }

  ngOnInit() {
    this.teams = this._dataService.getTeams();
  }

}
