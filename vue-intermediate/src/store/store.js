import Vue from 'vue';
import Vuex from 'vuex';
import todoApp from './modules/todoApp';
// import * as getters from './getters';
// import * as mutations from './mutations';

Vue.use(Vuex);

// const storage = {
// 	fetch(){
// 		const arr = [];
// 		if(localStorage.length > 0){
// 			for(let i = 0; i < localStorage.length; i++){
// 				if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
// 					arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
// 				}
// 			}
// 		}
// 		return arr;
// 	}
// }

export const store = new Vuex.Store({
	modules:{
		todoApp
	}
	// state:{
	// 	todoItems:storage.fetch()
	// },
	// getters,
	// mutations
	// {
	// 	storedTodoItems(state){
	// 		return state.todoItems;
	// 	}
	// }
	// {
	// 	addOneItem(state, todoItem){
	// 		const obj = {completed: false, item: todoItem};
	// 		localStorage.setItem(todoItem, JSON.stringify(obj));	// 자바스크립트 객체를 string으로 변환해주는 api      
	// 		state.todoItems.push(obj);
	// 	},
	// 	removeOneItem(state, payload){
	// 		localStorage.removeItem(payload.todoItem.item);
	// 		state.todoItems.splice(payload.index, 1);
	// 	},
	// 	toggleOneItem(state, payload){
  //     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

	// 		// 로컬스토리지 데이터 갱신
	// 		localStorage.removeItem(payload.todoItem.item);
	// 		localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
	// 	},
	// 	clearAllItems(state){
  //     localStorage.clear();
  //     state.todoItems = [];
  //   }
	// }
});