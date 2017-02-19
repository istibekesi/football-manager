import {Injectable} from '@angular/core';
import {Team} from '../teams/team';
import {Contract} from '../teams/contract';
import {Player, PlayerPosition} from '../players/player';

import * as _ from 'lodash';


@Injectable()
export class DataService {

    /**
     * Singelton data service, inject it only once upon application startup!
     */
    constructor() { 
        this.initData();
    }

    /**
     * TEAM
     */
	getTeams() : Array<Team> {
		return this.teamsRepo;
	}
    getTeam(uniqueId) : Team {
        return _.find(this.teamsRepo, function(t) { return t.id == uniqueId; });
    }
    addTeam(newTeam : Team) {
        // Push a new instance of the newTeam object 
        this.teamsRepo.push({id: this.generateUniqueId(), name: newTeam.name, country: newTeam.country, founded: newTeam.founded});
    }
    deleteTeamByIndex(index) {
        this.teamsRepo.splice(index, 1);
    }
    deleteTeamById(uniqueId) {
        let teamToDelete = _.remove(this.teamsRepo, function(t) {
            return t.id == uniqueId;
        });
        if (teamToDelete && teamToDelete.length == 1 ) {
            console.debug("Succesfully removed: " + teamToDelete[0].id + " " + teamToDelete[0].name);
        } else {
            console.error("Unable to remove team: " + uniqueId);
        }
    }

    /**
     * PLAYER
     */
    getPlayers() {
		return this.playersRepo;
	}
    getPlayer(uniqueId) : Player {
        return _.find(this.playersRepo, function(p) { return p.id == uniqueId; });
    }
    getPlayerByContract(contract : Contract) : Player {
        return _.find(this.playersRepo, function(p) { return p.id == contract.playerId; });
    }
    addPlayer(newPlayer : Player) {
        // Push a new instance of the newTeam object 
        let newPlayerCopy = Object.assign({}, newPlayer); // equivalent to old angular.copy() 
        newPlayerCopy.id = this.generateUniqueId();
        this.playersRepo.push(newPlayerCopy); 
    }
    deletePlayerByIndex(index) {
        this.playersRepo.splice(index, 1);
    }
    deletePlayerById(uniqueId) {
        let playerToDelete = _.remove(this.playersRepo, function(p) {
            return p.id == uniqueId;
        });
        if (playerToDelete && playerToDelete.length == 1) {
            console.debug("Succesfully removed: " + playerToDelete[0].id + " " + playerToDelete[0].firstName + " " + playerToDelete[0].lastName);
        } else {
            console.error("Unable to remove player: " + uniqueId);
        }
    }

    /**
     * TEAM-PLAYER RELATION
     */
    getTeamPlayers(teamId) : Array<Player> {
        let contracts = _.filter(this.contractsRepo, function(c) {
            return c.teamId == teamId;
        });

        let players : Array<Player> = [];
        contracts.forEach(c => {
            players.push(this.getPlayer(c.playerId));
        });

        //players =_.map(contracts, this.getPlayerByContract); // not working, why ???

        return players;
    }


    /**
     * Unique ID generator
     */
    generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    };


    /**
     * Inital data repository
     */
    teamsRepo : Array<Team> = [];
    playersRepo : Array<Player> = [];
    contractsRepo : Array<Contract> = [];
    initData() {
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Manchester United", country: "England", founded: new Date()});
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Real Madrid", country: "Spain", founded: new Date()});
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Barcelona", country: "Spain", founded: new Date()});

        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Wayne", lastName: "Rooney", birth: new Date(), position: PlayerPosition.striker});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Zlatan", lastName: "Ibrahimovic", birth: new Date(), position: PlayerPosition.striker});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Christiano", lastName: "Ronaldo", birth: new Date(), position: PlayerPosition.striker});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Lionel", lastName: "Messi", birth: new Date(), position: PlayerPosition.striker});

        this.contractsRepo.push({
            teamId : this.teamsRepo[0].id,
            playerId : this.playersRepo[0].id,
            salary : 7000000
        });
        this.contractsRepo.push({
            teamId : this.teamsRepo[0].id,
            playerId : this.playersRepo[1].id,
            salary : 7000000
        });

    }


}



