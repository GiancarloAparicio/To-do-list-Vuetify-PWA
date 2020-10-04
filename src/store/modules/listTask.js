import moment from 'moment';

const listTask = {
	namespaced: true,

	state: {
		tasks: {
			All: {
				description: 'Job List',
				notification: false,
				create_at: moment().format('L'),
				list: [
					{
						name: 'Homework',
						id: 'a1b83137-4720-4822-82d3-0ac2cb70216a',
						description: 'To do homework',
						create_at: moment().format('L'),
						finish_at: '2020-10-05',
						hour_at: '05:40',
						list: 'Work',
						status: false,
					},
				],
			},
			Work: {
				description: 'Job List',
				notification: false,
				create_at: moment().format('L'),
				list: [
					{
						name: 'Homework',
						id: 'a1b83137-4720-4822-82d3-0ac2cb70216a',
						description: 'To do homework',
						create_at: moment().format('L'),
						finish_at: '2020-10-05',
						hour_at: '05:40',
						list: 'Work',
						status: false,
					},
				],
			},
		},
	},

	mutations: {
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
						...state.tasks.All.list.filter(
							(task) => task.list !== payload
						),
					],
				},
			};
		},

		handleAddTask: (state, payload) => {
			state.tasks = {
				...state.tasks,
				[payload.currentListTask]: {
					...state.tasks[payload.currentListTask],
					list: [
						...state.tasks[payload.currentListTask].list,
						payload.newTask,
					],
				},
				All: {
					...state.tasks.All,
					list: [...state.tasks.All.list, payload.newTask],
				},
			};
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
						...state.tasks.All.list.filter(
							(task) => task.id !== payload.id
						),
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
						...state.tasks.All.list.filter(
							(task) => task.id !== payload.id
						),
					],
				},
			};
		},
	},

	actions: {
		changeTasks: (store, payload) => {
			store.commit('handleListsTasks', payload);
		},
		deleteListTask: (store, payload) => {
			store.commit('deleteListTask', payload);
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
