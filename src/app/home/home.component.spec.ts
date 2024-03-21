import { HomeComponent } from './home.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Home', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component test suite', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Html test suite', () => {
    /**
     * HTML ids
     */
    const PLAYER_LABEL_ID = '#app-home-player-label';
    const PLAYER_INPUT_ID = '#app-home-player-input';
    const COST_LABEL_ID = '#app-home-cost-label';
    const COST_INPUT_ID = '#app-home-cost-input';
    const SUBMIT_BUTTON_ID = '#app-home-submit';

    it('should have a form input for player name', () => {
      const playerLabel: HTMLLabelElement = fixture.debugElement.query(By.css(PLAYER_LABEL_ID)).nativeElement;
      const expectedPlayerLabel: string = 'Player: ';
      const playerInput: HTMLInputElement = fixture.debugElement.query(By.css(PLAYER_INPUT_ID)).nativeElement;

      expect(playerLabel).withContext('a label field').toBeDefined();
      expect(playerLabel.innerText).withContext('a label field').toBe(expectedPlayerLabel);
      expect(playerInput).withContext('a player input field').toBeDefined();
    });

    it('should have a form input for the dollar amount of their bill', () => {
      const costLabel: HTMLLabelElement = fixture.debugElement.query(By.css(COST_LABEL_ID)).nativeElement;
      const expectedCostLabel: string = 'Cost: ';
      const costInput: HTMLInputElement = fixture.debugElement.query(By.css(COST_INPUT_ID)).nativeElement;

      expect(costLabel).withContext('a label field').toBeDefined();
      expect(costLabel.innerText).withContext('a label field').toBe(expectedCostLabel);
      expect(costInput).withContext('a player input field').toBeDefined();
    });

    it('should have a form submit button to add the player', () => {
      const submitButton: HTMLButtonElement = fixture.debugElement.query(By.css(SUBMIT_BUTTON_ID)).nativeElement;
      const expectedSubmitButton: string = 'Add Player';

      expect(submitButton).withContext('a submit button').toBeDefined();
      expect(submitButton.innerText).withContext('a submit button').toBe(expectedSubmitButton);
    });

    // Will need a test to view the new player cards
  });  
});
