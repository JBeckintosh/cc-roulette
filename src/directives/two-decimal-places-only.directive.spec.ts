import { Component, DebugElement } from '@angular/core';
import { TwoDecimalPlacesOnlyDirective } from './two-decimal-places-only.directive';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  template: `<input id="app-test-decimal-places-directive" type="number" min="0" step="0.01" value="0" appTwoDecimalPlacesOnly />`,
  imports: [TwoDecimalPlacesOnlyDirective]
})
class TestDecimalPlacesDirectiveComponent {}

describe('TwoDecimalPlacesOnlyDirective', () => {
  let component: TestDecimalPlacesDirectiveComponent;
  let fixture: ComponentFixture<TestDecimalPlacesDirectiveComponent>;
  let directive: DebugElement[];
  let input: HTMLInputElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TwoDecimalPlacesOnlyDirective, TestDecimalPlacesDirectiveComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    });
    
    fixture = TestBed.createComponent(TestDecimalPlacesDirectiveComponent);
    component = fixture.componentInstance;
    directive = fixture.debugElement.queryAll(By.directive(TwoDecimalPlacesOnlyDirective));
    input = fixture.debugElement.query(By.css('#app-test-decimal-places-directive')).nativeElement;
  });

  it('should an element with the appTwoDecimalPlacesOnly directive', () => {
    expect(directive).toBeTruthy();
    expect(directive.length).toBe(1);
  });
  
  const testNumberInputCases = [
    { initialValue: 10, isPreventDefaultCalled: false },
    { initialValue: 1, isPreventDefaultCalled: false },
    { initialValue: 0.1, isPreventDefaultCalled: false },
    { initialValue: 0.01, isPreventDefaultCalled: true },
    { initialValue: 0.001, isPreventDefaultCalled: true }
  ];
  testNumberInputCases.forEach(testCase => {
    it('should ensure that values with greater than 2 decimal places are removed', () => {
      input.value = testCase.initialValue.toString();
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      
      const event = new KeyboardEvent('keydown', {key: '1'});
      const preventDefaultSpy = spyOn(event, 'preventDefault').and.stub();
      
      input.dispatchEvent(event);
      if (testCase.isPreventDefaultCalled) {
        expect(preventDefaultSpy).toHaveBeenCalled();
      } else {
        expect(preventDefaultSpy).not.toHaveBeenCalled();
      }
    });
  });
});
