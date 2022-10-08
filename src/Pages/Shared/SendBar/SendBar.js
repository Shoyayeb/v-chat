import { PhotoIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import useAuth from './../../../Hooks/useAuth';
const SendBar = ({ chatCollection }) => {
    const { sendMessage } = useAuth();
    const [message, setMessage] = useState('');

    // className=' w-10/12 rounded-md border-gray-300  pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-0'
    // value={message} onChange={(e) => setMessage(e.target.value)}
    return (
      <div className="sticky">
        <form
          className="mx-7"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(message);
            if (message) {
              sendMessage(message, chatCollection);
            }
          }}
        >
          <div className="relative flex">
            <input
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              type="text"
              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700  bg-white font-normal h-10 flex items-center pl-12 text-sm  border shadow w-5/6 rounded-md border-gray-300  pr-16  focus:ring-indigo-500 sm:text-sm py-0"
              placeholder="Enter Your Message "
            />
            <label className="absolute left-0 text-gray-600 flex items-center px-4 border-l h-full cursor-pointer">
              <input
                type="file"
                className="hidden w-full text-sm text-zinc-600"
                src=""
                alt="i"
              />
              <PhotoIcon
                className="icon icon-tabler icon-tabler-mail"
                width={18}
                height={18}
              />
            </label>
            {/* <button className='absolute right-0 rounded-md border border-transparent bg-indigo-600 px-4 py-2 sm:text-sm font-medium text-white hover:bg-indigo-700 w-2/12'> </button> */}
            <button className="absolute right-0 ">
              <IoSend
                className=" icon icon-tabler icon-tabler-mail rounded-full hover:bg-indigo-100 text-indigo-500 w-10 h-10 p-1"
                width={18}
                height={18}
              />
            </button>
          </div>
        </form>
        {/* <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" /> */}
      </div>
    );
};

export default SendBar;