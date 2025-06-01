import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function QuoteCard({ content, author }: { content: string; author: string }) {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.background }]}>
      <Text style={[styles.quote, { color: theme.text }]}>"{content}"</Text>
      <Text style={[styles.author, { color: theme.text }]}>— {author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    textAlign: 'right',
  },
});
