const state = {
	user: {
		photo: JSON.parse(localStorage.getItem('photo')) || {},
		name: localStorage.getItem('name') || 'User',
		theme: localStorage.getItem('theme') || 'light',
		listTaskCurrent: 'All',
		notifications: JSON.parse(localStorage.getItem('notifications')) || false,
	},
};

export default state;
