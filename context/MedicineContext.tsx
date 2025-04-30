import React, { createContext, useState, useContext, useEffect, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "../services/FirebaseService";
import { collection, doc, setDoc, getDocs, deleteDoc, updateDoc } from '@react-native-firebase/firestore';
import { scheduleMedicineNotification, cancelMedicineNotification, initializeNotifications } from "../services/NotificationService";

// Medicine Type
type Medicine = {
  id: string;
  name: string;
  nextReminder: string; // Format: "YYYY-MM-DD HH:mm"
  dosage: string;
  mode: string;
  quantity: number;
  isActive: boolean;
  alarmEnabled: boolean;
};

// Context Type
type MedicineContextType = {
  medicines: Medicine[];
  addMedicine: (medicine: Omit<Medicine, "id">) => void;
  toggleAlarm: (medicineId: string) => void;
  updateMedicine: (medicineId: string, updates: Partial<Medicine>) => void;
  setMedicines: (value: SetStateAction<Medicine[]>) => void;
};

// Create Context
const MedicineContext = createContext<MedicineContextType | undefined>(undefined);

export const MedicineProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [medicines, setMedicinesState] = useState<Medicine[]>([]);

  // Load medicines from Firestore on mount
  useEffect(() => {
    const loadMedicines = async () => {
      try {
        const medicinesCollection = collection(db, 'medicines');
        const querySnapshot = await getDocs(medicinesCollection);
        const loadedMedicines: Medicine[] = [];
        
        querySnapshot.forEach((doc) => {
          loadedMedicines.push({ id: doc.id, ...doc.data() } as Medicine);
        });
        
        setMedicinesState(loadedMedicines);
        
        // Reschedule notifications for active medicines
        loadedMedicines.forEach(async (medicine: Medicine) => {
          if (medicine.alarmEnabled && medicine.isActive) {
            const scheduledTime = new Date(medicine.nextReminder);
            await scheduleMedicineNotification(
              medicine.id,
              medicine.name,
              medicine.dosage,
              medicine.mode,
              scheduledTime
            );
          }
        });
      } catch (error) {
        console.error('Error loading medicines:', error);
      }
    };
    loadMedicines();
  }, []);

  // Add Medicine Function
  const addMedicine = async (medicine: Omit<Medicine, "id">) => {
    try {
      const newMedicine: Medicine = { 
        ...medicine,
        id: uuidv4(), 
        alarmEnabled: true
      };
      
      // Add to Firestore
      await setDoc(doc(db, 'medicines', newMedicine.id), newMedicine);
      
      setMedicinesState([...medicines, newMedicine]);

      // Schedule notification if alarm is enabled
      if (newMedicine.alarmEnabled) {
        const scheduledTime = new Date(newMedicine.nextReminder);
        await scheduleMedicineNotification(
          newMedicine.id,
          newMedicine.name,
          newMedicine.dosage,
          newMedicine.mode,
          scheduledTime
        );
      }
    } catch (error) {
      console.error('Error adding medicine:', error);
    }
  };

  // Toggle Alarm Function
  const toggleAlarm = async (medicineId: string) => {
    try {
      const updatedMedicines = medicines.map(medicine => {
        if (medicine.id === medicineId) {
          const newAlarmState = !medicine.alarmEnabled;
          
          // Schedule or cancel notification based on new state
          if (newAlarmState) {
            const scheduledTime = new Date(medicine.nextReminder);
            scheduleMedicineNotification(
              medicine.id,
              medicine.name,
              medicine.dosage,
              medicine.mode,
              scheduledTime
            );
          } else {
            cancelMedicineNotification(medicine.id);
          }

          return { ...medicine, alarmEnabled: newAlarmState };
        }
        return medicine;
      });

      // Update in Firestore
      await updateDoc(doc(db, 'medicines', medicineId), {
        alarmEnabled: !medicines.find(m => m.id === medicineId)?.alarmEnabled
      });

      setMedicinesState(updatedMedicines);
    } catch (error) {
      console.error('Error toggling alarm:', error);
    }
  };

  // Update Medicine Function
  const updateMedicine = async (medicineId: string, updates: Partial<Medicine>) => {
    try {
      const updatedMedicines = medicines.map(medicine => {
        if (medicine.id === medicineId) {
          const updatedMedicine = { ...medicine, ...updates };
          
          // Reschedule notification if alarm is enabled and reminder time changed
          if (updatedMedicine.alarmEnabled && 
              updates.nextReminder && 
              updates.nextReminder !== medicine.nextReminder) {
            const scheduledTime = new Date(updatedMedicine.nextReminder);
            scheduleMedicineNotification(
              updatedMedicine.id,
              updatedMedicine.name,
              updatedMedicine.dosage,
              updatedMedicine.mode,
              scheduledTime
            );
          }

          return updatedMedicine;
        }
        return medicine;
      });

      // Update in Firestore
      await updateDoc(doc(db, 'medicines', medicineId), updates);

      setMedicinesState(updatedMedicines);
    } catch (error) {
      console.error('Error updating medicine:', error);
    }
  };

  // Set Medicines Function (for deletion)
  const setMedicines = async (value: SetStateAction<Medicine[]>) => {
    try {
      const newMedicines = typeof value === 'function' ? value(medicines) : value;
      
      // Delete from Firestore if medicine was removed
      const deletedMedicines = medicines.filter(m => !newMedicines.some(nm => nm.id === m.id));
      for (const medicine of deletedMedicines) {
        await deleteDoc(doc(db, 'medicines', medicine.id));
      }

      setMedicinesState(newMedicines);
    } catch (error) {
      console.error('Error setting medicines:', error);
    }
  };

  return (
    <MedicineContext.Provider value={{ medicines, addMedicine, toggleAlarm, updateMedicine, setMedicines }}>
      {children}
    </MedicineContext.Provider>
  );
};

// Custom Hook
export const useMedicine = (): MedicineContextType => {
  const context = useContext(MedicineContext);
  if (!context) {
    throw new Error("useMedicine must be used within a MedicineProvider");
  }
  return context;
};
