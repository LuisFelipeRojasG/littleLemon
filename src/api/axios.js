import axios from "axios";

const instance = axios.create({
    baseURL: 'https://littlelemonserv.onrender.com/api',
    withCredentials: true
})

export default instance
