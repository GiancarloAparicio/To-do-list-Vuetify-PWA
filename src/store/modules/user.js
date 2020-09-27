const user = {
	namespaced: true,

	state: {
		user: {},
	},

	mutations: {
		changeUser: (state, payload) => {
			state.user = payload;
		},
	},

	actions: {
		handleUserAction: (store, payload) => {
			store.commit('changeUser', payload);
		},
	},

	getters: {
		getUser: (state) => {
			return state.user;
		},
	},
};

export default user;
