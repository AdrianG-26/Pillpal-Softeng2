import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/NavigationTypes"; 
import { useMedicine } from "../context/MedicineContext";
import { Feather, AntDesign } from "@expo/vector-icons";
import stylesAddMed from "../style-components/StylesAddMed";


const AddMedicineLanding = () => {
  const { medicines } = useMedicine();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderMedicine = ({ item }: { item: any }) => {
    const isLowStock = item.quantity <= 5;
    return (
      <View
      style={[
        stylesAddMed.medicineContainer,
        item.quantity <= 5 ? stylesAddMed.lowStockBackground : null,
      ]}
    >
      <Text style={[stylesAddMed.medicineName, isLowStock && stylesAddMed.lowStockText]}>
        {item.name}
      </Text>
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
    ) 
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
