import React, { createContext, useState, useContext, ReactNode } from "react";
import { Symptom } from "../data/symptomsList";

// Define context type
interface SymptomsContextType {
  selectedSymptoms: Symptom[];
  toggleSymptom: (symptom: Symptom) => void;
  resetSymptoms: () => void;
}

// Create context
const SymptomsContext = createContext<SymptomsContextType | undefined>(undefined);

// Provider component
export const SymptomsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);

  // Toggle symptom selection
  const toggleSymptom = (symptom: Symptom) => {
    setSelectedSymptoms((prev) =>
      prev.some((s) => s.id === symptom.id)
        ? prev.filter((s) => s.id !== symptom.id) // Remove
        : [...prev, symptom] // Add
    );
  };

  // Reset selected symptoms
  const resetSymptoms = () => setSelectedSymptoms([]);

  return (
    <SymptomsContext.Provider value={{ selectedSymptoms, toggleSymptom, resetSymptoms }}>
      {children}
    </SymptomsContext.Provider>
  );
};

// Custom hook for consuming context
export const useSymptoms = (): SymptomsContextType => {
  const context = useContext(SymptomsContext);
  if (!context) {
    throw new Error("useSymptoms must be used within a SymptomsProvider");
  }
  return context;
};
