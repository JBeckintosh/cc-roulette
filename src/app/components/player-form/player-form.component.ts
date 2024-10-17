import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { formControlNames, validators, validatorErrorTypes } from './player-form.component.enum';
import { TwoDecimalPlacesOnlyDirective } from '../../directives/two-decimal-places-only.directive';
import { PlayersState } from '../../models/players-state';
import { addPlayer } from '../../stores/player-store/player.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-player-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, TwoDecimalPlacesOnlyDirective],
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.scss'
})
export class PlayerFormComponent {
  /**
   * Player form to capture player information
   */
  public playerForm: FormGroup;

  // public players$ = this._playerStore.select(playerSelector);

  /**
   * Contructs
   */
  constructor(private _playerStore: Store<PlayersState>) {
    this.playerForm = this._initializeNewPlayerForm();
  }

  /**
   * Evaluates for any player name form control errors
   */
  public get playerNameFormControlErrors() {
    const playerNameFormControl = this.playerForm.controls[formControlNames.PLAYER_NAME];

    if (playerNameFormControl.hasError(validatorErrorTypes.REQUIRED)) {
      return validators.PLAYER_NAME_REQUIRED;
    }

    return;
  }

  /**
   * Evaluates for any meal cost form control errors
   */
  public get mealCostFormControlErrors() {
    const mealCostFormControl = this.playerForm.controls[formControlNames.MEAL_COST];

    if (mealCostFormControl.hasError(validatorErrorTypes.REQUIRED)) {
      return validators.MEAL_COST_REQURIED;
    }
    if (mealCostFormControl.hasError(validatorErrorTypes.MINIMUM)) {
      return validators.MEAL_COST_MIN_VALUE;
    }

    return;
  }

  /**
   * Adds a player
   */
  public addPlayer = (formDirective: FormGroupDirective): void => {
    // At this point, I want to add the play to a store and have that value saved persistently
    console.log(this.playerForm);

    this._playerStore.dispatch(addPlayer({
      name: this.playerForm.controls[formControlNames.PLAYER_NAME].value,
      mealCost: this.playerForm.controls[formControlNames.MEAL_COST].value
    }));

    formDirective.resetForm();
  }

  /**
   * Creates a new player form 
   * @returns FormGroup
   */
  private _initializeNewPlayerForm = (): FormGroup => {
    return new FormGroup({
      playerName: new FormControl(null, Validators.required),
      mealCost: new FormControl(null, [Validators.required, Validators.min(0.01)])
    });
  }
}
