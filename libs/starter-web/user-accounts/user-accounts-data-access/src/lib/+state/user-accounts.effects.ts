import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromUserAccounts from './user-accounts.reducer';
import * as UserAccountsActions from './user-accounts.actions';

@Injectable()
export class UserAccountsEffects {
  loadUserAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAccountsActions.loadUserAccounts),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return UserAccountsActions.loadUserAccountsSuccess({
            userAccounts: [],
          });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return UserAccountsActions.loadUserAccountsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
