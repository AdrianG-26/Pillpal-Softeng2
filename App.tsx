import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { CalendarProvider } from './context/CalendarContext';
import { MedicineProvider } from "./context/MedicineContext";
import { styleMain } from "./style-components/GlobalStyles";
import Taskbar from "./navigation/Taskbar";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styleMain.SafeAreaContainer} edges={["top", "left", "right"]}>
        <CalendarProvider>
          <MedicineProvider>
            <NavigationContainer>
              <StatusBar
                barStyle="dark-content"
                backgroundColor="rgb(68, 171, 181)"
                translucent={true}
              />
              <Taskbar />
            </NavigationContainer>
          </MedicineProvider>
        </CalendarProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
