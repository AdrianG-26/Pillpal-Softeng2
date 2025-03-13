import { StyleSheet } from "react-native";

export const stylesSR = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FBFBFB",
      padding: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginVertical: 20,
      alignSelf: "center",
    },
    symptomCard: {
      padding: 20,
      borderRadius: 20,
      marginVertical: 10,
    },
    symptomName: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    symptomTreatment: {
      color: "white",
    },
    addButton: {
      backgroundColor: "#177581",
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 20,
      alignSelf: "center",
      position: "absolute",
      bottom: 120,
      zIndex: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    addButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  
    // Modal Styles
    modalContainer: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.9)", // Semi-transparent background
      justifyContent: "center",
      padding: 20,
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "white",
      marginBottom: 10,
    },
    modalDescription: {
      fontSize: 16,
      color: "white",
      marginBottom: 20,

    },
    symptomItem: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: "#177581",
      marginVertical: 5,
    },
    selectedSymptom: {
      backgroundColor: "#B1F0F7", // Highlight selected symptom
    },
    symptomItemText: {
      color: "white",
      fontSize: 16,
    },
    saveButton: {
      backgroundColor: "#177581",
      padding: 15,
      borderRadius: 20,
      alignSelf: "center",
      marginTop: 20,
      marginBottom: 20,
    },
    saveButtonText: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  