import React from 'react';
const Chats = () => {

    return (
        <div className="relative">
            <div >
                <header className=" bg-white shadow">
                    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main className='absolute right-0 left-0 bottom-15 h-5/6'>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 overflow-y-scroll">
                        {/* Replace with your content */}
                        <div className="px-4 py-6 sm:px-0">
                            <h3 className='text-left my-5 bg-gray-200 rounded-lg flex justify-start p-2'>message</h3>
                            <h3 className='text-right bg-indigo-500 rounded-lg flex justify-end p-2'>message2</h3>
                        </div>
                        {/* /End replace */}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Chats;