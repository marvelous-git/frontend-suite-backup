import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IAuthFacade {
  currentUser$;
  isAuthenticated$: boolean;

  login(authenticate: { username: string; password: string }) {}

  getUserDetails() {}

  resetPassword(user: { username: string }) {}

  changePassword(user: {
    username?: string;
    token?: string;
    password: string;
    oldPassword?: string;
  }) {}

  logout() {}
}
