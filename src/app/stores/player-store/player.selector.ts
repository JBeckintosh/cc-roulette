import { createSelector } from '@ngrx/store';
import { Player } from '../../models/player';
import { PlayersState } from '../../models/players-state';

export const playerSelector = createSelector(
    (state: PlayersState) => state.players,
    (players: Player[]) => players
)