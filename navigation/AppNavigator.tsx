import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddMedicineLanding from "../screens/AddMedicineLanding";
import AddMedicineForm from "../screens/AddMedicineForm";
import HomeScreen from "../screens/HomePage";
import WaterTracker from "../screens/WaterTracker";
import SymptomReport from "../screens/SymptomReport";

const Stack = createStackNavigator();

// Medicine Stack (For "Pill" Section)
const PillStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MedicineLanding" component={AddMedicineLanding} />
    <Stack.Screen name="AddMedicineForm" component={AddMedicineForm} />
  </Stack.Navigator>
);

// Home Stack
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

// Water Tracker Stack
const WaterStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="WaterTracker" component={WaterTracker} />
  </Stack.Navigator>
);

// Symptom Report Stack
const ReportStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SymptomReport" component={SymptomReport} />
  </Stack.Navigator>
);

// Export all stacks
export { HomeStack, PillStack, WaterStack, ReportStack };
