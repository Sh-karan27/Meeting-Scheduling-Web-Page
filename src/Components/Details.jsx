import React, { useState } from 'react';
import { emojiData1, emojiData2 } from '../utils/options';
import AlertDialog from './DilogBox';

const Details = () => {
  const [addGuest, setAddGuset] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    guestEmail: '',
    option1: '',
    option2: '',
    message: '',
    workspace: '',
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setShowDialog(true);
  };
  const handleCloseDialog = () => {
    setShowDialog(false);
    setForm({
      name: '',
      email: '',
      guestEmail: '',
      option1: '',
      option2: '',
      message: '',
      workspace: '',
    });
  };

  return (
    <section className='flex flex-col justify-between '>
      <div className='w-[25rem] h-[500px] flex items-start justify-start flex-col px-5 gap-10 overflow-y-scroll '>
        <h1 className='font-bold'>Enter Details</h1>

        <form
          onSubmit={handleSubmit}
          action=''
          className='w-full  flex flex-col gap-10
      '>
          <label className='flex flex-col items-start justify-start font-bold'>
            Name*
            <input
              name='name'
              onChange={handleChange}
              value={form.name}
              type='text'
              className='  focus:border-blue-500 px-5 py-2 w-full border-2 rounded-md outline-none font-normal'
            />
          </label>
          <label className='flex flex-col items-start justify-start font-bold'>
            Email*
            <input
              onChange={handleChange}
              value={form.email}
              name='email'
              type='email'
              className='focus:border-blue-500  px-5 py-2 w-full border-2 rounded-md outline-none font-normal'
            />
          </label>
          <label className='flex flex-col items-start justify-start font-bold'>
            <button
              type='button'
              className='font-semibold border border-blue-500  px-1 py-1 rounded-xl text-blue-500'
              onClick={() => setAddGuset(true)}>
              Add Guest
            </button>
          </label>
          {addGuest && (
            <label className='flex flex-col items-start justify-start font-bold'>
              Guest Email(s)*
              <input
                onChange={handleChange}
                value={form.guestEmail}
                name='guestEmail'
                type='email'
                className='px-5 h-[100px] focus:border-blue-500  w-full border-2 rounded-md outline-none font-normal'
              />
            </label>
          )}
          <div className='flex items-start flex-col gap-2 justify-start'>
            <h1 className='font-bold'>
              Please, choose up to three options. You are more interested in: *
            </h1>
            {emojiData1.map((data, i) => (
              <label
                className='flex items-center justify-items-center gap-1'
                key={i}>
                <input type='checkbox' />
                <span>{data.emoji}</span>
                <span>{data.name}</span>
              </label>
            ))}
          </div>
          <div className='flex items-start flex-col gap-2 justify-start'>
            <h1 className='font-bold'>
              Please, choose up to three options. You are more interested in: *
            </h1>
            {emojiData2.map((data, i) => (
              <label
                className='flex items-center justify-items-center gap-1'
                key={i}>
                <input type='checkbox' onChange={handleChange} />
                <span>{data.emoji}</span>
                <span>{data.name}</span>
              </label>
            ))}
          </div>
          <label className='flex flex-col items-start justify-start font-bold'>
            Please, share anything that will help prepare for our meeting.
            <textarea
              value={form.message}
              onChange={handleChange}
              name='message'
              type='text'
              className='focus:border-blue-500  px-5 py-2 w-full border-2 rounded-md outline-none font-normal'
            />
          </label>
          <label className='flex flex-col items-start justify-start font-bold'>
            Please, share with us the name of your Fibery workspace (if any)
            <input
              value={form.workspace}
              name='workspace'
              onChange={handleChange}
              type='text'
              className='focus:border-blue-500  px-5 py-2 w-full border-2 rounded-md outline-none font-normal'
            />
          </label>
          <label className='flex flex-col items-start justify-start font-bold'>
            <button
              type='submit'
              className='font-semibold border bg-blue-500  px-2 py-2 rounded-3xl text-white'>
              Schedule Event
            </button>
          </label>
        </form>
        {showDialog && (
          <AlertDialog formDetails={form} handleClose={handleCloseDialog} />
        )}
      </div>
    </section>
  );
};

export default Details;
