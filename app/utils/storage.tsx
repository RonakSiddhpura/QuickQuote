import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'favorites';

export const getFavorites = async () => {
  const stored = await AsyncStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addFavorite = async (quote: { content: string; author: string }) => {
  const favorites = await getFavorites();
  favorites.push(quote);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const removeFavorite = async (index: number) => {
  const favorites = await getFavorites();
  favorites.splice(index, 1);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};
