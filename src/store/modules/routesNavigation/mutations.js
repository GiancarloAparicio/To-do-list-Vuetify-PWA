const mutations = {
	handleRoutes: (state, payload) => {
		state.routes = payload;
	},
	handleAddRoutes: (state, payload) => {
		state.routes = {
			...state.routes,
			...payload,
		};
	},
	handleUpdateRoutes: (state, payload) => {
		state.routes = {
			...state.routes,
			...payload,
		};
	},
	handleDeleteRoutes: (state, payload) => {
		state.routes = {
			...state.routes,
			...payload,
		};
	},
};
export default mutations;
