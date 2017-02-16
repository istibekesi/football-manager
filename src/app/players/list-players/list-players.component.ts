import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  constructor(private _playerService: PlayerService) { }

  getPlayers() {
    return this._playerService.getPlayers();
  }

  ngOnInit() {
    
  }

}
