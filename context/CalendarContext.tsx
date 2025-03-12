import React, { createContext, useState, useContext } from 'react';

interface CalendarContextType {
  date: Date;
  selectedDay: Date;
  handleNextDay: () => void;
  handlePrevDay: () => void;
  handleDayClick: (day: Date) => void;
  formatSelectedDate: (date: Date) => string;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const today = new Date();
  const [date, setDate] = useState<Date>(today);
  const [selectedDay, setSelectedDay] = useState<Date>(today);

  const handleNextDay = () => setDate((prev) => new Date(prev.getTime() + 5 * 86400000));
  const handlePrevDay = () => setDate((prev) => new Date(prev.getTime() - 5 * 86400000));
  const handleDayClick = (day: Date) => setSelectedDay(day);

  const formatSelectedDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <CalendarContext.Provider
      value={{ date, selectedDay, handleNextDay, handlePrevDay, handleDayClick, formatSelectedDate }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) throw new Error('useCalendar must be used within a CalendarProvider');
  return context;
};
