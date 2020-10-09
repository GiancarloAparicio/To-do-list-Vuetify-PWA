const mutations = {
	handleUser: (state, payload) => {
		state.user = {
			...state.user,
			...payload,
		};
	},
	handleUpdateUser: (state, payload) => {
		state.user = {
			...state.user,
			...payload,
		};
	},
};
export default mutations;
