import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddMedicine = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ADD MEDICINE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AddMedicine;
