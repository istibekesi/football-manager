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
    deleteTeamById(uniqueId) {
        // 1. remove all contracts of the team
        let contractsToDelete = _.remove(this.contractsRepo, function(c) {
            return c.team.id == uniqueId;
        });
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
        let newPlayerCopy = Object.assign({}, newPlayer); // equivalent to old angular.copy() 
        newPlayerCopy.id = this.generateUniqueId();
        this.playersRepo.push(newPlayerCopy); 
    }
    deletePlayerById(uniqueId) {
        // 1. remove all contracts of the player
        let contractsToDelete = _.remove(this.contractsRepo, function(c) {
            return c.player.id == uniqueId;
        });
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
        console.log(this.contractsRepo);
        this.contractsRepo.push({
            id: this.generateUniqueId(),
            team : team,
            player : player,
            salary : salary
        });
        console.log(this.contractsRepo);
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
     * Inital data repository
     */
    private teamsRepo : Array<Team> = [];
    private playersRepo : Array<Player> = [];
    private contractsRepo : Array<Contract> = [];
    initData() {
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Manchester United", country: "England", founded: new Date()});
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Real Madrid", country: "Spain", founded: new Date()});
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Barcelona", country: "Spain", founded: new Date()});
        this.teamsRepo.push({id: this.generateUniqueId(), name: "Juventus", country: "Italy", founded: new Date()});

        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Wayne", lastName: "Rooney", birth: new Date(), position: PlayerPosition.striker});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Zlatan", lastName: "Ibrahimovic", birth: new Date(), position: PlayerPosition.striker});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Paul", lastName: "Pogba", birth: new Date(), position: PlayerPosition.midfielder});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Christiano", lastName: "Ronaldo", birth: new Date(), position: PlayerPosition.striker});
        this.playersRepo.push({id: this.generateUniqueId(), firstName: "Lionel", lastName: "Messi", birth: new Date(), position: PlayerPosition.striker});

        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[0], player : this.playersRepo[0], salary : 260000 });
        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[0], player : this.playersRepo[1], salary : 220000 });
        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[0], player : this.playersRepo[2], salary : 290000 });
        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[3], player : this.playersRepo[2], salary : 65000 });
        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[1], player : this.playersRepo[3], salary : 365000 });
        this.contractsRepo.push({id: this.generateUniqueId(), team : this.teamsRepo[2], player : this.playersRepo[4], salary : 350000 });

    }


}



