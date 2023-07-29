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
    

    const fetchRooms = async () => {
        try {
            let roomsData;
            if (roomTypeFilter && locationFilter) {
                roomsData = await getFilteredRooms({ roomType: roomTypeFilter, location: locationFilter });
                console.log(roomTypeFilter,locationFilter)
                console.log(roomsData)
                console.log(rooms)
            } else {
                roomsData = await getAllRooms();
                console.log(roomTypeFilter,locationFilter)
                console.log(roomsData)
                console.log(rooms)
            }
            setRooms(roomsData);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch rooms!', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        console.log(roomTypeFilter)
        console.log(locationFilter)
        fetchRooms();
    }, [roomTypeFilter, locationFilter]);
    if (!authToken) {
        return (
            <div>
                <p>Not Authenticated</p>
                <Navigate to="/" />
            </div>
        ); 
    }

    return (
        <Box p={4}>

            <Box mt={4}>
                <Flex align="center">
                    <Box mr={2}>
                        <Select
                            
                            value={roomTypeFilter}
                            onChange={(e) => setRoomTypeFilter(e.target.value)}
                        >
                            <option value="" disabled>Room Type</option>
                            <option value="Single Room">Single Room</option>
                            <option value="Double Room">Double Room</option>
                            <option value="Deluxe Room">Deluxe Room</option>
                            <option value="Twin Room">Twin Room</option>
                            <option value="Suite Room">Suite Room</option>
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
                <List rooms={rooms} key={rooms.length}/>
            )}
        </Box>
    );
};

export default Home;
