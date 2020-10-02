<template>
	<div>
		<v-select
			block
			dense
			outlined
			v-model="select"
			:items="tasks"
			label="List task"
		/>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import { listTask } from '../store/actions/user';

	const data = () => ({
		select: 'All',
	});

	const computed = {
		...mapGetters('listTask', ['getTasks']),
		...mapGetters('user', ['getUser']),
		tasks() {
			if (this.getUser.listTaskCurrent) {
				this.select = this.getUser.listTaskCurrent;
			}
			let listTask = [];

			for (let task in this.getTasks) {
				listTask.push(task);
			}
			if (this.all) {
				return listTask;
			}

			let i = listTask.indexOf('All');
			listTask.splice(i, 1);

			return listTask;
		},
	};

	const props = {
		all: {
			default: true,
		},
	};

	const watch = {
		select() {
			if (this.select !== undefined) this.changeUser(listTask(this.select));
			return this.select;
		},
		'getUser.listTaskCurrent'() {
			this.select = this.getUser.listTaskCurrent;
		},
	};

	const methods = {
		...mapActions('user', ['changeUser']),
	};

	export default {
		name: 'Task',
		data,
		computed,
		watch,
		methods,
		props,
	};
</script>

<style scoped>
	.v-btn {
		z-index: 0 !important;
	}
</style>
