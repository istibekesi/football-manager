import {Injectable} from '@angular/core';
import {Team} from './team';


@Injectable()
export class TeamService {

	getTeams() {
		return teamsRepo;
	}

}


/**
 * Mock data
 */

let team1 : Team = {name: "Real Madrid", country: "Spain", founded: new Date()};
let team2 : Team = {name: "Barcelona", country: "Spain", founded: new Date()};
let team3 : Team = {name: "Manchester United", country: "England", founded: new Date()};
export let teamsRepo = {
    "teams" : {
        1 : team1,
        2 : team2,
        3 : team3
    }
}
