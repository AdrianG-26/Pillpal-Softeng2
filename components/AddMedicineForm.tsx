import React, { useState } from "react";
import { View, Text, TextInput, Modal, Pressable } from "react-native";
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
  const [open, setOpen] = useState(false); // Add open state
  // Format selected time
  const formattedTime = nextReminder.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Function to add medicine
  const handleAddMedicine = () => {
    if (!name || !dosage || !mode || !quantity) return;

    addMedicine({
      name,
      nextReminder: formattedTime,
      dosage: `${dosage} ${dosageUnit}`,
      mode,
      quantity: parseInt(quantity),
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
        {/* Medicine Name Input */}
        <TextInput
          style={stylesAddMedForm.input}
          placeholder="Medicine Name"
          placeholderTextColor="#777"
          value={name}
          onChangeText={setName}
        />

        {/* Time Picker (Click to Show Modal) */}
        <Pressable onPress={() => setShowTimePicker(true)} style={stylesAddMedForm.input}>
            <View style={stylesAddMedForm.timeTextContainer}>
                <Text style={stylesAddMedForm.timeText}>{formattedTime}</Text>
            </View>
        </Pressable>


        {/* Time Picker Modal */}
        <Modal transparent={true} visible={showTimePicker} animationType="fade">
          <View style={stylesAddMedForm.modalBackground}>
            <View style={stylesAddMedForm.pickerContainer}>
              <DateTimePicker
                value={nextReminder}
                mode="time"
                display="spinner"
                textColor="black"
                onChange={(event, selectedTime) => {
                  if (selectedTime) {
                    setNextReminder(selectedTime);
                  }
                  setShowTimePicker(false); // Close modal after selection
                }}
              />
              <Pressable onPress={() => setShowTimePicker(false)}>
                <Text style={[stylesAddMedForm.buttonText, stylesAddMedForm.confirmText]}>Confirm</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Dosage Input */}
        <View style={stylesAddMedForm.dosageContainer}>
          <TextInput
            style={[stylesAddMedForm.input, stylesAddMedForm.dosageInput]}
            placeholder="Dosage"
            keyboardType="numeric"
            placeholderTextColor="#777"
            value={dosage}
            onChangeText={setDosage}
          />

            <DropDownPicker
            open={open} // Pass state to open
            setOpen={setOpen} // Required for DropDownPicker
            value={dosageUnit}
            items={[
                { label: "mg", value: "mg" },
                { label: "g", value: "g" },
                { label: "mcg", value: "mcg" },
            ]}
            setValue={setDosageUnit}
            containerStyle={{ flex: 1, height: 50 }}
            style={stylesAddMedForm.picker}
            />
        </View>

        {/* Mode of Intake Input */}
        <TextInput
          style={stylesAddMedForm.input}
          placeholder="Mode of Intake (e.g., Oral)"
          placeholderTextColor="#777"
          value={mode}
          onChangeText={setMode}
        />

        {/* Quantity Input */}
        <TextInput
          style={stylesAddMedForm.input}
          placeholder="Quantity"
          keyboardType="numeric"
          placeholderTextColor="#777"
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
