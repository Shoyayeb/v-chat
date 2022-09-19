import React, { createContext } from "react";
import useChat from './../../Hooks/useChat';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContexts = useChat();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;