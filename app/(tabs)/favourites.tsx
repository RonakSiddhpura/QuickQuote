import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, Alert, StyleSheet } from 'react-native';
import QuoteCard from '../components/QuoteCard';
import { useTheme } from '../context/ThemeContext';
import { getFavorites, removeFavorite } from '../utils/storage';
import { useIsFocused  } from '@react-navigation/native';

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState<{ content: string; author: string }[]>([]);
  const { theme } = useTheme();

  const loadFavorites = async () => {
    const data = await getFavorites();
    setFavorites(data);
  };

  const handleRemove = async (index: number) => {
    await removeFavorite(index);
    await loadFavorites(); // refresh after removing
    Alert.alert('Removed', 'Quote removed from favorites.');
  };

 // Only run when screen is focused
 const isFocused = useIsFocused();
  useEffect(() => {
  if (isFocused) {
    loadFavorites(); 
  }
 }, [isFocused]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={favorites}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <QuoteCard content={item.content} author={item.author} />
            <Button title="Remove" onPress={() => handleRemove(index)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  itemContainer: { marginBottom: 12 },
});
