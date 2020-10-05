import { getTasks } from '../initialState/state';

const listTask = {
	namespaced: true,

	state: {
		tasks: getTasks(),
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
		editListTask: (store, payload) => {
			store.commit('editListTask', payload);
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
			localStorage.setItem('tasks', JSON.stringify(state.tasks));
			return state.tasks;
		},
	},
};

export default listTask;
