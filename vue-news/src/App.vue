<template>
  <div id="app">
    <header></header>
    <tool-bar></tool-bar>    
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus" />
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus';

export default {
  components:{
    ToolBar,
    Spinner
  },
  data(){
    return{
      loadingStatus:false
    }
  },
  methods:{    
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  },
  created(){
    console.log(process.env.VUE_APP_TITLE);
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy(){
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body{margin:0;padding:0}
a, a:visited{
  text-decoration: none;
  color:#34495e
}
a:hover{
  color:#42b883;
}
a.router-link-exact-active{
  text-decoration: underline
}
/* router transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
