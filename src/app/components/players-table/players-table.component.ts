import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { playerSelector } from '../../stores/player-store/player.selector';
import { removePlayer } from '../../stores/player-store/player.actions';
import { PlayersState } from '../../models/players-state';
import { Store } from '@ngrx/store';
import { Player } from '../../models/player';

@Component({
  selector: 'app-players-table',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './players-table.component.html',
  styleUrl: './players-table.component.scss'
})
export class PlayersTableComponent {
  /** 
   * The array of players added to the game
   **/
  public players$ = this._playerStore.select(playerSelector);

  /**
   * Contructs
   */
  constructor(private _playerStore: Store<PlayersState>) { }

  /**
   * Remove the selected player
   */
  public removePlayer(player: Player) {
    // Remove a player
    this._playerStore.dispatch(removePlayer(player));
  }
}
