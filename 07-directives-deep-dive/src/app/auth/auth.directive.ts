import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

/**
 * This directive changes the structure depending on the permission.
 */
@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  // Liest den Wert des Attributs `appAuth` aus, das den benötigten Berechtigungstyp angibt
  userType = input.required<Permission>({ alias: 'appAuth' });

  // Injektionsstelle für den AuthService, der die Berechtigungen überprüft
  private authService = inject(AuthService);

  // Injektionsstelle für das TemplateRef-Objekt, das den Inhalt des <ng-template> repräsentiert
  private templateRef = inject(TemplateRef);

  // Injektionsstelle für ViewContainerRef, das den Ort referenziert, an dem das Template angezeigt werden soll
  private viewContainerRef = inject(ViewContainerRef); // Ref to the place where the template is being used

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        // Füge das Template in den ViewContainer ein
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        // Lösche das Template aus dem ViewContainer
        this.viewContainerRef.clear();
      }
    });
  }
}
