<template>
	<div>
		<ListItem />
	</div>
</template>

<script>
import ListItem from '../components/ListItem';
import DataFetchingMixin from '../mixins/DataFetchingMixin.js'
// import bus from '../utils/bus';

export default {
	components:{
		ListItem
	},
	mixins: [DataFetchingMixin]
	// mounted(){
	// 	bus.$emit('end:spinner');
	// }
	// created(){
	// 	bus.$emit('start:spinner');
	// 	setTimeout(() => {
	// 		this.$store.dispatch('FETCH_JOBS')
	// 			.then(() => {
	// 				bus.$emit('end:spinner');
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});

	// 	}, 3000)
	// }
}
</script>
