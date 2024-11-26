import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvide = ({ children }) => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);

    const login = () => {
        setIsAuthenticate(true);
    }
    const logout = () => {
        setIsAuthenticate(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticate, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);