import React, { useContext, useState, useEffect } from "react";
import { Box, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/api";

const Login = () => {
    const { setUser, setAuthToken, user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError(null);
    //     setLoading(true);
    //     try {
    //         const response = await loginUser(formData);
    //         localStorage.setItem("token", response.token);
    //         setAuthToken(response.token);
    //         console.log(response)

    //         // Check if the user has ROLE_ADMIN authority
    //         const isAdmin = response.authorities.some((authority) => authority.authority === "ROLE_ADMIN");

    //         if (isAdmin) {
    //             // For admin users, update the user state with isAdmin: true
    //             setUser({ ...response.user, isAdmin: true });
    //             setLoading(false);
    //             navigate("/addroom"); // Navigate to the addroom page for admin
    //         } else {
    //             // For non-admin users, update the user state without isAdmin: true
    //             setUser(response.user);
    //             setLoading(false);
    //             navigate("/home"); // Navigate to the home page for non-admin users
    //         }
    //     } catch (error) {
    //         console.error("Login failed!", error);
    //         setLoading(false);
    //         setError("Login failed. Please try again.");
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null);
        setLoading(true);
        try {

            const response = await loginUser(formData)
            localStorage.setItem("token", response.token)
            setAuthToken(response.token)
            console.log(response)
            const isAdmin = response.authorities.some((authority) => authority.authority === "ROLE_ADMIN");
            const isHotelStaff = response.authorities.some((authority) => authority.authority === "ROLE_HOTEL_STAFF");
            console.log(isAdmin)
            if (isAdmin) {
                // For admin users, update the user state with isAdmin: true
                setUser({ ...response.user, isAdmin: true });
                setLoading(false);
                navigate("/all-bookings");
                // Navigate to the all-bookings page for admin
            } else if (isHotelStaff) {
                // For hotel staff, update the user state with isHotelStaff: true
                setUser({ ...response.user, isHotelStaff: true });
                setLoading(false);
                navigate("/hotelmanager"); // Navigate to the hotelmanager page for hotel staff
            } else {
                // For non-admin users, update the user state without isAdmin: true
                setUser(response.user);
                setLoading(false);
                navigate("/home"); // Navigate to the home page for non-admin users
            }
        }
        catch (error) {
            console.error("Login failed!", error);
            setLoading(false);
            setError("Login failed. Please try again.");
        }
    }



    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Box maxW="400px" mx="auto" mt="4">
                <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}>
                    Login
                </motion.h2>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" name="password" value={formData.password} onChange={handleChange} />
                        </FormControl>
                        <Button type="submit" colorScheme="teal" mt={4} isLoading={loading}>
                            Login
                        </Button>
                        {error && <Text color="red">{error}</Text>}
                    </form>
                </motion.div>
            </Box>
        </motion.div>
    );
};

export default Login;
