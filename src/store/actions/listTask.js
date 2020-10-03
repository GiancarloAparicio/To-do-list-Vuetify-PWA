import { v4 as uuidv4 } from 'uuid';

export const addNewListTask = (payload) => ({
	...payload,
});

export const addNewTaskToCurrentList = (current, task) => {
	let newTask = { ...task, id: `${uuidv4()}` };
	return { currentListTask: current, newTask };
};

export const editTaskAction = (current, task) => {
	return { currentListTask: current, task };
};
