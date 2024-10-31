import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [

     provideRouter(routes,
      withHashLocation()
     ),
     provideAnimations(),
     provideHttpClient(),
    ]
};
