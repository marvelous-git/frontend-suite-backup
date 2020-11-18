import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { UserAccountsEffects } from './user-accounts.effects';
import * as UserAccountsActions from './user-accounts.actions';

describe('UserAccountsEffects', () => {
  let actions: Observable<any>;
  let effects: UserAccountsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UserAccountsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(UserAccountsEffects);
  });

  describe('loadUserAccounts$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UserAccountsActions.loadUserAccounts() });

      const expected = hot('-a-|', {
        a: UserAccountsActions.loadUserAccountsSuccess({ userAccounts: [] }),
      });

      expect(effects.loadUserAccounts$).toBeObservable(expected);
    });
  });
});
