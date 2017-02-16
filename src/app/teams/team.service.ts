import {Injectable} from '@angular/core';
import {Team} from './team';


@Injectable()
export class TeamService {

	getTeams() {
		return teamsRepo;
	}

    addTeam(newTeam : Team) {
        teamsRepo.push({name: newTeam.name, country: newTeam.country, founded: newTeam.founded});
    }

    deleteTeam(key) {
        teamsRepo.splice(key, 1);
    }

}


/**
 * Mock data
 */

let team1 : Team = {name: "Real Madrid", country: "Spain", founded: new Date()};
let team2 : Team = {name: "Barcelona", country: "Spain", founded: new Date()};
let team3 : Team = {name: "Manchester United", country: "England", founded: new Date()};
export let teamsRepo = [team1, team2, team3];
