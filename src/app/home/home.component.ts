import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
  protected addPlayer = (): void => {
    
  }

  /**
   * Evaluates for any player form control errors
   */
  protected get playerFormControlErrors() {
    const playerFormControl = this.playerForm.controls['player'];

    const generalChecks = this._generalFormControlErrorChecks(playerFormControl)
    
    return;
  }

  /**
   * Evaluates for any cost form control errors
   */
  protected get costFormControlErrors() {
    return;
  }

  /**
   * Creates a new player form 
   * @returns FormGroup
   */
  private _initializeNewPlayerForm = (): FormGroup => {
    return new FormGroup({
      player: new FormControl(null, [Validators.required, Validators.minLength(1)]),
      cost: new FormControl(null, [Validators.required, Validators.min(0.01)])
    });
  }
  
  /**
   * Provides the default form control error checks
   */
  private _generalFormControlErrorChecks(control: AbstractControl): string | null {
    return null;
  }
}
