<template>
	<div>
		<p v-for="ask in fetchedAsk" v-bind:key="ask.id">
			<router-link v-bind:to="`/item/${ask.id}`">{{ ask.title }}</router-link>
			<small>{{ ask.time_ago }} by {{ ask.user }}</small>
		</p>
	</div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
import { mapState, mapGetters } from 'vuex';

export default {
	// data(){
	// 	return{
	// 		asks:[]
	// 	}
	// },
	computed:{
		// #4
		...mapGetters(['fetchedAsk'])
		// #3
		// ...mapGetters({
		// 	fetchedAsk: 'fetchedAsk'
		// })
		// #2
		// ...mapState({
		// 	asks: state => state.asks
		// })
		// #1
		// ask(){
		// 	return this.$store.state.asks;
		// }
	},
	created(){
		this.$store.dispatch('FETCH_ASKS');
		// fetchAskList()
		// 	.then(res => this.asks = res.data)
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	}
}
</script>

<style>

</style>