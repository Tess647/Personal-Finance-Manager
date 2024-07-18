// src/utils/axiosConfig.js
import axios from 'axios';

// Create an Axios instance
const instance = axios.create({
  baseURL: 'http://https://chremeta-version-2-b5288e3a68e3.herokuapp.com//api/v1', // Your API base URL
});

// Add a request interceptor to include the token in headers
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
