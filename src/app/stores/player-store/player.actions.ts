import { createAction } from '@ngrx/store';
import { Player } from '../../models/player';

// export const getPlayers = createAction('[Player] Get Players', () => ({
    
// });

export const addPlayer = createAction('[Player] Add Player', (player: Player) => ({
    player
}));