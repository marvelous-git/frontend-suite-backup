import { Injectable, Inject } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AUTH_CONFIGURATION_TOKEN, AuthConfiguration } from '../tokens';
import { NbAuthService, NbAuthToken } from '@nebular/auth';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  key: string;

  constructor(
    @Inject(AUTH_CONFIGURATION_TOKEN) private configuration: AuthConfiguration,
    private authService: NbAuthService
  ) {
    this.key = configuration.jwtStorageKey;
  }

  get jwtToken(): string {
    return localStorage.getItem(this.key)
      ? JSON.parse(atob(localStorage.getItem(this.key)))
      : {};
  }

  get nebularToken(): NbAuthToken {
    let token: NbAuthToken;
    this.authService.getToken().subscribe(t => (token = t));
    return token;
  }

  get token(): string {
    return this.configuration.isNebular
      ? this.nebularToken.getValue()
      : this.jwtToken;
  }

  setToken(token: string): void {
    localStorage.setItem(this.key, btoa(JSON.stringify(token)));
  }

  destroyToken(): void {
    localStorage.removeItem(this.key);
  }

  hasValidAccessToken(): boolean {
    return this.configuration.isNebular
      ? this.nebularToken.isValid()
      : !new JwtHelperService().isTokenExpired(this.token);
  }

  getTokenExpirationDate(): Date {
    return new JwtHelperService().getTokenExpirationDate(this.token);
  }
}
