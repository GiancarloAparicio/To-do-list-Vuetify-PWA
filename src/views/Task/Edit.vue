<template>
	<v-row justify="center">
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
					<v-btn icon dark @click="dialog = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
					<v-toolbar-title>Create new task:</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-toolbar-items>
						<v-btn dark text> Save </v-btn>
					</v-toolbar-items>
				</v-toolbar>
				<v-form ref="form" class="px-5 py-7"> </v-form>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
	const data = () => ({
		dialog: false,
	});

	export default {
		name: 'Edit',
		data,
	};
</script>

<style></style>
