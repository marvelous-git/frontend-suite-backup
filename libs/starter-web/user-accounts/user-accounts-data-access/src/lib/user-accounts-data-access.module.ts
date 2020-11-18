import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUserAccounts from './+state/user-accounts.reducer';
import { UserAccountsEffects } from './+state/user-accounts.effects';
import { UserAccountsFacade } from './+state/user-accounts.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromUserAccounts.USERACCOUNTS_FEATURE_KEY,
      fromUserAccounts.reducer
    ),
    EffectsModule.forFeature([UserAccountsEffects]),
  ],
  providers: [UserAccountsFacade],
})
export class UserAccountsDataAccessModule {}
