import React, { useState, useEffect } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import Details from './Details';
import { useDate } from './DateContext';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [onSelect, setOnSelect] = useState(false);
  const [details, setDetails] = useState(false);
  const [hideCalender, setHideCalender] = useState('');
  const { selectedDateInfo, setSelectedDateInfo } = useDate();

  const { meeTime, setMeetTime } = useDate();

  useEffect(() => {
    setCurrentMonth(new Date());
  }, []);

  const handleDateClick = (date) => {
    const selectedDayIndex = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      date
    ).getDay();
    const selectedDay = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ][selectedDayIndex];
    const selectedMonth = currentMonth.toLocaleString('default', {
      month: 'long',
    });
    setSelectedDateInfo({
      selectedDate: date,
      selectedDay,
      selectedMonth,
    });

    setOnSelect(true);
  };

  const spanOnClick = (time) => {
    setDetails(true);
    setHideCalender('hidden ');
    setOnSelect(false);
    setMeetTime({
      selectedTime: time,
    });
  };
  const handleBack = () => {
    setDetails(false);
    setHideCalender(' ');
    setOnSelect(true);
    setMeetTime({
      selectedTime: '',
    });
    setSelectedDateInfo({
      selectedDate: null,
      selectedDay: '',
      selectedMonth: '',
    });
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
    setSelectedDate(null);
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();
    const days = [];
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Render weekday names
    const weekdayElements = weekdays.map((day, index) => (
      <div key={index} className='font-bold'>
        {day}
      </div>
    ));
    days.push(weekdayElements);

    // Fill empty slots for the days of previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className='empty'></div>);
    }

    // Render days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div
          key={i}
          className={`day ${
            selectedDate === i ? 'bg-blue-500 text-white rounded-full' : ''
          }`}
          onClick={() => handleDateClick(i)}>
          {i}
        </div>
      );
    }

    return days;
  };

  function getCurrentISTTime() {
    // Get current date and time
    const now = new Date();

    // Get UTC time offset for IST (Indian Standard Time) which is UTC+5:30
    const ISTOffset = 5.5;

    // Convert local time to IST by adding the offset
    const ISTTime = new Date(now.getTime() + ISTOffset * 3600 * 1000);

    // Format the time components (hours, minutes, seconds)
    const hours = ISTTime.getHours().toString().padStart(2, '0');
    const minutes = ISTTime.getMinutes().toString().padStart(2, '0');

    // Construct the time string in IST
    const ISTTimeString = `${hours}:${minutes} IST`;

    // Return the IST time string
    return ISTTimeString;
  }

  // Function to render selected date and day
  // Function to render selected date, day, and month
  const renderSelectedDateAndDay = () => {
    if (selectedDate !== null) {
      const selectedDayIndex = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        selectedDate
      ).getDay();
      const selectedDay = [
        'Sunday',
        'Monday',
        'Tueday',
        'Wednesday',
        'Thusday',
        'Friday',
        'Saturday',
      ][selectedDayIndex];
      const selectedMonth = currentMonth.toLocaleString('default', {
        month: 'long',
      });
      return (
        <div className=' flex gap-2'>
          <p className='font-bold'> {selectedDay},</p>
          <p className='font-bold'> {selectedDate}</p>
          <p className='font-bold'> {selectedMonth}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={`${
        onSelect
          ? 'w-[45rem] max-lg:w-[30rem] max-lg:flex-col max-lg:overflow-y-scroll'
          : 'w-[25rem]'
      }   flex items-center justify-betwee  h-[500px]  max-sm:flex-col max-sm:w-[25rem] max-sm:h-full `}>
      <div
        className={` ${hideCalender} w-[25rem]  calendar p-4  border-gray-300  flex flex-col  justify-center items-center gap-5 max-sm:border-none`}>
        <h1 className='font-bold'>Select a Date and Time</h1>
        <div className='flex justify-between items-center mb-4 w-full'>
          <button onClick={handlePrevMonth} className='btn text-3xl'>
            <IoIosArrowDropleftCircle />
          </button>
          <div className='text-lg'>
            {currentMonth.toLocaleString('default', { month: 'long' })}{' '}
            {currentMonth.getFullYear()}
          </div>
          <button onClick={handleNextMonth} className='btn text-3xl'>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
        <div
          className='grid grid-cols-7 gap-7 text-center w-full '
          style={{ gridTemplateColumns: 'repeat(7, 30px)' }}>
          {renderCalendar()}
        </div>
        <div className='flex items-start justify-start px-5 py-5 felx flex-col'>
          <h1>Time Zone</h1>
          <p>
            Indian Standard Time{' '}
            <span className='font-bold'>({getCurrentISTTime()})</span>
          </p>
        </div>
      </div>
      <div
        className={`  flex flex-col items-center justify-center gap-3 ${hideCalender}  ${
          onSelect ? 'w-[20rem]' : 'hidden '
        }`}>
        {renderSelectedDateAndDay()}
        <div className='flex flex-col gap-5'>
          {[
            '9:00 AM-9:45 AM',
            '9:30 AM-10:15 AM',
            '10:00 AM-10:45 AM',
            '10:30 AM-11:15 AM',
            '11:00 AM-11:45 AM',
            '11:30 AM-12:15 PM',
            '12:00 PM-12:45 PM',
            '12:30 PM-1:15 PM',
          ].map((time) => (
            <span
              onClick={() => spanOnClick(time)}
              key={time}
              className='border time   border-blue-500 px-9 py-1 font-bold text-blue-500 rounded-md'>
              {time}
            </span>
          ))}
        </div>
      </div>
      {details && (
        <>
          <div className='flex flex-col items-start gap-2'>
            <button
              className='text-3xl text-blue-500 px-5 '
              onClick={handleBack}>
              <IoIosArrowDropleftCircle />
            </button>
            <Details />
          </div>
        </>
      )}
    </div>
  );
};

export default Calendar;
