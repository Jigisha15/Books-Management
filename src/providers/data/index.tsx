import simpleRestDataProvider from "@refinedev/simple-rest";
import axios from "axios";

export const API_URL = "http://localhost:3000/books";

const axiosInstance = axios.create({baseURL: API_URL});

axiosInstance.interceptors.request.use((config) => {return config});

export const dataProvider = simpleRestDataProvider(API_URL, axiosInstance);
