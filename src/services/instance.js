import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 4000,
    headers: {
        'Content-Type': "application/json",
        'Authorization': localStorage.getItem("token")
    }
})