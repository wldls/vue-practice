<template>
	<div>
		<p>name : {{ userInfo.id }}</p>
		<p>karma : {{ userInfo.karma }}</p>
		<p>created : {{ userInfo.created }}</p>
	</div>
</template>

<script>
// import fetchUserInfo from '../api/index.js';
import { mapGetters } from 'vuex';

export default {
	computed:{
		// userInfo(){
		// 	return this.$store.state.user;
		// }
		...mapGetters(['userInfo'])
	},
	created(){
		const userName = this.$route.params.id;
		
		this.$store.dispatch('FETCH_USER', userName);
		// axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
	}
}
</script>

<style>

</style>