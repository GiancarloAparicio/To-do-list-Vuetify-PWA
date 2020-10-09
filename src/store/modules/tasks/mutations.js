const mutations = {
	handleListsTasks: (state, payload) => {
		state.tasks = {
			...state.tasks,
			...payload,
		};
	},

	deleteListTask: (state, payload) => {
		delete state.tasks[payload];
		state.tasks = {
			...state.tasks,
			All: {
				...state.tasks.All,
				list: [
					...state.tasks.All.list.filter((task) => task.list !== payload),
				],
			},
		};
	},
	editListTask: (state, payload) => {
		delete state.tasks[payload.old];
		state.tasks = {
			...state.tasks,
			...payload.newList,
			All: {
				...state.tasks.All,
				list: [
					...state.tasks.All.list.filter(
						(task) => task.list !== payload.old
					),
					...payload.newList[payload.newName].list,
				],
			},
		};
	},

	handleAddTask: (state, payload) => {
		state.tasks.All.list.push(payload);
		state.tasks[payload.list].list.push(payload);
	},

	handleEditTask: (state, payload) => {
		state.tasks = {
			...state.tasks,
			[payload.list]: {
				...state.tasks[payload.list],
				list: [
					...state.tasks[payload.list].list.filter(
						(task) => task.id !== payload.id
					),
					payload,
				],
			},
			All: {
				...state.tasks.All,
				list: [
					...state.tasks.All.list.filter((task) => task.id !== payload.id),
					payload,
				],
			},
		};
	},
	handleDeleteTask: (state, payload) => {
		state.tasks = {
			...state.tasks,
			[payload.list]: {
				...state.tasks[payload.list],
				list: [
					...state.tasks[payload.list].list.filter(
						(task) => task.id !== payload.id
					),
				],
			},
			All: {
				...state.tasks.All,
				list: [
					...state.tasks.All.list.filter((task) => task.id !== payload.id),
				],
			},
		};
	},
};

export default mutations;
