import getEnvironment from '@/helpers/environmentHelper';

export const API_BASE_URL = getEnvironment('IPOST_API_BASE_URL');
export const DEFAULT_HTTP_TIMEOUT = Number(
  getEnvironment('IPOST_DEFAULT_HTTP_TIMEOUT'),
);
