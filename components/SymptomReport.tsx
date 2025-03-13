import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { stylesSR } from "../style-components/StylesSymptomReport";
import { Feather, AntDesign } from "@expo/vector-icons";

// Define Symptom Type
interface Symptom {
  id: string;
  name: string;
  treatment: string;
  color: string;
}

// Full list of symptoms with treatments
const allSymptoms: Symptom[] = [
  { id: "1", name: "Fever", treatment: "Take Paracetamol", color: "rgb(231, 76, 60)" },
  { id: "2", name: "Wet cough", treatment: "Drink warm fluids", color: "rgb(14, 92, 100)" },
  { id: "3", name: "Dry cough", treatment: "Use cough syrup", color: "rgb(142, 68, 173)" },
  { id: "4", name: "Sore throat", treatment: "Gargle with salt water", color: "rgb(243, 156, 18)" },
  { id: "5", name: "Runny nose", treatment: "Take antihistamines", color: "rgb(52, 152, 219)" },
];

const SymptomCard: React.FC<{ symptom: Symptom }> = ({ symptom }) => (
  <View style={[stylesSR.symptomCard, { backgroundColor: symptom.color }]}>
    <Text style={stylesSR.symptomName}>{symptom.name}</Text>
    <Text style={stylesSR.symptomTreatment}>{symptom.treatment}</Text>
  </View>
);

const SymptomReport: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);

  // Toggle symptom selection
  const toggleSymptom = (symptom: Symptom) => {
    setSelectedSymptoms((prev) =>
      prev.some((s) => s.id === symptom.id)
        ? prev.filter((s) => s.id !== symptom.id) // Remove if already selected
        : [...prev, symptom] // Add if not selected
    );
  };

  return (
    <View style={stylesSR.container}>
      {/* Header */}
      <View style={stylesSR.headerContainer}>
        <View style={stylesSR.userContainer}>
          <View style={stylesSR.userIconContainer}>
            <Feather name="user" style={stylesSR.userIcon} />
          </View>
          <View style={stylesSR.textContainer}>
            <Text style={stylesSR.welcomeText}>Hello, User!</Text>
          </View>
        </View>

        <TouchableOpacity style={stylesSR.menuIconContainer}>
          <Feather name="menu" style={stylesSR.burgerMenu} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={stylesSR.contentsContainer}>
        <Text style={stylesSR.containerTitle}>Latest Symptom Report</Text>

        {/* List of Selected Symptoms */}
        <FlatList
          data={selectedSymptoms}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SymptomCard symptom={item} />}
        />

        {/* Add Symptom Button */}
        <View style={stylesSR.addSymptomBtnContainer}>
          <TouchableOpacity
            style={stylesSR.addButton}
            onPress={() => setModalVisible(true)}
          >
            <AntDesign name="pluscircleo" style={stylesSR.addIcon} />
            <Text style={stylesSR.addButtonText}>Add Symptom</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={stylesSR.modalContainer}>
            <Text style={stylesSR.modalTitle}>
              Are you experiencing any of the following symptoms?
            </Text>
            <Text style={stylesSR.modalDescription}>
              You can select multiple symptoms
            </Text>

            {/* Symptom Selection List */}
            <View style={stylesSR.symptomContainer}>
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
            </View>

            {/* Save Symptom Button */}
            <TouchableOpacity
              style={stylesSR.saveButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={stylesSR.saveButtonText}>Save Symptom</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default SymptomReport;
