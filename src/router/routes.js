import Home from '../views/Home/Home.vue';

const home = {
	path: '/',
	name: 'home',
	component: Home,
	meta: {
		public: true,
	},
};

const list = {
	path: '/list/:name',
	name: 'list.edit',
	component: () =>
		import(/* webpackChunkName: "about" */ '../views/List/List.vue'),
	meta: {
		public: false,
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
		},
		{
			path: 'ends',
			name: 'task.ends',
			component: () => import('../views/Task/FinishedTasks.vue'),
		},
	],
	meta: {
		public: false,
	},
};

const settings = {
	path: '/settings',
	name: 'settings',
	component: () => import('../views/Settings/Settings.vue'),
	meta: {
		public: true,
	},
};

const about = {
	path: '/about',
	name: 'about',
	component: () => import('../views/About/About.vue'),
	meta: {
		public: true,
	},
};

const path404 = {
	path: '*',
	name: '404',
	component: () => import('../views/errors/404.vue'),
	meta: {
		public: true,
	},
};

export default [home, task, settings, about, list, path404];
