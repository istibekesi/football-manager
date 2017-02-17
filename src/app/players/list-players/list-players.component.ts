import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Player, PlayerPosition } from '../player';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  private newPlayer : Player = {firstName: "new", lastName: "new", birth: new Date(), position : PlayerPosition.goalkeeper};
  private players : Array<Player>; 

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.players = this._dataService.getPlayers();
  }

  getPlayers() {
    return this._dataService.getPlayers();
  }
  addPlayer() {
    this._dataService.addPlayer(this.newPlayer);
  }
  deletePlayer(indexToDelete) {
    this._dataService.deletePlayer(indexToDelete);
  }


}
