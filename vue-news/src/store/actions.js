import { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchItem } from '../api/index.js';

export default{
	FETCH_NEWS({ commit }){
		fetchNewsList()
			.then(res => {
				commit('SET_NEWS', res.data);
				return res;
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
	},
	FETCH_LIST({ commit }, pageName){		
		fetchList(pageName)
			.then(({data}) => {
				commit('SET_LIST', data);
			})
			.catch(err => {
				console.log(err);
			})
	},
	FETCH_USER({ commit }, name){
		fetchUserInfo(name)
			.then(res => {
				commit('SET_USER', res.data);
			})
			.catch(err => {
				console.log(err);
			})
	},
	FETCH_ITEM({ commit }, itemId){		
		fetchItem(itemId)
			.then(({data}) => {
				commit('SET_ITEM', data);
			})
			.catch(err => {
				console.log(err);
			})
	}
}