/**
 * Convert a string to URl, change the spaces " " for "-"
 * @param {String} name
 * @return {String}
 */
export function stringToUrl(name) {
	return name.trim().replaceAll(' ', '-');
}

/**
 * Gets all the properties of an object (Task List), and as a second
 * parameter you can delete the All list
 * @param {Object} tasks
 * @param {Boolean} getAll
 * @return {Array<String>}
 */
export function getAllLists(tasks, getAll = true) {
	let lists = [];

	for (let task in tasks) {
		lists.push(task);
	}
	if (getAll) {
		return lists;
	}

	lists.splice(lists.indexOf('All'), 1);

	return lists;
}

/**
 * It determines if a list is empty, if the third parameter is "true"
 * the finished tasks will be considered
 * @param {Object} listTasks
 * @param {String} listName
 * @param {Boolean} getFinished
 * @return {Boolean}
 */
export function emptyList(listTasks, listName, getFinished = false) {
	if (listTasks[listName]?.list?.length) {
		let tasks = listTasks[listName].list;

		for (let index = 0; index < tasks.length; index++) {
			if (tasks[index].status === getFinished) return false;
		}
		return true;
	}
	return true;
}

/**
 * Check if the name is in Object of tasks
 * @param {Object} listsName
 * @param {String} name
 * @return {Boolean}
 */
export function nameExistList(listsName, name) {
	let lists = getAllLists(listsName);

	if (lists.filter((list) => list === name)[0] === undefined) {
		return true;
	}
	return false;
}

/**
 * Saves an image in the localStorage and returns an object with the name
 * and value of the image, dispatch is the necessary function to update the state
 * @param {object} picture
 * @param {object} dispatch
 * @param {string} localName
 * @return {object}
 */
export function savePictureToLocal(file, dispatch, localName = 'photo') {
	if (!file.type.match('image.*')) {
		return;
	}

	let reader = new FileReader();
	reader.onload = ((photo) => (event) => {
		let picture = {
			alt: photo.name,
			picture: event.target.result,
		};
		dispatch({
			photo: picture,
		});

		localStorage.setItem(localName, JSON.stringify(picture));
	})(file);

	reader.readAsDataURL(file);

	return JSON.parse(localStorage.getItem(localName));
}

/**
 * Calculate a color (red <-> green) depending on the passed parameter (0-100)
 * @param {int} percentage
 * @return {string} color
 */
export function getColorToPercentage(percentage, invert = false) {
	let value = invert ? percentage : -(percentage - 100);
	if (value < 10) {
		return 'red accent-3';
	}
	if (10 <= value && value < 20) {
		return 'red accent-2';
	}
	if (20 <= value && value < 30) {
		return 'orange accent-3';
	}
	if (30 <= value && value < 40) {
		return 'orange accent-2';
	}
	if (40 <= value && value < 50) {
		return 'amber lighten-2';
	}
	if (50 <= value && value < 60) {
		return 'lime accent-4';
	}
	if (60 <= value && value < 70) {
		return 'lime accent-2';
	}
	if (70 <= value && value < 80) {
		return 'light-green accent-2';
	}
	if (80 <= value && value < 90) {
		return 'green accent-3';
	}
	if (90 <= value && value <= 100) {
		return 'green accent-4';
	}
}

/**
 * Gets the percentage of tasks completed (true) or incomplete (false)
 *  from the total state (100%)
 * @param {object} state
 * @param {boolean} condition
 */
export function getPercentageToState(state, condition = true) {
	let total = state.tasks.All.list.length;
	let result = state.tasks.All.list.reduce((result, task) => {
		return task.status === condition ? result + 1 : result;
	}, 0);
	if (total) {
		return (100 * result) / total;
	}
	return condition ? 0 : 100;
}
