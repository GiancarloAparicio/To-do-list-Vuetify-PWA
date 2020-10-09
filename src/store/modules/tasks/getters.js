const getters = {
	getTasks: (state) => {
		localStorage.setItem('tasks', JSON.stringify(state));
		return state.tasks;
	},
	getAllTasks: (state) => {
		localStorage.setItem('tasks', JSON.stringify(state));
		return state.tasks.All.list;
	},
};

export default getters;
