import axios from 'axios';

//need to hide API key with secret.
const API_KEY = '';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});
