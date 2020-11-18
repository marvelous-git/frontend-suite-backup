import { NgModule, Type, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UtilAuthModule } from '@frontend-suite/shared/util-auth';
import {
  DataAccessConfiguration,
  DATA_ACCESS_CONFIGURATION_TOKEN
} from './tokens';
import {
  TokenInterceptorService,
  ErrorInterceptorService
} from './interceptors';
import {
  AuthApiService,
} from './apis';

@NgModule({
  imports: [CommonModule, HttpClientModule, UtilAuthModule],
  exports: [HttpClientModule]
})
export class DataAccessModule {
  static forRoot(
    configuration: DataAccessConfiguration
  ): any[] | Type<DataAccessModule> | ModuleWithProviders<DataAccessModule> {
    return {
      ngModule: DataAccessModule,
      providers: [
        {
          provide: DATA_ACCESS_CONFIGURATION_TOKEN,
          useValue: configuration
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptorService,
          multi: true
        },
        AuthApiService,
      ]
    };
  }
}

