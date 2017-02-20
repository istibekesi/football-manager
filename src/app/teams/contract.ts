import {Team} from './team';
import {Player} from '../players/player';

export class Contract {
    id : string;
    team: Team;
    player: Player;
    salary? : number;
}

