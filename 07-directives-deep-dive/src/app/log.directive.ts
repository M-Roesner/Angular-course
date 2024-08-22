import { Directive, ElementRef, inject } from '@angular/core';

/**
 * Usage of this log:
 *
 * ### Via Host Directives directly in the TS component:
 *
 * Example:
 * ```typescript
 * @Component({
 *   selector: 'app-auth',
 *   standalone: true,
 *   hostDirectives: [LogDirective],
 * })
 * export class AuthComponent {}
 * ```
 *
 * ### Or in the HTML template:
 *
 * Example in the TS file:
 * ```typescript
 * @Component({
 *   selector: 'app-root',
 *   imports: [LogDirective],
 * })
 * export class AppComponent {}
 * ```
 *
 * Example in the HTML file:
 * ```html
 * <h1 appLog>Click me to log</h1>
 * ```
 */
@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog($event)',
  },
})
export class LogDirective {
  private elementRef = inject(ElementRef);

  constructor() {}

  onLog() {
    console.log('LogDirective clicked:', this.elementRef.nativeElement);
  }
}
