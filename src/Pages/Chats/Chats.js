import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import SendBar from './../Shared/SendBar/SendBar';

const Chats = () => {
    const { chatId } = useParams();

    const { messages, user, db } = useAuth();
    const [chatCollection, setChatCollection] = useState('');
    const [userChattingWith, setUserChattingWith] = useState({});

    useEffect(() => {
        const unsubscribe = async () => {
            const docRef = doc(db, "users", chatId.split("&")[0]);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setUserChattingWith(docSnap.data());
                setChatCollection(userChattingWith.uid + "&" + user.uid);
                console.log(chatCollection);
            }
            else {
                setUserChattingWith(null)
                // doc.data() will be undefined in this case
                console.log("No such user!");
            }
        };
        unsubscribe();
    }, [chatId]);

    return (
        <div className="">
            {/* Remove class [ h-64 ] when adding a card block */}
            <SendBar chatCollection={chatCollection} />
            <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full flex justify-center">
                    {userChattingWith ? <div>
                        <h4>{chatId}</h4>
                    </div> : <h4 className='text-3xl shadow w-max'>Select a Chat to get Started</h4>}
                </div>
            </div>
        </div>
    );
};

export default Chats;