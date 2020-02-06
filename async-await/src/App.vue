<template>
  <div>
    <button @click="loginUser1">login</button>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      items:[]
    }
  },
  methods: {
    loginUser(){
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => {
          if(res.data.id === 1){
            console.log('사용자가 인증되었습니다.');
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(res => {
                this.items = res.data;
              }) 
              .catch(err => console.log(err))
          }
        })
        .catch(err => console.log(err));
    },
    async loginUser1(){
      try{
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');

        if(response.data.id === 1){
          console.log('사용자가 인증되었습니다.');
          var list = await axios.get('https://jsonplaceholder.typicode.com/todos');

          this.items = list.data;
        }
      }catch(err){
        // 공통 에러 처리는 따로 파일로 export하여 관리하는것이 좋다.
        // handleException(status);
        console.log(err);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
