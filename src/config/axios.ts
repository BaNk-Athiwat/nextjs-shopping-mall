const axios = require("axios");

console.log(process.env.NEXT_PUBLIC_API_URL);

export const axiosAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 600000,
  headers: {
    //   'Authorization': `Bearer ${getCookie('access_token')}` || null,
    "Content-Type": "application/json",
    // 'origin': originUrl
  },
  withCredentials: true,
});
