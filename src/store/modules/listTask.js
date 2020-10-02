import moment from 'moment';

const listTask = {
	namespaced: true,

	state: {
		tasks: {
			All: [
				{
					name: 'Homework',
					id: 'a1b83137-4720-4822-82d3-0ac2cb70216a',
					description: 'To do homework',
					notification: false,
					create_at: moment().format('L'),
					finish_at: '2020-10-05',
					hour_at: '05:40',
				},
			],
			Work: [
				{
					name: 'Homework',
					id: 'a1b83137-4720-4822-82d3-0ac2cb70216a',
					description: 'To do homework',
					notification: false,
					create_at: moment().format('L'),
					finish_at: '2020-10-05',
					hour_at: '05:40',
				},
			],
		},
	},

	mutations: {
		handleTasks: (state, payload) => {
			state.tasks = {
				...state.tasks,
				...payload,
			};
		},

		handleCurrentListTask: (state, payload) => {
			state.tasks = {
				...state.tasks,
				[payload.currentListTask]: [
					...state.tasks[payload.currentListTask],
					payload.newTask,
				],
				All: [...state.tasks.All, payload.newTask],
			};
		},
	},

	actions: {
		changeTasks: (store, payload) => {
			store.commit('handleTasks', payload);
		},

		addNewTask: (store, payload) => {
			store.commit('handleCurrentListTask', payload);
		},
	},

	getters: {
		getTasks: (state) => {
			return state.tasks;
		},
	},
};

export default listTask;
