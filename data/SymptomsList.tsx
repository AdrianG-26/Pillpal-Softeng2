export interface Symptom {
    id: string;
    name: string;
    treatment: string;
    color: string;
  }
  
  // Full list of symptoms with treatments
  export const allSymptoms: Symptom[] = [
    { id: "1", name: "Fever", treatment: "Take Paracetamol", color: "rgb(231, 76, 60)" },
    { id: "2", name: "Wet cough", treatment: "Drink warm fluids", color: "rgb(14, 92, 100)" },
    { id: "3", name: "Dry cough", treatment: "Use cough syrup", color: "rgb(142, 68, 173)" },
    { id: "4", name: "Sore throat", treatment: "Gargle with salt water", color: "rgb(243, 156, 18)" },
    { id: "5", name: "Runny nose", treatment: "Take antihistamines", color: "rgb(52, 152, 219)" },
  ];
  