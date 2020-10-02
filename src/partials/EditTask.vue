<template>
	<v-dialog
		v-model="dialog"
		fullscreen
		hide-overlay
		transition="dialog-bottom-transition"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-btn v-bind="attrs" v-on="on">
				<span>Edit</span>

				<v-icon>mdi-pencil</v-icon>
			</v-btn>
		</template>

		<v-card>
			<v-toolbar dark color="primary">
				<v-btn icon dark @click="closeForm">
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-toolbar-title>Edit current task:</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-toolbar-items>
					<v-btn dark text @click="updateTask"> Update </v-btn>
				</v-toolbar-items>
			</v-toolbar>
			<v-form ref="form" class="px-5 py-7">
				<v-container>
					<v-row>
						<v-col cols="5" sm="5">
							<v-toolbar-title>Choose list:</v-toolbar-title>
						</v-col>
						<v-col cols="6" sm="6">
							<ChooseListTask :all="false" />
						</v-col>
					</v-row>
				</v-container>
				<v-text-field
					outlined
					v-model="name"
					label="Name Task:"
					required
					:rules="inputRules"
					append-icon="mdi-pencil"
				/>

				<v-textarea
					required
					:rules="inputRules"
					outlined
					label="Description Task:"
					height="100px"
					append-icon="mdi-comment-text-outline"
					v-model="description"
				/>

				<DatePicker @chooseDate="chooseDate" />

				<HourPicker @chooseHour="chooseHour" />
			</v-form>
		</v-card>
	</v-dialog>
</template>

<script>
	import ChooseListTask from './ChooseListTask';
	import DatePicker from '../components/DatePicker';
	import HourPicker from '../components/HourPicker';

	const data = () => ({
		dialog: false,
		name: '',
		description: '',
		date: null,
		hour: null,
		inputRules: [(v) => !!v || 'Is required'],
	});

	const methods = {
		closeForm() {
			this.$refs.form.reset();
			this.$refs.form.resetValidation();
			this.dialog = false;
		},
		chooseDate(date) {
			this.date = date;
		},
		chooseHour(hour) {
			this.hour = hour;
		},
		resetForm() {
			this.$refs.form.reset();
			this.dialog = false;

			this.changeUser({
				listTaskCurrent: this.getUser.listTaskCurrent,
			});
		},
		resetValidation() {
			this.$refs.form.resetValidation();
			this.dialog = false;
		},
		updateTask() {
			console.log('edit');
			console.log(this.task);
		},
	};

	const props = ['task'];

	const components = {
		ChooseListTask,
		DatePicker,
		HourPicker,
	};

	export default {
		name: 'Edit',
		data,
		methods,
		props,
		components,
	};
</script>

<style></style>
