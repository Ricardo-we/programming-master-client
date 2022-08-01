import { useContext, useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";
import { useJsonStorage } from "./useLocalStorage";
import { toast } from "react-toastify";

const AuthContext = createContext({});
const storagePrefix = "programming-master-";

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useJsonStorage(storagePrefix + "user")

    useEffect(() => {
        if (user?.token && (window.location.pathname === "/login" || window.location.pathname === "/login/sign-up")) {
            navigate("/guides");
            toast.success("Logged in successfully")
        }
    }, [user])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export {
    AuthContext,
    AuthProvider,
    useAuth
}