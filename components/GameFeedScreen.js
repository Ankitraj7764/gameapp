import React, { useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';

const games = [
  { id: '1', title: 'Game 1', description: 'Description 1', image: require('../assets/game1.jpg') },
  { id: '2', title: 'Game 2', description: 'Description 2', image: require('../assets/game2.jpg')  },
];

const GameFeedScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null, // Remove the default back button
      headerRight: () => (
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('GameDetail', { game: item })}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={games}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  logoutButton: {
    marginRight: 16,
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 4,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GameFeedScreen;
