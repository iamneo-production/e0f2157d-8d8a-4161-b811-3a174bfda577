import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Text, CircularProgress, Flex, Spacer, Select, Input } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';
import { getAllRooms, getFilteredRooms } from '../service/roomService';
import { useNavigate, Navigate } from 'react-router-dom';
import List from './list/List';

const Home = () => {
    const { handleLogout, user, authToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [roomTypeFilter, setRoomTypeFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    console.log(user)
    useEffect(() => {
        fetchRooms();
    }, [roomTypeFilter, locationFilter]);

    const fetchRooms = async () => {
        try {
            let roomsData;
            if (roomTypeFilter && locationFilter) {
                roomsData = await getFilteredRooms({ roomType: roomTypeFilter, location: locationFilter });
            } else {
                roomsData = await getAllRooms();
            }
            setRooms(roomsData);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch rooms!', error);
            setLoading(false);
        }
    };



    if (!authToken) {
        return (
            <div>
                <p>Not Authenticated</p>
                <Navigate to="/" />
            </div>
        ); // Render nothing while redirecting
    }

    return (
        <Box p={4}>

            <Box mt={4}>
                <Flex align="center">
                    <Box mr={2}>
                        <Select
                            placeholder="Select Room Type"
                            value={roomTypeFilter}
                            onChange={(e) => setRoomTypeFilter(e.target.value)}
                        >
                            <option value="Single Room">Single</option>
                            <option value="Double Room">Double</option>
                            <option value="Suite Room">Suite</option>
                            <option value="Twin Room">Twin</option>
                            <option value="Delux Room">Delux</option>
                        </Select>
                    </Box>
                    <Box>
                        <Input
                            type="text"
                            placeholder="Enter Location"
                            value={locationFilter}
                            onChange={(e) => setLocationFilter(e.target.value)}
                        />
                    </Box>
                </Flex>
            </Box>

            {loading ? (
                <Box textAlign="center" py={4}>
                    <CircularProgress isIndeterminate color="teal" />
                </Box>
            ) : (
                <List rooms={rooms} />
            )}
        </Box>
    );
};

export default Home;
