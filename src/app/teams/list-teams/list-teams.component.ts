import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Team } from '../team';
import { Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';




@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent implements OnInit {
  
  private newTeam : Team = {id : null, name: "", country: "", founded: null};
  private teams : Array<Team>; 

  constructor(private _dataService: DataService, private router : Router, public snackBar: MdSnackBar) { }

  addTeam() {
    let newTeamName = this.newTeam.name;
    this._dataService.addTeam(this.newTeam);
    this.newTeam = {id : null, name: "", country: "", founded: null};
    this.openSnackBar(newTeamName + " has   been added!") ;
  }

  deleteTeam(teamId) {
    this._dataService.deleteTeamById(teamId);
    this.openSnackBar("Team removed!") ;
  }

  selectTeam(teamId) {
    this.router.navigate(['/team', teamId]);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "X", {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.teams = this._dataService.getTeams();
  }

}
