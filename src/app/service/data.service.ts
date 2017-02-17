import {Injectable} from '@angular/core';
import {Team} from '../teams/team';
import {Player, PlayerPosition} from '../players/player';


@Injectable()
export class DataService {

	getTeams() : Array<Team> {
		return teamsRepo;
	}

    addTeam(newTeam : Team) {
        // Push a new instance of the newTeam object 
        teamsRepo.push({name: newTeam.name, country: newTeam.country, founded: newTeam.founded});
    }

    deleteTeam(index) {
        teamsRepo.splice(index, 1);
    }


    getPlayers() {
		return playersRepo;
	}

}


/**
 * Mock inital data
 */
let team1 : Team = {name: "Real Madrid", country: "Spain", founded: new Date()};
let team2 : Team = {name: "Barcelona", country: "Spain", founded: new Date()};
let team3 : Team = {name: "Manchester United", country: "England", founded: new Date()};
export let teamsRepo = [team1, team2, team3];


let player1 : Player = {firstName: "Christiano", lastName: "Ronaldo", birth: new Date(), position: PlayerPosition.striker};
let player2 : Player = {firstName: "Lionel", lastName: "Messi", birth: new Date(), position: PlayerPosition.striker};
let player3 : Player = {firstName: "Zlatan", lastName: "Ibrahimovic", birth: new Date(), position: PlayerPosition.striker};
export let playersRepo = [player1, player2, player3];
