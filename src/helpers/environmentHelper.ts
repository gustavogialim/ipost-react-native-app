import Config from 'react-native-config';

export const getEnvironment = (env: string): string | undefined => {
  const envConfig = Config[env];

  if (!envConfig && __DEV__) {
    // eslint-disable-next-line no-console
    console.error(`⚠️  The environment variable "${env}" is missing.`);
  }

  return envConfig;
};

export default getEnvironment;
