import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

// Medicine Type
type Medicine = {
  id: string;
  name: string;
  nextReminder: string;
  dosage: string;
  mode: string;
  quantity: number;
  isActive: boolean;
};

// Context Type
type MedicineContextType = {
  medicines: Medicine[];
  addMedicine: (medicine: Omit<Medicine, "id">) => void;
};

// Create Context
const MedicineContext = createContext<MedicineContextType | undefined>(undefined);

export const MedicineProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  // Add Medicine Function
  const addMedicine = (medicine: Omit<Medicine, "id">) => {
    const newMedicine: Medicine = { id: uuidv4(), ...medicine };
    setMedicines([...medicines, newMedicine]);
  };

  return (
    <MedicineContext.Provider value={{ medicines, addMedicine }}>
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
