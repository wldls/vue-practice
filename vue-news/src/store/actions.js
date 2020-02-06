import { fetchList, fetchUserInfo, fetchItem } from '../api/index.js';

export default{
	// promise
	// FETCH_LIST({ commit }, pageName){		
	// 	return fetchList(pageName)
	// 		.then(({data}) => {
	// 			commit('SET_LIST', data);
	// 			return data;
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		})
	// },
	// FETCH_USER({ commit }, name){
	// 	return fetchUserInfo(name)
	// 		.then(res => {
	// 			commit('SET_USER', res.data);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		})
	// },
	// FETCH_ITEM({ commit }, itemId){		
	// 	return fetchItem(itemId)
	// 		.then(({data}) => {
	// 			commit('SET_ITEM', data);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		})
	// }
	////////////////////////////////////////
	// async await 적용
	async FETCH_LIST({ commit }, pageName){
		// api에서 try catch로 에러처리를 했으므로 actions에서는 하지 않음
		const response = await fetchList(pageName);
		commit('SET_LIST', response.data);
		return response;
	},
	async FETCH_USER({ commit }, name){
		try{
			const response = await fetchUserInfo(name);
			commit('SET_USER', response.data);
			return response;
		}catch(err){
			console.log(err);
		}
	},
	async FETCH_ITEM({ commit }, itemId){
		try{
			const response = await fetchItem(itemId);
			commit('SET_ITEM', response.data);
			return response;
		}catch(err){
			console.log(err);
		}
	}
}