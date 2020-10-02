<template>
	<div>
		<v-card elevation="2" shaped>
			<v-list-item two-line class="pt-4">
				<v-list-item-content>
					<v-list-item-title class="headline">
						{{ currentTask.name }}
					</v-list-item-title>
					<v-list-item-subtitle>
						{{ currentTask.create_at }}
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-divider class="mx-4"></v-divider>
			<v-list-item>
				<v-list-item-icon>
					<v-icon>mdi-clock-time-five</v-icon>
				</v-list-item-icon>
				<v-list-item-subtitle>Time limit:</v-list-item-subtitle>

				<v-progress-linear :value="time" color="green" height="25">
					<template v-slot="{ value }">
						<strong class="white-text">{{ Math.ceil(value) }}%</strong>
					</template>
				</v-progress-linear>
			</v-list-item>
		</v-card>

		<v-card class="mx-auto my-6">
			<v-card-title>
				Description
			</v-card-title>

			<v-card-text>
				<div class=" subtitle-1">Ends in: {{ currentTask.finish_at }}</div>

				<div>
					{{ currentTask.description }}
				</div>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	const data = () => ({
		time: 100,
	});

	const computed = {
		...mapGetters('listTask', ['getTasks']),
		currentTask() {
			let currentTask = this.getTasks.All.filter(
				(task) => task.id === this.$route.params.taskId
			);
			return currentTask[0];
		},
	};

	export default {
		name: 'Show',
		data,
		computed,
	};
</script>

<style scoped>
	.white-text {
		color: white;
	}
	.black-text {
		color: black;
	}
</style>
