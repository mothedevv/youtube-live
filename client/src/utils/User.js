import axios from 'axios';

export default {
	login: (userData) => {
		return axios.post('/api/user/login', userData);
	},
};
