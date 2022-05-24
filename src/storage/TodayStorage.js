import AsyncStorage from '@react-native-community/async-storage';

const key = 'invenToday';

const TodayStorage = {
  async get() {
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (e) {
      throw new Error('Failed to load Todaycard');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save Todaycard');
    }
  },
};

export default TodayStorage;