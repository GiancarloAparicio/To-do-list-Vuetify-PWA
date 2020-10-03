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
					list: 'Work',
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
					list: 'Work',
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

		handleAddTask: (state, payload) => {
			state.tasks = {
				...state.tasks,
				[payload.currentListTask]: [
					...state.tasks[payload.currentListTask],
					payload.newTask,
				],
				All: [...state.tasks.All, payload.newTask],
			};
		},

		handleEditTask: (state, payload) => {
			state.tasks = {
				...state.tasks,
				[payload.currentListTask]: [
					...state.tasks[payload.currentListTask].filter(
						(task) => task.id !== payload.task.id
					),
					payload.task,
				],
				All: [
					...state.tasks.All.filter((task) => task.id !== payload.task.id),
					payload.task,
				],
			};
		},
		handleDeleteTask: (state, payload) => {
			state.tasks = {
				...state.tasks,
				[payload.list]: [
					...state.tasks[payload.list].filter(
						(task) => task.id !== payload.id
					),
				],
				All: [...state.tasks.All.filter((task) => task.id !== payload.id)],
			};
		},
	},

	actions: {
		changeTasks: (store, payload) => {
			store.commit('handleTasks', payload);
		},

		addNewTask: (store, payload) => {
			store.commit('handleAddTask', payload);
		},

		editTask: (store, payload) => {
			store.commit('handleEditTask', payload);
		},
		deleteTask: (store, payload) => {
			store.commit('handleDeleteTask', payload);
		},
	},

	getters: {
		getTasks: (state) => {
			return state.tasks;
		},
	},
};

export default listTask;
