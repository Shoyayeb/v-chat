import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import SendBar from './../Shared/SendBar/SendBar';

const Chats = () => {
    const { chatId } = useParams();

    const { messages, user, db } = useAuth();
    const [chatCollection, setChatCollection] = useState('');
    const [userChattingWith, setUserChattingWith] = useState({});

    // useEffect(() => {
    //     const unsubscribe = () => {
    //         const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
    //             console.log("Current data: ", doc.data());
    //         });
    //     };
    //     unsubscribe();
    // }, []);



    // <div className="">
    //     {/* Remove class [ h-64 ] when adding a card block */}
    //     <SendBar chatCollection={chatCollection} />
    //     <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
    //         {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
    //         <div className="w-full h-full flex justify-center">
    //             {userChattingWith ? <div>
    //                 <h4>{chatId}</h4>
    //             </div> : <h4 className='text-3xl shadow w-max'>Select a Chat to get Started</h4>}
    //         </div>
    //     </div>
    // </div>
    return (
        <div className='bottom-0 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 '>
            <SendBar chatCollection={chatCollection} />
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
            {/* <div>
                <div className="px-4 sm:px-0 flex justify-end">
                    <h3 className="text-right bg-indigo-600 text-white rounded-lg my-1 py-2 px-4 w-min max-w-xs break-words">{messages ? messages : "no message sent"}</h3>
                </div>
            </div> */}
        </div>
    );
};

export default Chats;