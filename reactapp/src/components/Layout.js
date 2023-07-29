import React, { useContext } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
    const { handleLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        handleLogout();
        navigate('/');
    };

    return (
        <Box>
            <Box p={4} textAlign="right">
                <Button onClick={handleLogoutClick} colorScheme="teal">
                    Logout
                </Button>
            </Box>
            {children}
        </Box>
    );
};

export default Layout;
