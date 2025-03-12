import { StyleSheet } from 'react-native';

export const stylesTBar = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
  },

  taskbarContainer: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#177581',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },

  iconContainer: {
    marginTop: 1000,
  },

  iconActive: {
    color: '#177581',
    backgroundColor: '#FBFBFB', 
    borderWidth: 2, 
    borderColor: '#FBFBFB', 
    borderRadius: 10, 
  },

  icon: {
    padding: 5,
  },
});
