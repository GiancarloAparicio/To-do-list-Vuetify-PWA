import Home from '../views/Home/Home.vue';

const home = {
	path: '/home',
	name: 'home',
	component: Home,
	meta: {
		public: true,
	},
};

const task = {
	path: '/task',
	name: 'task',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () =>
		import(/* webpackChunkName: "about" */ '../views/Task/Task.vue'),
	children: [
		{
			path: ':id',
			name: 'task.edit',
			component: () => import('../views/Task/Edit.vue'),
		},
		{
			path: ':id',
			name: 'task.show',
			component: () => import('../views/Task/Show.vue'),
			meta: {
				name: 'task',
			},
		},
	],
	meta: {
		public: false,
	},
};

const settings = {
	path: '/settings',
	name: 'settings',
	component: () =>
		import(/* webpackChunkName: "about" */ '../views/Settings/Settings.vue'),
	meta: {
		public: true,
	},
};

const about = {
	path: '/about',
	name: 'about',
	component: () =>
		import(/* webpackChunkName: "about" */ '../views/About/About.vue'),
	meta: {
		public: true,
	},
};

export default [home, task, settings, about];
