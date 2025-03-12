import { StyleSheet } from "react-native";

export const stylesHMP = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // TOP SECTION
  topSection: {
    backgroundColor: 'rgb(244, 254, 255)',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userIcon: {
    fontSize: 40,
    color: '#177581',
  },

  textContainer: {
    marginLeft: 10,
  },

  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#177581',
  },

  iconContainer: {
    flexDirection: 'row',
    gap: 20,
  },

  iconContact: {
    fontSize: 30,
    color: '#177581',
  },

  burgerMenu: {
    fontSize: 27,
    color: 'rgb(244, 254, 255)',
    backgroundColor: '#177581',
    borderRadius: 5,
    padding: 3,
  },

  // CALENDAR SECTION
  calendarSection: {
    backgroundColor: '#177581',
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  
  calendarArea: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'center',
    paddingHorizontal: 60,
  },

  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },

  monthText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
  },

  calendarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
    marginTop: 0,
  },

  arrowIcon: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
  },

  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  dayBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgb(244, 254, 255)',
    minWidth: 60,
    height: 70,
    color: 'white',
  },

  activeDayBox: {
    backgroundColor: 'rgb(147, 169, 171)',
  },
  
  currentDayBox: {
    borderWidth: 3,
  },

  currentDayText: {
    color: 'white',
  },
  
  selectedDayBox: {
    backgroundColor: 'rgb(244, 254, 255)',
  },
  
  selectedDayText: {
    color: 'rgb(23, 117, 129)',
  },
  
  dayNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  dayLabel: {
    fontSize: 14,
    color: 'rgb(252, 255, 250)',
  },

  activeDayText: {
    color: 'black',
  },

  dayBoxWrapper: {
    alignItems: 'center', // Ensures all items are centered
  },
  
  dayBoxContainer: {
    alignItems: 'center', // Keeps the day box and label centered
    justifyContent: 'flex-end', // Aligns all items at the bottom
    height: 70, // Ensure equal height across all items
  },
  
  todayLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgb(235, 235, 235)', // Adjust color as needed
    marginBottom: 5, // Adds spacing but keeps alignment
  },
  
  

  // CONTENTS SECTION
  contentSection: {
    flex: 1,
    backgroundColor: 'rgb(244, 254, 255)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  todaysDate: {
    fontSize: 14,
    color: 'rgb(23, 117, 129)',
  },  

  selectedDateContainer: {
    position: 'absolute',
    top: 10,
    left: 28,
    padding: 5,
    borderRadius: 5,
    zIndex: 1,
    width: '87%',
  },
  
  selectedDateText: {
    fontSize: 14,
    fontWeight: 600,
    color: 'rgb(23, 117, 129)',
  },
  
  horizontalLine: {
    width: '100%',
    marginTop: 5,
    height: 1,
    backgroundColor: 'rgb(191, 214, 217)',
  },

  //MEDICINE SECTION

  medicineIntakeContainer: {
    position: 'absolute',
    top: 45,
    borderRadius: 8,
    width: '85%',
  },

  medicineText: {
    fontSize: 16,
    color: 'rgb(23, 117, 129)',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  medicineBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(23, 117, 129)',
    padding: 20,
    borderRadius: 15,
    height: 140,
    shadowColor: 'rgb(23, 117, 129)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 5, 
  },

  leftSide: {
    flex: 1,
    justifyContent: 'center',
  },

  rightSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  pillIcon: {
    fontSize: 30,
    color: 'rgb(244, 254, 255)',
  },

  medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(244, 254, 255)',
  },

  medicineDetails: {
    fontSize: 14,
    color: 'rgb(244, 254, 255)',
  },

  verticalLine: {
    width: 2,
    marginRight: -100,
    height: '100%',
    backgroundColor: 'rgb(92, 160, 167)',
  },

  clockIcon: {
    fontSize: 30,
    color: 'rgb(244, 254, 255)',
  },

  timeText: {
    fontSize: 16,
    color: 'rgb(244, 254, 255)',
  },

});
