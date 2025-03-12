import { StyleSheet } from "react-native";

const stylesAddMedForm = StyleSheet.create({
    addMedicineContainer: {
        flex: 1,
        backgroundColor: "#F8F9FA",
        paddingHorizontal: 20,
        paddingTop: 50,
    },

    headerAreaContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    backIcon: {
        fontSize: 24,
        color: "#007BFF",
        padding: 10,
    },

    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 10,
    },

    formContainer: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 4,
    },

    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        backgroundColor: "#FFF",
        color: "#333",
        textAlignVertical: "center",
        justifyContent: "center",
    },
    
    timeTextContainer: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "flex-start" 
    },

    timeText: {

    },

    dosageContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    dosageInput: {
        flex: 2,
        marginRight: 10,
    },

    picker: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 10,
        backgroundColor: "#FFF",
    },

    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    pickerContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        width: "80%",
        color: 'red',
    },

    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
    },

    confirmText: {
        color: "green",
        marginTop: 10,
    },

    addButton: {
        backgroundColor: "#007BFF",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },

    addButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
    },
});

export default stylesAddMedForm;
