
import { baseEnvironment } from './base.environment';

export const environment = {
  ...baseEnvironment,
  production: false,
  nebular: {
    theme: 'default',
    logoName: 'logo.svg',
    logoHeight: '35px',
    userPictureOnly: false,
    userMenus: [{ title: 'Profile' }, { title: 'Log out' }],
  },
  jwtStorageKey: 'starter-web-test-jwt-token',
};
