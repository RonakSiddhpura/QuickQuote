import React, { useEffect, useState } from 'react';
import {
  View,
  Button,
  ActivityIndicator,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Switch,
  Share,
  Text
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import QuoteCard from '../components/QuoteCard';
import { useTheme } from '../context/ThemeContext';
import { addFavorite } from '../utils/storage';

const QUOTE_API = 'https://zenquotes.io/api/quotes';

export default function HomeScreen() {
  const [quote, setQuote] = useState<{ content: string; author: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch(QUOTE_API);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      setQuote({ content: randomQuote.q, author: randomQuote.a });
    } catch (error) {
      console.error('Fetch error:', error);
      Alert.alert('Error', 'Failed to fetch quote');
    } finally {
      setLoading(false);
    }
  };

const onShare = async ()=>{
    if (!quote) {
    Alert.alert('No quote to share!');
    return;
  }
  try{
    await Share.share({
      message: `"${quote.content}" - ${quote.author}`
    });
  } catch (error) {
    Alert.alert('Error','Failed to share quote');
  }
}

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          {quote && <QuoteCard content={quote.content} author={quote.author} />}

            <TouchableOpacity onPress={fetchQuote} style={styles.button}>
                 <Text style={styles.buttonText}>Get Another Quote</Text>
             </TouchableOpacity>

          {/* <Button title="Get Another Quote" onPress={fetchQuote} /> */}

          {/* <TouchableOpacity
            onPress={() => {
              if (quote){
                Alert.alert("Do you want to add this quote to your favorites?")
                 addFavorite(quote);
              }
            }}
            style={{ marginVertical: 10 }}
          >
            <FontAwesome name="heart" size={30} color="red" />
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => {
              if (quote) {
                Alert.alert(
                  'Add to Favorites',
                  'Do you want to add this quote to your favorites?',
                  [
                    { text: 'Cancel', style: 'cancel' },
                    {
                      text: 'Add',
                      onPress: () => addFavorite(quote),
                    },
                  ],
                  { cancelable: true }
                );
              }
            }}
            style={[{ marginVertical: 10 }, styles.button]}
          >
            
            <Text style = {styles.buttonText }>Add to favourite {" "}<FontAwesome name="heart" size={15} color="red" /> </Text>
          </TouchableOpacity>

             <TouchableOpacity onPress={onShare} style={styles.button}>
                 <Text style={styles.buttonText}>Share</Text>
             </TouchableOpacity>

          <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Switch
              value={theme.mode === 'dark'}
              onValueChange={toggleTheme}
              trackColor={{ false: theme.switchTrack, true: theme.switchTrackActive }}
              thumbColor={theme.switchThumb}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button :{
    width:200,
    borderRadius: 8,
    backgroundColor:'#2A7B9B',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
