import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { stylesTBar } from '../style-components/StylesTaskbar'; // Updated import
import HomeScreen from '../components/HomePage';
import AddMedicine from './AddMedicine';
import WaterTracker from './WaterTracker';
import SymptomReport from './SymptomReport';

const Tab = createBottomTabNavigator();

const Taskbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: keyof typeof MaterialCommunityIcons.glyphMap = 'home'; // Explicitly type iconName

            // Assign iconName based on route name
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Pill') {
              iconName = 'pill';
            } else if (route.name === 'Report') {
              iconName = 'file-document';
            } else if (route.name === 'Water') {
              iconName = 'water';
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
                style={focused ? stylesTBar.iconActive : null} // Apply iconActive style when the tab is active
              />
            );
          },
          tabBarActiveTintColor: 'rgb(100,2,2)', // Active tab color
          tabBarInactiveTintColor: 'white', // Inactive tab color
          tabBarStyle: stylesTBar.taskbarContainer, // Apply the taskbarContainer style
          tabBarLabel: () => null, // Remove tab label
          headerShown: false, // Remove header from tab screen
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Pill" component={AddMedicine} />
        <Tab.Screen name="Report" component={SymptomReport} />
        <Tab.Screen name="Water" component={WaterTracker} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Taskbar;
