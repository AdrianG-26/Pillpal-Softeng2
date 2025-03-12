import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { stylesTBar } from '../style-components/StylesTaskbar'; 
import HomeScreen from '../components/HomePage';
import AddMedicine from './AddMedicine';
import WaterTracker from './WaterTracker';
import SymptomReport from './SymptomReport';

const Tab = createBottomTabNavigator();

const Taskbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof MaterialCommunityIcons.glyphMap = 'home'; 

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Pill') iconName = 'pill';
          else if (route.name === 'Report') iconName = 'file-document';
          else if (route.name === 'Water') iconName = 'water';

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={color}
              style={focused ? stylesTBar.iconActive : null}
            />
          );
        },
        tabBarActiveTintColor: 'rgb(100,2,2)',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: stylesTBar.taskbarContainer,
        tabBarLabel: () => null,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pill" component={AddMedicine} />
      <Tab.Screen name="Report" component={SymptomReport} />
      <Tab.Screen name="Water" component={WaterTracker} />
    </Tab.Navigator>
  );
};

export default Taskbar;
