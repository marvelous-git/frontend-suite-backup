import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USERACCOUNTS_FEATURE_KEY,
  State,
  UserAccountsPartialState,
  userAccountsAdapter,
} from './user-accounts.reducer';

// Lookup the 'UserAccounts' feature state managed by NgRx
export const getUserAccountsState = createFeatureSelector<
  UserAccountsPartialState,
  State
>(USERACCOUNTS_FEATURE_KEY);

const { selectAll, selectEntities } = userAccountsAdapter.getSelectors();

export const getUserAccountsLoaded = createSelector(
  getUserAccountsState,
  (state: State) => state.loaded
);

export const getUserAccountsError = createSelector(
  getUserAccountsState,
  (state: State) => state.error
);

export const getAllUserAccounts = createSelector(
  getUserAccountsState,
  (state: State) => selectAll(state)
);

export const getUserAccountsEntities = createSelector(
  getUserAccountsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getUserAccountsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getUserAccountsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
