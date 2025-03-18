import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigationState } from "@react-navigation/native";
import { MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
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
    <Stack.Screen name="AddMedicineLanding" component={AddMedicineLanding} />
    <Stack.Screen name="AddMedicineForm" component={AddMedicineForm} />
  </Stack.Navigator>
);

const TopNavigationBar = () => (
  <View style={stylesTBar.topSection}>
    <View style={stylesTBar.userContainer}>
      <Feather name="user" style={stylesTBar.userIcon} />
      <View style={stylesTBar.textContainer}>
        <Text style={stylesTBar.welcomeText}>Hi User!</Text>
        <Text style={stylesTBar.welcomeText}>How do you feel today?</Text>
      </View>
    </View>
    <View style={stylesTBar.iconContainer}>
      <Ionicons name="notifications" style={stylesTBar.iconNotification} />
      <Feather name="phone" style={stylesTBar.iconContact} />
      <Feather name="menu" style={stylesTBar.burgerMenu} />
    </View>
  </View>
);

const Taskbar = () => {
  const currentRouteName = useNavigationState((state) => {
    if (!state || state.index === undefined || !state.routes) return null; // Prevent error

    const currentRoute = state.routes[state.index];

    // If on "Pill" tab and it has a nested stack, get inner screen name
    if (currentRoute.name === "Pill" && currentRoute.state?.index !== undefined) {
      const nestedRoute = currentRoute.state.routes?.[currentRoute.state.index];
      return nestedRoute?.name || "Pill";
    }

    return currentRoute.name;
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Hide Top Navigation Bar when on AddMedicineForm */}
      {currentRouteName !== "AddMedicineForm" && <TopNavigationBar />}

      {/* Bottom Tab Navigator */}
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
                  color={focused ? "rgb(23, 117, 129)" : color}
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
    </View>
  );
};

export default Taskbar;
