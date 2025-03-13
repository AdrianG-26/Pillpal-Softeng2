import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { stylesAuth } from '../style-components/StylesAuth';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Add signup logic here
    console.log('Signing up with:', name, email, password);
  };

  return (
    <View style={stylesAuth.container}>
      <Text style={stylesAuth.title}>Sign Up</Text>

      <View style={stylesAuth.inputContainer}>
        <Feather name="user" style={stylesAuth.icon} />
        <TextInput
          style={stylesAuth.input}
          placeholder="Full Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
      </View>

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

      <TouchableOpacity style={stylesAuth.button} onPress={handleSignUp}>
        <Text style={stylesAuth.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylesAuth.link}>
        <Text style={stylesAuth.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
