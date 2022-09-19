
import React, { useState } from 'react';

const Chats = () => {

    const [message, setMessage] = useState('');
    return (
        <div className='absolute bottom-5 right-0 w-full'>
            <form className='flex items-center gap-4 mx-auto' onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" className=' w-10/12 rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' value={message} onChange={(e) => setMessage(e.target.value)} />
                <button className=' rounded-md border border-transparent bg-indigo-600 px-4 py-2 sm:text-sm font-medium text-white hover:bg-indigo-700 w-2/12 mx-auto'>Send</button>
            </form>
        </div>
    );
};

export default Chats;