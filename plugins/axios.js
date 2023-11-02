import axios from 'axios';

const axiosInstance = axios.create({
    timeout: 10000,
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export default axiosInstance;
