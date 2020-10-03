const routesNavigation = {
	namespaced: true,

	state: {
		routes: [
			{
				name: 'home',
				path: './',
				icon: 'mdi-home',
			},
			{
				name: 'task',
				path: './task',
				icon: 'mdi-puzzle-edit',
			},
			{
				name: 'settings',
				path: './settings',
				icon: 'mdi-dialpad',
			},
			{
				name: 'about',
				path: './about',
				icon: 'mdi-message-text',
			},
		],
	},

	mutations: {
		handleRoutes: (state, payload) => {
			state.routes = payload;
		},
	},

	actions: {
		changeRoutes: (store, payload) => {
			store.commit('handleRoutes', payload);
		},
	},

	getters: {
		getRoutes: (state) => {
			return state.routes;
		},
	},
};

export default routesNavigation;
