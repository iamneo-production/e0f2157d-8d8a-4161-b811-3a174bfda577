import axios from "axios";

const BASE_URL = "https://8080-cafefbbcdeffcdfecacabeacbecdaeaeaadbdbabf.project.examly.io/"; 

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



export const addPayment = async (paymentData) => {
    try {
        const response = await axiosInstance.post(`/api/bookings/payments`, paymentData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getAllPAyments = async () => {
    try {
        const response = await axiosInstance.get("/api/bookings");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export const getSinglePayment = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/bookings/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deletePayment = async (id) => {
    try {
        const response = await axiosInstance.delete(`/api/bookings/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updatePayment = async (id, paymentData) => {
    try {
        const response = await axiosInstance.put(`/api/bookings/${id}`, paymentData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};




