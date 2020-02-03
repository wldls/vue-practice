<template>
	<div>
		<!-- 질문 상세 정보 -->
		<section>
			<user-profile :info="itemList">
				<!-- <div slot="username">					
					{{ itemList.user }}
				</div> -->
				<router-link slot="username" :to="`/user/${itemList.user}`">{{ itemList.user }}</router-link>
				<template slot="time">{{ `Posted: ${itemList.time_ago}` }}</template>
			</user-profile>
		</section>
		<!-- //질문 상세 정보 -->
		<section>
			<h2>{{ itemList.title }}</h2>
		</section>
		<!-- 질문 댓글 -->
		<section>
			<div v-html="itemList.content"></div>
		</section>
		<!-- //질문 댓글 -->
		<strong>{{ itemList.title }}</strong>
		<p>{{ itemList.content }}</p>
	</div>	
</template>

<script>
import UserProfile from '../components/UserProfile';
import { mapGetters } from 'vuex';

export default {
	components:{
		UserProfile
	},
	computed:{
		...mapGetters(['itemList'])
	},
	created(){
		const itemID = this.$route.params.id;

		this.$store.dispatch('FETCH_ITEM', itemID);
	}
}
</script>

<style>
.user-container{
	display:flex;
	align-items:center;
	padding:0.5rem;
}
.fa-user{
	font-size:2.5rem;
}
.user-description{
	padding:8px;	
}
.user-description p{
	margin:0
}
.time{
	font-size:0.7rem;
}
</style>