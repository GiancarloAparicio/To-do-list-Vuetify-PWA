import Vue from 'vue';
import Vuex from 'vuex';

import routesNavigation from './modules/routesNavigation';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		routesNavigation,
	},
});
