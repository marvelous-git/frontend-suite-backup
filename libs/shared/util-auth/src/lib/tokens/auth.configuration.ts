import { InjectionToken } from '@angular/core';

export interface AuthConfiguration {
  jwtStorageKey: string;
  isNebular: boolean;
}

export const AUTH_CONFIGURATION_TOKEN = new InjectionToken<AuthConfiguration>(
  `Configure Token Key`
);
