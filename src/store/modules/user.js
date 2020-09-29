const user = {
	namespaced: true,

	state: {
		user: {
			name: 'User',
			image: '',
			theme: 'light',
			listTaskCurrent: 'All',
		},
	},

	mutations: {
		handleUser: (state, payload) => {
			state.user = {
				...state.user,
				...payload,
			};
		},
	},

	actions: {
		changeUser: (store, payload) => {
			store.commit('handleUser', payload);
		},
	},

	getters: {
		getUser: (state) => {
			return state.user;
		},
	},
};

export default user;
