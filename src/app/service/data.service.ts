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
        let newTeamCopy = Object.assign({}, newTeam); // same as old angular.copy() 
        newTeamCopy.id = this.generateUniqueId(); 
        this.teamsRepo.push(newTeamCopy);
        console.log("New team created: " + newTeamCopy.id + " " + newTeamCopy.name);
    }

    deleteTeamById(uniqueId) {
        // 1. remove all contracts of the team
        let contractsToDelete = _.remove(this.contractsRepo, function(c) {
            return c.team.id == uniqueId;
        });
        console.log("Deleted " + contractsToDelete.length + "contract(s) of team " + uniqueId);

        // 2. remove the actual team
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

    addPlayer(newPlayer : Player) {
        // Push a new instance of the newTeam object 
        let newPlayerCopy = Object.assign({}, newPlayer);
        newPlayerCopy.id = this.generateUniqueId();
        this.playersRepo.push(newPlayerCopy);
        console.log("New player created: " + newPlayerCopy.id + " " + newPlayerCopy.firstName + " " + newPlayerCopy.lastName); 
    }

    deletePlayerById(uniqueId) {
        // 1. remove all contracts of the player
        let contractsToDelete = _.remove(this.contractsRepo, function(c) {
            return c.player.id == uniqueId;
        });
        console.log("Deleted " + contractsToDelete.length + "contract(s) of player " + uniqueId);

        // 2. remove the actual player
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
    getTeamContracts(teamId) : Array<Contract> {
        return  _.filter(this.contractsRepo, function(c) {
            return c.team.id == teamId;
        });
    }

    addContract(player: Player, team: Team, salary: number) {
        this.contractsRepo.push({
            id: this.generateUniqueId(),
            team : team,
            player : player,
            salary : salary
        });
    }

    deleteContract(contract : Contract) {
        _.remove(this.contractsRepo, function(c) {
            return c.id == contract.id;
        });
    }


    /**
     * Unique ID generator
     */
    generateUniqueId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    };


    /**
     * In memory data repository + initial test data 
     */
    private teamsRepo : Array<Team> = [];
    private playersRepo : Array<Player> = [];
    private contractsRepo : Array<Contract> = [];
    initData() {
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Manchester United", country: "England", founded: 1878});
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Real Madrid", country: "Spain", founded: 1902});
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Barcelona", country: "Spain", founded: 1899});
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Juventus", country: "Italy", founded: 1897});

        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Wayne", lastName: "Rooney", birth: 1985, position: PlayerPosition.striker});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Zlatan", lastName: "Ibrahimovic", birth: 1981, position: PlayerPosition.striker});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Paul", lastName: "Pogba", birth: 1993, position: PlayerPosition.midfielder});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Christiano", lastName: "Ronaldo", birth: 1985, position: PlayerPosition.striker});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Lionel", lastName: "Messi", birth: 1987, position: PlayerPosition.striker});

        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[0], player : this.playersRepo[0], salary : 260000 });
        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[0], player : this.playersRepo[1], salary : 220000 });
        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[0], player : this.playersRepo[2], salary : 290000 });
        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[3], player : this.playersRepo[2], salary : 65000 });
        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[1], player : this.playersRepo[3], salary : 365000 });
        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[2], player : this.playersRepo[4], salary : 350000 });
    }

}

