export class Player {
    id : string;
    firstName: string;
    lastName: string;
    birth: number;
    position: PlayerPosition
}

export enum PlayerPosition {
    goalkeeper,
    defender, 
    midfielder,
    striker
}


