import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {

  constructor(private _teamService: TeamService) { }

  getTeams() {
    return this._teamService.getTeams();
  }

  ngOnInit() {
  }

}
