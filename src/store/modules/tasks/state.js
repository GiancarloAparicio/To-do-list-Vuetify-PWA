import moment from 'moment';

export function getState() {
	if (
		localStorage.getItem('tasks') != 'undefined' &&
		localStorage.getItem('tasks') != '' &&
		localStorage.getItem('tasks') != null
	) {
		return JSON.parse(localStorage.getItem('tasks'));
	}
	return {
		tasks: {
			All: {
				description: 'All lists',
				id: 'a1b83137-47d0-1718-82d3-0ac2cb70216a',
				notification: true,
				create_at: moment().format('YYYY-MM-DD HH:mm:ss'),
				list: [
					{
						name: 'Homework',
						id: 'a1b83137-4720-4822-82d3-0ac2cb70216a',
						description: 'To do homework',
						create_at: moment().format('YYYY-MM-DD HH:mm:ss'),
						finish_at: '2020-12-21',
						hour_at: '05:40:00',
						list: 'Work',
						status: false,
					},
				],
			},
			Work: {
				description: 'Job List',
				notification: true,
				id: 'a1b83137-4720-4818-82d3-0ac2cb70216a',
				create_at: moment().format('YYYY-MM-DD HH:mm:ss'),
				list: [
					{
						name: 'Homework',
						id: 'a1b83137-4720-4822-82d3-0ac2cb70216a',
						description: 'To do homework',
						create_at: moment().format('YYYY-MM-DD HH:mm:ss'),
						finish_at: '2020-12-21',
						hour_at: '05:40:00',
						list: 'Work',
						status: false,
					},
				],
			},
		},
	};
}

export default getState;
