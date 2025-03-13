import { StyleSheet } from 'react-native';

export const stylesTBar = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
  },

  taskbarContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgb(23, 117, 129)',
    shadowColor: "rgb(4, 2, 50)",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },

  iconActive: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(235, 244, 246)', 
    borderWidth: 2, 
    borderColor: 'rgb(251, 251, 251)', 
    borderRadius: 15,  
    height: 45,
    width: 45,
  },
});
