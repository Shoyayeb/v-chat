import React from 'react';
import useAuth from './../../Hooks/useAuth';
const Chats = () => {
    const { messages, user } = useAuth();
    const fakemessages = [
        {
            message: "hi rCkqbkSaKPWnLVKztjSjAQr8tvk1rCkqbkSaKPWnLVKztjSjAQr8tvk1rCkqbkSaKPWnLVKztjSjAQr8tvk1",
            uid: "123",
            id: "rd"
        },
        {
            message: "hello",
            uid: "rCkqbkSaKPWnLVKztjSjAQr8tvk1",
            id: "rd1"
        },
        {
            message: "hdsfi",
            uid: "123",
            id: "rd2"
        },
        {
            message: "01993e83843",
            uid: "rCkqbkSaKPWnLVKztjSjAQr8tvk1",
            id: "rd4"
        },
        {
            message: "hello",
            uid: "rCkqbkSaKPWnLVKztjSjAQr8tvk1",
            id: "rd1das"
        },
        {
            message: "hdsfi",
            uid: "123",
            id: "rd2as"
        },
        {
            message: "01993e83843",
            uid: "rCkqbkSaKPWnLVKztjSjAQr8tvk1",
            id: "rd4f"
        },
        {
            message: "01993e83843",
            uid: "rCkqbkSsaKPWnLVKztjSjAQr8tvk1",
            id: "rd4gd"
        },
        {
            message: "wtf",
            uid: "rCkqbkSaKPWnLVKztjSjAQr8tvk1",
            id: "rd1dassa"
        },
        {
            message: ";';]",
            uid: "123",
            id: "rd2asaw"
        },
        {
            message: "1232131231",
            uid: "rCkqbkSaKPWnLVKztjSjAQr8tvk1",
            id: "rd4fqe"
        },
    ];
    return (
        <div className=" max-h-[38rem] overflow-y-scroll overflow-x-hidden">
            {/* <div >
                <header className=" bg-white shadow">
                    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header> */}
            <div className='bottom-0 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 '>
                {/* <div className=""> */}
                {messages.map((msg) => {
                    return (
                        <div key={msg?.id}>
                            <div className="px-4 sm:px-0 flex justify-end">
                                <h3 className={`${msg.uid === user.uid && "text-right bg-indigo-600 text-white"} rounded-lg my-1 py-2 px-4 w-min max-w-xs break-words ${msg.uid === !user.uid && "text-right bg-indigo-600 text-white"}`}>{msg?.message}</h3>
                            </div>
                        </div>
                    )
                })}
                {/* </div> */}
            </div>
            {/* </div> */}
        </div>
    );
};

export default Chats;