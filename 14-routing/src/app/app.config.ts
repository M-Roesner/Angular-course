import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // withComponentInputBinding() allows route parameters, query parameters,
      // and resolved data to be automatically bound to component inputs.
      withComponentInputBinding(),
      // withRouterConfig() allows configuring the router's behavior.
      // Setting paramsInheritanceStrategy to 'always' ensures that
      // route parameters from parent routes are always available in child routes.
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
  ],
};
