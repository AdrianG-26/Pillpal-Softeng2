import { StyleSheet } from 'react-native';

export const stylesTBar = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  contentContainer: {
    flex: 1, // Takes up all available space above the taskbar
  },

  taskbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgb(23, 117, 129)', // Background color for the tab bar
  },

  iconContainer: {
    marginTop: 1000,
  },

  iconActive: {
    color: 'rgb(23, 117, 129)', // Active icon color
    backgroundColor: 'rgb(244, 254, 255)', // No background for the icon itself
    borderWidth: 2, // Border width around the icon
    borderColor: 'rgb(244, 254, 255)', // Pink border

    borderRadius: 10, // Rounded corners for the rectangle
  },

  icon: {
    padding: 5, // Padding for the icon itself
  },
});
