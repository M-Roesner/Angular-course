import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
    '[target]': '_blank',
    '[rel]': 'noopener',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    // If an anchor element (a-tag) is clicked it will be a 'MouseEvent' automatically
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if (wantsToLeave) {
      return;
    }

    event.preventDefault();
  }
}
