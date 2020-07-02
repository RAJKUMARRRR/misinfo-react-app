import axios from 'axios';
import {BASE_URL} from './api';


const axiosInstance = axios.create({
  baseURL: BASE_URL,
 // headers: getHeader(),
});

axiosInstance.interceptors.request.use(
  req => {
    console.log('Request:', req);
    return req;
  },
  err => {
    console.log('RequestError:', err);
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.response.use(
  res => {
    console.log('Response:', res);
    return res;
  },
  err => {
    console.log('ResponseError:', err);
    alert(err.message);
    return Promise.reject(err);
  },
);

export default axiosInstance;
