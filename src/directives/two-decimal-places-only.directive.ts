import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTwoDecimalPlacesOnly]',
  standalone: true
})
export class TwoDecimalPlacesOnlyDirective {
  // Regex is mapped to two decimal places because of the delay on the keydown method
  private _decimalRegex = new RegExp(/^\d*\.?\d{0,1}$/g);
  private _specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

  constructor(private _el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    // Allow special keys
    if (this._specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    // Keydown event has a delay so we deal with the previous value
    const priorControlValue: string = this._el.nativeElement.value;

    // If this passes, the value does not meet the value of the regex and has too many decimal places
    // So we decide to ignore the event
    if (!String(priorControlValue).match(this._decimalRegex)) {
      event.preventDefault();
    }
  }
}
