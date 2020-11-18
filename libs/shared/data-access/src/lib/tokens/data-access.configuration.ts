import { InjectionToken } from '@angular/core';

export interface DataAccessConfiguration {
  useSources: boolean;
  client?: { id: string; secret: string };
  authorization: { headerType: string; scheme: string };
  urls: {
    [id: string]: string;
  };
}

export const DATA_ACCESS_CONFIGURATION_TOKEN = new InjectionToken<
  DataAccessConfiguration
>(`Configure Data Access Library`);
