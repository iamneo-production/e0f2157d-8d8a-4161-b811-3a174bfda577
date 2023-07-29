import axios from "axios";

const BASE_URL = "https://8080-bdccabcddefecacabeacbecdafbfbfaeedd.project.examly.io"; 
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

export const saveManager = async (manager) => {
    try {
        const response = await axiosInstance.post("/manager", manager);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const getAllManagers = async () => {
    try {
        const response = await axiosInstance.get("/managers");
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const getSingleManager = async (id) => {
    try {
        const response = await axiosInstance.get(`/manager/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};



export const deleteManager = async (id) => {
    try {
        const response = await axiosInstance.delete(`/manager/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const updateManager = async (id, managerData) => {
    try {
        const response = await axiosInstance.put(`/manager/${id}`, managerData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};