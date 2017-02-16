import {Injectable} from '@angular/core';
import {Player, PlayerPosition} from './player';


@Injectable()
export class PlayerService {

	getPlayers() {
		return playersRepo;
	}

}


/**
 * Mock data
 */
let player1 : Player = {firstName: "Christiano", lastName: "Ronaldo", birth: new Date(), position: PlayerPosition.striker};
let player2 : Player = {firstName: "Lionel", lastName: "Messi", birth: new Date(), position: PlayerPosition.striker};
let player3 : Player = {firstName: "Zlatan", lastName: "Ibrahimovic", birth: new Date(), position: PlayerPosition.striker};

export let playersRepo = {
    "players" : {
        1 : player1,
        2 : player2,
        3 : player3
    }
}