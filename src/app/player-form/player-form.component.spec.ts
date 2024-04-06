import { PlayerFormComponent } from './player-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { validators } from './player-form.enum';

describe('Home', () => {
  let component: PlayerFormComponent;
  let fixture: ComponentFixture<PlayerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerFormComponent],
      providers: [provideAnimations()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Html test suite', () => {
    /**
     * HTML ids
     */
    const PLAYER_FIELD_ID = '#app-player-form-player-name-field';
    const PLAYER_LABEL_ID = '#app-player-form-player-name-label';
    const PLAYER_INPUT_ID = '#app-player-form-player-name-input';
    const MEAL_COST_FIELD_ID = '#app-player-form-meal-cost-field';
    const MEAL_COST_LABEL_ID = '#app-player-form-meal-cost-label';
    const MEAL_COST_INPUT_ID = '#app-player-form-meal-cost-input';
    const SUBMIT_BUTTON_ID = '#app-player-form-submit';

    it('should have a form input for player name', () => {
      const playerNameLabel: HTMLLabelElement = fixture.debugElement.query(By.css(PLAYER_LABEL_ID)).nativeElement;
      const expectedPlayerNameLabel: string = 'Player Name';
      const playerNameInput: HTMLInputElement = fixture.debugElement.query(By.css(PLAYER_INPUT_ID)).nativeElement;

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

    // it('should show the required validator after the player name field is interacted with and empty', () => {
    //   const playerNameField: HTMLDivElement = fixture.debugElement.query(By.css(PLAYER_FIELD_ID)).nativeElement;
    //   const playerNameInput: HTMLInputElement = fixture.debugElement.query(By.css(PLAYER_INPUT_ID)).nativeElement;
    //   const expectedRequiredValidator: string = validators.PLAYER_NAME_REQUIRED;

    //   expect(playerNameField).withContext('the player name field').toBeDefined();
    //   expect(playerNameField.innerHTML).not.toContain(expectedRequiredValidator);

    //   playerNameInput.value = 'Testerillos';
    //   playerNameInput.dispatchEvent(new Event('input'));

    //   expect(component.playerForm.controls).toContain(expectedRequiredValidator);

    //   fixture.detectChanges();
    //   expect(playerNameField.innerHTML).toContain(expectedRequiredValidator);
    // });

    // it('should show the required validator after the meal cost field is interacted with and empty', () => {

    // });

    // it('should show the min value validator after the meal cost field is interacted with and less than 0.01', () => {

    // });

    // it('should have the confirm button disabled when the form is invalid', () => {
    //   // this will be a long test
    // });

    // Will need a test to view the new player cards
  });  
});
