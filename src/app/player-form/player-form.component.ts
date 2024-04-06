import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { validators } from './player-form.enum';
import { TwoDecimalPlacesOnlyDirective } from '../../directives/two-decimal-places-only.directive';

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
  protected playerForm: FormGroup;

  /**
   * Contructs
   */
  constructor() {
    this.playerForm = this._initializeNewPlayerForm();
  }

  /**
   * Adds a player
   */
  protected addPlayer = (formDirective: FormGroupDirective): void => {
    formDirective.resetForm();
  }

  /**
   * Evaluates for any player name form control errors
   */
  protected get playerNameFormControlErrors() {
    const playerNameFormControl = this.playerForm.controls['playerName'];

    if (playerNameFormControl.hasError('required')) {
      return validators.PLAYER_NAME_REQUIRED;
    }

    return;
  }

  /**
   * Evaluates for any meal cost form control errors
   */
  protected get mealCostFormControlErrors() {
    const mealCostFormControl = this.playerForm.controls['mealCost'];

    if (mealCostFormControl.hasError('required')) {
      return validators.MEAL_COST_REQURIED;
    }
    if (mealCostFormControl.hasError('min')) {
      return validators.MEAL_COST_MIN_VALUE;
    }

    return;
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
