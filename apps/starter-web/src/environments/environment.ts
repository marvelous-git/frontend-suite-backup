
import { baseEnvironment } from './base.environment';

export const environment = {
  ...baseEnvironment,
  production: false,
  nebular: {
    theme: 'default',
    userPictureOnly: false,
    userMenus: [{ title: 'Profile' }, { title: 'Log out' }],
  },
  jwtStorageKey: 'starter-web-test-jwt-token',
};
