<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="error"
          class="d-block mx-auto mt-10"
          large
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left> mdi-alert </v-icon>
          Delete task
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="red--text"> Delete task </v-card-title>

        <v-card-text>
          Are you sure you want to delete the task? After this you will not be
          able to recover your data
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined color="success" @click="cancel">
            <v-icon left> mdi-thumb-up-outline </v-icon>
            Cancel
          </v-btn>
          <v-btn outlined color="error" @click="deleteCurrentTask">
            <v-icon left> mdi-alert-decagram-outline </v-icon>
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";

const data = () => ({
  dialog: false,
});

const methods = {
  ...mapActions("listTask", ["deleteTask"]),
  deleteCurrentTask() {
    this.deleteTask(this.currentTask);
    this.dialog = false;
    this.back();
  },
  back() {
    this.$router.push({
      name: "task",
    });
  },
  cancel() {
    this.dialog = false;
  },
};

const props = ["currentTask"];

export default {
  name: "DeleteTaskButton",
  data,
  props,
  methods,
};
</script>

<style scoped>
</style>