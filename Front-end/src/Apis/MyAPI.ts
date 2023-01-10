import axios from "axios";
import { getToken } from "./auth"

let token = getToken()
const myAPI = axios.create({
    
    baseURL: 'http://localhost:80',
    headers: {
        Authorization: `Bearer ${token}`
    }
})

myAPI.interceptors.request.use(
    config => {
        
        if (token) {
            myAPI.defaults.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default myAPI;