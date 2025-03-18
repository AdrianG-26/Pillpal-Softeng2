import React from "react";
import 'react-native-get-random-values';
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { CalendarProvider } from './context/CalendarContext';
import { MedicineProvider } from "./context/MedicineContext";
import { SymptomsProvider } from "./context/SymptomContext";
import { styleMain } from "./style-components/GlobalStyles";
import Taskbar from "./navigation/Taskbar";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styleMain.SafeAreaContainer} edges={["top", "left", "right"]}>
        <CalendarProvider>
        <MedicineProvider>
        <SymptomsProvider>
          <NavigationContainer>
              <StatusBar
                barStyle="dark-content"
                backgroundColor="rgb(68, 171, 181)"
                translucent={true}
              />
              <Taskbar />
            </NavigationContainer>
        </SymptomsProvider>
        </MedicineProvider>
        </CalendarProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
