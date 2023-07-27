import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { AuthContext } from "../../context/AuthContext";
import { deleteRoom, getAllRooms } from "../../service/roomService";
import { addBooking } from "../../service/bookingService";
import BookingForm from "../BookingForm";

const List = () => {
  const { user, isBooked, setIsBooked } = useContext(AuthContext);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const fetchRooms = async () => {
    try {
      const roomsData = await getAllRooms();
      setRooms(roomsData);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch rooms!", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []); 

  const handleDelete = async (roomId) => {
    try {
      if (user.isAdmin) {
        await deleteRoom(roomId);
      
        fetchRooms();
      } else {
        console.log("You are not authorized to delete rooms.");
      }
    } catch (error) {
      console.error("Failed to delete room:", error);
    }
  };

  const handleBookNow = (roomId) => {
    if (isBooked[roomId]) {
      return;
    }

    setIsBooked((prevState) => ({
      ...prevState,
      [roomId]: true,
    }));

    navigate(`/bookroom`, { state: { rooms, roomId } }); // Pass rooms and roomId as state
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Rooms List
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {rooms.map((room) => (
          <Box
            key={room.id}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
          >
            <Image
              src={room.image}
              alt={room.title}
              w="100%"
              h="200px"
              objectFit="cover"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                {room.title}
              </Heading>
              <Text mb={2}>Address: {room.address}</Text>
              <Text mb={2}>Room Type: {room.roomType}</Text>
              <Text mb={2}>Rating: {room.rating}</Text>
              <Text mb={2}>Cost: Rs.{room.cost}</Text>
              <Text mb={2}>Location: {room.location}</Text>
            </Box>
            {user.isAdmin ? (
              <Button colorScheme="red" onClick={() => handleDelete(room.id)}>
                Delete
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                onClick={() => handleBookNow(room.id)}
              >
                {isBooked[room.id] ? "Booked" : "Book Now"}
              </Button>
            )}
          </Box>
        ))}
      </SimpleGrid>
      <Routes>
        <Route path="/bookroom" element={<BookingForm />} />
      </Routes>
    </Box>
  );
};

export default List;