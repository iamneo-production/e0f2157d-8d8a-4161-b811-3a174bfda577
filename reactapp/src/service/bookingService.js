import axios from "axios";

const BASE_URL = "https://8080-bdccabcddefecacabeacbecdaeaeaadbdbabf.project.examly.io"; 

const getToken = () => {
    return localStorage.getItem("token");
};

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});



export const getAllBookings = async () => {
    try {
        const response = await axiosInstance.get("/bookings");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const addBooking = async (bookingData) => {
    try {
        const response = await axiosInstance.post(`/bookings`, bookingData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateBookingStatus = async (bookingId, status) => {
    try {
        const response = await axiosInstance.put(`/bookings/${bookingId}/status?status=${status}`);

        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};