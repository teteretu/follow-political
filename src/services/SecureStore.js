import { AsyncStorage } from '@react-native-async-storage/async-storage';

const PersistSecureStore = {

  getSplashSettings: async () => {
    return await AsyncStorage.getItem("splashSettings");
  },

  setSplashSettings: async (splashSettings) => {
    return await AsyncStorage.setItem("splashSettings", splashSettings);
  },

  clearSecureStore: async () => {
    await AsyncStorage.removeItem("splashSettings");
  },
};

export default PersistSecureStore;
