
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pedometer } from 'expo-sensors';

const GameDashboard = ({ route }) => {
  const { game } = route.params;
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const subscription = Pedometer.watchStepCount(result => {
      if (isMounted) {
        setStepCount(result.steps);
      }
    });

    Pedometer.isAvailableAsync().then(
      result => {
        console.log(`Pedometer available: ${result}`);
      },
      error => {
        console.log(`Pedometer is not available: ${error}`);
      }
    );

    return () => {
      isMounted = false;
      subscription && subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.stepCount}>Steps: {stepCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  stepCount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default GameDashboard;
