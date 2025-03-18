import { StyleSheet } from "react-native";

const stylesAddMed = StyleSheet.create({
  addMedicineContainer: {
    flex: 1,
    backgroundColor: "rgb(233, 240, 245)",
    alignItems: "center",
  },
  /* Section Titles */
  medicineTextHeader: {
    fontSize: 24,
    fontWeight: "700", // Bolder header for emphasis
    textAlign: "left",
    color: "#333",
  },

  /* Medicines Container */
  medicineAreaContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },

  medicineContainer: {
    backgroundColor: "rgb(23, 117, 129)", // Deep blue for better contrast
    padding: 18,
    borderRadius: 15, // Rounded corners for a modern look
    marginBottom: 15,

    // Shadow for depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },

  lowStockBackground: {
    backgroundColor: 'rgb(251,232,111)',
    color: 'rgb(1,1,1)',
  },

  lowStockText: {
    color: 'rgb(1,1,1)',
  },

  medicineName: {
    fontSize: 20,
    fontWeight: "600",
    color: "rgb(244, 254, 255)",
  },

  medicineDetails: {
    fontSize: 16,
    color: "rgb(244, 254, 255)",
    marginTop: 6, // Slightly more space for readability
  },

  lowStock: {
    color: "#D32F2F", // Red to indicate urgency
    fontWeight: "bold",
    marginTop: 8, // Increased margin for emphasis
  },

  /* Active Medicines */
  activeMedContainer: {
    marginTop: 20,
    marginBottom: 25,
    gap: 10,
  },

  /* Inactive Medicines */
  inactiveMedContainer: {
    backgroundColor: "transparent", // Light gray background for inactive items
    borderRadius: 12,
    paddingHorizontal: 0,
    padding: 12,
  },

  /* Add Medicine Button */
  addMedBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 25,
    flexDirection: 'row',
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

  addButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700", 
  },

  addIcon: {
    fontSize: 20,
    color: "white",
  },
});

export default stylesAddMed;
