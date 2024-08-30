import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // withComponentInputBinding() allows route parameters, query parameters,
      // and resolved data to be automatically bound to component inputs.
      withComponentInputBinding()
    ),
  ],
};
