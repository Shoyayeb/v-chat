import { getFirestore } from "@firebase/firestore";
import axios from "axios";
import { getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber, signOut } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import initializeFirebase from './../Firebase/firebase.init';

const socket = io.connect("http://localhost:4000");
initializeFirebase();
const db = getFirestore(initializeFirebase);

const useChat = () => {
    const auth = getAuth();
    auth.useDeviceLanguage();
    const [user, setUser] = useState({});
    const [pass, setPass] = useState('');
    const [loginLoader, setLoginLoader] = useState(false);
    const [otpSuccess, setOtpSuccess] = useState(false);
    const [messages, setMessages] = useState([]);
    const chatsCollectionRef = collection(db, "chats");

    const sendMessage = async (message) => {
        const time = new Date();
        // await setDoc(chatsCollectionRef, {
        //     message,
        //     time,
        //     uid: user.uid
        // });
        await addDoc(collection(db, "chats"), {
            message,
            time,
            uid: user.uid,
        });
        socket.emit("send_message", { message, uid: user.uid });
        setMessages([...messages, { message, uid: user.uid }]);
        console.log(messages);
    }

    useEffect(() => {
        socket.on("recieve_message", (data) => {
            setMessages([...messages, { message: data.message, uid: data.uid, id: data.id }]);
            console.log(messages);
        });
    }, [socket]);

    let appVerifier = window.recaptchaVerifier;

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                console.log(response);
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        }, auth);
    };

    async function uploadPfp(file) {
        // const formData = new FormData();
        // formData.append("file", file, "image.png");
        // console.log(formData);
        await axios.post(`https://up.flickr.com/services/upload?key=5b8f4511642476d70199940f0f1373b5`, file).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    };

    const verifyOTP = (pass) => {
        if (pass.length === 6) {
            console.log(pass);
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(pass).then(async (result) => {
                // User signed in successfully.
                setUser(result.user);
                await setDoc(doc(db, "users", result.user.uid), {
                    uid: result.user.uid,
                    phone: result.user.phoneNumber,
                    name: result.user.displayName ? result.user.displayName : result.user.phoneNumber,
                    photoURL: result.user.photoURL ? result.user.photoURL : "https://www.kindpng.com/picc/b/24-248253_user-profile-png.png"
                });
                console.log(result);

            }).catch((error) => {
                alert(error);
            });
        } else alert(`code not ok- ${pass}`);
    }

    const createPhoneUser = (phoneNumber) => {
        console.log(phoneNumber);
        setLoginLoader(true);
        generateRecaptcha();
        if (phoneNumber.length === 14) {
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                console.log(confirmationResult);
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                setOtpSuccess(true);
                setLoginLoader(false);
            }).catch((error) => {
                console.log(error);
                setOtpSuccess(false);
                setLoginLoader(false);
                // Error; SMS not sent
                // ...
            });
        } else {
            setOtpSuccess(false);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                setUser({});
                console.log(user);
            }
        });
        return () => unsubscribe;
    }, [auth]);


    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign out success");
            })
    }

    return {
        user,
        createPhoneUser,
        pass,
        setPass,
        verifyOTP,
        loginLoader,
        otpSuccess,
        handleLogOut,
        sendMessage, messages, uploadPfp, db
    }
};

export default useChat;