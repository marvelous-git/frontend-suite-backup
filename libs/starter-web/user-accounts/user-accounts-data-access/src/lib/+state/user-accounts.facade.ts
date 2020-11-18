import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromUserAccounts from './user-accounts.reducer';
import * as UserAccountsSelectors from './user-accounts.selectors';

@Injectable()
export class UserAccountsFacade {
  loaded$ = this.store.pipe(
    select(UserAccountsSelectors.getUserAccountsLoaded)
  );
  allUserAccounts$ = this.store.pipe(
    select(UserAccountsSelectors.getAllUserAccounts)
  );
  selectedUserAccounts$ = this.store.pipe(
    select(UserAccountsSelectors.getSelected)
  );

  constructor(
    private store: Store<fromUserAccounts.UserAccountsPartialState>
  ) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
