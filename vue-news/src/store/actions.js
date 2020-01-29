import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

export default{
	FETCH_NEWS({ commit }){
		fetchNewsList()
			.then(res => {
				commit('SET_NEWS', res.data);
			})
			.catch(err => {
				console.log(err);
			})  
		},
	FETCH_ASKS({ commit }){
		fetchAskList()
			.then(res => {
				commit('SET_ASKS', res.data);
			})
			.catch(err => {
				console.log(err);
			})
	},
	FETCH_JOBS({ commit }){
		fetchJobsList()
			.then(res => {
				commit('SET_JOBS', res.data);
			})
			.catch(err => {
				console.log(err);
			})
	}
}