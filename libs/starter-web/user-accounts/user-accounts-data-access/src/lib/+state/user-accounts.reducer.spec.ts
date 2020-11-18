import { UserAccountsEntity } from './user-accounts.models';
import * as UserAccountsActions from './user-accounts.actions';
import { State, initialState, reducer } from './user-accounts.reducer';

describe('UserAccounts Reducer', () => {
  const createUserAccountsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UserAccountsEntity);

  beforeEach(() => {});

  describe('valid UserAccounts actions', () => {
    it('loadUserAccountsSuccess should return set the list of known UserAccounts', () => {
      const userAccounts = [
        createUserAccountsEntity('PRODUCT-AAA'),
        createUserAccountsEntity('PRODUCT-zzz'),
      ];
      const action = UserAccountsActions.loadUserAccountsSuccess({
        userAccounts,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
