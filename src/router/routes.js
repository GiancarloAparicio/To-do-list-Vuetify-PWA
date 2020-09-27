import Home from '../views/Home.vue';

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
	name: 'task.index',
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
	],
	meta: {
		public: false,
	},
};

export default [home, task];
