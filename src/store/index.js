import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import routesNavigation from './modules/routesNavigation';
import listTask from './modules/listTask';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		routesNavigation,
		user,
		listTask,
	},
});
