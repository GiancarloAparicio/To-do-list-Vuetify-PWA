import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user/index';
import routesNavigation from './modules/routesNavigation/index';
import tasks from './modules/tasks/index';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		routesNavigation,
		user,
		listTask: tasks,
	},
});
