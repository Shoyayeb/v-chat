import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import initializeFirebase from './../Firebase/firebase.init';


initializeFirebase();

const useChat = () => {
    const auth = getAuth();
    auth.useDeviceLanguage();

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return {
        createUser
    }
};

export default useChat;