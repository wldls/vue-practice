<template>
	<div>
		<ul class="news-list">
			<li v-for="ask in fetchedAsk" v-bind:key="ask.id" class="post">
				<div class="points">
					{{ ask.points }}
				</div>
				<div>
					<p class="news-title">
						<router-link v-bind:to="`/item/${ask.id}`">
							{{ ask.title }}
						</router-link>
					</p>
					<small class="link-text">
						{{ ask.time_ago }} by 
						<router-link v-bind:to="`/users/${ask.user}`" class="link-text">
							{{ ask.user }}
						</router-link>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
import { mapGetters } from 'vuex';

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

<style scoped>
.news-list{
	margin:0;
	padding:0
}
.post{
	display:flex;
	align-items:center;
	border-bottom:1px solid #eee;
	list-style: none;
}
.points{
	display: flex;
	align-items: center;
	justify-content: center;
	width:80px;
	height:60px;
	color:#41b883
}
.news-title{
	margin:0;
}
.link-text{
	color:#828282
}
</style>