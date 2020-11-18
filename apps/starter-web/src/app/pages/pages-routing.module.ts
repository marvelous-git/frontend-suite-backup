import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import(
            '@frontend-suite/starter-web/dashboard/dashboard-feature-shell'
          ).then((module) => module.DashboardFeatureShellModule),
      },
      {
        path: 'user-accounts',
        loadChildren: () =>
          import(
            '@frontend-suite/starter-web/user-accounts/user-accounts-feature-shell'
          ).then((module) => module.UserAccountsFeatureShellModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import(
            '@frontend-suite/starter-web/user-accounts/auth-feature-shell'
          ).then((module) => module.AuthFeatureShellModule),
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
