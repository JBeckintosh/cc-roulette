import { createReducer, createSelector, on } from '@ngrx/store';
import { addPlayer } from './player.actions';
import { Player } from '../../models/player';
import { PlayersState } from '../../models/players-state';

const initialState: Player[] = [];

export const playerReducer = createReducer(
    initialState,
    // on(getPlayers, (state, { players }) => [...players]),
    on(addPlayer, (state, { player }) => [...state, player])
)

export const playerSelector = createSelector(
    (state: PlayersState) => state.players,
    (players: Player[]) => players
)