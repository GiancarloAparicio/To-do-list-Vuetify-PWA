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
      <ProgressLinear title="Time limit:" />
    </v-card>

    <v-card class="mx-auto my-6">
      <v-card-title> Description </v-card-title>

      <v-card-text>
        <div class="subtitle-1">Ends in: {{ currentTask.finish_at }}</div>

        <div>
          {{ currentTask.description }}
        </div>
      </v-card-text>
    </v-card>

    <DeleteButton
      @delete="deleteCurrentTask"
      title="Delete task"
      content=" Are you sure you want to delete the task? After this you will not be
          able to recover your data"
    />

    <v-footer absolute padless>
      <v-bottom-navigation>
        <v-btn @click="back">
          <span>Back</span>

          <v-icon>mdi-backburger</v-icon>
        </v-btn>

        <Edit :task="currentTask" />

        <v-btn @click="resetTask" v-if="currentTask.status">
          <span>Reset task</span>

          <v-icon>mdi-book-check-outline</v-icon>
        </v-btn>

        <v-btn @click="finishTask" v-else>
          <span>Finished task</span>

          <v-icon>mdi-bookmark-check</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Edit from "./Edit";
import DeleteButton from "../../components/DeleteButton";
import ProgressLinear from "../../components/ProgressLinear";

const data = () => ({
  time: 100,
});

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
  currentTask() {
    return this.$route.params.task;
  },
};

const methods = {
  ...mapActions("listTask", ["editTask", "deleteTask"]),
  finishTask(index) {
    this.editTask({
      ...this.currentTask,
      status: true,
    });
    this.back();
  },
  resetTask(index) {
    this.editTask({
      ...this.currentTask,
      status: false,
    });
    this.back();
  },
  back() {
    this.$router.push({
      name: "task",
    });
  },
  deleteCurrentTask() {
    this.deleteTask(this.currentTask);
    this.back();
  },
};

const components = {
  Edit,
  DeleteButton,
  ProgressLinear,
};

export default {
  name: "Show",
  data,
  computed,
  methods,
  components,
};
</script>

<style scoped>
</style>
