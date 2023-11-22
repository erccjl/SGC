import axios from 'axios';
import { toast } from 'react-toastify';

const clientInstance = axios.create({
    baseURL: 'api',
    timeout: 1000,
});

clientInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    toast.error(error.message, { position: toast.POSITION.BOTTOM_RIGHT, theme: "colored" });
    return Promise.reject(error);
})

export default clientInstance;