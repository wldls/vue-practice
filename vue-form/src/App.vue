<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="password" id="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data:function(){
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    submitForm:function(){
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }

      console.log(this.username, this.password);

      axios.post(url, data)
        .then(function(res){
          console.log(res);          
        })
        .catch(function(err){
          console.log(err);          
        });      
    }
  }
}
</script>

<style>

</style>