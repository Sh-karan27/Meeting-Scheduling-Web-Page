import React from 'react';
import FiberyDemo from './FiberyDemo';
import Calendar from './Calendar';

const ScheduleSection = () => {
  return (
    <div className='  flex  items-center   justify-between border max-sm:flex-col max-sm:border-none max-sm:h-[100vh]'>
      <FiberyDemo />
      <Calendar />
    </div>
  );
};

export default ScheduleSection;
