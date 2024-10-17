import { createAction } from '@ngrx/store';
import { Player } from '../../models/player';

export const addPlayer = createAction(
    '[Player] Add Player',
    (player: Player) => ({
        player
    }));