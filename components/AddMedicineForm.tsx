import React, { useState } from "react";
import { View, Text, TextInput, Modal, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import { useMedicine } from "../context/MedicineContext";
import stylesAddMedForm from "../style-components/StylesAddMedForm";

type DosageUnit = "mg" | "g" | "mcg";

const AddMedicineForm = () => {
  const { addMedicine } = useMedicine();
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [nextReminder, setNextReminder] = useState(new Date());
  const [dosage, setDosage] = useState("");
  const [dosageUnit, setDosageUnit] = useState<DosageUnit>("mg");
  const [mode, setMode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [open, setOpen] = useState(false);

  // Format time for display
  const formattedTime = nextReminder.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Function to handle saving medicine
  const handleAddMedicine = () => {
    if (!name || !dosage || !mode || !quantity) {
      Alert.alert("Error", "Please fill all fields!");
      return;
    }

    addMedicine({
      name,
      nextReminder: formattedTime,
      dosage: `${dosage} ${dosageUnit}`,
      mode,
      quantity: parseInt(quantity, 10),
      isActive: true,
    });

    navigation.goBack();
  };

  return (
    <View style={stylesAddMedForm.addMedicineContainer}>
      {/* Header */}
      <View style={stylesAddMedForm.headerAreaContainer}>
        <AntDesign name="left" style={stylesAddMedForm.backIcon} onPress={() => navigation.goBack()} />
        <Text style={stylesAddMedForm.headerText}>Add New Medicine</Text>
      </View>

      {/* Form */}
      <View style={stylesAddMedForm.formContainer}>
        {/* Medicine Name */}
        <TextInput
          style={stylesAddMedForm.input}
          placeholder="Medicine Name"
          value={name}
          onChangeText={setName}
        />

        {/* Time Picker */}
        <Pressable onPress={() => setShowTimePicker(true)} style={stylesAddMedForm.input}>
          <Text style={stylesAddMedForm.timeText}>{formattedTime}</Text>
        </Pressable>

        {showTimePicker && (
          <DateTimePicker
            value={nextReminder}
            mode="time"
            display="spinner"
            onChange={(event, selectedTime) => {
              if (selectedTime) setNextReminder(selectedTime);
              setShowTimePicker(false);
            }}
          />
        )}

        {/* Dosage Input */}
        <View style={stylesAddMedForm.dosageContainer}>
          <TextInput
            style={[stylesAddMedForm.input, stylesAddMedForm.dosageInput]}
            placeholder="Dosage"
            keyboardType="numeric"
            value={dosage}
            onChangeText={setDosage}
          />

          <DropDownPicker
            open={open}
            setOpen={setOpen}
            value={dosageUnit}
            items={[
              { label: "mg", value: "mg" },
              { label: "g", value: "g" },
              { label: "mcg", value: "mcg" },
            ]}
            setValue={setDosageUnit}
            containerStyle={{ width: 100 }}
          />
        </View>

        {/* Mode of Intake */}
        <TextInput
          style={stylesAddMedForm.input}
          placeholder="Mode of Intake (e.g., Oral)"
          value={mode}
          onChangeText={setMode}
        />

        {/* Quantity Input */}
        <TextInput
          style={stylesAddMedForm.input}
          placeholder="Quantity"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />

        {/* Save Button */}
        <Pressable onPress={handleAddMedicine} style={stylesAddMedForm.addButton}>
          <Text style={stylesAddMedForm.addButtonText}>Save Medicine</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddMedicineForm;
