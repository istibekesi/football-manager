export class Player {
    id : string;
    firstName: string;
    lastName: string;
    birth: number;
    position: PlayerPosition
}

export enum PlayerPosition {
    goalkeeper = 1,
    defender = 2, 
    midfielder = 3,
    striker = 4
}


