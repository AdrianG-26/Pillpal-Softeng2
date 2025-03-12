import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Taskbar from "./components/Taskbar";

export default function App() {
  return (
    <SafeAreaProvider>
      <Taskbar />
    </SafeAreaProvider>
  );
}
