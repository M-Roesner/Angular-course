import { Component } from '@angular/core';

import { LoginComponentViaTemplateDriven } from './auth/login-via-template-driven/login.component';
import { LoginViaReactiveComponent } from './auth/login-via-reactive/login-via-reactive.component';
import { SignupComponent } from './auth/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    LoginComponentViaTemplateDriven,
    LoginViaReactiveComponent,
    SignupComponent,
  ],
})
export class AppComponent {}
