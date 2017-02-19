import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Team } from '../team';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  private id : string;
  private selectedTeam : Team;
  private teamPlayers;
  constructor(private _dataService: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.selectedTeam = this._dataService.getTeam(this.id);
      this.teamPlayers = this._dataService.getTeamPlayers(this.id);

    });
  }

}
