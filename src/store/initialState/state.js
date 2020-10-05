import moment from 'moment';

export function getTasks() {
	if (localStorage.getItem('tasks')) {
		return JSON.parse(localStorage.getItem('tasks'));
	}
	return {
		All: {
			description: 'All lists',
			id: 'a1b83137-47d0-1718-82d3-0ac2cb70216a',
			notification: true,
			create_at: moment().format('L'),
			list: [
				{
					name: 'Homework',
					id: 'a1b83137-4720-4822-82d3-0ac2cb70216a',
					description: 'To do homework',
					create_at: moment().format('L'),
					finish_at: '2020-10-05',
					hour_at: '05:40',
					list: 'Work',
					status: false,
				},
			],
		},
		Work: {
			description: 'Job List',
			notification: true,
			id: 'a1b83137-4720-4818-82d3-0ac2cb70216a',
			create_at: moment().format('L'),
			list: [
				{
					name: 'Homework',
					id: 'a1b83137-4720-4822-82d3-0ac2cb70216a',
					description: 'To do homework',
					create_at: moment().format('L'),
					finish_at: '2020-10-05',
					hour_at: '05:40',
					list: 'Work',
					status: false,
				},
			],
		},
	};
}
