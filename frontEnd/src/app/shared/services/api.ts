import axios from "axios";

export const Api = axios.create({
    baseURL: "http://192.168.3.189:4000/api",
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
})