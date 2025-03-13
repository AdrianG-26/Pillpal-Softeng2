import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { stylesTBar } from "../style-components/StylesTaskbar";
import HomeScreen from "../components/HomePage";
import AddMedicineLanding from "../components/AddMedicineLanding";
import AddMedicineForm from "../components/AddMedicineForm";
import WaterTracker from "../components/WaterTracker";
import SymptomReport from "../components/SymptomReport";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
            <View style={focused ? stylesTBar.iconActive : null}>
              <MaterialCommunityIcons
                name={iconName}
                size={size + 3}
                color={focused ? "rgb(23, 117, 129)" : color} // Change color inside active container
              />
            </View>
          );
        },
        tabBarActiveTintColor: "rgb(23, 117, 129)",
        tabBarInactiveTintColor: "rgb(239, 236, 236)",
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
