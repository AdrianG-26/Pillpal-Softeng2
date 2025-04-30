import { StyleSheet } from 'react-native';

const stylesAddMed = StyleSheet.create({
  addMedicineContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  medicineTextHeader: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'left',
    color: 'rgb(23, 117, 129)',
  },
  medicineAreaContainer: {
    width: '100%',
    padding: 20,
  },
  activeMedContainer: {
    marginBottom: 20,
  },
  inactiveMedContainer: {
    marginBottom: 20,
  },
  medicineContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lowStockBackground: {
    backgroundColor: '#FFF5F5',
  },
  medicineName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgb(23, 117, 129)',
  },
  medicineDetails: {
    fontSize: 14,
    color: 'rgb(23, 117, 129)',
    marginTop: 5,
  },
  lowStockText: {
    color: 'red',
  },
  lowStock: {
    color: 'red',
    marginTop: 5,
    fontWeight: '600',
  },
  addMedBtnContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(23, 117, 129)',
    padding: 15,
    borderRadius: 30,
    width: '80%',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  addIcon: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
  },
  medicineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    fontSize: 20,
    color: 'red',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkButton: {
    padding: 8,
    marginRight: 8,
  },
  checkIcon: {
    fontSize: 20,
    color: 'green',
  },
});

export default stylesAddMed; 