import React, { useContext, useState, useEffect } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button
} from "@chakra-ui/react";
import { addBooking } from "../service/bookingService";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const BookingForm = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const { rooms, roomId } = location.state;

    // Find the selected room based on the roomId
    const selectedRoom = rooms.find((room) => room.id === roomId);

    const [bookingData, setBookingData] = useState({
        customerName: user.name,
        customerContact: user.phone,
        fromDate: "",
        toDate: "",
        totalDay: 0, 
        totalAmount: 0, 
    });

    useEffect(() => {
        
        const fromDate = new Date(bookingData.fromDate);
        const toDate = new Date(bookingData.toDate);
        const timeDifference = toDate.getTime() - fromDate.getTime();
        const totalDay = Math.ceil(timeDifference / (1000 * 3600 * 24));

   
        const totalAmount = totalDay * selectedRoom.cost;

        setBookingData({ ...bookingData, totalDay, totalAmount });
    }, [bookingData.fromDate, bookingData.toDate, selectedRoom.cost]);

    const handleBookingSubmit = async (e) => {
        e.preventDefault();

        try {
           
            const response = await addBooking(bookingData);

       
            if (response) {
             
                console.log("Room booked successfully!");
                navigate("/payment", { state: { roomAmount: bookingData.totalAmount, idRoom: selectedRoom, bookingData } });
            } else {
                console.error("Failed to book room:", response);
            }
        } catch (error) {
            console.error("Failed to book room:", error);
        }
    };

    return (
        <Box p={4}>
            <form onSubmit={handleBookingSubmit}>
                <FormControl id="customerName" mb={4} isRequired>
                    <FormLabel>Customer Name</FormLabel>
                    <Input
                        type="text"
                        value={bookingData.customerName}
                        onChange={(e) =>
                            setBookingData({ ...bookingData, customerName: e.target.value })
                        }
                    />
                </FormControl>
                <FormControl id="customerContact" mb={4} isRequired>
                    <FormLabel>Customer Contact</FormLabel>
                    <Input
                        type="text"
                        value={bookingData.customerContact}
                        onChange={(e) =>
                            setBookingData({ ...bookingData, customerContact: e.target.value })
                        }
                    />
                </FormControl>
                <FormControl id="fromDate" mb={4} isRequired>
                    <FormLabel>From Date</FormLabel>
                    <Input
                        type="date"
                        value={bookingData.fromDate}
                        onChange={(e) =>
                            setBookingData({ ...bookingData, fromDate: e.target.value })
                        }
                    />
                </FormControl>
                <FormControl id="toDate" mb={4} isRequired>
                    <FormLabel>To Date</FormLabel>
                    <Input
                        type="date"
                        value={bookingData.toDate}
                        onChange={(e) =>
                            setBookingData({ ...bookingData, toDate: e.target.value })
                        }
                    />
                </FormControl>
                <FormControl id="totalDay" mb={4} isRequired>
                    <FormLabel>Total Day</FormLabel>
                    <Input
                        type="number"
                        value={bookingData.totalDay}
                        readOnly 
                    />
                </FormControl>
                <FormControl id="totalAmount" mb={4} isRequired>
                    <FormLabel>Total Amount</FormLabel>
                    <Input
                        type="number"
                        value={bookingData.totalAmount}
                        readOnly 
                    />
                </FormControl>
                <Button type="submit" colorScheme="blue">
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default BookingForm;