<script>
// 데이터를 불러오는 로직을 컴포넌트로 분할함 -> 받아온 data는 app.vue(상위 컴포넌트)에 표현
import axios from 'axios';

export default {
	props: ['url'],
	data(){
		return{
			response: null,
			loading: true,
		}
	},
	created(){
		axios.get(this.url)
			.then(res => {
				this.response = res.data;
				this.loading = false;
			})
			.catch(err => {
				alert('[ERROR] fetching the data', err);
				console.log(err);
			})
	},
	render(){
		return this.$scopedSlots.default({
			response: this.response,
			loading: this.loading,
		})
	}
}
</script>