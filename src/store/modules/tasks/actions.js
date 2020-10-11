import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const actions = {
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
		store.commit('handleAddTask', {
			...payload,
			id: `${uuidv4()}`,
			create_at: moment().format('DD-MM-YYYY HH:mm:ss'),
			status: false,
			finish_at: moment(payload.finish_at).format('DD-MM-YYYY HH:mm:ss'),
		});
	},

	editTask: (store, payload) => {
		store.commit('handleEditTask', payload);
	},
	deleteTask: (store, payload) => {
		store.commit('handleDeleteTask', payload);
	},
};

export default actions;
