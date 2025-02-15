import axios from "axios";
import simpleRestDataProvider from "@refinedev/simple-rest";
import { fetchWrapper } from "./fetch-wrapper";

export const API_URL = "http://localhost:3000/books"; 


const axiosInstance = axios.create({
    baseURL: API_URL,
});


axiosInstance.interceptors.request.use(async (config) => {
    
        const response = await fetchWrapper(config.url!, {
            method: config.method || "GET",
            headers: config.headers,
            body: config.data ? JSON.stringify(config.data) : undefined,
        });
        console.log("Request Config:", config);

        return { ...config, data: response };
   
});


export const dataProvider = simpleRestDataProvider(API_URL, axiosInstance);

