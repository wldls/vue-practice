const addOneItem = (state, todoItem) => {
	const obj = {completed: false, item: todoItem};
	localStorage.setItem(todoItem, JSON.stringify(obj));	// 자바스크립트 객체를 string으로 변환해주는 api      
	state.todoItems.push(obj);
};
const removeOneItem = (state, payload) => {
	localStorage.removeItem(payload.todoItem.item);
	state.todoItems.splice(payload.index, 1);
};
const toggleOneItem = (state, payload) => {
	state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

	// 로컬스토리지 데이터 갱신
	localStorage.removeItem(payload.todoItem.item);
	localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};
const clearAllItems = (state) => {
	localStorage.clear();
	state.todoItems = [];
};

export {addOneItem, removeOneItem, toggleOneItem, clearAllItems};