import React from 'react';
import { View, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles/StylesQuantityInput';

interface QuantityInputProps {
  value: string;
  onChange: (value: string) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ value, onChange }) => {
  const handleIncrement = () => {
    const numValue = parseInt(value) || 0;
    onChange((numValue + 1).toString());
  };

  const handleDecrement = () => {
    const numValue = parseInt(value) || 0;
    if (numValue > 0) {
      onChange((numValue - 1).toString());
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.label}>Quantity</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          keyboardType="numeric"
          placeholder="0"
        />
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleDecrement}>
            <AntDesign name="minus" size={16} color="white" />
          </Pressable>
          <Pressable style={styles.button} onPress={handleIncrement}>
            <AntDesign name="plus" size={16} color="white" />
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default QuantityInput; 