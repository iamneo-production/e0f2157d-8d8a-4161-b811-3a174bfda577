import React, { useState, useContext } from "react";
import { Box, FormControl, FormLabel, Input, Button, Text, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
    const { handleSignUp } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        name: "",
        phone: "",
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await handleSignUp(formData);
            setLoading(false);
            navigate("/login");
        } catch (error) {
            console.error("Registration failed!", error);
            setLoading(false);
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Box maxW="400px" mx="auto" mt="4">
                <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}>
                    Signup
                </motion.h2>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input type="text" name="username" value={formData.username} onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" name="password" value={formData.password} onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" name="name" value={formData.name} onChange={handleChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Phone</FormLabel>
                            <Input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                        </FormControl>
                        <Button type="submit" colorScheme="teal" mt={4} isLoading={loading}>
                            Sign up
                        </Button>
                        {error && <Text color="red">{error}</Text>}
                    </form>
                    <Box mt="4" textAlign="center">
                        <span>Already a user? </span>
                        <ChakraLink as={Link} to="/login" color="blue.500">
                            Login
                        </ChakraLink>
                    </Box>
                </motion.div>
            </Box>
        </motion.div>
    );
};

export default Signup;
