<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  // data(){
  //   return{
  //     todoItems:[]
  //   }
  // },
  // methods:{
	// 	addOneItem(todoItem){
  //     const obj = {completed: false, item: todoItem};
  //     localStorage.setItem(todoItem, JSON.stringify(obj));	// 자바스크립트 객체를 string으로 변환해주는 api      
  //     this.todoItems.push(obj);
  //   },
  //   removeOneItem(todoItem, index){
  //     localStorage.removeItem(todoItem.item);
	// 		this.todoItems.splice(index, 1);
  //   },
  //   toggleOneItem(todoItem, index){
  //     this.todoItems[index].completed = !this.todoItems[index].completed;

	// 		// 로컬스토리지 데이터 갱신
	// 		localStorage.removeItem(todoItem.item);
	// 		localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //   },
  //   clearAllItems(){
  //     localStorage.clear();
  //     this.todoItems = [];
  //   }
  // },
  components:{
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }
}
</script>

<style>
body{
  background-color:#f6f6f6;
  text-align:center;
  font-family: 'Ubuntu', sans-serif;
}
input{
  border-style:groove;
  width:200px;
}
button{
  border-style:groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
