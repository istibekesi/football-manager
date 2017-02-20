import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Team } from '../team';
import { Contract } from '../contract';
import { Player } from '../../players/player';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  private id : string;
  private selectedTeam : Team;

  private teamContracts : Array<Contract>;

  private allPlayers : Array<Player>;
  private playerToHire : Player;
  private salaryToHire : number;

  constructor(private _dataService: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.selectedTeam = this._dataService.getTeam(this.id);
      this.teamContracts = this._dataService.getTeamContracts(this.id);
      this.allPlayers = this._dataService.getPlayers();
    });
  }

  firePlayer(c : Contract) {
    this._dataService.deleteContract(c);
    this.teamContracts = this._dataService.getTeamContracts(this.id);
  }

  hirePlayer() {
    this._dataService.addContract(this.playerToHire, this.selectedTeam, this.salaryToHire);
    this.teamContracts = this._dataService.getTeamContracts(this.id);
  }

}
