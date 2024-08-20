import { Component } from '@angular/core';

@Component({
  /**
   * standard selector: 'app-button',
   * this creates a tag with <app-button></app-button>
   *
   * selector: 'button[appButton]',
   * example for usage in another component:
   * new-ticket.component.html:
   *  <button appButton> Submit </button>
   *   - button: is the normal button tag
   *   - appButton: is the attribute on the button tag and refers to this component
   * new-ticket.component.ts:
   *   @Component({
   *    imports: [ButtonComponent],
   *      - This is necessary in the ts part of the component!
   */
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
