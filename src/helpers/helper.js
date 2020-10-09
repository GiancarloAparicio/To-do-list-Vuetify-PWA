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
export function savePictureToLocal(picture, dispatch, localName = 'photo') {
	for (let index = 0, file; (file = picture[index]); index++) {
		if (!file.type.match('image.*')) {
			continue;
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
	}

	return JSON.parse(localStorage.getItem(localName));
}
