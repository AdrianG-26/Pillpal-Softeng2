import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Taskbar from "./components/Taskbar";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#177581"
        translucent={false}
      />

      <Taskbar />
    </SafeAreaProvider>
  );
}
