import axios from "axios";

const BASE_URL = "http://localhost:8080"; 
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

export const saveRoom = async (roomData) => {
    try {
        const response = await axiosInstance.post("/rooms/saveroom", roomData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getAllRooms = async () => {
    try {
        const response = await axiosInstance.get("/rooms/all");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getFilteredRooms = async (roomData) => {
    try {
        const response = await axiosInstance.post("/rooms/GetFilteredRooms", roomData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteRoom = async (id) => {
    try {
        const response = await axiosInstance.delete(`/rooms/delete/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateRoom = async (id, room) => {
    try {
        const response = axiosInstance.put(`http://localhost:8080/rooms/update/${id}`, room);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const getSingleRoom = async (id) => {
    try {
        const response = await axiosInstance.get(`http://localhost:8080/rooms/emp/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};