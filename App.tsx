import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { CalendarProvider } from './context/CalendarContext';
import Taskbar from "./components/Taskbar";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CalendarProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#177581"
            translucent={false}
          />
          <Taskbar />
        </CalendarProvider> 
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
