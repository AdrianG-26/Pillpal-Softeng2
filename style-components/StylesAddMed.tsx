import { StyleSheet } from "react-native";

const stylesAddMed = StyleSheet.create({
  addMedicineContainer: {
    flex: 1,
    backgroundColor: "rgb(245, 247, 255)", // Light pastel background for a cleaner look
    alignItems: "center",
    paddingBottom: 20, // Added padding to the bottom for spacing
  },

  /* Header */
  headerContainer: {
    backgroundColor: "#E3F2FD", // Light blue header with a soft gradient
    height: 90,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingTop: 20, // Increased padding to give more space at the top

    // Shadow for depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },

  /* User Info */
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  userIconContainer: {
    backgroundColor: "#177581", // Brighter accent for the icon container
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  userIcon: {
    fontSize: 28,
    color: "white",
  },

  textContainer: {
    marginLeft: 14, // Slightly more space between icon and text
  },

  welcomeText: {
    fontSize: 20,
    fontWeight: "600", // Lighter font for a more elegant look
    color: "#177581",
  },

  /* Menu Icon */
  menuIconContainer: {
    backgroundColor: "rgb(23, 117, 129)",
    padding: 14,
    borderRadius: 10,
  },

  burgerMenu: {
    fontSize: 28,
    color: "white",
  },

  /* Section Titles */
  medicineTextHeader: {
    fontSize: 24,
    fontWeight: "700", // Bolder header for emphasis
    marginVertical: 15,
    textAlign: "left",
    color: "#333",
    marginTop: 20, // Added margin for better spacing
  },

  /* Medicines Container */
  medicineAreaContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
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
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 25,
  },

  /* Inactive Medicines */
  inactiveMedContainer: {
    backgroundColor: "#F5F5F5", // Light gray background for inactive items
    borderRadius: 12,
    padding: 12,
  },

  /* Add Medicine Button */
  addMedBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 25,
  },

  addButton: {
    backgroundColor: "rgb(23, 117, 129)", // Brighter color for call-to-action
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,

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
    fontWeight: "700", // Bolder text for button
  },
});

export default stylesAddMed;
