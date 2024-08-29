import { Component } from '@angular/core';

import { LoginComponentViaTemplateDriven } from './auth/login-via-template-driven/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponentViaTemplateDriven],
})
export class AppComponent {}
