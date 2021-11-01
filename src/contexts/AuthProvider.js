import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase.js';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allcontext = useFirebase();
    return (
        <AuthContext.Provider value={allcontext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;