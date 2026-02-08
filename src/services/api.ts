import axios from "axios"

const BACKEND_URL = "http://192.168.0.184:8080";

const api = axios.create({
    baseURL: BACKEND_URL + "/api",
});

export const actuatorApi = axios.create({
    baseURL: BACKEND_URL + "/actuator",
});

export default api;