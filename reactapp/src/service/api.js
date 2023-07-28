import axios from "axios";

const BASE_URL = "https://8080-fceaaaaadfecacabeacbecdaeaeaadbdbabf.project.examly.io"; 

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

export const registerUser = async (userData) => {
    try {
        const response = await axiosInstance.post("/users/register", userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axiosInstance.post("/users/authenticate", userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
