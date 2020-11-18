import { NgModule, Type, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthConfiguration, AUTH_CONFIGURATION_TOKEN } from './tokens';
import { NbAuthModule } from '@nebular/auth';

@NgModule({
  imports: [CommonModule, NbAuthModule]
})
export class UtilAuthModule {
  static forRoot(
    configuration: AuthConfiguration
  ): any[] | Type<UtilAuthModule> | ModuleWithProviders<UtilAuthModule> {
    return {
      ngModule: UtilAuthModule,
      providers: [
        {
          provide: AUTH_CONFIGURATION_TOKEN,
          useValue: configuration
        }
      ]
    };
  }
}
