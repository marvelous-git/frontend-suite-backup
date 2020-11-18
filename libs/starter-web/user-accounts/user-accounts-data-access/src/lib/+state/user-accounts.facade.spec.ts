import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { UserAccountsEntity } from './user-accounts.models';
import { UserAccountsEffects } from './user-accounts.effects';
import { UserAccountsFacade } from './user-accounts.facade';

import * as UserAccountsSelectors from './user-accounts.selectors';
import * as UserAccountsActions from './user-accounts.actions';
import {
  USERACCOUNTS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './user-accounts.reducer';

interface TestSchema {
  userAccounts: State;
}

describe('UserAccountsFacade', () => {
  let facade: UserAccountsFacade;
  let store: Store<TestSchema>;
  const createUserAccountsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UserAccountsEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(USERACCOUNTS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([UserAccountsEffects]),
        ],
        providers: [UserAccountsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(UserAccountsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allUserAccounts$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(UserAccountsActions.loadUserAccounts());

        list = await readFirst(facade.allUserAccounts$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadUserAccountsSuccess` to manually update list
     */
    it('allUserAccounts$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allUserAccounts$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          UserAccountsActions.loadUserAccountsSuccess({
            userAccounts: [
              createUserAccountsEntity('AAA'),
              createUserAccountsEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allUserAccounts$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
