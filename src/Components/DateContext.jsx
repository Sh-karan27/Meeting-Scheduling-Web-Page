import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const useDate = () => useContext(DateContext);

export const DateProvider = ({ children }) => {
  const [selectedDateInfo, setSelectedDateInfo] = useState({
    selectedDate: null,
    selectedDay: '',
    selectedMonth: '',
  });
  const [meetTime, setMeetTime] = useState({
    selectedTime: '',
  });
  console.log(selectedDateInfo);
  console.log(meetTime);

  const value = {
    selectedDateInfo,
    setSelectedDateInfo,
    meetTime,
    setMeetTime,
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};
