import React from 'react';
import FiberyDemo from './FiberyDemo';
import Calendar from './Calendar';


const ScheduleSection = () => {
  return (
    <div className='  flex justify-center items-center  border max-sm:flex-col max-sm:h-full'>
      <FiberyDemo />
      <Calendar />
      
    </div>
  );
};

export default ScheduleSection;
