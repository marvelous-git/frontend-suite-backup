import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: () =>
      //     import(
      //       '@lms/dashboard-feature-shell'
      //     ).then(module => module.LmsDashboardDashboardFeatureShellModule)
      // },
      // {
      //   path: 'users',
      //   loadChildren: () =>
      //     import(
      //       '@lms/users-feature-shell'
      //     ).then(module => module.LmsUsersUsersFeatureShellModule)
      // },
      // {
      //   path: 'user-accounts',
      //   loadChildren: () =>
      //     import(
      //       '@lib/lms/user-accounts/user-accounts-feature-shell'
      //     ).then((module) => module.UserAccountsFeatureShellModule),
      // },        {
      //   path: 'user-groups-feature-shell',
      //   loadChildren: () =>
      //     import(
      //       '@lib/lms/user-groups/user-groups-feature-shell'
      //     ).then((module) => module.UserGroupsFeatureShellModule),
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
