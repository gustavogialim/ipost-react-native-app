import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Storage {
  setItem: (key: string, value: string) => Promise<void>;
  getItem: (key: string) => Promise<string | null>;
  removeItem: (key: string) => Promise<void>;
}

const setItem = async (key: string, value: string): Promise<void> =>
  await AsyncStorage.setItem(key, value);

const getItem = async (key: string): Promise<string | null> =>
  await AsyncStorage.getItem(key);

const removeItem = async (key: string): Promise<void> =>
  await AsyncStorage.removeItem(key);

const storage: Storage = {
  setItem,
  getItem,
  removeItem,
};

export default storage;
