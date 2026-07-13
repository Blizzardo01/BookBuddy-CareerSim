import { createContext, useContext, useState } from "react";

const API = import.meta.env.API;

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);

    const register = async (credentials) => {

    }

    const login = async (credentials) => {

    }

    const logout = () => setToken(null);

    const value = {token, register, login, logout};
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw Error("useAuth must be used within AuthProvider");
    return context;
    }