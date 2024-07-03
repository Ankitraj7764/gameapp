import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text,TouchableOpacity, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Assuming you use Firebase auth
import { auth } from '../firebase';
import Toast from 'react-native-toast-message';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = async () => {
    // Reset error messages
    setEmailError('');
    setPasswordError('');

    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      
      Toast.show({
        type: 'success',
        text1: 'Successfully logged in!',
        text2: data.message,
      });
      navigation.navigate('GameFeed');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Login Error',
        text2: error.message,
      });

      // Display error messages under respective input boxes
      // if (error.code.includes('email')) {
      //   setEmailError(error.message);
      // } else if (error.code.includes('password')) {
      //   setPasswordError(error.message);
      // } else {
      //   setEmailError('An error occurred. Please check your credentials.');
      // }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/cred.jpg')} style={styles.image}/>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, emailError ? styles.errorBorder : null]}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.input, passwordError ? styles.errorBorder : null]}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.navigate('SignUp')} style={styles.link}>Don't have an account? Sign Up</Text>
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
    marginBottom: 8,
    padding: 10,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
  link: {
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
