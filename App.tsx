import React, { useEffect } from "react";
import 'react-native-get-random-values';
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { CalendarProvider } from './context/CalendarContext';
import { MedicineProvider } from "./context/MedicineContext";
import { SymptomsProvider } from "./context/SymptomContext";
import { styleMain } from "./styles/GlobalStyles";
import Taskbar from "./navigation/Taskbar";
import { initializeNotifications } from "./services/NotificationService";

export default function App() {
  useEffect(() => {
    initializeNotifications();
  }, []);

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
