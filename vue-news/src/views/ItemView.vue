<template>
	<div>
		<!-- 질문 상세 정보 -->
		<section>
			<div class="user-container">
				<div>
					<i class="fas fa-user"></i>
				</div>
				<div class="user-description">
					<router-link v-bind:to="`/user/${itemList.user}`">
						{{ itemList.user }}
					</router-link>
					<p class="time">
						{{ itemList.time_ago }}						
					</p>
				</div>				
			</div>
			<h2>{{ itemList.title }}</h2>
		</section>
		<!-- //질문 상세 정보 -->
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
import { mapGetters } from 'vuex';

export default {
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