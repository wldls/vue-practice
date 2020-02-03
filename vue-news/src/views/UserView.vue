<template>
	<div>
		<user-profile :info="userInfo">
			<div slot="username">{{ userInfo.id }}</div>
			<span slot="time">{{ `Joined ${userInfo.created}` }}, </span>
			<span slot="karma">{{ userInfo.karma }}</span>
		</user-profile>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile'

export default {	
	components:{	
		UserProfile
	},
	computed:{
		...mapGetters(['userInfo'])
		// itemList(){
		// 	return this.$store.state.user;
		// }
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