import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.105:8000'
});

export default axiosInstance;