export class Player {
    firstName: string;
    lastName: string;
    birth: Date;
    position: PlayerPosition
}

export enum PlayerPosition {
    goalkeeper,
    defender, 
    midfilder,
    striker
}


