import React, { useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  Modal, 
  Pressable, 
  Animated, 
  PanResponder,
} from 'react-native';
import { BlurView } from 'expo-blur';
import styles from '../styles/StylesModalDropdown';

interface ModalDropdownProps<T extends string> {
  visible: boolean;
  onClose: () => void;
  title: string;
  options: { label: string; value: T }[];
  selectedValue: T;
  onSelect: (value: T) => void;
}

const ModalDropdown = <T extends string>({
  visible,
  onClose,
  title,
  options,
  selectedValue,
  onSelect,
}: ModalDropdownProps<T>) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(1000)).current;

  useEffect(() => {
    if (visible) {
      pan.setValue({ x: 0, y: 0 });
      fadeAnim.setValue(0);
      slideAnim.setValue(1000);
      
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
          damping: 50,
          stiffness: 120,
        })
      ]).start();
    }
  }, [visible]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return Math.abs(gestureState.dy) > Math.abs(gestureState.dx);
    },
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) {
        pan.y.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 50) {
        Animated.parallel([
          Animated.timing(pan.y, {
            toValue: 1000,
            duration: 200,
            useNativeDriver: true
          }),
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
          })
        ]).start(onClose);
      } else {
        Animated.spring(pan.y, {
          toValue: 0,
          useNativeDriver: true
        }).start();
      }
    }
  });

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(pan.y, {
        toValue: 1000,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      })
    ]).start(onClose);
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}
    >
      <Animated.View style={[styles.blurContainer, { opacity: fadeAnim }]}>
        <BlurView intensity={20} tint="light" style={styles.blurContainer}>
          <Pressable style={styles.blurContainer} onPress={handleClose}>
            <Animated.View 
              style={[
                styles.modalView,
                { 
                  transform: [
                    { translateY: Animated.add(slideAnim, pan.y) } 
                  ] 
                }
              ]}
              {...panResponder.panHandlers}
            >
              <Pressable onPress={handleClose} style={styles.dragIndicatorContainer}>
                <View style={styles.dragIndicator} />
              </Pressable>
              
              <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
              </View>

              <View style={styles.optionsContainer}>
                {options.map((option) => (
                  <Pressable
                    key={option.value}
                    style={[
                      styles.option,
                      selectedValue === option.value && styles.selectedOption
                    ]}
                    onPress={() => {
                      onSelect(option.value);
                      onClose();
                    }}
                  >
                    <Text style={[
                      styles.optionText,
                      selectedValue === option.value && styles.selectedOptionText
                    ]}>
                      {option.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </Animated.View>
          </Pressable>
        </BlurView>
      </Animated.View>
    </Modal>
  );
};

export default ModalDropdown; 