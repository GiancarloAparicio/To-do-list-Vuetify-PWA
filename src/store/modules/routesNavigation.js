const routesNavigation = {
	namespaced: true,

	state: {
		routes: [
			{
				name: 'home',
				path: './home',
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
		changeRoutes: (state, payload) => {
			state.routes = payload;
		},
	},

	actions: {
		handleRoutesAction: (store, payload) => {
			store.commit('changeRoutes', payload);
		},
	},

	getters: {
		getRoutes: (state) => {
			return state.routes;
		},
	},
};

export default routesNavigation;
