import { StyleSheet, StatusBar, Platform } from "react-native";

export const stylesSR = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(233, 240, 245)",
      alignItems: "center",
    },
    //contents
    contentsContainer: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },

    containerTitle: {
      fontSize: 22,
      fontWeight: "bold",
      marginVertical: 20,  
      textAlign: 'left',
      alignSelf: 'flex-start',
    },

    symptomCard: {
      padding: 20,
      
      paddingHorizontal: 100,
      borderRadius: 20,
      marginVertical: 10,
    },

    symptomContainer: {
      flex: 1,
      width: "100%",
      paddingHorizontal:20,
      paddingTop: 20,
    },

    symptomName: {
      color: "rgb(255, 255, 255)",
      fontSize: 18,
      fontWeight: "bold",
    },
    symptomTreatment: {
      color: "rgb(255, 255, 255)",
    },

    addSymptomBtnContainer: {
      justifyContent: 'center',
      alignItems: 'center',

    },

    addButton: {
      backgroundColor: "rgb(23, 117, 129)", // Brighter color for call-to-action
      paddingVertical: 18,
      paddingHorizontal: 40,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
      flexDirection: 'row',
      gap: 5,

      // Shadow for elevation
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 6,
    },

    addIcon: {
      fontSize: 20,
      color: "rgb(244, 254, 255)",
    },

    addButtonText: {
      color: "rgb(255, 255, 255)",
      fontSize: 20,
      fontWeight: "700", 
    },
  
    // Modal Styles
    modalContainer: {
      flex: 1,
      backgroundColor: "rgba(19, 26, 29, 0.96)", // Semi-transparent background
      justifyContent: "center",
      padding: 20,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 30 : 70, // Adjust for Android, keep 0 for iOS
    },


    modalTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: "rgb(255, 255, 255)",
      marginBottom: 10,
    },
    modalDescription: {
      fontSize: 16,
      color: "rgb(255, 255, 255)",
      marginBottom: 20,
    },
    symptomItem: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: "rgb(23, 117, 129)",
      marginVertical: 5,
    },
    selectedSymptom: {
      backgroundColor: "rgb(177, 240, 247)", // Highlight selected symptom
    },
    symptomItemText: {
      color: "rgb(255, 255, 255)",
      fontSize: 16,
    },
    saveButton: {
      backgroundColor: "rgb(23, 117, 129)",
      paddingVertical: 18,
      paddingHorizontal: 40,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      marginTop: 20,
      marginBottom: 20,
    },

    saveButtonText: {
      color: "rgb(255, 255, 255)",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
});
