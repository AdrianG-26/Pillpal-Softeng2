import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { stylesSR } from "../style-components/StylesSymptomReport";

// Full list of symptoms with treatments
const allSymptoms = [
  { id: "1", name: "Fever", treatment: "Take Paracetamol", color: "#E74C3C" },
  {
    id: "2",
    name: "Wet cough",
    treatment: "Drink warm fluids",
    color: "#0E5C64",
  },
  {
    id: "3",
    name: "Dry cough",
    treatment: "Use cough syrup",
    color: "#8E44AD",
  },
  {
    id: "4",
    name: "Sore throat",
    treatment: "Gargle with salt water",
    color: "#F39C12",
  },
  {
    id: "5",
    name: "Runny nose",
    treatment: "Take antihistamines",
    color: "#3498DB",
  },
];

const SymptomCard = ({ symptom }) => (
  <View style={[stylesSR.symptomCard, { backgroundColor: symptom.color }]}>
    <Text style={stylesSR.symptomName}>{symptom.name}</Text>
    <Text style={stylesSR.symptomTreatment}>{symptom.treatment}</Text>
  </View>
);

const SymptomReport = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  // Toggle symptom selection
  const toggleSymptom = (symptom) => {
    setSelectedSymptoms(
      (prev) =>
        prev.some((s) => s.id === symptom.id)
          ? prev.filter((s) => s.id !== symptom.id) // Remove if already selected
          : [...prev, symptom] // Add if not selected
    );
  };

  return (
    <SafeAreaView style={stylesSR.container}>
      <Text style={stylesSR.title}>Symptom Report</Text>

      {/* List of Selected Symptoms */}
      <FlatList
        data={selectedSymptoms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SymptomCard symptom={item} />}
      />

      {/* Add Symptom Button */}
      <TouchableOpacity
        style={stylesSR.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={stylesSR.addButtonText}>Add symptom</Text>
      </TouchableOpacity>

      {/* Modal for Selecting Symptoms */}
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={stylesSR.modalContainer}>
          <Text style={stylesSR.modalTitle}>
            Are you experiencing any of the following symptoms?
          </Text>
          <Text style={stylesSR.modalDescription}>
            You can select multiple symptoms
          </Text>

          {/* Symptom Selection List */}
          <FlatList
            data={allSymptoms}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  stylesSR.symptomItem,
                  selectedSymptoms.some((s) => s.id === item.id) &&
                    stylesSR.selectedSymptom,
                ]}
                onPress={() => toggleSymptom(item)}
              >
                <Text style={stylesSR.symptomItemText}>{item.name}</Text>
              </Pressable>
            )}
          />

          {/* Save Button */}
          <TouchableOpacity
            style={stylesSR.saveButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={stylesSR.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SymptomReport;
