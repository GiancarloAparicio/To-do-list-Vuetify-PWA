<template>
	<div class="mt-5">
		<router-view v-if="isRouteChildren" />

		<div v-else>
			<ChooseListTask />

			<v-container>
				<v-alert
					text
					dense
					color="teal"
					icon="mdi-clock-fast"
					border="left"
					v-if="emptyList"
				>
					Sorry, the list you choose doesn't have any assigned tasks :(
					<br />
					Try again...?
				</v-alert>

				<v-alert
					v-else
					@click="getTask(task)"
					border="right"
					:key="index"
					v-for="(task, index) in getTasks[this.getUser.listTaskCurrent]"
					dense
					:type="getStatus(task.finish_at)"
				>
					{{ task.name }}
				</v-alert>
			</v-container>
			<ButtonPlus />
		</div>
	</div>
</template>

<script>
	import ChooseListTask from '../../partials/ChooseListTask';
	import ButtonPlus from '../../partials/ButtonPlus';
	import moment from 'moment';
	import { mapGetters } from 'vuex';

	const components = {
		ChooseListTask,
		ButtonPlus,
	};

	const computed = {
		...mapGetters('listTask', ['getTasks']),
		...mapGetters('user', ['getUser']),
		emptyList() {
			if (this.getTasks[this.getUser.listTaskCurrent][0]) {
				return false;
			}
			return true;
		},
		isRouteChildren() {
			if (this.$route.params.id) {
				return true;
			}
			return false;
		},
	};

	const methods = {
		getStatus(time) {
			let daysLeft = -moment(new Date()).diff(time, 'days');
			if (daysLeft <= 2) return 'error';
			if (2 <= daysLeft && daysLeft <= 7) return 'info';
			return 'success';
		},
		getTask(task) {
			console.log(task);
			this.$router.push({
				name: 'task.show',
				params: { id: task.name.replaceAll(' ', '-'), taskId: task.id },
			});
		},
	};

	export default {
		name: 'Task',
		components,
		computed,
		methods,
	};
</script>
