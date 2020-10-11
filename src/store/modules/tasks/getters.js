import { getPercentageToState } from '../../../helpers/helper';

const getters = {
	getTasks: (state) => {
		localStorage.setItem('tasks', JSON.stringify(state));
		return state.tasks;
	},
	getAllTasks: (state) => {
		localStorage.setItem('tasks', JSON.stringify(state));
		return state.tasks.All.list;
	},
	getPercentageCompleted: (state) => {
		return getPercentageToState(state);
	},
	getPercentageIncomplete: (state) => {
		return getPercentageToState(state, false);
	},
	getLastTask: (state) => {
		let total = state.tasks.All.list.length;
		if (total < 3) {
			return state.tasks.All.list;
		}
		return state.tasks.All.list.slice(total - 3, total);
	},
};

export default getters;
