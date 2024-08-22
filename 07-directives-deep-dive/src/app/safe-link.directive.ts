import { Directive, ElementRef, inject, input } from '@angular/core';

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
  // queryParam = input<string>('myapp');
  /**
   * In this case you need to add 'queryParam' to the anchor element and add a text like this:
   * Example:
   * <a href=“https://angular.dev” appSafeLink queryParam="myapp-docs-link”
      >Angular documentation</a
    >
   *or you can use the following syntax with an alias and use it directly with the appSafeLink directive:
    <a href=“https://academind.com/courses” appSafeLink="myapp-courses-link”
      >Academind courses</a
    >
   */
  queryParam = input<string>('myapp', { alias: 'appSafeLink' });

  // helper reference to get the fitting element (here: anchor element) to use it instead of using '(event.target as HTMLAnchorElement)'
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    // If an anchor element (a-tag) is clicked it will be a 'MouseEvent' automatically
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if (wantsToLeave) {
      // const address = (event.target as HTMLAnchorElement).href;
      // (event.target as HTMLAnchorElement) - 'as HTMLAnchorElement' convince this event will be an anchor element.
      // (event.target as HTMLAnchorElement).href =
      //   address + '?from=' + this.queryParam();

      // Alternative with a reference to this host anchor element.
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
