import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../service/api";
import { saveRoom } from "../service/roomService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [user, setUser] = useState(null)
    const [room, setRoom] = useState(null)
    const [isBooked, setIsBooked] = useState({});
    const navigate = useNavigate();




    const handleSignUp = async (userData) => {
        try {
            const response = await registerUser(userData);
            console.log("User registered successfully!", response);

         
            navigate("/login");
        } catch (error) {
            console.error("Registration failed!", error);


        }
    }



    const handleLogout = () => {
        localStorage.removeItem("token");
        setAuthToken(null);
        setUser(null)
        navigate("/")
    };


    return (
        <AuthContext.Provider value={{ authToken, handleLogout, handleSignUp, user, setUser, setAuthToken, room, setRoom, isBooked, setIsBooked }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
