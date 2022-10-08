import React, { useState } from "react";
import useAuth from "./../../Hooks/useAuth";
import SendBar from "./../Shared/SendBar/SendBar";

const Chats = () => {
  const { messages, user, db } = useAuth();
  const [chatCollection, setChatCollection] = useState("");

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
    <div className="mx-auto max-w-7xl">
      <div className="overflow-y-scroll">
        {messages.map((msg) => {
          return (
            <div key={msg?.id}>
              <div
                className={`${
                  msg.uid === user.uid && "justify-end"
                } px-4 sm:px-0 flex ${msg.uid === !user.uid && ""}`}
              >
                <h3
                  className={`${
                    msg.uid === user.uid && " bg-indigo-600 text-white"
                  } rounded-lg my-1 py-2 px-4 max-w-md${
                    msg.uid !== user.uid && " bg-gray-300"
                  }`}
                >
                  {msg?.message}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      <SendBar chatCollection={chatCollection} />
      {/* <div>
                <div className="px-4 sm:px-0 flex justify-end">
                    <h3 className="text-right bg-indigo-600 text-white rounded-lg my-1 py-2 px-4 w-min max-w-xs break-words">{messages ? messages : "no message sent"}</h3>
                </div>
            </div> */}
    </div>
  );
};

export default Chats;
