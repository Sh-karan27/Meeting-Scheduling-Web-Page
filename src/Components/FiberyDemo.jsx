import React from 'react';
import Logo from '../assets/logo.png';
import { CiClock1 } from 'react-icons/ci';
import { CiCalendar } from 'react-icons/ci';
import { useDate } from './DateContext';
import { GiEarthAmerica } from 'react-icons/gi';

const FiberyDemo = () => {
  const { selectedDateInfo, meetTime } = useDate();
  return (
    <section className='  flex flex-col justify-between border-r'>
      <div className='flex flex-col items-center justify-between w-full h-full  py-5'>
        <div className=' flex items-center justify-center w-full '>
          <img src={Logo} alt='logo' className='max-h-[120px] pb-[15px]' />
        </div>

        <div className='flex flex-col  gap-5 border-t justify-center w-[250px] max-md:w-full h-[400px] px-5 max-sm:w-full'>
          <h1 className='text-3xl font-semibold max-sm:text-center'>
            Fibery Demo
          </h1>
          <div className='flex flex-col items-start justify-start gap-2 font-semibold'>
            <p className='flex items-center justify-center gap-1 text-md text-gray-400 font-normal'>
              <CiClock1 className=' text-xl text-gray-400' /> 45 min
            </p>
            <div className='flex flex-col items-start justify-center gap-1'>
              <span className='text-gray-400 font-bold text-sm'>
                {meetTime.selectedTime}
              </span>
              <p className=' flex items-center justify-center gap-1'>
                <span className='text-gray-400 font-bold text-sm'>
                  {selectedDateInfo.selectedDay}
                </span>
                <span className='text-gray-400 font-bold text-sm'>
                  {selectedDateInfo.selectedDate}
                </span>
                <span className='text-gray-400 font-bold text-sm'>
                  {selectedDateInfo.selectedMonth}
                </span>
              </p>
              <span className='flex items-center justify-center gap-1 text-gray-400 font-bold text-sm'>
                <GiEarthAmerica />
                Indian Standard Time
              </span>
            </div>
          </div>

          <p>
            Book a meeting with a product expert. We've helped hundreds of
            companies overcome product management challenges.
          </p>
          <p className='text-blue-500'>Cookie settings</p>
        </div>
      </div>
    </section>
  );
};

export default FiberyDemo;
