import { PlayerFormComponent } from './player-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { formControlNames, validators, validatorErrorTypes } from './player-form.component.enum';
import { AbstractControl } from '@angular/forms';

describe('PlayerForm', () => {
  let component: PlayerFormComponent;
  let fixture: ComponentFixture<PlayerFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [PlayerFormComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        provideAnimations()]
    });
    
    fixture = TestBed.createComponent(PlayerFormComponent);
    component = fixture.componentInstance;
  });

  describe('Html test suite', () => {
    /**
     * HTML ids
     */
    const PLAYER_NAME_FIELD_ID = '#app-player-form-player-name-field';
    const PLAYER_NAME_LABEL_ID = '#app-player-form-player-name-label';
    const PLAYER_NAME_INPUT_ID = '#app-player-form-player-name-input';
    const MEAL_COST_FIELD_ID = '#app-player-form-meal-cost-field';
    const MEAL_COST_LABEL_ID = '#app-player-form-meal-cost-label';
    const MEAL_COST_INPUT_ID = '#app-player-form-meal-cost-input';
    const SUBMIT_BUTTON_ID = '#app-player-form-submit';

    it('should have a form input for player name', () => {
      const playerNameLabel: HTMLLabelElement = fixture.debugElement.query(By.css(PLAYER_NAME_LABEL_ID)).nativeElement;
      const expectedPlayerNameLabel: string = 'Player Name';
      const playerNameInput: HTMLInputElement = fixture.debugElement.query(By.css(PLAYER_NAME_INPUT_ID)).nativeElement;

      expect(playerNameLabel).withContext('the player label').toBeDefined();
      expect(playerNameLabel.innerText).withContext('the player label').toBe(expectedPlayerNameLabel);
      expect(playerNameInput).withContext('the player input').toBeDefined();
    });

    it('should have a form input for the dollar amount of their bill', () => {
      const mealCostLabel: HTMLLabelElement = fixture.debugElement.query(By.css(MEAL_COST_LABEL_ID)).nativeElement;
      const expectedMealCostLabel: string = 'Meal Cost';
      const mealCostInput: HTMLInputElement = fixture.debugElement.query(By.css(MEAL_COST_INPUT_ID)).nativeElement;

      expect(mealCostLabel).withContext('the meal cost label').toBeDefined();
      expect(mealCostLabel.innerText).withContext('the meal cost label').toBe(expectedMealCostLabel);
      expect(mealCostInput).withContext('the meal cost input').toBeDefined();
    });

    it('should have a form submit button to add the player', () => {
      const submitButton: HTMLButtonElement = fixture.debugElement.query(By.css(SUBMIT_BUTTON_ID)).nativeElement;
      const expectedSubmitButton: string = 'Add Player';

      expect(submitButton).withContext('a submit button').toBeDefined();
      expect(submitButton.innerText).withContext('a submit button').toBe(expectedSubmitButton);
    });

    it('should show the required validator after the player name field is interacted with and empty', () => {
      const playerNameField: HTMLDivElement = fixture.debugElement.query(By.css(PLAYER_NAME_FIELD_ID)).nativeElement;
      const playerNameInput: HTMLInputElement = fixture.debugElement.query(By.css(PLAYER_NAME_INPUT_ID)).nativeElement;
      const expectedErrorMessage: string = validators.PLAYER_NAME_REQUIRED;

      expect(playerNameField).withContext('the player name field').toBeDefined();
      expect(playerNameInput).withContext('the player name input').toBeDefined();

      expect(playerNameField.textContent).not.toContain(expectedErrorMessage);

      _triggerErrorsOnFormControl(component.playerForm.controls[formControlNames.PLAYER_NAME], validatorErrorTypes.REQUIRED);
      fixture.detectChanges();

      expect(playerNameField.textContent).toContain(expectedErrorMessage);
    });

    it('should show the required validator after the meal cost field is interacted with and empty', () => {
      const mealCostField: HTMLDivElement = fixture.debugElement.query(By.css(MEAL_COST_FIELD_ID)).nativeElement;
      const mealCostInput: HTMLInputElement = fixture.debugElement.query(By.css(MEAL_COST_INPUT_ID)).nativeElement;
      const expectedErrorMessage: string = validators.MEAL_COST_REQURIED;

      expect(mealCostField).withContext('the meal cost field').toBeDefined();
      expect(mealCostInput).withContext('the meal cost input').toBeDefined();

      expect(mealCostField.textContent).not.toContain(expectedErrorMessage);

      _triggerErrorsOnFormControl(component.playerForm.controls[formControlNames.MEAL_COST], validatorErrorTypes.REQUIRED);
      fixture.detectChanges();

      expect(mealCostField.textContent).toContain(expectedErrorMessage);
    });

    it('should show the min value validator after the meal cost field is interacted with and less than 0.01', () => {
      const mealCostField: HTMLDivElement = fixture.debugElement.query(By.css(MEAL_COST_FIELD_ID)).nativeElement;
      const mealCostInput: HTMLInputElement = fixture.debugElement.query(By.css(MEAL_COST_INPUT_ID)).nativeElement;
      const expectedErrorMessage: string = validators.MEAL_COST_MIN_VALUE;

      expect(mealCostField).withContext('the meal cost field').toBeDefined();
      expect(mealCostInput).withContext('the meal cost input').toBeDefined();

      expect(mealCostField.textContent).not.toContain(expectedErrorMessage);

      _triggerErrorsOnFormControl(component.playerForm.controls[formControlNames.MEAL_COST], validatorErrorTypes.MINIMUM, 0.00);
      fixture.detectChanges();

      expect(mealCostField.textContent).toContain(expectedErrorMessage);
    });

    it('should have the confirm button disabled until the form is valid', () => {
      const playerNameField: HTMLDivElement = fixture.debugElement.query(By.css(PLAYER_NAME_FIELD_ID)).nativeElement;
      const playerNameInput: HTMLInputElement = fixture.debugElement.query(By.css(PLAYER_NAME_INPUT_ID)).nativeElement;
      const mealCostField: HTMLDivElement = fixture.debugElement.query(By.css(MEAL_COST_FIELD_ID)).nativeElement;
      const mealCostInput: HTMLInputElement = fixture.debugElement.query(By.css(MEAL_COST_INPUT_ID)).nativeElement;
      const submitButton: HTMLButtonElement = fixture.debugElement.query(By.css(SUBMIT_BUTTON_ID)).nativeElement;
      
      expect(playerNameField).withContext('the player name field').toBeDefined();
      expect(playerNameInput).withContext('the player name input').toBeDefined();
      expect(mealCostField).withContext('the meal cost field').toBeDefined();
      expect(mealCostInput).withContext('the meal cost input').toBeDefined();
      expect(submitButton).withContext('a submit button').toBeDefined();

      const playerNameFormControl = component.playerForm.controls[formControlNames.PLAYER_NAME];
      const mealCostFormControl = component.playerForm.controls[formControlNames.MEAL_COST];
      
      expect(playerNameFormControl.errors).toEqual({required: true});
      expect(mealCostFormControl.errors).toEqual({required: true});
      expect(submitButton.disabled).toBeTruthy();

      playerNameFormControl.setValue('Testerillos');
      fixture.detectChanges();
      
      expect(playerNameFormControl.errors).toBeNull();
      expect(mealCostFormControl.errors).toEqual({required: true});
      expect(submitButton.disabled).toBeTruthy();

      mealCostFormControl.setValue(0.00);
      fixture.detectChanges();
      
      expect(playerNameFormControl.errors).toBeNull();
      expect(mealCostFormControl.errors).toEqual({min: {min: 0.01, actual: 0}});
      expect(submitButton.disabled).toBeTruthy();

      mealCostFormControl.setValue(1.23);
      fixture.detectChanges();
      
      expect(playerNameFormControl.errors).toBeNull();
      expect(mealCostFormControl.errors).toBeNull();
      expect(submitButton.disabled).toBeFalsy();
    });

    // Will need a test to view the new player cards
  });
});
  
const _triggerErrorsOnFormControl = (control: AbstractControl, error: string, controlValue?: string | number) => {
  if (controlValue !== null) {
    control.setValue(controlValue);
  }

  control.markAsDirty();
  control.markAsTouched();
  control.hasError(error);
}

