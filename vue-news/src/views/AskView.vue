<template>
	<div>
		<!-- <ul class="news-list">
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
		</ul> -->
		<ListItem />
	</div>
</template>

<script>
import ListItem from '../components/ListItem';

export default {
	components:{
		ListItem,
	}
}
</script>