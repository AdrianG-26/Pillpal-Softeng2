import { StyleSheet } from "react-native";

const stylesAddMedForm = StyleSheet.create({
    addMedicineContainer: {
        flex: 1,
        backgroundColor: "rgb(244, 254, 255)"
    },

    headerAreaContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        height: 80,
        justifyContent: 'flex-start',
    },

    backIcon: {
        fontSize: 24,
        color: "rgb(23, 117, 129)",
        padding: 10,
    },

    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 10,
    },

    formContainer: {
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
        fontSize: 16,
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
        backgroundColor: "rgb(23, 117, 129)",
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
