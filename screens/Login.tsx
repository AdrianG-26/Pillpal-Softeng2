import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === "user@example.com" && password === "password123") {
      setIsAuthenticated(true); // Navigate to Home after successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 8 }}
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Go to Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
