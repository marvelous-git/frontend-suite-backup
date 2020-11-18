import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginCoreComponent } from './containers/login-core/login-core.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [LoginCoreComponent, LoginComponent],
})
export class AuthFeatureShellModule {}
