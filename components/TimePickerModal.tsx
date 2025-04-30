import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Modal, Pressable, Animated, PanResponder } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import styles from '../styles/StylesTimePickerModal';

interface TimePickerModalProps {
  visible: boolean;
  onClose: () => void;
  onTimeSelect: (time: Date) => void;
  initialTime?: Date;
}

const TimePickerModal: React.FC<TimePickerModalProps> = ({
  visible,
  onClose,
  onTimeSelect,
  initialTime = new Date(),
}) => {
  const [selectedTime, setSelectedTime] = useState(initialTime);
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

  const handleTimeChange = (event: any, time?: Date) => {
    if (time) {
      setSelectedTime(time);
    }
  };

  const handleConfirm = () => {
    onTimeSelect(selectedTime);
    onClose();
  };

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
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={handleClose}
    >
      <Animated.View style={[styles.modalContainer, { opacity: fadeAnim }]}>
        <BlurView intensity={20} tint="light" style={styles.modalContainer}>
          <Pressable style={styles.modalContainer} onPress={handleClose}>
            <Animated.View 
              style={[
                styles.modalContent,
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
                <Text style={styles.title}>Select Time</Text>
                <Pressable onPress={handleClose} style={styles.closeButton}>
                  <AntDesign name="close" size={24} color="#333" />
                </Pressable>
              </View>

              <View style={styles.timePickerContainer}>
                <DateTimePicker
                  value={selectedTime}
                  mode="time"
                  display="spinner"
                  onChange={handleTimeChange}
                  style={styles.timePicker}
                  textColor="black"
                  themeVariant="light"
                />
              </View>

              <View style={styles.buttonContainer}>
                <Pressable
                  style={[styles.button, styles.cancelButton]}
                  onPress={handleClose}
                >
                  <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.confirmButton]}
                  onPress={handleConfirm}
                >
                  <Text style={[styles.buttonText, styles.confirmButtonText]}>Confirm</Text>
                </Pressable>
              </View>
            </Animated.View>
          </Pressable>
        </BlurView>
      </Animated.View>
    </Modal>
  );
};

export default TimePickerModal; 