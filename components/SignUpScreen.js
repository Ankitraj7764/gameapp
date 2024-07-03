
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text,TouchableOpacity, Image } from 'react-native';
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Toast from 'react-native-toast-message';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
   const data=   await createUserWithEmailAndPassword(auth,email, password);
      // await AsyncStorage.setItem('userToken', email); 
     
    Toast.show({
      type: 'success',
      text1: 'Successfully signup please login!!',
      text2: data.message,
    });
    
      navigation.navigate('Login');
    } catch (error) { 
      
      Toast.show({
      type: 'error',
      text1: 'Login Error',
      text2: error.message,
    });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/cred.jpg')} style={styles.image} />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Already have an account? Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    marginBottom: 8,
  },
  button: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'white'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
  link: {
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  }
});

export default SignUpScreen;
