import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { stylesHMP } from '../styles/StylesHomePage';
import { useCalendar } from '../context/CalendarContext';
import { useMedicine } from '../context/MedicineContext';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const HomeScreen = () => {
  const { date, selectedDay, handleNextDay, handlePrevDay, handleDayClick, formatSelectedDate } = useCalendar();
  const { medicines } = useMedicine();
  const today = new Date();

  // Filter medicines for the selected day
  const getMedicinesForSelectedDay = () => {
    if (!selectedDay) return [];
    
    return medicines.filter(medicine => {
      const medicineDate = new Date(medicine.nextReminder);
      const selectedDate = new Date(selectedDay);
      
      // Compare only the date part (year, month, day)
      return medicine.isActive && 
             medicineDate.getFullYear() === selectedDate.getFullYear() &&
             medicineDate.getMonth() === selectedDate.getMonth() &&
             medicineDate.getDate() === selectedDate.getDate();
    });
  };

  const selectedDayMedicines = getMedicinesForSelectedDay();

  // Format time for display
  const formatTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <View style={stylesHMP.mainContainer}>
      {/* TOP SECTION */}
  
      {/* CALENDAR SECTION */}
      <View style={stylesHMP.calendarSection}>
        <View style={stylesHMP.calendarArea}>
          <TouchableOpacity onPress={handlePrevDay}>
            <Feather name="chevron-left" style={stylesHMP.arrowIcon} />
          </TouchableOpacity>

          <View style={stylesHMP.calendarContainer}>
            <View style={stylesHMP.calendarHeader}>
              <Text style={stylesHMP.monthText}>
                {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
              </Text>
            </View>

            <View style={stylesHMP.dayContainer}>
              {Array.from({ length: 5 }).map((_, index) => {
                const dayDate = new Date(date);
                dayDate.setDate(date.getDate() - 2 + index);

                const isCurrentDay = dayDate.toDateString() === today.toDateString();
                const isSelectedDay = selectedDay?.toDateString() === dayDate.toDateString();

                return (
                  <TouchableOpacity key={index} onPress={() => handleDayClick(dayDate)}>
                    <View style={stylesHMP.dayBoxWrapper}>
                      <View style={stylesHMP.dayBoxContainer}>
                        {isCurrentDay && <Text style={stylesHMP.todayLabel}>Today</Text>}

                        <View
                          style={[
                            stylesHMP.dayBox,
                            isCurrentDay && stylesHMP.currentDayBox,
                            isSelectedDay && stylesHMP.selectedDayBox,
                          ]}
                        >
                          <Text
                            style={[
                              stylesHMP.dayNumber,
                              isSelectedDay && stylesHMP.selectedDayText,
                            ]}
                          >
                            {dayDate.getDate()}
                          </Text>

                          <Text
                            style={[
                              stylesHMP.dayLabel,
                              isCurrentDay && stylesHMP.currentDayText,
                              isSelectedDay && stylesHMP.selectedDayText,
                            ]}
                          >
                            {daysOfWeek[dayDate.getDay()]}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <TouchableOpacity onPress={handleNextDay}>
            <Feather name="chevron-right" style={stylesHMP.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* CONTENTS SECTION */}
      <View style={stylesHMP.contentSection}>
        <View style={stylesHMP.selectedDateContainer}>
          <Text style={stylesHMP.selectedDateText}>{formatSelectedDate(selectedDay)}</Text>
          <View style={stylesHMP.horizontalLine}/>
        </View>

        {/* MEDICINE SECTION */}
        <ScrollView style={stylesHMP.medicineScrollView}>
          {selectedDayMedicines.length > 0 ? (
            selectedDayMedicines.map((medicine) => (
              <View key={medicine.id} style={stylesHMP.medicineIntakeContainer}>
                <Text style={stylesHMP.medicineText}>Your Medicine Intake is in:</Text>
                <View style={stylesHMP.medicineBox}>
                  <View style={stylesHMP.leftSide}>
                    <MaterialCommunityIcons name="pill" style={stylesHMP.pillIcon} />
                    <Text style={stylesHMP.medicineName}>{medicine.name}</Text>
                    <Text style={stylesHMP.medicineDetails}>
                      {medicine.quantity} {medicine.dosage} {medicine.mode}
                    </Text>
                  </View>
                  <View style={stylesHMP.verticalLine}></View>
                  <View style={stylesHMP.rightSide}>
                    <Feather name="clock" style={stylesHMP.clockIcon} />
                    <Text style={stylesHMP.timeText}>{formatTime(medicine.nextReminder)}</Text>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View style={stylesHMP.medicineIntakeContainer}>
              <Text style={stylesHMP.medicineText}>No medicines scheduled for this day</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
