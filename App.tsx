import React, { useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import HomeScreen from "./components/HomePage"; // Adjust the path if needed

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#177581" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isAuthenticated ? (
            <>
              <Stack.Screen name="Login">
                {(props) => <Login {...props} setIsAuthenticated={setIsAuthenticated} />}
              </Stack.Screen>
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          ) : (
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
