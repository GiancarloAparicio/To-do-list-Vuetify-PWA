const actions = {
	changeRoutes: (store, payload) => {
		store.commit('handleRoutes', payload);
	},
	addRoutes: (store, payload) => {
		store.commit('handleAddRoutes', payload);
	},
	editRoutes: (store, payload) => {
		store.commit('handleUpdateRoutes', payload);
	},
	deleteRoutes: (store, payload) => {
		store.commit('handleDeleteRoutes', payload);
	},
};
export default actions;
