import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1"

export const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 4000,
    headers: {
        'Content-Type': "application/json",
        'Authorization': localStorage.getItem("token")
    }
})