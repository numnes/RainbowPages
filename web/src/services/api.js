import axios from 'axios';

const api = axios.create({
    baseURL: 'http://26.13.148.137:3333'
});

export default api;