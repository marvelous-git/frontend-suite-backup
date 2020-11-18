import { createAction, props } from '@ngrx/store';
import { UserAccountsEntity } from './user-accounts.models';

export const loadUserAccounts = createAction(
  '[UserAccounts] Load UserAccounts'
);

export const loadUserAccountsSuccess = createAction(
  '[UserAccounts] Load UserAccounts Success',
  props<{ userAccounts: UserAccountsEntity[] }>()
);

export const loadUserAccountsFailure = createAction(
  '[UserAccounts] Load UserAccounts Failure',
  props<{ error: any }>()
);
