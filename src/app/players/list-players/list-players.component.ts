import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Player, PlayerPosition } from '../player';
import { Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  private newPlayer : Player = {id : null, firstName: "", lastName: "", birth: null, position : PlayerPosition.goalkeeper};
  private players : Array<Player>; 

  private positionsEnum = PlayerPosition;
  private positionsKeys;

  constructor(private _dataService: DataService, private router : Router, public snackBar: MdSnackBar) {
    this.positionsKeys = Object.keys(this.positionsEnum).filter(Number);
  }

  ngOnInit() {
    this.players = this._dataService.getPlayers();
  }

  getPlayers() {
    return this._dataService.getPlayers();
  }

  addPlayer() {
    let newPlayerName = this.newPlayer.firstName + " " + this.newPlayer.lastName;
    this._dataService.addPlayer(this.newPlayer);
    this.newPlayer = {id : null, firstName: "", lastName: "", birth: null, position : PlayerPosition.goalkeeper};
    this.openSnackBar(newPlayerName +" has been added!") ;
  }

  deletePlayer(playerId) {
    this._dataService.deletePlayerById(playerId);
    this.openSnackBar("Player removed!") ;
  }

  selectPlayer(playerId) {
    this.router.navigate(['/player', playerId]);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "X", {
      duration: 2000,
    });
  }


}
