import { UserAccountsEntity } from './user-accounts.models';
import {
  State,
  userAccountsAdapter,
  initialState,
} from './user-accounts.reducer';
import * as UserAccountsSelectors from './user-accounts.selectors';

describe('UserAccounts Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUserAccountsId = (it) => it['id'];
  const createUserAccountsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UserAccountsEntity);

  let state;

  beforeEach(() => {
    state = {
      userAccounts: userAccountsAdapter.setAll(
        [
          createUserAccountsEntity('PRODUCT-AAA'),
          createUserAccountsEntity('PRODUCT-BBB'),
          createUserAccountsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('UserAccounts Selectors', () => {
    it('getAllUserAccounts() should return the list of UserAccounts', () => {
      const results = UserAccountsSelectors.getAllUserAccounts(state);
      const selId = getUserAccountsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = UserAccountsSelectors.getSelected(state);
      const selId = getUserAccountsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getUserAccountsLoaded() should return the current 'loaded' status", () => {
      const result = UserAccountsSelectors.getUserAccountsLoaded(state);

      expect(result).toBe(true);
    });

    it("getUserAccountsError() should return the current 'error' state", () => {
      const result = UserAccountsSelectors.getUserAccountsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
