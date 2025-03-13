import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WaterTracker = () => {
  const [currentIntake, setCurrentIntake] = useState(1500);
  const [totalGoal, setTotalGoal] = useState(2500);
  const [goalModalVisible, setGoalModalVisible] = useState(false);
  const [newGoal, setNewGoal] = useState(totalGoal.toString());
  const [isVolumeModalVisible, setVolumeModalVisible] = useState(false);
  const [intakeVolume, setIntakeVolume] = useState(250);
  const [measurement, setMeasurement] = useState('ml');

  useEffect(() => {
    const loadSettings = async () => {
      const savedVolume = await AsyncStorage.getItem('intakeVolume');
      const savedMeasurement = await AsyncStorage.getItem('measurement');
      const savedGoal = await AsyncStorage.getItem('totalGoal');
      if (savedVolume) setIntakeVolume(parseInt(savedVolume));
      if (savedMeasurement) setMeasurement(savedMeasurement);
      if (savedGoal) setTotalGoal(parseInt(savedGoal));
    };
    loadSettings();
  }, []);

  const addWaterIntake = () => {
    if (currentIntake + intakeVolume <= totalGoal) {
      setCurrentIntake(currentIntake + intakeVolume);
    }
  };

  const saveVolumeAndMeasurement = async () => {
    await AsyncStorage.setItem('intakeVolume', intakeVolume.toString());
    await AsyncStorage.setItem('measurement', measurement);
    Alert.alert('Saved!', 'Your volume and measurement have been updated.');
    setVolumeModalVisible(false);
  };

  const handleVolumeChange = (value: string) => {
    const newVolume = parseInt(value) || 0;
    setIntakeVolume(newVolume);
  };
  

  const handleSetGoal = () => {
    const parsedGoal = parseInt(newGoal);
    if (!isNaN(parsedGoal) && parsedGoal > 0) {
      setTotalGoal(parsedGoal);
    }
    setGoalModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Stay Hydrated</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButtonSelected}><Text style={styles.trackerText}>Tracker</Text></TouchableOpacity>
        <TouchableOpacity style={styles.toggleButton}><Text style={styles.toggleText}>Trends</Text></TouchableOpacity>
      </View>

      {/* Goal Card */}
      <View style={styles.goalCard}>
        <Text style={styles.goalTime}>11:00 AM</Text>
        <Text style={styles.goalDetails}>250ml water (1 Glass)</Text>
        <TouchableOpacity style={styles.addGoalButton} onPress={() => setGoalModalVisible(true)}>
          <Text style={styles.addGoalText}>Add Your Goal</Text>
        </TouchableOpacity>
      </View>

      {/* Water Intake Progress */}
      <View style={styles.waterTracker}>
        <Text style={styles.waterText}>{currentIntake} ml</Text>
        <Text style={styles.goalText}>/ {totalGoal} ml</Text>
        <TouchableOpacity style={styles.addButton} onPress={addWaterIntake}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Controls */}
      <View style={styles.bottomControls}>
        <TouchableOpacity style={styles.iconButton} onPress={() => setGoalModalVisible(true)}><Text>⭐</Text><Text>Change Goal</Text></TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => setVolumeModalVisible(true)}><Text>💧</Text><Text>Change Volume per Intake</Text></TouchableOpacity>
      </View>

      {/* Volume Modal */}
      <Modal transparent={true} visible={isVolumeModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Volume per Intake</Text>
            <TextInput
              style={styles.goalInput}
              keyboardType="numeric"
              value={intakeVolume.toString()}
              onChangeText={handleVolumeChange}
            />
            <TouchableOpacity onPress={() => setMeasurement(measurement === 'ml' ? 'oz' : 'ml')}>
              <Text style={styles.modalButtonText}>{measurement.toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={saveVolumeAndMeasurement}>
              <Text style={styles.modalButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      {/* Goal Modal */}
      <Modal transparent={true} visible={goalModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Water Intake Goal</Text>
            <TextInput
              style={styles.goalInput}
              keyboardType="numeric"
              value={newGoal}
              onChangeText={setNewGoal}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={() => setGoalModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleSetGoal}>
                <Text style={styles.modalButtonText}>Set Goal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#f6f6f6', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20, color: '#165c59' },
  toggleContainer: { flexDirection: 'row', marginBottom: 20 },
  toggleButton: { paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20, borderWidth: 1, borderColor: '#165c59', marginHorizontal: 5 },
  toggleButtonSelected: { backgroundColor: '#165c59', paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20, marginHorizontal: 5 },
  toggleText: { color: '#165c59', fontWeight: 'bold' },
  trackerText: { color: 'rgb(255, 255, 255)', fontWeight: 'bold' },
  goalCard: { backgroundColor: '#d1ebeb', padding: 20, borderRadius: 15, alignItems: 'center', marginBottom: 20 },
  goalTime: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  goalDetails: { color: '#6c6c6c', marginBottom: 10 },
  addGoalButton: { backgroundColor: '#165c59', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 20 },
  addGoalText: { color: '#fff', fontWeight: 'bold' },
  waterTracker: { alignItems: 'center', marginBottom: 40 },
  waterText: { fontSize: 48, color: '#165c59', fontWeight: 'bold' },
  goalText: { fontSize: 18, color: '#6c6c6c' },
  addButton: { backgroundColor: '#165c59', borderRadius: 50, padding: 10, marginTop: 10 },
  addButtonText: { color: '#fff', fontSize: 30 },
  bottomControls: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  iconButton: { alignItems: 'center', marginTop: 20 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  goalInput: { borderBottomWidth: 1, width: '60%', marginBottom: 20, textAlign: 'center', fontSize: 24 },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  modalButton: { paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#165c59', borderRadius: 10, marginHorizontal: 5 },
  modalButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default WaterTracker;