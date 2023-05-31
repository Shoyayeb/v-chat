import { getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import initializeFirebase from './../Firebase/firebase.init';

const socket = io.connect("https://v-chat-8wr1.onrender.com");
initializeFirebase();

const useChat = () => {
    const auth = getAuth();
    auth.useDeviceLanguage();
    const [user, setUser] = useState({});
    const [pass, setPass] = useState('');
    const [loginLoader, setLoginLoader] = useState(false);
    const [otpSuccess, setOtpSuccess] = useState(false);
    const [messages, setMessages] = useState([]);

    const sendMessage = (message) => {
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
    }

    const verifyOTP = (pass) => {
        setLoginLoader(true);
        if (pass.length === 6) {
            console.log(pass);
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(pass).then((result) => {
                // User signed in successfully.
                setUser(result.user)
                setOtpSuccess(true);
                setLoginLoader(false);
                console.log(result);
                // ...
            }).catch((error) => {
                console.log(error);
                setOtpSuccess(false);
                setLoginLoader(false);
                // User couldn't sign in (bad verification code?)
                // ...
            });
        } else console.log(`code not ok- ${pass}`);
    }

    const createPhoneUser = (phoneNumber) => {
        console.log(phoneNumber);
        setLoginLoader(true);
        // if (phoneNumber.length === 11) {
        //     console.log("phone number is valid");
        // }
        generateRecaptcha();
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
        sendMessage, messages
    }
};

export default useChat;