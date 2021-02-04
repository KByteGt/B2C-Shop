import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fortnite-api.theapinetwork.com'
});

export default instance;