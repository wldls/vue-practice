<template>
	<div>
		<p v-for="item in this.$store.state.news" v-bind:key="item.id">
			<a v-bind:href="item.url">{{ item.title }}</a>
			<small>{{ item.time_ago }} by {{ item.user }}</small>
		</p>
	</div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';

export default {
	// data(){
	// 	return{
	// 		users:[]
	// 	}
	// },
	created(){
		this.$store.dispatch('FETCH_NEWS');
		// fetchNewsList()
		// 	.then(res => this.users = res.data)
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
	}
}
</script>

<style>

</style>