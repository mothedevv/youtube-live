import axios from 'axios';

//Youtube API key
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});



//SeatGeek ClientID
const CLIENT_ID = process.env.REACT_APP_SEATGEEK_CLIENT_ID
const url = 'https://api.seatgeek.com/2/venues?city=';
export default {
	getVenues: (query) => {
		console.log(url + query + `&client_id=${CLIENT_ID}`);
		return axios.get(url + query + `&client_id=${CLIENT_ID}`);
	},
	getPerformers: (query) => {
		return axios.get(url + query + `&client_id=${CLIENT_ID}`);
	},
};