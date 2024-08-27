import { bootstrapApplication } from '@angular/platform-browser';
import {
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { AppComponent } from './app/app.component';

// Interceptor function to log or manipulate outgoing HTTP requests.
function logginInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  // This interceptor captures every outgoing HTTP request and can be used to inspect or modify it.

  // Uncomment the following code to modify the request, e.g., by adding custom headers:
  // const req = request.clone({
  //   headers: request.headers.set('X-DEBUG', 'TESTING'),
  // });

  // Logs the request to the console. Useful for debugging and monitoring outgoing requests.
  console.log('[Outgoing Request]');
  console.log(request);

  // Passes the (possibly modified) request to the next handler in the chain.
  return next(request);
}

// Bootstraps the Angular application and provides the HTTP client with the logging interceptor.
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([logginInterceptor]))],
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [provideHttpClient()],
// }).catch((err) => console.error(err));
