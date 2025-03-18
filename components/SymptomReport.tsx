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
import { useSymptoms } from "../context/SymptomContext";
import { allSymptoms, Symptom  } from "../data/SymptomsList";

// SymptomCard Component
const SymptomCard: React.FC<{ symptom: Symptom }> = ({ symptom }) => (
  <View style={[stylesSR.symptomCard, { backgroundColor: symptom.color }]}>
    <Text style={stylesSR.symptomName}>{symptom.name}</Text>
    <Text style={stylesSR.symptomTreatment}>{symptom.treatment}</Text>
  </View>
);

const SymptomReport: React.FC = () => {
  const { selectedSymptoms, toggleSymptom } = useSymptoms();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={stylesSR.container}>
      {/* Header */}
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
