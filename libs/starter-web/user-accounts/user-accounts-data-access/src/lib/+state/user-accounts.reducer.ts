import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as UserAccountsActions from './user-accounts.actions';
import { UserAccountsEntity } from './user-accounts.models';

export const USERACCOUNTS_FEATURE_KEY = 'userAccounts';

export interface State extends EntityState<UserAccountsEntity> {
  selectedId?: string | number; // which UserAccounts record has been selected
  loaded: boolean; // has the UserAccounts list been loaded
  error?: string | null; // last known error (if any)
}

export interface UserAccountsPartialState {
  readonly [USERACCOUNTS_FEATURE_KEY]: State;
}

export const userAccountsAdapter: EntityAdapter<UserAccountsEntity> = createEntityAdapter<
  UserAccountsEntity
>();

export const initialState: State = userAccountsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const userAccountsReducer = createReducer(
  initialState,
  on(UserAccountsActions.loadUserAccounts, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserAccountsActions.loadUserAccountsSuccess, (state, { userAccounts }) =>
    userAccountsAdapter.setAll(userAccounts, { ...state, loaded: true })
  ),
  on(UserAccountsActions.loadUserAccountsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return userAccountsReducer(state, action);
}
