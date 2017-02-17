import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  getPlayers() {
    return this._dataService.getPlayers();
  }

  ngOnInit() {
    
  }

}
