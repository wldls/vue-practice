<template>
	<div class="header">
		<router-link to="/news">News</router-link> | 
		<router-link to="/ask">Ask</router-link> | 
		<router-link to="/jobs">Jobs</router-link>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
	display:flex;
	padding:8px;
	background:#42b883;
	color:#fff;
}
.header a{margin:0 10px;color:#fff}
.header .router-link-exact-active{color:#354953}
</style>