const actions = {
	changeUser: (store, payload) => {
		store.commit('handleUser', payload);
	},
	changeListCurrent: (store, payload) => {
		store.commit('handleUser', {
			listTaskCurrent: payload,
		});
	},
	editUser: (store, payload) => {
		store.commit('handleUpdateUser', payload);
	},
	deleteUser: (store, payload) => {
		store.commit('handleDeleteUser', payload);
	},
};

export default actions;
