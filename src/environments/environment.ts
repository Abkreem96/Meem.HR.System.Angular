import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'System',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44391/',
    redirectUri: baseUrl,
    clientId: 'System_App',
    responseType: 'code',
    scope: 'offline_access System',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44391',
      rootNamespace: 'Meem.HR.System',
    },
  },
} as Environment;
