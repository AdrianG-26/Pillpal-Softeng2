import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { stylesHMP } from '../style-components/StylesHomePage';
import { useCalendar } from '../context/CalendarContext';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const HomeScreen = () => {
  const { date, selectedDay, handleNextDay, handlePrevDay, handleDayClick, formatSelectedDate } = useCalendar();
  const today = new Date();

  return (
    <View style={stylesHMP.mainContainer}>
      {/* TOP SECTION */}
      <View style={stylesHMP.topSection}>
        <View style={stylesHMP.userContainer}>
          <Feather name="user" style={stylesHMP.userIcon} />
          <View style={stylesHMP.textContainer}>
            <Text style={stylesHMP.welcomeText}>Hi User!</Text>
            <Text style={stylesHMP.welcomeText}>How do you feel today?</Text>
          </View>
        </View>
        <View style={stylesHMP.iconContainer}>
          <Feather name="phone" style={stylesHMP.iconContact} />
          <Feather name="menu" style={stylesHMP.burgerMenu} />
        </View>
      </View>

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
                      {/* Keep space for "Today" label so all boxes align */}
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
        <View style={stylesHMP.medicineIntakeContainer}>
          <Text style={stylesHMP.medicineText}>Your Medicine Intake is in:</Text>
          <View style={stylesHMP.medicineBox}>
            <View style={stylesHMP.leftSide}>
              <MaterialCommunityIcons name="pill" style={stylesHMP.pillIcon} />
              <Text style={stylesHMP.medicineName}>Biogesic</Text>
              <Text style={stylesHMP.medicineDetails}>1 Pill/s after a meal</Text>
            </View>
            <View style={stylesHMP.verticalLine}></View>
            <View style={stylesHMP.rightSide}>
              <Feather name="clock" style={stylesHMP.clockIcon} />
              <Text style={stylesHMP.timeText}>3:30 PM</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
