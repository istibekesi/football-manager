import {Injectable} from '@angular/core';
import {Team} from '../teams/team';
import {Player, PlayerPosition} from '../players/player';


@Injectable()
export class DataService {

    /**
     * Singelton data service, inject it only once upon application startup!
     */
    constructor() { 
        this.initData();
    }

	getTeams() : Array<Team> {
		return this.teamsRepo;
	}
    addTeam(newTeam : Team) {
        // Push a new instance of the newTeam object 
        this.teamsRepo.push({id: this.generateUniqueId(), name: newTeam.name, country: newTeam.country, founded: newTeam.founded});
    }
    deleteTeam(index) {
        this.teamsRepo.splice(index, 1);
    }


    getPlayers() {
		return this.playersRepo;
	}
    addPlayer(newPlayer : Player) {
        // Push a new instance of the newTeam object 
        let newPlayerCopy = Object.assign({}, newPlayer); // equivalent to old angular.copy() 
        newPlayerCopy.id = this.generateUniqueId();
        this.playersRepo.push(newPlayerCopy); 
    }
    deletePlayer(index) {
        this.playersRepo.splice(index, 1);
    }


    generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    };


    initData() {
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Real Madrid", country: "Spain", founded: new Date()});
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Barcelona", country: "Spain", founded: new Date()});
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Manchester United", country: "England", founded: new Date()});

        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Christiano", lastName: "Ronaldo", birth: new Date(), position: PlayerPosition.striker});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Lionel", lastName: "Messi", birth: new Date(), position: PlayerPosition.striker});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Zlatan", lastName: "Ibrahimovic", birth: new Date(), position: PlayerPosition.striker});
    }



    /**
     * Inital data repository
     */
    teamsRepo : Array<Team> = [];
    playersRepo : Array<Player> = [];

}



