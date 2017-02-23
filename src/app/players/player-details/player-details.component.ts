import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router, ActivatedRoute } from "@angular/router";
import {MdSnackBar} from '@angular/material';
import { Player, PlayerPosition } from '../player';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  private id : string;
  private selectedPlayer : Player;
  private selectedPlayerCopy : Player;

  private positionsEnum = PlayerPosition;
  private positionsKeys;

  constructor(private _dataService: DataService, private route: ActivatedRoute, private router: Router, public snackBar: MdSnackBar) {
    this.positionsKeys = Object.keys(this.positionsEnum).filter(Number);
  }

  savePlayer () {
    this.selectedPlayer.firstName = this.selectedPlayerCopy.firstName;
    this.selectedPlayer.lastName = this.selectedPlayerCopy.lastName;
    this.selectedPlayer.birth = this.selectedPlayerCopy.birth;
    this.selectedPlayer.position = this.selectedPlayerCopy.position;
    this.openSnackBar("Player updated!") ; 
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "X", {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.selectedPlayer = this._dataService.getPlayer(this.id);
      this.selectedPlayerCopy =  Object.assign({}, this.selectedPlayer);
    });
  }



}
