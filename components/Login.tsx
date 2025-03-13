import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { stylesAuth } from '../style-components/StylesAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <View style={stylesAuth.container}>
      <Text style={stylesAuth.title}>Login</Text>

      <View style={stylesAuth.inputContainer}>
        <Feather name="mail" style={stylesAuth.icon} />
        <TextInput
          style={stylesAuth.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={stylesAuth.inputContainer}>
        <Feather name="lock" style={stylesAuth.icon} />
        <TextInput
          style={stylesAuth.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={stylesAuth.button} onPress={handleLogin}>
        <Text style={stylesAuth.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylesAuth.link}>
        <Text style={stylesAuth.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
