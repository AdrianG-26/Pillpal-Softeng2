import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useMedicine } from "../context/MedicineContext";
import stylesAddMedForm from "../styles/StylesAddMedForm";
import TimePickerModal from "../components/TimePickerModal";
import QuantityInput from "../components/QuantityInput";
import ModalDropdown from "../components/ModalDropdown";

type DosageUnit = "mg" | "g" | "mcg" | "ml" | "L" | "IU" | "mEq" | "units" | "drops" | "puffs" | "patches" | "tablets" | "capsules" | "sprays";
type ModeOfIntake = "Oral" | "Sublingual" | "Buccal" | "Topical" | "Inhalation" | "Injection" | "Rectal" | "Vaginal" | "Ophthalmic" | "Otic";

const AddMedicineForm = () => {
  const { addMedicine } = useMedicine();
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [nextReminder, setNextReminder] = useState(new Date());
  const [dosage, setDosage] = useState("");
  const [dosageUnit, setDosageUnit] = useState<DosageUnit>("mg");
  const [mode, setMode] = useState<ModeOfIntake>("Oral");
  const [quantity, setQuantity] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDosageUnitModal, setShowDosageUnitModal] = useState(false);
  const [showModeModal, setShowModeModal] = useState(false);

  // Format time for display
  const formattedTime = nextReminder.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Function to handle saving medicine
  const handleAddMedicine = () => {
    if (!name || !dosage || !mode || !quantity) {
      Alert.alert("Error", "Please fill all fields!");
      return;
    }

    // Calculate the correct date for the reminder
    const now = new Date();
    const selectedTime = new Date(nextReminder);
    let reminderDate = new Date(now);

    // Set the hours and minutes from the selected time
    reminderDate.setHours(selectedTime.getHours());
    reminderDate.setMinutes(selectedTime.getMinutes());
    reminderDate.setSeconds(0);
    reminderDate.setMilliseconds(0);

    // If the selected time is earlier than current time, set it for tomorrow
    if (reminderDate < now) {
      reminderDate.setDate(reminderDate.getDate() + 1);
    }

    const formattedDate = reminderDate.toISOString();

    addMedicine({
      name,
      nextReminder: formattedDate,
      dosage: `${dosage} ${dosageUnit}`,
      mode,
      quantity: parseInt(quantity, 10),
      isActive: true,
      alarmEnabled: true,
    });

    navigation.goBack();
  };

  const dosageUnitOptions: { label: string; value: DosageUnit }[] = [
    { label: "mg", value: "mg" },
    { label: "g", value: "g" },
    { label: "mcg", value: "mcg" },
    { label: "ml", value: "ml" },
    { label: "L", value: "L" },
    { label: "IU", value: "IU" },
    { label: "mEq", value: "mEq" },
    { label: "units", value: "units" },
    { label: "drops", value: "drops" },
    { label: "puffs", value: "puffs" },
    { label: "patches", value: "patches" },
    { label: "tablets", value: "tablets" },
    { label: "capsules", value: "capsules" },
    { label: "sprays", value: "sprays" },
  ];

  const modeOptions: { label: string; value: ModeOfIntake }[] = [
    { label: "Oral", value: "Oral" },
    { label: "Sublingual", value: "Sublingual" },
    { label: "Buccal", value: "Buccal" },
    { label: "Topical", value: "Topical" },
    { label: "Inhalation", value: "Inhalation" },
    { label: "Injection", value: "Injection" },
    { label: "Rectal", value: "Rectal" },
    { label: "Vaginal", value: "Vaginal" },
    { label: "Ophthalmic", value: "Ophthalmic" },
    { label: "Otic", value: "Otic" },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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

          <TimePickerModal
            visible={showTimePicker}
            onClose={() => setShowTimePicker(false)}
            onTimeSelect={setNextReminder}
            initialTime={nextReminder}
          />

          {/* Dosage Input */}
          <View style={stylesAddMedForm.dosageContainer}>
            <TextInput
              style={[stylesAddMedForm.input, stylesAddMedForm.dosageInput]}
              placeholder="Dosage"
              keyboardType="numeric"
              value={dosage}
              onChangeText={setDosage}
            />

            <Pressable 
              style={stylesAddMedForm.dosageUnitButton}
              onPress={() => setShowDosageUnitModal(true)}
            >
              <Text style={stylesAddMedForm.dosageUnitText}>{dosageUnit}</Text>
              <AntDesign name="down" size={16} color="rgb(23, 117, 129)" />
            </Pressable>
          </View>

          <ModalDropdown<DosageUnit>
            visible={showDosageUnitModal}
            onClose={() => setShowDosageUnitModal(false)}
            title="Select Dosage Unit"
            options={dosageUnitOptions}
            selectedValue={dosageUnit}
            onSelect={setDosageUnit}
          />

          {/* Mode of Intake */}
          <Pressable 
            style={stylesAddMedForm.input}
            onPress={() => setShowModeModal(true)}
          >
            <Text style={stylesAddMedForm.modeText}>{mode}</Text>
          </Pressable>

          <ModalDropdown<ModeOfIntake>
            visible={showModeModal}
            onClose={() => setShowModeModal(false)}
            title="Select Mode of Intake"
            options={modeOptions}
            selectedValue={mode}
            onSelect={setMode}
          />

          {/* Quantity Input */}
          <QuantityInput
            value={quantity}
            onChange={setQuantity}
          />

          {/* Save Button */}
          <Pressable onPress={handleAddMedicine} style={stylesAddMedForm.addButton}>
            <Text style={stylesAddMedForm.addButtonText}>Save Medicine</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddMedicineForm;
