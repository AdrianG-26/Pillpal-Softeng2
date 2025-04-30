import React from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigationTypes"; 
import { useMedicine } from "../context/MedicineContext";
import { Feather, AntDesign } from "@expo/vector-icons";
import stylesAddMed from "../styles/StylesAddMed";

const AddMedicineLanding = () => {
  const { medicines, updateMedicine, setMedicines } = useMedicine();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleDeleteMedicine = (medicineId: string, medicineName: string, isActive: boolean) => {
    Alert.alert(
      "Delete Medicine",
      `Are you sure you want to ${isActive ? 'deactivate' : 'permanently delete'} ${medicineName}?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: isActive ? "Deactivate" : "Delete",
          style: "destructive",
          onPress: () => {
            if (isActive) {
              updateMedicine(medicineId, { isActive: false });
            } else {
              // Remove from medicines array
              setMedicines(medicines.filter(med => med.id !== medicineId));
            }
          }
        }
      ]
    );
  };

  const handleMarkAsDone = (medicineId: string, medicineName: string) => {
    Alert.alert(
      "Mark as Done",
      `Have you taken ${medicineName}?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            updateMedicine(medicineId, { isActive: false });
          }
        }
      ]
    );
  };

  const renderMedicine = ({ item }: { item: any }) => {
    const isLowStock = item.quantity <= 5;
    return (
      <View
        style={[
          stylesAddMed.medicineContainer,
          item.quantity <= 5 ? stylesAddMed.lowStockBackground : null,
        ]}
      >
        <View style={stylesAddMed.medicineHeader}>
          <Text style={[stylesAddMed.medicineName, isLowStock && stylesAddMed.lowStockText]}>
            {item.name}
          </Text>
          <View style={stylesAddMed.buttonContainer}>
            {item.isActive && (
              <TouchableOpacity 
                onPress={() => handleMarkAsDone(item.id, item.name)}
                style={stylesAddMed.checkButton}
              >
                <Feather name="check" style={stylesAddMed.checkIcon} />
              </TouchableOpacity>
            )}
            <TouchableOpacity 
              onPress={() => handleDeleteMedicine(item.id, item.name, item.isActive)}
              style={stylesAddMed.deleteButton}
            >
              <Feather name="trash-2" style={stylesAddMed.deleteIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[stylesAddMed.medicineDetails, isLowStock && stylesAddMed.lowStockText]}>
          Next: {item.nextReminder}
        </Text>
        <Text style={[stylesAddMed.medicineDetails, isLowStock && stylesAddMed.lowStockText]}>
          Dosage: {item.dosage}
        </Text>
        <Text style={[stylesAddMed.medicineDetails, isLowStock && stylesAddMed.lowStockText]}>
          Mode: {item.mode}
        </Text>
        {isLowStock && (
          <Text style={stylesAddMed.lowStock}>⚠ Low Stock</Text>
        )}
      </View>
    );
  };
  
  return (
    <View style={stylesAddMed.addMedicineContainer}>
      {/* Medicines Section */}
      <View style={stylesAddMed.medicineAreaContainer}>
        <View style={stylesAddMed.activeMedContainer}>
          <Text style={stylesAddMed.medicineTextHeader}>Active Medicines</Text>
          <FlatList
            data={medicines.filter((med) => med.isActive)}
            renderItem={renderMedicine}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={stylesAddMed.inactiveMedContainer}>
          <Text style={stylesAddMed.medicineTextHeader}>Inactive Medicines</Text>
          <FlatList
            data={medicines.filter((med) => !med.isActive)}
            renderItem={renderMedicine}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{paddingBottom: 10,}}
          />
        </View>
      </View>

      <View style={stylesAddMed.addMedBtnContainer}>
        <TouchableOpacity
          style={stylesAddMed.addButton}
          onPress={() => navigation.navigate("AddMedicineForm")}
        > 
          <AntDesign name="pluscircleo" style={stylesAddMed.addIcon} />
          <Text style={stylesAddMed.addButtonText}> Add Medicine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddMedicineLanding;
