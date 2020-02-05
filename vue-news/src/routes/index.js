import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '../views/CreateListView.js';
import bus from '../utils/bus';
import { store } from '../store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			redirect: '/news',
		},
		{
			// path: url 주소
			path:'/news',
			name:'news',
			// component: url 주소로 갔을 때 표시될 컴포넌트
			component: NewsView,
			beforeEnter: (to, from ,next) => {
				bus.$emit('start:spinner');
				store.dispatch('FETCH_LIST', to.name)
				.then(() => {
					// bus.$emit('end:spinner');
					next();
				})
				.catch((err) => {
					console.log(err);
				});
			}
			// component: createListView('newsView')
		},
		{
			path:'/ask',
			name:'ask',
			component: AskView,
			beforeEnter:(to, from, next) => {
				bus.$emit('start:spinner');
				store.dispatch('FETCH_LIST', to.name)
				.then(() => {
					// bus.$emit('end:spinner');
					next();
				})
				.catch((err) => {
					console.log(err);
				});
			}
			// component: createListView('AskView'),
		},
		{
			path:'/jobs',
			name:'jobs',
			component: JobsView,
			beforeEnter:(to, from, next) => {
				bus.$emit('start:spinner');
				store.dispatch('FETCH_LIST', to.name)
				.then(() => {
					// bus.$emit('end:spinner');
					next();
				})
				.catch((err) => {
					console.log(err);
				});
			}
			// component: createListView('JobsView'),
		},
		{
			path:'/user/:id',
			component:UserView,
		},
		{
			path:'/item/:id',
			component:ItemView,
		}
	]
});