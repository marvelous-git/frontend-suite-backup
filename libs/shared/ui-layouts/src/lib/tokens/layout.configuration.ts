import { InjectionToken } from '@angular/core';

export interface UserMenu {
  title: string;
}

export interface LayoutConfiguration {
  applicationName: string;
  nebular?: {
    userPictureOnly: boolean;
    userMenus: UserMenu[];
    theme: string;
    logoName: string;
    logoHeight: string;
  };
}

export const LAYOUT_CONFIGURATION_TOKEN = new InjectionToken<
  LayoutConfiguration
>('Configure Layout Configuration.');
