<template>
	<div>
		<ul class="news-list">
			<li v-for="job in this.$store.state.jobs" v-bind:key="job.id" class="post">
				<div class="points">
					{{ job.points || 0 }}
				</div>
				<div>
					<!-- <router-link v-bind:to="`/jobs/${job.url}`">
						{{ job.title }}
					</router-link> -->
					<p class="news-title">
						<a :href="job.url">{{ job.title }}</a>
					</p>
					<small class="link-text">
						{{ job.time_ago }}, {{ job.domain }}</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js';

export default {
	// data(){
	// 	return{
	// 		jobs:[]
	// 	}
	// },
	created(){
		this.$store.dispatch('FETCH_JOBS');
		// fetchJobsList()
		// 	.then(res => this.jobs = res.data)
		// 	.catch(err => {
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