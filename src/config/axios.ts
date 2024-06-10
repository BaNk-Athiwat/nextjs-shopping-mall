import axios from "axios";

console.log(process.env.NEXT_PUBLIC_API_URL);

export const axiosAPI = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 600000,
    withCredentials: true,
});