import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://aircall-backend.onrender.com/',
  timeout: 15000,
});

export default instance;
