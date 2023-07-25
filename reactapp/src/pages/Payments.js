import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deletePayment, getAllPAyments } from '../service/paymentService';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';

function Payments() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        loadPayments();
    }, []);

    const loadPayments = async () => {
        const result = await getAllPAyments();
        setPayments(result);
        console.log(result);
    };

    const deleteSinglePayment = async (id) => {
        await deletePayment(id)
        loadPayments()
    };
    return (
        <VStack spacing={4} align="stretch">
            <Button as={Link} to={"/home"}>Home</Button>
            <Box fontSize="xl" fontWeight="bold">
                All Payments
            </Box>

            {payments.map((ele) => (
                <Flex key={ele.id} justifyContent="space-between" alignItems="center">
                    <Box>
                        <p>{ele.email}</p>
                        <p>{ele.phoneNumber}</p>
                        <p>{ele.hotelId}</p>
                        <p>{ele.amount}</p>
                    </Box>
                    <Flex>
                        <Button as={Link} to={`/payment/view/${ele.paymentId}`} colorScheme="blue" mr={2}>
                            View
                        </Button>
                        <Button as={Link} to={`/payment/${ele.paymentId}`} colorScheme="yellow" >
                            Edit
                        </Button>
                        <Button as={Link} colorScheme="red" onClick={() => deleteSinglePayment(ele.paymentId)}>
                            Delete
                        </Button>
                    </Flex>
                </Flex>
            ))}
        </VStack>
    );
}

export default Payments;
