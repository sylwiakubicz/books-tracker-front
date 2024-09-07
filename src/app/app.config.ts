import { ApplicationConfig } from '@angular/core';
import {InMemoryScrollingOptions, provideRouter, withInMemoryScrolling} from '@angular/router';
import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {AuthInterceptor} from "./services/AuthInterceptor";


const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideRouter(routes, withInMemoryScrolling(scrollConfig))
  ]
};
