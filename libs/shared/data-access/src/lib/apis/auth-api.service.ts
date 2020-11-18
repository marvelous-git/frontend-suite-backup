import { Injectable, Inject } from '@angular/core';
import { BaseApi } from '../abstracts';
import {
  DATA_ACCESS_CONFIGURATION_TOKEN,
  DataAccessConfiguration
} from '../tokens';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends BaseApi {
  constructor(
    @Inject(DATA_ACCESS_CONFIGURATION_TOKEN)
    configuration: DataAccessConfiguration,
    http: HttpClient
  ) {
    super(http);
    this.server = configuration.urls.auth;
  }
}
