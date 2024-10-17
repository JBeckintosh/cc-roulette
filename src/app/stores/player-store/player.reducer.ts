import { createReducer, on } from '@ngrx/store';
import { addPlayer } from './player.actions';
import { Player } from '../../models/player';

const initialState: Player[] = [];

export const playerReducer = createReducer(
    initialState,
    on(addPlayer, (state, { player }) => [...state, player])
)