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
      <v-card-title> Description </v-card-title>

      <v-card-text>
        <div class="subtitle-1">Ends in: {{ currentTask.finish_at }}</div>

        <div>
          {{ currentTask.description }}
        </div>
      </v-card-text>
    </v-card>

    <v-footer absolute padless>
      <v-bottom-navigation>
        <v-btn @click="back">
          <span>Back</span>

          <v-icon>mdi-backburger</v-icon>
        </v-btn>

        <Edit :task="currentTask" />

        <v-btn @click="finishTask">
          <span>Finished task</span>

          <v-icon>mdi-bookmark-check</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
    <DeleteTaskButton :currentTask="currentTask" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Edit from "./Edit";
import DeleteTaskButton from "../../components/DeleteTaskButton";

const data = () => ({
  time: 100,
});

const computed = {
  ...mapGetters("listTask", ["getTasks"]),
  currentTask() {
    let currentTask = this.getTasks.All.filter(
      (task) => task.id === this.$route.params.taskId
    );
    return currentTask[0];
  },
};

const methods = {
  ...mapActions("listTask", ["editTask"]),
  finishTask() {
    this.editTask({
      ...this.currentTask,
      status: true,
    });
    this.back();
  },
  back() {
    this.$router.push({
      name: "task",
    });
  },
};

const components = {
  Edit,
  DeleteTaskButton,
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
.white-text {
  color: white;
}
.black-text {
  color: black;
}
</style>
