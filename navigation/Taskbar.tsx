import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { stylesTBar } from "../style-components/StylesTaskbar"; 
import HomeScreen from "../components/HomePage";
import AddMedicineLanding from "../components/AddMedicineLanding";
import AddMedicineForm from "../components/AddMedicineForm"; // Import Form Screen
import WaterTracker from "../components/WaterTracker";
import SymptomReport from "../components/SymptomReport";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for the "Pill" section
const PillStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MedicineLanding" component={AddMedicineLanding} />
    <Stack.Screen name="AddMedicineForm" component={AddMedicineForm} />
  </Stack.Navigator>
);

const Taskbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof MaterialCommunityIcons.glyphMap = "home";

          if (route.name === "Home") iconName = "home";
          else if (route.name === "Pill") iconName = "pill";
          else if (route.name === "Report") iconName = "file-document";
          else if (route.name === "Water") iconName = "water";

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={color}
              style={focused ? stylesTBar.iconActive : null}
            />
          );
        },
        tabBarActiveTintColor: "rgb(100,2,2)",
        tabBarInactiveTintColor: "white",
        tabBarStyle: stylesTBar.taskbarContainer,
        tabBarLabel: () => null,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pill" component={PillStack} />
      <Tab.Screen name="Report" component={SymptomReport} />
      <Tab.Screen name="Water" component={WaterTracker} />
    </Tab.Navigator>
  );
};

export default Taskbar;
