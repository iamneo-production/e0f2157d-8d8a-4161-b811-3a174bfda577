import axios from "axios";

const BASE_URL = "https://8080-abafebdafeeaffecacabeacbecdaeaeaadbdbabf.project.examly.io/"; 

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



export const addHotel = async (hotelData) => {
    try {
        const response = await axiosInstance.post("/hotel", hotelData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const getAllHotels = async () => {
    try {
        const response = await axiosInstance.get("/hotels");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const deleteHotel = async (id) => {
    try {
        const response = await axiosInstance.delete(`/hotel/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const updateHotel = async (id, hotelData) => {
    try {
        const response = await axiosInstance.put(`/hotel/${id}`, hotelData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getSingleHotel = async (id) => {
    try {
        const response = await axiosInstance.get(`/hotel/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};