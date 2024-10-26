import { createReducer, on } from '@ngrx/store';
import { addPlayer, removePlayer } from './player.actions';
import { Player } from '../../models/player';

const initialState: Player[] = [];

export const playerReducer = createReducer(
    initialState,
    on(addPlayer, (playersState, { player }) => [...playersState, player]),
    on(removePlayer, (playersState, { player }) => {
        return playersState.filter(x => x.id != player.id);
    })
)