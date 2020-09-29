export const addNewListTask = (payload) => ({
	...payload,
});

export const addNewTaskToCurrentList = (current, task) => ({
	currentListTask: current,
	newTask: task,
});
